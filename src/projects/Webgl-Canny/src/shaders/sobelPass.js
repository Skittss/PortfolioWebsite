import { ShaderMaterial, UniformsUtils } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { sobelShader } from './shaders';

class SobelPass extends Pass {

    constructor ( gx, gy, dim ) {

        super();

        const shader = sobelShader;

        this.uniforms = UniformsUtils.clone( shader.uniforms );
        
        this.material = new ShaderMaterial({

            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        
        });

        if (gx !== undefined) this.uniforms.GX.value = gx;
        if (gy !== undefined) this.uniforms.GY.value = gy;
        if (dim !== undefined) this.uniforms.dim.value = dim;

        this.fsQuad = new FullScreenQuad(this.material);

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

export default SobelPass;