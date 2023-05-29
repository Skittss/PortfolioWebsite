import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image, Carousel } from 'antd';

import f_img_direct from '../../content/projects/RayTracer/tea_cerem_direct.png'
import f_img_indirect from '../../content/projects/RayTracer/tea_cerem_indirect.png'
import f_img_caustic from '../../content/projects/RayTracer/tea_cerem_caustic.png'
import f_img from '../../content/projects/RayTracer/tea_cerem_2048.png'
import sines from '../../content/projects/FFTOcean/sines.png'
import hkt from '../../content/projects/FFTOcean/hkt.png'
import butterfly from '../../content/projects/FFTOcean/butterfly.png'
import normals from '../../content/projects/FFTOcean/normals.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb} projectLink="https://skittss.github.io/FFTOcean/" githubURL="https://github.com/Skittss/FFTOcean">
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <Image preview={false} src={f_img} />
                <Image preview={false} src={f_img_direct} />
                <Image preview={false} src={f_img_indirect} />
                <Image preview={false} src={f_img_caustic} />
            </Carousel>
            <p>
                In this project, I will be doing a whistlestop tour of the basics of raytracing - as well as a select few more advanced features.
                There are many resources out there explaining raytracing better than I can here (See Ray tracing in one weekend) but I hope to give
                an intuitive overview nonetheless.
                <br /><br />
                This post is a work-in-progress. For now, enjoy some nice picutres :)
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="core-concept" className="raleway-title">
                Lighting Calculations, Conceptually
            </h1>
            <h2 id="direct-illum" className="raleway-title">
                Direct Illumination
            </h2>
            <h2 id="global-illum" className="raleway-title">
                Global Illumination
            </h2>
            <h3 id="rendering-eq" className="raleway-title">
                The Rendering Equation
            </h3>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="int-test" className="raleway-title">
                Geometry - Intersection Testing
            </h1>
            <h2 id="int-triangle" className="raleway-title">
                Triangles
            </h2>
            <h2 id="int-sphere" className="raleway-title">
                Spheres
            </h2>
            <h2 id="int-cube" className="raleway-title">
                Cubes
            </h2>
            <h2 id="int-quadratic" className="raleway-title">
                Quadratic Surfaces
            </h2>
            <h1 id="csg" className="raleway-title">
                Constructive Solid Geometry
            </h1>
            <h1 id="acceleration" className="raleway-title">
                Acceleration Structures
            </h1>
            <h2 id="aabb" className="raleway-title">
                Axis-aligned Bounding Box (AABB)
            </h2>
            <h2 id="bv" className="raleway-title">
                14-Plane Bounding Volumes
            </h2>
            <h2 id="bvh" className="raleway-title">
                Bounding Volume Heirarchies (BVH)
            </h2>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="materials" className="raleway-title">
                Materials
            </h1>
            <h2 id="diffuse" className="raleway-title">
                Lambertian Diffuse
            </h2>
            <h2 id="textures" className="raleway-title">
                Basic Textures
            </h2>
            <h2 id="phong" className="raleway-title">
                Phong Lighting Model
            </h2>
            <h2 id="mirrors" className="raleway-title">
                Mirrors
            </h2>
            <h2 id="dielectrics" className="raleway-title">
                Dielectrics
            </h2>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="rendering-tech" className="raleway-title">
                Useful Rendering Techniques
            </h1>
            <h2 id="distributed-raytracing" className="raleway-title">
                Distributed Raytracing
            </h2>
            <h2 id="ssaa" className="raleway-title">
                Super-Sampling Anti-Aliasing (SSAA)
            </h2>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="photon-map" className="raleway-title">
                Photon Mapping
            </h1>
            <h2 id="photon-trace" className="raleway-title">
                Photon Tracing and Storage
            </h2>
            <h3 id="photon-scatter" className="raleway-title">
                Scattering and Russian Roulette
            </h3>
            <h2 id="photon-gather" className="raleway-title">
                Radiance Gathering
            </h2>
            <h3 id="li-approx" className="raleway-title">
                Incident Radiance Approximation
            </h3>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="post-process" className="raleway-title">
                Post Processing
            </h1>
            <h2 id="post-filters" className="raleway-title">
                Useful Filters and Attributes
            </h2>
            Gamma spaces, Contrast, Saturation, etc.
            <h2 id="tone-map" className="raleway-title">
                Tone Mapping and HDR
            </h2>
        </ProjectPage>
    );
}

export default Home;
