(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[11],{105:function(e,t,i){"use strict";i(0);var s=i(3),a=i(25),n=i(139),r=i(209),c=i(220),o=i(221),l=i(4);t.a=function(e){var t=e.title,i=e.githubURL,h=e.projectRoute,d=e.projectLink,b=Object(s.g)().pathname;return Object(l.jsx)("div",{className:"project-home-wrapper",children:Object(l.jsxs)("header",{className:"home-header",children:[Object(l.jsx)("a",{name:"top"}),Object(l.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),Object(l.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=i?Object(l.jsx)(n.a,{title:"View on Github",placement:"bottom",children:Object(l.jsx)("a",{href:i,target:"_blank",children:Object(l.jsx)(c.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null,void 0!=h?Object(l.jsx)(n.a,{title:"View project",placement:"bottom",children:Object(l.jsx)(a.b,{to:b+h,children:Object(l.jsx)(o.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null,void 0!=d?Object(l.jsx)(n.a,{title:"View project",placement:"bottom",children:Object(l.jsx)("a",{href:d,target:"_blank",children:Object(l.jsx)(o.a,{style:{fontSize:"40px",padding:"0 0.2em"}})})}):null]}),Object(l.jsx)(r.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]})})}},121:function(e,t,i){"use strict";var s,a=i(1),n=i(7),r=i(75),c=i(72),o=i(0),l=i(9),h=i.n(l),d=i(47),b=i(86),j=i(28),x=["xxl","xl","lg","md","sm","xs"],p={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=new Map,g=-1,u={},O={matchHandlers:{},dispatch:function(e){return u=e,m.forEach((function(e){return e(u)})),m.size>=1},subscribe:function(e){return m.size||this.register(),g+=1,m.set(g,e),e(u),g},unsubscribe:function(e){m.delete(e),m.size||this.unregister()},unregister:function(){var e=this;Object.keys(p).forEach((function(t){var i=p[t],s=e.matchHandlers[i];null===s||void 0===s||s.mql.removeListener(null===s||void 0===s?void 0:s.listener)})),m.clear()},register:function(){var e=this;Object.keys(p).forEach((function(t){var i=p[t],s=function(i){var s=i.matches;e.dispatch(Object(a.a)(Object(a.a)({},u),Object(n.a)({},t,s)))},r=window.matchMedia(i);r.addListener(s),e.matchHandlers[i]={mql:r,listener:s},s(r)}))}},f=i(87),y=function(){return Object(f.a)()&&window.document.documentElement},w=function(){var e=o.useState(!1),t=Object(c.a)(e,2),i=t[0],a=t[1];return o.useEffect((function(){a(function(){if(!y())return!1;if(void 0!==s)return s;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),s=1===e.scrollHeight,document.body.removeChild(e),s}())}),[]),i},v=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i},$=(Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between"),o.forwardRef((function(e,t){var i,s=e.prefixCls,l=e.justify,j=e.align,p=e.className,m=e.style,g=e.children,u=e.gutter,f=void 0===u?0:u,y=e.wrap,$=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),k=o.useContext(d.b),T=k.getPrefixCls,_=k.direction,G=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=Object(c.a)(G,2),I=C[0],W=C[1],R=w(),L=o.useRef(f);o.useEffect((function(){var e=O.subscribe((function(e){var t=L.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&W(e)}));return function(){return O.unsubscribe(e)}}),[]);var N=T("row",s),P=function(){var e=[0,0];return(Array.isArray(f)?f:[f,0]).forEach((function(t,i){if("object"===Object(r.a)(t))for(var s=0;s<x.length;s++){var a=x[s];if(I[a]&&void 0!==t[a]){e[i]=t[a];break}}else e[i]=t||0})),e}(),S=h()(N,(i={},Object(n.a)(i,"".concat(N,"-no-wrap"),!1===y),Object(n.a)(i,"".concat(N,"-").concat(l),l),Object(n.a)(i,"".concat(N,"-").concat(j),j),Object(n.a)(i,"".concat(N,"-rtl"),"rtl"===_),i),p),A={},B=P[0]>0?P[0]/-2:void 0,E=P[1]>0?P[1]/-2:void 0;if(B&&(A.marginLeft=B,A.marginRight=B),R){var M=Object(c.a)(P,2);A.rowGap=M[1]}else E&&(A.marginTop=E,A.marginBottom=E);var z=o.useMemo((function(){return{gutter:P,wrap:y,supportFlexGap:R}}),[P,y,R]);return o.createElement(b.a.Provider,{value:z},o.createElement("div",Object(a.a)({},$,{className:S,style:Object(a.a)(Object(a.a)({},A),m),ref:t}),g))})));$.displayName="Row";var k=$;t.a=k},122:function(e,t,i){"use strict";var s=i(7),a=i(1),n=i(75),r=i(0),c=i(9),o=i.n(c),l=i(86),h=i(47),d=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(i[s[a]]=e[s[a]])}return i};var b=["xs","sm","md","lg","xl","xxl"],j=r.forwardRef((function(e,t){var i,c=r.useContext(h.b),j=c.getPrefixCls,x=c.direction,p=r.useContext(l.a),m=p.gutter,g=p.wrap,u=p.supportFlexGap,O=e.prefixCls,f=e.span,y=e.order,w=e.offset,v=e.push,$=e.pull,k=e.className,T=e.children,_=e.flex,G=e.style,C=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),I=j("col",O),W={};b.forEach((function(t){var i,r={},c=e[t];"number"===typeof c?r.span=c:"object"===Object(n.a)(c)&&(r=c||{}),delete C[t],W=Object(a.a)(Object(a.a)({},W),(i={},Object(s.a)(i,"".concat(I,"-").concat(t,"-").concat(r.span),void 0!==r.span),Object(s.a)(i,"".concat(I,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),Object(s.a)(i,"".concat(I,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),Object(s.a)(i,"".concat(I,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),Object(s.a)(i,"".concat(I,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),Object(s.a)(i,"".concat(I,"-rtl"),"rtl"===x),i))}));var R=o()(I,(i={},Object(s.a)(i,"".concat(I,"-").concat(f),void 0!==f),Object(s.a)(i,"".concat(I,"-order-").concat(y),y),Object(s.a)(i,"".concat(I,"-offset-").concat(w),w),Object(s.a)(i,"".concat(I,"-push-").concat(v),v),Object(s.a)(i,"".concat(I,"-pull-").concat($),$),i),k,W),L={};if(m&&m[0]>0){var N=m[0]/2;L.paddingLeft=N,L.paddingRight=N}if(m&&m[1]>0&&!u){var P=m[1]/2;L.paddingTop=P,L.paddingBottom=P}return _&&(L.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(_),"auto"!==_||!1!==g||L.minWidth||(L.minWidth=0)),r.createElement("div",Object(a.a)({},C,{style:Object(a.a)(Object(a.a)({},L),G),className:R,ref:t}),T)}));j.displayName="Col";var x=j;t.a=x},168:function(e,t,i){"use strict";i.r(t);i(0);var s=i(130),a=i(212),n=i(121),r=i(122),c=i(209),o=i(98),l=i.n(o),h=i(105),d=i.p+"static/media/Canny-Process.86877d85.png",b=i.p+"static/media/Canny-lerp.b8f963f0.png",j=(i(128),i(129)),x=i(107),p=i(4);t.default=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(h.a,{title:x.a.title,projectRoute:"/main",githubURL:"https://github.com/Skittss/PortfolioWebsite/tree/main/src/projects/Webgl-Canny"}),Object(p.jsxs)("div",{className:"project-content-wrapper",children:[Object(p.jsx)("h1",{id:"overview",className:"raleway-title",children:"Overview"}),Object(p.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[Object(p.jsx)(a.a,{src:d,fallback:"Canny Process Image"}),Object(p.jsx)("p",{style:{fontSize:"0.75em"},children:Object(p.jsx)("i",{children:"(Canny Edge Detection Steps) "})})]}),Object(p.jsxs)("p",{children:["Canny edge detection is a quintessential image processing algorithm which finds edges in images using a multi-stage process.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),'This project was created off the back of a similar (prototype) project of mine which drew images via a complex fourier series. You can find that project as "Fourier Sketcher" in the projects tab or the page itself ',Object(p.jsx)("a",{href:"https://skittss.github.io/FourierSketcher/",target:"_blank",children:" here"}),". My implementation of edge detection in this prototype was ",Object(p.jsx)("i",{children:"painfully"})," slow, being CPU bound, and only running on a single core! :(",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"This project is my attempt to make a faster (real-time!) canny edge detection implementation which runs in parallel, on a GPU!",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"In order to achieve this (and show it off on this website), I opted to use WebGL. WebGL comes with its own slew of problems which i will touch on in relevant sections, however, it is still good enough to allow me to write GPU compatible programs (shaders) in GLSL. I also made use of two other libraries to make my life easier:"]}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsx)(r.a,{flex:"200px",children:Object(p.jsx)("b",{children:"Three.js"})}),Object(p.jsx)(r.a,{flex:"1vw",children:"A WebGL wrapper which allows for easy writing of fragment shaders. Each step of the process below was written as a fragment shader in some capacity."})]}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)(r.a,{flex:"200px",children:Object(p.jsx)("b",{children:"React-three-fiber"})}),Object(p.jsxs)(r.a,{flex:"1vw",children:["An interface between ",Object(p.jsx)("i",{children:"Three.js"})," and ",Object(p.jsx)("i",{children:"React"})," which facilitates creating Three canvases in jsx/ts syntax."]})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"Canny edge detection is a 6-step process (7 including my own final clean-up):"}),Object(p.jsxs)("p",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsx)(s.a,{smooth:!0,to:"#grayscale",children:Object(p.jsx)("b",{children:"1. \xa0 Grayscale Encoding"})}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{smooth:!0,to:"#blur",children:Object(p.jsx)("b",{children:"2. \xa0 Noise filtering (Gaussian Blur)"})}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{smooth:!0,to:"#sobel",children:Object(p.jsx)("b",{children:"3. \xa0 Image Gradient Calculation"})}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{smooth:!0,to:"#nms",children:Object(p.jsx)("b",{children:"4. \xa0 Non-maximum suppression"})}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{smooth:!0,to:"#threshold",children:Object(p.jsx)("b",{children:"5. \xa0 Double thresholding"})}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{smooth:!0,to:"#hysteresis",children:Object(p.jsx)("b",{children:"6. \xa0 Edge tracking (via hysteresis)"})}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{smooth:!0,to:"#cleanup",children:Object(p.jsx)("b",{children:Object(p.jsx)("i",{children:"7. \xa0 Final clean-up"})})})]}),Object(p.jsx)("p",{children:"Each step is implemented as a Three.js post-processing shader pass."}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"grayscale",className:"raleway-title",children:"Grayscale Encoding"}),Object(p.jsxs)("p",{children:["The target image is first converted to grayscale. There is no specific reason to do this except for simplicity; this way we do not have to deal with multiple colour channels later on.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"An image can be converted to grayscale by setting the value of each colour channel to some weighted average of each individual channel. Different coefficients for the colour channels will allow different details to be preserved in the grayscale image.",Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsx)(r.a,{flex:"200px",children:Object(p.jsx)("b",{children:"BT.601"})}),Object(p.jsx)(r.a,{flex:"auto",children:Object(p.jsx)(j.a,{children:"$R:0.2990,\\ G:0.5870,\\ B:0.1140$."})})]}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsx)(r.a,{flex:"200px",children:Object(p.jsx)("b",{children:"BT.709"})}),Object(p.jsx)(r.a,{flex:"auto",children:Object(p.jsx)(j.a,{children:"$R:0.2126,\\ G:0.7152,\\ B:0.0722$."})})]}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsx)(r.a,{flex:"200px",children:Object(p.jsx)("b",{children:"BT.2100"})}),Object(p.jsxs)(r.a,{flex:"auto",children:[Object(p.jsx)(j.a,{children:"$R:0.2627,\\ G:0.6780,\\ B:0.0593$."})," \xa0 (Typically used for HDR content)"]})]}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsx)(r.a,{flex:"200px",children:Object(p.jsx)("b",{children:"Mean"})}),Object(p.jsxs)(r.a,{flex:"auto",children:[Object(p.jsx)(j.a,{children:"$R:0.3333,\\ G:0.3333,\\ B:0.3333$."})," \xa0 (Simple approach)"]})]})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("br",{}),"This can be easily achieved in a fragment shader with a uniform vec3 (weights) of these coefficients:",Object(p.jsx)("br",{}),Object(p.jsx)(j.a,{children:"$gl\\_FragColor=vec4(weights.r \\cdot texel.r, \\ weights.g\\cdot texel.g, \\ weights.b\\cdot texel.b, texel.a )$"})]}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"blur",className:"raleway-title",children:"Noise filtering (Gaussian Blur)"}),Object(p.jsxs)("p",{children:["Next, we can choose to remove noise from the input image with a blur. This way the 'imperfections' - noise - gets smoothed out and is thus at least partially removed from the image.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"A quick way of computing a blur is with a gaussian distribution. We perform a convolution with a gaussian kernel which effectively adds up pixels around the centre pixel, weighted by their distance from the centre. (Those closer to the centre are weighted more). We can effect how much these pixels are weighted with a parameter",Object(p.jsx)(j.a,{children:"$\\ \\sigma$"})," when we generate the gaussian kernel. (",Object(p.jsx)(j.a,{children:"$\\sigma$"})," effects the standard deviation of a gaussian distribution).",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"A gaussian kernel can be written as:",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:Object(p.jsx)(j.a,{children:"$\\large G(x,y)= \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2+y^2}{2\\sigma^2}}$"})}),Object(p.jsx)("br",{}),"where ",Object(p.jsx)(j.a,{children:"$x$"})," and ",Object(p.jsx)(j.a,{children:"$y$"})," are the coordinate offsets from the centre of the kernel, and ",Object(p.jsx)(j.a,{children:"$\\sigma$"})," a non-zero value of our choice.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"There are a few important properties of the kernel above.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"1. \xa0 \xa0 \xa0"}),Object(p.jsx)(j.a,{children:"$\\displaystyle\\sum_{x,y}G(x,y) = 1$"})]}),Object(p.jsxs)(r.a,{flex:"1vw",style:{paddingLeft:"20px"},children:["The sum of the entire kernel ",Object(p.jsx)("i",{children:"must"})," be one. If it were not, we would be brightening or dimming the image with each pass. To ensure this is true, we multiply the entire kernel by a normalization coefficient, which is simply one over the sum of the non-normalized kernel."]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"2. \xa0 \xa0 \xa0"}),Object(p.jsx)(j.a,{children:"$\\large G(x,y)= G(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{x^2}{2\\sigma^2}} \\cdot G(y)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{y^2}{2\\sigma^2}}$"})]}),Object(p.jsxs)(r.a,{flex:"1vw",style:{paddingLeft:"20px"},children:["The kernel is separable. This means that we can achieve the same convolution as the full kernel by sequentially passing two one-dimensional 'kernels' instead ",Object(p.jsx)(j.a,{children:"$\\big[G(x) \\ \\& \\ G(y)\\big]$"}),". This proves very useful, as it allows the time complexity of the pass to be reduced from ",Object(p.jsx)(j.a,{children:"$O(N^2)$"})," to ",Object(p.jsx)(j.a,{children:"$O(N)$"}),". This is quite a substantial improvement!"]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"3. \xa0 \xa0 \xa0"}),Object(p.jsx)(j.a,{children:"$G(x) = G(y)^T, \\ G(n) = G(-n)$"})]}),Object(p.jsxs)(r.a,{flex:"1vw",style:{paddingLeft:"20px"},children:["These are properties which allow us to store only ",Object(p.jsx)("i",{children:"parts"})," of the entire kernel to save on memory. These are both derrived from the fact that the gaussian distribution which the kernel is generated from is symmetrical about ",Object(p.jsx)(j.a,{children:"$0$"})," in both the ",Object(p.jsx)(j.a,{children:"$x$"})," and ",Object(p.jsx)(j.a,{children:"$y$"})," axes, and has rotational symmetry when mapping one axis to the other."]})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Finally we have two parameters for the blur, ",Object(p.jsx)(j.a,{children:"$r$"})," and ",Object(p.jsx)(j.a,{children:"$\\sigma$"}),". Sigma was discussed above, and ",Object(p.jsx)(j.a,{children:"$r$ "}),"is simply the size of the kernel - the interval which ",Object(p.jsx)(j.a,{children:"$x$"})," and ",Object(p.jsx)(j.a,{children:"$y$"})," are taken from: \xa0 ",Object(p.jsx)(j.a,{children:"$(x,y)\\in [-r,r]\\subset\\Z$"}),Object(p.jsx)("br",{}),"More intuitively, ",Object(p.jsx)(j.a,{children:"$r$"})," is the max distance from the centre pixel which we blend other pixels from.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Though the maths here is non-trivial, the actual implementation is quite simple. All of the above can be reduced into ~20 lines of JavaScript. You can find this in ",Object(p.jsx)("a",{href:"https://github.com/Skittss/PortfolioWebsite/blob/main/src/projects/Webgl-Canny/src/gaussianKernel.jsx",target:"_blank",children:"gaussianKernel.jsx"})," in the source code."]}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"sobel",className:"raleway-title",children:"Image Gradient Calculation"}),Object(p.jsxs)("p",{children:["This step gives us most of the information about the actual edges in the image. Subsequent steps exist to refine the information calculated here.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),'The way edges are detected in this step is by calculating the "gradient" of the image. This might sound a little strange at first - its not everyday that we associate images with calculus, but by phrasing this as "finding the parts of the image where the change in brightness is the greatest" the idea starts to make a bit more sense.',Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"We can calculate the gradient of an image by calculating partial derivatives with respect to ",Object(p.jsx)(j.a,{children:"$x$"})," and ",Object(p.jsx)(j.a,{children:"$y$ "}),"followed by aggregating our results. To do this we can use an ",Object(p.jsx)("i",{children:"operator"})," such as the ",Object(p.jsx)("i",{children:"Sobel operator"})," or ",Object(p.jsx)("i",{children:"Prewitt operator"}),". These operators positively weight values on one side of a centre pixel and negatively on the other in a convolution which as a result calculates the gradient. The ",Object(p.jsx)("i",{children:"Sobel"})," and ",Object(p.jsx)("i",{children:"Prewitt"})," operators are very similar, the only distinction being that ",Object(p.jsx)("i",{children:"Sobel's"})," is slightly biased towards gradients in a cardinal direction, whereas ",Object(p.jsx)("i",{children:"Prewitt's"})," equally weights gradients on the diagonals as well. This can be observed from their kernels: After"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:["Sobel:",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(j.a,{children:"$S_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 2 & 0 & -2 \\\\ 1 & 0 & -1\\end{bmatrix},\\ S_y = \\begin{bmatrix} 1 & 2 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -2 & -1\\end{bmatrix}$"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Prewitt:",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(j.a,{children:"$P_x = \\begin{bmatrix} 1 & 0 & -1 \\\\ 1 & 0 & -1 \\\\ 1 & 0 & -1\\end{bmatrix},\\ P_y = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ -1 & -1 & -1\\end{bmatrix}$"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["After perfoming the horizontal and vertical convolutions denoted by ",Object(p.jsx)(j.a,{children:"$G_x, G_y$"}),", we can extract the total gradient magnitude, and its direction (argument/angle) using basic trigonometry and Pythagoras' theorem:"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:["Magnitude:",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(j.a,{children:"$M_{x,y}=\\sqrt{{G_x}^2 + {G_y}^2}$"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Argument:",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(j.a,{children:"$A_{x,y}=\\arctan(G_y, G_x)$"})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["The magnitude gives us an indication how strong an edge is at a certain pixel, and the argument indicates which direction the edge lays on at this point.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Now, how can we compute this information in WebGL? There are two issues which we have to deal with:"]}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"1. "})," \xa0\xa0\xa0"]}),Object(p.jsx)(r.a,{flex:"1vw",children:"We need to output two values for a single input texel."})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"2. "})," \xa0\xa0\xa0"]}),Object(p.jsxs)(r.a,{flex:"1vw",children:["We cannot clamp ",Object(p.jsx)(j.a,{children:"$M_{x,y}$"})," to ",Object(p.jsx)(j.a,{children:"$[0, 1]$"})," as strong edges will clip and not retain precise information about the strength of the edge. This is particularly important for the next step (non-maximum suppression). Similarly, ",Object(p.jsx)(j.a,{children:"$A_{x,y}$"})," cannot be clamped to ",Object(p.jsx)(j.a,{children:"$[0, 1]$"})," either."]})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["OpenGL's compute shaders would be ideal for this, however these are not supported by WebGL. Instead, we can use a class included in Three.js - ",Object(p.jsx)("i",{children:"GPUComputationRenderer"})," - to achieve similar behaviour. This class uses a fragment shader in place of the compute shader and ouputs to a floating point texture. We can also add multiple shaders to the renderer which allows us calculate multiple outputs for a single input texture. This solves both problems (albeit in a somewhat hacky way).",Object(p.jsx)("br",{}),"Two final considerations with using this class are:"]}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"1. "})," \xa0\xa0\xa0"]}),Object(p.jsx)(r.a,{flex:"1vw",children:"We have to manually dispose of all related WebGL components after finished with it to avoid memory leaks."})]}),Object(p.jsx)("br",{}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"2. "})," \xa0\xa0\xa0"]}),Object(p.jsxs)(r.a,{flex:"1vw",children:["We should memoize any active ",Object(p.jsx)("i",{children:"GPUComputationRenderers"})," as there is considerable overhead to initialising one. Performance would drop considerably initialising one each frame."]})]})]}),Object(p.jsx)("br",{id:"step3end"}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Finally, one extra feature I added at this step was to map (not clamp) all ",Object(p.jsx)(j.a,{children:"$M_{x,y}$"})," to ",Object(p.jsx)(j.a,{children:"$[0,1]$"})," so that the entire range of gradient magnitudes is displayed. To do this, the maximum magnitude in ",Object(p.jsx)(j.a,{children:"$M_{x,y}$"})," is required. Unfortunately, there is no easy way to output a single value from the GPUComputationRenderer, so instead an ",Object(p.jsx)(j.a,{children:"$O(N^2)$"})," CPU-bound pass over ",Object(p.jsx)(j.a,{children:"$M_{x,y}$ "}),"is performed to calculate ",Object(p.jsx)(j.a,{children:"$\\max(M_{x,y})$"}),". This is the only CPU-bound part of the entire process, and can be removed if greater performance is needed. However for visual clarity, and the little effect it has on reasonably sized images, I included this pass."]}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"nms",className:"raleway-title",children:"Non-maximum suppression"}),Object(p.jsxs)("p",{children:["Non-maximum suppression is a method for thinning the edges produced by the gradient calculation. It pretty much does exactly what it says it does - suppresses (i.e. sets their value to zero) pixels which are not the maximum gradient value along the line perpendicular to the edge at that point. We can find neighbouring points along this line using the argument (angle) we calculated earlier.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"It is possible that this line does not exactly point in the direction of a neighbouring pixel (i.e. the argument is not a multiple of 45deg). We could simply take the value from the closest neighbouring pixel to this line, but we can do a little better by ",Object(p.jsx)("i",{children:"interpolating"})," the gradient value between the two adjacent pixels to the line.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"In every case, two of the four interpolation points are on a diagonal from the centre pixel (Note we need to check the magnitudes in both directions along the line, hence 4 points total). Let these points be denoted by ",Object(p.jsx)(j.a,{children:"$a_1,a_2$"}),". We can then choose the second interpolation points ",Object(p.jsx)(j.a,{children:"$b_1,b_2$"})," based on whether the gradient line's horizontal or vertical component is larger in length (absolute value). This is illustrated below with both cases:"]}),Object(p.jsxs)("div",{style:{paddingBottom:"20px",textAlign:"center"},children:[Object(p.jsx)(a.a,{src:b,fallback:"NMS Interpolation Geometry"}),Object(p.jsx)("p",{style:{fontSize:"0.75em"},children:Object(p.jsx)("i",{children:"(Interpolation between pixels) "})})]}),Object(p.jsxs)("p",{children:["We then do a standard linear interpolation between the two magnitudes for both ",Object(p.jsx)(j.a,{children:"$a_1,b_1$"})," and ",Object(p.jsx)(j.a,{children:"$a_2,b_2$"})," using a ratio:"]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:Object(p.jsx)(j.a,{children:"$\\text{lerp} = a_ir + (1-r)b_i$"})}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)(j.a,{children:"$r$"})," and ",Object(p.jsx)(j.a,{children:"$1-r$"})," are calculated from the larger absolute value of the horizontal ",Object(p.jsx)(j.a,{children:"$\\big(\\cos(\\alpha)\\big)$ "}),"and vertical ",Object(p.jsx)(j.a,{children:"$\\big(\\sin(\\alpha)\\big)$ "})," components as mentioned before and illustrated above. This results in the a final piecewise function which calculates the interpolated gradient value for both directions along the gradient line:"]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{paddingLeft:"3em",paddingRight:"3em",textAlign:"center"},children:Object(p.jsx)(j.a,{children:"$f(a_i, b_i, \\alpha)=\\begin{cases} M_{a_i} \\cdot {|\\cos(\\alpha)|} + (1-{|\\cos(\\alpha)|}) \\cdot M_{b_i} & \\text{if } \\cos(\\alpha) \\ge \\sin(\\alpha)\\\\  M_{a_i} \\cdot {|\\sin(\\alpha)|} + (1-{|\\sin(\\alpha)|}) \\cdot M_{b_i} & \\text{otherwise}\\end{cases}$"})}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Finally, we check the two interpolated values against the magnitude of the centre pixel to decide if the pixel should be eliminated. ",Object(p.jsx)(j.a,{children:"$\\big(\\text{if }M_{\\text{current}} < f(a_1,b_1,\\alpha) \\text{ or }M_{\\text{current}} < f(a_2,b_2,\\alpha)\\big)$ "}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"This is all quite simple to implement in a fragment shader which can then be used in the GPUComputationRenderer class mentioned in the previous section."]}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"threshold",className:"raleway-title",children:"Double thresholding"}),Object(p.jsxs)("p",{children:["With non-maximum suppression completed, we have information about all the local edges in the images as thin lines. We now start taking away irrelevant or obtrusive information in the image.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"With a process named \"double-thresholding\" we can label edges as strong (ones we wish to keep) and weak (ones which we should probably get rid of). A good example of where this can be useful is in soft edges - think bloom from a light source for example. A specific example is if we wished to find the silhouette of the sun (a circle) from a photo, we would get a well-defined edge from the silhouette, but a bunch of weak, contour like edges from the bloom of the sun. Double thresholding would allow us to mark these as 'weak' and remove them if we wish.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"We define two thresholds:"]}),Object(p.jsxs)("div",{style:{paddingLeft:"3em",paddingRight:"3em"},children:[Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center",paddingBottom:"10px"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"High "})," \xa0\xa0\xa0"]}),Object(p.jsxs)(r.a,{flex:"1vw",children:["A percentage of the maximum gradient magnitude for which any pixel that exceeds this value is marked as ",Object(p.jsx)("b",{children:'"strong"'})]})]}),Object(p.jsxs)(n.a,{style:{display:"flex",alignItems:"center"},children:[Object(p.jsxs)(r.a,{children:[Object(p.jsx)("b",{children:"Low "})," \xa0\xa0\xa0"]}),Object(p.jsxs)(r.a,{flex:"1vw",children:["A percentage of ",Object(p.jsx)("b",{children:"High"})," for which any pixel that does not exceed high, but exceeds low is marked as ",Object(p.jsx)("b",{children:'"weak"'})]})]})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["This can also be written as an inequality for clarity: ",Object(p.jsx)(j.a,{children:"$0 \\le r_{low}\\big(r_{high}\\max(M)\\big) \\le \\text{weak} \\lt r_{high}\\max(M)\\le \\text{strong}\\le 1,\\ r\\in [0,1]$"}),".",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Implementing this as a shader pass, we can set any strong pixels to 1, and any weak to a lower opacity value, such as 0.3."]}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"hysteresis",className:"raleway-title",children:"Edge tracking (via hysteresis)"}),Object(p.jsxs)("p",{children:["Now that the edges of the image are labelled weak and strong, we can start choosing which weak edges we'd like to keep, and which to remove. Hysteresis does this by saying, for each strong edge, mark any neighbouring weak edges as strong as well, then repeat the process for any weak edges changed. In other words, if there is a strong pixel on any part of a continuous edge, we want to mark the entire edge as strong.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"The hysteresis process lends itself very well to recursion, but this is a problem when programming shaders, as this sort of recursion is not possible on a GPU. Instead, we can approach hysteresis by repeatedly 'growing' strong pixels in the image. The formal name for this process is ",Object(p.jsx)("i",{children:"Morphological dilation"}),", and was introducted to me in ",Object(p.jsx)("a",{href:"https://dahtah.github.io/imager/canny.html",target:"_blank",children:"a blog post by Simon Barthelm\xe9 about canny edge detection in R"}),".",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"We can therefore iteratively grow the strong pixels in the image, outputting new strong pixels wherever there is an overlap with weak pixels, until all desired weak pixels have been changed to strong pixels. This closely resembles a fixed-point iteration. In this implementation, the number of iterations is set by a slider and not determined automatically for two reasons: 1) It is difficult to output when there have been no changes made in a pass of this process as it isn't possible to output a single value from a shader - the same problem as that encountered at the end of ",Object(p.jsx)(s.a,{smooth:!0,to:"#step3end",children:"step 3"}),". And 2) If the number of passes is automatically determined, this might lead to a large performance drop if there are too many passes.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Finally, I also added a pixel threshold variable for this process which determines how much the strong pixels grow, or in other words how close weak pixels have to be to strong pixels to be converted. This allows for a little better control of the output for this step."]}),Object(p.jsx)("br",{}),Object(p.jsx)(c.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(p.jsx)("h1",{id:"cleanup",className:"raleway-title",children:"Final clean-up"}),Object(p.jsx)("p",{children:"Finally, any remaining weak edges are removed from the image, and we are left with the finished edge detection image!"})]})]})})}},86:function(e,t,i){"use strict";var s=i(0),a=Object(s.createContext)({});t.a=a}}]);
//# sourceMappingURL=11.5f755b2d.chunk.js.map