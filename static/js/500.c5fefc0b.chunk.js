"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[500],{83865:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});i(27565);var o=i(6962),r=i(45577),s=i(46761);i(28370),i(58990);const n=i.p+"static/media/referenceImg.33a166e782a42c9901bd.png",a=i.p+"static/media/example.210397cc7d1608ec21be.gif",l=i.p+"static/media/etienneJacob.fe6550dfe77e05519786.mp4",c=i.p+"static/media/pointSequencing.521b9106c820dfbc74c2.png";i(73017);var h=i(8249),d=i(79701),u=i(95569),p=i(27929);const m=()=>(0,p.jsxs)(u.A,{title:d.Meta.title,thumb:d.Meta.thumb,projectLink:"https://skittss.github.io/FourierSketcher/",githubURL:"https://github.com/Skittss/FourierSketcher",children:[(0,p.jsx)("h1",{id:"overview",className:"raleway-title",children:"Overview"}),(0,p.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[(0,p.jsxs)("span",{children:[(0,p.jsx)(r.A,{src:n,style:{height:"450px"},fallback:"Reference image"}),(0,p.jsx)(r.A,{src:a,style:{height:"450px"},fallback:"Output fourier sketch"})]}),(0,p.jsx)("p",{style:{fontSize:"0.75em"},children:(0,p.jsx)("i",{children:"(Output sketch for example image.) "})})]}),(0,p.jsx)("p",{children:"Fourier Sketcher is a prototype project which takes an input image, converts it to edges, then redraws them using epicycles calculated from a fourier transform."}),(0,p.jsx)("br",{}),(0,p.jsx)(s.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"how-to-use",className:"raleway-title",children:"How to use"}),(0,p.jsxs)("p",{children:["Since this is a prototype (and quite messy!), it might not be immediately obvious how to produce a result similar to the one shown above.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),'Firstly, load an image with the button next to "Input image". Allow some time for the image to be loaded and processed by the edge detector once. The parameters for the edge detection algorithm can be changed with their respective sliders. I would avoid the "Process continually" and "Process on parameter change" checkboxes unless the input image is fairly small.',(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),'The "Sample Frequency" slider will determine the the number of inputs to be used for the fourier transform later on. This is by far the largest performance bottleneck of the program, so allow potentially a long time for processing. (details as to why are under ',(0,p.jsx)(o.Vq,{smooth:!0,to:"#edge-detection",children:"point sequencing"}),"). For the most accurate-to-form sketch, slide this all the way to the right.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),'To view any changes to the edge detector output, click "Process Once". (Allow time for computation)',(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),'To then begin sketching, click "Compute" under "Fourier Sketching Settings". Again, this can take some time. Once finished, the parameter sliders can be adjusted to make changes to the sketch in real-time without having to recompute anything.',(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"And voil\xe0, the image will begin drawing with epicycles!"]}),(0,p.jsx)("br",{}),(0,p.jsx)(s.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"edge-detection",className:"raleway-title",children:"Edge detection and Point sequencing"}),(0,p.jsxs)("p",{children:["Edge detection is used on the input image to gather sample points which can be used in the Fourier transform computation. Canny edge detection was used in this case to compute the edges. I won't go into the details of the process here as there is a much more thorough explanation of the process in a follow-up project of mine:\xa0",(0,p.jsx)("a",{href:"https://skittss.github.io/PortfolioWebsite#/projects/Webgl-Canny",target:"_blank",children:"Web-GL Canny Edge Detection"}),".",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"An additional step after the edges have been found is to order the points into a sequence based on their closest neighbour. This allows the path of the sketch to be as smooth as possible and mostly avoid large jumps. The final step of the process image shows the finished process - points of similar colour are in the same line segment:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{style:{textAlign:"center"},children:(0,p.jsx)(r.A,{src:c})}),(0,p.jsx)("br",{}),"The issue with this, however, is that in a reasonably sized image, it is common to have tens of thousands, maybe even hundreds of thousands of points to do this for. Checking the distance to each other point naively would have an average time complexity of ",(0,p.jsx)(h.A,{children:"$O({n^2})$"})," for the whole search operation - this is quite inefficient.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"This can be reduced by partitioning the samples in 2d space using a data structure - such as a k-d tree. This reduces the average time complexity to ",(0,p.jsx)(h.A,{children:"$O(n\\log n)$"})," for the whole operation. You can find my implementation of a k-d tree in ",(0,p.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher/blob/main/kdTree.js",target:"_blank",children:"kdTree.js"}),". Note this is specifically designed as a k-d tree for 2 dimensional space, and does not work at higher dimensions as any more is unnecessary for this problem. Using this data structure quite significantly reduces the total search time."]}),(0,p.jsx)("br",{}),(0,p.jsx)(s.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"fourier-transform",className:"raleway-title",children:"Fourier Transform Computation"}),(0,p.jsxs)("p",{children:["To draw the sequence of samples using epicycles, they must be approximated in the frequency domain. This is because in order to construct a series of epicycles, we need a series of sinusoids which add up to the respective point. I.e. a series of magnitudes and phases as a function of ",(0,p.jsx)(h.A,{children:"$f$"}),". This dual property of the frequency domain lends itself to the use of complex numbers - hence the complex fourier transform is used to perform the conversion. Similarly and conveniently, each sample can also be represented as a complex number as they also have dual properties: ",(0,p.jsx)(h.A,{children:"$x\\mapsto re, \\ y\\mapsto im$"}),".",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Since we are working with discrete set of samples, the discrete Fourier transform must be used to calculate the coefficients for each epicycle:",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:(0,p.jsx)(h.A,{children:"$\\displaystyle X_k=\\frac{1}{N}\\sum_{n=0}^{N-1}x_n\\cdot e^{-\\frac{2\\pi i}{N}kn} $"})}),(0,p.jsx)("br",{}),"The implmentation of this can be found in ",(0,p.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher/blob/main/fourier.js#L274",target:"_blank",children:"fourier.js"}),". Basic complex number arithmetic (including complex exponentials) is handled in ",(0,p.jsx)("a",{href:"https://github.com/Skittss/FourierSketcher/blob/main/complex.js",target:"_blank",children:"complex.js"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"We end up with a function of ",(0,p.jsx)(h.A,{children:"$f(t)\\mapsto sample$"})," at ",(0,p.jsx)(h.A,{children:"$k\\frac{2\\pi}{N},\\ k\\in\\Z$"})," intervals."]}),(0,p.jsx)("br",{}),(0,p.jsx)(s.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,p.jsx)("h1",{id:"extensions",className:"raleway-title",children:"Potential Extensions"}),"Aside from UI and front-end improvements, one significant improvement that could be made to this prototype is an implementation of the fast Fourier transform (FFT). I wanted to implement the Fourier transfrom from scratch to better understand the maths behind it, as such I implemented a more naive Fourier transform algorithm; one with time complexity ",(0,p.jsx)(h.A,{children:"$O(n^2)$"}),". With FFT this could be improved to ",(0,p.jsx)(h.A,{children:"$O(n\\log n)$"}),".",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"An idea for an extension to this prototype would be to incorporate a form of looping noise filter to procedurally create loops following the edges of a specified image using interpolated points generated from the epicycles. Inspired by the following art from\xa0",(0,p.jsx)("a",{href:"https://bleuje.github.io/",target:"_blank",children:"Etienne Jacob"}),":",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{style:{textAlign:"center"},children:(0,p.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,style:{width:"100%",maxWidth:"500px"},children:(0,p.jsx)("source",{src:l,type:"video/mp4"})})})]})},58990:(e,t,i)=>{i.d(t,{A:()=>d});var o=i(27565),r=i(11030),s=i(20477),n=i(58860),a=i(46761),l=i(75342),c=i(85477),h=(i(29780),i(27929));const d=e=>{let{title:t,githubURL:i,projectRoute:d,projectLink:u,thumb:p}=e;const m=(0,r.zy)().pathname;return(0,o.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{marginTop:"-3rem",backgroundImage:"url(".concat(p,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",zIndex:-1}}),(0,h.jsxs)("div",{className:"project-home-wrapper",style:{position:"absolute",width:"100%",top:"101vh",left:"0px",transform:"translate(0, -100%)"},children:[(0,h.jsxs)("header",{className:"home-header",children:[(0,h.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),(0,h.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=i?(0,h.jsx)(n.A,{title:"View on Github",placement:"bottom",children:(0,h.jsx)("a",{href:i,target:"_blank",children:(0,h.jsx)(l.A,{className:"title-icon"})})}):null,void 0!=d?(0,h.jsx)(n.A,{title:"View project",placement:"bottom",children:(0,h.jsx)(s.N_,{to:m+d,children:(0,h.jsx)(c.A,{className:"title-icon"})})}):null,void 0!=u?(0,h.jsx)(n.A,{title:"View project",placement:"bottom",children:(0,h.jsx)("a",{href:u,target:"_blank",children:(0,h.jsx)(c.A,{className:"title-icon"})})}):null]}),(0,h.jsx)(a.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]}),(0,h.jsx)("div",{style:{height:"8em"}})]})]})}},95569:(e,t,i)=>{i.d(t,{A:()=>b});var o=i(28370),r=i.n(o),s=i(58990),n=i(65894),a=i(9514),l=i(27565),c=i(27929);const h=e=>{var t=e.filter((e=>{let t=e.nodeName;return"title"!==e.id&&("H1"===t||"H2"===t||"H3"===t)}));let i=-1;var o=t.map((e=>(i++,{key:"contents_".concat(i),href:"#".concat(e.id),title:e.innerHTML,level:parseInt(e.nodeName.slice(-1))}))),r=[],s=[],n=[r];return o.forEach((e=>{var t=s.findIndex((t=>t>=e.level));-1===t?t=s.push(e.level)-1:s.length=t+1,n[t].push(Object.assign({},e,{children:n[t+1]=[]}))})),r},d=e=>{let{title:t}=e;const{nestedHeadings:i}=(()=>{const[e,t]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=Array.from(document.querySelectorAll("h1, h2, h3")),i=h(e);t(i)}),[]),{nestedHeadings:e}})(),{navHeight:o}=(()=>{const[e,t]=(0,l.useState)(0);return(0,l.useEffect)((()=>{const e=document.getElementById("main-navbar");console.log(e),t(e.offsetHeight)}),[]),{navHeight:e}})(),[r,s]=(0,l.useState)("85vh");return(0,l.useEffect)((()=>{const e=document.getElementById("toc-breadcrumb");e&&s("calc(100vh - 6rem - ".concat(e.offsetHeight,"px)"))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.A,{id:"toc-breadcrumb",style:{paddingBottom:"14px",position:"sticky"},items:[{title:(0,c.jsx)("a",{href:"#home",children:"Portfolio"})},{title:(0,c.jsx)("a",{href:"#projects",children:"Projects"})},{title:"".concat(t)}]}),(0,c.jsx)(a.A,{style:{maxHeight:r,overflow:"auto"},targetOffset:o,onClick:(e,t)=>{e.preventDefault()},items:i})]})};var u=i(50899),p=i(20791),m=i(39432);const{useBreakpoint:f}=u.Ay,b=e=>{let{title:t,thumb:i,projectLink:o,projectRoute:n,githubURL:a,footer:l,children:h}=e;const u=f();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r(),{children:[(0,c.jsx)(s.A,{title:t,thumb:i,projectRoute:n,projectLink:o,githubURL:a}),(0,c.jsxs)(p.A,{gutter:0,children:[(0,c.jsx)(m.A,{xs:0,lg:5,children:(0,c.jsx)("div",{className:"project-toc-wrapper",children:(0,c.jsx)(d,{title:t})})}),(0,c.jsxs)(m.A,{xs:24,lg:19,children:[(0,c.jsx)("div",{className:"project-content-wrapper",style:{marginRight:u.lg?"17.5vw":"6vw",marginLeft:u.lg?0:"6vw"},children:h}),(0,c.jsx)("div",{className:"project-footer-wrapper",style:{display:"flex",justifyContent:"center",marginTop:"8vh",marginBottom:"5vh",marginRight:u.lg?"17.5vw":"6vw",marginLeft:u.lg?0:"6vw"},children:l?{footer:l}:"\u274b That's all! Thanks for reading. \u274b"})]})]})]})})}},6962:(e,t,i)=>{i.d(t,{Vq:()=>m});var o=i(27565),r=i(20477),s=function(){return s=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};var n="",a=null,l=null,c=null;function h(){n="",null!==a&&a.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function d(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function u(){var e=null;if("#"===n)e=document.body;else{var t=n.replace("#","");null===(e=document.getElementById(t))&&"#top"===n&&(e=document.body)}if(null!==e){c(e);var i=e.getAttribute("tabindex");return null!==i||d(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==i||d(e)||(e.blur(),e.removeAttribute("tabindex")),h(),!0}return!1}function p(e){return o.forwardRef((function(t,i){var d="";"string"===typeof t.to&&t.to.includes("#")?d="#"+t.to.split("#").slice(1).join("#"):"object"===typeof t.to&&"string"===typeof t.to.hash&&(d=t.to.hash);var p={};e===r.k2&&(p.isActive=function(e,t){return e&&e.isExact&&t.hash===d});var m=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(i[o[r]]=e[o[r]])}return i}(t,["scroll","smooth","timeout","elementId"]);return o.createElement(e,s({},p,m,{onClick:function(e){var i;h(),n=t.elementId?"#"+t.elementId:d,t.onClick&&t.onClick(e),""===n||e.defaultPrevented||0!==e.button||t.target&&"_self"!==t.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(c=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},i=t.timeout,window.setTimeout((function(){!1===u()&&(null===a&&(a=new MutationObserver(u)),a.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){h()}),i||1e4))}),0))},ref:i}),t.children)}))}var m=p(r.N_);p(r.k2)},29780:()=>{}}]);
//# sourceMappingURL=500.c5fefc0b.chunk.js.map