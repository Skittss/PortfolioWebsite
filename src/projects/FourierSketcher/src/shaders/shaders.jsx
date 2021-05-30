import { Shaders, GLSL } from 'gl-react';
import { Vector3, Vector2 } from 'three';

const GrayscaleShader = {

	uniforms: {
		'tDiffuse': { value: null },
        'weights': { value: new Vector3() }
	},

	vertexShader: /* glsl */`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: /* glsl */`
		uniform float opacity;
		uniform sampler2D tDiffuse;
        uniform vec3 weights;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
            float w_a = weights.x * texel.x + weights.y * texel.y + weights.z * texel.z;
			gl_FragColor = vec4(w_a, w_a, w_a, 1.0);
		}`

};

const hGaussianBlur = {

    uniforms: {
        'tDiffuse': { value: null },
        'kernelSize': { value: 0 },
        'kernel': { value: new Array(128) },
        'hRes': { value: 0.0 }
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`
        uniform float hRes;
        uniform int kernelSize;
        uniform float kernel[128];
        uniform sampler2D tDiffuse;

        varying vec2 vUv;

        void main() {

            vec4 color = texture2D(tDiffuse, vUv) * kernel[0];

            for (int i=1; i < 128; i++) {
                if (i == kernelSize) break;
                color += texture2D(tDiffuse, vUv + vec2(float(i)/hRes, 0.0)) * kernel[i];
                color += texture2D(tDiffuse, vUv - vec2(float(i)/hRes, 0.0)) * kernel[i];
            }

            gl_FragColor = color;
        }`
};

const vGaussianBlur = { 

    uniforms: {
        'tDiffuse': { value: null },
        'kernelSize': { value: 0 },
        'kernel': { value: new Array(128) },
        'vRes': { value: 0.0 }
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`            
        uniform float vRes;
        uniform int kernelSize;
        uniform float kernel[128];
        uniform sampler2D tDiffuse;
        
        varying vec2 vUv;

        void main() {

            vec4 color = texture2D(tDiffuse, vUv) * kernel[0];

            for (int i=1; i < 128; i++) {
                if (i == kernelSize) break;
                color += texture2D(tDiffuse, vUv + vec2(0.0, float(i)/vRes)) * kernel[i];
                color += texture2D(tDiffuse, vUv - vec2(0.0, float(i)/vRes)) * kernel[i];
            }

            gl_FragColor = color;
        }`

};

const sobelShader = {
    
    uniforms: {
        'tDiffuse': { value: null },
        'dim': { value: new Vector2() },
        'GX': { value: new Array(9) },
        'GY': { value: new Array(9) }
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`

        precision highp float;

        uniform vec2 dim;
        uniform float GX[9];
        uniform float GY[9];
        uniform sampler2D tDiffuse;

        void main() {
            
            vec4 gx = vec4(0.0);
            vec4 gy = vec4(0.0);
            vec4 v;

            for (int j=0; j<3; j++) {
                for (int i=0; i<3; i++) {
                    v = texture2D(tDiffuse, vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y) + vec2( float(i-1)/dim.x, float(j-1)/dim.y ) );
                    gx += GX[j * 3 + i] * v;
                    gy += GY[j * 3 + i] * v;
                }
            }

            vec4 mag = sqrt(gx * gx + gy * gy);
            float arg = atan(gy.x, gx.x);


            gl_FragColor = vec4(mag.x, mag.y, mag.z, 1.0);
        }`
}

const gradientMagnitudeFragShader = `
    precision highp float;

    uniform vec2 dim;
    uniform float GX[9];
    uniform float GY[9];
    uniform sampler2D tDiffuse;

    void main() {
        
        vec4 gx = vec4(0.0);
        vec4 gy = vec4(0.0);
        vec4 v;

        for (int j=0; j<3; j++) {
            for (int i=0; i<3; i++) {
                v = texture2D(tDiffuse, vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y) + vec2( float(i-1)/dim.x, float(j-1)/dim.y ) );
                gx += GX[j * 3 + i] * v;
                gy += GY[j * 3 + i] * v;
            }
        }

        vec4 mag = sqrt(gx * gx + gy * gy);
        gl_FragColor = vec4(mag.x, mag.y, mag.z, 1.0);
    }`

const gradientArgumentFragShader = `
    precision highp float;

    uniform vec2 dim;
    uniform float GX[9];
    uniform float GY[9];
    uniform sampler2D tDiffuse;

    void main() {
        
        vec4 gx = vec4(0.0);
        vec4 gy = vec4(0.0);
        vec4 v;

        for (int j=0; j<3; j++) {
            for (int i=0; i<3; i++) {
                v = texture2D(tDiffuse, vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y) + vec2( float(i-1)/dim.x, float(j-1)/dim.y ) );
                gx += GX[j * 3 + i] * v;
                gy += GY[j * 3 + i] * v;
            }
        }

        vec4 mag = sqrt(gx * gx + gy * gy);
        float arg = atan(gy.x, gx.x);

        gl_FragColor = vec4(arg, arg, arg, arg);
    }`

const gpuComputeShader = {
    
    uniforms: {
        'tMags': { value: null },
        'tArgs': { value: null }
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`

        uniform sampler2D tMags;
        uniform sampler2D tArgs;

        varying vec2 vUv;

        void main() {

            gl_FragColor = texture2D(tMags, vUv);

        }`
}

export { GrayscaleShader, hGaussianBlur, vGaussianBlur, sobelShader, gradientMagnitudeFragShader, gradientArgumentFragShader, gpuComputeShader };



const shaders = Shaders.create({

    Grayscale: {
        frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform vec3 weights;
        uniform sampler2D t;
        
        void main() {
            vec4 color = texture2D(t, uv);
            float value = weights.x * color.x + weights.y * color.y + weights.z * color.z;
            gl_FragColor = vec4(value, value, value, 1.0);
        }
        
        `
    },

    hGaussianBlur: {
        frag: GLSL`
        precision highp float;
        
        uniform vec2 dim;
        uniform int kernelSize;
        uniform float kernel[128];
        uniform sampler2D t;

        void main() {

            vec2 pos = vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y);
            vec4 color = texture2D(t, pos) * kernel[0];

            for (int i=1; i < 128; i++) {
                if (i == kernelSize) break;
                color += texture2D(t, pos + vec2(float(i)/dim.x, 0.0)) * kernel[i];
                color += texture2D(t, pos - vec2(float(i)/dim.x, 0.0))* kernel[i];
            }

            gl_FragColor = color;
        }
        `
    },

    vGaussianBlur: {
        frag: GLSL`
        precision highp float;
        
        uniform vec2 dim;
        uniform int kernelSize;
        uniform float kernel[128];
        uniform sampler2D t;

        void main() {

            vec2 pos = vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y);
            vec4 color = texture2D(t, pos) * kernel[0];

            for (int i=1; i < 128; i++) {
                if (i == kernelSize) break;
                color += texture2D(t, pos + vec2(0.0, float(i)/dim.y)) * kernel[i];
                color += texture2D(t, pos - vec2(0.0, float(i)/dim.y)) * kernel[i];
            }

            gl_FragColor = color;
        }
        `
    },

    EdgeFinding: {
        frag: GLSL`
        precision highp float;

        uniform vec2 dim;
        uniform float GX[9];
        uniform float GY[9];
        uniform sampler2D t;

        void main() {
            
            vec4 gx = vec4(0.0);
            vec4 gy = vec4(0.0);
            vec4 v;

            for (int j=0; j<3; j++) {
                for (int i=0; i<3; i++) {
                    v = texture2D(t, vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y) + vec2( float(i-1)/dim.x, float(j-1)/dim.y ) );
                    gx += GX[j * 3 + i] * v;
                    gy += GY[j * 3 + i] * v;
                }
            }

            vec4 mag = sqrt(gx * gx + gy * gy);
            float arg = atan(gy.x, gx.x);

            float col = 0.0;
            if (mag.x > 1.0) {
                col = mag.x;
            }

            gl_FragColor = vec4(col, col, arg, 1.0);
        }
        `
    },

    ShowEdgeMagnitudes: {
        frag: GLSL`
        precision highp float;

        varying vec2 uv;
        uniform sampler2D t;

        void main() {
            
            float mag = texture2D(t, uv).y;
            gl_FragColor = vec4(mag, mag, mag, 1.0);
        }
        `
    },

    NMS: {
        frag: GLSL`
        precision highp float;

        uniform vec2 dim;
        uniform sampler2D t;

        void main() {
            
            vec2 current = vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y);
            vec2 info = texture2D(t, current).xz;

            float hComp = cos(info.y);
            float vComp = sin(info.y);
            float xTranslate = sign(hComp);
            float yTranslate = sign(vComp);

            vec2 translate = vec2(xTranslate/dim.x, yTranslate/dim.y);
            vec2 a1 = current + translate;
            vec2 a2 = current - translate;
            float ag1 = texture2D(t, a1).x;
            float ag2 = texture2D(t, a2).x;

            vec2 b1, b2;
            float bg1, bg2;

            float g1, g2;

            if (abs(hComp) > abs(vComp)) {
                translate = vec2(xTranslate/dim.x, 0.0);
                b1 = current + vec2(translate);
                b2 = current - vec2(translate);
                bg1 = texture2D(t, b1).x;
                bg2 = texture2D(t, b2).x;
                g1 = ag1 * abs(vComp) + (1.0-abs(vComp)) * bg1;
                g2 = ag2 * abs(vComp) + (1.0-abs(vComp)) * bg2;
            }
            else {
                translate = vec2(0.0, yTranslate/dim.y);
                b1 = current + vec2(translate);
                b2 = current - vec2(translate);
                bg1 = texture2D(t, b1).x;
                bg2 = texture2D(t, b2).x;
                g1 = ag1 * abs(hComp) + (1.0-abs(hComp)) * bg1;
                g2 = ag2 * abs(hComp) + (1.0-abs(hComp)) * bg2;
            }

            float mag = info.x;
            if (g1 > mag || g2 > mag) {
                mag = 0.0;
            }

            gl_FragColor = vec4(mag, mag, mag, 1.0);

        }
        `
    }

})

export default shaders;