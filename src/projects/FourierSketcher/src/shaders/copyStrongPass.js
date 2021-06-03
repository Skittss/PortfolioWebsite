import { ShaderMaterial, UniformsUtils } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { copyShader, copyStrongShader } from './shaders';

class CopyStrongPass extends Pass {

    constructor ( dims ) {

        super();

        this.initCopyShader();

        if (dims !== null) this.copyUniforms.dims.value = dims;

    }

    render( renderer, writeBuffer, readBuffer ) {

        this.copyUniforms[ 'tDiffuse' ].value = readBuffer.texture;

        if ( this.renderToScreen ) { 
            
            renderer.setRenderTarget(null);
            this.copyFsQuad.render(renderer);

        } else {

            renderer.setRenderTarget(writeBuffer);
            if (this.clear) renderer.clear();
            this.copyFsQuad.render(renderer);

        }

    }

    initCopyShader() {

        const cpyShader = copyStrongShader;

        this.copyUniforms = UniformsUtils.clone( cpyShader.uniforms );

        this.copyMaterial = new ShaderMaterial({

            uniforms: this.copyUniforms,
            vertexShader: cpyShader.vertexShader,
            fragmentShader: cpyShader.fragmentShader

        })

        this.copyFsQuad = new FullScreenQuad(this.copyMaterial);

    }
}

export default CopyStrongPass;