import { ShaderMaterial, UniformsUtils, WebGLRenderTarget } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { copyShader, copyStrongShader, dilationShader, hysteresisCombineShader } from './shaders';

class HysteresisPass extends Pass {

    constructor ( tolerance, iterations, renderTarget, dims ) {

        super();

        this.iterations = iterations;

        if (iterations == 0) this.initCopyShader();
        this.initDilationShader(dims, tolerance);
        this.initHysteresisShader();

    }

    render( renderer, writeBuffer, readBuffer) {

        this.intermediateRt = writeBuffer.clone();

        if (this.iterations == 0) {
            
            this.copyUniforms[ 'tDiffuse' ].value = readBuffer.texture;

            renderer.setRenderTarget(null);
            this.copyFsQuad.render(renderer);

        } else {

            this.hysUniforms[ 'tDiffuse' ].value = readBuffer.texture;

            for (let i = 0; i < this.iterations; i++) {

                this.uniforms[ 'tDiffuse' ].value = i == 0 ? readBuffer.texture : writeBuffer.texture;
    
                renderer.setRenderTarget(this.intermediateRt);
                if (this.clear) renderer.clear();
                this.fsQuad.render(renderer);

                this.hysUniforms[ 'tDilate' ].value = this.intermediateRt.texture;

                if ( i == this.iterations - 1  && this.renderToScreen) {
    
                    renderer.setRenderTarget(null);
                    this.hysFsQuad.render(renderer);
    
                } else {
    
                    renderer.setRenderTarget(writeBuffer);
                    if (this.clear) renderer.clear();
                    this.hysFsQuad.render(renderer);
    
                }
            }
        }

        this.intermediateRt.dispose();
        delete this.intermediateRt;
    }

    initCopyShader() {

        const cpyShader = copyShader;

        this.copyUniforms = UniformsUtils.clone( cpyShader.uniforms );

        this.copyMaterial = new ShaderMaterial({

            uniforms: this.copyUniforms,
            vertexShader: cpyShader.vertexShader,
            fragmentShader: cpyShader.fragmentShader

        })

        this.copyFsQuad = new FullScreenQuad(this.copyMaterial);

    }

    initDilationShader(dims, tolerance) {

        const shader = dilationShader;

        this.uniforms = UniformsUtils.clone( shader.uniforms );
        
        this.material = new ShaderMaterial({

            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        
        });

        if (dims !== undefined) this.uniforms.dims.value = dims;
        if (tolerance !== undefined) this.uniforms.tolerance.value = tolerance;

        this.fsQuad = new FullScreenQuad(this.material);
    }

    initHysteresisShader() {
        const hysShader = hysteresisCombineShader;

        this.hysUniforms = UniformsUtils.clone( hysShader.uniforms );

        this.hysMaterial = new ShaderMaterial({

            uniforms: this.hysUniforms,
            vertexShader: hysShader.vertexShader,
            fragmentShader: hysShader.fragmentShader
            
        })

        this.hysFsQuad = new FullScreenQuad(this.hysMaterial);
    }

}

export default HysteresisPass;