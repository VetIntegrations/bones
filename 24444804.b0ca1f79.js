(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),c=(n(0),n(149));const r={id:"skeleton_access",title:"Access levels",sidebar_label:"Access levels"},s={id:"skeleton/skeleton_access",title:"Access levels",description:"In most cases you will have access levels in what ever React app. To handle access levels you can use build in access module.",source:"@site/docs/skeleton/checkAcess.md",permalink:"/bones/docs/skeleton/skeleton_access",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/skeleton/checkAcess.md",sidebar_label:"Access levels"},l=[{value:"<del>CheckAccess</del>",id:"checkaccess",children:[]},{value:"<del>Page level access</del>",id:"page-level-access",children:[]},{value:"<del>Define new access level</del>",id:"define-new-access-level",children:[]}],o={rightToc:l};function b({components:e,...t}){return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In most cases you will have access levels in what ever React app. To handle access levels you can use build in access module.\nCode for this module you can find in ",Object(c.b)("inlineCode",{parentName:"p"},"common/session")," folder."),Object(c.b)("h2",{id:"checkaccess"},Object(c.b)("del",{parentName:"h2"},"CheckAccess")),Object(c.b)("p",null,"React component for condition rendering"),Object(c.b)("p",null,"Props: "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"access"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Integer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Acess Level")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fallback"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React Element"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React Componet to render if condition is ",Object(c.b)("inlineCode",{parentName:"td"},"false"))))),Object(c.b)("p",null,"Usage:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { access, CheckAccess } from 'common/session'\n\nfunction ConditionalElement(){\n  return (\n    <CheckAccess access={access.F_PROTECTED}>\n      <UserLogo/>\n    </CheckAccess>\n  )\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { access, CheckAccess } from 'common/session'\n\nfunction ConditionalElement(){\n  return (\n    <CheckAccess \n      access={access.F_PROTECTED}\n      fallback={<DefaultAvatar />}\n    >\n      <UserLogo/>\n    </CheckAccess>\n  )\n}\n")),Object(c.b)("h2",{id:"page-level-access"},Object(c.b)("del",{parentName:"h2"},"Page level access")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/skeleton/skeleton_routing"}),"RouteRecursive")," also uses CheckAccess to set up page level access level you can use a pair of configs ",Object(c.b)("inlineCode",{parentName:"p"},"access")," and ",Object(c.b)("inlineCode",{parentName:"p"},"accessRedirectTo")),Object(c.b)("p",null,"Usage:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"[\n  {\n    path: '/auth',\n    routes: auth,\n    access: access.F_UNAUTHORISED,\n    accessRedirectTo: '/dashboard',\n  },\n  {\n    path: '/dashboard',\n    routes: dashboard,\n    access: access.F_PROTECTED,\n    accessRedirectTo: '/auth',\n    name: 'dashboard',\n  },\n]\n")),Object(c.b)("p",null,"This is common example of authorisation flow, when if user is already loged-in he does not have permissions to visit login page, so that he will be redirected to ",Object(c.b)("inlineCode",{parentName:"p"},"/dashboard"),". And vice versa, not authorised user does not has permissions to your application."),Object(c.b)("h2",{id:"define-new-access-level"},Object(c.b)("del",{parentName:"h2"},"Define new access level")),Object(c.b)("p",null,"By default this module has 3 access levels:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"F_PUBLIC"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Public access")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"F_PROTECTED"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authorised user")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"F_UNAUTHORISED"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not authorised user")))),Object(c.b)("p",null,"To define your own access level you can use ",Object(c.b)("inlineCode",{parentName:"p"},"common/session/access.js")," file."),Object(c.b)("p",null,"Steps:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Define new access level")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export const F_ADMIN_USER = 2 ** 3\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Creat selector")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export const userLevelSelector = createSelector(\n  // base permissions\n  (state) => isEmpty(get(state, 'session.data.token')) ? F_UNAUTHORISED : F_PROTECTED,\n  (state) => get(state, 'session.user.role') === 'admin' ? F_ADMIN_USER : 0,\n\n  // collect all user permissions\n  (...args) => args.reduce((level, flag) => level | flag, F_PUBLIC)\n)\n")))}b.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),i=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=i(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,O=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?c.a.createElement(O,l({ref:t},b,{components:n})):c.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var b=2;b<r;b++)s[b]=n[b];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);