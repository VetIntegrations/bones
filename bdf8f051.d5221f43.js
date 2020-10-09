(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{131:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return i}));var n=t(1),a=(t(0),t(149));const u={id:"queryParams_about",title:"queryParams",sidebar_label:"About"},c={id:"queryParams/queryParams_about",title:"queryParams",description:"This is module that will create query string from Object and Object from query string.",source:"@site/docs/queryParams/about.md",permalink:"/bones/docs/queryParams/queryParams_about",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/queryParams/about.md",sidebar_label:"About",sidebar:"queryParamsSitebar"},o=[{value:"<del>Create new instance</del>",id:"create-new-instance",children:[{value:"<del>buildQueryParams</del>",id:"buildqueryparams",children:[]},{value:"<del>parseQueryParams</del>",id:"parsequeryparams",children:[]}]}],s={rightToc:o};function i({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is module that will create query string from Object and Object from query string."),Object(a.b)("h2",{id:"create-new-instance"},Object(a.b)("del",{parentName:"h2"},"Create new instance")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { QueryParams } from '@cranium/queryParams'\nconst QS = new QueryParams()\n")),Object(a.b)("p",null,"Inctance of QueryParams will return Object with 2 methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"parseQueryParams"),Object(a.b)("li",{parentName:"ul"},"buildQueryParams")),Object(a.b)("h3",{id:"buildqueryparams"},Object(a.b)("del",{parentName:"h3"},"buildQueryParams")),Object(a.b)("p",null,"Function that takes Object as an argument and returns query string. Support nesting objects and arrays."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { QueryParams } from '@cranium/queryParams'\nconst QS = new QueryParams()\nQS.buildQueryParams({\n  age: 12,\n  user: 'benjamin_button'\n}) => `?age=12&user=benjamin_button`\n")),Object(a.b)("h3",{id:"parsequeryparams"},Object(a.b)("del",{parentName:"h3"},"parseQueryParams")),Object(a.b)("p",null,"Function that takes query string as an argument and returns Object. Support nesting objects and arrays."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { QueryParams } from '@cranium/queryParams'\nconst QS = new QueryParams()\nQS.parseQueryParams('?age=12&user=benjamin_button`')\n/*\nreturns\n  {\n    age: '12',\n    user: 'benjamin_button'\n  }\n*/\n")))}i.isMDXComponent=!0},149:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var r=a.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o({},r,{},e)),t},b=function(e){var r=l(e.components);return a.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(t),p=n,d=b["".concat(c,".").concat(p)]||b[p]||m[p]||u;return t?a.a.createElement(d,o({ref:r},i,{components:t})):a.a.createElement(d,o({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,c=new Array(u);c[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<u;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);