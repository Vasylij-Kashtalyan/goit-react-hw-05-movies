"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[440],{440:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(152),r={wrapper:"MovieDetailsPage_wrapper__WZrq1",picture:"MovieDetailsPage_picture__1EZkg",title:"MovieDetailsPage_title__Eofgb",list:"MovieDetailsPage_list__Q6fI+",item:"MovieDetailsPage_item__TnEQX",link:"MovieDetailsPage_link__kQ+xX"},c=n(791),a=n(635),s=n(504),o=n(871),l=n(184);function u(){var e,t,n=(0,o.UO)().movieId,u=(0,c.useState)(null),d=(0,i.Z)(u,2),h=d[0],m=d[1],v=(0,o.TH)(),f=(0,o.s0)();(0,c.useEffect)((function(){(0,a.Eq)(n).then((function(e){m(e)}))}),[n]);return(0,l.jsxs)(l.Fragment,{children:[h&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:function(){var e;if(null!==v&&void 0!==v&&null!==(e=v.state)&&void 0!==e&&e.from){var t,n=null===v||void 0===v||null===(t=v.state)||void 0===t?void 0:t.from,i=n.pathname,r=n.search;return f("".concat(i).concat(r))}return f("/")},className:r.btn,children:"Go Back"}),(0,l.jsxs)("div",{className:r.wrapper,children:[(0,l.jsx)("img",{className:r.picture,src:"https://image.tmdb.org/t/p/original".concat(h.poster_path),alt:""}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("h2",{className:r.title,children:"".concat(h.title)}),(0,l.jsxs)("li",{className:r.item,children:[(0,l.jsx)("h3",{children:"Vote / Votes"}),(0,l.jsx)("p",{children:h.vote_average})]}),(0,l.jsxs)("li",{className:r.item,children:[(0,l.jsx)("h3",{children:"Release date"}),(0,l.jsx)("p",{children:h.release_date})]}),(0,l.jsxs)("li",{className:r.item,children:[(0,l.jsx)("h3",{children:"About"}),(0,l.jsx)("p",{children:h.overview})]}),(0,l.jsxs)("li",{className:r.item,children:[(0,l.jsx)("h3",{children:"Genre"}),(0,l.jsx)("p",{children:h.genres.map((function(e){return e.name})).join(", ")})]})]})]})]}),(0,l.jsxs)("ul",{className:r.list,children:[(0,l.jsx)("li",{className:r.item,children:(0,l.jsx)(s.rU,{className:r.link,to:"cast",state:{from:null===v||void 0===v||null===(e=v.state)||void 0===e?void 0:e.from},children:"Cast"})}),(0,l.jsx)("li",{className:r.item,children:(0,l.jsx)(s.rU,{className:r.link,to:"reviews",state:{from:null===v||void 0===v||null===(t=v.state)||void 0===t?void 0:t.from},children:"Reviews"})})]}),(0,l.jsx)(o.j3,{})]})}},635:function(e,t,n){n.d(t,{$c:function(){return d},Bt:function(){return v},Eq:function(){return h},YJ:function(){return u},iR:function(){return m}});var i=n(861),r=n(757),c=n.n(r),a="https://api.themoviedb.org/3/",s="dcf3bb54120e2f9c59dbcbb87469478c";function o(){return l.apply(this,arguments)}function l(){return l=(0,i.Z)(c().mark((function e(){var t,n,i,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,n);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return o("".concat(a,"trending/movies/day?api_key=").concat(s))}function d(e){return o("".concat(a,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e))}function h(e){return o("".concat(a,"/movie/").concat(e,"?api_key=").concat(s))}function m(e){return o("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(s))}function v(e){return o("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(s))}}}]);
//# sourceMappingURL=440.980f8e5f.chunk.js.map