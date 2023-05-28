import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';
import FadeIn from 'react-fade-in';
import HomeTemplate from '../homeTemplate';

import referenceImg from '../../content/projects/FourierSketcher/referenceImg.png'
import exampleImg from '../../content/projects/FourierSketcher/example.gif'
import etienneJacob from '../../content/projects/FourierSketcher/etienneJacob.mp4'
import pointSequencing from '../../content/projects/FourierSketcher/pointSequencing.png'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';

const Home = () => {

    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb} projectLink="https://skittss.github.io/FourierSketcher/" githubURL="https://github.com/Skittss/FourierSketcher">
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <span>
                <Image src={referenceImg} style={{height: "450px"}} fallback="Reference image"/>
                <Image src={exampleImg} style={{height: "450px"}} fallback="Output fourier sketch"/>
                </span>
                <p style={{fontSize: "0.75em"}}><i>(Output sketch for example image.) </i></p>
            </div>
            <p>
                Fourier Sketcher is a prototype project which takes an input image, converts it to edges, then redraws them using epicycles calculated from a fourier transform.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="how-to-use" className="raleway-title">
                How to use
            </h1>
            <p>
                Since this is a prototype (and quite messy!), it might not be immediately obvious how to produce a result similar to the one shown above.
                <br /><br />
                Firstly, load an image with the button next to "Input image". Allow some time for the image to be loaded and processed by the edge detector once. The parameters for the edge detection algorithm
                can be changed with their respective sliders. I would avoid the "Process continually" and "Process on parameter change" checkboxes unless the input image is fairly small. 
                <br /><br />
                The "Sample Frequency" slider will determine the the number of inputs to be used for the fourier transform later on. This is by far the largest performance bottleneck of the program, so allow potentially a long time for processing.
                (details as to why are under <HashLink smooth to="#edge-detection">point sequencing</HashLink>). For the most accurate-to-form sketch, slide this all the way to the right.
                <br /><br />
                To view any changes to the edge detector output, click "Process Once". (Allow time for computation)
                <br /><br />
                To then begin sketching, click "Compute" under "Fourier Sketching Settings". Again, this can take some time. Once finished, the parameter sliders can be adjusted to make changes to the sketch in real-time without having 
                to recompute anything.
                <br /><br />
                And voilà, the image will begin drawing with epicycles!
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="edge-detection" className="raleway-title">
                Edge detection and Point sequencing
            </h1>
            <p>
                Edge detection is used on the input image to gather sample points which can be used in the Fourier transform computation. Canny edge detection was used in this case to compute the edges. I won't go into the details
                of the process here as there is a much more thorough explanation of the process in a follow-up project of mine:&nbsp;
                <a href="https://skittss.github.io/PortfolioWebsite#/projects/Webgl-Canny" target="_blank">Web-GL Canny Edge Detection</a>.
                <br /><br />
                An additional step after the edges have been found is to order the points into a sequence based on their closest neighbour. This allows the path of the sketch to be as smooth as possible and mostly avoid large jumps.
                The final step of the process image shows the finished process - points of similar colour are in the same line segment:
                <br /><br />
                <div style={{textAlign: "center"}}>
                    <Image src={pointSequencing}/>
                </div>
                <br />
                The issue with this, however, is that in a reasonably sized image, it is common to have tens of thousands, maybe even hundreds of thousands of points to do this for. Checking the distance to each other point naively would
                have an average time complexity of <Latex>{'$O({n^2})$'}</Latex> for the whole search operation - this is quite inefficient.
                <br /><br />
                This can be reduced by partitioning the samples in 2d space using a data structure - such as a k-d tree. This reduces the average time complexity to <Latex>{'$O(n\\log n)$'}</Latex> for the whole operation.
                You can find my implementation of a k-d tree in <a href="https://github.com/Skittss/FourierSketcher/blob/main/kdTree.js" target="_blank">kdTree.js</a>. Note this is specifically designed as a k-d tree for 2 dimensional space,
                and does not work at higher dimensions as any more is unnecessary for this problem. Using this data structure quite significantly reduces the total search time.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="fourier-transform" className="raleway-title">
                Fourier Transform Computation
            </h1>
            <p>
                To draw the sequence of samples using epicycles, they must be approximated in the frequency domain. This is because in order to construct a series of epicycles, we need a series of sinusoids which add up to the respective
                point. I.e. a series of magnitudes and phases as a function of <Latex>{'$f$'}</Latex>. This dual property of the frequency domain lends itself to the use of complex numbers - hence the complex fourier transform is used 
                to perform the conversion. Similarly and conveniently, each sample can also be represented as a complex number as they also have dual properties: <Latex>{'$x\\mapsto re, \\ y\\mapsto im$'}</Latex>.
                <br /><br />
                Since we are working with discrete set of samples, the discrete Fourier transform must be used to calculate the coefficients for each epicycle:
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>{'$\\displaystyle X_k=\\frac{1}{N}\\sum_{n=0}^{N-1}x_n\\cdot e^{-\\frac{2\\pi i}{N}kn} $'}</Latex>
                </div>
                <br />
                The implmentation of this can be found in <a href="https://github.com/Skittss/FourierSketcher/blob/main/fourier.js#L274" target="_blank">fourier.js</a>. Basic complex number arithmetic (including complex exponentials) is
                handled in <a href="https://github.com/Skittss/FourierSketcher/blob/main/complex.js" target="_blank">complex.js</a>
                <br /><br />
                We end up with a function of <Latex>{'$f(t)\\mapsto sample$'}</Latex> at <Latex>{'$k\\frac{2\\pi}{N},\\ k\\in\\Z$'}</Latex> intervals.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="extensions" className="raleway-title">
                Potential Extensions
            </h1>
            Aside from UI and front-end improvements, one significant improvement that could be made to this prototype is an implementation of the fast Fourier transform (FFT). I wanted to implement the Fourier transfrom from scratch
            to better understand the maths behind it, as such I implemented a more naive Fourier transform algorithm; one with time complexity <Latex>{'$O(n^2)$'}</Latex>. With FFT this could be improved to <Latex>{'$O(n\\log n)$'}</Latex>.
            <br /><br />
            An idea for an extension to this prototype would be to incorporate a form of looping noise filter to procedurally create loops following the edges of a specified image using interpolated points generated from the epicycles.
            Inspired by the following art from&nbsp;
            <a href="https://bleuje.github.io/" target="_blank">Etienne Jacob</a>:
            <br /><br />
            <div style={{textAlign: "center"}}>
            <video autoPlay loop muted style={{width: "100%", maxWidth: "500px"}}>
                <source src={etienneJacob} type='video/mp4' />
            </video>
            </div>
        </ProjectPage>
    );
}

export default Home;
