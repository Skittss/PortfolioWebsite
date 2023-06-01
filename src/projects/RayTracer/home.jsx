import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image, Carousel } from 'antd';

import f_img_direct from '../../content/projects/RayTracer/tea_cerem_direct.png'
import f_img_indirect from '../../content/projects/RayTracer/tea_cerem_indirect.png'
import f_img_caustic from '../../content/projects/RayTracer/tea_cerem_caustic.png'
import f_img from '../../content/projects/RayTracer/tea_cerem_2048.png'

import quad_cone from '../../content/projects/RayTracer/quadratics/cone.png'
import quad_cylinder from '../../content/projects/RayTracer/quadratics/cylinder.png'
import quad_ellipse from '../../content/projects/RayTracer/quadratics/ellipse.png'
import quad_hyp_cylinder from '../../content/projects/RayTracer/quadratics/hyperbolic-cylinder.png'
import quad_hyp_paraboloid from '../../content/projects/RayTracer/quadratics/hyperbolic-paraboloid.png'
import quad_hyp_one_sheet from '../../content/projects/RayTracer/quadratics/hyperboloid-one-sheet.png'
import quad_hyp_two_sheet from '../../content/projects/RayTracer/quadratics/hyperboloid-two-sheet.png'
import quad_paraboloid from '../../content/projects/RayTracer/quadratics/parabolic.png'

import mirror_bounce_1 from '../../content/projects/RayTracer/mirrors/mirrors-1-bounce.png'
import mirror_bounce_3 from '../../content/projects/RayTracer/mirrors/mirrors-3-bounces.png'
import mirror_bounce_5 from '../../content/projects/RayTracer/mirrors/mirrors-5-bounces.png'
import mirror_bounce_8 from '../../content/projects/RayTracer/mirrors/mirrors-8-bounces.png'

import dielectric_refract_1_0 from '../../content/projects/RayTracer/dielectrics/dielectric-no-fresnel-1.0f.png'
import dielectric_refract_1_3 from '../../content/projects/RayTracer/dielectrics/dielectric-no-fresnel-1.3f.png'
import dielectric_refract_1_5 from '../../content/projects/RayTracer/dielectrics/dielectric-no-fresnel-1.5f.png'
import dielectric_refract_1_7 from '../../content/projects/RayTracer/dielectrics/dielectric-no-fresnel-1.7f.png'
import dielectric_refract_2_5 from '../../content/projects/RayTracer/dielectrics/dielectric-no-fresnel-2.5f.png'
import dielectric_fresnel_f from '../../content/projects/RayTracer/dielectrics/dielectric-fresnel-fresnel.png'
import dielectric_fresnel_s from '../../content/projects/RayTracer/dielectrics/dielectric-fresnel-schlick.png'

import shadows_1 from '../../content/projects/RayTracer/shadows/brighter-1-sample-crop.png'
import shadows_5 from '../../content/projects/RayTracer/shadows/brighter-5-samples-crop.png'
import shadows_10 from '../../content/projects/RayTracer/shadows/brighter-10-samples-crop.png'
import shadows_25 from '../../content/projects/RayTracer/shadows/brighter-25-samples-crop.png'
import shadows_50 from '../../content/projects/RayTracer/shadows/brighter-50-samples-crop.png'
import shadows_100 from '../../content/projects/RayTracer/shadows/brighter-100-samples-crop.png'
import shadows_200 from '../../content/projects/RayTracer/shadows/brighter-200-samples-crop.png'

