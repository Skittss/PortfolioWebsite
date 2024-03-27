"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[323],{7041:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(27565);var a=s(46761),i=s(81976);const r=s.p+"static/media/pipeline.b445e9c26632fd69ee82.png",n=s.p+"static/media/extension_pipeline.f52ac614feb9682a8e78.png",o=s.p+"static/media/general_results_1.1c0b363fe9ad4ce0dbe2.png",l=s.p+"static/media/general_results_2.a5c2c6fd343bdd97758d.png",c=s.p+"static/media/extension_results.2ae23dd233eae100d96c.png";s(73017);var h=s(8249),d=s(1175),p=s(95569),m=s(92026),g=s(27929);const f=()=>(0,g.jsxs)(p.A,{title:d.Meta.title,thumb:d.Meta.teaser,githubURL:"https://github.com/Skittss/object_driven_st",children:[(0,g.jsx)("h1",{id:"overview",className:"raleway-title",children:"Abstract"}),(0,g.jsx)("div",{style:{margin:"0 auto",paddingBottom:"20px",width:"100%"},children:(0,g.jsx)(m.A,{width:"100%",src:i})}),(0,g.jsxs)("p",{children:["Neural Style Transfer (NST) is an active research area within non-photorealistic rendering, allowing a desired artistic style to be replicated from a style exemplar onto a target content image. Though NST imposes no restrictions on the semantic alignment of content-style image pairs, it is often the case that a more aesthetically pleasing image can be produced when the semantics align and are preserved during the transfer.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"In this work, a semantic style transfer (SST) pipeline is proposed which is capable of automatically preserving local features in style images during the transfer process via spatial control, without the need for manual masking. Recent developments in large segmentation models allow the domain of illustrative artwork to be sufficiently well-segmented, automatically, into coarse to semi-fine features: or generally speaking, into the concept of distinct 'objects'. Using such a segmentation of the style image as a base, non-parametric warping can be used to build corresponding semantic segmentations between the content and style images, allowing for spatially guided SST methods to be employed. The pipeline is flexible, allowing any SST method to be used so long as it operates on semantic segmentations."]}),(0,g.jsx)("br",{}),(0,g.jsx)(a.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,g.jsx)("h1",{id:"paper",className:"raleway-title",children:"Paper"}),(0,g.jsxs)("p",{children:["This page is a very brief overview of the whole paper! For more details, please take a look at the ",(0,g.jsx)("a",{target:"_blank",href:"https://github.com/Skittss/object_driven_st",children:"project GitHub repo"})," and the ",(0,g.jsx)("a",{target:"_blank",href:"https://github.com/Skittss/object_driven_st/blob/master/objects%20as%20semantics%20in%20style%20transfer.pdf",children:"full paper"}),"."]}),(0,g.jsx)("br",{}),(0,g.jsx)(a.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,g.jsx)("h1",{id:"brief-method",className:"raleway-title",children:"Brief Method Outline"}),(0,g.jsxs)("p",{children:["In this paper, I introduce a novel pipeline, ODST, for neural style transfer which uses pretrained segmentation models to automatically enforce spatial constraints on the style transfer process. This results in a more accurate style transfer, particularly in cases which require ",(0,g.jsx)("i",{children:"local feature preservation"}),"; i.e. images which are composed of many distinct individual parts which we do not wish to lose after the style transfer. Additionally, the pipeline is fully autonomous, yet allows for user control in the segmentation process if desired (i.e. marking which 'features' should be preserved)."]}),(0,g.jsx)("h2",{id:"ODST",className:"raleway-title",children:"General Case ODST"}),(0,g.jsx)("div",{style:{margin:"0 auto",paddingBottom:"20px",width:"100%",maxWidth:"1080px"},children:(0,g.jsx)(m.A,{width:"100%",src:r})}),(0,g.jsxs)("p",{children:["In a general case, we provide two images just as in regular NST: a content image ",(0,g.jsx)(h.A,{children:"$\\textbf x_C$"}),", and a style exemplar ",(0,g.jsx)(h.A,{children:"$\\textbf x_S$"}),".",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"The style exemplar is first segmented using a pretrained segmentation model. The aim here is to segment out important objects which we wish to preserve. This is inherently a subjective task, so there are therefore no restrictions on the segmentation model used. It is worth nothing, however, that the model used will greatly affect the quality of the result from the pipeline.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"For a general case, it is important we pick a model which has good zero-shot performance on ",(0,g.jsx)("b",{children:"stylised inputs"}),'. In this paper, Meta Research\'s "Segment Anything" is used. It has reasonable zero-shot performance on stylised inputs, and additionally supports prompted segmentation which allows us to deal with the problem of subjective segmentation semi-automatically.',(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"The segmentation of the style exemplar ",(0,g.jsx)(h.A,{children:"$\\textbf m_S$"})," is then passed to a pre-trained warping network, in which the aim is to warp the generated segmentation onto the content image. This effectively generates a spatial correspondence between the style and content images. In other words, we end up with an additional segmentation ",(0,g.jsx)(h.A,{children:"$\\textbf m_C$"})," which describes where we would find local features of the style image if they were superimposed onto the content image.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"Finally, the style and content images ",(0,g.jsx)(h.A,{children:"$(\\textbf x_S, \\textbf x_C)$"})," and their corresponding segmentation masks ",(0,g.jsx)(h.A,{children:"$(\\textbf m_S, \\textbf m_C)$"})," are fed into a spatially guided style transfer network which completes the transfer. In this paper, the follow up to Gaty's original NST paper is used."]}),(0,g.jsx)("br",{}),(0,g.jsx)("h2",{id:"ODST-2",className:"raleway-title",children:"ODST on Headshots"}),(0,g.jsxs)("p",{children:["The works of Arcimboldo were an excellent benchmark for the performance of ODST during development of the pipeline. The composition of local features (e.g. fruits, vegetables and various small objects) is in fact the 'style' of the works. Therefore to properly transfer this style, local features must be transferred accurately.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"General case ODST was able to perform well on a subset of Arcimboldo's works, but highlighted some important shortcomings of the method. These mostly stemmed from the warping network. Reasonably small semantic differences between images could cause a non-sensical warp which would greatly reduce the quality of the resultant style transfer.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"The purpose of this section and extension is to showcase the extensibility of the pipeline. The pipline allows shortcomings to be mostly mitigated by changing out certain stages with domain-specific solutions - recalling that the specific implementation of each stage is not fixed. In this case, headshots were selected as the specific domain to work on, and the warping network was switched."]}),(0,g.jsx)("div",{style:{margin:"0 auto",paddingBottom:"20px",width:"100%",maxWidth:"1080px"},children:(0,g.jsx)(m.A,{width:"100%",src:n})}),(0,g.jsxs)("p",{children:["The above diagram shows how the warping network was switched with a facial landmark detection network. Facial landmarking enables a mesh of a face to be created. Creating meshes for two faces then allows for a piecewise affine transform to be performed between them in place of a warp.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"The key difference here is that we now need two faces to transform between, whereas in the general case we simply directly warp from the style image to the content image. In theory, a facial landmark network could be directly used on the style image itself. However at present, a network which exhibits high performance on complicated stylised domains such as Arcimboldo does not exist.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"Therefore, we can comprimise by making the pipeline one-shot instead of zero-shot. We provide one manually selected image of a face which bears resemblance to the style image, and use this in the affine transform instead.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"With this, we once again have all four required inputs for spatially controlled NST, and can perform the transfer with greater accuracy now thanks to the improved 'warp' for this domain."]}),(0,g.jsx)("br",{}),(0,g.jsx)(a.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),(0,g.jsx)("h1",{id:"results",className:"raleway-title",children:"Results"}),(0,g.jsx)("p",{children:"Here, I present some notable results from the paper, organised as a comparison against recent existing methods. For an in depth analysis, additional results, and full resolution images, please refer to the full paper."}),(0,g.jsx)("br",{}),(0,g.jsx)("h2",{id:"results-general-1",className:"raleway-title",children:"General ODST on Arcimboldo Headshots"}),(0,g.jsx)("div",{style:{margin:"0 auto",paddingBottom:"20px",width:"100%",maxWidth:"1000px"},children:(0,g.jsx)(m.A,{width:"100%",src:o})}),(0,g.jsx)("br",{}),(0,g.jsx)("h2",{id:"results-general-2",className:"raleway-title",children:"General ODST on Non-Portrait Images"}),(0,g.jsx)("div",{style:{margin:"0 auto",paddingBottom:"20px",width:"100%",maxWidth:"1000px"},children:(0,g.jsx)(m.A,{width:"100%",src:l})}),(0,g.jsx)("br",{}),(0,g.jsx)("h2",{id:"results-extension-1",className:"raleway-title",children:"ODST on Arcimboldo Headshots"}),(0,g.jsx)("div",{style:{margin:"0 auto",paddingBottom:"20px",width:"100%",maxWidth:"1000px"},children:(0,g.jsx)(m.A,{width:"100%",src:c})})]})},92026:(e,t,s)=>{s.d(t,{A:()=>r});s(27565);var a=s(45577),i=s(27929);const r=e=>{let{annotation:t,fontSize:s,...r}=e;const n=r.paddingBottom?r.paddingBottom:"20px";return(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)(a.A,{...r}),t?(0,i.jsx)("div",{className:"styled-text",style:{position:"absolute",bottom:0,left:0,backgroundColor:"rgba(21, 25, 31, 0.65)",width:"100%",fontSize:s&&s,textAlign:"center",padding:"10px 5px",paddingBottom:n},children:t}):null]})}},58990:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(27565),i=s(11030),r=s(20477),n=s(58860),o=s(46761),l=s(75342),c=s(85477),h=(s(29780),s(27929));const d=e=>{let{title:t,githubURL:s,projectRoute:d,projectLink:p,thumb:m}=e;const g=(0,i.zy)().pathname;return(0,a.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{marginTop:"-3rem",backgroundImage:"url(".concat(m,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",zIndex:-1}}),(0,h.jsxs)("div",{className:"project-home-wrapper",style:{position:"absolute",width:"100%",top:"101vh",left:"0px",transform:"translate(0, -100%)"},children:[(0,h.jsxs)("header",{className:"home-header",children:[(0,h.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),(0,h.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=s?(0,h.jsx)(n.A,{title:"View on Github",placement:"bottom",children:(0,h.jsx)("a",{href:s,target:"_blank",children:(0,h.jsx)(l.A,{className:"title-icon"})})}):null,void 0!=d?(0,h.jsx)(n.A,{title:"View project",placement:"bottom",children:(0,h.jsx)(r.N_,{to:g+d,children:(0,h.jsx)(c.A,{className:"title-icon"})})}):null,void 0!=p?(0,h.jsx)(n.A,{title:"View project",placement:"bottom",children:(0,h.jsx)("a",{href:p,target:"_blank",children:(0,h.jsx)(c.A,{className:"title-icon"})})}):null]}),(0,h.jsx)(o.A,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]}),(0,h.jsx)("div",{style:{height:"8em"}})]})]})}},95569:(e,t,s)=>{s.d(t,{A:()=>u});var a=s(28370),i=s.n(a),r=s(58990),n=s(65894),o=s(9514),l=s(27565),c=s(27929);const h=e=>{var t=e.filter((e=>{let t=e.nodeName;return"title"!==e.id&&("H1"===t||"H2"===t||"H3"===t)}));let s=-1;var a=t.map((e=>(s++,{key:"contents_".concat(s),href:"#".concat(e.id),title:e.innerHTML,level:parseInt(e.nodeName.slice(-1))}))),i=[],r=[],n=[i];return a.forEach((e=>{var t=r.findIndex((t=>t>=e.level));-1===t?t=r.push(e.level)-1:r.length=t+1,n[t].push(Object.assign({},e,{children:n[t+1]=[]}))})),i},d=e=>{let{title:t}=e;const{nestedHeadings:s}=(()=>{const[e,t]=(0,l.useState)([]);return(0,l.useEffect)((()=>{const e=Array.from(document.querySelectorAll("h1, h2, h3")),s=h(e);t(s)}),[]),{nestedHeadings:e}})(),{navHeight:a}=(()=>{const[e,t]=(0,l.useState)(0);return(0,l.useEffect)((()=>{const e=document.getElementById("main-navbar");console.log(e),t(e.offsetHeight)}),[]),{navHeight:e}})(),[i,r]=(0,l.useState)("85vh");return(0,l.useEffect)((()=>{const e=document.getElementById("toc-breadcrumb");e&&r("calc(100vh - 6rem - ".concat(e.offsetHeight,"px)"))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.A,{id:"toc-breadcrumb",style:{paddingBottom:"14px",position:"sticky"},items:[{title:(0,c.jsx)("a",{href:"#home",children:"Portfolio"})},{title:(0,c.jsx)("a",{href:"#projects",children:"Projects"})},{title:"".concat(t)}]}),(0,c.jsx)(o.A,{style:{maxHeight:i,overflow:"auto"},targetOffset:a,onClick:(e,t)=>{e.preventDefault()},items:s})]})};var p=s(50899),m=s(20791),g=s(39432);const{useBreakpoint:f}=p.Ay,u=e=>{let{title:t,thumb:s,projectLink:a,projectRoute:n,githubURL:o,footer:l,children:h}=e;const p=f();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i(),{children:[(0,c.jsx)(r.A,{title:t,thumb:s,projectRoute:n,projectLink:a,githubURL:o}),(0,c.jsxs)(m.A,{gutter:0,children:[(0,c.jsx)(g.A,{xs:0,lg:5,children:(0,c.jsx)("div",{className:"project-toc-wrapper",children:(0,c.jsx)(d,{title:t})})}),(0,c.jsxs)(g.A,{xs:24,lg:19,children:[(0,c.jsx)("div",{className:"project-content-wrapper",style:{marginRight:p.lg?"17.5vw":"6vw",marginLeft:p.lg?0:"6vw"},children:h}),(0,c.jsx)("div",{className:"project-footer-wrapper",style:{display:"flex",justifyContent:"center",marginTop:"8vh",marginBottom:"5vh",marginRight:p.lg?"17.5vw":"6vw",marginLeft:p.lg?0:"6vw"},children:l?{footer:l}:"\u274b That's all! Thanks for reading. \u274b"})]})]})]})})}},29780:()=>{}}]);
//# sourceMappingURL=323.211b1aad.chunk.js.map