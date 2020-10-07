(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(1),n=r(6),c=(r(0),r(148)),i={id:"cache_reducer",title:"persist reducer",sidebar_label:"persist reducer"},o={id:"cache/cache_reducer",title:"persist reducer",description:"Hight order [redux reducer](https://redux.js.org/basics/reducers) that has only 2 possible [actions](https://redux.js.org/basics/actions)",source:"@site/docs/cache/persistReducer.md",permalink:"/bones/docs/cache/cache_reducer",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/cache/persistReducer.md",sidebar_label:"persist reducer",sidebar:"cacheSitebar",previous:{title:"cache middleware",permalink:"/bones/docs/cache/cache_middleware"}},s=[{value:"<del>Usage</del>",id:"usage",children:[]},{value:"<del>API</del>",id:"api",children:[]},{value:"<del>Actions</del>",id:"actions",children:[{value:"<del>INIT_STORE</del>",id:"init_store",children:[]},{value:"<del>RESET_STORE</del>",id:"reset_store",children:[]}]}],b={rightToc:s};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Hight order ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/reducers"}),"redux reducer")," that has only 2 possible ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/actions"}),"actions")),Object(c.b)("h2",{id:"usage"},Object(c.b)("del",{parentName:"h2"},"Usage")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { persistReducer } from '@cranium/cache'\nimport { composeReducers } from '@cranium/redux-helpers'\nimport { combineReducers } from 'redux'\n    \ncomposeReducers(\n    {},\n    combineReducers({\n      users,\n      casrs,\n    }),\n    persistReducer(JSON.parse(process.env.CACHE_STATE_PERSIST_KEYS)),\n)\n")),Object(c.b)("h2",{id:"api"},Object(c.b)("del",{parentName:"h2"},"API")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"persistReducer(persistKeys)\n")),Object(c.b)("p",null,Object(c.b)("del",{parentName:"p"},"persistKeys")," is an optional Array<String",">",". Than mean that this data should not be deleted after ",Object(c.b)("inlineCode",{parentName:"p"},"RESET_STORE")," action."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You can use ",Object(c.b)("inlineCode",{parentName:"p"},"CACHE_STATE_PERSIST_KEYS")," from .end file"))),Object(c.b)("h2",{id:"actions"},Object(c.b)("del",{parentName:"h2"},"Actions")),Object(c.b)("h3",{id:"init_store"},Object(c.b)("del",{parentName:"h3"},"INIT_STORE")),Object(c.b)("p",null,"This is ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/actions"}),"redux action")," that will be trigerred automatically when redux store will be initialized from cache."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is automatical action you should not be worry to call this action by your own. cacheMiddleware will take care to get data from store on your app initialized state and call this action when data will be retrived. This is common case for React-Native apps where ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/async-storage"}),"AsyncStorage")," has async API"))),Object(c.b)("h3",{id:"reset_store"},Object(c.b)("del",{parentName:"h3"},"RESET_STORE")),Object(c.b)("p",null,"This is ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/actions"}),"redux action")," that will clear all redux store exept ",Object(c.b)("del",{parentName:"p"},"persistKeys"),".\nThis is most common action on logout"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { reset } from '@cranium/cache'\nimport { connect } from 'react-redux'\n\nfunction LogoutButton({ reset }){\n  return (\n    <button onClick={reset}>\n      Logout\n    </button>\n  )\n}\n\nexport default connect(null, { reset })(LogoutButton)\n")))}d.isMDXComponent=!0},148:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),d=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},l=function(e){var t=d(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=d(r),u=a,m=l["".concat(i,".").concat(u)]||l[u]||p[u]||c;return r?n.a.createElement(m,o({ref:t},b,{components:r})):n.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);