import ssaa_0 from '../../content/projects/RayTracer/ssaa/0xSSAA-crop.png'
import ssaa_5 from '../../content/projects/RayTracer/ssaa/5xSSAA-crop.png'
import ssaa_10 from '../../content/projects/RayTracer/ssaa/10xSSAA-crop.png'
import ssaa_25 from '../../content/projects/RayTracer/ssaa/25xSSAA-crop.png'
import ssaa_50 from '../../content/projects/RayTracer/ssaa/50xSSAA-crop.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb} >
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
            <p>
                3D rendering deals with simulating light phonemena. 
            </p>
            <h2 id="direct-illum" className="raleway-title">
                Direct Illumination
            </h2>
            <p>
                Direct illumination refers to light which is immediately visible.
            </p>
            <h2 id="global-illum" className="raleway-title">
                Global Illumination
            </h2>
            <h3 id="rendering-eq" className="raleway-title">
                The Rendering Equation
            </h3>
            <br />
            <p>
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L_r(\\textbf{x}, \\omega_i, \\omega_r) =
                        L_e \\displaystyle\\int_\\Omega f_r(\\textbf{x}, \\omega_i, \\omega_r) L_i(\\textbf{x}, \\omega_i)(\\omega_i \\cdot \\textbf n)\\ d\\omega_i $`
                        }
                    </Latex>
                </div>
            </p>
            <p>
                where <Latex>{`$L_r(\\textbf{x}, \\omega_i, \\omega_r)$`}</Latex> denotes the reflected radiance along a
                direction <Latex>{`$\\omega_r$`}</Latex> at a point in the scene <Latex>{`$\\textbf x$`}</Latex>. In other words, if <Latex>{`$\\omega_r$`}</Latex> is the direction
                from <Latex>{`$\\textbf x$`}</Latex> to a camera pixel, this is the amount of light we gather at that pixel, i.e. the rendered colour. <Latex>{`$L_e$`}</Latex> denotes
                any light directly emitted from the object at <Latex>{`$\\textbf x$`}</Latex>, and serves mostly to support rendering materials that emit light
                and other visible light sources (e.g. an area light).
                <br /><br />
                The integral component states that at point <Latex>{`$\\textbf x$`}</Latex>, we gather all the incident radiance from all possible incident directions (<Latex>{`$\\omega_i$`}</Latex>) in a
                hemisphere above <Latex>{`$\\textbf x$`}</Latex> (<Latex>{`$\\Omega$`}</Latex>). We multiply each incident ray by the BDRF for its given direction to determine how much of the incident
                light is reflected along <Latex>{`$\\omega_r$`}</Latex> - thus giving reflected radiance. 
                We also apply Lambert’s cosine law via <Latex>{`$(\\omega_i \\cdot x)$`}</Latex>.
                <br /><br />
                The method by which this integral is approximated depends on the specific lighting implementation we are wishing to achieve.
                We are able to fit global illumination models and direct-illumination models (roughly) under this definition. For example, the basic
                direct-illumination ray tracing model can be described as approximating the integral by taking <Latex>{`$\\Omega$`}</Latex> as the set of directions to visible
                lights from <Latex>{`$\\textbf x$`}</Latex>. Monte Carlo Ray Tracing makes use of Monte Carlo techniques to approximate the integral with a large number of
                importance sampled <Latex>{`$\\omega_i $`}</Latex> rays. 
            </p>
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
            <p>
                Quadratic surfaces are characterised by second degree polynomials. They are very similar to ubiquitous second-degree polynomials
                in <Latex>{`$\\R^2$`}</Latex> which are undoubtedly familiar: <Latex>{`$y=x^2$`}</Latex> (parabola), <Latex>{`$x^2 + y^2 = r$`}</Latex> (circle), etc. 
                It would be more appropriate to call these unique cases (formally, normal forms) of the general quadratic equation. 
                Quadric surfaces are the same concept but applied to <Latex>{`$\\R^3$`}</Latex> defined by the following:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$Ax^2 + By^2 + Cz^2 + Dxy + Eyz + Fxz + Gx + Hy + Iz + J = 0$`}
                    </Latex>
                </div>
                <br />
                The ray-intersection calculation is handled no differently than for any other implicit surface, and the specific t-values can be
                calculated using the quadratic equation after performing the substitution <Latex>{`$\\begin{pmatrix} x & y & z\\end{pmatrix} = O + Dt$`}</Latex>  on
                the above equation where <Latex>{`$O$`}</Latex> and <Latex>{`$D$`}</Latex> are the ray origin and direction respectively.
                The only remaining task is calculating the surface normals, which is again no different than
                for any other continuous implicit surface; the partial derivative of Equation 5 in <Latex>{`$x$`}</Latex>, <Latex>{`$y$`}</Latex> and <Latex>{`$z$`}</Latex>. 
                Below are the different normal form quadric surfaces capable of being created via the above equation.
                <br /><br />
                <Row>
                    <Col span={6}>
                        <Image src={quad_ellipse} fallback={"quadratic surface ellipse"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_cone} fallback={"quadratic surface cone"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_cylinder} fallback={"quadratic surface cylinder"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_paraboloid} fallback={"quadratic surface paraboloid"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_hyp_one_sheet} fallback={"quadratic surface hyperboloid 1 sheet"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_hyp_two_sheet} fallback={"quadratic surface hyperboloid 2 sheet"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_hyp_cylinder} fallback={"quadratic surface hyperbolic cylinder"}></Image>
                    </Col>
                    <Col span={6}>
                        <Image src={quad_hyp_paraboloid} fallback={"quadratic surface hyperbolic paraboloid"}></Image>
                    </Col>
                </Row>
                <br />
                In order to visualise these quadrics properly, an axis-aligned bounding box (AABB) is used to bound any
                intersection points (i.e. they must be inside the AABB to be valid hits) so that they do not display indefinitely into the distance.
            </p>
            <h2 id="csg" className="raleway-title">
                Constructive Solid Geometry
            </h2>
            <h2 id="acceleration" className="raleway-title">
                Acceleration Structures
            </h2>
            <h3 id="aabb" className="raleway-title">
                Axis-aligned Bounding Box (AABB)
            </h3>
            <h3 id="bv" className="raleway-title">
                14-Plane Bounding Volumes
            </h3>
            <h3 id="bvh" className="raleway-title">
                Bounding Volume Heirarchies (BVH)
            </h3>
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
            <p>
                Perfect mirrors assume that all incident light is perfectly reflected about their surface normal according to the law of 
                reflection: <Latex>{`$\\theta_i = \\theta_r$`}</Latex>.
                This gives rise to the below equation via basic geometry, which can be used to calculate the reflection of an incident direction about a normal <Latex>{`$\\textbf n$`}</Latex>.
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>{`$\\omega_r = \\omega_i - 2(\\omega_i \\cdot \\textbf n)\\textbf n$`}</Latex>
                </div>
                <br />
                It should be noted that directional vectors are always normalised.
                (otherwise some very strange and difficult to debug results can occur!)
                <br /><br />
                Now that the reflection direction about a normal can be calculated, rendering a perfect mirror material is a fairly simple process;
                a primary ray is cast from the camera, and upon hitting a perfect mirror at <Latex>{`$\\textbf x$`}</Latex>, a secondary ray is generated at <Latex>{`$\\textbf x$`}</Latex> with direction
                calculated via <Latex>{`$\\omega_r$`}</Latex>. This is done recursively until a non-specular surface is hit. Radiance is still accumulated at specular
                hits of the recursive ray cast, allowing for tinted mirrors.
                <br /><br />
                A final consideration is one for avoiding infinite loops. The above process will infinitely loop in the case where an infinite mirror
                setup is created (two mirrors facing one another with opposite normals, and a ray fired along one of these normals). To avoid this,
                a maximum recursion depth must be defined to terminate the recursion after a certain amount of bounces. Luckily, this doesn’t
                majorly affect the rendered image for most scenes, and still 5 to 8 bounces is enough to get a very realistic looking reflection even
                with multiple participating mirror surfaces.
                <br /><br />
                <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                    <Image preview={false} src={mirror_bounce_1} />
                    <Image preview={false} src={mirror_bounce_3} />
                    <Image preview={false} src={mirror_bounce_5} />
                    <Image preview={false} src={mirror_bounce_8} />
                </Carousel>
            </p>
            <h2 id="dielectrics" className="raleway-title">
                Dielectrics
            </h2>
            <p>
                Dielectrics are materials which can additionally refract incident light through them causing radiance to be transmitted through
                the object. A common example is glass. Refraction is handled the same as reflection in that secondary specular rays are generated, however their direction is
                calculated according the below equation, derived from Snell's law.
            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$\\omega_r = r\\omega_i + \\textbf n \\bigg(rc- \\sqrt{1 - r^2(1 - c^2)}\\bigg) \\ \\ \\ \\text{where } c=-\\textbf n \\cdot \\omega_i, \\ \\text{and } {r=\\frac{\\eta_1}{\\eta_2}}$`}</Latex>
            </div>
            <br />
            <p>
                A few technical considerations here are that when light exits a medium, the normal of the medium should be flipped if necessary
                to face the incident specular ray (i.e. <Latex>{`$\\omega_i\\cdot \\textbf n \\lt 0$`}</Latex>) as Equation 3 only deals light incident to the normal. 
                In a similar manner, <Latex>{`$\\eta_1$`}</Latex> should
                always be the index of refraction of the material the light is transmitting <i>from</i> and <Latex>{`$\\eta_2$`}</Latex> that of the material transmitting <i>into</i>. Thus
                if making the assumption that light goes from material to air or vice versa (which is true for this implementation), r must be flipped.
                Lastly, total internal reflection must be considered as it causes the expression within the square root to become negative. Therefore
                the enclosed expressed should be checked for negativity beforehand. Figure 6 shows spheres with varying indices of refraction.
            </p>
            <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <Image preview={false} src={dielectric_refract_1_0} />
                <Image preview={false} src={dielectric_refract_1_3} />
                <Image preview={false} src={dielectric_refract_1_5} />
                <Image preview={false} src={dielectric_refract_1_7} />
                <Image preview={false} src={dielectric_refract_2_5} />
            </Carousel>
            <p>
                Refraction alone isn't quite the full picture though. Dielectrics are materials which both reflect <i>and</i> refract. Common real-life
                examples are glass and water surfaces. It is not immediately obvious that this is the case - but with a keen eye one can notice that
                both water and glass become mirror-like at oblique viewing angles. The formal name for this effect is the 'Fresnel effect' - it formally
                describes the ratio of reflectivity (reflection) against transmittance (refraction) as a function of viewing angle (angle of incidence).
                The equation to compute this ratio given <Latex>{`$\\omega_i$`}</Latex> is
                quite complex (to look at, and computationally), so instead Schlick's approximation,
                a cheap yet relatively accurate approximation, can be used:
            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$R=R_0+(1 - R_0)(1-\\textbf n \\cdot \\omega_i)^5 \\ \\ \\ \\text{where } R_0=\\big(\\frac{\\eta_1-\\eta_2}{\\eta_1 + \\eta_2}\\big)^2$`}</Latex>
            </div>
            <br />
            <p>
                The reflectivity and transmittance act as coefficients for the gathered radiance from the cast specular rays. It should also be
                noted that as reflectivity and transmittance are in a ratio with one 
                another, <Latex>{`$T = 1-R$`}</Latex>. The full Fresnel term is also included
                for completeness, and is more accurate at the cost of render time. A comparison is shown below.
            </p>
            <Carousel autoplay autoplaySpeed={3000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <Image preview={false} src={dielectric_fresnel_f} />
                <Image preview={false} src={dielectric_fresnel_s} />
            </Carousel>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="rendering-tech" className="raleway-title">
                Useful Rendering Techniques
            </h1>
            <h2 id="distributed-raytracing" className="raleway-title">
                Distributed Raytracing
            </h2>
            <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <Image preview={false} src={shadows_1} />
                <Image preview={false} src={shadows_5} />
                <Image preview={false} src={shadows_10} />
                <Image preview={false} src={shadows_25} />
                <Image preview={false} src={shadows_50} />
                <Image preview={false} src={shadows_100} />
                <Image preview={false} src={shadows_200} />
            </Carousel>
            <h2 id="ssaa" className="raleway-title">
                Super-Sampling Anti-Aliasing (SSAA)
            </h2>
            <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <Image preview={false} src={ssaa_0} />
                <Image preview={false} src={ssaa_5} />
                <Image preview={false} src={ssaa_10} />
                <Image preview={false} src={ssaa_25} />
                <Image preview={false} src={ssaa_50} />
            </Carousel>
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
