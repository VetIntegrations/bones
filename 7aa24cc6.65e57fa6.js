(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(6),o=(n(0),n(148)),c={id:"resource_withFinalForm",title:"withFinalForm",sidebar_label:"withFinalForm"},i={id:"resources/resource_withFinalForm",title:"withFinalForm",description:"This is function returns HOC to connect your React Component with [connectResources](/frontend-docs/docs/resources/connect_resources) and [react-final-form](https://final-form.org/react).",source:"@site/docs/resources/withFinalForm.md",permalink:"/bones/docs/resources/resource_withFinalForm",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/resources/withFinalForm.md",sidebar_label:"withFinalForm",sidebar:"resourcesSitebar",previous:{title:"prefetchResources",permalink:"/bones/docs/resources/resource_prefetchResources"},next:{title:"withInfinityList",permalink:"/bones/docs/resources/resource_withInfinityList"}},s=[{value:"<del>API</del>",id:"api",children:[{value:"<del>formConfigs</del>",id:"formconfigs",children:[]},{value:"<del>resources</del>",id:"resources",children:[]},{value:"<del>options</del>",id:"options",children:[]}]},{value:"<del>REST API FLOW</del>",id:"rest-api-flow",children:[]},{value:"<del>form with customResource</del>",id:"form-with-customresource",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is function returns HOC to connect your React Component with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources"}),"connectResources")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://final-form.org/react"}),"react-final-form"),"."),Object(o.b)("p",null,"This HOC will pass to your React Component ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://final-form.org/docs/react-final-form/types/FormRenderProps"}),"form props")," from  react-final-form and props from ",Object(o.b)("del",{parentName:"p"},"connectResources"),".\nAlso this HOC will predefine ",Object(o.b)("inlineCode",{parentName:"p"},"onSubmit")," function by next criteria:"),Object(o.b)("p",null,"If your are using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/resource_customresources"}),"customresource"),", then it will use ",Object(o.b)("del",{parentName:"p"},"this.props","[namespace]",".customRequest"),". Otherwise it will send ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," or ",Object(o.b)("inlineCode",{parentName:"p"},"PATCH")," HTTP request based on endpoint and props."),Object(o.b)("h2",{id:"api"},Object(o.b)("del",{parentName:"h2"},"API")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { withFinalForm } from '@cranium/resource'\n\nwithFinalForm(formConfigs, resources, options)\n")),Object(o.b)("h3",{id:"formconfigs"},Object(o.b)("del",{parentName:"h3"},"formConfigs")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validate"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function(values, props):Object\\|Promise"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onSubmit"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function(values, form, props):Promise"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onSubmitSuccess"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function(apiResults, props):void"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"onSubmitFailed"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function(apiError, props):void"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"valuesInterceptor"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"function(values, props, form):Object"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"initialValues"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Object\\|function(props):Object"))))),Object(o.b)("h4",{id:"validate"},Object(o.b)("del",{parentName:"h4"},"validate")),Object(o.b)("p",null,"function to handle form level validation. For more information you may read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/skeleton/skeleton_forms#form-level-validation"}),"here")),Object(o.b)("h4",{id:"onsubmit"},Object(o.b)("del",{parentName:"h4"},"onSubmit")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function(values, form, props):Promise\n")),Object(o.b)("p",null,"If default algorithm of onSubmit function does not math your task. You can pass your own implementation of Submit action having ",Object(o.b)("inlineCode",{parentName:"p"},"values, form, props")),Object(o.b)("h4",{id:"onsubmitsuccess"},Object(o.b)("del",{parentName:"h4"},"onSubmitSuccess")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function(apiResults, props):void\n")),Object(o.b)("p",null,"A callback function for success submiting. Here is the best place for navigation and alerts"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function onSubmitSuccess(values, props){\n  props.history.push('some_route')\n}\n")),Object(o.b)("h4",{id:"onsubmitfailed"},Object(o.b)("del",{parentName:"h4"},"onSubmitFailed")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function(apiError, props):void\n")),Object(o.b)("p",null,"A callback function to hanldle non field errors. Here is the best place to show alerts"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function onSubmitFailed(apiError, props){\n  props.alert('ooops, something went wrong')\n}\n")),Object(o.b)("h4",{id:"valuesinterceptor"},Object(o.b)("del",{parentName:"h4"},"valuesInterceptor")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function(values, props, form):Object\n")),Object(o.b)("p",null,"Interceptor function that can help you to modify react-final-form values before sending submit action."),Object(o.b)("p",null,"Here you also has props from your Component so that to can merge form values and props if needed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function valuesInterceptor(values, props, form){\n  return ... // do something with values and props\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please pay attantion that you can not call any function that will change store or form state in ",Object(o.b)("inlineCode",{parentName:"p"},"valuesInterceptor")," function. This should be pure function without any side effects!"))),Object(o.b)("h4",{id:"initialvalues"},Object(o.b)("del",{parentName:"h4"},"initialValues")),Object(o.b)("p",null,"It cound be an object to define initial state of your react-final-form form state.\nOr it could be a function if your need some custom logic"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function initialValues(props){\n  return ... // do something with props and return an Object with initial form values\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please pay attantion that you can not call any function that will change store or react state in ",Object(o.b)("inlineCode",{parentName:"p"},"initialValues")," function. This should be pure function without any side effects!"))),Object(o.b)("h3",{id:"resources"},Object(o.b)("del",{parentName:"h3"},"resources")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"resources")," is param that will be passed to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources"}),"connectResources")," function.\nSame as with connectResources, ",Object(o.b)("inlineCode",{parentName:"p"},"resources")," could be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources#resource"}),"Resource")," object or ",Object(o.b)("strong",{parentName:"p"},"Array<Resource",">")," or simple ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/connect_resources#simple-syntax"}),"String"),"."),Object(o.b)("h3",{id:"options"},Object(o.b)("del",{parentName:"h3"},"options")),Object(o.b)("p",null,"Object with additional configurations"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/frontend-docs/docs/resources/resource_prefetchResources#refresh"}),"refresh")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/frontend-docs/docs/resources/resource_prefetchResources#destroyonunmount"}),"destroyOnUnmount")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/frontend-docs/docs/resources/resource_prefetchResources#defaultparams"}),"defaultParams")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/frontend-docs/docs/resources/resource_prefetchResources#loader"}),"Loader")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"React Element"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"prefetch"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(o.b)("p",null,"Most configurations are same with ",Object(o.b)("del",{parentName:"p"},"prefetchResources"),". But here is one new param ",Object(o.b)("inlineCode",{parentName:"p"},"prefetch")),Object(o.b)("h4",{id:"prefetch"},Object(o.b)("del",{parentName:"h4"},"prefetch")),Object(o.b)("p",null,"Boolean flag that means if you need to have initial request for remote data or not.\nIn general this will use ",Object(o.b)("del",{parentName:"p"},"prefetchResources")," or ",Object(o.b)("del",{parentName:"p"},"connectResources")," based on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/resource_prefetchResources#prefetchresources-us-connectresources"}),"digram")),Object(o.b)("h2",{id:"rest-api-flow"},Object(o.b)("del",{parentName:"h2"},"REST API FLOW")),Object(o.b)("p",null,"By default ",Object(o.b)("del",{parentName:"p"},"resources")," were build to work REST API. This means that in general for all forms you will have 2 possible scenarios:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create user => POST /users"),Object(o.b)("li",{parentName:"ul"},"Update existing user => PATCH /users/:uuid")),Object(o.b)("p",null,"To handle this scenario will use dynamic rote config"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { withFinalForm } from '@cranium/resource'\n\nwithFinalForm({\n    validate,\n    onSubmitSuccess,\n  },{\n    namespace: 'users',\n    endpoint: 'users/:uuid?'\n  }, {\n    prefetch: true //this is default value. and it is here just for example\n  })(MyReactElement)\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The most important thing here is to define endpoint with dynamic param and this param should be optional"))),Object(o.b)("p",null,"Having this configurations you will get the most suitable implementation for TEST API.\nHere we will have 2 scenarios:\n1. component has ",Object(o.b)("del",{parentName:"p"},"props.uiud")),Object(o.b)("p",null,"That means that it is form for updating existing user.\nIn this case u will have:\n1. Send GET /users/:uuid on mount\n2. Pass responce data as initial values\n3. Send PATCH /users/:uuid on submit"),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"component has not ",Object(o.b)("del",{parentName:"li"},"props.uiud"),"\nThat means that it is form for creating new user.")),Object(o.b)("p",null,"In this case it will have different scenario:\n1. ",Object(o.b)("inlineCode",{parentName:"p"},"prefetch: true")," option will skip.\n2. initial values will be undefined\n3. Send POST /users on submit"),Object(o.b)("h2",{id:"form-with-customresource"},Object(o.b)("del",{parentName:"h2"},"form with customResource")),Object(o.b)("p",null,"You can use customResource in pair with withFinalForm."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { customResource, withFinalForm } from '@cranium/resource'\n\nfunction myCustomFetch(API, payload, meta) {\n  return new Promise(function(resolve,reject){\n    setTimeout(()=>resolve({ succes: true }),1000)\n  })\n}\n\nconst customConnectResource = customResource(myCustomFetch)\n\nexport default withFinalForm(\n  {\n    validate,\n  },\n  customConnectResource({\n    namespace: 'test'\n  }),\n  {\n    Loader: MyCustomLoader,\n  }\n)\n\n//same with short sintax\nexport default withFinalForm(\n  {\n    validate,\n  },\n  customConnectResource('test'),\n  {\n    Loader: MyCustomLoader,\n  }\n)\n")),Object(o.b)("p",null,"Using this configuration it will call ",Object(o.b)("inlineCode",{parentName:"p"},"myCustomFetch")," function on mount component and on Submit.\nPlease, pay attantion that prefetch option and REST API flow has same flow as with using simple resource the only one difference is that you can define your own async action."))}l.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,i({ref:t},b,{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);