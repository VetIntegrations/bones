(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(0),r(156)),i={id:"router_with_router",title:"withRouter",sidebar_label:"withRouter"},c={id:"router/router_with_router",title:"withRouter",description:"You can get access to the history object\u2019s properties and the closest Route's match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders. Core value is that ~~withRouter~~ will use names instaed of url to handle history actions",source:"@site/docs/router/with-router.md",permalink:"/bones/docs/router/router_with_router",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/router/with-router.md",sidebar_label:"withRouter",sidebar:"router",previous:{title:"Components",permalink:"/bones/docs/router/router_components"},next:{title:"RouterConfig",permalink:"/bones/docs/router/router_config"}},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can get access to the history object\u2019s properties and the closest Route's match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders. Core value is that ",Object(a.b)("del",{parentName:"p"},"withRouter")," will use names instaed of url to handle history actions"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { withRouter } from "@cranium/router"\n\nfunction ShowTheLocation({ location, match, history }){\n  return (\n    <div>\n      You are now at {location.pathname}\n      <button onClick={()=>history.push("dashboard")}>open dashboard</button>\n      <button onClick={()=>history.push("users", {name: "Test"})}>user Test</button>\n      <button onClick={()=>history.push("users", {search: "?name=test"})}>open filters</button> \n      <button onClick={()=>history.push("users", {search: { name: \'test\' }})}>open filters</button>    \n    </div>\n  )\n}\n')))}p.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||h[d]||a;return r?o.a.createElement(b,c({ref:t},s,{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);