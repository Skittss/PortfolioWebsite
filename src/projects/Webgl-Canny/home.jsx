import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';

import processImg from '../../content/projects/Webgl-Canny/Canny-Process.png';
import lerpImg from '../../content/projects/Webgl-Canny/Canny-lerp.png';

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';

const Home = () => {

    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb} projectRoute="/main" githubURL="https://github.com/Skittss/PortfolioWebsite/tree/main/src/projects/Webgl-Canny">
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <Image src={processImg} fallback="Canny Process Image"/>
                <p style={{fontSize: "0.75em"}}><i>(Canny Edge Detection Steps) </i></p>
            </div>

            <p>
                Canny edge detection is a quintessential image processing algorithm which finds edges in images using a multi-stage process.
                <br /><br />
                This project was created off the back of a similar (prototype) project of mine which drew images via a complex fourier series. You can find that project as "Fourier Sketcher" in the projects tab
                or the page itself <a href="https://skittss.github.io/FourierSketcher/" target="_blank"> here</a>. 
                    My implementation of edge detection in this prototype was <i>painfully</i> slow, being CPU bound, and only running on a single core! :( 
                <br /><br />
                This project is my attempt to make a faster (real-time!) canny edge detection implementation which runs in parallel, on a GPU!
                <br /><br />
                In order to achieve this (and show it off on this website), I opted to use WebGL. WebGL comes with its own slew of problems which i will touch on in relevant sections, 
                however, it is still good enough to allow me to write GPU compatible programs (shaders) in GLSL. I also made use of two other libraries to make my life easier:
            </p>

            <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                    <Col flex="1" style={{paddingRight: "10px"}}><b>Three.js</b></Col>
                    <Col flex="4">A WebGL wrapper which allows for easy writing of fragment shaders. Each step of the process below was written as a fragment shader in some capacity.</Col>
                </Row>
                
                <Row style={{display: "flex", alignItems: "center"}}>
                    <Col flex="1" style={{paddingRight: "10px"}}><b>React-three-fiber</b></Col>
                    <Col flex="4">An interface between <i>Three.js</i> and <i>React</i> which facilitates creating Three canvases in jsx/ts syntax.</Col>
                </Row>
            </div>
            <br />
            <p>Canny edge detection is a 6-step process (7 including my own final clean-up):</p>
            <p style={{paddingLeft: "3em", paddingRight: "3em"}}>
                <HashLink smooth to="#grayscale"><b>1. &nbsp; Grayscale Encoding</b></HashLink><br />
                <HashLink smooth to="#blur"><b>2. &nbsp; Noise filtering (Gaussian Blur)</b></HashLink><br />
                <HashLink smooth to="#sobel"><b>3. &nbsp; Image Gradient Calculation</b></HashLink><br />
                <HashLink smooth to="#nms"><b>4. &nbsp; Non-maximum suppression</b></HashLink><br />
                <HashLink smooth to="#threshold"><b>5. &nbsp; Double thresholding</b></HashLink><br />
                <HashLink smooth to="#hysteresis"><b>6. &nbsp; Edge tracking (via hysteresis)</b></HashLink><br />
                <HashLink smooth to="#cleanup"><b><i>7. &nbsp; Final clean-up</i></b></HashLink>
            </p>
            <p>Each step is implemented as a Three.js post-processing shader pass.</p>

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
                This can be easily achieved in a fragment shader with a uniform vec3 (weights) of these coefficients:
                <br />
                <Latex>{'$\\text{gl\\_FragColor}=\\text{vec4}(\\text{weights}.r \\cdot \\text{texel}.r, \\\ \\text{weights}.g\\cdot \\text{texel}.g, \\\ \\text{weights}.b\\cdot \\text{texel}.b, \\text{texel}.a )$'}</Latex>
            </p>

            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="blur" className="raleway-title">
                Noise filtering (Gaussian Blur)
            </h1>
            <p>
                Next, we can choose to remove noise from the input image with a blur. This way the 'imperfections' - noise - gets smoothed out and is thus
                at least partially removed from the image.
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
                <Row style={{display: "flex", paddingBottom: "10px"}}>
                    <Col style={{paddingTop: "2px"}}><b>1. &nbsp; &nbsp; &nbsp;</b></Col>
                    <Col flex="1vw" style={{paddingLeft: "20px"}}>
                        <Latex>{'$\\displaystyle\\sum_{x,y}G(x,y) = 1$'}</Latex><br/><br/>
                        The sum of the entire kernel <i>must</i> be one. If it were not, we would be brightening or dimming the image with each pass.
                        To ensure this is true, we multiply the entire kernel by a normalization coefficient, which is simply one over the sum of the non-normalized kernel.
                    </Col>
                </Row>
                <br /><br />
                <Row style={{display: "flex", paddingBottom: "10px"}}>
                    <Col style={{paddingTop: "10px"}}><b>2. &nbsp; &nbsp; &nbsp;</b></Col>
                    <Col flex="1vw" style={{paddingLeft: "20px"}}>
                    <Latex>{'$\\large G(x,y)= G(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2}{2\\sigma^2}} \\cdot G(y)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{y^2}{2\\sigma^2}}$'}</Latex><br/><br/>
                        The kernel is separable. This means that we can achieve the same convolution as the full kernel by sequentially passing two one-dimensional 'kernels'
                        instead <Latex>{'$\\big[G(x) \\\ \\& \\\ G(y)\\big]$'}</Latex>. This proves very useful, as it allows the time complexity of the pass to
                            be reduced from <Latex>{'$O(N^2)$'}</Latex> to <Latex>{'$O(N)$'}</Latex>. This is quite a substantial improvement!
                    </Col>
                </Row>
                <br /><br />
                <Row style={{display: "flex", paddingBottom: "10px"}}>
                    <Col><b>3. &nbsp; &nbsp; &nbsp;</b></Col>
                    <Col flex="1vw" style={{paddingLeft: "20px"}}>
                        <Latex>{'$G(x) = G(y)^T, \\\ G(n) = G(-n)$'}</Latex><br/><br/>
                        These are properties which allow us to store only <i>parts</i> of the entire kernel to save on memory. These are both derrived from the fact that
                        the gaussian distribution which the kernel is generated from is symmetrical about <Latex>{'$0$'}</Latex> in both the <Latex>{'$x$'}</Latex> and <Latex>{'$y$'}</Latex> axes, 
                        and has rotational symmetry when mapping one axis to the other.
                    </Col>
                </Row>
            </div>
            <br />
            <p>
                Finally we have two parameters for the blur, <Latex>{'$r$'}</Latex> and <Latex>{'$\\sigma$'}</Latex>. Sigma was discussed above, and <Latex>{'$r$ '}</Latex>
                is simply the size of the kernel - the interval which <Latex>{'$x$'}</Latex> and <Latex>{'$y$'}</Latex> are taken from: &nbsp; <Latex>{'$(x,y)\\in [-r,r]\\subset\\Z$'}</Latex>
                <br />
                More intuitively, <Latex>{'$r$'}</Latex> is the max distance from the centre pixel which we blend other pixels from.
                <br /><br />
                Though the maths here is non-trivial, the actual implementation is quite simple. All of the above can be reduced into ~20 lines of JavaScript. You can find
                this in <a href="https://github.com/Skittss/PortfolioWebsite/blob/main/src/projects/Webgl-Canny/src/gaussianKernel.jsx" target="_blank">gaussianKernel.jsx</a> in the source code.
            </p>


            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="sobel" className="raleway-title">
                Image Gradient Calculation
            </h1>
            <p>
                This step gives us most of the information about the actual edges in the image. Subsequent steps exist to refine the information calculated
                here.

                <br /><br />
                The way edges are detected in this step is by calculating the "gradient" of the image. This might sound a little strange at first - its not
                everyday that we associate images with calculus, but by phrasing this as "finding the parts of the image where the change in brightness is the greatest" 
                the idea starts to make a bit more sense.

                <br /><br />
                We can calculate the gradient of an image by calculating partial derivatives with respect to <Latex>{'$x$'}</Latex> and <Latex>{'$y$ '}</Latex>
                followed by aggregating our results. To do this we can use an <i>operator</i> such as the <i>Sobel operator</i> or <i>Prewitt operator</i>. These
                operators positively weight values on one side of a centre pixel and negatively on the other in a convolution which as a result calculates the gradient.
                The <i>Sobel</i> and <i>Prewitt</i> operators are very similar, the only distinction being that <i>Sobel's</i> is slightly biased towards gradients in a cardinal
                direction, whereas <i>Prewitt's</i> equally weights gradients on the diagonals as well. This can be observed from their kernels:

                After 
                
            </p>
            <br />
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                Sobel:<br /><br />
                <Latex>{'$S_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 2 & 0 & -2 \\\\ 1 & 0 & -1\\end{bmatrix},\\ S_y = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -2 & -1\\end{bmatrix}$'}</Latex>
                    
                <br /><br /><br />Prewitt:<br /><br />
                <Latex>{'$P_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 1 & 0 & -1 \\\\ 1 & 0 & -1\\end{bmatrix},\\ P_y = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -1 & -1\\end{bmatrix}$'}</Latex>

            </div>
            <br />
            <p>
                After perfoming the horizontal and vertical convolutions denoted by <Latex>{'$G_x, G_y$'}</Latex>, we can extract the total gradient magnitude, and its direction (argument/angle) using basic
                trigonometry and Pythagoras' theorem:
            </p>
            <br />
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                Magnitude:<br /><br />
                <Latex>{'$M_{x,y}=\\sqrt{{G_x}^2 + {G_y}^2}$'}</Latex>
                    
                <br /><br /><br />Argument:<br /><br />
                <Latex>{'$A_{x,y}=\\arctan(G_y, G_x)$'}</Latex>

            </div>
            <br />
            <p>
                The magnitude gives us an indication how strong an edge is at a certain pixel, and the argument indicates which direction the edge lays on at this point.
                <br /><br />
                Now, how can we compute this information in WebGL? There are two issues which we have to deal with:

            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col ><b>1. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">We need to output two values for a single input texel.</Col>
                    </Row>
                    <br />
                    <Row style={{display: "flex", alignItems: "center"}}>
                        <Col ><b>2. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">We cannot clamp <Latex>{'$M_{x,y}$'}</Latex> to <Latex>{'$[0, 1]$'}</Latex> as strong edges will clip and not retain
                    precise information about the strength of the edge. This is particularly important for the next step (non-maximum suppression). Similarly, <Latex>{'$A_{x,y}$'}</Latex> cannot
                    be clamped to <Latex>{'$[0, 1]$'}</Latex> either.
                    </Col>
                    </Row>
            </div>
            <br />
            <p>
                OpenGL's compute shaders would be ideal for this, however these are not supported by WebGL. Instead, we can use a class included in Three.js
                - <i>GPUComputationRenderer</i> - to achieve similar behaviour. This class uses a fragment shader in place of the compute shader and ouputs to a floating
                point texture. We can also add multiple shaders to the renderer which allows us calculate multiple outputs for a single input texture. This solves both
                problems (albeit in a somewhat hacky way). 
                <br />
                Two final considerations with using this class are:

            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col ><b>1. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">We have to manually dispose of all related WebGL components after finished with it to avoid memory leaks.</Col>
                    </Row>
                    <br />
                    <Row style={{display: "flex", alignItems: "center"}}>
                        <Col ><b>2. </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">We should memoize any active <i>GPUComputationRenderers</i> as there is considerable overhead to initialising one.
                        Performance would drop considerably initialising one each frame.
                        </Col>
                    </Row>
            </div>
            <br id="step3end" /><br />
            <p>
                Finally, one extra feature I added at this step was to map (not clamp) all <Latex>{'$M_{x,y}$'}</Latex> to <Latex>{'$[0,1]$'}</Latex> so that
                the entire range of gradient magnitudes is displayed. To do this, the maximum magnitude in <Latex>{'$M_{x,y}$'}</Latex> is required.
                Unfortunately, there is no easy way to output a single value from the GPUComputationRenderer, so instead an <Latex>{'$O(N^2)$'}</Latex> CPU-bound pass over <Latex>{'$M_{x,y}$ '}</Latex>
                is performed to calculate <Latex>{'$\\max(M_{x,y})$'}</Latex>. This is the only CPU-bound part of the entire process, and can be removed if greater 
                performance is needed. However for visual clarity, and the little effect it has on reasonably sized images, I included this pass.

            </p>

            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="nms" className="raleway-title">
                Non-maximum suppression
            </h1>
            <p>
                Non-maximum suppression is a method for thinning the edges produced by the gradient calculation. It pretty much does exactly what it says it does -
                suppresses (i.e. sets their value to zero) pixels which are not the maximum gradient value along the line perpendicular to the edge at that point. We
                can find neighbouring points along this line using the argument (angle) we calculated earlier.
                <br /><br />
                It is possible that this line does not exactly point in the direction of a neighbouring pixel (i.e. the argument is not a multiple of 45deg). We could simply take the value from the closest neighbouring
                pixel to this line, but we can do a little better by <i>interpolating</i> the gradient value between the two adjacent pixels to the line.
                <br /><br />
                In every case, two of the four interpolation points are on a diagonal from the centre pixel (Note we need to check the magnitudes in both directions along the line, hence 4 points total).
                Let these points be denoted by <Latex>{'$a_1,a_2$'}</Latex>. We can then choose the second interpolation points <Latex>{'$b_1,b_2$'}</Latex> based on whether the gradient
                line's horizontal or vertical component is larger in length (absolute value). This is illustrated below with both cases:
            </p>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <Image src={lerpImg} fallback="NMS Interpolation Geometry"/>
                <p style={{fontSize: "0.75em"}}><i>(Interpolation between pixels) </i></p>
            </div>
            <p>
                We then do a standard linear interpolation between the two magnitudes for both <Latex>{'$a_1,b_1$'}</Latex> and <Latex>{'$a_2,b_2$'}</Latex> using a ratio:
            </p>
            <br />
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                <Latex>{'$\\text{lerp} = a_ir + (1-r)b_i$'}</Latex>
            </div>
            <br />
            <p>
                <Latex>{'$r$'}</Latex> and <Latex>{'$1-r$'}</Latex> are calculated from the larger absolute value of the horizontal <Latex>{'$\\big(\\cos(\\alpha)\\big)$ '}</Latex> 
                and vertical <Latex>{'$\\big(\\sin(\\alpha)\\big)$ '}</Latex> components as mentioned before and illustrated above. This results in the a final piecewise function
                which calculates the interpolated gradient value for both directions along the gradient line:
            </p>
            <br />
            <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center", overflow: 'hidden'}}>
                <Latex>{'$f(a_i, b_i, \\alpha)=\\begin{cases} M_{a_i} \\cdot {|\\cos(\\alpha)|} + (1-{|\\cos(\\alpha)|}) \\cdot M_{b_i} & \\text{if } \\cos(\\alpha) \\ge \\sin(\\alpha)\\\\  M_{a_i} \\cdot {|\\sin(\\alpha)|} + (1-{|\\sin(\\alpha)|}) \\cdot M_{b_i} & \\text{otherwise}\\end{cases}$'}</Latex>
            </div>
            <br />
            <p>
                Finally, we check the two interpolated values against the magnitude of the centre pixel to decide if the pixel should be eliminated. <Latex>{'$\\big(\\text{if }M_{\\text{current}} < f(a_1,b_1,\\alpha) \\text{ or }M_{\\text{current}} < f(a_2,b_2,\\alpha)\\big)$ '}</Latex>
                <br /><br />
                This is all quite simple to implement in a fragment shader which can then be used in the GPUComputationRenderer class mentioned in the previous section.
            </p>

            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="threshold" className="raleway-title">
                Double thresholding
            </h1>
            <p>
                With non-maximum suppression completed, we have information about all the local edges in the images as thin lines. We now start taking away irrelevant or obtrusive information in the image.
                <br /><br />
                With a process named "double-thresholding" we can label edges as strong (ones we wish to keep) and weak (ones which we should probably get rid of).
                A good example of where this can be useful is in soft edges - think bloom from a light source for example. A specific example is if we wished to find the silhouette of the sun (a circle) from a photo, we would get a well-defined
                edge from the silhouette, but a bunch of weak, contour like edges from the bloom of the sun. Double thresholding would allow us to mark these as 'weak' and remove them if we wish.
                <br /><br />
                We define two thresholds:
                
            </p>
            <div style={{paddingLeft: "3em", paddingRight: "3em"}}>
                    <Row style={{display: "flex", alignItems: "center", paddingBottom: "10px"}}>
                        <Col ><b>High </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">A percentage of the maximum gradient magnitude for which any pixel that exceeds this value is marked as <b>"strong"</b></Col>
                    </Row>
                    <Row style={{display: "flex", alignItems: "center"}}>
                        <Col ><b>Low </b> &nbsp;&nbsp;&nbsp;</Col>
                        <Col flex="1vw">A percentage of <b>High</b> for which any pixel that does not exceed high, but exceeds low is marked as <b>"weak"</b></Col>
                    </Row>
            </div>
            <br />
            <p>
                This can also be written as an inequality for clarity: <Latex>{'$0 \\le r_{low}\\big(r_{high}\\max(M)\\big) \\le \\text{weak} \\lt r_{high}\\max(M)\\le \\text{strong}\\le 1,\\ r\\in [0,1]$'}</Latex>.
                <br /><br />
                Implementing this as a shader pass, we can set any strong pixels to 1, and any weak to a lower opacity value, such as 0.3.
            </p>


            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="hysteresis" className="raleway-title">
                Edge tracking (via hysteresis)
            </h1>
            <p>
                Now that the edges of the image are labelled weak and strong, we can start choosing which weak edges we'd like to keep, and which to remove. Hysteresis does this by saying, for each strong edge, mark any neighbouring weak edges
                as strong as well, then repeat the process for any weak edges changed. In other words, if there is a strong pixel on any part of a continuous edge, we want to mark the entire edge as strong.
                <br /><br />
                The hysteresis process lends itself very well to recursion, but this is a problem when programming shaders, as this sort of recursion is not possible on a GPU. Instead, we can approach hysteresis by repeatedly 'growing' strong pixels
                in the image. The formal name for this process is <i>Morphological dilation</i>, and was introducted to me in <a href="https://dahtah.github.io/imager/canny.html" target="_blank">a blog post by Simon Barthelmé about canny edge detection in R</a>.
                <br /><br />
                We can therefore iteratively grow the strong pixels in the image, outputting new strong pixels wherever there is an overlap with weak pixels, until all desired weak pixels have been changed to strong pixels. This closely resembles a fixed-point iteration.
                In this implementation, the number of iterations is set by a slider and not determined automatically for two reasons: 1) It is difficult to output when there have been no changes made in a pass of this process as it isn't possible to output
                a single value from a shader - the same problem as that encountered at the end of <HashLink smooth to="#step3end">step 3</HashLink>. And 2) If the number of passes is automatically determined, this might lead to a large performance drop if there are too many passes.
                <br /><br />
                Finally, I also added a pixel threshold variable for this process which determines how much the strong pixels grow, or in other words how close weak pixels have to be to strong pixels to be converted. This allows for a little better control of
                the output for this step.
                
            </p>
            

            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="cleanup" className="raleway-title">
                Final clean-up
            </h1>
            <p>
                Finally, any remaining weak edges are removed from the image, and we are left with the finished edge detection image!
                
            </p>
        </ProjectPage>
    );
}

export default Home;
