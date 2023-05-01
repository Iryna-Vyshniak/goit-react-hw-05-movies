"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{9914:function(n,e,t){t.d(e,{Z:function(){return j}});var r,a,i,o,c,s,u,p,f=t(5551),h=t(168),l=t(7691),d=l.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 32px;\n  margin: 1vh auto;\n"]))),v=l.ZP.p(a||(a=(0,h.Z)(["\n  max-width: 80%;\n  color: ",";\n  text-shadow: ",";\n\n  text-align: center;\n  \n  font-family: ","\n  font-size: ","\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.shadows.textShadow}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.s})),g=l.ZP.img(i||(i=(0,h.Z)(["\n  width: 50vw;\n  height: auto;\n  object-fit: contain;\n  object-position: center;\n  margin: 0 auto;\n"]))),m=(l.ZP.div(o||(o=(0,h.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  flex: 1 0 auto;\n\n  img {\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: top;\n  }\n"]))),l.ZP.div(c||(c=(0,h.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background: ",";\n"])),(function(n){return n.theme.gradientBlock}))),x=l.ZP.div(s||(s=(0,h.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 45vw;\n\n  background: ",";\n"])),(function(n){return n.theme.gradientHeroBanner})),w=l.ZP.div(u||(u=(0,h.Z)(["\n  position: relative;\n  margin-top: -30px;\n  margin-bottom: 30px;\n"]))),Z=l.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=t(184);function j(n){var e=n.message;return(0,b.jsxs)(d,{role:"alert",children:[(0,b.jsx)(v,{children:e}),(0,b.jsx)(w,{children:(0,b.jsxs)(Z,{children:[(0,b.jsx)(m,{}),(0,b.jsx)(g,{src:f,alt:"Actor",width:"240"}),(0,b.jsx)(x,{})]})})]})}},4387:function(n,e,t){t.r(e),t.d(e,{Reviews:function(){return A}});var r,a,i,o,c,s,u,p=t(5861),f=t(9439),h=t(4687),l=t.n(h),d=t(7689),v=t(2791),g=t(9914),m=t(1454),x=t(1192),w=t(367),Z=t(8308),b=t(168),j=t(7691),y=j.ZP.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 26px;\n"]))),k=j.ZP.li(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 12px;\n"]))),P=j.ZP.div(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n"]))),_=j.ZP.div(o||(o=(0,b.Z)(["\n  position: relative;\n"]))),E=j.ZP.img(c||(c=(0,b.Z)(["\n  display: block;\n\n  height: 60px;\n  width: auto;\n\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n\n  object-fit: cover;\n  object-position: center;\n"]))),O=j.ZP.p(s||(s=(0,b.Z)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.colors.accent})),z=j.ZP.p(u||(u=(0,b.Z)(["\n  font-weight: 400;\n"]))),S=t(9230),q=t(184),A=function(n){var e=n.lng,t=(0,d.UO)().movieId,r=(0,v.useState)([]),a=(0,f.Z)(r,2),i=a[0],o=a[1],c=(0,v.useState)(!1),s=(0,f.Z)(c,2),u=s[0],h=s[1],b=(0,v.useState)(!1),j=(0,f.Z)(b,2),A=j[0],B=j[1],C=(0,S.$G)().t;return(0,v.useEffect)((function(){(0,p.Z)(l().mark((function n(){var r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),B(!1),n.next=5,(0,w.q5)(t,e);case 5:r=n.sent,o(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),B("{t('moviesPage.set_error')}");case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))()}),[t,e]),i?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(x.D,{title:C("moviesPage.reviews")}),u&&(0,q.jsx)(m.a,{}),A&&(0,q.jsx)(g.Z,{message:C("moviesPage.mistake")}),i.length>0?(0,q.jsx)(y,{children:i.map((function(n){return(0,q.jsxs)(k,{children:[(0,q.jsxs)(P,{children:[(0,q.jsx)(_,{children:(0,q.jsx)(E,{src:n.avatar_path?"https://image.tmdb.org/t/p/original".concat(n.avatar_path):Z,alt:n.author})}),(0,q.jsxs)(O,{children:[C("moviesPage.author"),n.author]})]}),(0,q.jsx)(z,{children:n.content})]},n.id)}))}):(0,q.jsx)("div",{style:{padding:"26px",textAlign:"center"},children:C("moviesPage.reviews_desription")})]}):(0,q.jsx)("div",{children:C("loading")})}},1192:function(n,e,t){t.d(e,{D:function(){return c}});t(2791);var r,a=t(168),i=t(7691).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: ","px;\n  text-align: center;\n  color: ",";\n  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;\n  font-size: ",";\n  font-family: ",";\n  font-weight: 700;\n\n  @media screen and (min-width: 480px) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.l})),o=t(184),c=function(n){var e=n.title;return(0,o.jsx)(i,{children:e})}},367:function(n,e,t){t.d(e,{MI:function(){return p},Wf:function(){return u},Yq:function(){return g},_L:function(){return c},b0:function(){return d},lK:function(){return v},p9:function(){return l},pp:function(){return s},q5:function(){return h},yo:function(){return f}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8"};var c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,t=c.length>1?c[1]:void 0,n.prev=2,n.next=5,o.Z.get("/trending/movie/day",{params:{page:e,language:t}});case 5:return r=n.sent,a=r.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error("Oops, there is no movies");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/top_rated",{params:{language:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,c,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,r=s.length>2?s[2]:void 0,n.prev=2,n.next=5,o.Z.get("/search/movie",{params:{query:e,page:t,include_adult:!1,language:r}});case 5:return a=n.sent,c=a.data,n.abrupt("return",c);case 10:throw n.prev=10,n.t0=n.catch(2),new Error("Oops, there is no movie with that name");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews"),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/videos"),{params:{id:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie`s videos");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("genre/movie/list",{params:{language:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.genres);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/discover/movie?with_genres=".concat(e,"&sort_by=popularity.desc&include_adult=false&page=1&language=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("person/popular",{params:{language:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},8308:function(n,e,t){n.exports=t.p+"static/media/avatar.0affc1eeb2b145c80bd1.png"},5551:function(n,e,t){n.exports=t.p+"static/media/error.441a537cb4cb558224b8.png"}}]);
//# sourceMappingURL=387.29b6752f.chunk.js.map