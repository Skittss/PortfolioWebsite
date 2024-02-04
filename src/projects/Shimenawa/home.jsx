import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image, Carousel, Grid } from 'antd';

import shimenawa from '../../content/projects/Shimenawa/Shimenawa_Night_1080p.mp4'
import day from '../../content/projects/Shimenawa/day_thumb.png'
import sunset from '../../content/projects/Shimenawa/sunset_thumb.png'
import night from '../../content/projects/Shimenawa/night_thumb.png'

import meiji from '../../content/projects/Shimenawa/reference_photos/meiji.JPG'
import sakurayama from '../../content/projects/Shimenawa/reference_photos/sakurayama.JPG'
import unknownTakayama from '../../content/projects/Shimenawa/reference_photos/unknown_takayama.JPG'
import fushimiInari1 from '../../content/projects/Shimenawa/reference_photos/fushimi_inari_1.JPG'
import fushimiInari2 from '../../content/projects/Shimenawa/reference_photos/fushimi_inari_2.JPG'

import depthMap from '../../content/projects/Shimenawa/depth_map.png'
import domainWarp from '../../content/projects/Shimenawa/domain_warp.webm'
import ropeSdfWarp from '../../content/projects/Shimenawa/rope_sdf_warping.png'
import ropeSdf0Coil from '../../content/projects/Shimenawa/rope_sdf_no_coil.png'
import ropeSdf1Coil from '../../content/projects/Shimenawa/rope_sdf_one_coil.png'
import ropeSdf2Coil from '../../content/projects/Shimenawa/rope_sdf_two_coil.png'
import ropeSdfComplete from '../../content/projects/Shimenawa/rope_sdf_complete.png'
import ropeOvershoot from '../../content/projects/Shimenawa/overshooting.png'
import ropeNormals from '../../content/projects/Shimenawa/normals.png'

import sphereDomainRep from '../../content/projects/Shimenawa/sphere_domain_rep.png'
import sphereDomainRepRad from '../../content/projects/Shimenawa/sphere_domain_rep_rad.png'
import domainRepShimenawa from '../../content/projects/Shimenawa/domain_rep_shimenawa.png'
import domainRepBridges from '../../content/projects/Shimenawa/domain_rep_bridges.png'
import domainRepPillars from '../../content/projects/Shimenawa/domain_rep_pillars.png'

import hardShadows from '../../content/projects/Shimenawa/hard_shadows.png'
import softShadows from '../../content/projects/Shimenawa/soft_shadows.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';
import AnnotatedVideo from '../annotatedVideo';

const { useBreakpoint } = Grid;

