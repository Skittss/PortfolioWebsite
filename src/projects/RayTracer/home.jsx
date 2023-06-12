import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image, Carousel, Grid } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import f_img_direct from '../../content/projects/RayTracer/tea_cerem_direct.png'
import f_img_indirect from '../../content/projects/RayTracer/tea_cerem_indirect.png'
import f_img_specular from '../../content/projects/RayTracer/tea_cerem_specular.png'
import f_img_caustic from '../../content/projects/RayTracer/tea_cerem_caustic.png'
import f_img from '../../content/projects/RayTracer/tea_cerem_2048.png'

import csg_completed from '../../content/projects/RayTracer/csg/csg_completed_brighter-crop.png'
import csg_breakdown from '../../content/projects/RayTracer/csg/csg-breakdown.png'
import csg_t_values from '../../content/projects/RayTracer/csg/t-value-operations.png'
import csg_fsm from '../../content/projects/RayTracer/csg/csg-fsm.png'

import quad_cone from '../../content/projects/RayTracer/quadratics/cone.png'
import quad_cylinder from '../../content/projects/RayTracer/quadratics/cylinder.png'
import quad_ellipse from '../../content/projects/RayTracer/quadratics/ellipse.png'
import quad_hyp_cylinder from '../../content/projects/RayTracer/quadratics/hyperbolic-cylinder.png'
import quad_hyp_paraboloid from '../../content/projects/RayTracer/quadratics/hyperbolic-paraboloid.png'
import quad_hyp_one_sheet from '../../content/projects/RayTracer/quadratics/hyperboloid-one-sheet.png'
import quad_hyp_two_sheet from '../../content/projects/RayTracer/quadratics/hyperboloid-two-sheet.png'
import quad_paraboloid from '../../content/projects/RayTracer/quadratics/parabolic.png'

import face_normals from '../../content/projects/RayTracer/normals/face_normals.png'
import vertex_normals from '../../content/projects/RayTracer/normals/vertex_normals.png'

import bounding_overlay from '../../content/projects/RayTracer/bounding/bv_overlay.png'

import lambertian from '../../content/projects/RayTracer/materials/lambertian_diffuse.png'
import phong from '../../content/projects/RayTracer/materials/phong.png'

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

import photon_map_direct from '../../content/projects/RayTracer/photonmap/cornell-wi.png'
import photon_map_global from '../../content/projects/RayTracer/photonmap/cornell-pm.png'
import photon_map_global_vis from '../../content/projects/RayTracer/photonmap/global_photon_map_visualisation.png'
import photon_map_caustic_vis from '../../content/projects/RayTracer/photonmap/caustic_photon_map_visualisation.png'

import c_img_direct from '../../content/projects/RayTracer/photonmap/cornell-wi-512.png'
import c_img_indirect from '../../content/projects/RayTracer/photonmap/indirect_illum_1035313n.png'
import c_img_specular from '../../content/projects/RayTracer/photonmap/specular_glossy.png'
import c_img_caustic from '../../content/projects/RayTracer/photonmap/caustics_filter_1024162.png'
import c_img from '../../content/projects/RayTracer/photonmap/cornell-pm-512.png'

import plane_intersection_code from '../../content/projects/RayTracer/code_snippets/plane_intersection'
import sphere_intersection_code from '../../content/projects/RayTracer/code_snippets/sphere_intersection'
import cuboid_intersection_code from '../../content/projects/RayTracer/code_snippets/cuboid_intersection'
import triangle_intersection_code from '../../content/projects/RayTracer/code_snippets/triangle_intersection'

import hemisphere_scatter_code from '../../content/projects/RayTracer/code_snippets/hemisphere_scatter'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';

const { useBreakpoint } = Grid;

