"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[807],{639:function(e,n,t){t.d(n,{Z:function(){return c}});var r="Loader_loader__jYjgr",a=t(184);var c=function(){return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})}},881:function(e,n,t){t.d(n,{Z:function(){return r.Z}});var r=t(639)},635:function(e,n,t){t.d(n,{$c:function(){return l},Bt:function(){return _},Eq:function(){return m},YJ:function(){return f},iR:function(){return h}});var r=t(861),a=t(757),c=t.n(a),s="https://api.themoviedb.org/3/",o="dcf3bb54120e2f9c59dbcbb87469478c";function i(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function e(){var n,t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function f(){return i("".concat(s,"trending/movies/day?api_key=").concat(o))}function l(e){return i("".concat(s,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e))}function m(e){return i("".concat(s,"/movie/").concat(e,"?api_key=").concat(o))}function h(e){return i("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o))}function _(e){return i("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(o))}},807:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(885),a=t(791),c=t(635),s=t(501),o=t(494),i=t(871),u={home:"ListMovies_home__KGg3s",card:"ListMovies_card__HHSEN"},f=t(184);var l=function(e){var n=e.results,t=(0,i.TH)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:u.home,children:n.map((function(e){var n=e.id,r=e.poster_path,a=e.title;return(0,f.jsxs)("li",{className:u.card,children:[(0,f.jsx)(s.rU,{state:{from:t},to:"".concat(n),children:(0,f.jsx)("img",{className:u.card__img,src:"https://image.tmdb.org/t/p/w200".concat(r),alt:a})}),(0,f.jsx)("div",{className:u.card__information,children:(0,f.jsx)("h2",{className:u.card__name,children:a})})]},n)}))})})},m=t(881),h="MoviesPage_SearchForm__RxX1i",_="MoviesPage_SearchFormButton__f8juM",d="MoviesPage_SearchFormButtonLabel__RgUTm",v="MoviesPage_SearchFormInput__1hBkd",p="MoviesPage_ImSearch__DYBb8";function x(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],i=n[1],u=(0,a.useState)(!1),x=(0,r.Z)(u,2),g=x[0],j=x[1],b=(0,s.lr)(),k=(0,r.Z)(b,2),N=k[0],y=k[1],S=N.get("film")||"";(0,a.useEffect)((function(){S&&(j(!0),(0,c.$c)(S).then((function(e){var n=e.results;i(n)})).finally((function(){j(!1)})))}),[S]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var n=e.target.search.value;if(""===n.trim())return alert("Enter name for search");y({film:n})},children:[(0,f.jsxs)("button",{type:"submit",className:_,children:[(0,f.jsx)(o.Yfv,{className:p}),(0,f.jsx)("span",{className:d,children:"Search"})]}),(0,f.jsx)("input",{className:v,type:"name",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search films"})]}),g&&(0,f.jsx)(m.Z,{}),(0,f.jsx)(l,{results:t})]})}}}]);
//# sourceMappingURL=807.29eb6e96.chunk.js.map