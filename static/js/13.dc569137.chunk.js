(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[13],{105:function(e,t,c){},109:function(e,t,c){"use strict";var i=c(0),r=c(5),n=c(43),a=c(166),s=c(217),o=c(264),l=c(265),j=(c(105),c(7));t.a=function(e){var t=e.title,c=e.githubURL,d=e.projectRoute,b=e.projectLink,h=e.thumb,u=Object(r.h)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{marginTop:"-3rem",backgroundImage:"url(".concat(h,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",zIndex:-1}}),Object(j.jsxs)("div",{className:"project-home-wrapper",style:{position:"absolute",width:"100%",top:"101vh",left:"0px",transform:"translate(0, -100%)"},children:[Object(j.jsxs)("header",{className:"home-header",children:[Object(j.jsx)("h1",{id:"title",style:{display:"inline-block"},children:t}),Object(j.jsxs)("span",{style:{padding:"0 1em",display:"inline-block"},children:[void 0!=c?Object(j.jsx)(a.a,{title:"View on Github",placement:"bottom",children:Object(j.jsx)("a",{href:c,target:"_blank",children:Object(j.jsx)(o.a,{className:"title-icon"})})}):null,void 0!=d?Object(j.jsx)(a.a,{title:"View project",placement:"bottom",children:Object(j.jsx)(n.b,{to:u+d,children:Object(j.jsx)(l.a,{className:"title-icon"})})}):null,void 0!=b?Object(j.jsx)(a.a,{title:"View project",placement:"bottom",children:Object(j.jsx)("a",{href:b,target:"_blank",children:Object(j.jsx)(l.a,{className:"title-icon"})})}):null]}),Object(j.jsx)(s.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}})]}),Object(j.jsx)("div",{style:{height:"8em"}})]})]})}},110:function(e,t,c){"use strict";var i=c(106),r=c.n(i),n=c(109),a=c(18),s=c(262),o=c(261),l=c(0),j=c(7),d=function(e){var t=e.filter((function(e){var t=e.nodeName;return"title"!==e.id&&("H1"===t||"H2"===t||"H3"===t)})),c=-1,i=t.map((function(e){return c++,{key:"contents_".concat(c),href:"#".concat(e.id),title:e.innerHTML,level:parseInt(e.nodeName.slice(-1))}})),r=[],n=[],a=[r];return i.forEach((function(e){var t=n.findIndex((function(t){return t>=e.level}));-1===t?t=n.push(e.level)-1:n.length=t+1,a[t].push(Object.assign({},e,{children:a[t+1]=[]}))})),r},b=function(e){var t=e.title,c=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.useEffect)((function(){var e=Array.from(document.querySelectorAll("h1, h2, h3")),t=d(e);i(t)}),[]),{nestedHeadings:c}}().nestedHeadings,i=function(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.useEffect)((function(){var e=document.getElementById("main-navbar");console.log(e),i(e.offsetHeight)}),[]),{navHeight:c}}().navHeight,r=Object(l.useState)("85vh"),n=Object(a.a)(r,2),b=n[0],h=n[1];return Object(l.useEffect)((function(){var e=document.getElementById("toc-breadcrumb");e&&h("calc(100vh - 6rem - ".concat(e.offsetHeight,"px)"))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{id:"toc-breadcrumb",style:{paddingBottom:"14px",position:"sticky"},items:[{title:Object(j.jsx)("a",{href:"#home",children:"Portfolio"})},{title:Object(j.jsx)("a",{href:"#projects",children:"Projects"})},{title:"".concat(t)}]}),Object(j.jsx)(o.a,{style:{maxHeight:b,overflow:"auto"},targetOffset:i,onClick:function(e,t){e.preventDefault()},items:c})]})},h=c(145),u=c(254),p=c(255),f=h.a.useBreakpoint;t.a=function(e){var t=e.title,c=e.thumb,i=e.projectLink,a=e.projectRoute,s=e.githubURL,o=e.footer,l=e.children,d=f();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(n.a,{title:t,thumb:c,projectRoute:a,projectLink:i,githubURL:s}),Object(j.jsxs)(u.a,{gutter:0,children:[Object(j.jsx)(p.a,{xs:0,lg:5,children:Object(j.jsx)("div",{className:"project-toc-wrapper",children:Object(j.jsx)(b,{title:t})})}),Object(j.jsxs)(p.a,{xs:24,lg:19,children:[Object(j.jsx)("div",{className:"project-content-wrapper",style:{marginRight:d.lg?"17.5vw":"6vw",marginLeft:d.lg?0:"6vw"},children:l}),Object(j.jsx)("div",{className:"project-footer-wrapper",style:{display:"flex",justifyContent:"center",marginTop:"8vh",marginBottom:"5vh",marginRight:d.lg?"17.5vw":"6vw",marginLeft:d.lg?0:"6vw"},children:o?{footer:o}:"\u274b That's all! Thanks for reading. \u274b"})]})]})]})})}},137:function(e,t,c){"use strict";t.a=c.p+"static/media/waves.014cf107.mp4"},138:function(e,t,c){"use strict";t.a=c.p+"static/media/sines.9909c1c6.png"},139:function(e,t,c){"use strict";t.a=c.p+"static/media/hkt.f5629c70.png"},140:function(e,t,c){"use strict";t.a=c.p+"static/media/butterfly.364e84a8.png"},141:function(e,t,c){"use strict";t.a=c.p+"static/media/normals.eb859e83.png"},201:function(e,t,c){"use strict";c.r(t);c(0);var i=c(217),r=(c(137),c(138),c(139),c(140),c(141),c(129),c(130),c(144)),n=c(110),a=c(7);t.default=function(){return Object(a.jsxs)(n.a,{title:r.a.title,thumb:r.a.teaser,children:[Object(a.jsx)("h1",{id:"overview",className:"raleway-title",children:"Overview"}),Object(a.jsx)("p",{children:"This project was written for my final year dissertation at The University of Bath. Writing of this section is in progress, and will be delayed until my graduation."}),Object(a.jsx)("br",{}),Object(a.jsx)(i.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(a.jsx)("h1",{id:"paper",className:"raleway-title",children:"Paper"}),Object(a.jsx)("br",{}),Object(a.jsx)(i.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(a.jsx)("h1",{id:"brief-method",className:"raleway-title",children:"Brief Method Explanation"}),Object(a.jsx)("br",{}),Object(a.jsx)(i.a,{style:{borderTopWidth:"1px",borderTopColor:"#000000",opacity:.5}}),Object(a.jsx)("h1",{id:"results",className:"raleway-title",children:"Results"})]})}}}]);
//# sourceMappingURL=13.dc569137.chunk.js.map