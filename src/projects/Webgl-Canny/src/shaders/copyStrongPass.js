import { ShaderMaterial, Uniform, Vector2 } from 'three';
import { Pass } from 'postprocessing';
import { copyStrongShader } from './shaders';

let _dims;

class CopyStrongShadermaterial extends ShaderMaterial {

    constructor ( dims ) {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                dims: new Uniform(new Vector2())
            },

            fragmentShader: copyStrongShader.fragmentShader,
            vertexShader: copyStrongShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
        
        _dims = dims;
    }
}

export class CopyStrongPass extends Pass {

    constructor ( dims ) {
        super("CopyStrongPass");
        this.fullscreenMaterial = new CopyStrongShadermaterial(dims)
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        const material = this.fullscreenMaterial;
        material.uniforms[ 'tDiffuse' ].value = inputBuffer ? inputBuffer.texture : null;
        material.uniforms[ 'dims' ].value = _dims;

        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(this.scene, this.camera);

    }

}