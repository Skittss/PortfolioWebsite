import { ShaderMaterial, UniformsUtils } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { vGaussianBlur } from './shaders';

class HorizontalBlurPass extends Pass {

    constructor ( kernel, kernelSize, height ) {

        super();

        const shader = vGaussianBlur;

        this.uniforms = UniformsUtils.clone( shader.uniforms );
        
        this.material = new ShaderMaterial({

            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        
        })

        if (kernel !== undefined) this.uniforms.kernel.value = kernel;
        if (kernelSize !== undefined) this.uniforms.kernelSize.value = kernelSize;
        if (height !== undefined) this.uniforms.vRes.value = height;

        this.fsQuad = new FullScreenQuad(this.material)

    }

    render( renderer, writeBuffer, readBuffer) {

        this.uniforms[ 'tDiffuse' ].value = readBuffer.texture;

        if ( this.renderToScreen ) { 
            
            renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);

        } else {

            renderer.setRenderTarget(writeBuffer);
            if (this.clear) renderer.clear();
            this.fsQuad.render(renderer);

        }

    }

}

export default HorizontalBlurPass;