(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[17],{208:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(97),u=n(4),o=a.a.lazy((function(){return n.e(15).then(n.bind(null,180))})),p=a.a.lazy((function(){return n.e(16).then(n.bind(null,112))})),i=a.a.lazy((function(){return n.e(14).then(n.bind(null,113))})),l=[{path:"/",component:a.a.lazy((function(){return Promise.all([n.e(0),n.e(10),n.e(9)]).then(n.bind(null,202))})),exact:!0},{path:"/Webgl-Canny",component:p,exact:!1},{path:"/tetnet",component:o,exact:!1},{path:"/FourierSketcher",component:i,exact:!1}];t.default=function(e){var t=e.routerDepth;return Object(u.jsx)(c.a,{routes:l,routerDepth:t})}},97:function(e,t,n){"use strict";var r=n(31),a=n(0),c=n(3),u=n(35),o=n(4);t.a=function(e){var t=e.routes,n=e.routerDepth,p=function(e){for(var t=Object(c.g)().pathname,n=0,r=0;r<e;r++)n=t.indexOf("/",n+1);return n=n<0?t.length:n,t.substring(0,n)}(n);return Object(o.jsx)(a.Suspense,{fallback:Object(u.b)(),children:Object(o.jsx)(c.d,{children:t.map((function(e){return console.log("generated route: ",p+e.path),e.component?Object(o.jsx)(c.b,{path:p+e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(e.component,Object(r.a)(Object(r.a)({},t),{},{routerDepth:n+1}))}}):null}))})})}}}]);
//# sourceMappingURL=17.7698fbc0.chunk.js.map