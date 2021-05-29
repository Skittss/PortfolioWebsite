import { ShaderMaterial, UniformsUtils } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { GrayscaleShader } from './shaders';

class GrayscalePass extends Pass {

    constructor ( weights ) {

        super();

        const shader = GrayscaleShader;

        this.uniforms = UniformsUtils.clone( shader.uniforms );
        
        this.material = new ShaderMaterial({

            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        
        })

        if (weights !== undefined) this.uniforms.weights.value = weights;

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

export default GrayscalePass;