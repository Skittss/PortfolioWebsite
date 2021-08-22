(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[13],{105:function(e,t,i){"use strict";i(0);var s=i(3),o=i(25),r=i(139),n=i(209),c=i(220),a=i(221),h=i(4);t.a=function(e){var t=e.title,i=e.githubURL,l=e.projectRoute,d=e.projectLink,b=Object(s.g)().pathname;return Object(h.jsx)("div",{className:"project-home-wrapper",children:Object(h.jsxs)("header",{className:"home-header",children:[Object(h.jsx)("a",{name:"top"}),Object(h.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),Object(h.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=i?Object(h.jsx)(r.a,{title:"View on Github",placement:"bottom",children:Object(h.jsx)("a",{href:i,target:"_blank",children:Object(h.jsx)(c.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null,void 0!=l?Object(h.jsx)(r.a,{title:"View project",placement:"bottom",children:Object(h.jsx)(o.b,{to:b+l,children:Object(h.jsx)(a.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null,void 0!=d?Object(h.jsx)(r.a,{title:"View project",placement:"bottom",children:Object(h.jsx)("a",{href:d,target:"_blank",children:Object(h.jsx)(a.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null]}),Object(h.jsx)(n.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]})})}},167:function(e,t,i){"use strict";i.r(t);i(0);var s=i(130),o=i(209),r=i(212),n=i(98),c=i.n(n),a=i(105),h=i.p+"static/media/referenceImg.33a166e7.png",l=i.p+"static/media/example.210397cc.gif",d=i.p+"static/media/etienneJacob.fe6550df.mp4",b=i.p+"static/media/pointSequencing.521b9106.png",j=(i(128),i(129)),p=i(108),m=i(4);t.default=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(c.a,{children:[Object(m.jsx)(a.a,{title:p.a.title,projectLink:"https://skittss.github.io/FourierSketcher/",githubURL:"https://github.com/Skittss/FourierSketcher"}),Object(m.jsxs)("div",{className:"project-content-wrapper",children:[Object(m.jsx)("h1",{className:"raleway-title",children:"Contents"}),Object(m.jsxs)("p",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(m.jsx)(s.a,{smooth:!0,to:"#overview",children:Object(m.jsx)("b",{children:"Overview"})}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{smooth:!0,to:"#how-to-use",children:Object(m.jsx)("b",{children:"How to use"})}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{smooth:!0,to:"#edge-detection",children:Object(m.jsx)("b",{children:"Edge Detection & Point Sequencing"})}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{smooth:!0,to:"#fourier-transform",children:Object(m.jsx)("b",{children:"Fourier Transform Computation"})}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{smooth:!0,to:"#extensions",children:Object(m.jsx)("b",{children:"Potential Extensions"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(o.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(m.jsx)("h1",{id:"overview",className:"raleway-title",children:"Overview"}),Object(m.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[Object(m.jsxs)("span",{children:[Object(m.jsx)(r.a,{src:h,style:{height:"450px"},fallback:"Reference image"}),Object(m.jsx)(r.a,{src:l,style:{height:"450px"},fallback:"Output fourier sketch"})]}),Object(m.jsx)("p",{style:{fontSize:"0.75em"},children:Object(m.jsx)("i",{children:"(Output sketch for example image.) "})})]}),Object(m.jsx)("p",{children:"Fourier Sketcher is a prototype project which takes an input image, converts it to edges, then redraws them using epicycles calculated from a fourier transform."}),Object(m.jsx)("br",{}),Object(m.jsx)(o.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(m.jsx)("h1",{id:"how-to-use",className:"raleway-title",children:"How to use"}),Object(m.jsxs)("p",{children:["Since this is a prototype (and quite messy!), it might not be immediately obvious how to produce a result similar to the one shown above.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'Firstly, load an image with the button next to "Input image". Allow some time for the image to be loaded and processed by the edge detector once. The parameters for the edge detection algorithm can be changed with their respective sliders. I would avoid the "Process continually" and "Process on parameter change" checkboxes unless the input image is fairly small.',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'The "Sample Frequency" slider will determine the the number of inputs to be used for the fourier transform later on. This is by far the largest performance bottleneck of the program, so allow potentially a long time for processing. (details as to why are under ',Object(m.jsx)(s.a,{smooth:!0,to:"#edge-detection",children:"point sequencing"}),"). For the most accurate-to-form sketch, slide this all the way to the right.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'To view any changes to the edge detector output, click "Process Once". (Allow time for computation)',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'To then begin sketching, click "Compute" under "Fourier Sketching Settings". Again, this can take some time. Once finished, the parameter sliders can be adjusted to make changes to the sketch in real-time without having to recompute anything.',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"And voil\xe0, the image will begin drawing with epicycles!"]}),Object(m.jsx)("br",{}),Object(m.jsx)(o.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(m.jsx)("h1",{id:"edge-detection",className:"raleway-title",children:"Edge detection & Point sequencing"}),Object(m.jsxs)("p",{children:["Edge detection is used on the input image to gather sample points which can be used in the Fourier transform computation. Canny edge detection was used in this case to compute the edges. I won't go into the details of the process here as there is a much more thorough explanation of the process in a follow-up project of mine:\xa0",Object(m.jsx)("a",{href:"https://skittss.github.io/PortfolioWebsite#/projects/Webgl-Canny",target:"_blank",children:"Web-GL Canny Edge Detection"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"An additional step after the edges have been found is to order the points into a sequence based on their closest neighbour. This allows the path of the sketch to be as smooth as possible and mostly avoid large jumps. The final step of the process image shows the finished process - points of similar colour are in the same line segment:",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)(r.a,{src:b})}),Object(m.jsx)("br",{}),"The issue with this, however, is that in a reasonably sized image, it is common to have tens of thousands, maybe even hundreds of thousands of points to do this for. Checking the distance to each other point naively would have an average time complexity of ",Object(m.jsx)(j.a,{children:"$O({n^2})$"})," for the whole search operation - this is quite inefficient.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"This can be reduced by partitioning the samples in 2d space using a data structure - such as a k-d tree. This reduces the average time complexity to ",Object(m.jsx)(j.a,{children:"$O(n\\log n)$"})," for the whole operation. You can find my implementation of a k-d tree in ",Object(m.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher/blob/main/kdTree.js",target:"_blank",children:"kdTree.js"}),". Note this is specifically designed as a k-d tree for 2 dimensional space, and does not work at higher dimensions as any more is unnecessary for this problem. Using this data structure quite significantly reduces the total search time."]}),Object(m.jsx)("br",{}),Object(m.jsx)(o.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(m.jsx)("h1",{id:"fourier-transform",className:"raleway-title",children:"Fourier Transform Computation"}),Object(m.jsxs)("p",{children:["To draw the sequence of samples using epicycles, they must be approximated in the frequency domain. This is because in order to construct a series of epicycles, we need a series of sinusoids which add up to the respective point. I.e. a series of magnitudes and phases as a function of ",Object(m.jsx)(j.a,{children:"$f$"}),". This dual property of the frequency domain lends itself to the use of complex numbers - hence the complex fourier transform is used to perform the conversion. Similarly and conveniently, each sample can also be represented as a complex number as they also have dual properties: ",Object(m.jsx)(j.a,{children:"$x\\mapsto re, \\ y\\mapsto im$"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Since we are working with discrete set of samples, the discrete Fourier transform must be used to calculate the coefficients for each epicycle:",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:Object(m.jsx)(j.a,{children:"$\\displaystyle X_k=\\frac{1}{N}\\sum_{n=0}^{N-1}x_n\\cdot e^{-\\frac{2\\pi i}{N}kn} $"})}),Object(m.jsx)("br",{}),"The implmentation of this can be found in ",Object(m.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher/blob/main/fourier.js#L274",target:"_blank",children:"fourier.js"}),". Basic complex number arithmetic (including complex exponentials) is handled in ",Object(m.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher/blob/main/complex.js",target:"_blank",children:"complex.js"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"We end up with a function of ",Object(m.jsx)(j.a,{children:"$f(t)\\mapsto sample$"})," at ",Object(m.jsx)(j.a,{children:"$k\\frac{2\\pi}{N},\\ k\\in\\Z$"})," intervals."]}),Object(m.jsx)("br",{}),Object(m.jsx)(o.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(m.jsx)("h1",{id:"extensions",className:"raleway-title",children:"Potential Extensions"}),"Aside from UI and front-end improvements, one significant improvement that could be made to this prototype is an implementation of the fast Fourier transform (FFT). I wanted to implement the Fourier transfrom from scratch to better understand the maths behind it, as such I implemented a more naive Fourier transform algorithm; one with time complexity ",Object(m.jsx)(j.a,{children:"$O(n^2)$"}),". With FFT this could be improved to ",Object(m.jsx)(j.a,{children:"$O(n\\log n)$"}),".",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"An idea for an extension to this prototype would be to incorporate a form of looping noise filter to procedurally create loops following the edges of a specified image using interpolated points generated from the epicycles. Inspired by the following art from\xa0",Object(m.jsx)("a",{href:"https://bleuje.github.io/",target:"_blank",children:"Etienne Jacob"}),":",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,children:Object(m.jsx)("source",{src:d,type:"video/mp4"})})})]})]})})}}}]);
//# sourceMappingURL=13.d18acd30.chunk.js.map