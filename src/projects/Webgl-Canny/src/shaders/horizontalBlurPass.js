import { ShaderMaterial, Uniform } from 'three';
import { Pass } from 'postprocessing';
import { hGaussianBlur } from './shaders';

let _kernel, _kernelSize, _hRes;

class HorizontalBlurShaderMaterial extends ShaderMaterial {

    constructor ( kernel, kernelSize, hRes ) {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                kernelSize: new Uniform(0),
                kernel: new Uniform([0]),
                hRes: new Uniform(0)
            },

            fragmentShader: hGaussianBlur.fragmentShader,
            vertexShader: hGaussianBlur.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
        
        _kernel = kernel;
        _kernelSize = kernelSize;
        _hRes = hRes;
    }
}

export class HorizontalBlurPass extends Pass {

    constructor ( kernel, kernelSize, hRes ) {
        super("HorizontalBlurPass");
        this.fullscreenMaterial = new HorizontalBlurShaderMaterial(kernel, kernelSize, hRes)
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        const material = this.fullscreenMaterial;
        material.uniforms[ 'tDiffuse' ].value = inputBuffer ? inputBuffer.texture : null;
        material.uniforms[ 'kernel' ].value = _kernel;
        material.uniforms[ 'kernelSize' ].value = _kernelSize;
        material.uniforms[ 'hRes' ].value = _hRes;

        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(this.scene, this.camera);

    }

}