const Home = () => {
    const screens = useBreakpoint();

    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb} >
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1000px"}}>
                <AnnotatedImage preview={false} src={f_img} annotation={"Example render with global illumination"}/>
                <AnnotatedImage preview={false} src={f_img_direct} annotation={"Stage 1: Direct illumination"}/>
                <AnnotatedImage preview={false} src={f_img_indirect} annotation={"Stage 2: Indirect illumination (diffuse)"} />
                <AnnotatedImage preview={false} src={f_img_specular} annotation={"Stage 3: Specular and Glossy"} />
                <AnnotatedImage preview={false} src={f_img_caustic} annotation={"Stage 4: Indirect illumination (caustics)"} />
            </Carousel>
            <p>
                In this project, I delve into the powerful realm of ray tracing — a groundbreaking light transport technique 
                that has reshaped the landscape of computer graphics. As technology advances, so does the demand for more realistic and immersive visual experiences in various applications such as gaming and animation. 
                Ray tracing has emerged as a game-changer, enabling us to simulate the intricate behavior of light, resulting in visually stunning and physically accurate renders.
                <br/><br/>
                This post is not entirely designed as a zero-knowledge read, and instead is probably best utilised as supplementary material when   
                you have the basic concepts of 3D rendering and raytracing pinned down. I recommend two great reads if you don't feel comfortable jumping in 
                here: <a target="_blank" href="https://www.scratchapixel.com/index.html">Scratchapixel</a> and <a target="_blank" href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">Ray Tracing in One Weekend</a> which
                go into more detail than I do, albeit with a slightly different focus (no photon-mapping for example).

                <br /><br />
                The source code for this renderer will be made open-source at a later date.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="int-raycast" className="raleway-title">
                Rendering Objects by Casting Rays
            </h1>
            <p>
                Consider a 3D scene. At its simplest, we have lights, objects, and a virtual camera. How do we generate an image of the objects, given
                the lights, from the viewpoint of the camera? In games and alike, perspective projection is used to map each object onto the image plane of the
                camera as the intrinsic properties of the camera are known, as well as the geometric information of all objects. This has the benefit of being
                fast to run, but in doing so we ommit detail. For example, it might not be immediately obvious how we produce shadows using projection. Or a bigger challenge - 
                how would we render a mirror, or transparent objects such as glass? Rendering these phenomena is an inherit challenge with projection-based rendering, and
                thus sets the stage for raytracing. Raytracing is a light transport technique; it accurately simulates how light in the scene interacts with objects and eventually makes its
                way to a virtual camera, producing an image. The simulation of the light itself allows for physically accurate renders to be produced, contrary to projection-based rendering
                which employs auxilliary techniques to mimic physical phenomena.
                <br/><br />
                Light travels in straight lines. This makes rays an appropriate data structure to keep track of how light travels throughout a scene.
                Rays are vectors in 3D space, defined by an origin point <Latex>{`$O$`}</Latex> and direction <Latex>{`$D$`}</Latex>. From this, we can identify every point that falls upon
                the ray with a line defined by a 'distance' parameter <Latex>{`$t$`}</Latex>:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$R=O+Dt$`}
                    </Latex>
                </div>
                <br />
                In other words, we can find any point along the line by starting at the origin of the ray, and traversing <Latex>{`$t$`}</Latex> distance
                along the line in the direction of the ray.
                <br /><br />
                But how do we render objects using rays? The basic idea is to cast a ray for each pixel in your target image, and find where each ray intersects an object
                in the scene. We calculate the lighting and the intersection point, which determines the pixel colour. Repeating this process for each pixel gives us the final
                render. From this brief description, it should be apparent why raytracing on GPUs has been a recent topic of interest - the process is <i>extremely</i> parallelisable,
                allowing GPU acceleration to push render times into realtime.
            </p>
            <br />
            <h1 id="core-concept" className="raleway-title">
                An Overview of Lighting Calculations
            </h1>
            <p>
                How do we calculate lighting at intersection points? This process is variable depending on the specific raytracing technique used,
                but in general, we calculate a <i>Bidirectional Reflectance Distribution Function</i> (BRDF) at each intersection. This function defines
                the characteristics of an objects material. At its most basic, this is colour, but may also incorporate other properties such as specular highlight approximations (e.g. in Phong materials).
                This function can be defined in any way you see fit, and may not necessarily be physically accurate.
                <br /><br />
                The BRDF is defined as <Latex>{`$f_r(\\textbf x, \\omega_i, \\omega_r)$`}</Latex>, a function of the intersection point <Latex>{`$\\textbf x$`}</Latex> in local coordinate space of the object,
                incident light direction <Latex>{`$\\omega_i$`}</Latex>, and reflected light direction <Latex>{`$\\omega_r$`}</Latex>.
                Typically, <Latex>{`$\\omega_r$`}</Latex> is simply <Latex>{`$-D$`}</Latex>, i.e. the vector from the intersection point towards the camera, and <Latex>{`$\\omega_i$`}</Latex> can 
                be calculated by assuming light has come from a light in the scene, i.e. <Latex>{`$\\textbf x - O_\\text{light}$`}</Latex>.
            </p>
            <br />
            <h2 id="ray-shadow" className="raleway-title">
                Basic Shadows
            </h2>
            <p>
                The BRDF alone does not paint the full picture of rendering as we still need a way of incorporating shadows. The simplest way of computing hard regions of shadow is to cast a secondary ray at the intersection 
                point <Latex>{`$\\textbf x$`}</Latex> towards lights, and only calculate the BRDF if the light is not occluded (i.e. there is no intersection between the ray and an object).
                <br /><br />
                This simple approach works well for direct illumination (where we do not simulate light bouncing), but is not applicable to other parts of global illumination, which we will visit next.
                Further down the line we will additionally look at a method to render soft shadows, as this simple approach can only render strict shadow boundaries.
            </p>
            <br />
            <h2 id="global-illum" className="raleway-title">
                Global Illumination
            </h2>
            <p>
                The main benefit of raytacing is that we can simulate many light bounces and BRDF interactions from each ray cast, aggregating them to produce a final colour.
                These light bounces might not come directly from a light therefore. This is called <b>global illumination</b>. We consider light from all sources, including that which has been indirectly bounced
                around the scene. We need extra algorithms and data structures to support this kind of bouncing however, so at its simplest we can not allow bouncing, giving only <b>direct illumination</b>.
            </p>
            <br />
            <h3 id="rendering-eq" className="raleway-title">
                The Rendering Equation
            </h3>            
            <p>
                The rendering equation, introduced by James T. Kajiya, mathematically formalises the calculation of lighting, or 'reflected radiance'. 
                I find it beneficial to keep this equation in mind, as it exactly defines what calculations we should do at each intersection and can make organising
                code a lot easier.
                <br /><br />
                The rendering equation is defined as
            </p>
            <p>
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L_r(\\textbf{x}, \\omega_i, \\omega_r) =
                        L_e + \\displaystyle\\int_\\Omega f_r(\\textbf{x}, \\omega_i, \\omega_r) L_i(\\textbf{x}, \\omega_i)(\\omega_i \\cdot \\textbf n)\\ d\\omega_i $`
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
                hemisphere above <Latex>{`$\\textbf x$`}</Latex> (<Latex>{`$\\Omega$`}</Latex>). We multiply each incident ray by the BRDF <Latex>{`$f_r$`}</Latex> for its given direction to determine how much of the incident
                light is reflected along <Latex>{`$\\omega_r$`}</Latex> - thus giving reflected radiance. 
                We also apply Lambert's cosine law via <Latex>{`$(\\omega_i \\cdot x)$`}</Latex>.
                <br /><br />
                The method by which this integral is approximated depends on the specific lighting implementation we are wishing to achieve.
                We are able to fit global illumination models and direct-illumination models (roughly) under this definition. For example, the basic
                direct-illumination ray tracing model can be described as approximating the integral by taking <Latex>{`$\\Omega$`}</Latex> as the set of directions to visible
                lights from <Latex>{`$\\textbf x$`}</Latex>. Monte Carlo Ray Tracing makes use of Monte Carlo techniques to approximate the integral with a large number of
                importance sampled <Latex>{`$\\omega_i $`}</Latex> rays. And in similar fashion, photon mapping uses light bounce caching via the photon map to provide an estimate of <Latex>{`$L_i$`}</Latex> for all
                directions <Latex>{`$\\omega_i \\in \\Omega$`}</Latex>.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="int-test" className="raleway-title">
                Geometry - Intersection Testing
            </h1>
            <p>
                We now know that to render an individual pixel, we cast a ray for it, and determine which object in the scene it has hit. We then
                calculate lighting at that point, resulting in a colour for the pixel. In order to determine which object has been hit, we can begin by naively
                checking every object in the scene for intersection, and choose the one which was closest to the camera. It is worth noting that this is a particularly
                slow approach (especially when scenes have many objects), so we will consider acceleration structures to speed this process up later in this section.
                <br /><br />
                The remainder of this section outlines how to calculate intersection points for a number of useful primitives: triangles (used in meshes), flat planes (and curved quadratic variants), spheres, and cuboids.
                The goal is to find the t-value for a given ray which intersects the primitive. We also need to calculate surface normals at intersection points in order to calculate lighting.
                Additionally, we will explore constructive solid geometry, which allows us to combine these basic primitives into more complex objects via boolean operations.
            </p>
            <br />
            <h2 id="int-plane" className="raleway-title">
                Planes
            </h2>
            <p>
                We can determine if a ray intersects a given plane by noting that the vector from the plane center to any point on the plane will be perpendicular to the plane normal. i.e.
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$(p - O_p)\\cdot n = 0$`
                        }
                    </Latex>
                </div>
                <br />
                From this, we can determine if a ray intersects the plane by observing that if they indeed intersect, then there will be a common point between them, i.e. substitute <Latex>{`$p$`}</Latex> for the ray equation:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$((O_r + Dt) - O_p)\\cdot n = 0$`
                        }
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$\\implies Dt\\cdot n + (O_r - O_p) \\cdot n = 0$`
                        }
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$\\implies t = \\displaystyle\\frac{(O_p - O_r)\\cdot n}{D \\cdot n} $`
                        }
                    </Latex>
                </div>
                <br />
                Thus we have found the point of intersection (if it exists).
                <br /><br />
                We are not quite done however. If we were only to calculate this t-value with no other considerations, we would not be able to give the plane specific dimensions (width and height).
                As it stands, any the plane will have infinite width and height. We can add width and height into the intersection calculation by considering an alternative vector definition of a 3D plane:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$p=O_p + u\\lambda + v\\mu$`
                        }
                    </Latex>
                </div>
                <br />
                By ensuring that <Latex>{`$\\lambda$`}</Latex> and <Latex>{`$\\mu$`}</Latex> are perpendicular along the plane (i.e. they form an orthonormal basis with the plane normal), we can 
                easily cull intersections which fall outside a certain distance in each direction. This allows us to give the plane a width and height, instead of it being infinite.
                It is easy to calculate this orthonormal basis: We provide an up vector (normal) and right vector (tangent) and can calculate the bitangent by taking the cross product of them.
                <br /><br />
                An implementation of this intersection calculation is shown in the code snippet below.
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {plane_intersection_code}
                </SyntaxHighlighter>
            </div>
            <p>
                Finally, the surface normal at an intersection point is constant, and provided with the definition of the plane.
            </p>
            <br />
            <h2 id="int-triangle" className="raleway-title">
                Triangles
            </h2>
            <p>
                Triangles are perhaps the most important primitive to be able to render. By rendering triangles, we can render arbitrary triangle meshes which are ubiquitous in computer graphics.
                Throughout this post, this can be seen with the Utah Teapot - all renders of it were made using a triangle mesh loaded from a .obj file. 
                <br /><br />
                Triangle intersection is well explored and well optimised. In this implementation the standard 'Moller Trumbore' algorithm is used to calculate the intersection.
                The core idea behind this algorithm is to use Barycentric Coordinates to calculate a potential intersection point. Barycentric coordinates express points as a linear combination of vertex positions.
                in this case, we define a potential intersection point as a linear combination of the triangles 3 vertices:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$p=(1-u-v)v_1 + uv_2 + vv_3$`
                        }
                    </Latex>
                </div>
                <br />
                A valid intersection point is one with valid with valid coefficients for <Latex>{`$v_1, v_2, v_3$`}</Latex>, i.e. <Latex>{`$u + v = 1$`}</Latex>. 
                The algorithm calculates these coefficients for the potential intersection point, and rejects any intersections where the above property does not hold.
                <br /><br />
                A C++ implementation is shown below.
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {triangle_intersection_code}
                </SyntaxHighlighter>
            </div>
            <p>
                The surface normal for a triangle is a constant, and can be calculated via the cross product like in a plane. However, usually we load these normals from a file
                when dealing with triangular meshes. This makes our job easier, but we also must consider the implication of using a single normal for an entire triangle.
                <br /><br />
                In a large mesh, triangles are usually an approximation of the true geometric form we wish to capture. If we could easily and efficiently render arbitrary continuous surfaces, we would.
                When using a single surface normal for a whole triangle, this approximation becomes more apparent. For smooth surfaces, it would be beneficial if we could change the surface normal of a triangle
                depending on where it is hit. Thus we could mimic smoother lighting on a low-poly surface without giving up lots of performance by using many more triangles.
                <br /><br />
                Per-vertex normals solve this problem. Using the barycentric coordinates generated from the moller-trumbore algorithm (<Latex>{`$u$`}</Latex> and <Latex>{`$v$`}</Latex>), we can
                interpolate between vertex normals, giving a smooth looking surface with only a few triangles. Vertex normals may be provided within the mesh file, but they can also be computed manually by averaging the face normals of neighbouring faces otherwise. In a triangle mesh, we consider three adjacent faces for each triangle.
            </p>
            <Carousel autoplay autoplaySpeed={3000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "512px"}}>
                <AnnotatedImage preview={false} src={face_normals} annotation={"Triangular mesh rendered with face normals."}/>
                <AnnotatedImage preview={false} src={vertex_normals} annotation={"Triangular mesh rendered with vertex normals and interpolation."}/>
            </Carousel>
            <br />
            <h2 id="int-sphere" className="raleway-title">
                Spheres
            </h2>
            <p>
                Calculating the intersection of a sphere is simple, and is derrived from its cartesian definition:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$x^2+y^2+z^2=R^2$`
                        }
                    </Latex>
                </div>
                <br />
                Thus we can implicitly define a point on the surface of the sphere as
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$p^2-R^2=0$`
                        }
                    </Latex>
                </div>
                <br />
                Similarly to the intersection for a plane; if there is an intersection, there will be a common point between the sphere and the ray equation.
                Therefore substituting <Latex>{`$p=O + Dt$`}</Latex>:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$(O + Dt)^2-R^2=0$`
                        }
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$\\implies D^2t^2 + 2ODt + O^2 - R^2=0$`
                        }
                    </Latex>
                </div>
                <br />
                gives a quadratic equation for <Latex>{`$t$`}</Latex> which can be solved via the general quadratic formula where <Latex>{`$a=D^2,\\ b=2OD,\\ c=O^2-R^2$`}</Latex>.
                <br /><br />
                This intersection calculation, with variable center point for the sphere <Latex>{`$O_s$`}</Latex> is implemented as below.
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {sphere_intersection_code}
                </SyntaxHighlighter>
            </div>
            <p>
                Additionally, we need the surface normal on the sphere at the point of intersection. This is simply the vector from the sphere center to the intersection point, normalised:
            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>
                    {
                        `$\\textbf n = (p - O_s) / R$`
                    }
                </Latex>
            </div>
            <br />
            <h2 id="int-cuboid" className="raleway-title">
                Cuboids
            </h2>
            <p>
                To implement cuboid intersection, the <i>Axis-aligned bounding box</i> (AABB) algorithm can be used. By default, the algorithm works on a box centered at the origin
                and aligned with the 3 primary axes, but we are able to position it anywhere in 3D space by defining a local coordinate system. We define a local position a local orthonormal basis (set of axes) aligned with the edges of the cuboid. We then  
                convert the ray position and direction into this local coordinate space before doing the AABB calculation. In this local coordinate space, the cuboid is centered at the origin and aligned with the primary axes,
                so AABB can now be used.
                <br /><br />
                The idea behind the AABB intersection algorithm is that we can easily define 6 straight lines with the minimum and maximum extents of each primary axis, which in turn correspond with each edge of the cuboid.
                E.g. <Latex>{`$x=\\min_x, y=\\min_y, z=\\min_z$`}</Latex> and similarly for the maximum bounds. We can perform a simple substitution with the ray equation in the targetted axis to calculate the t-value for each one, for example in <Latex>{`$x$`}</Latex>:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$O_x+D_xt=\\min_x$`
                        }
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {
                            `$\\implies O_x+D_xt=\\displaystyle\\frac{\\min_x - O_x}{D_x}$`
                        }
                    </Latex>
                </div>
                <br />
                Finally, we check if the t-value of each intersection falls within the bounds of the cuboid (as the lines extend in each axis indefinitely), and note that in order to have a valid 
                box intersection, we need valid intersection pair from different primary axes. In other words, we have an intersection only when the ray enters the cuboid from one face, and exits through another.
                <br /><br />
                An optimised implementation of the above is shown below.
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {cuboid_intersection_code}
                </SyntaxHighlighter>
            </div>
            <p>
                To get the surface normal of an intersection in AABB, we can simply index from a predefined table depending on the position of the intersection point (i.e. which minimum bound it lays on).
                In local coordinate space, there are 6 fixed surface normals:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>{`$\\begin{pmatrix}1\\\\ 0 \\\\ 0\\end{pmatrix},$`}</Latex>
                    <Latex>{`$\\begin{pmatrix}-1\\\\ 0 \\\\ 0\\end{pmatrix},$`}</Latex>
                    <Latex>{`$\\begin{pmatrix}0\\\\ 1 \\\\ 0\\end{pmatrix},$`}</Latex>
                    <Latex>{`$\\begin{pmatrix}0\\\\ -1 \\\\ 0\\end{pmatrix},$`}</Latex>
                    <Latex>{`$\\begin{pmatrix}0\\\\ 0 \\\\ 1\\end{pmatrix},$`}</Latex>
                    <Latex>{`$\\begin{pmatrix}0\\\\ 0 \\\\ -1\\end{pmatrix}$`}</Latex>
                </div>
                <br />
                which are then transformed into global coordinate space by performing the inverse of the global to local coordinate calculation performed earlier.
            </p>
            <br />
            <h2 id="int-quadratic" className="raleway-title">
                Quadratic Surfaces
            </h2>
            <p>
                Quadratic surfaces are characterised by second degree polynomials. They are very similar to ubiquitous second-degree polynomials
                in <Latex>{`$\\R^2$`}</Latex> which are undoubtedly familiar: <Latex>{`$y=x^2$`}</Latex> (parabola), <Latex>{`$x^2 + y^2 = r$`}</Latex> (circle), etc. 
                It would be more appropriate to call these unique cases (formally, normal forms) of the general quadratic equation. 
                Quadratic surfaces are the same concept but applied to <Latex>{`$\\R^3$`}</Latex> defined by the following:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$Ax^2 + By^2 + Cz^2 + Dxy + Eyz + Fxz + Gx + Hy + Iz + J = 0$`}
                    </Latex>
                </div>
                <br />
                The ray-intersection calculation is handled no differently than for any other implicit surface, and the specific t-values can be
                calculated using the quadratic equation after performing the substitution <Latex>{`$\\begin{pmatrix} x & y & z\\end{pmatrix} = O + Dt$`}</Latex>  on
                the above equation where <Latex>{`$O$`}</Latex> and <Latex>{`$D$`}</Latex> are the ray origin and direction respectively. This results in a system of equations for t which can
                be solved via matrix calculations.
                <br/><br/>
                The only remaining task is calculating the surface normals, which is again no different than
                for any other continuous implicit surface; the partial derivative of the quadratic surface equation in <Latex>{`$x$`}</Latex>, <Latex>{`$y$`}</Latex> and <Latex>{`$z$`}</Latex>. 
                Below are the different normal form quadratic surfaces capable of being created via the above equation.
                <br /><br />
                <Carousel autoplay autoplaySpeed={3000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                    <AnnotatedImage src={quad_ellipse} annotation={<>Ellipse <Latex>{`$(C=0.5)$`}</Latex></>} />
                    <AnnotatedImage src={quad_cone} annotation={<>Cone <Latex>{`$(B=-1,\\ J=0)$`}</Latex></>} />
                    <AnnotatedImage src={quad_cylinder} annotation={<>Cylinder <Latex>{`$(B=0)$`}</Latex></>} />
                    <AnnotatedImage src={quad_paraboloid} annotation={<>Paraboloid <Latex>{`$(B,J=0,\\ H=-1)$`}</Latex></>} />
                    <AnnotatedImage src={quad_hyp_one_sheet} annotation={<>Hyperboloid of 1 sheet <Latex>{`$(B=-1)$`}</Latex></>} />
                    <AnnotatedImage src={quad_hyp_two_sheet} annotation={<>Hyperboloid of 2 sheets <Latex>{`$(B=-1,\\ J=1)$`}</Latex></>} />
                    <AnnotatedImage src={quad_hyp_cylinder} annotation={<>Hyperbolic Cylinder <Latex>{`$(B=0,\\ C=-1)$`}</Latex></>} />
                    <AnnotatedImage src={quad_hyp_paraboloid} annotation={<>Hyperbolic Paraboloid <Latex>{`$(B,J=0,\\ C,H=-1)$`}</Latex></>} />
                </Carousel>
                <br />
                In order to visualise these quadratic surfaces properly, an axis-aligned bounding box (AABB) is used to bound any
                intersection points (i.e. they must be inside the AABB to be valid hits) so that they do not display indefinitely into the distance.
            </p>
            <br />
            <h2 id="csg" className="raleway-title">
                Constructive Solid Geometry
            </h2>
            <Row gutter={[16, 0]} style={{margin: "0 auto", width: "100%", maxWidth: "1000px"}}>
                <Col span={screens.sm ? 12 : 24}>
                    <Image src={csg_completed}/>
                </Col>
                <Col span={screens.sm ? 12 : 24}>
                    <Image src={csg_breakdown}/>
                </Col>
            </Row>
            <br />
            <p>
                Constructive solid geometry is a technique which allows solids to be combined via boolean operations, allowing more complex geometry to be constructed
                from basic primitives. The basic three operations we will be working with here are union, intersection, and difference. For example, we could create a disc
                via calculating the intersection of a sphere and a cuboid.
                <br /><br />
                Constructive solid geometry is implemented as the post-order traversal of a binary tree of 3D objects under elementary set
                operations. We organise objects in a tree as we want to be able to calculate boolean operations between multiple objects, not just between a pair.
                Post order traversal ensures the lowest-level intersections are calculated first and allows them be combined via set
                operations as the traversal moves up the tree. Nodes of the CSG tree are created by providing pairs of other CSG nodes or just
                basic 3D objects. The tricky part of implementing CSG comes down to calculating the intersection, union, and difference of two
                sets of ray-intersections (hits). Luckily, this problem can be visualised and reduced to calculating these operations on two 1D number
                lines:
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage src={csg_t_values}/>
            </div>
            <p>
                Calculating the union is rather straight forward. The problem can be thought of the same as matching parentheses. The two
                sets of hits are merged into one and a depth <Latex>{`$d$`}</Latex> is defined. The merged set of hits is iterated over, with <Latex>{`$d$`}</Latex> denoting how many objects
                we are in at each iteration. <Latex>{`$d$`}</Latex> is initialised at 0, 1, or 2 depending on if the first hits for the two objects were entering or exiting
                hits. Upon entering an object, <Latex>{`$d$`}</Latex> is incremented, and upon exiting an object, <Latex>{`$d$`}</Latex> is decremented. Under this algorithm, the set of
                union points is just the set of points at which <Latex>{`$d=0$`}</Latex> before entering, or <Latex>{`$d=0$`}</Latex> after exiting.
                <br /><br />
                Calculating the difference and intersection is slightly more complicated, but they both follow a similar approach. Again, the
                sets of hits are merged into one, and are iterated over. Instead of keeping track of a depth value, the booleans <Latex>{`$L_\\text{prev},L_\\text{curr}$`}</Latex> and <Latex>{`$R_\\text{prev},R_\\text{curr}$`}</Latex> are
                defined which denote if we were in object <Latex>{`$L$`}</Latex> or <Latex>{`$R$`}</Latex> after the last hit, and if we are in them after the current hit that
                is being iterated over. This is easy to keep track of by checking if a hit is entering or exiting at each iteration. For the hit that
                is currently being iterated over, the equation below can be evaluated to check for intersection
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$I=((R_\\text{prev}\\ne R_\\text{curr})\\land (L_\\text{prev}\\lor L_\\text{curr}))\\lor((L_\\text{prev}\\ne L_\\text{curr})\\land(R_\\text{prev}\\lor R_\\text{curr}))$`}
                    </Latex>
                </div>
                <br />
                and the following for difference
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$I=((L_\\text{prev}\\ne L_\\text{curr})\\land (\\lnot R_\\text{prev}\\land \\lnot R_\\text{curr}))\\lor((R_\\text{prev}\\ne R_\\text{curr})\\land(L_\\text{prev}\\lor L_\\text{curr}))$`}
                    </Latex>
                </div>
                <br />
                The intuition for these equations can be thought of as a finite state machine, shown below. Intersection hits
                are the edges to and from state '<Latex>{`$L\\land R$`}</Latex>', and difference hits are the edges to and from '<Latex>{`$L$`}</Latex>'. It is worth noting that union could also
                be calculated in a similar fashion, however the depth approach above is more succinct.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage src={csg_fsm}/>
            </div>
            <p>
                The only real technical consideration remaining is that the normals of any hits selected from object <Latex>{`$R$`}</Latex> during a difference
                operation must be negated as they create a negative surface imprint.
            </p>
            <br />
            <h2 id="acceleration" className="raleway-title">
                Acceleration Structures
            </h2>
            <p>
                Rendering certain objects can become very costly when done naively. The main perpetrators in this implementation are mesh objects
                (i.e. the teapot) and CSG trees. The high cost can be attributed to their expensive intersection calculation. Without any acceleration
                structure, this intersection must be fully checked for every pixel in the rendered image. For a mesh, this may be thousands to
                hundreds of thousands of triangle intersections, per pixel in the image. This is extremely wasteful - for example if a mesh is visible for
                only a few pixels in the image, an overwhelming majority of intersections will be false yet we do full work for every pixel in the image
                <br /><br />
                Bounding objects are acceleration structures which cut the number of intersection calculations we have to do considerably. This
                is achieved by first coarsely defining the bounds of an object via a cheaper intersection algorithm, and only then doing an expensive
                intersection calculation when the coarse intersection evaluates to true.
            </p>
            <br />
            <h3 id="aabb" className="raleway-title">
                Bounding Primitives
            </h3>
            <p>
                A simple approach is to simply bound complex objects by a primitive volume, reusing the intersection code for that specific primitive.
                A common approach is to use a AABB (cuboid) as the calculation to fit
                the box to another object is simple - we simply make an AABB at the same position as the complex object, and with its width and height to the maximum and minimum object bounds.
                
                This will speed up intersection calculations considerably. We begin by doing a check against the primitive bounding volume, allowing us to cull
                any intersection calculations where it is obvious that there will never be an intersection. This notably increases performance when rendering triangular meshes, as the number of
                triangle intersection checks can be extremely large for each raycast.
            </p>
            <br />
            <h3 id="bv" className="raleway-title">
                14-Plane Bounding Volumes
            </h3>
            <p>
                Performance is still left on the table with AABB and primitives however. Bounding primitives usually only loosely fit to the underlying object, meaning there are still many cases
                where we will end up doing a full intersection check when there should clearly be no intersections. Kay and Kajiya introduced
                a method for bounding volume calculations defined by 14 planes which closer approximates more complex geometry while still
                being cheap. This closer approximation allows for an even larger number of costly
                intersection calls to be culled. The planes defined for the volume are in pairs, similar in essence to opposite faces of an AABB,
                and in fact the first 6 planes are exactly that. The remaining 8 planes are pairs along each diagonal of the 3 primary axes. The
                intersection calculation is relatively simple. Intersection points for each plane-pair are calculated. If the closest intersection has
                a larger t-value than the furthest intersection (i.e. the ray is facing away from the pair of planes), then there must be no intersection.
                If this is not the case for all plane-pairs, there is a valid intersection.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1500px"}}>
                <AnnotatedImage src={bounding_overlay} annotation="14-plane bounding volume applied to a mesh of the Utah Teapot, visualised "/>
            </div>
            <br />
            <h3 id="bvh" className="raleway-title">
                Bounding Volume Hierarchies (BVH)
            </h3>
            <p>
                Bounding Volume Hierarchies allow us to further cull intersection calculations by arranging objects in our scene in a hierarchy. This is typically done using a tree data structure;
                we can use a binary tree, or a wider tree (i.e. variable number of nodes) to group similar objects better. 
                We create new bounding volumes (nodes) for groups of objects in our scene, allowing us to first quickly check this parent node for intersection
                and cull depending on the result. We know if a ray does not intersect a parent volume, it can't intersect any children.
                <br /><br />
                Though not implemented in this raytracer (as we work with typically a small number of objects), it is fairly easy to implement a simple BVH.
                Even a simple scene will be useful when dealing with scenes that are composed of many triangle-dense meshes for example. 
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="materials" className="raleway-title">
                Materials
            </h1>
            <p>
                Materials determine what colour an object is rendered with, using the lighting they are under. Materials are simply implementations of a BRDF calculation to calculate reflected radiance (loosely speaking, the colour we see).
                At a technical level, we need one procedure for doing the BRDF calculation, and another for sampling the incident radiance which is used in the calculation. This is because different
                different materials interact with light in different ways, and is a particular concern with <i>global materials</i>, ones which sample radiance from 
                from different locations than just the intersection point (think reflection and refraction). We will encounter examples of these materials later.
                <br /><br />
                Before we begin, some terminology. Albedo <Latex>{`$(\\rho)$`}</Latex> refers to the intrinsic colour of an object. It specifically defines 
                the distribution of reflected light from an object (i.e. what proportion of RGB bands are reflected), but can be thought of simply as 'base colour'.
                We may choose to define more than one albedo for an object which describes the colour of reflected light under different circumstances. A good example of this is the Phong lighting model,
                in which we define 3 separate albedos for ambient, diffuse, and specular lighting.
            </p>
            <br />
            <h2 id="diffuse" className="raleway-title">
                Lambertian Diffuse
            </h2>
            <p>
                Lambertian Diffuse is a simple material that only incorporates diffuse lighting onto the target object.
                Diffuse lighting refers to soft and gradual shadows which arise on matte materials from the random scattering of light at an object's
                surface. When light hits the surface, it can be thought of being randomly scattered in a hemisphere above the intersection location (this is a simplification -
                in reality there is some level of <i>subsurface scattering</i>). The intensity of reflected light obeys Lambert's cosine law, in other words, it is less intense at oblique viewing angles.
                This can be characterised by the following BRDF:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$f_r(\\textbf x. \\omega_i, \\omega_r)=\\displaystyle\\frac{\\rho_d}{\\pi}$`}
                    </Latex>
                </div>
                <br />
                noting that lambert's cosine term <Latex>{`$(\\omega_i\\cdot \\textbf n)$`}</Latex> is included in the full rendering equation.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage src={lambertian} annotation="Cube rendered with a lambertian diffuse material."/>
            </div>
            <br />
            <h2 id="phong" className="raleway-title">
                Phong Lighting Model
            </h2>
            <p>
                The Phong lighting model incorporates ambient, diffuse, and specular approximations into the lighting calclation. Diffuse lighting we have seen already with
                Lambertian Diffuse, but what are ambient and specular lighting? Ambient lighting refers to the <i>ambient light</i> in a scene, under which all objects are influenced
                even without making specific lights objects to emit the light. This is simply a constant light colour which all objects should be affected by. Specular lighting are intense
                reflections of light caused by light directly reflecting into the camera. We see this is glossy objects, mirrors, and alike. Some proper specular materials are introduced later (Mirrors, dielectrics),
                but we can make some simple approximations of specular lighting and incorporate them into the BRDF calculation.
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$f_r(\\textbf x. \\omega_i, \\omega_r)=L_\\text{ambient} + L_\\text{diffuse} + L_\\text{specular}$`}
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L_\\text{ambient} = \\rho_a$`}
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L_\\text{diffuse} = \\displaystyle\\frac{\\rho_d}{\\pi}$`}
                    </Latex>
                </div>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L_\\text{specular} = \\rho_s\\cdot(\\omega_r\\cdot\\text{reflect}(\\omega_i, \\textbf n))^\\alpha$`}
                    </Latex>
                </div>
                <br />
                Ambient lighting is a constant <Latex>{`$\\rho_a$`}</Latex>, and we reuse diffuse lighting calculations from lambertian diffuse, so the
                main addition here is the specular term. We incorporate a specular albedo for colour control, and calculate a similarity measure via cross product between the reflected radiance direction (usually the camera ray direction, inverted), and the perfect
                mirror-like reflection of light from the direction of incident radiance. What we are doing here is adding specular colour proportionally to how much light perfectly reflects into the camera, thus giving us specular highlights. <Latex>{`$\\alpha$`}</Latex> is
                included for highlight attenuation. Since <Latex>{`$\\omega_r\\cdot\\text{reflect}(\\omega_i, \\textbf n)\\in[0, 1]$`}</Latex>, exponentinentiation to <Latex>{`$\\alpha$`}</Latex> means values further from 1 will contribute less; exponential light falloff for the highlights. Thus, a higher
                value for <Latex>{`$\\alpha$`}</Latex> leads to sharper specular highlights. A typical value is <Latex>{`$\\alpha\\approx 20$`}</Latex>.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "512px"}}>
                <AnnotatedImage src={phong} annotation="Utah Teapot and a sphere rendered with a Phong material."/>
            </div>
            <br />
            <h2 id="textures" className="raleway-title">
                Basic Textures
            </h2>
            <p>
                So far, the albedos of our materials have been constant. This limits us only to block colours for our objects. Textures are images which we can map colour from onto objects, and are a big factor in making realistic, or artistically styled renders.
                The way colour information is mapped from texture to object is a <i>UV map</i>. We define UV coordinates for all of our geometry, which specifies what pixel we should look at in a texture image for the object's colour. 
                <br /><br />
                We have already implicitly seen a few ways of generating UV coordinates:
                In planes they were simply direction coefficients from the cartesian definition of plane-points, and for triangles they were given by the barycentric coordinates. In a triangular mesh, they are given per-vertex, and we interpolate texture colour across triangular faces.
                <br /><br />
                There are different ways to generate UV coordinates for a number of objects (e.g. spheres), but I will not delve into them all here.
                The rest of the implementation is easy once we generate UV coordinates, we simply replace <Latex>{`$\\rho$`}</Latex> in calculations 
                with a uv-read from a texture. This can be an image file, or even procedurally generated, such as the checkerboard pattern seen throughout this post.
            </p>
            <br />
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
                    <AnnotatedImage preview={false} src={mirror_bounce_1} annotation={"Mirrors with 1 bounce calculated"}/>
                    <AnnotatedImage preview={false} src={mirror_bounce_3} annotation={"Mirrors with 3 bounces calculated"}/>
                    <AnnotatedImage preview={false} src={mirror_bounce_5} annotation={"Mirrors with 5 bounces calculated"}/>
                    <AnnotatedImage preview={false} src={mirror_bounce_8} annotation={"Mirrors with 8 bounces calculated"}/>
                </Carousel>
                The implementation of mirrors outlined is a basic one - more complex mirrors such as 'fuzzy mirrors' can also be implemented by changing the
                BRDF. With fuzzy mirrors for example, instead of deterministically calculating the reflected ray <Latex>{`$\\omega_r$`}</Latex>, we can sample 
                from a cone centered about the perfect reflection angle. This way, we mimick the scattering of light rays on an imperfect reflective
                surface. A simple way of implementing this is to choose a random position on a sphere centered about
                a point on the true reflected ray. A higher radius sphere means more fuzz.
            </p>
            <br />
            <h2 id="dielectrics" className="raleway-title">
                Dielectrics
            </h2>
            <p>
                Dielectrics are materials which can additionally refract incident light through them causing radiance to be transmitted through
                the object. A common example is glass. Refraction is handled the same as reflection in that secondary specular rays are generated, however their direction is
                calculated according the below equation, derived from Snell's law.
            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{`$\\omega_r = r\\omega_i + \\textbf n \\bigg(rc- \\sqrt{1 - r^2(1 - c^2)}\\bigg) \\ \\ \\ \\text{where } c=-\\textbf n \\cdot \\omega_i, \\ \\text{and } {r=\\displaystyle\\frac{\\eta_1}{\\eta_2}}$`}</Latex>
            </div>
            <br />
            <p>
                A few technical considerations here are that when light exits a medium, the normal of the medium should be flipped if necessary
                to face the incident specular ray (i.e. <Latex>{`$\\omega_i\\cdot \\textbf n \\lt 0$`}</Latex>) as Equation 3 only deals light incident to the normal. 
                In a similar manner, <Latex>{`$\\eta_1$`}</Latex> should
                always be the index of refraction of the material the light is transmitting <i>from</i> and <Latex>{`$\\eta_2$`}</Latex> that of the material transmitting <i>into</i>. 
                Typically, we only consider cases of refraction where one material is air. The refractive index of air is 1.0003, which can be approximated as 1, 
                making refractive index calculations a lot nicer under this assumption.
                Lastly, total internal reflection must be considered as it causes the expression within the square root to become negative. Therefore
                the enclosed expressed should be checked for negativity beforehand. Figure 6 shows spheres with varying indices of refraction.
            </p>
            <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage preview={false} src={dielectric_refract_1_0} 
                    annotation={<>Hollow dielectric sphere <Latex>{`$(\\eta_2=1.0)$`}</Latex></>}
                />
                <AnnotatedImage preview={false} src={dielectric_refract_2_5} 
                    annotation={<>Refraction only sphere <Latex>{`$(\\eta_2=1.1)$`}</Latex></>}
                />
                <AnnotatedImage preview={false} src={dielectric_refract_1_7} 
                    annotation={<>Refraction only sphere <Latex>{`$(\\eta_2=1.3)$`}</Latex></>}
                />
                <AnnotatedImage preview={false} src={dielectric_refract_1_5}
                    annotation={<>Refraction only sphere <Latex>{`$(\\eta_2=1.5)$`}</Latex></>}
                />
                <AnnotatedImage preview={false} src={dielectric_refract_1_3} 
                    annotation={<>Refraction only sphere <Latex>{`$(\\eta_2=1.7)$`}</Latex></>}
                />
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
                <Latex>{`$R=R_0+(1 - R_0)(1-\\textbf n \\cdot \\omega_i)^5 \\ \\ \\ \\text{where } R_0=\\bigg(\\displaystyle\\frac{\\eta_1-\\eta_2}{\\eta_1 + \\eta_2}\\bigg)^2$`}</Latex>
            </div>
            <br />
            <p>
                The reflectivity and transmittance act as coefficients for the gathered radiance from the cast specular rays. It should also be
                noted that as reflectivity and transmittance are in a ratio with one 
                another, <Latex>{`$T = 1-R$`}</Latex>. The full Fresnel term is also included
                for completeness, and is more accurate at the cost of render time. A comparison is shown below.
            </p>
            <Carousel autoplay autoplaySpeed={3000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "2048px"}}>
                <AnnotatedImage src={dielectric_fresnel_f} 
                    annotation={"Example dielectric sphere rendered with full Fresnel effect (left) and its reflectivity visualised (right)."}
                />
                <AnnotatedImage src={dielectric_fresnel_s} 
                    annotation={"Example dielectric sphere rendered with Schlick Approximation (left) and its reflectivity visualised (right)."}
                />
            </Carousel>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="distributed-raytracing" className="raleway-title">
                Distributed Raytracing and Emissive Materials
            </h1>
            <p>
                Up until this point, we have only been able to render hard-shadows. This is a consequence of using only point lights and a single
                occlusion raycast. We had previously seen the term <Latex>{`$L_e$`}</Latex> in the rendering equation which implies that instead of using just point lights, we can make objects themselves into light sources.
                To support emissive materials, we need to change the occlusion calculation to consider percentage occlusion instead of being a boolean calculation. Emissive materials mean our lights have <b>area</b>, and this is where soft shadows come from, i.e. these regions soft shadow regions are regions of <i>partial</i> light occlusion.
                <br /><br />
                To calculate partial occlusion, we can use random sampling. When testing for occlusion, we sample <Latex>{`$n$`}</Latex> random points on an emissive material's surface, and perform a boolean occlusion test on each one.
                The arithmetic mean of these tests then gives the proportion of occlusion. We therefore need a method for generating random points on an object's surface, which is usually similar to the uv-mapping calculating, but in reverse.  The use of random sampling also introduces noise, so we should be sure to use as high <Latex>{`$n$`}</Latex>  as possible.
            </p>
            <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1370px"}}>
                <AnnotatedImage src={shadows_1} annotation={"Shadows rendering with only 1 deterministic ray (no distributed raytracing)."}/>
                <AnnotatedImage src={shadows_5} annotation={"Shadows rendered with 5 sample rays."}/>
                <AnnotatedImage src={shadows_10} annotation={"Shadows rendered with 10 sample rays."}/>
                <AnnotatedImage src={shadows_25} annotation={"Shadows rendered with 25 sample rays."}/>
                <AnnotatedImage src={shadows_50} annotation={"Shadows rendered with 50 sample rays."}/>
                <AnnotatedImage src={shadows_100} annotation={"Shadows rendered with 100 sample rays."}/>
                <AnnotatedImage src={shadows_200} annotation={"Shadows rendered with 200 sample rays."}/>
            </Carousel>
            <br/>
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="ssaa" className="raleway-title">
                Super-Sampling Anti-Aliasing (SSAA)
            </h1>
            <p>
                Aliasing arises from rendering our continuous 3D scene in a limited number of discrete pixels. This is particularly noticeable at object boundaries and where we have diagonal lines.
                <br /><br />
                There are a number of anti-aliasing techniques that we can employ, but the simplest by far is Super-Sampling Anti-Aliasing (SSAA), and works well for reasonably high resolution images. We
                generate <Latex>{`$n$`}</Latex> rays for each pixel and take the mean colour. Random rays can be generated by taking the principal camera ray and applying a random offset <Latex>{`$\\in[-0.5, 0.5]$`}</Latex> in both dimensions of the camera plane.
                Again, the use of random sampling can introduce noise for low <Latex>{`$n$`}</Latex>, so it is best to use as high <Latex>{`$n$`}</Latex> as possible.
                <br /><br />
                SSAA is quite expensive. With each new sample ray we effectively render the whole image once again. If a faster technique is desired, I would suggest having a look at FXAA.
            </p>
            <Carousel autoplay autoplaySpeed={2000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage preview={false} src={ssaa_0} annotation={"Sharp cube edge rendered with no SSAA."} />
                <AnnotatedImage preview={false} src={ssaa_5} annotation={"Sharp cube edge rendered with 5x SSAA."}/>
                <AnnotatedImage preview={false} src={ssaa_10} annotation={"Sharp cube edge rendered with 10x SSAA."}/>
                <AnnotatedImage preview={false} src={ssaa_25} annotation={"Sharp cube edge rendered with 25x SSAA."}/>
                <AnnotatedImage preview={false} src={ssaa_50} annotation={"Sharp cube edge rendered with 50x SSAA."} />
            </Carousel>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="photon-map" className="raleway-title">
                Photon Mapping
            </h1>
            <Carousel autoplay autoplaySpeed={3000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage preview={false} src={photon_map_direct} annotation={"Cornell box rendered with direct illumination only."} />
                <AnnotatedImage preview={false} src={photon_map_global} annotation={"Cornell box rendered with global illumination."}/>
            </Carousel>
            <p>
                Photon mapping is a two pass algorithm which allows <Latex>{`$L_i$`}</Latex> to be approximated by first bouncing photons around a scene to closer
                mimic how light is actually transported. This closer-to-reality representation allows photon mapping to include global illumination
                in its calculations - more specifically indirect illumination (colour bleeding) and caustics (focussed light). It boasts better time
                complexity and lower-frequency noise in renders than global illumination algorithms of similar age. This comes at the cost of higher
                memory use, as photons need to be stored when bouncing them around the scene. For the first pass, we bounce photons about our scene and store them when they hit certain surfaces.
                For the second pass, during the ray-gathering step, we approximate <Latex>{`L_i`}</Latex> at <Latex>{`$\\textbf x$`}</Latex> from nearby stored photons.
            </p>
            <br />
            <h2 id="photon-trace" className="raleway-title">
                Photon Tracing and Storage
            </h2>
            <p>
                Photons are bounced around the scene to emulate real light transport - the process is named photon tracing. Photon tracing starts
                at light sources in the scene and ends when photons bounce off into the void, or are absorbed by a material, just like how light
                can be absorbed in reality. Tracing starts at the light and thus photons propagate flux as they are traced, as opposed to backwards
                ray tracing where radiance is gathered from ray casts.
                <br /><br />
                Photons are stored when they hit certain surfaces. The specific surfaces we target depends on the type of illumination being simulated; we distinguish between specular and diffuse surfaces for example. 
                Caustic photons (specular reflections) are stored separately in a 'Caustic Photon Map' from the rest of the illumination - in a 'Global
                Photon Map' - as they require more precision. In both cases photons are stored in a KD-tree, an appropriate acceleration structure for computing
                k-nearest-neighbour (knn) searches which are required for the radiance estimate we will see later.
            </p>
            <Carousel autoplay autoplaySpeed={3000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "600px"}}>
                <AnnotatedImage preview={false} src={photon_map_global_vis} annotation={"Visualisation of global photon map (~1M Photons)."} />
                <AnnotatedImage preview={false} src={photon_map_caustic_vis} annotation={"Visualisation of caustic photon map (~1M Photons)."}/>
            </Carousel>
            <br />
            <h3 id="photon-scatter" className="raleway-title">
                Photon Scattering
            </h3>
            <p>
                Diffuse reflection is re-emittance of light randomly in a hemisphere above <Latex>{`$\\textbf x$`}</Latex> - we saw this with lambertian diffuse materials. We need to be able to compute this in order to 
                properly simulate the bouncing of photons around a scene. A method for getting a random direction in this hemisphere in
                world space is therefore required for photon tracing with diffuse surfaces. A random direction in the hemisphere in tangent space (local
                about <Latex>{`$\\textbf x$`}</Latex> with the <Latex>{`$y$`}</Latex> basis vector being <Latex>{`$\\textbf n$`}</Latex>) can be calculated by generating a random spherical coordinate 
                with <Latex>{`$\\displaystyle\\phi\\in\\bigg[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\bigg],$`}</Latex> <Latex>{`$\\theta\\in[0,2\\pi]$`}</Latex>.
                The spherical coordinate is then transformed into a Cartesian coordinate (still in tangent space), then transformed into world space
                via an affine transformation.
            </p>
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="cpp" 
                    showLineNumbers={true}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {hemisphere_scatter_code}
                </SyntaxHighlighter>
            </div>
            <br />
            <h3 id="photon-roulette" className="raleway-title">
                Russian Roulette
            </h3>
            <p>
                Russian roulette is a optimisation technique that can be applied to photon tracing to reduce the computational effort expended on
                unuseful photons. When we refer to 'unuseful photons', we mean photons that carry very little contributing colour - in physics, this is the energy they carry or 'flux'. 
                Without Russian roulette, it is likely that photons which have been diffusely reflected a few times would have very
                low flux (as they propagate flux with each bounce). Thus, a lot of effort is wasted in simulating further bounces of these photons
                which negligibly contribute to the overall lighting. Russian roulette takes a different approach in an attempt to make all photons
                have similar magnitudes of flux, thus minimising 'wasted' computation time.
                <br /><br />
                The way Russian roulette works here is through the observation that reflecting <Latex>{`$n$`}</Latex> photons at say, 50% power, is equivalent to
                reflecting <Latex>{`$\\displaystyle\\frac{n}{2}$`}</Latex> photons at 100% power. This can be achieved stochastically; A random 
                variable <Latex>{`$\\epsilon\\in[0, 1]$`}</Latex> is taken, and compared to
                the average reflection coefficients of the material <Latex>{`$\\bar\\rho_d, \\bar\\rho_s$`}</Latex>, taken from the material's diffuse and specular albedo by averaging their 3 colour channels. 
                The type of reflection is then determined as follows:
                <br/><br/>
                <div style={{textAlign: "center"}}>
                    <Latex>
                        {`$\\begin{aligned}
                            \\epsilon\\in[0,\\bar\\rho_d]&\\to\\text{diffuse reflection}\\\\
                            \\epsilon\\in[0, \\bar\\rho_d+\\bar\\rho_s]&\\to\\text{specular reflection}\\\\
                            \\epsilon\\in[\\bar\\rho_d+\\bar\\rho_s, 1]&\\to\\text{absorption}
                        \\end{aligned}$`}
                    </Latex>
                </div>
            </p>
            <p>
                Note a full BRDF calculation is not used at bounces using this method, instead the flux of reflected photons must be adjusted by 
                multiplying by <Latex>{`$\\rho_d/\\bar\\rho_d$`}</Latex> or <Latex>{`$\\rho_s/\\bar\\rho_s$`}</Latex> depending on the type of reflection. 
                (i.e. we scale by the colours which would be sampled from the BRDF).
                <br /><br />
                Overall, we can simulate the effect of more photons with a smaller selection by using russian roulette, so it is a worthwhile optimisation considering we may want to fire millions of photons into our
                scene.
            </p>
            <br />
            <h2 id="photon-gather" className="raleway-title">
                Radiance Gathering
            </h2>
            <Carousel autoplay autoplaySpeed={5000} effect="fade" style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "512px"}}>
                <AnnotatedImage preview={false} src={c_img} annotation={"All illumination combined: global illumination"}/>
                <AnnotatedImage preview={false} src={c_img_direct} annotation={"Direct illumination"}/>
                <AnnotatedImage preview={false} src={c_img_indirect} annotation={"Indirect illumination (diffuse)"} />
                <AnnotatedImage preview={false} src={c_img_specular} annotation={"Specular and Glossy"} />
                <AnnotatedImage preview={false} src={c_img_caustic} annotation={"Indirect illumination (caustics)"} />
            </Carousel>
            <p>
                Once we have our photon maps, we can begin rendering our final image. This involves calculating the <Latex>{`$L_i(\\textbf x, \\omega_i)$`}</Latex> component of the rendering equation.
                The original implementation of photon mapping proposes splitting the different types of illumination in the scene into separate calculations. The main benefit of this is that we
                get to use different techniques for each lighting calculation as we see fit, and makes it easier to not double up on simulated light paths.
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L_i(\\textbf x, \\omega_i)=L_{i,l}(\\textbf x, \\omega_i)+(L_{i,c}(\\textbf x, \\omega_i)+L_{i,d}(\\textbf x, \\omega_i))+L_{i,c}(\\textbf x, \\omega_i)+L_{i,d}(\\textbf x, \\omega_i)$`}
                    </Latex>
                </div>
                <br />
                where
            </p>
            <div style={{paddingLeft: "2vw", paddingRight: "2vw"}}>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>1. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$L_{i,l}$`}</Latex> - <b>Direct Illumination</b> given by <Latex>{`$LDE$`}</Latex> in path notation and is directly gathered using standard gathering rays.
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>2. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$L_{i,d}$`}</Latex> - <b>Indirect Illumination</b> given by <Latex>{`$LD(S|D)+DE$`}</Latex> in path notation and is approximated using the global photon map.
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>3. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$L_{i,c}+L_{i,d}$`}</Latex> - <b>Specular and Glossy </b> given by <Latex>{`$L(S|D)^*SE$`}</Latex> in path notation and is again directly gathered using standard gathering rays.
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>4. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$L_{i,c}$`}</Latex> - <b>Caustics </b> given by <Latex>{`$LS+DE$`}</Latex> in path notation and is approximated using the caustic photon map.
                    </Col>
                </Row>
            </div>
            <br/><br />
            <h3 id="li-approx" className="raleway-title">
                Incident Radiance Approximation
            </h3>
            <p>
                <Latex>{`$L_i$`}</Latex> can be approximated from a photon map by calculating the flux density of photons in a sphere <Latex>{`$r$`}</Latex> about <Latex>{`$\\textbf x$`}</Latex>. The
                radius of the sphere can be a pre-defined constant, leading to a smoother radiance estimate over larger distances, or dynamically
                calculated by expanding the sphere until a set number of photons are found. The former approach has the effect of smoothing the
                radiance estimate over larger distances which is useful for indirect illumination (global photon map); the latter approach preserves
                all the detail in the photon map leading to higher-frequency detail, useful for rendering caustics (caustic photon map). This is why photons are stored in a KD-tree, 
                as it makes it very easy to get all photons in a shere about a point - a simple k-nearest-neighbours query. I won't go
                over the derivation here, but formally, this estimate transforms the rendering equation into the following:
                <br/><br/>
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                    {
                        `$\\displaystyle L_r(\\textbf{x}, \\omega_i, \\omega_r) =
                        \\frac{1}{\\pi r^2}\\sum_{p=1}^n f_r(\\textbf{x}, \\omega_i, \\omega_r)\\Delta\\Phi_p(\\textbf x, \\omega_i)$`
                    }                   
                    </Latex>
                </div>
                <br/>
                where <Latex>{`$\\Phi_p$`}</Latex> are photons from the knn query of the photon map. The main thing of note here is that we calculate the density by
                assuming the surface around <Latex>{`$\\textbf x$`}</Latex> is a flat surface - i.e. a circle not a sphere. This gives rise to the divisor of <Latex>{`$\\pi r^2$`}</Latex>.
                It is also worth noting that a sphere is not the most accurate approximation under this assumption - an ellipsoid squished in the direction of <Latex>{`$\\textbf x$`}</Latex>'s normal
                would be more accurate, but using a sphere has the benefit of being quickly queried from the photon maps.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="post-process" className="raleway-title">
                Post Processing
            </h1>
            <p>
                Now that we have rendered out our 3D scene, what's left is to post-process the image to get a final render.
                At this stage, it is useful to be able to mess with some properties of our image to make it more appealing.
            </p>
            <h2 id="post-filters" className="raleway-title">
                Basic Image Filters
            </h2>
            <p>
                We can build a simple but useful selection of image filters:
            </p>
            <div style={{paddingLeft: "2vw", paddingRight: "2vw"}}>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>1. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$\\text{exposure}(\\textbf v,\\ e)=\\textbf v\\cdot e$`}</Latex>
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>2. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$\\text{contrast}(\\textbf v,\\ c)=c(\\textbf v - 0.5) + 0.5$`}</Latex>
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>3. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$\\text{brightness}(\\textbf v,\\ b)=\\textbf v + b$`}</Latex>
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>4. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$\\text{saturation}(\\textbf v,\\ s)=\\text{lerp}(\\textbf v,\\ \\text{gray}(\\textbf v),\\ s)$`}</Latex>
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>5. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$\\text{colour overlay}(\\textbf v,\\ \\textbf c)=\\textbf v \\cdot \\textbf c$`}</Latex>
                    </Col>
                </Row>
                <br/>
                <Row className="project-style-cont" style={{display: "flex"}}>
                    <Col className="project-style-cont"><b>6. </b> &nbsp;&nbsp;&nbsp;</Col>
                    <Col className="project-style-cont" flex="1vw">
                        <Latex>{`$\\text{gamma}(\\textbf v, \\gamma)=\\textbf v ^ \\gamma$`}</Latex>
                    </Col>
                </Row>
                <br/>
            </div>
            <p>
                It is important to clamp the results of these calculations to be greater than zero - we can't have a negative amount of light! These filters can be applied in any order, 
                except for the gamma space calculation, which <i>must</i> be the final post processing step, even after tone mapping which we will visit next.
                Many more filters exist that we could apply here as well, but this selection is analogous to the kinds of settings you might find on a digital camera. 
            </p>
            <h2 id="tone-map" className="raleway-title">
                HDR and Tone Mapping 
            </h2>
            <p>
                Dynamic Range refers to the range of colours we can represent within our image. Up until this point, renders from a raytracer will be unbounded in terms of colour.
                We simply add up all of the reflected radiance and store it in our image buffer. Our image therefore is one of <i>High Dynamic Range</i> (HDR) - we have values outside of 
                standard RGB representation. We still wish to display our image in RGB though, so we must do a conversion from HDR to RGB space.
                <br /><br />
                There are various ways of doing this conversion. The most simple method would be to define an exposure cap, like in a digital camera. Any values above our exposure cap are clamped to the cap value <Latex>{`$\\in[0, 255]$`}</Latex> in RGB images.
                We could extend this exposure cap to be automatic by stretching or compressing our range of values to <Latex>{`$[0, 255]$`}</Latex> in a similar fashion to a contrast filter. These filters would work fine for a realistic conversion, but we aren't making use of the 
                HDR information we have. 
                <br /><br />
                Tonemapping makes use of HDR information by mapping HDR colour values to a curve, properly balancing the light levels and also letting us apply a certain level of artistic effect.
                It is basically a variable colour filter, allowing our images to have a certain 'feel' under the curve. For example, we could
                make images have a yellowish tint in their mid-tones for a more cosy feel.
                <br /><br />
                There are many tonemapping curves, a popular choice in video games is the ACES curve. In this implementation, I use a curve made by Hajime Uchimura, the details of which can be found <a target='_blank' href="https://www.polyphony.co.jp/publications/sa2018/">here</a>.
            </p>
        </ProjectPage>
    );
}

export default Home;
