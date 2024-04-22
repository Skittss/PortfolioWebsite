import { ShaderMaterial, Uniform } from 'three';
import { Pass } from 'postprocessing';
import { vGaussianBlur } from './shaders';

let _kernel, _kernelSize, _vRes;

class VerticalBlurShaderMaterial extends ShaderMaterial {

    constructor ( kernel, kernelSize, vRes ) {

        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                kernelSize: new Uniform(0),
                kernel: new Uniform([0]),
                vRes: new Uniform(0)
            },

            fragmentShader: vGaussianBlur.fragmentShader,
            vertexShader: vGaussianBlur.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
        
        _kernel = kernel;
        _kernelSize = kernelSize;
        _vRes = vRes;
    }
}

export class VerticalBlurPass extends Pass {

    constructor ( kernel, kernelSize, hRes ) {
        super("VerticalBlurPass");
        this.fullscreenMaterial = new VerticalBlurShaderMaterial(kernel, kernelSize, hRes)
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        const material = this.fullscreenMaterial;
        material.uniforms[ 'tDiffuse' ].value = inputBuffer ? inputBuffer.texture : null;
        material.uniforms[ 'kernel' ].value = _kernel;
        material.uniforms[ 'kernelSize' ].value = _kernelSize;
        material.uniforms[ 'vRes' ].value = _vRes;

        renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
        renderer.render(this.scene, this.camera);

    }

}