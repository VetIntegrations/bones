(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a(1),o=(a(0),a(149));const i={id:"skeleton_forms",title:"Forms",sidebar_label:"Forms"},l={id:"skeleton/skeleton_forms",title:"Forms",description:"We use [react-final-form](https://final-form.org/react) to handle form state. To connect your React component with final form we recommend to use [withFinalForm](/frontend-docs/docs/resources/resource_withFinalForm) HOC that includes some common code to work with REST API and form elements.",source:"@site/docs/skeleton/forms.md",permalink:"/bones/docs/skeleton/skeleton_forms",editUrl:"https://github.com/alexgul4enko/bones/tree/master/docs/docs/skeleton/forms.md",sidebar_label:"Forms",sidebar:"skeltonSitebar",previous:{title:"Architecture",permalink:"/bones/docs/skeleton/skeleton_architecture"}},r=[{value:"<del>BaseFieldHOC</del>",id:"basefieldhoc",children:[]},{value:"<del>BaseFieldLayout</del>",id:"basefieldlayout",children:[]},{value:"<del>inputs</del>",id:"inputs",children:[]},{value:"<del>fields.js</del>",id:"fieldsjs",children:[]},{value:"<del>validation</del>",id:"validation",children:[{value:"<del>form level validation</del>",id:"form-level-validation",children:[]},{value:"<del>field level validation</del>",id:"field-level-validation",children:[]},{value:"<del>conditional validation</del>",id:"conditional-validation",children:[]}]},{value:"<del>change one field based on another field</del>",id:"change-one-field-based-on-another-field",children:[]}],c={rightToc:r};function d({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://final-form.org/react"}),"react-final-form")," to handle form state. To connect your React component with final form we recommend to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/frontend-docs/docs/resources/resource_withFinalForm"}),"withFinalForm")," HOC that includes some common code to work with REST API and form elements."),Object(o.b)("p",null,"To make form's javascript code more reusable you can use ",Object(o.b)("inlineCode",{parentName:"p"},"common/forms")," folder and put all standend inputs there."),Object(o.b)("h2",{id:"basefieldhoc"},Object(o.b)("del",{parentName:"h2"},"BaseFieldHOC")),Object(o.b)("p",null,"Is HOC to wrap your input with react-final-form. This function will wrap input component with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://final-form.org/docs/react-final-form/api/Field"}),"Field")," component to pass all props from react-final-form. And additionally wrap input with BaseFieldLayout. "),Object(o.b)("h2",{id:"basefieldlayout"},Object(o.b)("del",{parentName:"h2"},"BaseFieldLayout")),Object(o.b)("p",null,"Mostly all yout inputs will have same layout to wrap input element with label, define some accessibility props, show lable, errors, is required, show some additional html elements such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://material-ui.com/api/input-adornment/"}),"InputAdornment"),", ext... To avoid same code and make all form elements more reusable you should use BaseFieldLayout that is part of BaseFieldHOC and defines all html elements that are common for whatever input component."),Object(o.b)("h2",{id:"inputs"},Object(o.b)("del",{parentName:"h2"},"inputs")),Object(o.b)("p",null,"Now all props to input is already defined with BaseFieldHOC and all additional html element are defined with BaseFieldLayout and everything is left to create input compnent. All input component it is better to store in ",Object(o.b)("inlineCode",{parentName:"p"},"inputs")," folder. Input component now should not contain any dublicate code and should be simple as much as it could be)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"export default function TextInput({ onChange, inputClassName, ...props }) {\n  const handleChange = useCallback((e) => onChange(e.target.value), [onChange])\n  return (\n    <input\n      {...props}\n      className={inputClassName}\n      onChange={handleChange}\n    />\n  )\n}\n")),Object(o.b)("h2",{id:"fieldsjs"},Object(o.b)("del",{parentName:"h2"},"fields.js")),Object(o.b)("p",null,"Now when you have your input component you just need to wrap this Component with BaseFieldHOC. And this should be done in ",Object(o.b)("inlineCode",{parentName:"p"},"fields.js")," file. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import TextInput from './inputs/TextInput'\n\nconst TextField = BaseFieldHOC(TextInput)\n\nexport {\n  TextField\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please, pay attantion that input Component shout have name ",Object(o.b)("inlineCode",{parentName:"p"},"<type>Input")," and field ",Object(o.b)("inlineCode",{parentName:"p"},"<type>Field")))),Object(o.b)("h2",{id:"validation"},Object(o.b)("del",{parentName:"h2"},"validation")),Object(o.b)("p",null,"Based on react-final-form API you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://final-form.org/docs/react-final-form/examples/record-level-validation"}),"form level validation")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://final-form.org/docs/react-final-form/examples/field-level-validation"}),"fiels level validation"),". Skeleton includes basic examples of validations. You can find this solution in 'common/form/validation' folder."),Object(o.b)("h3",{id:"form-level-validation"},Object(o.b)("del",{parentName:"h3"},"form level validation")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { validateEmail, validateRequired, compose } from 'common/forms/validation'\n\nexport default compose(\n  validateEmail('email'),\n  validateRequired(['email', 'password']),\n)\n")),Object(o.b)("p",null,"This will check fields with names ",Object(o.b)("inlineCode",{parentName:"p"},"email")," and ",Object(o.b)("inlineCode",{parentName:"p"},"password")," to be defined and field check ",Object(o.b)("inlineCode",{parentName:"p"},"email")," field with email reqexp."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please, pay attantion that form level validation could not contain validation rules for inputs that are not exits in form.\nFor example if you define rule for field ",Object(o.b)("inlineCode",{parentName:"p"},"name")," to be required and than you delete this input from JSX than your form will be always invalid."))),Object(o.b)("h3",{id:"field-level-validation"},Object(o.b)("del",{parentName:"h3"},"field level validation")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { email, required, composeValidators } from 'common/forms/validation'\n\nconst validateEmail = composeValidators(email, required)\n\nfunction MyForm(){\n  return (\n    <TextInput\n      name=\"email\"\n      validate={validateEmail}\n    />\n  )\n}\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please, pay attantion that you can not use ",Object(o.b)("inlineCode",{parentName:"p"},"composeValidators")," inside your React Component. It is important that validate function should be unique during all React Component lifecicle."))),Object(o.b)("h3",{id:"conditional-validation"},Object(o.b)("del",{parentName:"h3"},"conditional validation")),Object(o.b)("p",null,"react-final-form API memoized validate function prop. The best way to handle condition validation is to descripe validate function more correctly."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { email, required, composeValidators } from 'common/forms/validation'\n\nfunction conditionalRequired(value, allValues){\n  if(!allValues.anotherInput) return undefined\n  return composeValidators(required, email)(value)\n}\n\nfunction MyForm(){\n  return (\n    <TextInput\n      name=\"email\"\n      validate={conditionalRequired}\n    />\n  )\n}\n")),Object(o.b)("h2",{id:"change-one-field-based-on-another-field"},Object(o.b)("del",{parentName:"h2"},"change one field based on another field")),Object(o.b)("p",null,"To make some form state changes on field change it is recommended to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://final-form.org/docs/final-form/types/Decorator"}),"decorators")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const transferFormdecorator = createDecorator({\n  field: /total/,\n  updates: (value, name, allValues) => {\n    return set(allValues, name.replace('.total', '.debts'), [])\n  },\n})\n\n\nfinalForm(\n  {\n    decorators: [transferFormdecorator],\n  }\n)\n")),Object(o.b)("p",null,"In this example you will subscribe on change for all fields inside fields array with name that includes ",Object(o.b)("inlineCode",{parentName:"p"},"total")," in their name and update relevalt field with name ",Object(o.b)("inlineCode",{parentName:"p"},"debts")," to empty array. "))}d.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},m=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(a),b=n,u=m["".concat(l,".").concat(b)]||m[b]||p[b]||i;return a?o.a.createElement(u,r({ref:t},d,{components:a})):o.a.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);