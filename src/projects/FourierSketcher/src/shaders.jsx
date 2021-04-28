import { Shaders, GLSL } from 'gl-react';

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