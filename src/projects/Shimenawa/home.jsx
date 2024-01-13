import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image,Carousel } from 'antd';

import shimenawa from '../../content/projects/Shimenawa/Shimenawa_Night_1080p.mp4'
import day from '../../content/projects/Shimenawa/day_thumb.png'
import sunset from '../../content/projects/Shimenawa/sunset_thumb.png'
import night from '../../content/projects/Shimenawa/night_thumb.png'

import meiji from '../../content/projects/Shimenawa/reference_photos/meiji.JPG'
import sakurayama from '../../content/projects/Shimenawa/reference_photos/sakurayama.JPG'
import unknownTakayama from '../../content/projects/Shimenawa/reference_photos/unknown_takayama.JPG'
import fushimiInari1 from '../../content/projects/Shimenawa/reference_photos/fushimi_inari_1.JPG'
import fushimiInari2 from '../../content/projects/Shimenawa/reference_photos/fushimi_inari_2.JPG'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';

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
            To see the full shader in action, visit it on shadertoy <a href={"https://www.shadertoy.com/view/clVyzW"} target='_blank'>here.</a>
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

            <br/>
            <h2 id="sdf" className="raleway-title">
                Signed Distance functions (SDFs)
            </h2>
            <h3 id="warping" className="raleway-title">
                Domain Warping
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
                Acceleration Structures (Bounding Volumes and LOD)
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
