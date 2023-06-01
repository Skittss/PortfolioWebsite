export const SeigaihaFragment = `
#define PI      3.14159265358979
#define PI_HALF (PI / 2.0)

uniform float time;
uniform float scale;

varying vec2 vUv;

void main()
{
    vec2 uv = gl_FragCoord.xy / 500.;

    float t_scale = 5.0;
    
    vec2  uvGrid = floor(uv * t_scale);
    float uvYOffset = mod(uvGrid.x, 2.0) <= 0.0 ? 0.0 : 0.5;
    vec2  uvLocal = fract(uv * t_scale + vec2(0.0, uvYOffset)) - vec2(0.0, 0.5);
    float dist = 1e+5;
    
    // below grids (both sides only)
    for(float x=-1.0; x<2.0; x+=2.0)
        dist = min(dist, distance(vec2(x, -1), uvLocal));
    
    // self grid
    const float WAVE_DISTANCE = 1.0;
	if(WAVE_DISTANCE < dist)
    	dist = min(dist, distance(vec2(0.0, -0.5), uvLocal));

    // center grids (both sides only)
	if(WAVE_DISTANCE < dist)
  		for(float x=-1.0; x<2.0; x+=2.0)
        	dist = min(dist, distance(vec2(x, 0.0), uvLocal));

    const float STRIPES = 8.0;
    float stripeOffset = (-cos(fract(time * 0.5) * PI) * 0.5 + 0.5) * (4.0 * PI);

    gl_FragColor.rgb =
    (0.0 < sin(dist * STRIPES * PI - stripeOffset)) ?
    vec3(0.173, 0.204, 0.251) :
    vec3(0.082, 0.098, 0.122);
    
    float time_fade_in = smoothstep(0., 1., time);
    gl_FragColor.rgb *= 0.12;
    gl_FragColor.rgb = mix(vec3(0.), gl_FragColor.rgb, clamp(time * 15., 0., 1.));
}
`

export const SeigaihaVertex = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`