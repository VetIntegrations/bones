(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1),r=(a(0),a(149));const c={id:"cache_middleware",title:"cache middleware",sidebar_label:"cache middleware"},o={id:"cache/cache_middleware",title:"cache middleware",description:"Is [redux middlware](https://redux.js.org/advanced/middleware) that will:",source:"@site/docs/cache/cacheMiddleware.md",permalink:"/bones/docs/cache/cache_middleware",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/cache/cacheMiddleware.md",sidebar_label:"cache middleware",sidebar:"cacheSitebar",previous:{title:"cache",permalink:"/bones/docs/cache/cache_about"},next:{title:"persist reducer",permalink:"/bones/docs/cache/cache_reducer"}},i=[{value:"<del>API</del>",id:"api",children:[{value:"<del>storeKey</del>",id:"storekey",children:[]},{value:"<del>cacheKeys</del>",id:"cachekeys",children:[]},{value:"<del>storage</del>",id:"storage",children:[]}]},{value:"<del>create own storage</del>",id:"create-own-storage",children:[]},{value:"<del>CheckCache</del>",id:"checkcache",children:[]}],l={rightToc:i};function s({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/advanced/middleware"}),"redux middlware")," that will:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Initialize redux store from cache on application start up "),Object(r.b)("li",{parentName:"ol"},"cache redux store data")),Object(r.b)("h2",{id:"api"},Object(r.b)("del",{parentName:"h2"},"API")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"cacheMiddleware({\n  storeKey: 'app_name',\n  cacheKeys: ['user'],\n  storage: localStorage,\n})\n")),Object(r.b)("h3",{id:"storekey"},Object(r.b)("del",{parentName:"h3"},"storeKey")),Object(r.b)("p",null,"This is key that could be internally used by storage.\nFor example if you are using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage"),"\nThan it will be ",Object(r.b)("inlineCode",{parentName:"p"},"keyName")," in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem"}),"Storage.setItem")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"process.env.STORAGE_KEY")," from .end file"))),Object(r.b)("h3",{id:"cachekeys"},Object(r.b)("del",{parentName:"h3"},"cacheKeys")),Object(r.b)("p",null,"Is an optional Array<String",">"," where you can define a parts of your Redux store that you want to cache"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"JSON.parse(process.env.CACHE_STATE_KEYS)")," from .end file"))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please do not cache any user sensitive data such as authorization token or biling info to localStorage"))),Object(r.b)("h3",{id:"storage"},Object(r.b)("del",{parentName:"h3"},"storage")),Object(r.b)("p",null,"Object that will cache data. In general you can use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/async-storage"}),"AsyncStorage"),"."),Object(r.b)("h2",{id:"create-own-storage"},Object(r.b)("del",{parentName:"h2"},"create own storage")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class OwnStorage {\n  constructor(){\n    this.store = new Map()\n  }\n  getItem(key){\n    return this.store.get(key)\n  }\n  setItem(key, value){\n    this.store.set(key, value)\n  }\n}\n")),Object(r.b)("h2",{id:"checkcache"},Object(r.b)("del",{parentName:"h2"},"CheckCache")),Object(r.b)("p",null,"React Component that will not render your app while store initializating from cache.  You should wrap your application with this component in root Component"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { CheckCache } from '@cranium/cache'\n\nfunction App({ store, history }) {\n  return (\n    <Provider store={store}>\n      <CheckCache>\n        <Router history={history} routes={routes}/>\n      </CheckCache>\n    </Provider>\n  )\n}\n")))}s.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||c;return a?r.a.createElement(h,i({ref:t},s,{components:a})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);