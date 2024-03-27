"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[307],{87359:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});i(27565);var s=i(6962),n=i(45577),r=i(20791),a=i(39432),o=i(46761);const l=i.p+"static/media/Canny-Process.86877d855862a12c80cf.png",h=i.p+"static/media/Canny-lerp.f05b46067d142d06cca7.png";i(73017);var d=i(8249),c=i(1181),x=i(95569),p=i(27929);const m=()=>(0,p.jsxs)(x.A,{title:c.Meta.title,thumb:c.Meta.thumb,projectRoute:"/main",githubURL:"https://github.com/Skittss/PortfolioWebsite/tree/main/src/projects/Webgl-Canny",children:[(0,p.jsx)("h1",{id:"overview",className:"raleway-title",children:"Overview"}),(0,p.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[(0,p.jsx)(n.A,{src:l,fallback:"Canny Process Image"}),(0,p.jsx)("p",{style:{fontSize:"0.75em"},children:(0,p.jsx)("i",{children:"(Canny Edge Detection Steps) "})})]}),(0,p.jsxs)("p",{children:["Canny edge detection is a quintessential image processing algorithm which finds edges in images using a multi-stage process.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),'This project was created off the back of a similar (prototype) project of mine which drew images via a complex fourier series. You can find that project as "Fourier Sketcher" in the projects tab or the page itself ',(0,p.jsx)("a",{href:"https://skittss.github.io/FourierSketcher/",target:"_blank",children:" here"}),". My implementation of edge detection in this prototype was ",(0,p.jsx)("i",{children:"painfully"})," slow, being CPU bound, and only running on a single core! :(",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"This project is my attempt to make a faster (real-time!) canny edge detection implementation which runs in parallel, on a GPU!",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"In order to achieve this (and show it off on this website), I opted to use WebGL. WebGL comes with its own slew of problems which i will touch on in relevant sections, however, it is still good enough to allow me to write GPU compatible programs (shaders) in GLSL. I also made use of two other libraries to make my life easier:"]}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{flex:"1",style:{paddingRight:"10px"},children:(0,p.jsx)("b",{children:"Three.js"})}),(0,p.jsx)(a.A,{flex:"4",children:"A WebGL wrapper which allows for easy writing of fragment shaders. Each step of the process below was written as a fragment shader in some capacity."})]}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(a.A,{flex:"1",style:{paddingRight:"10px"},children:(0,p.jsx)("b",{children:"React-three-fiber"})}),(0,p.jsxs)(a.A,{flex:"4",children:["An interface between ",(0,p.jsx)("i",{children:"Three.js"})," and ",(0,p.jsx)("i",{children:"React"})," which facilitates creating Three canvases in jsx/ts syntax."]})]})]}),(0,p.jsx)("br",{}),(0,p.jsx)("p",{children:"Canny edge detection is a 6-step process (7 including my own final clean-up):"}),(0,p.jsxs)("p",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsx)(s.Vq,{smooth:!0,to:"#grayscale",children:(0,p.jsx)("b",{children:"1. \xa0 Grayscale Encoding"})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.Vq,{smooth:!0,to:"#blur",children:(0,p.jsx)("b",{children:"2. \xa0 Noise filtering (Gaussian Blur)"})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.Vq,{smooth:!0,to:"#sobel",children:(0,p.jsx)("b",{children:"3. \xa0 Image Gradient Calculation"})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.Vq,{smooth:!0,to:"#nms",children:(0,p.jsx)("b",{children:"4. \xa0 Non-maximum suppression"})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.Vq,{smooth:!0,to:"#threshold",children:(0,p.jsx)("b",{children:"5. \xa0 Double thresholding"})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.Vq,{smooth:!0,to:"#hysteresis",children:(0,p.jsx)("b",{children:"6. \xa0 Edge tracking (via hysteresis)"})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.Vq,{smooth:!0,to:"#cleanup",children:(0,p.jsx)("b",{children:(0,p.jsx)("i",{children:"7. \xa0 Final clean-up"})})})]}),(0,p.jsx)("p",{children:"Each step is implemented as a Three.js post-processing shader pass."}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"grayscale",className:"raleway-title",children:"Grayscale Encoding"}),(0,p.jsxs)("p",{children:["The target image is first converted to grayscale. There is no specific reason to do this except for simplicity; this way we do not have to deal with multiple colour channels later on.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"An image can be converted to grayscale by setting the value of each colour channel to some weighted average of each individual channel. Different coefficients for the colour channels will allow different details to be preserved in the grayscale image.",(0,p.jsx)("br",{})]}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{flex:"200px",children:(0,p.jsx)("b",{children:"BT.601"})}),(0,p.jsx)(a.A,{flex:"auto",children:(0,p.jsx)(d.A,{children:"$R:0.2990,\\ G:0.5870,\\ B:0.1140$."})})]}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{flex:"200px",children:(0,p.jsx)("b",{children:"BT.709"})}),(0,p.jsx)(a.A,{flex:"auto",children:(0,p.jsx)(d.A,{children:"$R:0.2126,\\ G:0.7152,\\ B:0.0722$."})})]}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{flex:"200px",children:(0,p.jsx)("b",{children:"BT.2100"})}),(0,p.jsxs)(a.A,{flex:"auto",children:[(0,p.jsx)(d.A,{children:"$R:0.2627,\\ G:0.6780,\\ B:0.0593$."})," \xa0 (Typically used for HDR content)"]})]}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{flex:"200px",children:(0,p.jsx)("b",{children:"Mean"})}),(0,p.jsxs)(a.A,{flex:"auto",children:[(0,p.jsx)(d.A,{children:"$R:0.3333,\\ G:0.3333,\\ B:0.3333$."})," \xa0 (Simple approach)"]})]})]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("br",{}),"This can be easily achieved in a fragment shader with a uniform vec3 (weights) of these coefficients:",(0,p.jsx)("br",{}),(0,p.jsx)(d.A,{children:"$\\text{gl\\_FragColor}=\\text{vec4}(\\text{weights}.r \\cdot \\text{texel}.r, \\ \\text{weights}.g\\cdot \\text{texel}.g, \\ \\text{weights}.b\\cdot \\text{texel}.b, \\text{texel}.a )$"})]}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"blur",className:"raleway-title",children:"Noise filtering (Gaussian Blur)"}),(0,p.jsxs)("p",{children:["Next, we can choose to remove noise from the input image with a blur. This way the 'imperfections' - noise - gets smoothed out and is thus at least partially removed from the image.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"A quick way of computing a blur is with a gaussian distribution. We perform a convolution with a gaussian kernel which effectively adds up pixels around the centre pixel, weighted by their distance from the centre. (Those closer to the centre are weighted more). We can effect how much these pixels are weighted with a parameter",(0,p.jsx)(d.A,{children:"$\\ \\sigma$"})," when we generate the gaussian kernel. (",(0,p.jsx)(d.A,{children:"$\\sigma$"})," effects the standard deviation of a gaussian distribution).",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"A gaussian kernel can be written as:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:(0,p.jsx)(d.A,{children:"$\\large G(x,y)= \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2+y^2}{2\\sigma^2}}$"})}),(0,p.jsx)("br",{}),"where ",(0,p.jsx)(d.A,{children:"$x$"})," and ",(0,p.jsx)(d.A,{children:"$y$"})," are the coordinate offsets from the centre of the kernel, and ",(0,p.jsx)(d.A,{children:"$\\sigma$"})," a non-zero value of our choice.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"There are a few important properties of the kernel above.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{})]}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsxs)(r.A,{style:{display:"flex",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{style:{paddingTop:"2px"},children:(0,p.jsx)("b",{children:"1. \xa0 \xa0 \xa0"})}),(0,p.jsxs)(a.A,{flex:"1vw",style:{paddingLeft:"20px"},children:[(0,p.jsx)(d.A,{children:"$\\displaystyle\\sum_{x,y}G(x,y) = 1$"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"The sum of the entire kernel ",(0,p.jsx)("i",{children:"must"})," be one. If it were not, we would be brightening or dimming the image with each pass. To ensure this is true, we multiply the entire kernel by a normalization coefficient, which is simply one over the sum of the non-normalized kernel."]})]}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)(r.A,{style:{display:"flex",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{style:{paddingTop:"10px"},children:(0,p.jsx)("b",{children:"2. \xa0 \xa0 \xa0"})}),(0,p.jsxs)(a.A,{flex:"1vw",style:{paddingLeft:"20px"},children:[(0,p.jsx)(d.A,{children:"$\\large G(x,y)= G(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2}{2\\sigma^2}} \\cdot G(y)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{y^2}{2\\sigma^2}}$"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"The kernel is separable. This means that we can achieve the same convolution as the full kernel by sequentially passing two one-dimensional 'kernels' instead ",(0,p.jsx)(d.A,{children:"$\\big[G(x) \\ \\& \\ G(y)\\big]$"}),". This proves very useful, as it allows the time complexity of the pass to be reduced from ",(0,p.jsx)(d.A,{children:"$O(N^2)$"})," to ",(0,p.jsx)(d.A,{children:"$O(N)$"}),". This is quite a substantial improvement!"]})]}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)(r.A,{style:{display:"flex",paddingBottom:"10px"},children:[(0,p.jsx)(a.A,{children:(0,p.jsx)("b",{children:"3. \xa0 \xa0 \xa0"})}),(0,p.jsxs)(a.A,{flex:"1vw",style:{paddingLeft:"20px"},children:[(0,p.jsx)(d.A,{children:"$G(x) = G(y)^T, \\ G(n) = G(-n)$"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"These are properties which allow us to store only ",(0,p.jsx)("i",{children:"parts"})," of the entire kernel to save on memory. These are both derrived from the fact that the gaussian distribution which the kernel is generated from is symmetrical about ",(0,p.jsx)(d.A,{children:"$0$"})," in both the ",(0,p.jsx)(d.A,{children:"$x$"})," and ",(0,p.jsx)(d.A,{children:"$y$"})," axes, and has rotational symmetry when mapping one axis to the other."]})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["Finally we have two parameters for the blur, ",(0,p.jsx)(d.A,{children:"$r$"})," and ",(0,p.jsx)(d.A,{children:"$\\sigma$"}),". Sigma was discussed above, and ",(0,p.jsx)(d.A,{children:"$r$ "}),"is simply the size of the kernel - the interval which ",(0,p.jsx)(d.A,{children:"$x$"})," and ",(0,p.jsx)(d.A,{children:"$y$"})," are taken from: \xa0 ",(0,p.jsx)(d.A,{children:"$(x,y)\\in [-r,r]\\subset\\Z$"}),(0,p.jsx)("br",{}),"More intuitively, ",(0,p.jsx)(d.A,{children:"$r$"})," is the max distance from the centre pixel which we blend other pixels from.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Though the maths here is non-trivial, the actual implementation is quite simple. All of the above can be reduced into ~20 lines of JavaScript. You can find this in ",(0,p.jsx)("a",{href:"https://github.com/Skittss/PortfolioWebsite/blob/main/src/projects/Webgl-Canny/src/gaussianKernel.jsx",target:"_blank",children:"gaussianKernel.jsx"})," in the source code."]}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"sobel",className:"raleway-title",children:"Image Gradient Calculation"}),(0,p.jsxs)("p",{children:["This step gives us most of the information about the actual edges in the image. Subsequent steps exist to refine the information calculated here.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),'The way edges are detected in this step is by calculating the "gradient" of the image. This might sound a little strange at first - its not everyday that we associate images with calculus, but by phrasing this as "finding the parts of the image where the change in brightness is the greatest" the idea starts to make a bit more sense.',(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"We can calculate the gradient of an image by calculating partial derivatives with respect to ",(0,p.jsx)(d.A,{children:"$x$"})," and ",(0,p.jsx)(d.A,{children:"$y$ "}),"followed by aggregating our results. To do this we can use an ",(0,p.jsx)("i",{children:"operator"})," such as the ",(0,p.jsx)("i",{children:"Sobel operator"})," or ",(0,p.jsx)("i",{children:"Prewitt operator"}),". These operators positively weight values on one side of a centre pixel and negatively on the other in a convolution which as a result calculates the gradient. The ",(0,p.jsx)("i",{children:"Sobel"})," and ",(0,p.jsx)("i",{children:"Prewitt"})," operators are very similar, the only distinction being that ",(0,p.jsx)("i",{children:"Sobel's"})," is slightly biased towards gradients in a cardinal direction, whereas ",(0,p.jsx)("i",{children:"Prewitt's"})," equally weights gradients on the diagonals as well. This can be observed from their kernels: After"]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:["Sobel:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(d.A,{children:"$S_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 2 & 0 & -2 \\\\ 1 & 0 & -1\\end{bmatrix},\\ S_y = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -2 & -1\\end{bmatrix}$"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Prewitt:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(d.A,{children:"$P_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 1 & 0 & -1 \\\\ 1 & 0 & -1\\end{bmatrix},\\ P_y = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -1 & -1\\end{bmatrix}$"})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["After perfoming the horizontal and vertical convolutions denoted by ",(0,p.jsx)(d.A,{children:"$G_x, G_y$"}),", we can extract the total gradient magnitude, and its direction (argument/angle) using basic trigonometry and Pythagoras' theorem:"]}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:["Magnitude:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(d.A,{children:"$M_{x,y}=\\sqrt{{G_x}^2 + {G_y}^2}$"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Argument:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(d.A,{children:"$A_{x,y}=\\arctan(G_y, G_x)$"})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["The magnitude gives us an indication how strong an edge is at a certain pixel, and the argument indicates which direction the edge lays on at this point.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Now, how can we compute this information in WebGL? There are two issues which we have to deal with:"]}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)("b",{children:"1. "})," \xa0\xa0\xa0"]}),(0,p.jsx)(a.A,{flex:"1vw",children:"We need to output two values for a single input texel."})]}),(0,p.jsx)("br",{}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)("b",{children:"2. "})," \xa0\xa0\xa0"]}),(0,p.jsxs)(a.A,{flex:"1vw",children:["We cannot clamp ",(0,p.jsx)(d.A,{children:"$M_{x,y}$"})," to ",(0,p.jsx)(d.A,{children:"$[0, 1]$"})," as strong edges will clip and not retain precise information about the strength of the edge. This is particularly important for the next step (non-maximum suppression). Similarly, ",(0,p.jsx)(d.A,{children:"$A_{x,y}$"})," cannot be clamped to ",(0,p.jsx)(d.A,{children:"$[0, 1]$"})," either."]})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["OpenGL's compute shaders would be ideal for this, however these are not supported by WebGL. Instead, we can use a class included in Three.js - ",(0,p.jsx)("i",{children:"GPUComputationRenderer"})," - to achieve similar behaviour. This class uses a fragment shader in place of the compute shader and ouputs to a floating point texture. We can also add multiple shaders to the renderer which allows us calculate multiple outputs for a single input texture. This solves both problems (albeit in a somewhat hacky way).",(0,p.jsx)("br",{}),"Two final considerations with using this class are:"]}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)("b",{children:"1. "})," \xa0\xa0\xa0"]}),(0,p.jsx)(a.A,{flex:"1vw",children:"We have to manually dispose of all related WebGL components after finished with it to avoid memory leaks."})]}),(0,p.jsx)("br",{}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)("b",{children:"2. "})," \xa0\xa0\xa0"]}),(0,p.jsxs)(a.A,{flex:"1vw",children:["We should memoize any active ",(0,p.jsx)("i",{children:"GPUComputationRenderers"})," as there is considerable overhead to initialising one. Performance would drop considerably initialising one each frame."]})]})]}),(0,p.jsx)("br",{id:"step3end"}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["Finally, one extra feature I added at this step was to map (not clamp) all ",(0,p.jsx)(d.A,{children:"$M_{x,y}$"})," to ",(0,p.jsx)(d.A,{children:"$[0,1]$"})," so that the entire range of gradient magnitudes is displayed. To do this, the maximum magnitude in ",(0,p.jsx)(d.A,{children:"$M_{x,y}$"})," is required. Unfortunately, there is no easy way to output a single value from the GPUComputationRenderer, so instead an ",(0,p.jsx)(d.A,{children:"$O(N^2)$"})," CPU-bound pass over ",(0,p.jsx)(d.A,{children:"$M_{x,y}$ "}),"is performed to calculate ",(0,p.jsx)(d.A,{children:"$\\max(M_{x,y})$"}),". This is the only CPU-bound part of the entire process, and can be removed if greater performance is needed. However for visual clarity, and the little effect it has on reasonably sized images, I included this pass."]}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"nms",className:"raleway-title",children:"Non-maximum suppression"}),(0,p.jsxs)("p",{children:["Non-maximum suppression is a method for thinning the edges produced by the gradient calculation. It pretty much does exactly what it says it does - suppresses (i.e. sets their value to zero) pixels which are not the maximum gradient value along the line perpendicular to the edge at that point. We can find neighbouring points along this line using the argument (angle) we calculated earlier.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"It is possible that this line does not exactly point in the direction of a neighbouring pixel (i.e. the argument is not a multiple of 45deg). We could simply take the value from the closest neighbouring pixel to this line, but we can do a little better by ",(0,p.jsx)("i",{children:"interpolating"})," the gradient value between the two adjacent pixels to the line.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"In every case, two of the four interpolation points are on a diagonal from the centre pixel (Note we need to check the magnitudes in both directions along the line, hence 4 points total). Let these points be denoted by ",(0,p.jsx)(d.A,{children:"$a_1,a_2$"}),". We can then choose the second interpolation points ",(0,p.jsx)(d.A,{children:"$b_1,b_2$"})," based on whether the gradient line's horizontal or vertical component is larger in length (absolute value). This is illustrated below with both cases:"]}),(0,p.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[(0,p.jsx)(n.A,{src:h,fallback:"NMS Interpolation Geometry"}),(0,p.jsx)("p",{style:{fontSize:"0.75em"},children:(0,p.jsx)("i",{children:"(Interpolation between pixels) "})})]}),(0,p.jsxs)("p",{children:["We then do a standard linear interpolation between the two magnitudes for both ",(0,p.jsx)(d.A,{children:"$a_1,b_1$"})," and ",(0,p.jsx)(d.A,{children:"$a_2,b_2$"})," using a ratio:"]}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:(0,p.jsx)(d.A,{children:"$\\text{lerp} = a_ir + (1-r)b_i$"})}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:[(0,p.jsx)(d.A,{children:"$r$"})," and ",(0,p.jsx)(d.A,{children:"$1-r$"})," are calculated from the larger absolute value of the horizontal ",(0,p.jsx)(d.A,{children:"$\\big(\\cos(\\alpha)\\big)$ "}),"and vertical ",(0,p.jsx)(d.A,{children:"$\\big(\\sin(\\alpha)\\big)$ "})," components as mentioned before and illustrated above. This results in the a final piecewise function which calculates the interpolated gradient value for both directions along the gradient line:"]}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center",overflow:"hidden"},children:(0,p.jsx)(d.A,{children:"$f(a_i, b_i, \\alpha)=\\begin{cases} M_{a_i} \\cdot {|\\cos(\\alpha)|} + (1-{|\\cos(\\alpha)|}) \\cdot M_{b_i} & \\text{if } \\cos(\\alpha) \\ge \\sin(\\alpha)\\\\  M_{a_i} \\cdot {|\\sin(\\alpha)|} + (1-{|\\sin(\\alpha)|}) \\cdot M_{b_i} & \\text{otherwise}\\end{cases}$"})}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["Finally, we check the two interpolated values against the magnitude of the centre pixel to decide if the pixel should be eliminated. ",(0,p.jsx)(d.A,{children:"$\\big(\\text{if }M_{\\text{current}} < f(a_1,b_1,\\alpha) \\text{ or }M_{\\text{current}} < f(a_2,b_2,\\alpha)\\big)$ "}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"This is all quite simple to implement in a fragment shader which can then be used in the GPUComputationRenderer class mentioned in the previous section."]}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"threshold",className:"raleway-title",children:"Double thresholding"}),(0,p.jsxs)("p",{children:["With non-maximum suppression completed, we have information about all the local edges in the images as thin lines. We now start taking away irrelevant or obtrusive information in the image.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"With a process named \"double-thresholding\" we can label edges as strong (ones we wish to keep) and weak (ones which we should probably get rid of). A good example of where this can be useful is in soft edges - think bloom from a light source for example. A specific example is if we wished to find the silhouette of the sun (a circle) from a photo, we would get a well-defined edge from the silhouette, but a bunch of weak, contour like edges from the bloom of the sun. Double thresholding would allow us to mark these as 'weak' and remove them if we wish.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"We define two thresholds:"]}),(0,p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)("b",{children:"High "})," \xa0\xa0\xa0"]}),(0,p.jsxs)(a.A,{flex:"1vw",children:["A percentage of the maximum gradient magnitude for which any pixel that exceeds this value is marked as ",(0,p.jsx)("b",{children:'"strong"'})]})]}),(0,p.jsxs)(r.A,{style:{display:"flex",alignItems:"center"},children:[(0,p.jsxs)(a.A,{children:[(0,p.jsx)("b",{children:"Low "})," \xa0\xa0\xa0"]}),(0,p.jsxs)(a.A,{flex:"1vw",children:["A percentage of ",(0,p.jsx)("b",{children:"High"})," for which any pixel that does not exceed high, but exceeds low is marked as ",(0,p.jsx)("b",{children:'"weak"'})]})]})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("p",{children:["This can also be written as an inequality for clarity: ",(0,p.jsx)(d.A,{children:"$0 \\le r_{low}\\big(r_{high}\\max(M)\\big) \\le \\text{weak} \\lt r_{high}\\max(M)\\le \\text{strong}\\le 1,\\ r\\in [0,1]$"}),".",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Implementing this as a shader pass, we can set any strong pixels to 1, and any weak to a lower opacity value, such as 0.3."]}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"hysteresis",className:"raleway-title",children:"Edge tracking (via hysteresis)"}),(0,p.jsxs)("p",{children:["Now that the edges of the image are labelled weak and strong, we can start choosing which weak edges we'd like to keep, and which to remove. Hysteresis does this by saying, for each strong edge, mark any neighbouring weak edges as strong as well, then repeat the process for any weak edges changed. In other words, if there is a strong pixel on any part of a continuous edge, we want to mark the entire edge as strong.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"The hysteresis process lends itself very well to recursion, but this is a problem when programming shaders, as this sort of recursion is not possible on a GPU. Instead, we can approach hysteresis by repeatedly 'growing' strong pixels in the image. The formal name for this process is ",(0,p.jsx)("i",{children:"Morphological dilation"}),", and was introducted to me in ",(0,p.jsx)("a",{href:"https://dahtah.github.io/imager/canny.html",target:"_blank",children:"a blog post by Simon Barthelm\xe9 about canny edge detection in R"}),".",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"We can therefore iteratively grow the strong pixels in the image, outputting new strong pixels wherever there is an overlap with weak pixels, until all desired weak pixels have been changed to strong pixels. This closely resembles a fixed-point iteration. In this implementation, the number of iterations is set by a slider and not determined automatically for two reasons: 1) It is difficult to output when there have been no changes made in a pass of this process as it isn't possible to output a single value from a shader - the same problem as that encountered at the end of ",(0,p.jsx)(s.Vq,{smooth:!0,to:"#step3end",children:"step 3"}),". And 2) If the number of passes is automatically determined, this might lead to a large performance drop if there are too many passes.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Finally, I also added a pixel threshold variable for this process which determines how much the strong pixels grow, or in other words how close weak pixels have to be to strong pixels to be converted. This allows for a little better control of the output for this step."]}),(0,p.jsx)("br",{}),(0,p.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"cleanup",className:"raleway-title",children:"Final clean-up"}),(0,p.jsx)("p",{children:"Finally, any remaining weak edges are removed from the image, and we are left with the finished edge detection image!"})]})},58990:(e,t,i)=>{i.d(t,{A:()=>c});var s=i(27565),n=i(11030),r=i(20477),a=i(58860),o=i(46761),l=i(75342),h=i(85477),d=(i(29780),i(27929));const c=e=>{let{title:t,githubURL:i,projectRoute:c,projectLink:x,thumb:p}=e;const m=(0,n.zy)().pathname;return(0,s.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{marginTop:"-3rem",backgroundImage:"url(".concat(p,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",zIndex:-1}}),(0,d.jsxs)("div",{className:"project-home-wrapper",style:{position:"absolute",width:"100%",top:"101vh",left:"0px",transform:"translate(0, -100%)"},children:[(0,d.jsxs)("header",{className:"home-header",children:[(0,d.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),(0,d.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=i?(0,d.jsx)(a.A,{title:"View on Github",placement:"bottom",children:(0,d.jsx)("a",{href:i,target:"_blank",children:(0,d.jsx)(l.A,{className:"title-icon"})})}):null,void 0!=c?(0,d.jsx)(a.A,{title:"View project",placement:"bottom",children:(0,d.jsx)(r.N_,{to:m+c,children:(0,d.jsx)(h.A,{className:"title-icon"})})}):null,void 0!=x?(0,d.jsx)(a.A,{title:"View project",placement:"bottom",children:(0,d.jsx)("a",{href:x,target:"_blank",children:(0,d.jsx)(h.A,{className:"title-icon"})})}):null]}),(0,d.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]}),(0,d.jsx)("div",{style:{height:"8em"}})]})]})}},95569:(e,t,i)=>{i.d(t,{A:()=>b});var s=i(28370),n=i.n(s),r=i(58990),a=i(65894),o=i(9514),l=i(27565),h=i(27929);const d=e=>{var t=e.filter((e=>{let t=e.nodeName;return"title"!==e.id&&("H1"===t||"H2"===t||"H3"===t)}));let i=-1;var s=t.map((e=>(i++,{key:"contents_".concat(i),href:"#".concat(e.id),title:e.innerHTML,level:parseInt(e.nodeName.slice(-1))}))),n=[],r=[],a=[n];return s.forEach((e=>{var t=r.findIndex((t=>t>=e.level));-1===t?t=r.push(e.level)-1:r.length=t+1,a[t].push(Object.assign({},e,{children:a[t+1]=[]}))})),n},c=e=>{let{title:t}=e;const{nestedHeadings:i}=(()=>{const[e,t]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=Array.from(document.querySelectorAll("h1, h2, h3")),i=d(e);t(i)}),[]),{nestedHeadings:e}})(),{navHeight:s}=(()=>{const[e,t]=(0,l.useState)(0);return(0,l.useEffect)((()=>{const e=document.getElementById("main-navbar");console.log(e),t(e.offsetHeight)}),[]),{navHeight:e}})(),[n,r]=(0,l.useState)("85vh");return(0,l.useEffect)((()=>{const e=document.getElementById("toc-breadcrumb");e&&r("calc(100vh - 6rem - ".concat(e.offsetHeight,"px)"))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.A,{id:"toc-breadcrumb",style:{paddingBottom:"14px",position:"sticky"},items:[{title:(0,h.jsx)("a",{href:"#home",children:"Portfolio"})},{title:(0,h.jsx)("a",{href:"#projects",children:"Projects"})},{title:"".concat(t)}]}),(0,h.jsx)(o.A,{style:{maxHeight:n,overflow:"auto"},targetOffset:s,onClick:(e,t)=>{e.preventDefault()},items:i})]})};var x=i(50899),p=i(20791),m=i(39432);const{useBreakpoint:g}=x.Ay,b=e=>{let{title:t,thumb:i,projectLink:s,projectRoute:a,githubURL:o,footer:l,children:d}=e;const x=g();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(n(),{children:[(0,h.jsx)(r.A,{title:t,thumb:i,projectRoute:a,projectLink:s,githubURL:o}),(0,h.jsxs)(p.A,{gutter:0,children:[(0,h.jsx)(m.A,{xs:0,lg:5,children:(0,h.jsx)("div",{className:"project-toc-wrapper",children:(0,h.jsx)(c,{title:t})})}),(0,h.jsxs)(m.A,{xs:24,lg:19,children:[(0,h.jsx)("div",{className:"project-content-wrapper",style:{marginRight:x.lg?"17.5vw":"6vw",marginLeft:x.lg?0:"6vw"},children:d}),(0,h.jsx)("div",{className:"project-footer-wrapper",style:{display:"flex",justifyContent:"center",marginTop:"8vh",marginBottom:"5vh",marginRight:x.lg?"17.5vw":"6vw",marginLeft:x.lg?0:"6vw"},children:l?{footer:l}:"\u274b That's all! Thanks for reading. \u274b"})]})]})]})})}},6962:(e,t,i)=>{i.d(t,{Vq:()=>m});var s=i(27565),n=i(20477),r=function(){return r=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)};var a="",o=null,l=null,h=null;function d(){a="",null!==o&&o.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function c(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function x(){var e=null;if("#"===a)e=document.body;else{var t=a.replace("#","");null===(e=document.getElementById(t))&&"#top"===a&&(e=document.body)}if(null!==e){h(e);var i=e.getAttribute("tabindex");return null!==i||c(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==i||c(e)||(e.blur(),e.removeAttribute("tabindex")),d(),!0}return!1}function p(e){return s.forwardRef((function(t,i){var c="";"string"===typeof t.to&&t.to.includes("#")?c="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(c=t.to.hash);var p={};e===n.k2&&(p.isActive=function(e,t){return e&&e.isExact&&t.hash===c});var m=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(i[s[n]]=e[s[n]])}return i}(t,["scroll","smooth","timeout","elementId"]);return s.createElement(e,r({},p,m,{onClick:function(e){var i;d(),a=t.elementId?"#"+t.elementId:c,t.onClick&&t.onClick(e),""===a||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(h=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},i=t.timeout,window.setTimeout((function(){!1===x()&&(null===o&&(o=new MutationObserver(x)),o.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){d()}),i||1e4))}),0))},ref:i}),t.children)}))}var m=p(n.N_);p(n.k2)},29780:()=>{}}]);
//# sourceMappingURL=307.a647653c.chunk.js.map