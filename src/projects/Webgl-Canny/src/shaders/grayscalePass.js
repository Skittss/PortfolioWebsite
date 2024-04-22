import { ShaderMaterial, Uniform, Vector3 } from 'three';
import { Pass } from 'postprocessing';
import { GrayscaleShader } from './shaders';

let _weights;

class GrayscaleShaderMaterial extends ShaderMaterial {

    constructor ( weights ) {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                weights: new Uniform(new Vector3())
            },

            fragmentShader: GrayscaleShader.fragmentShader,
            vertexShader: GrayscaleShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
        
        _weights = weights;
    }
}

export class GrayscalePass extends Pass {
    constructor(weights) {
        super("GrayscalePass")
        this.fullscreenMaterial = new GrayscaleShaderMaterial(weights);
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        const material = this.fullscreenMaterial;
        material.uniforms[ 'tDiffuse' ].value = inputBuffer ? inputBuffer.texture : null;
        material.uniforms[ 'weights' ].value = _weights

        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(this.scene, this.camera);

    }
}