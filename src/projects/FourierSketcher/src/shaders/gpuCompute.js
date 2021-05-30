import { ShaderMaterial, UniformsUtils, WebGLRenderer } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { gpuComputeShader, gradientMagnitudeFragShader, gradientArgumentFragShader } from './shaders';
import { GPUComputationRenderer } from 'three/examples/jsm//misc/GPUComputationRenderer';


let fillTextureWithZeros = (texture) => {
    const arr = texture.image.data;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
}

class GpuComputePass extends Pass {

    constructor ( gx, gy, dim, gl ) {

        super();
    
        this.initComputeRenderer( gx, gy, dim, gl )

        const shader = gpuComputeShader;

        this.uniforms = UniformsUtils.clone( shader.uniforms );
        
        this.dims = dim;

        this.material = new ShaderMaterial({

            uniforms: this.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader
        
        });

        this.fsQuad = new FullScreenQuad(this.material);

    }

    initComputeRenderer(gx, gy, dim, gl) {

        this.gpuCompute = new GPUComputationRenderer(dim[0], dim[1], gl);

        const gradMagnitude = this.gpuCompute.createTexture();
        const gradArgument = this.gpuCompute.createTexture();

        fillTextureWithZeros( gradMagnitude );
        fillTextureWithZeros( gradArgument );
    
        this.magnitudeVariable = this.gpuCompute.addVariable( 'textureMagnitude', gradientMagnitudeFragShader, gradMagnitude);
        this.argumentVariable = this.gpuCompute.addVariable( 'textureArgument', gradientArgumentFragShader, gradArgument);
    
        this.gpuCompute.setVariableDependencies( this.magnitudeVariable, [ this.argumentVariable, this.magnitudeVariable ] );
        this.gpuCompute.setVariableDependencies( this.argumentVariable, [ this.argumentVariable, this.magnitudeVariable ] );
    
        this.magnitudeUniforms = this.magnitudeVariable.material.uniforms;
        this.argumentUniforms = this.argumentVariable.material.uniforms;
    
        this.magnitudeUniforms[ 'GX' ] = { value: gx }
        this.magnitudeUniforms[ 'GY' ] = { value: gy }
        this.magnitudeUniforms[ 'dim' ] = { value: dim }
        this.magnitudeUniforms[ 'tDiffuse' ] = { value: null }
    
        this.argumentUniforms[ 'GX' ] = { value: gx }
        this.argumentUniforms[ 'GY' ] = { value: gy }
        this.argumentUniforms[ 'dim' ] = { value: dim }
        this.argumentUniforms[ 'tDiffuse' ] = { value: null }
    
        const error = this.gpuCompute.init();
    
        if (error !== null) {
            console.error(error);
        }
    }

    render( renderer, writeBuffer, readBuffer) {

        this.magnitudeUniforms[ 'tDiffuse' ].value = readBuffer.texture;
        this.argumentUniforms[ 'tDiffuse' ].value = readBuffer.texture;

        this.gpuCompute.compute();

        this.uniforms[ 'tMags' ].value = this.gpuCompute.getCurrentRenderTarget( this.magnitudeVariable ).texture;
        this.uniforms[ 'tArgs' ].value = this.gpuCompute.getCurrentRenderTarget( this.argumentVariable ).texture;

        const pixelBuffer = new Uint8Array( 4 * this.dims[0] * this.dims[1]);
        renderer.readRenderTargetPixels( this.gpuCompute.getCurrentRenderTarget( this.magnitudeVariable ), 0, 0, this.dims[0], this.dims[1], pixelBuffer );
        const pixels = new Float32Array( pixelBuffer.buffer );

        let max = 0;
        for (let i = 0; i < pixels.length; i+=4) {
            if (pixels[i] > 0.0) console.log(pixels[i])
        }

        //console.log(max);

    
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

export default GpuComputePass;