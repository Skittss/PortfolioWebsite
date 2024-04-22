import { ShaderMaterial, Uniform, Vector2 } from 'three';
import { Pass } from 'postprocessing';
import { copyShader, dilationShader, hysteresisCombineShader } from './shaders';

class CopyShaderMaterial extends ShaderMaterial {

    constructor () {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null)
            },

            fragmentShader: copyShader.fragmentShader,
            vertexShader: copyShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
    }
}

class DilationShaderMaterial extends ShaderMaterial {

    constructor ( dims, tolerance ) {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                dims: new Uniform(dims),
                tolerance: new Uniform(tolerance)
            },

            fragmentShader: dilationShader.fragmentShader,
            vertexShader: dilationShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
    }
}

class HysteresisShaderMaterial extends ShaderMaterial {

    constructor() {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDilate: new Uniform(null),
                tDiffuse: new Uniform(null)
            },

            fragmentShader: hysteresisCombineShader.fragmentShader,
            vertexShader: hysteresisCombineShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
    }
}

export class HysteresisPass extends Pass {

    constructor ( tolerance, iterations, renderTarget, dims ) {
        super("HysteresisPass");

        this.iterations = iterations;

        if (iterations == 0) this.copyMaterial = new CopyShaderMaterial();
        this.dilationMaterial = new DilationShaderMaterial(dims, tolerance);
        this.hysMaterial = new HysteresisShaderMaterial();
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        // This is very inefficient... too bad!
        this.intermediateRt = outputBuffer.clone();

        if (this.iterations == 0) {

            this.fullscreenMaterial = this.copyMaterial;
            const copyMaterial = this.fullscreenMaterial;
            copyMaterial.uniforms[ 'tDiffuse' ].value = inputBuffer.texture;
            
            renderer.setRenderTarget(null);
            renderer.render(this.scene, this.camera);

        } else {

            this.hysMaterial.uniforms[ 'tDiffuse' ].value = inputBuffer.texture;

            for (let i = 0; i < this.iterations; i++) {
                this.dilationMaterial.uniforms[ 'tDiffuse' ].value = i == 0 ? inputBuffer.texture : outputBuffer.texture;
    
                this.fullscreenMaterial = this.dilationMaterial;
                renderer.setRenderTarget(this.intermediateRt);
                if (this.clear) renderer.clear();
                renderer.render(this.scene, this.camera);

                this.hysMaterial.uniforms[ 'tDilate' ].value = this.intermediateRt.texture;

                this.fullscreenMaterial = this.hysMaterial;
                if ( i == this.iterations - 1  && this.renderToScreen ) {
    
                    renderer.setRenderTarget(null);
                    renderer.render(this.scene, this.camera);
    
                } else {
    
                    renderer.setRenderTarget(outputBuffer);
                    renderer.render(this.scene, this.camera);
    
                }
            }
        }

        this.intermediateRt.dispose();
        delete this.intermediateRt;
    }
}