const Home = () => {
    const screens = useBreakpoint();

    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.teaser} githubURL={"https://github.com/Skittss/Shimenawa"} projectLink={"https://www.shadertoy.com/view/clVyzW"}>
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <video style={{objectFit: "cover", width: "100%"}}  autoPlay loop muted>
                    <source src={shimenawa} type='video/mp4' />
                </video>
            </div>
            <p>
            'Shimenawa' is a non-photorealistically-rendered scene utilising ray-marching to render complex implicit geometry and volumetrics.
            This means that everything you are looking at above is defined mathematically, and completely procedural!
            </p>
            <p>
            Shimenawa ( 注&#8288;連&#8288;縄 ) - lit. "enclosing rope", is the main subject of the scene. The inspiration came to me following a recent
            trip to Japan where I was enamoured with the elegant aesthetic of cultural sites (神&#8288;社 - Shinto shrines), in which this rope - used as a talisman to ward against evil -
            is abundant. 
            </p>
            <br/>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "500px"}}>
                <AnnotatedImage src={meiji} annotation={"Shimenawa at Meiji Shrine, Tokyo ( 明治神宫、東京 )"}/>
                <AnnotatedImage src={sakurayama} annotation={"Shimenawa at Sakurayama Hachimingu Shrine, Takayama ( 櫻`山八幡宮、高山 )"}/>
                <AnnotatedImage src={unknownTakayama} annotation={"Shimenawa and Colourful braided rope at an unknown shrine in Takayama ( 不明の神社、高山 )"} />
                <AnnotatedImage src={fushimiInari1} annotation={"Shimenawa at Fushimi Inari, Kyoto ( 伏見稲荷大社、京都 )"} />
                <AnnotatedImage src={fushimiInari2} annotation={"More shimenawa at Fushimi Inari, Kyoto ( 伏見稲荷大社、京都 )"} />
            </Carousel>
            <br/>
            <p>
            The design of Shimenawa ropes varies by geographical region, and so I used the above photos I took as reference when designing it for the scene.
            </p>
            <p>
            The surrounding environment draws inspiration from Genshin Impact's main menu and 'slumbering court' locale for their wonderful stylised environment design.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="renders" className="raleway-title">
                Renders
            </h1>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <AnnotatedImage src={day} annotation={"Day"}/>
                <AnnotatedImage src={sunset} annotation={"Sunset"}/>
                <AnnotatedImage src={night} annotation={"Night"} />
            </Carousel>
            To see the full shader in action, visit it on shadertoy <a href={"https://www.shadertoy.com/view/clVyzW"} target='_blank'>here</a>, or through this embed (if your browser can load it, compile time is quite long):
            <br/><br/>
            <div style={{width: "100%", maxWidth: "540px", margin: "0 auto", aspectRatio: "3/2"}}>
                <iframe width="100%" height="100%" frameborder="0" src="https://www.shadertoy.com/embed/clVyzW?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
            </div>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="techniques" className="raleway-title">
                Techniques
            </h1>
            <p>
                The algorithm at the core of this shader is ray marching, more specifically, sphere tracing.
            </p>
            <p>
                This section is currently being written. Please come back later!
            </p>
            <br/>
            <h2 id="ray-marching" className="raleway-title">
                Ray-marching
            </h2>
            <p>
                The algorithm at the core of this shader is sphere tracing, a simple yet versatile method when combined with Signed Distance Functions (SDFs). SDFs will be touched
                on more later, but the idea is to genereate a camera ray, then render implicit geometry (i.e. a function <Latex>{`$f(x,y,z)=0$`}</Latex> at an object's surface) by leaping forward in space repeatedly until 
                we are close enough to the surface to say that it has been hit (i.e. below some epsilon bound). This then generates a t-value for the camera ray much like ray-tracing, but we have 
                done so in an approximate, non-analytical manner.
            </p>
            <p>
                The amount we leap forward in space should be proportional to the distance to the implicit surface to avoid overshooting. Luckily for us, SDFs are defined exactly as this distance, so naturally the following algorithm follows:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
#define MAX_STEPS 128
#define EPSILON 0.001
void mainImage(out vec4 fragColror, in vec2 fragCoord) {
    vec3 ro = vec3(0.0); // camera origin
    vec2 rd = getCameraRay(fragCoord);
    
    float t = 0.0;
    for (int i=0; i<MAX_STEPS; i++) {
        float p = ro + t * rd; // a point along the ray
        float d = map(p); // dist to surface
        if (d < EPSILON) break;
        t += d;
    }

    // We now have a t-value which allows us to render a basic image...
    //   such as plot a depth-map, or do painter's algorithm, etc.
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                We will add complexity to this later, but even with this, we can already begin to render the geometry of our scene (by defining the map() function) with very little rendering code!
            </p>
            <AnnotatedImage src={depthMap} annotation={"Depth map of scene rendered only with the above rendering code as a basis"} />
            <br/><br/>
            <h2 id="sdf" className="raleway-title">
                Signed Distance functions (SDFs)
            </h2>
            <p>
                Signed distance functions define the distance to an implicit surface given a point in space. This can be an exact distance, or approximate, and is derived geometrically.
                The function will be zero-valued at the surface, positive when outside the surface, and negative inside.
            </p>
            <p>
                Deriving SDFs can be challenging when they get complex, so generally we stick to using 'primitives' - simple yet powerful SDFs which we can combine together and distort to make
                any manner of shape we desire. <a href="http://iquilezles.org/articles/distfunctions/">Inigo Quilez has an invaluable resource for definitions of many primitives</a>, as well as a more thorough explanation of SDFs in general.
                I thoroughly recommend you take a look. To get a basic idea however, we can very simply define the SDF for a sphere by observing that the closest point to the sphere lies along
                the vector from the point in space to the sphere origin, i.e:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdSphere(in vec3 p, float r) {
    return length(p) - r;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                The following shader showcases a range of primitives that have reasonably mathematically simple definitions and can be used to construct more complex shapes
                via elementary set operations. 
            </p>
            <div style={{width: "100%", maxWidth: "540px", margin: "0 auto", aspectRatio: "3/2"}}>
                <iframe width="100%" height="100%" frameborder="0" src="https://www.shadertoy.com/embed/Xds3zN?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
            </div>
            <br/>
            <p>
                The most simple operation we can define (and will make much use of) is the <b>union</b> of two SDFs: simply <Latex>{`$U(p)=\\text{min}(SDF_1(p), SDF_2(p))$`}</Latex>.
            </p>
            <br/>
            <h3 id="domain-transform" className="raleway-title">
                Simple Domain Transformations
            </h3>
            <p>
                You might have noticed with the sphere SDF code above that we never make a reference to the origin of the sphere. What's up with that? Surely we could only position objects at (0, 0, 0) if 
                we defined them all like this?
            </p>
            <p>
                And that is correct! ...At least until we employ domain transformations.
            </p>
            <p>
                Domain transformations change the input space of our function, and not the function itself. For example, we can shift <i>all</i> input points by an offset <i>before</i> we evaluate
                the SDF to position it away from the origin. In turn we should note that we <b>always evaluate an SDF as if it is centered at the origin for simplicity</b>. 
            </p>
            <p>
                This has some bearing on what transformation we should apply;
                if we want to shift a SDF in the <b>positive</b> direction of the x axis for example, we should apply a <b>negative</b> x transformation on the input space. This is because our SDF is <b>still evaluated at the origin</b>, albeit in our new coordinate space.
            </p>
            <p>

            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float map(in vec3 p) {
    vec3 q = p - vec3(2.0, 0.0, 0.0); // q is our new coordinate space
    // Note that we want the new origin to be at p=(2.0, 0.0, 0.0), so we should *subtract*
    // so that is (0.0, 0.0, 0.0) at that point.

    float d = sdSphere(q, 1.0);

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                The most useful transformation we can apply besides a domain shift is a domain rotation, which we should also quickly define. 
                It is achieved the exact same way as a domain shift except with a rotation matrix applied instead of a simple vector subtraction:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
#define PI 3.1415926

mat2 rot(in float a) { 
    float c = cos(a); float s = sin(a); 
    return mat2(c, s, -s, c); 
}

float map(in vec3 p) {
    vec3 q = p*rot(PI/2.0); // rotation in radians
    float d = sdSphere(q, 1.0);

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <br/>
            <h3 id="warping" className="raleway-title">
                Domain Warping
            </h3>
            <p>
                We may wish to do a more complex transformation than a simple linear transformation of our input space. This is the role domain warping plays.
                Warping falls under the same umbrella as domain transformations, but we are specifically performing non-linear space transformations here.
            </p>
            <p>
                Warping is particularly useful when we want to add extra detail to an SDF without having to do a bunch of extra SDF calculations. Piling on many SDF calls is 
                undesirable as it is the most expensive function in a complex scene.
                Instead we perturb the input space in clever ways to mimic a fine level of detail.
            </p>
            <p>
                In this scene, I mainly use domain warping for two things: construction of the rope SDF, and object animation.
            </p>
            <br/>
            <p>
                Animation is fairly straight forward; we can create simple procedural animations by perturbing based on a time factor. Even better - slap the perturbation
                into a periodic function like sin or cosine, and you have a perfect loop with little effort! The animation below is a simple time-based and periodic 
                radial peturbation of the y coordinate space.
            </p>
            <AnnotatedVideo 
                annotation={"Exaggerated domain warping applied for animation of the rope (注連縄) and wind on the paper (紙垂)"}
                src={domainWarp} 
                style={{objectFit: "cover", width: "100%"}}  
                autoPlay loop muted
            />
            <br/><br/>
            <p>
                Next let's look at the rope SDF itself.
            </p>
            <AnnotatedImage src={ropeSdfWarp} annotation={"Shimenawa SDF (with materials & lighting applied)"}/>
            <br/>
            <p>
                Though this SDF looks complicated, it is in fact a rather simple construction! The reality is that it is actually just two simple cylindrical capsules rotated and bent
                around a circle. Let's have a look at each step:
            </p>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <AnnotatedImage src={ropeSdf0Coil} annotation={"Start with a simple capsule lying on the x-axis"}/>
                <AnnotatedImage src={ropeSdf1Coil} annotation={"Offset rotation dependent on the x-axis coordinate"}/>
                <AnnotatedImage src={ropeSdf2Coil} annotation={"Duplicate the coil and mirror in xz plane (vertically, though really just orthogonal to the rotation offset)"} />
                <AnnotatedImage src={ropeSdfComplete} annotation={"Loop into a torus shape"} />
            </Carousel>
            <p>
                Simple enough once it's broken down, right? Though this is conceptually easy to understand, how do we technically and mathematically implement each step above?
            </p>
            <br/>
            <p>
                <b><u>1. x-axis aligned capsule</u></b>
                <br/><br/>
                This is self explanatory once you have the SDF for a capsule, which can be thought of as the SDF of an elongated sphere:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdCapsule(vec3 p, float r, float h) {
    p.x -= clamp(p.x, 0.0, h);
    return length(p) - r;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <br/>
            <p>
                <b><u>2. Offset rotation dependent on the x-coordinate</u></b>
                <br/><br/>
                The aim of this step is to set up the repeating braided structure of the rope. If you were to make such a rope in real life, you
                would braid it by twisting coils around one another - so let's take inspiration and do exactly that with maths!
            </p>
            <p>
                'twisting' is simply rotation where we rotate more and more as we go further down the rope. This is where the x-coordinate of the capsule comes in. It corresponds to how
                much rotation we should do at each point. We must also <i>offset</i> the rotation, or else we will rotate the capsule in-place (it is rotationally symmetrical) and percieve no difference.
                Let's start with that:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdRopeCoil(vec3 p, in float braid_r, in float l, in float rot_freq, in float rot_offset)
{
    // Rotate and twist a capsule to make the rope along the x axis
    p.yz *= rot(p.x * PI * rot_freq); // twisting; 45-deg per x
    p.y -= rot_offset; // offset for rotation
    float d = sdVerticalCapsule(p, braid_r, l);

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                Note that we rotate in the yz plane as it is orthogonal to the x-axis which the rope lies upon.
            </p>
            <br/>
            <p>
                <b><u>3. Duplicating the coil</u></b>
                <br/><br/>
                At this stage, the rope lacks a second coil and thus the volume and physicality of an actual rope. There are computationally efficient ways to
                duplicate our SDFs (<HashLink smooth to="#repetition">Domain Repetition</HashLink>), but for now let's keep it simple and just evaluate the SDF twice:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdRope(vec3 p, in float braid_r, in float l, in float rot_freq, in float rot_offset)
{
    float d = 1e10; // initialise distance;
    d = min(d, sdRopeCoil(p, braid_r, l, rot_freq,  rot_offset)); // Top coil
    d = min(d, sdRopeCoil(p, braid_r, l, rot_freq, -rot_offset)); // Bot coil

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                Now we have something that distinctly looks like rope, which we can then loop to get the desired effect.
            </p>
            <br/>
            <p>
                <b><u>4. Looping into a torus</u></b>
                <br/><br/>
                Looping the straight coil into a torus shape can be done in a few ways, but my approach was to use a special kind of domain transformation involving conversion 
                between two local coordinate spaces.
            </p>
            <h3 id="local-uvs" className="raleway-title">
                Imposing SDFs with local UVs
            </h3>
            <p>
                By converting between coordinate spaces, we can impose one shape onto another. The following demo shows this technique in 2D with an arrow SDF imposed
                onto that of a circle. This is the same effect that we want to create for the rope, but in 2d.
            </p>
            <div style={{width: "100%", maxWidth: "540px", margin: "0 auto", aspectRatio: "3/2"}}>
                <iframe width="100%" height="100%" frameborder="0" src="https://www.shadertoy.com/embed/mtGcDz?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
            </div>
            <br/>
            <p>
                For our purposes, transforming the SDF around one base axis is sufficient. This same technique is extensible to any transformation, but let's keep it simple for now.
            </p>
            <p>
                For the rope coils (or in the above demo, the arrow), the base axis is simply
                the axis which the SDF lies along, in this case x. For the circle, we can view the base axis as lying along the circumference of the circle. 
                Keeping track of the distance along the circumference will thus give us this axis coordinate (t), so let's make that SDF quickly:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
float sdCircle(in vec2 p, in float r, out float t) 
{
    // angle to closest pt in range [-PI, PI]
    float closest_p_theta = atan(p.y, p.x) + PI;
    t = closest_p_theta / (2.0 * PI); // convert to range [0, 1]
    
    return length(p) - r;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                Now that we have a mapping between the coordinates of the base axis, let's think about how we convert between the other (orthogonal) axis.
            </p>
            <p>
                For the SDF we are imposing onto the circle, this axis is unchanged. In our 2D example it is simply the y axis. For the circle itself, this axis changes 
                radially, and is in fact given by the distance to the circle, which is the result of the SDF! This property also generalises to the local coordinate space of any SDF if you think
                about it.
            </p>
            <p>
                Now we have a basic example for imposing SDFs onto one another:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
float sdImpose(in vec2 p, in float r)
{
    float rt = 0.0f;
	float d = sdCircle(p, r, rt);

    // adjust 0 -> 1 t-value to actual circumference of the circle
    vec2 segUV = vec2(rt * 2.0*PI*r, d); // calculate local uv
    d = sdArrow(segUV, ...arrow params); // Arrow lying on x-axis

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <br/>
            <p>
                Next is applying this to our 3D example. The problem actually remains unchanged as the circle we want to impose the rope onto still lies on a 2D plane. 
                Our third axis (y) remains constant between our coordinate spaces, so we only have to make slight modifications for it to work in 3D:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
float sdRope(vec3 p, in float braid_r, in float l) {
    float rt = 0.0;
    float d = sdCircle(p.xz, r, rt);
    float circum = 2.0*PI*r;
    
    vec3 ring_uvw = vec3(rt * circum, p.y, d);
    d = sdRope(ring_uvw, r, circum, 10.0, 0.02);

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <br/>
            <h3 id="overshooting" className="raleway-title">
                Overshooting in Warping
            </h3>
            <p>
                If you implement the code above, you might notice that it doesn't quite look right. Certain parts of the object may appear to clip into nothingness - what's happening here?
            </p>
            <AnnotatedImage src={ropeOvershoot} annotation={"What's happening to my SDF?!"}/>
            <br/>
            <p>
                Let's look at what happens to our SDF when we warp the domain to see what's going on:
            </p>
            <div style={{width: "100%", maxWidth: "540px", margin: "0 auto", aspectRatio: "3/2"}}>
                <iframe width="100%" height="100%" frameborder="0" src="https://www.shadertoy.com/embed/4fSXDV?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
            </div>
            <br/>
            <p>
                We can see that in some cases (the peaks of the sin wave) the warped SDF ends up closer to the sample point than our distance describes. The result 
                when we apply this to ray-marching is <i>overshooting</i> - we end up missing the surface entirely because we have <b>overestimated the distance</b> to it.
            </p>
            <p>
                The simplest solution to overshooting is to simply multiply the SDF distance by a constant factor:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
float sdRope(vec3 p, in float braid_r, in float l) {
    ...

    d *= 0.8; // const for fixing overshooting
    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                This ensures our distance is conservative so no overshooting can occur. The exact factor you need to use depends on how extreme the warp is.
            </p>
            <p>
                We must be mindful of the effect this has on performance, however. Underestimating the distance to an object will make us perform more raymarching steps
                than normal when we render it. For example, if we approximate the distance as half of what it should be, we will end up reaching the surface in twice the amount of raymarching steps.
                This solves the overshooting problem, but this 2x operation multiplier can slow the program down and be the difference between a useable one, and an unusable one in the context of real-time rendering.
            </p>
            <p>
                Therefore, we should keep this constant <b>as large as possible</b> and <b>apply it on an individual basis to only warped objects which have overshooting problems</b>, not the entire raymarching loop.
            </p>
            <p>
                Additionally, a lot of the time overshooting problems will be unnoticeable or nonexistant if the warp is small, so we should use this fix with prudence.
            </p>
            <br/>
            <h3 id="repetition" className="raleway-title">
                Domain Repetition and Scaling Scenes
            </h3>
            <p>
                We now have a way to modify basic primitives with transformations and warping, and are able to fix them when they break.
            </p>
            <p>
                This is great - we can start to make some more complex scenes with lots of geometry by re-calling our SDF functions at different points in space and performing a union with <Latex>{`$\\min()$`}</Latex>. However, when we do this, we will quickly notice that it runs quite poorly.
                The reasons for this are at least twofold:
            </p>
            <div style={{paddingLeft: "2vw", paddingRight: "2vw"}}>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>1. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        Our scene <Latex>{`$\\text{map}()$`}</Latex> function becomes overly coupled between lots of unrelated geometry.
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>2. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        Lots of repeated calls to the same expensive SDF function.
                    </Col>
                </Row>
                <br/>
            </div>
            <br/>
            <p>
                First, let's address 1. What do I mean by this?
            </p>
            <p>
                When we lump all of our scene geometry into one big SDF - <Latex>{`$\\text{map}()$`}</Latex>, we are forced into evaluating the SDF for our entire scene even when we are only considering
                calculations for a single object. This is especially notable when we add expensive lighting calculations into the mix (as we will encounter in the next couple of sections). 
            </p>
            <p>
                Think about casting shadows on objects for example; we currently would be forced to evaluate the effect of <i>all</i> objects casting a shadow on the object we're actually
                considering at a point <Latex>{`$p$`}</Latex>. While this is an accurate calculation, it is undoubtedly slow - the complexity of lighting our scene will scale polynomially with
                respect to the number of objects in it. 
            </p>
            <p>       
                Instead, if we know that certain objects can <i>never interact</i>, or the effect of this being the case is unnoticeable, we should separate them
                into different functions so we have more control over what SDFs we evaluate for certain calculations. This in turn allows us to scale up our scene without hemorrhaging performance.
            </p>
            <p>
                A simple separation we can make is between <b>background and foreground</b>. We can get away with having less detail in a background, so it makes sense to not couple it with calculations for the 
                foreground, which tend to be much more expensive. 
            </p>
            <p>
                If you look at the code for Shimenawa, I split the SDFs, normal and lighting calculations, and even the raymarching itself into
                separate <Latex>{`$\\text{...Foreground}()$`}</Latex> and <Latex>{`$\\text{...Background}()$`}</Latex> functions to save on performance.
            </p>
            <br/>
            <p>
                We've now found a better way of dealing with point no. 1, so now on to 2. 
            </p>
            <p>
                Currently (as we've seen with our rope example) if we want to duplicate an object, we simply make another call to the SDF:
            </p>
            <p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdRope(vec3 p, in float braid_r, in float l, in float rot_freq, in float rot_offset)
{
    float d = 1e10; // initialise distance;
    d = min(d, sdRopeCoil(p, braid_r, l, rot_freq,  rot_offset)); // Top coil
    d = min(d, sdRopeCoil(p, braid_r, l, rot_freq, -rot_offset)); // Bot coil

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            </p>
            <p>
                But isn't this sort of wasteful? The calls to the SDF are <i>exactly the same</i>, so wouldn't it be great if there were some way of condensing this into a single call to increase performance?
            </p>
            <p>
                Enter domain repetition! Domain repetition refers to dividing our infinite spatial domain into repetitions of finite space. We first map a point in infinite space into a finite local space, then evaluate the
                SDF. So long as our SDFs lie within the bounds of the finite spaces, we have gotten away with rendering as many duplications of an object as we want with zero additional SDF overhead.
            </p>
            <p>
                It is worth noting that although we eliminate SDF overhead, we still make the render more expensive, but in an efficient way. We still have to do more material / lighting calculations as we render objects for more pixels than before. No free lunch, eh?
            </p>
            <br/>
            <p>
                This may seem a little hand-wavey at first, so let's first apply this to our example with the rope, noting that our duplicated object is simply a reflection in the xz plane:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdRope(vec3 p, in float braid_r, in float l, in float rot_freq, in float rot_offset)
{
    float d = 1e10; // initialise distance;
    p.y = abs(p.y) - 0.02; // domain repetition: reflection in xz
    d = min(d, sdRopeCoil(p, braid_r, l, rot_freq,  rot_offset));

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                Note that we have to offset the SDF in y in order for it to be duplicated in entirety. We have effectively partitioned our input space into two (reflected) partitions along the XZ plane.
            </p>
            <br/>
            <p>
                We can partition our space for repetition in any arbitrary way we like. For example, by partitioning space with a 2D grid:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
float sdDomainRepGrid(vec3 p)
{
    float d = 1e10; // initialise distance;

    const vec2 spacing = vec2(145.0); // grid spacing
    vec2 id = round(p.xz / spacing); // index of the current tile p is in

    vec2 q = p; // local grid space coord

    // Have a quick think about why the following transform works
    //    (Hint: SDFs are evaluated at the world-space origin)
    q.xz = p.xz - spacing * id; // transform to local grid space

    d = sdSphere(q, 2.5); // render spheres - only one SDF call!

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <AnnotatedImage src={sphereDomainRep} annotation={"Infinite domain repetition of spheres via a grid"}/>
            <br/><br/>
            <p>
                Another useful example is a radial repetition:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
                    `
#define TAU 6.28318533
float sdDomainRepRad(vec3 p)
{
    float d = 1e10; // initialise distance;

    vec3 q = p;
    const float rep_angle = TAU / 7.0; // angle of repetition sector (7 sectors)
    float sector round(atan(p.z, p.x) / rep_angle);
    float rot_angle = sector * rep_angle;
    q.xz *= rot(angrot);

    // Have a quick think about why this offset is necessary
    q.x -= 1.0; // offset the SDF from the origin

    d = sdSphere(q, 0.05);

    return d;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <AnnotatedImage src={sphereDomainRepRad} annotation={"Radial domain repetition of spheres"}/>
            <br/><br/>
            <p>
                We've really only scratched the surface of what domain repetition is able to do with these two examples, but rest assured it is a powerful tool for making the illusion that a scene is
                complex when it is in fact rather simple and inexpensive.
            </p>
            <p>
                Let's look at a few examples of how I applied domain repetition in Shimenawa:
            </p>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <AnnotatedImage src={domainRepShimenawa} annotation={"Rotational repetition used to duplicate the hanging ropes and paper."}/>
                <AnnotatedImage src={domainRepBridges} annotation={"1D grid repetition used to duplicate bridge segments into a single continuous bridge."}/>
                <AnnotatedImage src={domainRepPillars} annotation={"2D grid repetition and warping used to arrange duplicated pillar segments in a pseudo-random fashion."} />
            </Carousel>
            <p>
                As well as these examples, I used domain repetition extensively in modelling to make complex yet inexpensive implicit geometry.
            </p>
            <p>
                I highly recommend <a href="https://iquilezles.org/articles/sdfrepetition/" target="_blank">Inigo Quilez' resources on domain repetition</a> if you are interested in using domain repetition for yourself.
                There are lots of different ways to apply it - for example, think about how you may limit our infinite grid example to a <i>finite</i> grid. All manner of these examples are explained thoroughly in
                the aforementioned article.
            </p>
            <br/>
            <h3 id="normals" className="raleway-title">
                Calculating Normals of Implicit Geometry
            </h3>
            <p>
                There are a couple different ways to approach calculating normals for implicit geometry. The one that I (and many others on shadertoy) use is a variant of central differences which samples from a tetrahedron.
            </p>
            <p>
                The basic idea of central differences is analogous to how we calculate a vertex normal - we look at the surfaces adjacent to the sample point to determine the derrivative (which is the normal). 
            </p>
            <br/>
            <p>
                Mathematically, we calculate the partial derivatives in each primary axis to get the derivative of the surface:
            </p>
            <div style={{fontSize: screens.sm ? "inherit" : 12, paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$\\displaystyle \\nabla f(p) = \\bigg\\lbrace{\\partial f(p)\\over \\partial x}, {\\partial f(p)\\over \\partial y}, {\\partial f(p)\\over \\partial z}\\bigg\\rbrace$`}</Latex>
            </div>
            <br />
            <p>
                Each partial derivative is then approximated via central difference, where <Latex>{`$h$`}</Latex> defines our interval size (smaller is more accurate):
            </p>
            <div style={{fontSize: screens.sm ? "inherit" : 12 }}>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$\\displaystyle {\\partial f(p)\\over \\partial x} \\approx \\frac{f(p + \\lbrace h, 0, 0\\rbrace) - f(p - \\lbrace h, 0, 0\\rbrace)}{2h}$`}</Latex>
            </div>
            <br/>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$\\displaystyle {\\partial f(p)\\over \\partial y} \\approx \\frac{f(p + \\lbrace 0, h, 0\\rbrace) - f(p - \\lbrace 0, h, 0\\rbrace)}{2h}$`}</Latex>
            </div>
            <br/>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$\\displaystyle {\\partial f(p)\\over \\partial z} \\approx \\frac{f(p + \\lbrace 0, 0, h\\rbrace) - f(p - \\lbrace 0, 0, h\\rbrace)}{2h}$`}</Latex>
            </div>
            </div>
            <br />
            <p>
                Central difference is generally preferred for accuracy over the forward difference which you were probably taught in calculus class <Latex>{`$\\big(f(p + \\lbrace h, 0, 0\\rbrace) - f(p) / h\\big)$`}</Latex> as 
                it is not directionally biased.
            </p>
            <p>
                It is worth noting though that we end up doing 6 evaluations of <Latex>{`$f(p)$`}</Latex> for central differences, whereas the forward difference needs only 4. This is undesirable when <Latex>{`$f$`}</Latex> is our expensive SDF.
            </p>
            <br/>
            <p>
                By sampling points on a tetrahedron, we can get the best of both worlds: central difference accuracy with only 4 <Latex>{`$f$`}</Latex> evaluations.
            </p>
            <p>
                The vertices of the tetrahedron are given by: 
            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$k_0=\\begin{Bmatrix}\\phantom{-}1 & -1 & -1\\end{Bmatrix}\\\\ k_1=\\begin{Bmatrix}-1 & -1 & \\phantom{-}1\\end{Bmatrix} \\\\ k_2=\\begin{Bmatrix}\\phantom{-}1 & -1 & -1\\end{Bmatrix} \\\\ k_3=\\begin{Bmatrix}\\phantom{-}1 & \\phantom{-}1 & \\phantom{-}1\\end{Bmatrix}$`}</Latex>
            </div>
            <br/>
            <p>
                The property that none of these vertices lie directly on a primary axis allows us to sum the function at each vertex to give the derivative via the following derivation:
            </p>
            <div style={{fontSize: screens.sm ? "inherit" : 10, margin: "0 auto", width: "fit-content", paddingLeft: "3em", paddingRight: "3em", textAlign: "left"}}>
                <Latex>{`$
                    \\displaystyle \\phantom{\\iff}m=\\sum_ik_if(p+hk_i)\\\\
                    \\iff m=\\sum_ik_i(f(p+hk_i) - f(p))\\\\
                    \\iff m=\\sum_ik_i\\nabla_{k_i}f(p)\\\\
                    \\iff m=\\sum_ik_i(k_i\\cdot\\nabla f(p))\\\\
                    \\iff m=\\nabla f(p)\\cdot\\bigg\\lbrace\\sum_i k_{i_x}k_i,\\ \\sum_i k_{i_y}k_i,\\ \\sum_i k_{i_z}k_i\\bigg\\rbrace\\\\
                    \\iff m= 4\\ \\nabla f(p)\\\\~\\\\
                    \\ \\implies \\bar n = {m\\over |m|}
                $`}</Latex>
            </div>
            <br/>
            <p>
                I highly suggest reading <a href="http://iquilezles.org/articles/normalsSDF/" target="_blank">this article from Inigo Quilez</a> for a more thorough explanation of this derivation.
            </p>
            <br/>
            <p>
                We don't have to understand this whole derivation to put the resulting observation into code:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
vec3 calcNormal(vec3 p) {
    const float h = 1e-5;
    const vec2 k = vec2(1, -1);
    return normalize( k.xyy * map(p + k.xyy) + 
                      k.yyx * map(p + k.yyx) +
                      k.yxy * map(p + k.yxy) +
                      k.xxx * map(p + k.xxx) );
}`
                    }
                </SyntaxHighlighter>
            </div>
            <p>
                And just like that, we have normals!
            </p>
            <AnnotatedImage src={ropeNormals} annotation={"Visualisation of normals generated for an SDF using tetrahedron sampling."}/>
            <br/>
            <p>
                Though the above code works perfectly fine mathematically, you may encounter examples which look different yet identical at runtime. 
            </p>
            <p>
                The reason for this is due to how certain compilers deal with the above code. Particularly for WebGL, the compiler may decide to inline the map function four times 
                in an attempt to boost runtime performance, but in doing so, may dramatically increase the compile time, or may run over the allowed instruction size on the platform itself.
            </p>
            <p>
                Some solutions (particularly on shadertoy) trick the compiler into leaving the function be by changing the normal calculation into a loop. The loop must depend on a value which is unknown at runtime to prevent the loop from
                being unwound and causing a similar problem to before.
            </p>
            <br/>
            <p>
                Now with normals calculated, we have all the geometric information we need to move on to lighting! :)
            </p>
            <br/>
            <h3 id="shadows" className="raleway-title">
                Fast Soft Shadows
            </h3>
            <p>
                The calculations most integral to grounding our scene revolve around the transportation of light. Though our use of light
                does not have to be physically correct, it is usually a important to <i>base our lighting from physical principles</i>. This makes our calculations more well defined and, importantly, lets us 
                avoid the "uncanny valley" where things 'just don't look quite right'.
            </p>
            <p>
                In this section and the next we will look at methods to build up a simple lightscape. We will focus at this stage on splitting our image into occluded / non-occluded parts through use of shadow.
            </p>
            <p>
                To preface, light transportation is more complicated than a simple occlusion pass, and we will deliberately be leaving out specific light phenomena like bounce lighting (indirect illumination), 
                and subsurface scattering here to revisit later mostly in the interest of performance.
            </p>
            <br/><br/>
            <p>
                The most basic approach we will begin with is by casting a shadow similar to how it is done in ray tracing. That is, we cast a ray from an objects surface in the direction of light, evaluating the colour as 
                shadow if we intersect any objects on the way. 
            </p>
            <p>
                The obvious way to implement this is with a secondary ray-marching loop:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
#define MAX_SHADOW_STEPS 256
void calcShadow(in vec3 ro, in vec3 rd) {

    // Start with a small t offset to avoid reintersecting the current surface
    float t = 0.01;

    // No shadow unless an intersection happens during the raymarch
    //   Note: Shadow is a multiplier on colour, so 1.0 = no shadow, 0.0 = full shadow.
    float shadow = 1.0;

    for (int i=0; i<MAX_SHADOW_STEPS; i++) {
        float p = ro + t * rd;
        float d = map(p);

        if (d < EPSILON) { shadow = 0.0; break; };

        t += d;
    }

    return shadow;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <AnnotatedImage src={hardShadows} annotation={"Hard shadows via a secondary ray-march"}/>
            <br/>
            <p>
                This is a good starting point, but is not the look that we're going for. We have reduced shadowing to a binary case, when real shadows almost never look this sharp unless we are
                in very strong (almost always unnatural) lighting conditions. Not to say that this way of shadowing is 'incorrect' - we could definitely use it for a comic style 
                or in <a href="https://en.wikipedia.org/wiki/Cel_shading" target="_blank">cel shading</a>.
            </p>
            <br/>
            <p>
                For more realistic shadows, we must observe that shadows have regions of partial occlusion - penumbra - where our shadow multiplier will be somewhere between zero and one.
                This is due to light sources having a physical size, not just being some abstract and infintessimally small point. From a given perspective, a proportion of the light source may
                be occluded, so we should model this also.
            </p>
            <p>
                SDFs become very beneficial in doing so. What would normally take ray-tracing many individual samples to compute, we can approximate by observing that at any point along our light ray if we are close to hitting an object,
                then we are likely in the penumbra. We can also surmise that the amount of occlusion is inversely proportional to the distance to the nearest intersection, which is exactly what the SDF describes. 
                Lastly we can assume that the distance along the light ray is proportional to the occlusion due to the effects of parallax.
            </p>
            <p>
                From this, we can come up with the following equation:
            </p>
            <div style={{margin: "0 auto", width: "fit-content", paddingLeft: "3em", paddingRight: "3em", textAlign: "left"}}>
                <Latex>{`$\\displaystyle \\phantom{\\iff} \\text{occ}\\propto {t \\over d}\\\\~\\\\ \\iff\\text{occ}= k \\cdot {t \\over d}$`}</Latex>
            </div>
            <br/>
            <p>
                Then modify our existing shadow calculation to use it:
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {
`
#define MAX_SHADOW_STEPS 256
void calcShadow(in vec3 ro, in vec3 rd, float k) {

    float t = 0.01;

    // Again, default case is no shadow
    //  Note: shadow = 1 - occ so it can be used as a multiplier
    float shadow = 1.0;

    for (int i=0; i<MAX_SHADOW_STEPS; i++) {
        float p = ro + t * rd;
        float d = map(p);
        
        // early exit for full shadow
        if (d < EPSILON) return 0.0;

        // Note: flip occ calculation as shadow is inv. proportional to occ.
        shadow = min(shadow, k * d / t)

        t += d;
    }

    return shadow;
}`
                    }
                </SyntaxHighlighter>
            </div>
            <AnnotatedImage src={softShadows} annotation={"Soft shadows, k = 2.0"}/>
            <br/>
            <p>
                For Shimenawa, I chose to make the foreground shadows softer than those in the background to mimic the light scattering properties you may see from a rope material. While the sunlight remains the same for the entire 
                scene, a rope would internally scatter the light somewhat due to gaps and subsurface scattering, leading to an overall more diffuse look. Instead of modelling this complex scattering, just increasing the shadow softness is enough to
                get the point across.
            </p>
            <br/>
            <p>
                In cases, there is minor artifacting with the approach above. If this becomes an issue, I would recommend looking at the following fix (it is worth noting that this fix is more expensive though).
            </p>
            <div style={{width: "100%", maxWidth: "540px", margin: "0 auto", aspectRatio: "3/2"}}>
                <iframe width="100%" height="100%" frameborder="0" src="https://www.shadertoy.com/embed/lsKcDD?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
            </div>
            <br/>
            <h3 id="ao" className="raleway-title">
                Ambient Occlusion
            </h3>
            <h3 id="accel" className="raleway-title">
                Acceleration Structures (Bounding Volumes, LOD, and Culling)
            </h3>

            <br/>
            <h2 id="materials" className="raleway-title">
                Basic Materials and Lighting
            </h2>
            <h3 id="sss" className="raleway-title">
                Quick and Easy Sub-surface Scattering
            </h3>
            <br/>
            <h2 id="volumetrics" className="raleway-title">
                Volumetric Cloud Rendering
            </h2>

            <br/>
            <h2 id="hdr" className="raleway-title">
                HDR Rendering
            </h2>
            <h3 id="hdr" className="raleway-title">
                Buffer-pass Bloom
            </h3>
            <br/>
            <h2 id="ldr" className="raleway-title">
                LDR Post-processing
            </h2>

            <h2 id="bonus" className="raleway-title">
                Bonus: Some Extra Techniques
            </h2>
            <h3 id="atmosphere" className="raleway-title">
                Simple Atmospheres
            </h3>
            <h3 id="fog" className="raleway-title">
                Better Fog
            </h3>
            <h3 id="hash" className="raleway-title">
                "Good Enough" Hashing
            </h3>
            <h3 id="stars" className="raleway-title">
                Procedural Star Fields 
            </h3>
            <h3 id="outline" className="raleway-title">
                Stylised Object Outlines
            </h3>
            <h3 id="dithering" className="raleway-title">
                Cheap Dithering
            </h3>
        </ProjectPage>
    );
}

export default Home;
