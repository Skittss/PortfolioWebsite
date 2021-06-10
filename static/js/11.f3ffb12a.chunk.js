(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[11],{189:function(e,t,i){"use strict";i.r(t);i(0);var s=i(200),a=i(188),n=i(192),r=i(197),c=i(112),l=i.n(c),o=i(2),h=i(27),d=i(121),b=i(208),j=i(209),x=i(7),p=function(e){var t=e.title,i=e.githubURL,s=e.projectRoute,a=Object(o.g)().pathname;return Object(x.jsx)("div",{className:"project-home-wrapper",children:Object(x.jsxs)("header",{className:"home-header",children:[Object(x.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),Object(x.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=i?Object(x.jsx)(d.a,{title:"View on Github",placement:"bottom",children:Object(x.jsx)("a",{href:i,target:"_blank",children:Object(x.jsx)(b.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null,void 0!=s?Object(x.jsx)(d.a,{title:"View project",placement:"bottom",children:Object(x.jsx)(h.b,{to:a+s,children:Object(x.jsx)(j.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null]}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]})})},g=i.p+"static/media/Canny-Process.86877d85.png",m=i.p+"static/media/Canny-lerp.b8f963f0.png",O=(i(168),i(169));t.default=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(p,{title:"WebGL Canny Edge Detection",projectRoute:"/main",githubURL:"https://github.com/Skittss/FourierSketcher"}),Object(x.jsxs)("div",{className:"project-content-wrapper",children:[Object(x.jsx)("h1",{className:"raleway-title",children:"Overview"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[Object(x.jsx)(s.a,{src:g,fallback:"Canny Process Image"}),Object(x.jsx)("p",{style:{fontSize:"0.75em"},children:Object(x.jsx)("i",{children:"(Canny Edge Detection Steps) "})})]}),Object(x.jsxs)("p",{children:["Canny edge detection is a quintessential image processing algorithm which finds edges in images using a multi-stage process.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"This project was created off the back of a similar (prototype) project of mine which drew images via a complex fourier series. You can find that project on GitHub",Object(x.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher",target:"_blank",children:" here"}),". My implementation of edge detection in this prototype was ",Object(x.jsx)("i",{children:"painfully"})," slow, being CPU bound, and only running on a single core! :(",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"This project is my attempt to make a faster (real-time!) canny edge detection implementation which runs in parallel, on a GPU!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"In order to achieve this (and show it off on this website), I opted to use WebGL. WebGL comes with its own slew of problems which i will touch on in relevant sections, however, it is still good enough to allow me to write GPU compatible programs (shaders) in GLSL. I also made use of two other libraries to make my life easier:"]}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsx)(n.a,{flex:"200px",children:Object(x.jsx)("b",{children:"Three.js"})}),Object(x.jsx)(n.a,{flex:"1vw",children:"A WebGL wrapper which allows for easy writing of fragment shaders. Each step of the process below was written as a fragment shader in some capacity."})]}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(n.a,{flex:"200px",children:Object(x.jsx)("b",{children:"React-three-fiber"})}),Object(x.jsxs)(n.a,{flex:"1vw",children:["An interface between ",Object(x.jsx)("i",{children:"Three.js"})," and ",Object(x.jsx)("i",{children:"React"})," which facilitates creating Three canvases in jsx/ts syntax."]})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Canny edge detection is a 6-step process (7 including my own final clean-up):"}),Object(x.jsxs)("p",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsx)("a",{href:"#grayscale",children:Object(x.jsx)("b",{children:"1. \xa0 Grayscale Encoding"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#blur",children:Object(x.jsx)("b",{children:"2. \xa0 Noise filtering (Gaussian Blur)"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#sobel",children:Object(x.jsx)("b",{children:"3. \xa0 Image Gradient Calculation"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#nms",children:Object(x.jsx)("b",{children:"4. \xa0 Non-maximum suppression"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#threshold",children:Object(x.jsx)("b",{children:"5. \xa0 Double thresholding"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#hysteresis",children:Object(x.jsx)("b",{children:"6. \xa0 Edge tracking (via hysteresis)"})}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{href:"#cleanup",children:Object(x.jsx)("b",{children:Object(x.jsx)("i",{children:"7. \xa0 Final clean-up"})})})]}),Object(x.jsx)("p",{children:"Each step is implemented as a Three.js post-processing shader pass."}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"grayscale",className:"raleway-title",children:"Grayscale Encoding"}),Object(x.jsxs)("p",{children:["The target image is first converted to grayscale. There is no specific reason to do this except for simplicity; this way we do not have to deal with multiple colour channels later on.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"An image can be converted to grayscale by setting the value of each colour channel to some weighted average of each individual channel. Different coefficients for the colour channels will allow different details to be preserved in the grayscale image.",Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsx)(n.a,{flex:"200px",children:Object(x.jsx)("b",{children:"BT.601"})}),Object(x.jsx)(n.a,{flex:"auto",children:Object(x.jsx)(O.a,{children:"$R:0.2990,\\ G:0.5870,\\ B:0.1140$."})})]}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsx)(n.a,{flex:"200px",children:Object(x.jsx)("b",{children:"BT.709"})}),Object(x.jsx)(n.a,{flex:"auto",children:Object(x.jsx)(O.a,{children:"$R:0.2126,\\ G:0.7152,\\ B:0.0722$."})})]}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsx)(n.a,{flex:"200px",children:Object(x.jsx)("b",{children:"BT.2100"})}),Object(x.jsxs)(n.a,{flex:"auto",children:[Object(x.jsx)(O.a,{children:"$R:0.2627,\\ G:0.6780,\\ B:0.0593$."})," \xa0 (Typically used for HDR content)"]})]}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsx)(n.a,{flex:"200px",children:Object(x.jsx)("b",{children:"Mean"})}),Object(x.jsxs)(n.a,{flex:"auto",children:[Object(x.jsx)(O.a,{children:"$R:0.3333,\\ G:0.3333,\\ B:0.3333$."})," \xa0 (Simple approach)"]})]})]}),Object(x.jsxs)("p",{children:[Object(x.jsx)("br",{}),"This can be easily achieved in a fragment shader with a uniform vec4 (weights) of these coefficients:",Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{children:"$gl\\_FragCoord=vec4(weights.r \\cdot texel.r, \\ weights.g\\cdot texel.g, \\ weights.b\\cdot texel.b )$"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"blur",className:"raleway-title",children:"Noise filtering (Gaussian Blur)"}),Object(x.jsxs)("p",{children:["Next, we can choose to remove noise from the input image with a blur. This way the 'imperfections' - noise - gets smoothed out and is thus at least partially removed from the image.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"A quick way of computing a blur is with a gaussian distribution. We perform a convolution with a gaussian kernel which effectively adds up pixels around the centre pixel, weighted by their distance from the centre. (Those closer to the centre are weighted more). We can effect how much these pixels are weighted with a parameter",Object(x.jsx)(O.a,{children:"$\\ \\sigma$"})," when we generate the gaussian kernel. (",Object(x.jsx)(O.a,{children:"$\\sigma$"})," effects the standard deviation of a gaussian distribution).",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"A gaussian kernel can be written as:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:Object(x.jsx)(O.a,{children:"$\\large G(x,y)= \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2+y^2}{2\\sigma^2}}$"})}),Object(x.jsx)("br",{}),"where ",Object(x.jsx)(O.a,{children:"$x$"})," and ",Object(x.jsx)(O.a,{children:"$y$"})," are the coordinate offsets from the centre of the kernel, and ",Object(x.jsx)(O.a,{children:"$\\sigma$"})," a non-zero value of our choice.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"There are a few important properties of the kernel above.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"1. \xa0 \xa0 \xa0"}),Object(x.jsx)(O.a,{children:"$\\displaystyle\\sum_{x,y}G(x,y) = 1$"})]}),Object(x.jsxs)(n.a,{flex:"1vw",style:{paddingLeft:"20px"},children:["The sum of the entire kernel ",Object(x.jsx)("i",{children:"must"})," be one. If it were not, we would be brightening or dimming the image with each pass. To ensure this is true, we multiply the entire kernel by a normalization coefficient, which is simply one over the sum of the non-normalized kernel."]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"2. \xa0 \xa0 \xa0"}),Object(x.jsx)(O.a,{children:"$\\large G(x,y)= G(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2}{2\\sigma^2}} \\cdot G(y)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{y^2}{2\\sigma^2}}$"})]}),Object(x.jsxs)(n.a,{flex:"1vw",style:{paddingLeft:"20px"},children:["The kernel is separable. This means that we can achieve the same convolution as the full kernel by sequentially passing two one-dimensional 'kernels' instead ",Object(x.jsx)(O.a,{children:"$\\big[G(x) \\ \\& \\ G(y)\\big]$"}),". This proves very useful, as it allows the time complexity of the pass to be reduced from ",Object(x.jsx)(O.a,{children:"$O(N^2)$"})," to ",Object(x.jsx)(O.a,{children:"$O(N)$"}),". This is quite a substantial improvement!"]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"3. \xa0 \xa0 \xa0"}),Object(x.jsx)(O.a,{children:"$G(x) = G(y)^T, \\ G(n) = G(-n)$"})]}),Object(x.jsxs)(n.a,{flex:"1vw",style:{paddingLeft:"20px"},children:["These are properties which allow us to store only ",Object(x.jsx)("i",{children:"parts"})," of the entire kernel to save on memory. These are both derrived from the fact that the gaussian distribution which the kernel is generated from is symmetrical about ",Object(x.jsx)(O.a,{children:"$0$"})," in both the ",Object(x.jsx)(O.a,{children:"$x$"})," and ",Object(x.jsx)(O.a,{children:"$y$"})," axes, and has rotational symmetry when mapping one axis to the other."]})]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["Finally we have two parameters for the blur, ",Object(x.jsx)(O.a,{children:"$r$"})," and ",Object(x.jsx)(O.a,{children:"$\\sigma$"}),". Sigma was discussed above, and ",Object(x.jsx)(O.a,{children:"$r$ "}),"is simply the size of the kernel - the interval which ",Object(x.jsx)(O.a,{children:"$x$"})," and ",Object(x.jsx)(O.a,{children:"$y$"})," are taken from: \xa0 ",Object(x.jsx)(O.a,{children:"$(x,y)\\in [-r,r]\\subset\\Z$"}),Object(x.jsx)("br",{}),"More intuitively, ",Object(x.jsx)(O.a,{children:"$r$"})," is the max distance from the centre pixel which we blend other pixels from.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Though the maths here is non-trivial, the actual implementation is quite simple. All of the above can be reduced into ~20 lines of JavaScript. You can find this in ",Object(x.jsx)("a",{href:"https://github.com/Skittss/PortfolioWebsite/blob/main/src/projects/Webgl-Canny/src/gaussianKernel.jsx",target:"_blank",children:"gaussianKernel.jsx"})," in the source code."]}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"sobel",className:"raleway-title",children:"Image Gradient Calculation"}),Object(x.jsxs)("p",{children:["This step gives us most of the information about the actual edges in the image. Subsequent steps exist to refine the information calculated here.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),'The way edges are detected in this step is by calculating the "gradient" of the image. This might sound a little strange at first - its not everyday that we associate images with calculus, but by phrasing this as "finding the parts of the image where the change in brightness is the greatest" the idea starts to make a bit more sense.',Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"We can calculate the gradient of an image by calculating partial derivatives with respect to ",Object(x.jsx)(O.a,{children:"$x$"})," and ",Object(x.jsx)(O.a,{children:"$y$ "}),"followed by aggregating our results. To do this we can use an ",Object(x.jsx)("i",{children:"operator"})," such as the ",Object(x.jsx)("i",{children:"Sobel operator"})," or ",Object(x.jsx)("i",{children:"Prewitt operator"}),". These operators positively weight values on one side of a centre pixel and negatively on the other in a convolution which as a result calculates the gradient. The ",Object(x.jsx)("i",{children:"Sobel"})," and ",Object(x.jsx)("i",{children:"Prewitt"})," operators are very similar, the only distinction being that ",Object(x.jsx)("i",{children:"Sobel's"})," is slightly biased towards gradients in a cardinal direction, whereas ",Object(x.jsx)("i",{children:"Prewitt's"})," equally weights gradients on the diagonals as well. This can be observed from their kernels: After"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:["Sobel:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{children:"$S_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 2 & 0 & -2 \\\\ 1 & 0 & -1\\end{bmatrix},\\ S_y = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -2 & -1\\end{bmatrix}$"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Prewitt:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{children:"$P_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 1 & 0 & -1 \\\\ 1 & 0 & -1\\end{bmatrix},\\ P_y = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -1 & -1\\end{bmatrix}$"})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["After perfoming the horizontal and vertical convolutions denoted by ",Object(x.jsx)(O.a,{children:"$G_x, G_y$"}),", we can extract the total gradient magnitude, and its direction (argument/angle) using basic trigonometry and Pythagoras' theorem:"]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:["Magnitude:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{children:"$M_{x,y}=\\sqrt{{G_x}^2 + {G_y}^2}$"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Argument:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{children:"$A_{x,y}=\\arctan(G_y, G_x)$"})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["The magnitude gives us an indication how strong an edge is at a certain pixel, and the argument indicates which direction the edge lays on at this point.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Now, how can we compute this information in WebGL? There are two issues which we have to deal with:"]}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"1. "})," \xa0\xa0\xa0"]}),Object(x.jsx)(n.a,{flex:"1vw",children:"We need to output two values for a single input texel."})]}),Object(x.jsx)("br",{}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"2. "})," \xa0\xa0\xa0"]}),Object(x.jsxs)(n.a,{flex:"1vw",children:["We cannot clamp ",Object(x.jsx)(O.a,{children:"$M_{x,y}$"})," to ",Object(x.jsx)(O.a,{children:"$[0, 1]$"})," as strong edges will clip and not retain precise information about the strength of the edge. This is particularly important for the next step (non-maximum suppression). Similarly, ",Object(x.jsx)(O.a,{children:"$A_{x,y}$"})," cannot be clamped to ",Object(x.jsx)(O.a,{children:"$[0, 1]$"})," either."]})]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["OpenGL's compute shaders would be ideal for this, however these are not supported by WebGL. Instead, we can use a class included in Three.js - ",Object(x.jsx)("i",{children:"GPUComputationRenderer"})," - to achieve similar behaviour. This class uses a fragment shader in place of the compute shader and ouputs to a floating point texture. We can also add multiple shaders to the renderer which allows us calculate multiple outputs for a single input texture. This solves both problems (albeit in a somewhat hacky way).",Object(x.jsx)("br",{}),"Two final considerations with using this class are:"]}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"1. "})," \xa0\xa0\xa0"]}),Object(x.jsx)(n.a,{flex:"1vw",children:"We have to manually dispose of all related WebGL components after finished with it to avoid memory leaks."})]}),Object(x.jsx)("br",{}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"2. "})," \xa0\xa0\xa0"]}),Object(x.jsxs)(n.a,{flex:"1vw",children:["We should memoize any active ",Object(x.jsx)("i",{children:"GPUComputationRenderers"})," as there is considerable overhead to initialising one. Performance would drop considerably initialising one each frame."]})]})]}),Object(x.jsx)("br",{id:"step3end"}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["Finally, one extra feature I added at this step was to map (not clamp) all ",Object(x.jsx)(O.a,{children:"$M_{x,y}$"})," to ",Object(x.jsx)(O.a,{children:"$[0,1]$"})," so that the entire range of gradient magnitudes is displayed. To do this, the maximum magnitude in ",Object(x.jsx)(O.a,{children:"$M_{x,y}$"})," is required. Unfortunately, there is no easy way to output a single value from the GPUComputationRenderer, so instead an ",Object(x.jsx)(O.a,{children:"$O(N^2)$"})," CPU-bound pass over ",Object(x.jsx)(O.a,{children:"$M_{x,y}$ "}),"is performed to calculate ",Object(x.jsx)(O.a,{children:"$\\max(M_{x,y})$"}),". This is the only CPU-bound part of the entire process, and can be removed if greater performance is needed. However for visual clarity, and the little effect it has on reasonably sized images, I included this pass."]}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"nms",className:"raleway-title",children:"Non-maximum suppression"}),Object(x.jsxs)("p",{children:["Non-maximum suppression is a method for thinning the edges produced by the gradient calculation. It pretty much does exactly what it says it does - suppresses (i.e. sets their value to zero) pixels which are not the maximum gradient value along the line perpendicular to the edge at that point. We can find neighbouring points along this line using the argument (angle) we calculated earlier.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"It is possible that this line does not exactly point in the direction of a neighbouring pixel (i.e. the argument is not a multiple of 45deg). We could simply take the value from the closest neighbouring pixel to this line, but we can do a little better by ",Object(x.jsx)("i",{children:"interpolating"})," the gradient value between the two adjacent pixels to the line.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"In every case, two of the four interpolation points are on a diagonal from the centre pixel (Note we need to check the magnitudes in both directions along the line, hence 4 points total). Let these points be denoted by ",Object(x.jsx)(O.a,{children:"$a_1,a_2$"}),". We can then choose the second interpolation points ",Object(x.jsx)(O.a,{children:"$b_1,b_2$"})," based on whether the gradient line's horizontal or vertical component is larger in length (absolute value). This is illustrated below with both cases:"]}),Object(x.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[Object(x.jsx)(s.a,{src:m,fallback:"NMS Interpolation Geometry"}),Object(x.jsx)("p",{style:{fontSize:"0.75em"},children:Object(x.jsx)("i",{children:"(Interpolation between pixels) "})})]}),Object(x.jsxs)("p",{children:["We then do a standard linear interpolation between the two magnitudes for both ",Object(x.jsx)(O.a,{children:"$a_1,b_1$"})," and ",Object(x.jsx)(O.a,{children:"$a_2,b_2$"})," using a ratio:"]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:Object(x.jsx)(O.a,{children:"$\\text{lerp} = a_ir + (1-r)b_i$"})}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:[Object(x.jsx)(O.a,{children:"$r$"})," and ",Object(x.jsx)(O.a,{children:"$1-r$"})," are calculated from the larger absolute value of the horizontal ",Object(x.jsx)(O.a,{children:"$\\big(\\cos(\\alpha)\\big)$ "}),"and vertical ",Object(x.jsx)(O.a,{children:"$\\big(\\sin(\\alpha)\\big)$ "})," components as mentioned before and illustrated above. This results in the a final piecewise function which calculates the interpolated gradient value for both directions along the gradient line:"]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:Object(x.jsx)(O.a,{children:"$f(a_i, b_i, \\alpha)=\\begin{cases} M_{a_i} \\cdot {|\\cos(\\alpha)|} + (1-{|\\cos(\\alpha)|}) \\cdot M_{b_i} & \\text{if } \\cos(\\alpha) \\ge \\sin(\\alpha)\\\\  M_{a_i} \\cdot {|\\sin(\\alpha)|} + (1-{|\\sin(\\alpha)|}) \\cdot M_{b_i} & \\text{otherwise}\\end{cases}$"})}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["Finally, we check the two interpolated values against the magnitude of the centre pixel to decide if the pixel should be eliminated. ",Object(x.jsx)(O.a,{children:"$\\big(\\text{if }M_{\\text{current}} < f(a_1,b_1,\\alpha) \\text{ or }M_{\\text{current}} < f(a_2,b_2,\\alpha)\\big)$ "}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"This is all quite simple to implement in a fragment shader which can then be used in the GPUComputationRenderer class mentioned in the previous section."]}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"threshold",className:"raleway-title",children:"Double thresholding"}),Object(x.jsxs)("p",{children:["With non-maximum suppression completed, we have information about all the local edges in the images as thin lines. We now start taking away irrelevant or obtrusive information in the image.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"With a process named \"double-thresholding\" we can label edges as strong (ones we wish to keep) and weak (ones which we should probably get rid of). A good example of where this can be useful is in soft edges - think bloom from a light source for example. A specific example is if we wished to find the silhouette of the sun (a circle) from a photo, we would get a well-defined edge from the silhouette, but a bunch of weak, contour like edges from the bloom of the sun. Double thresholding would allow us to mark these as 'weak' and remove them if we wish.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"We define two thresholds:"]}),Object(x.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"High "})," \xa0\xa0\xa0"]}),Object(x.jsxs)(n.a,{flex:"1vw",children:["A percentage of the maximum gradient magnitude for which any pixel that exceeds this value is marked as ",Object(x.jsx)("b",{children:'"strong"'})]})]}),Object(x.jsxs)(a.a,{style:{display:"flex",alignItems:"center"},children:[Object(x.jsxs)(n.a,{children:[Object(x.jsx)("b",{children:"Low "})," \xa0\xa0\xa0"]}),Object(x.jsxs)(n.a,{flex:"1vw",children:["A percentage of ",Object(x.jsx)("b",{children:"High"})," for which any pixel that does not exceed high, but exceeds low is marked as ",Object(x.jsx)("b",{children:'"weak"'})]})]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["This can also be written as an inequality for clarity: ",Object(x.jsx)(O.a,{children:"$0 \\le r_{low}\\big(r_{high}\\max(M)\\big) \\le \\text{weak} \\lt r_{high}\\max(M)\\le \\text{strong}\\le 1,\\ r\\in [0,1]$"}),".",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Implementing this as a shader pass, we can set any strong pixels to 1, and any weak to a lower opacity value, such as 0.3."]}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"hysteresis",className:"raleway-title",children:"Edge tracking (via hysteresis)"}),Object(x.jsxs)("p",{children:["Now that the edges of the image are labelled weak and strong, we can start choosing which weak edges we'd like to keep, and which to remove. Hysteresis does this by saying, for each strong edge, mark any neighbouring weak edges as strong as well, then repeat the process for any weak edges changed. In other words, if there is a strong pixel on any part of a continuous edge, we want to mark the entire edge as strong.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"The hysteresis process lends itself very well to recursion, but this is a problem when programming shaders, as this sort of recursion is not possible on a GPU. Instead, we can approach hysteresis by repeatedly 'growing' strong pixels in the image. The formal name for this process is ",Object(x.jsx)("i",{children:"Morphological dilation"}),", and was introducted to me in ",Object(x.jsx)("a",{href:"https://dahtah.github.io/imager/canny.html",target:"_blank",children:"a blog post by Simon Barthelm\xe9 about canny edge detection in R"}),".",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"We can therefore iteratively grow the strong pixels in the image, outputting new strong pixels wherever there is an overlap with weak pixels, until all desired weak pixels have been changed to strong pixels. This closely resembles a fixed-point iteration. In this implementation, the number of iterations is set by a slider and not determined automatically for two reasons: 1) It is difficult to output when there have been no changes made in a pass of this process as it isn't possible to output a single value from a shader - the same problem as that encountered at the end of ",Object(x.jsx)("a",{href:"#step3end",children:"step 3"}),". And 2) If the number of passes is automatically determined, this might lead to a large performance drop if there are too many passes.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Finally, I also added a pixel threshold variable for this process which determines how much the strong pixels grow, or in other words how close weak pixels have to be to strong pixels to be converted. This allows for a little better control of the output for this step."]}),Object(x.jsx)("br",{}),Object(x.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(x.jsx)("h1",{id:"cleanup",className:"raleway-title",children:"Final clean-up"}),Object(x.jsx)("p",{children:"Finally, any remaining weak edges are removed from the image, and we are left with the finished edge detection image!"})]})]})})}}}]);
//# sourceMappingURL=11.f3ffb12a.chunk.js.map