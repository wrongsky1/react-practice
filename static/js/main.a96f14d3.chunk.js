(this.webpackJsonpreact_project=this.webpackJsonpreact_project||[]).push([[0],{21:function(e,t,n){e.exports={myModal:"MyModal_myModal__2tyRE",myModalContent:"MyModal_myModalContent__1pOza",active:"MyModal_active__1l3mE"}},26:function(e,t,n){},36:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__1rqi-"}},38:function(e,t,n){e.exports={myInput:"MyInput_myInput__1bS5J"}},41:function(e,t,n){e.exports={loader:"Loader_loader__1MjUl",rotate:"Loader_rotate__3fyxQ"}},75:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),s=n.n(a),o=n(4),i=n(14),u=(n(26),n(7)),j=n(35),l=n(36),b=n.n(l),d=n(1),p=["children"];var O=function(e){var t=e.children,n=Object(j.a)(e,p);return Object(d.jsx)("button",Object(u.a)(Object(u.a)({},n),{},{className:b.a.myBtn,children:t}))},h=Object(c.createContext)(null);var f=function(){var e=Object(c.useContext)(h),t=(e.isAuth,e.setIsAuth);return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)(O,{onClick:function(){t(!1),localStorage.removeItem("auth")},children:"\u0412\u044b\u0439\u0442\u0438"}),Object(d.jsxs)("div",{className:"navbar__links",children:[Object(d.jsx)(i.b,{to:"/about",children:"\u041e \u0441\u0430\u0439\u0442\u0435"}),Object(d.jsx)(i.b,{to:"/posts",children:"\u041f\u043e\u0441\u0442\u044b"})]})]})},x=n(3);var v=function(){return Object(d.jsx)("h2",{className:"about",children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a/\u043f\u043e\u0441\u0442\u043e\u0432. \u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e React, hooks, context, routing, pagination"})},m=n(38),y=n.n(m),g=r.a.forwardRef((function(e,t){return Object(d.jsx)("input",Object(u.a)({ref:t,className:y.a.myInput},e))}));var _=function(){var e=Object(c.useContext)(h),t=(e.isAuth,e.setIsAuth);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(!0),localStorage.setItem("auth","true")},children:[Object(d.jsx)(g,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}),Object(d.jsx)(g,{type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)(O,{children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},C=n(6),k=n.n(C),w=n(12),I=n(39),S=n(40),M=n(20),N=n.n(M),A=function(){function e(){Object(I.a)(this,e)}return Object(S.a)(e,null,[{key:"getAll",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,c,r=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,N.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/posts/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentsByPostId",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=n(41),P=n.n(B);var E=function(){return Object(d.jsx)("div",{className:P.a.loader})},L=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],j=i[1];return[function(){var t=Object(w.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),j(t.t0.message);case 9:return t.prev=9,a(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}(),r,u]};var q=function(){var e=Object(x.h)(),t=Object(c.useState)({}),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),u=i[0],j=i[1],l=L(Object(w.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getById(e.id);case 2:n=t.sent,a(n.data);case 4:case"end":return t.stop()}}),t)})))),b=Object(o.a)(l,3),p=b[0],O=b[1],h=(b[2],L(Object(w.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getCommentsByPostId(e.id);case 2:n=t.sent,j(n.data);case 4:case"end":return t.stop()}}),t)}))))),f=Object(o.a)(h,3),v=f[0],m=f[1];return f[2],Object(c.useEffect)((function(){p(e.id),v(e.id)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["\u0412\u044b \u043e\u0442\u043a\u0440\u044b\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u0441\u0442\u0430 \u0441 ID = ",e.id]}),O?Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(d.jsx)(E,{})}):Object(d.jsxs)("div",{children:[r.id,". ",r.title]}),Object(d.jsx)("h3",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),m?Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(d.jsx)(E,{})}):Object(d.jsx)("div",{children:u.map((function(e){return Object(d.jsxs)("div",{style:{marginTop:15},children:[Object(d.jsx)("h5",{children:e.email}),Object(d.jsx)("div",{children:e.body})]},e.id)}))})]})},R=n(17);var T=function(e){var t=e.options,n=e.defaultValue,c=e.value,r=e.onChange;return Object(d.jsxs)("select",{value:c,onChange:function(e){return r(e.target.value)},children:[Object(d.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.name},e.value)}))]})};var V=function(e){var t=e.filter,n=e.setFilter;return Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)(g,{value:t.query,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{query:e.target.value}))},placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),Object(d.jsx)(T,{value:t.sort,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{sort:e}))},defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e",options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}]})]})};var D=function(e){var t=e.create,n=Object(c.useState)({title:"",body:""}),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(d.jsxs)("form",{children:[Object(d.jsx)(g,{value:a.title,onChange:function(e){return s(Object(u.a)(Object(u.a)({},a),{},{title:e.target.value}))},type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(d.jsx)(g,{value:a.body,onChange:function(e){return s(Object(u.a)(Object(u.a)({},a),{},{body:e.target.value}))},type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"}),Object(d.jsx)(O,{onClick:function(e){e.preventDefault();var n=Object(u.a)(Object(u.a)({},a),{},{id:Date.now()});t(n),s({title:"",body:""})},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})};var J=function(e){var t=Object(x.g)();return Object(d.jsxs)("div",{className:"post",children:[Object(d.jsxs)("div",{className:"post__content",children:[Object(d.jsxs)("strong",{children:[e.post.id," ",e.post.title]}),Object(d.jsx)("div",{className:"",children:e.post.body})]}),Object(d.jsxs)("div",{className:"post__buttons",children:[Object(d.jsx)(O,{onClick:function(){return t.push("/posts/".concat(e.post.id))},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"}),Object(d.jsx)(O,{onClick:function(){return e.remove(e.post)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})},F=n(78),z=n(77);var Q=function(e){var t=e.posts,n=e.title,c=e.remove;return t.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{style:{textAlign:"center"},children:n}),Object(d.jsx)(F.a,{children:t.map((function(e,t){return Object(d.jsx)(z.a,{timeout:500,classNames:"post",children:Object(d.jsx)(J,{remove:c,number:t+1,post:e})},e.id)}))})]}):Object(d.jsx)("h2",{style:{textAlign:"center"},className:"",children:"\u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})},U=n(21),$=n.n(U);var G=function(e){var t=e.children,n=e.visible,c=e.setVisible,r=[$.a.myModal];return n&&r.push($.a.active),Object(d.jsx)("div",{className:r.join(" "),onClick:function(){return c(!1)},children:Object(d.jsx)("div",{className:$.a.myModalContent,onClick:function(e){return e.stopPropagation()},children:t})})},H=function(e,t,n){var r=function(e,t){return Object(c.useMemo)((function(){return console.log("\u043e\u0442\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"),t?Object(R.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))}),[n,r])},K=function(e,t){return Math.ceil(e/t)};var W=function(e){var t=e.totalPages,n=e.page,c=e.changePage,r=function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t);return Object(d.jsx)("div",{className:"page__wrapper",children:r.map((function(e){return Object(d.jsx)("span",{onClick:function(){return c(e)},className:n===e?"page page__current":"page",children:e},e)}))})};var X=[{path:"/about",component:v,exact:!0},{path:"/posts",component:function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({sort:"",query:""}),s=Object(o.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)(!1),l=Object(o.a)(j,2),b=l[0],p=l[1],h=Object(c.useState)(0),f=Object(o.a)(h,2),x=f[0],v=f[1],m=Object(c.useState)(10),y=Object(o.a)(m,2),g=y[0],_=y[1],C=Object(c.useState)(1),I=Object(o.a)(C,2),S=I[0],M=I[1],N=H(n,i.sort,i.query),B=Object(c.useRef)(),P=L(Object(w.a)(k.a.mark((function e(){var t,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getAll(g,S);case 2:t=e.sent,r([].concat(Object(R.a)(n),Object(R.a)(t.data))),c=t.headers["x-total-count"],v(K(c,g));case 6:case"end":return e.stop()}}),e)})))),q=Object(o.a)(P,3),J=q[0],F=q[1],z=q[2];return function(e,t,n,r){var a=Object(c.useRef)();Object(c.useEffect)((function(){n||(a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e,n){e[0].isIntersecting&&t&&r()})),a.current.observe(e.current))}),[n])}(B,S<x,F,(function(){M(S+1)})),Object(c.useEffect)((function(){J(g,S)}),[S,g]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{style:{marginTop:30},onClick:function(){return p(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(d.jsx)(G,{visible:b,setVisible:p,children:Object(d.jsx)(D,{create:function(e){r([].concat(Object(R.a)(n),[e])),p(!1)}})}),Object(d.jsx)("hr",{style:{margin:"15px 0"}}),Object(d.jsx)(V,{filter:i,setFilter:u}),Object(d.jsx)(T,{value:g,onChange:function(e){return _(e)},defaultValue:"\u041a\u043e\u043b-\u0432\u043e \u044d\u0434\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",options:[{value:5,name:"5"},{value:10,name:"10"},{value:25,name:"25"},{value:-1,name:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"}]}),z&&Object(d.jsxs)("h1",{children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 $",z]}),Object(d.jsx)(Q,{remove:function(e){r(n.filter((function(t){return t.id!==e.id})))},posts:N,title:"\u041f\u043e\u0441\u0442\u044b \u043f\u0440\u043e JS"}),Object(d.jsx)("div",{ref:B,style:{height:20,background:"red"}}),F&&Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(d.jsx)(E,{})}),Object(d.jsx)(W,{page:S,changePage:function(e){M(e)},totalPages:x})]})},exact:!0},{path:"/posts/:id",component:q,exact:!0}],Y=[{path:"/login",component:_,exact:!0}];var Z=function(){var e=Object(c.useContext)(h),t=e.isAuth;return e.setIsAuth,e.isLoading?Object(d.jsx)(E,{}):t?Object(d.jsxs)(x.d,{children:[X.map((function(e){return Object(d.jsx)(x.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(d.jsx)(x.a,{to:"/posts"})]}):Object(d.jsxs)(x.d,{children:[Y.map((function(e){return Object(d.jsx)(x.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(d.jsx)(x.a,{to:"/login"})]})};var ee=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(o.a)(a,2),u=s[0],j=s[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&r(!0),j(!1)}),[]),Object(d.jsx)(h.Provider,{value:{isAuth:n,setIsAuth:r,isLoading:u},children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(f,{}),Object(d.jsx)(Z,{})]})})};s.a.render(Object(d.jsx)(ee,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.a96f14d3.chunk.js.map