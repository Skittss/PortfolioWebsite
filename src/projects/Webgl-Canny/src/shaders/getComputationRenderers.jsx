import { GPUComputationRenderer } from 'three/examples/jsm//misc/GPUComputationRenderer';
import { gradientMagnitudeFragShader, gradientArgumentFragShader, nmsFragShader} from "./shaders";


const fillTextureWithZeros = (texture) => {
    let arr = texture.image.data;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
}

const getSobelComputeRenderer = (gl, dims, kernel, doNMS) => {

    let gpuCompute = new GPUComputationRenderer(dims[0], dims[1], gl);

    let gradMagnitude = gpuCompute.createTexture();
    fillTextureWithZeros( gradMagnitude );
    let magnitudeVariable = gpuCompute.addVariable( 'textureMagnitude', gradientMagnitudeFragShader, gradMagnitude);

    // Only compute arguments if we are doing NMS - otherwise only Mags are needed.
    let argumentVariable;
    let gradArgument;
    if ( doNMS ) {

        gradArgument = gpuCompute.createTexture();
        fillTextureWithZeros( gradArgument );
        argumentVariable = gpuCompute.addVariable( 'textureArgument', gradientArgumentFragShader, gradArgument);

        gpuCompute.setVariableDependencies( magnitudeVariable, [ argumentVariable, magnitudeVariable ] );
        gpuCompute.setVariableDependencies( argumentVariable, [ argumentVariable, magnitudeVariable ] );


    } else {
        
        gpuCompute.setVariableDependencies( magnitudeVariable, [ magnitudeVariable ] );

    }

    let magnitudeUniforms = magnitudeVariable.material.uniforms;

    magnitudeUniforms[ 'GX' ] = { value: kernel.gx }
    magnitudeUniforms[ 'GY' ] = { value: kernel.gy }
    magnitudeUniforms[ 'dim' ] = { value: dims }
    magnitudeUniforms[ 'tDiffuse' ] = { value: null }


    let argumentUniforms;
    if ( doNMS ) {

        argumentUniforms = argumentVariable.material.uniforms;

        argumentUniforms[ 'GX' ] = { value: kernel.gx }
        argumentUniforms[ 'GY' ] = { value: kernel.gy }
        argumentUniforms[ 'dim' ] = { value: dims }
        argumentUniforms[ 'tDiffuse' ] = { value: null }

    }

    const error = gpuCompute.init();

    if (error !== null) {
        console.error(error);
        return null;
    }

    return {
        gpuCompute: gpuCompute,
        magnitudeVariable: magnitudeVariable,
        magnitudeUniforms, magnitudeUniforms,
        argumentVariable: argumentVariable,
        argumentUniforms: argumentUniforms,
        texture: gradArgument,
        texture_2: gradMagnitude
    }
}

const getNMSComputeRenderer = (gl, dims, doNMS) => {

    if (!doNMS) return null;

    let nmsGpuCompute = new GPUComputationRenderer(dims[0], dims[1], gl);

    let nms = nmsGpuCompute.createTexture();
    fillTextureWithZeros( nms );
    let nmsVariable = nmsGpuCompute.addVariable( 'textureNms', nmsFragShader, nms );
    
    nmsGpuCompute.setVariableDependencies( nmsVariable, [nmsVariable] );

    let nmsUniforms = nmsVariable.material.uniforms;
    
    nmsUniforms[ 'dim' ] = { value: dims }
    nmsUniforms[ 'tMags' ] = { value: null }
    nmsUniforms[ 'tArgs' ] = { value: null }

    const error = nmsGpuCompute.init();

    if (error !== null) { 
        console.error(error);
        return null;
    }

    return {
        nmsGpuCompute: nmsGpuCompute,
        nmsVariable: nmsVariable,
        nmsUniforms: nmsUniforms,
        textures: [nms]
    }
}

const getComputationRenderers = (gl, dims, kernel, doNMS) => {

    let obj = {sobel: getSobelComputeRenderer(gl, dims, kernel, doNMS), nms: getNMSComputeRenderer(gl, dims, doNMS)};

    return obj;
}


export default getComputationRenderers;