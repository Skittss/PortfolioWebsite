import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image, Carousel } from 'antd';

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

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';
import AnnotatedVideo from '../annotatedVideo';

const Home = () => {
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
                <AnnotatedImage preview={false} src={day} annotation={"Day"}/>
                <AnnotatedImage preview={false} src={sunset} annotation={"Sunset"}/>
                <AnnotatedImage preview={false} src={night} annotation={"Night"} />
            </Carousel>
            To see the full shader in action, visit it on shadertoy <a href={"https://www.shadertoy.com/view/clVyzW"} target='_blank'>here</a>, or through this embed (if your browser can load it, compile time is quite long):
            <br/><br/>
            <div style={{width: "100%", maxWidth: "540px", margin: "0 auto", aspectRatio: "3/2"}}>
                <iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/clVyzW?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
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
    for (int i=0; i<MAX_STEPS ) {
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
                into a periodic function like sin or cosine, and you have a perfect loop with little effort!
            </p>
            <AnnotatedVideo 
                annotation={"Exaggerated domain warping applied for animation of the rope (注連縄) and wind on the paper (紙垂)"}
                src={domainWarp} 
                style={{objectFit: "cover", width: "100%"}}  
                autoPlay loop muted
            />
            <br/><br/>
            <p>
                Now let's look at the rope SDF.
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
float sdRope(vec3 p, in float braid_r, in float l, in float rot_freq, in float rot_offset)
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
float sdShimenawa(vec3 p, in float braid_r, in float l, in float rot_freq, in float rot_offset)
{
    float d = 1e10; // initialise distance;
    d = min(d, sdRope(braid_r, l, rot_freq,  rot_offset)); // Top coil
    d = min(d, sdRope(braid_r, l, rot_freq, -rot_offset)); // Bot coil

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
                <b><u>3. Looping into a torus</u></b>
                <br/><br/>
                Looping the straight coil into a torus shape can be done in a few ways, but my approach was to use a special kind of domain transformation involving conversion 
                between two local uv spaces.
            </p>
            <h3 id="local-uvs" className="raleway-title">
                Imposing SDFs with local UVs
            </h3>
            <h3 id="repetition" className="raleway-title">
                Domain Repetition
            </h3>
            <h3 id="normals" className="raleway-title">
                Calculating Normals of Implicit Geometry
            </h3>
            <h3 id="shadows" className="raleway-title">
                Fast Soft Shadows
            </h3>
            <h3 id="ao" className="raleway-title">
                Ambient Occlusion
            </h3>
            <h3 id="sss" className="raleway-title">
                Quick and Easy Sub-surface Scattering
            </h3>
            <h3 id="accel" className="raleway-title">
                Acceleration Structures (Bounding Volumes, LOD, and Culling)
            </h3>

            <br/>
            <h2 id="materials" className="raleway-title">
                Basic Materials and Lighting
            </h2>

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
