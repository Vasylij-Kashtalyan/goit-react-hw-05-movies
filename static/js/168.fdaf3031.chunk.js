"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{639:function(n,t,e){e.d(t,{Z:function(){return i}});var r="Loader_loader__jYjgr",c=e(184);var i=function(){return(0,c.jsxs)("div",{className:r,children:[(0,c.jsx)("span",{}),(0,c.jsx)("span",{}),(0,c.jsx)("span",{})]})}},881:function(n,t,e){e.d(t,{Z:function(){return r.Z}});var r=e(639)},168:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(152),c=e(871),i=e(791),o=e(635),a={},u=e(881),s=e(184);function f(){var n=(0,c.UO)().movieId,t=(0,i.useState)(null),e=(0,r.Z)(t,2),f=e[0],d=e[1],h=(0,i.useState)(!1),v=(0,r.Z)(h,2),l=v[0],p=v[1];return(0,i.useEffect)((function(){p(!0),(0,o.Bt)(n).then((function(n){var t=n.results;d(t),p(!1)}))}),[n]),(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)(u.Z,{}),f&&f.length>0?(0,s.jsx)("ul",{children:f.map((function(n){var t=n.content,e=n.id;return(0,s.jsxs)("li",{className:a.item,children:[(0,s.jsx)("h2",{children:"Content"}),(0,s.jsx)("p",{children:t})]},e)}))}):(0,s.jsx)("p",{children:"We don't have any Reviews for this movie"})]})}},635:function(n,t,e){e.d(t,{$c:function(){return d},Bt:function(){return l},Eq:function(){return h},YJ:function(){return f},iR:function(){return v}});var r=e(861),c=e(757),i=e.n(c),o="https://api.themoviedb.org/3/",a="dcf3bb54120e2f9c59dbcbb87469478c";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"trending/movies/day?api_key=").concat(a))}function d(n){return u("".concat(o,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(n))}function h(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(a))}function v(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a))}function l(n){return u("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(a))}}}]);
//# sourceMappingURL=168.fdaf3031.chunk.js.map