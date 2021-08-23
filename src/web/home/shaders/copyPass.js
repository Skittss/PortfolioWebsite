import { ShaderMaterial, UniformsUtils } from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';

export const copyShader = {

    uniforms: {
        'tDiffuse': { value: null },
        'cameraNear': { value: 0 },
        'cameraFar': { value: 0 }
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`

        #include <packing>

        varying vec2 vUv;
        uniform sampler2D tDiffuse;
        uniform float cameraNear;
        uniform float cameraFar;

        
        float readDepth( sampler2D depthSampler, vec2 coord ) {
            float fragCoordZ = texture2D( depthSampler, coord ).x;
            float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
            return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
        }

        void main() {

            float depth = readDepth(tDiffuse, vUv);

            gl_FragColor.rgb = 1.0 - vec3( depth );
            gl_FragColor.a = 1.0;

        }`

}

export class CopyPass extends Pass {

    constructor ( dims ) {

        super();

        this.initCopyShader();

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

        const cpyShader = copyShader;

        this.copyUniforms = UniformsUtils.clone( cpyShader.uniforms );

        this.copyMaterial = new ShaderMaterial({

            uniforms: this.copyUniforms,
            vertexShader: cpyShader.vertexShader,
            fragmentShader: cpyShader.fragmentShader

        })

        this.copyFsQuad = new FullScreenQuad(this.copyMaterial);

    }
}