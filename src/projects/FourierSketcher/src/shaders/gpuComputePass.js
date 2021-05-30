import { ShaderMaterial, UniformsUtils } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { normalizeShader, gradientMagnitudeFragShader, gradientArgumentFragShader, nmsFragShader, thresholdShader } from './shaders';
import { GPUComputationRenderer } from 'three/examples/jsm//misc/GPUComputationRenderer';


let fillTextureWithZeros = (texture) => {
    const arr = texture.image.data;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
}

// Combines passes for Sobel operator onwards due to dependency on calculated information
class GpuComputePass extends Pass {

    constructor ( gx, gy, dim, gl, doNMS, threshold ) {

        super();

        this.doNMS = doNMS;
        this.threshold = threshold;

        this.dims = dim;
    
        // First compute information about the image gradient (Magnitudes & Angles)
        this.initComputeRenderer( gx, gy, gl );

        if (doNMS) this.initNMSComputeRenderer( gl );

        // Normalize values to range 0 -> 1.
        this.initNormalizeShader();

        if (threshold) this.initThresholdShader();
    }

    render( renderer, writeBuffer, readBuffer) {

        // Compute gradient magnitudes and angles
        this.magnitudeUniforms[ 'tDiffuse' ].value = readBuffer.texture;
        if ( this.doNMS ) this.argumentUniforms[ 'tDiffuse' ].value = readBuffer.texture;

        this.gpuCompute.compute();

        // Pass in shader uniforms depending on the process shader.
        let renderTarget;
        if ( this.doNMS ) {

            this.nmsUniforms[ 'tMags' ].value = this.gpuCompute.getCurrentRenderTarget( this.magnitudeVariable ).texture;
            this.nmsUniforms[ 'tArgs' ].value = this.gpuCompute.getCurrentRenderTarget( this.argumentVariable ).texture;
            this.nmsUniforms[ 'dim' ].value = this.dims;

            this.nmsGpuCompute.compute();

            renderTarget = this.nmsGpuCompute.getCurrentRenderTarget( this.nmsVariable )

        } else {

            renderTarget = this.gpuCompute.getCurrentRenderTarget( this.magnitudeVariable )

        }
        
        // Calculate the max value uniform for the normalize shader.

        const read = new Float32Array( 4 * this.dims[0] * this.dims[1]);
        renderer.readRenderTargetPixels(renderTarget, 0, 0, this.dims[0], this.dims[1], read);

        // O(N) CPU bound search for max - consider moving this to not once-per-frame.

        let max = 0.0;
        for (let i = 0; i < read.length; i+=4) {
            if (read[i] > max) max = read[i];
        }

        if (max > 0.0) this.normUniforms[ 'max' ].value = max;
        this.normUniforms[ 'tDiffuse' ].value = renderTarget.texture;

        // Render norm pass in the effects chain.

        if ( this.renderToScreen && !this.threshold ) {

            renderer.setRenderTarget(null);
            this.normFsQuad.render(renderer);

        } else {

            renderer.setRenderTarget(writeBuffer);
            if (this.clear) renderer.clear();
            this.normFsQuad.render(renderer);

        }

        // Render threshold pass in the effects chain.

        if ( this.renderToScreen && this.threshold ) {

            let hi = this.threshold.high * max;

            this.threshUniforms[ 'tDiffuse' ].value = writeBuffer.texture;
            this.threshUniforms[ 'max' ].value = max;
            this.threshUniforms[ 'high' ].value = hi;
            this.threshUniforms[ 'low' ].value = this.threshold.low * hi;

            renderer.setRenderTarget(null);
            this.threshFsQuad.render(renderer)

        } else if (this.threshold) {

            renderer.setRenderTarget(writeBuffer);
            if (this.clear) renderer.clear();
            this.threshFsQuad.render(renderer);

        }

    
    }
    
    initNormalizeShader() {

        const normShader = normalizeShader;

        this.normUniforms = UniformsUtils.clone( normShader.uniforms );

        this.normMaterial = new ShaderMaterial({

            uniforms: this.normUniforms,
            vertexShader: normShader.vertexShader,
            fragmentShader: normShader.fragmentShader

        })

        this.normFsQuad = new FullScreenQuad(this.normMaterial);
    
    }

    initThresholdShader() {

        const threshShader = thresholdShader;

        this.threshUniforms = UniformsUtils.clone( thresholdShader.uniforms );

        this.threshMaterial = new ShaderMaterial({

            uniforms: this.threshUniforms,
            vertexShader: threshShader.vertexShader,
            fragmentShader: threshShader.fragmentShader

        })

        this.threshFsQuad = new FullScreenQuad(this.threshMaterial);

    }

    initComputeRenderer(gx, gy, gl) {

        this.gpuCompute = new GPUComputationRenderer(this.dims[0], this.dims[1], gl);

        const gradMagnitude = this.gpuCompute.createTexture();
        fillTextureWithZeros( gradMagnitude );
        this.magnitudeVariable = this.gpuCompute.addVariable( 'textureMagnitude', gradientMagnitudeFragShader, gradMagnitude);

        // Only compute arguments if we are doing NMS - otherwise only Mags are needed.
        if ( this.doNMS ) {

            const gradArgument = this.gpuCompute.createTexture();
            fillTextureWithZeros( gradArgument );
            this.argumentVariable = this.gpuCompute.addVariable( 'textureArgument', gradientArgumentFragShader, gradArgument);

            this.gpuCompute.setVariableDependencies( this.magnitudeVariable, [ this.argumentVariable, this.magnitudeVariable ] );
            this.gpuCompute.setVariableDependencies( this.argumentVariable, [ this.argumentVariable, this.magnitudeVariable ] );
    

        } else {
            
            this.gpuCompute.setVariableDependencies( this.magnitudeVariable, [ this.magnitudeVariable ] );

        }

        this.magnitudeUniforms = this.magnitudeVariable.material.uniforms;
    
        this.magnitudeUniforms[ 'GX' ] = { value: gx }
        this.magnitudeUniforms[ 'GY' ] = { value: gy }
        this.magnitudeUniforms[ 'dim' ] = { value: this.dims }
        this.magnitudeUniforms[ 'tDiffuse' ] = { value: null }
    

        if ( this.doNMS ) {

            this.argumentUniforms = this.argumentVariable.material.uniforms;

            this.argumentUniforms[ 'GX' ] = { value: gx }
            this.argumentUniforms[ 'GY' ] = { value: gy }
            this.argumentUniforms[ 'dim' ] = { value: this.dims }
            this.argumentUniforms[ 'tDiffuse' ] = { value: null }
    
        }
    
        const error = this.gpuCompute.init();
    
        if (error !== null) {
            console.error(error);
        }
    }

    initNMSComputeRenderer(gl) {
        
        this.nmsGpuCompute = new GPUComputationRenderer(this.dims[0], this.dims[1], gl);

        const nms = this.nmsGpuCompute.createTexture();
        fillTextureWithZeros( nms );
        this.nmsVariable = this.nmsGpuCompute.addVariable( 'textureNms', nmsFragShader, nms );
        
        this.nmsGpuCompute.setVariableDependencies( this.nmsVariable, [this.nmsVariable] );

        this.nmsUniforms = this.nmsVariable.material.uniforms;
        
        this.nmsUniforms[ 'dim' ] = { value: this.dims }
        this.nmsUniforms[ 'tMags' ] = { value: null }
        this.nmsUniforms[ 'tArgs' ] = { value: null }

        const error = this.nmsGpuCompute.init();

        if (error !== null) { 
            console.error(error);
        }

    }


}

export default GpuComputePass;