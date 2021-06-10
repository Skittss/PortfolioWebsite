import React from 'react';
import { Row, Col, Divider } from 'antd';
import FadeIn from 'react-fade-in';
import HomeTemplate from '../homeTemplate';

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

const Home = () => {

    return (
        
        <>
        <FadeIn>
            <HomeTemplate title="WebGL Canny Edge Detection" projectRoute="/main" githubURL="https://github.com/Skittss/FourierSketcher"></HomeTemplate>
            <div className="project-content-wrapper">
                <h1 className="raleway-title">
                    Overview
                </h1>
                <p>
                    Canny edge detection is a quintessential image processing algorithm which finds edges in images using a multi-stage process.
                    <br /><br />
                    This project was created off the back of a similar (prototype) project of mine which drew images via a complex fourier series. You can find that project on GitHub 
                    <a href="https://github.com/Skittss/FourierSketcher" target="_blank"> here</a>. 
                     My implementation of edge detection in this prototype was <i>painfully</i> slow, being CPU bound, and only running on a single core! :( 
                    <br /><br />
                    This project is my attempt to make a faster (real-time!) canny edge detection implementation which runs in parallel, on a GPU!
                    <br /><br />
                    In order to achieve this (and show it off on this website), I opted to use WebGL. WebGL comes with its own slew of problems, which i will touch on in the <a href="#bruh">bruh</a> section, 
                    However, it is still good enough to allow me to write GPU compatible programs (shaders) in GLSL. I also made use of two other libraries to make my life easier:
                </p>

                <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col flex="200px"><b>Three.js</b></Col>
                        <Col flex="auto">A WebGL wrapper which allows for easy writing of fragment shaders. Each step of the process below was written as a fragment shader in some capacity.</Col>
                    </Row>
                    
                    <Row style={{display: "flex", alignItems: "center"}}>
                        <Col flex="200px"><b>React-three-fiber</b></Col>
                        <Col flex="auto">An interface between <i>Three.js</i> and <i>React</i> which facilitates creating Three canvases in jsx/ts syntax.</Col>
                    </Row>
                </div>
                <br />
                <p>Canny edge detection is a 6-step process (7 including my own final clean-up):</p>
                <br />
                <p style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <a href="#grayscale"><b>1. &nbsp; Grayscale Encoding</b></a><br />
                    <a href="#blur"><b>2. &nbsp; Noise filtering (Gaussian Blur)</b></a><br />
                    <a href="#sobel"><b>3. &nbsp; Image Gradient Calculation</b></a><br />
                    <a href="#nms"><b>4. &nbsp; Non-maximum suppression</b></a><br />
                    <a href="#threshold"><b>5. &nbsp; Double thresholding</b></a><br />
                    <a href="#hysteresis"><b>6. &nbsp; Edge tracking (via hysteresis)</b></a><br />
                    <a href="#cleanup"><b><i>7. &nbsp; Final clean-up</i></b></a>
                </p>

                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="grayscale" className="raleway-title">
                    Grayscale Encoding
                </h1>
                <p>
                    The target image is first converted to grayscale. There is no specific reason to do this except for simplicity; this way we do not have to deal with multiple colour channels later on.<br /><br />
                    An image can be converted to grayscale by setting the value of each colour channel to some weighted average of each individual channel. Different coefficients for the colour channels will allow different 
                    details to be preserved in the grayscale image.
                    <br />
                </p>
                <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col flex="200px"><b>BT.601</b></Col>
                        <Col flex="auto"><Latex>{'$R:0.2990,\\\ G:0.5870,\\\ B:0.1140$.'}</Latex></Col>
                    </Row>
                    
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col flex="200px"><b>BT.709</b></Col>
                        <Col flex="auto"><Latex>{'$R:0.2126,\\\ G:0.7152,\\\ B:0.0722$.'}</Latex></Col>
                    </Row>

                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col flex="200px"><b>BT.2100</b></Col>
                        <Col flex="auto"><Latex>{'$R:0.2627,\\\ G:0.6780,\\\ B:0.0593$.'}</Latex> &nbsp; (Typically used for HDR content)</Col>
                    </Row>

                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col flex="200px"><b>Mean</b></Col>
                        <Col flex="auto"><Latex>{'$R:0.3333,\\\ G:0.3333,\\\ B:0.3333$.'}</Latex> &nbsp; (Simple approach)</Col>
                    </Row>
                </div>
                <p>
                    <br />
                    This can be easily achieved in a fragment shader with a uniform vec4 (weights) of these coefficients:
                    <br />
                    <Latex>{'$gl\\_FragCoord=vec4(weights.r \\cdot texel.r, \\\ weights.g\\cdot texel.g, \\\ weights.b\\cdot texel.b )$'}</Latex>
                </p>

                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="blur" className="raleway-title">
                    Noise filtering (Gaussian Blur)
                </h1>
                <p>
                    Next, we can choose to remove noise from the input image with a blur. This way the 'imperfections' - noise - gets smoothed out and thus is removed from the image.
                    <br /><br />
                    A quick way of computing a blur is with a gaussian distribution. We perform a convolution with a gaussian kernel which effectively adds up pixels around the centre
                    pixel, weighted by their distance from the centre. (Those closer to the centre are weighted more). We can effect how much these pixels are weighted with a parameter 
                    <Latex>{'$\\\ \\sigma$'}</Latex> when we generate the gaussian kernel. (<Latex>{'$\\sigma$'}</Latex> effects the standard deviation of a gaussian distribution).
                    <br /><br />
                    A gaussian kernel can be written as:
                    <br /><br />
                    <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                        <Latex>{'$\\large G(x,y)= \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2+y^2}{2\\sigma^2}}$'}</Latex>
                    </div>
                    <br />
                    where <Latex>{'$x$'}</Latex> and <Latex>{'$y$'}</Latex> are the coordinate offsets from the centre of the kernel, and <Latex>{'$\\sigma$'}</Latex> a non-zero value of our choice.
                    <br /><br />
                    There are a few important properties of the kernel above.
                    <br /><br />
                </p>
                <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col><b>1. &nbsp; &nbsp; &nbsp;</b><Latex>{'$\\displaystyle\\sum_{x,y}G(x,y) = 1$'}</Latex></Col>
                        <Col flex="1vw" style={{paddingLeft: "20px"}}>
                            The sum of the entire kernel <i>must</i> be one. If it were not, we would be brightening or dimming the image with each pass.
                            To ensure this is true, we multiply the entire kernel by a normalization coefficient, which is simply one over the sum of the non-normalized kernel.
                        </Col>
                    </Row>
                    <br /><br />
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col><b>2. &nbsp; &nbsp; &nbsp;</b><Latex>{'$\\large G(x,y)= G(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2}{2\\sigma^2}} \\cdot G(y)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{y^2}{2\\sigma^2}}$'}</Latex></Col>
                        <Col flex="1vw" style={{paddingLeft: "20px"}}>
                            The kernel is separable. This means that we can achieve the same convolution as the full kernel by sequentially passing two one-dimensional 'kernels'
                            instead <Latex>{'$\\big[G(x) \\\ \\& \\\ G(y)\\big]$'}</Latex>. This proves very useful, as it allows the time complexity of the pass to
                             be reduced from <Latex>{'$O(N^2)$'}</Latex> to <Latex>{'$O(N)$'}</Latex>. This is quite a substantial improvement!
                        </Col>
                    </Row>
                    <br /><br />
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col><b>3. &nbsp; &nbsp; &nbsp;</b><Latex>{'$G(x) = G(y)^T, \\\ G(n) = G(-n)$'}</Latex></Col>
                        <Col flex="1vw" style={{paddingLeft: "20px"}}>
                            These are properties which allow us to store only <i>parts</i> of the entire kernel to save on memory. These are both derrived from the fact that
                            the gaussian distribution which the kernel is generated from is symmetrical about <Latex>{'$0$'}</Latex> in both the <Latex>{'$x$'}</Latex> and <Latex>{'$y$'}</Latex> axes.
                        </Col>
                    </Row>
                </div>
                <br />
                <p>
                    Finally we have two parameters for the blur, <Latex>{'$r$'}</Latex> and <Latex>{'$\\sigma$'}</Latex>. Sigma was discussed above, and <Latex>{'$r$ '}</Latex>
                    is simply the size of the kernel - the interval which <Latex>{'$x$'}</Latex> and <Latex>{'$y$'}</Latex> are taken from: &nbsp; <Latex>{'$(x,y)\\in [-r,r]$'}</Latex>
                    <br />
                    More intuitively, <Latex>{'$r$'}</Latex> is the max distance from the centre pixel which we blend other pixels from.
                    <br /><br />
                    Though the maths here is non-trivial, the actual implementation is quite simple. All of the above can be reduced into ~20 lines of JavaScript. You can find
                    this in <a href="#bruh">gaussianKernel.jsx</a> in the source code.
                </p>


                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="sobel" className="raleway-title">
                    Image Gradient Calculation
                </h1>
                <p>
                    This step gives us most of the information about the actual edges in the image. Subsequent steps exist to refine the information obtained
                    here.

                    <br /><br />
                    The way edges are detected in this step is by calculating the "gradient" of the image. This might sound a little strange at first - its not
                    everyday that we associate images with calculus, but phrasing this as "finding the parts of the image where the change in brightness is the greatest" 
                    the idea starts to make a bit more sense.

                    <br /><br />
                    We can calculate the gradient of an image by calculating partial derivatives with respect to <Latex>{'$x$'}</Latex> and <Latex>{'$y$ '}</Latex>
                    followed by aggregating our results. To do this we can use an <i>operator</i> such as the <i>Sobel operator</i> or <i>Prewitt operator</i>. These
                    operators positively weight values on one side of a centre pixel and negatively on the other in a convolution which as a result calculates the gradient.
                    The <i>Sobel</i> and <i>Prewitt</i> operators are very similar, the only distinction being that <i>Sobel's</i> is slightly biased towards gradients in a cardinal
                    direction, whereas <i>Prewitt's</i> equally weights gradients on the diagonals as well. This can be observed from their kernels:
                    
                </p>
                <br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    Sobel:<br /><br />
                    <Latex>{'$S_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 2 & 0 & -2 \\\\ 1 & 0 & -1\\end{bmatrix},\\ S_y = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -2 & -1\\end{bmatrix}$'}</Latex>
                        
                    <br /><br /><br />Prewitt:<br /><br />
                    <Latex>{'$S_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 1 & 0 & -1 \\\\ 1 & 0 & -1\\end{bmatrix},\\ S_y = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -1 & -1\\end{bmatrix}$'}</Latex>

                </div>


                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="nms" className="raleway-title">
                    Non-maximum suppression
                </h1>

                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="threshold" className="raleway-title">
                    Double thresholding
                </h1>

                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="hysteresis" className="raleway-title">
                    Edge tracking (via hysteresis)
                </h1>

                <br />
                <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
                <h1 id="cleanup" className="raleway-title">
                    Final clean-up
                </h1>

            </div>
        </FadeIn>
        </>
    );
}

export default Home;
