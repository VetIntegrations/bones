(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(1),r=(n(0),n(149));const c={id:"connect_resources",title:"ConnectResources",sidebar_label:"ConnectResources"},s={id:"resources/connect_resources",title:"ConnectResources",description:"~~ConnectResources~~ is a function that will return [HOC](https://reactjs.org/docs/higher-order-components.html) to pass all necessary props to your React component for async HTTP request.",source:"@site/docs/resources/connectResources.md",permalink:"/bones/docs/resources/connect_resources",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/resources/connectResources.md",sidebar_label:"ConnectResources",sidebar:"resourcesSitebar",previous:{title:"Instalation",permalink:"/bones/docs/resources/resource_instalation"},next:{title:"Custom Resource",permalink:"/bones/docs/resources/resource_customresources"}},o=[{value:"<del>Basic usage</del>",id:"basic-usage",children:[]},{value:"<del>How does it work</del>",id:"how-does-it-work",children:[]},{value:"<del>API</del>",id:"api",children:[{value:"<del>Resource</del>",id:"resource",children:[]},{value:"<del>Several resources</del>",id:"several-resources",children:[]},{value:"<del>Simple syntax</del>",id:"simple-syntax",children:[]}]}],i={rightToc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("del",{parentName:"p"},"ConnectResources")," is a function that will return ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"HOC")," to pass all necessary props to your React component for async HTTP request."),Object(r.b)("h2",{id:"basic-usage"},Object(r.b)("del",{parentName:"h2"},"Basic usage")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { connectResources } from '@cranium/resource'\n\nfunction MyReactComponent({ users }){\n  //using 1 line of code you will have aditions prop users inside your React Component\n  return ...\n}\n\nexport default connectResources('users')(MyReactComponent)\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// users property\n\n// async actions\nusers.fetch           => function to send GET HTTP request\nusers.fetchOptions    => function to send OPTIONS HTTP request\nusers.create          => function to send POST HTTP request\nusers.replace         => function to send PUT HTTP request\nusers.update          => function to send PATCH HTTP request\nusers.remove          => function to send DELETE HTTP request\n\n// sync actions\n\nusers.setData         => function to store data in redux\nusers.setLoading      => function to toggle loading flag and store in redux\nusers.setErrors       => function to store errors in redux\nusers.setFilters      => function to JSON representation of query string\nusers.clear           => function to clear current part of redux store\n\n// meta data\nusers.data            => body from success HTTP request\nusers.isLoading       => boolean flag to determinate async action status\nusers.options         => body from success OPTIONS HTTP request\nusers.errors          => error from HTTP request\nusers.filters         => JSON representation of query string\n\n\n")),Object(r.b)("h2",{id:"how-does-it-work"},Object(r.b)("del",{parentName:"h2"},"How does it work")),Object(r.b)("p",null,"On initial state you will not have any meta data in your React component. "),Object(r.b)("p",null,"Then you may want to retrive a list of users ",Object(r.b)("inlineCode",{parentName:"p"},"GET /users")),Object(r.b)("p",null,"To do that you already have all necessary propperties"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"this.props.users.fetch()\n")),Object(r.b)("p",null,"Calling whatever async actions you will have next working flow:"),Object(r.b)("p",null,"1.1. ",Object(r.b)("del",{parentName:"p"},"Toogle loading"),". Toogle loading indicator to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// component\n\nthis.props.users.isLoading => true\n\n// store\n{\n  users: {\n    isLoading: true\n  }\n}\n")),Object(r.b)("p",null,"1.2. ",Object(r.b)("del",{parentName:"p"},"Clear errors"),". This is common principle that all next API requests should clear errors (*if exist) from previous one. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// component\n\nthis.props.users.errors => undefined\n\n// store\n{\n  users: {\n    errors: undefined\n  }\n}\n")),Object(r.b)("p",null,"1.3 ",Object(r.b)("del",{parentName:"p"},"Save filters"),". If you need to pass query string with your HHTP request, resources will store filters in redux, that could be usefull for example to increment page in infility lists. JSON representation of query string will be next transformed to string with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/queryParams/queryParams_about"}),"queryParams module")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"//how to pass filters\nthis.props.users.fetch({ page: 1 }, { queries: ['page'] })\n\n// component\nthis.props.users.filters => { page: 1 }\n\n// store\n{\n  users: {\n    filters: {\n      page: 1\n    }\n  }\n}\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("del",{parentName:"li"},"Send HHTP request"),". Http request will be handled by ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/frontend-docs/docs/api/api_about"}),"API module"))),Object(r.b)("p",null,"3.1. ",Object(r.b)("del",{parentName:"p"},"Toogle loading"),". Toogle loading indicator to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// component\n\nthis.props.users.isLoading => false\n\n// store\n{\n  users: {\n    isLoading: false\n  }\n}\n")),Object(r.b)("p",null,"3.2 ",Object(r.b)("del",{parentName:"p"},"Save responce"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"success request")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// component\n\nthis.props.users.data => HTTP request body\n\n// store\n{\n  users: {\n    data: {...} //HTTP request body\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"errror ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// component\n\nthis.props.users.errors => HTTP request error\n\n// store\n{\n  users: {\n    errors: {...} //HTTP request error\n  }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"options. in case ",Object(r.b)("inlineCode",{parentName:"li"},"fetchOptions")," ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"// component\n\nthis.props.users.options => HTTP request body\n\n// store\n{\n  users: {\n    options: {...} //HTTP request body\n  }\n}\n")),Object(r.b)("h2",{id:"api"},Object(r.b)("del",{parentName:"h2"},"API")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"connectResource(resources [Resource | Array<Resource>])\n")),Object(r.b)("p",null,Object(r.b)("del",{parentName:"p"},"connectResource")," is a function as acceps ",Object(r.b)("inlineCode",{parentName:"p"},"Resource")," or an array of ",Object(r.b)("inlineCode",{parentName:"p"},"Resource"),"'s as argument and returns HOC, that will pass all props for HTTP request to your React Component."),Object(r.b)("h3",{id:"resource"},Object(r.b)("del",{parentName:"h3"},"Resource")),Object(r.b)("p",null,Object(r.b)("del",{parentName:"p"},"Resource")," is a new type of data to describe API endpoint.\nIn general ",Object(r.b)("del",{parentName:"p"},"Resource")," is an Object with next options:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Date type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"isRequired"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"namespace"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"endpoint"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"forceUpdates"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"queries"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array<String",">"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"reducer"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String","|","Function"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("h4",{id:"namespace"},Object(r.b)("del",{parentName:"h4"},"namespace")),Object(r.b)("p",null,"This is the main option and only 1 required.\nBy defining this option u will set up a key in redux where all information will be stored and name for property in your React Component. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nconnectResources({ namespace: 'cars' })\n\n// component\n\nfunction ReactComponent({ cars })\n\n// store\n\n{\n  cars: {\n    ...//resource data\n  }\n}\n\nconnectResources({ namespace: 'cats' })\n\n// component\n\nfunction ReactComponent({ cats })\n\n// store\n\n{\n  cats: {\n    ...//resource data\n  }\n}\n\n")),Object(r.b)("h4",{id:"endpoint"},Object(r.b)("del",{parentName:"h4"},"endpoint")),Object(r.b)("p",null,"endpoint is url String to describe your HTTPS request. This field is not required and by default equals to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources#namespace"}),"namespace"),"."),Object(r.b)("p",null,"To have dynamic url config you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/path-to-regex"}),"path-to-regex")," syntax."),Object(r.b)("p",null,"Examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"basic ussage")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources({ namespace: 'cars', endpoint: 'carslist' })\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"missed endpoint")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources({ namespace: 'cars' })\n\n// will be transpiled to \n\nconnectResources({ namespace: 'cars', endpoint: 'cars' })\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"dynamic endpoint")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources({ namespace: 'car', endpoint: 'cars/:uuid' })\n\nthis.props.car.fetch({ uuid: 'tesla' })\nthis.props.car.post({ uuid: 'tesla', color: 'blue' })\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"endpoint")," should not contain trailing slashes"))),Object(r.b)("h4",{id:"forceupdates"},Object(r.b)("del",{parentName:"h4"},"forceUpdates")),Object(r.b)("p",null,"A boolean indicator that means that u do not need to store in redux filters, loading, and errors. This is common ussage for form submit actions, because ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://final-form.org/react"}),"react-final-form")," already handle all of this states and to avoid dublication of same data it is better to user ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("h4",{id:"queries"},Object(r.b)("del",{parentName:"h4"},"queries")),Object(r.b)("p",null,"Is an array of possible queary params. It is recommended to pass here all possible query params that are defined in your Swagger schema. "),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources({ \n  namespace: 'cars',\n  queries: ['offset', 'limit', 'search']\n})\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is important to define ",Object(r.b)("inlineCode",{parentName:"p"},"queries")," if you need to send HTTP request with query string.\nOtherwise your get requests will be without filters even if you pass it to ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," function"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Bad\nconnectResources({ namespace: 'cars' })\n\nthis.props.cars.fetch({ offset: 0, limit: 20 }) => will sent GET /users. offset and limit will be skipped\n\n//Good\nconnectResources({ namespace: 'cars', queries: ['offset', 'limit'] })\n\nthis.props.cars.fetch({ offset: 0, limit: 20 }) => will sent GET /users?offset=0&limit=20\n\n")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"queryString will only work for GET requests. If you need to send HHTP a query string with what ever else HTTP request type, you need to pass queries once more as overrided meta."),Object(r.b)("p",{parentName:"div"},"For example ",Object(r.b)("inlineCode",{parentName:"p"},"POST /cars?country=uk")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources({ namespace: 'cars', queries: ['country'] })\n\nthis.props.cars.create({ model: 1, color: 'red', year: 2020, country: 'uk' })\n\n// will send POST to /cars with payload and country will be skipped from query string and passed to body\n\n\nconnectResources({ namespace: 'cars' })\nthis.props.cars.create({ model: 1, color: 'red', year: 2020, country: 'uk' }, { queries: ['country'] })\n\n// will send POST to /cars?country=uk and in body you will have only model, color and year. country will be omitted\n")))),Object(r.b)("h4",{id:"reducer"},Object(r.b)("del",{parentName:"h4"},"reducer")),Object(r.b)("p",null,"This is function that will be called in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/basics/reducers"}),"redux reducer"),". Default ",Object(r.b)("inlineCode",{parentName:"p"},"'object'"),".\nBy default connect resources has already defined 4 types of most reusable reducers.\nAnd you may use it as a String"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources({ namespace: 'cars', reducer: 'object' })\nconnectResources({ namespace: 'cars', reducer: 'none' })\nconnectResources({ namespace: 'cars', reducer: 'replace' })\nconnectResources({ namespace: 'cars', reducer: 'paginationList' })\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("del",{parentName:"li"},"object"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function objectReducer(state, action){\n  return { ...state, ...action.payload }\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("del",{parentName:"li"},"none"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function noneReducer(state, action){\n  return state\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("del",{parentName:"li"},"replace"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function replaceReducer(state, action){\n  return action.payload\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("del",{parentName:"li"},"replace"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function replaceReducer(state, action){\n  return action.payload\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("del",{parentName:"li"},"paginationList"),"\nThis is the most complex type of reducers that works for endpoint with list data types")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"{\n  count: 10,\n  results: []\n}\n")),Object(r.b)("p",null,Object(r.b)("del",{parentName:"p"},"paginationList")," is helpfull when you work with inifinity List like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/flatlist"}),"FlatList")," from React-Native. The basic idea of inifinity lists is that when u first enter the page you need to send GET request for first n rows and on scroll end send one more request to get next batch of data and join 2 array. Next propblem is inline editing. Working with infinity lists it important that you need some how to refresh particular item in infinity list and u can not refetch all list and refresh all data when user made changes in 1 item."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// case action.payload is {count, results} => on scroll end\nfunction replaceReducer(state, action){\n  return {\n    ...state,\n    ...action.payload,\n    results: [...state.results, action.payload.results ]\n  }\n}\n\n// case action.payload is Object with item => on item update\n\nfunction replaceReducer(state, action){\n  return {\n    ...state,\n    ...action.payload,\n    results: state.results.map(stateItem=>{\n      if(stateItem.uuid === action.payload.uuid){\n        return action.payload\n      }\n      return stateItem\n    })\n  }\n}\n\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"paginationList will only work with type of API responce"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"{\n  count: 10,\n  results: []\n}\n")),Object(r.b)("p",{parentName:"div"},"Also to have replace item functionality you should have ",Object(r.b)("inlineCode",{parentName:"p"},"uuid")," as unique identificator of your item in list. This is hardcoded conditions.\nTo have your custom implementation please create your own reducer as a function"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("del",{parentName:"li"},"custom reducer function"),"\nYou may create your own logic for reducer. For example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function myReducer(stateData, payload){\n  return { ...stateData, ... payload, count: stateData.count + 1 }\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Creating your own reducer, please pay attantion to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://redux.js.org/style-guide/style-guide"}),"Redux Style Guide")))),Object(r.b)("h3",{id:"several-resources"},Object(r.b)("del",{parentName:"h3"},"Several resources")),Object(r.b)("p",null,"To connect more than 1 resource into your React Component you may pass array of resource configs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"connectResources([\n  { namespace: 'cars' },\n  { namespace: 'pets' }\n])\n\nfunction MyComponent({ cars, pets }){\n  //than u will have 2 resources in 1 component\n}\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Pay attantion that all resources should have unique namespace, otherwise it will just ovverride each other("))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Pay that is it much better to split your code. That's why mostly it is not a good choice to use several resources in 1 React Component."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// BAD\nconnectResources([\n  { namespace: 'cars' },\n  { namespace: 'pets' }\n])\n\nfunction MyComponent({ cars, pets }){\n  return (\n    <Pets {...pets}/>\n    <Cars {...cars}/>\n  )\n}\n\n//Good\n\n//withPets.js\nexport default connectResources({ namespace: 'pets' })\n\n//withCars.js\nexport default connectResources({ namespace: 'cars' })\n\n//Pets.js\nimport PetsView from './PetsView'\nimport withPets from './withPets'\n\nexport default withPets(PetsView)\n\n//Cars.js\nimport CarsView from './CarsView'\nimport withCars from './withCars'\n\nexport default withCars(CarsView)\n\n\n//CarsAndPetsPage.js\nimport Pets from './Pets'\nimport Cars from './Cars'\n\nexport default function CarsAndPetsPage(){\n  return (\n    <Fragment>\n      <Pets/>\n      <Cars/>\n    </Fragment>\n  )\n}\n\n\n")))),Object(r.b)("h3",{id:"simple-syntax"},Object(r.b)("del",{parentName:"h3"},"Simple syntax")),Object(r.b)("p",null,"As you may remember that ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources#resource"}),"Resource")," object has only 1 required option (namespace), you can use more light syntax to define Resource as a String"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// several\n\nconnectResources(['cars', 'pets'])\n\n// single\n\nconnectResources('cars')\n\n// dynamic\n\nconnectResources('cars/:uuid') // you will have cars as namespace and cars/:uuid as endpoint\n\n//camelcase\n\nconnectResources('cars/search') //carsSearch as a namespace\n\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Pay attantion that if you need just to add data from redux store to your React Component and you do not need any actions. It is better to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-redux.js.org/api/connect"}),"connect")," instead of resources."))))}l.isMDXComponent=!0}}]);