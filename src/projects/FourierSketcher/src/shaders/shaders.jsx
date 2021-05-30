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

const normalizeShader = {

    uniforms: {
        'tDiffuse': { value: null },
        'max': { value : 1.0 }
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`

        precision highp float;

        uniform sampler2D tDiffuse;
        uniform float max;

        varying vec2 vUv;

        void main() {

            float v = texture2D(tDiffuse, vUv).x;
            float norm = v / max;

            gl_FragColor = vec4(norm, norm, norm, 1.0);

        }`

}

const nmsFragShader = `

    uniform sampler2D tMags;
    uniform sampler2D tArgs;
    uniform vec2 dim;

    void main() {
        
        vec2 current = vec2(gl_FragCoord.x/dim.x, gl_FragCoord.y/dim.y);

        float m = texture2D(tMags, current).x;
        float a = texture2D(tArgs, current).x;

        float hComp = cos(a);
        float vComp = sin(a);
        float xTranslate = sign(hComp);
        float yTranslate = sign(vComp);

        vec2 translate = vec2(xTranslate/dim.x, yTranslate/dim.y);
        vec2 a1 = current + translate;
        vec2 a2 = current - translate;
        float ag1 = texture2D(tMags, a1).x;
        float ag2 = texture2D(tMags, a2).x;

        vec2 b1, b2;
        float bg1, bg2;

        float g1, g2;

        if (abs(hComp) > abs(vComp)) {
            translate = vec2(xTranslate/dim.x, 0.0);
            b1 = current + vec2(translate);
            b2 = current - vec2(translate);
            bg1 = texture2D(tMags, b1).x;
            bg2 = texture2D(tMags, b2).x;
            g1 = ag1 * abs(vComp) + (1.0-abs(vComp)) * bg1;
            g2 = ag2 * abs(vComp) + (1.0-abs(vComp)) * bg2;
        }
        else {
            translate = vec2(0.0, yTranslate/dim.y);
            b1 = current + vec2(translate);
            b2 = current - vec2(translate);
            bg1 = texture2D(tMags, b1).x;
            bg2 = texture2D(tMags, b2).x;
            g1 = ag1 * abs(hComp) + (1.0-abs(hComp)) * bg1;
            g2 = ag2 * abs(hComp) + (1.0-abs(hComp)) * bg2;
        }

        if (g1 > m || g2 > m) {
            m = 0.0;
        }

        gl_FragColor = vec4(m, m, m, 1.0);

    }`

const thresholdShader = {

    uniforms: {
        'tDiffuse': { value: null },
        'max': { value : 1.0 },
        'high': { value: 0.0},
        'low': { value: 0.0}
    },

    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,

    fragmentShader: /* glsl */`

        precision highp float;

        uniform sampler2D tDiffuse;
        uniform float max;
        uniform float high;
        uniform float low;

        varying vec2 vUv;

        void main() {

            float v = texture2D(tDiffuse, vUv).x;

            vec4 texel;
            if (v <= low) {
                texel = vec4(0.0, 0.0, 0.0, 1.0);
            } else if (v < high) {
                texel = vec4(0.3, 0.3, 0.3, 1.0);
            } else {
                texel = vec4(1.0);
            }

            gl_FragColor = texel;

        }`

}

export { normalizeShader, GrayscaleShader, hGaussianBlur, vGaussianBlur, sobelShader, gradientMagnitudeFragShader, gradientArgumentFragShader, nmsFragShader, thresholdShader };