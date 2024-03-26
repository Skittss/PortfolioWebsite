import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';

import waves from '../../content/projects/FFTOcean/waves.mp4'
import sines from '../../content/projects/FFTOcean/sines.png'
import hkt from '../../content/projects/FFTOcean/hkt.png'
import butterfly from '../../content/projects/FFTOcean/butterfly.png'
import normals from '../../content/projects/FFTOcean/normals.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import {Meta} from '.';
import ProjectPage from '../projectPage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb} projectLink="https://skittss.github.io/FFTOcean/" githubURL="https://github.com/Skittss/FFTOcean">
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <video style={{objectFit: "cover", width: "100%"}}  autoPlay loop muted>
                    <source src={waves} type='video/mp4' />
                </video>
            </div>

            <p>
                Realistic looking water surfaces are not trivial to simulate; Instead we can make approximations of the
                behaviour of real water to make convincing looking geometry. In this project I implement stylized ocean
                geometry and shaders on a GPU with WebGL (via Three.js).
                <br /><br />
                Using the fast Fourier transform (FFT), the computational cost of creating complex wave-like behaviour can be greatly reduced. This is
                the focus of this project.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="gerstner" className="raleway-title">
                Gerstner Waves
            </h1>
            <p>
                To kick things off, how do we approach modelling a wave surface? At a simplified level, we may think of waves as being some periodic oscillation of a body of water.
                This is quite an old observation - first formally noted by physicist František Josef Gerstner hundreds of years ago. In mathematical terms, this means a wave surface can be
                approximated by making each point on the surface move in circular motion, or in other words, as a sinusoid.
            </p>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <Image src={sines} fallback="Gerstner Waves Example"/>
                <p style={{fontSize: "0.75em"}}><i>(Example of Gerstner waves for a 2D surface - courtesy of <a href="https://catlikecoding.com/unity/tutorials/flow/waves/" target="_blank">Jasper Flick</a>) </i></p>
            </div>
            <p>
                Note that this model encapsulates not only vertical movement of the surface, but also horizontal movement as well. This is a key observation that lets us build more
                complex models.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="displacement" className="raleway-title">
                Calculating Displacement Maps
            </h1>
            <p>
                <a href="https://www.researchgate.net/publication/264839743_Simulating_Ocean_Water">Jerry Tessendorf</a> outlined a much more complex model that builds upon the observations
                of Gerstner waves. In essence, we layer many waves (sinusoids) on top of one another, all of differing directions and frequencies, to create a detailed surface.
                <br /><br />
                We can think about this mathematically by first starting in the frequency domain of the waves - this way we can model how the frequencies of waves change over time according
                to physics, then compute an IFFT of the frequencies to transform them into the spacial domain, i.e. the waves we see.
                <br /><br />
                Tessendorf describes this mathematically:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>{'$\\large\\displaystyle h(x,t)=\\sum_k\\tilde h(k,t)e^{ik\\cdot x}$'}</Latex>
                </div>
                <br />
                Note that <Latex>{'$k$'}</Latex> and <Latex>{'$x$'}</Latex> denote two-dimensional vectors.
                <br /><br />
                <Latex>{'$h(x,t)$'}</Latex> denotes the displacement of the wave surface at point <Latex>{'$x$'}</Latex> at time <Latex>{'$t$'}</Latex>. We are working with
                sinusoids, so this is a periodic function, hence the need for a time parameter. We must also note that we need to encapsulate displacement in all 3 primary axes, like horizontal
                displacement in Gerstner waves, thus this is specifically <i>displacement along an axis</i>. We will end up calculating <Latex>{'$h(x,t)$'}</Latex> for all 3 axes.
                <br /><br />
                <Latex>{'$\\tilde h(k,t)e^{ik\\cdot x}$'}</Latex> represents the waves in the frequency domain. <Latex>{'$e^{ik\\cdot x}$'}</Latex> represents the frequency components of the waves as
                sinusoids. We can see this from Euler's formula: <Latex>{'$e^{i\\theta}=\\cos\\theta + i\\sin\\theta$'}</Latex>. Using complex numbers here simply lets us easily represent lots of sinusoids.
                Also note that <Latex>{'$k\\cdot x$'}</Latex> tells us the contribution of the sinusoids to the wave at the point <Latex>{'$x$'}</Latex> based on the direction that the waves propagate in, <Latex>{'$k$'}</Latex>,
                called <i>wind direction</i>.
                <br /><br />
                Note that we shift the time parameter into the amplitudes of the frequencies, i.e. <Latex>{'$\\tilde h(k,t)$'}</Latex>, instead of making the sinusoids themselves dependent on <Latex>{'$t$'}</Latex>.
                This makes the expression easy to calculate an IFFT for, which is where the summation comes in.
                <br /><br />
                Lastly, <Latex>{'$\\tilde h(k,t)$'}</Latex> is calculated by generating an initial spectrum of complex amplitudes denoted by <Latex>{'$\\tilde h_0(k)$'}</Latex> by sampling from a
                Gaussian random distribution (In code this can be done with a <i>box-muller transform</i>), sampling from a <i>Phillip's spectrum</i> and updating it based on 
                a <i>dispersion relation</i> <Latex>{'$\\omega$'}</Latex> based on physics principles. More details about this can be found in <a href="https://www.researchgate.net/publication/264839743_Simulating_Ocean_Water">Tessendorf's paper.</a>
            </p>
            <div style={{paddingBottom: "20px", textAlign: "center", width: "100%", maxWidth: "800px", margin: "0 auto"}}>
                <Image src={hkt} fallback="Process of calculating h(x,t)"/>
                <p style={{fontSize: "0.75em"}}><i>Process of calculating <Latex>{'$h(x,t)$'}</Latex> - note complex numbers are stored in both the red and green channels. </i></p>
            </div>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="ifft" className="raleway-title">
                IFFT on a GPU
            </h1>
            <p>
                The next step is calculating the IFFT for the above expression. A naive IDFT would be too slow considering the wave surface consists of many points. Even a CPU-bound
                IFFT leaves performance on the table. Computing the IFFT on the GPU is the fastest way to do this calculation in this case.
                <br /><br />
                The way we approach this is by precomputing values of the FFT into a <i>'butterfly texture'</i> for each step of the FFT. You can observe this with the structure of the
                texture resembling the 'splitting' nature of a Cooley-Tukey FFT. We then invert the FFT using a method outlined by <a href="https://doi.org/10.15480/882.1436">FJ-Flugge</a>, overall
                performing an IFFT2 after both a horizontal and vertical pass. Thus we can calculate the displacement along each primary axis to create our wave surface geometry.
            </p>
            <div style={{paddingBottom: "20px",textAlign: "center", width: "25%", minWidth: "300px", margin: "0 auto"}}>
                <Image src={butterfly} fallback="Example butterfly texture"/>
                <p style={{fontSize: "0.75em"}}><i>Example butterfly texture. Note that this is stretched along the x-axis - the texture has dimensions <Latex>{'$\\log N \\times N$'}</Latex></i></p>
            </div>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="lighting" className="raleway-title">
                Lighting and Fog
            </h1>
            <p>
                After generating the displacements of the wave surface and applying them to a plane (via a vertex shader), the surface must be able to react to light so that the displacement can be seen from oblique
                viewing angles.
                <br /><br /> 
                A computationally cheaper abridgement of the Phong Lighting model, the Blinn-Phong lighting model makes this fairly simple. We calculate normal vectors per vertex of the geometry
                by averaging normal vectors for two neighbouring triangle surfaces. We then use the normals to calculate how light bounces into the camera, which affects shadows (diffuse lighting)
                and specular highlights.
            </p>
            <div style={{paddingBottom: "20px",textAlign: "center", width: "100%", margin: "0 auto"}}>
                <Image src={normals} fallback="Normals for wave surface"/>
                <p style={{fontSize: "0.75em"}}><i>Visualised normals for wave surface (low resolution as calculated per-fragment for sake of visualization)</i></p>
            </div>
            <p>
                A final touch is to add a sense of depth to the surface; we can remove detail at far distances with per-vertex 'fog' to avoid cluttering the image. We simply calculate
                the distance of each vertex from the camera and divide it through by the maximum fog distance (i.e. where fog is at a maximum) to get a 'fog amount'. This value can then
                be used to linearly interpolate between the colour of the wave surface (+ lighting) and a specified fog colour, reducing the effects of shadow & specular highlights at far
                distances.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="improvements" className="raleway-title">
                Improvements
            </h1>
            <p>
                Below is a list of potential improvements that could be made to this project given some extra time:
            </p>
            <div style={{paddingLeft: "2vw", paddingRight: "2vw"}}>
                    <Row style={{display: "flex", paddingBottom: "10px"}}>
                        <Col ><b>1. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">
                            The FFT implementation using the butterfly texture would really benefit from having the full capabilities of a compute shader - in Three.js we are limited
                            to using the <i>GPUComputationRenderer</i> class to imitate the behaviour. Being able to read from another input buffer for the bit reversed indices needed
                            for Cooley-Tukey FFT would be particularly useful. 
                            The <a href="https://www.microsoft.com/en-us/research/publication/fast-computation-of-general-fourier-transforms-on-gpus/">Stockham formation</a> of 
                            an FFT would probably be better suited for a WebGL implementation, though the inversion code would have to be changed.
                        </Col>
                    </Row>
                    <br/>
                    <Row style={{display: "flex"}}>
                        <Col ><b>2. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">
                            Patches of ocean could be properly tesselated together to eliminate some slightly visible seams in the scene. Alternatively, mesh-instancing could be
                            explored to reduce the performance hit of rendering separate meshes for each patch.
                        </Col>
                    </Row>
                    <br/>
                    <Row style={{display: "flex"}}>
                        <Col ><b>3. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">
                            More accurate surface normals could be calculated via a method outlined in <a href="https://www.researchgate.net/publication/264839743_Simulating_Ocean_Water">Tessendorf's paper.</a>
                        </Col>
                    </Row>
                    <br/>
                    <Row style={{display: "flex"}}>
                        <Col ><b>4. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">
                            Wave choppiness could be more finely tuned and some foam could be added atop the most choppy parts of waves.
                        </Col>
                    </Row>
            </div>
        </ProjectPage>
    );
}

export default Home;
