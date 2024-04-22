import { ShaderMaterial, Uniform, Vector2 } from 'three';
import { Pass } from 'postprocessing';
import { sobelShader } from './shaders';

let _gx, _gy, _dim;

class SobelShaderMaterial extends ShaderMaterial {

    constructor ( gx, gy, dim ) {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                gx: new Uniform(0),
                gy: new Uniform(0),
                dim: new Uniform(new Vector2()),
            },

            fragmentShader: sobelShader.fragmentShader,
            vertexShader: sobelShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
        
        _gx = gx;
        _gy = gy;
        _dim = dim;
    }
}

export class SobelPass extends Pass {

    constructor ( gx, gy, dim ) {
        super("SobelPass");
        this.fullscreenMaterial = new SobelShaderMaterial(gx, gy, dim)
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        const material = this.fullscreenMaterial;
        material.uniforms[ 'tDiffuse' ].value = inputBuffer ? inputBuffer.texture : null;
        material.uniforms[ 'gx' ].value = _gx;
        material.uniforms[ 'gy' ].value = _gy;
        material.uniforms[ 'dim' ].value = _dim;

        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(this.scene, this.camera);

    }

}