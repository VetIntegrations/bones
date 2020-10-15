(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(150)),s={id:"resource_problem",title:"Inspiration",sidebar_label:"Inspiration"},i={id:"resources/resource_problem",title:"Inspiration",description:"Working with REST-api and redux, using common practice, we always create almost same actions and reducers to send HTTP request to different endpoints. This will lead to problem that our projects will always have lot of duplicated code. For example:",source:"@site/docs/resources/problem.md",permalink:"/bones/docs/resources/resource_problem",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/resources/problem.md",sidebar_label:"Inspiration",sidebar:"resourcesSitebar",next:{title:"installation",permalink:"/bones/docs/resources/resource_instalation"}},c=[{value:"<del>Normal flow</del>",id:"normal-flow",children:[]},{value:"<del>REST GRUD</del>",id:"rest-grud",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Working with REST-api and redux, using common practice, we always create almost same actions and reducers to send HTTP request to different endpoints. This will lead to problem that our projects will always have lot of duplicated code. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// action types\nconst FETCH_USERS_LIST = Symbol('FETCH_USERS_LIST')\nconst FETCH_USER = Symbol('FETCH_USER')\nconst SAVE_USER = Symbol('SAVE_USER')\nconst CREATE_USER = Symbol('CREATE_USER')\n\n// action creators\nfunction fetchUsersList() {\n  return {\n    type: FETCH_USERS_LIST\n  }\n}\n\nfunction fetchUser(id) {\n  return {\n    type: FETCH_USER,\n    payload: id,\n  }\n}\n\nfunction saveUser(id, data) {\n  return {\n    type: SAVE_USER,\n    payload: data,\n    meta: {id}\n  }\n}\n\nfunction createUser(data) {\n  return {\n    type: CREATE_USER,\n    payload: data,\n  }\n}\n\n// reducers\nfunction users(state = {}, action) {\n  switch(action.type) {\n    case FETCH_USERS_LIST:\n      return {...state, isLoading: true}\n    case SAVE_USER:\n      return {...state, ...action.payload, isLoading: false}\n  }\n}\n")),Object(o.b)("p",null,"This example does not contains error handling, loading, caching data, authorization, options, filters ... And basically we always copy paste this code from file to file and rename function names and constants values"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"fetchUsers\nfetchBooks\nfetchGroups\nfetchComputers\nfetchOrders\n...\n")),Object(o.b)("h2",{id:"normal-flow"},Object(o.b)("del",{parentName:"h2"},"Normal flow")),Object(o.b)("p",null,"Normally working with HTTP requests we may need to have next flow:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set loading flag and clear previous errors if exist"),Object(o.b)("li",{parentName:"ol"},"Sent Http request"),Object(o.b)("li",{parentName:"ol"},"Toggle loading flag, save responce (error or data). "),Object(o.b)("li",{parentName:"ol"},"Save some meta data for example query string")),Object(o.b)("h2",{id:"rest-grud"},Object(o.b)("del",{parentName:"h2"},"REST GRUD")),Object(o.b)("p",null,"Resources is redux ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/advanced/middleware"}),"middleware")," that helps you to keep working with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/"}),"redux")," with standard flow for async actions.\nThis module was build using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"}),"REST API")," principles."),Object(o.b)("p",null,"Common REST GRUD:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"endpoint: /api/v1/users/:id?\n\nGET      /api/v1/users/   - get users list\nPOST     /api/v1/users/   - create new user\nGET      /api/v1/users/1  - get user details\nPATCH    /api/v1/users/1  - update user\nPUT      /api/v1/users/1  - recreate user\nDELETE   /api/v1/users/1  - delete user\nOPTIONS  /api/v1/users/   - get metadata\n")),Object(o.b)("p",null,"So in total we have 1 Model ",Object(o.b)("inlineCode",{parentName:"p"},"User")," and 7 possible options to work with this model.\nBased on REST principles we can make universal url ",Object(o.b)("inlineCode",{parentName:"p"},"/api/v1/users/:id?")," to describe all possible flows.\nThis url syntax will be compiled using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/path-to-regex"}),"path-to-regex")," that helps us to have 1 universal url for all possible actions."),Object(o.b)("p",null,"So that now we have univarsal url and we can now use HTTP methods to describe what action do we need."))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);