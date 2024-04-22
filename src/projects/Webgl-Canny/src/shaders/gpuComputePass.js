import { ShaderMaterial, Uniform } from 'three';
import { Pass } from 'postprocessing';
import { normalizeShader, thresholdShader } from './shaders';

let _thresh_max, _thresh_high, _thresh_low;
class ThresholdShaderMaterial extends ShaderMaterial {

    constructor ( max, high, low ) {
        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                max: new Uniform(0),
                high: new Uniform(0),
                low: new Uniform(0),
            },

            fragmentShader: thresholdShader.fragmentShader,
            vertexShader: thresholdShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
        
        _thresh_max = max;
        _thresh_high = high;
        _thresh_low = low;
    }
    
}

class NormShaderMaterial extends ShaderMaterial {

    constructor () {
        super({
            type: "CustomMaterial",
            uniforms: {
                tDiffuse: new Uniform(null),
                max: new Uniform(0)
            },

            fragmentShader: normalizeShader.fragmentShader,
            vertexShader: normalizeShader.vertexShader,
            toneMapped: false,
            depthWrite: false,
            depthTest: false
        });
    }
    
}

// Combines passes for Sobel operator onwards due to dependency on calculated information
export class GpuComputePass extends Pass {

    constructor ( sobelParams, nmsParams, dim, doNMS, threshold ) {
        super("GpuComputePass");

        this.doNMS = doNMS;
        this.threshold = threshold;

        this._normShaderMaterial = new NormShaderMaterial();
        if (threshold) this._thresholdShaderMaterial = new ThresholdShaderMaterial();
        
        this.dims = dim;

        this.sobelGpuCompute = sobelParams.gpuCompute;
        this.magnitudeVariable = sobelParams.magnitudeVariable;
        this.magnitudeUniforms = sobelParams.magnitudeUniforms;
        this.argumentVariable = sobelParams.argumentVariable;
        this.argumentUniforms = sobelParams.argumentUniforms;

        if (doNMS) {
            this.nmsGpuCompute = nmsParams.nmsGpuCompute;
            this.nmsVariable = nmsParams.nmsVariable;
            this.nmsUniforms = nmsParams.nmsUniforms;
        }
    }

    render( renderer, inputBuffer, outputBuffer, deltaTime, stencilTest ) {

        // Compute gradient magnitudes and angles
        this.magnitudeUniforms[ 'tDiffuse' ].value = inputBuffer.texture;
        if ( this.doNMS ) this.argumentUniforms[ 'tDiffuse' ].value = inputBuffer.texture;

        this.sobelGpuCompute.compute();

        // Pass in shader uniforms depending on the process shader.
        let renderTarget;
        if ( this.doNMS ) {
            this.nmsUniforms[ 'tMags' ].value = this.sobelGpuCompute.getCurrentRenderTarget( this.magnitudeVariable ).texture;
            this.nmsUniforms[ 'tArgs' ].value = this.sobelGpuCompute.getCurrentRenderTarget( this.argumentVariable ).texture;
            this.nmsUniforms[ 'dim' ].value = this.dims;
            this.nmsGpuCompute.compute();

            renderTarget = this.nmsGpuCompute.getCurrentRenderTarget( this.nmsVariable )

        } else {
            renderTarget = this.sobelGpuCompute.getCurrentRenderTarget( this.magnitudeVariable )
        }
        
        // Calculate the max value uniform for the normalize shader.

        let read = new Float32Array( 4 * this.dims[0] * this.dims[1]);
        renderer.readRenderTargetPixels(renderTarget, 0, 0, this.dims[0], this.dims[1], read);

        // O(N) CPU bound search for max
        let max = 0.0;
        for (let i = 0; i < read.length; i+=4) {
            if (read[i] > max) max = read[i];
        }
        
        // Render norm pass in the effects chain.
        if ( this.renderToScreen && !this.threshold ) {
            this.fullscreenMaterial = this._normShaderMaterial;
            const normMaterial = this.fullscreenMaterial;
            normMaterial.uniforms[ 'tDiffuse' ].value = renderTarget.texture;
            normMaterial.uniforms[ 'max' ].value = Math.max(max, 0);

            renderer.setRenderTarget(this.renderToScreen ? null : inputBuffer);
            renderer.render(this.scene, this.camera);
        }

        // Render threshold pass in the effects chain.
        if ( this.threshold ) {
            
            let hi = this.threshold.high * max;

            this.fullscreenMaterial = this._thresholdShaderMaterial;
            const threshMaterial = this.fullscreenMaterial;
            
            threshMaterial.uniforms[ 'tDiffuse' ].value = renderTarget.texture;
            threshMaterial.uniforms[ 'max' ].value = max;
            threshMaterial.uniforms[ 'high' ].value = hi;
            threshMaterial.uniforms[ 'low' ].value = this.threshold.low * hi;

            renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
            renderer.render(this.scene, this.camera);    
        }
    }
}