(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(0),r=a.n(n),c=a(158),o=a(152),l=a(212),s=a.n(l),i=a(8),u=a.n(i),d=a(153),m=a(154),h=a.n(m),f=a(156),b=a(155);function p({imageUrl:e,title:t=null,description:a=null}={}){const n=Object(d.a)(e);return r.a.createElement("div",{className:h()("col col--4",s.a.feature)},!!n&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:s.a.featureImage,src:n,alt:t})),r.a.createElement("h3",null,t),r.a.createElement("p",null,a))}function g(){const{isDarkTheme:e}=Object(f.a)(),{siteConfig:t}=Object(o.a)(),[a,c]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{e!==a&&c(e)},[e,c]);const l=void 0===a?"":a?s.a.heroBanner:s.a.heroBannerLight;return r.a.createElement("header",{key:e?"dark":"light",className:h()("hero hero--primary",l,s.a.banner)},r.a.createElement("div",{className:s.a.headerOverlay}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:s.a.buttons},r.a.createElement(b.a,{className:h()("button button--outline button--secondary button--lg",s.a.getStarted),to:Object(d.a)("docs/skeleton/skeleton_about")},"Get Started"))))}function v(){const e=Object(o.a)(),{siteConfig:t={}}=e;return r.a.createElement(c.a,{title:t.title,description:t.tagline},r.a.createElement(g,null),r.a.createElement("main",null,r.a.createElement("section",{className:s.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},[{title:"Easy to Use",description:"It was build to provide the most suitable API for front-end development. That is easy to use and configure."},{title:"Focus on What Matters",description:"We tried to solve most common problems, to give you extra time for styling and animations."},{title:"Stop dublicating code",description:"Our architecture rules and build-in modules help you to stop dublicating same code."},{title:"Stop making same errors",description:"We provide crossbrowser support. And our modules helps you to do not make same errors."},{title:"Cross platform",description:"You can use this toolkit for MPA, SPA and Mobile ( React-Native ) projects."},{title:"Best practices",description:"We are using best practices and newest technologies."}].map(({title:e,imageUrl:t,description:a}={})=>r.a.createElement(p,{key:e,title:e,imageUrl:t,description:a})))))),r.a.createElement("div",{className:s.a.overlay}))}p.propTypes={imageUrl:u.a.string,title:u.a.string,description:u.a.string},p.defaultProps={imageUrl:void 0,title:"",description:""}},156:function(e,t,a){"use strict";var n=a(0),r=a(164);t.a=function(){return Object(n.useContext)(r.a)}},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));var n=a(0),r=a.n(n),c=a(174),o=a(157),l=a(152),s=a(153),i=a(171),u=a(170),d=a(167),m=a(1),h=a(154),f=a.n(h),b=a(155),p=a(168),g=a(169),v=a(156),k=a(172),E=a(165),_=a(166),y=a(8),O=a.n(y);function j({activeBasePath:e,to:t,href:a,label:n,position:c,...o}){const l=Object(s.a)(t),i=Object(s.a)(e);return r.a.createElement(b.a,Object(m.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l,...e?{isActive:(e,t)=>t.pathname.startsWith(i)}:null},o),n)}function C({items:e,position:t,...a}){return e?r.a.createElement("div",{className:f()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(j,Object(m.a)({className:"navbar__item navbar__link"},a),a.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement(j,Object(m.a)({className:"navbar__item navbar__link"},e)))))):r.a.createElement(j,Object(m.a)({className:"navbar__item navbar__link"},a))}function w({items:e,...t}){return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(j,Object(m.a)({className:"menu__link menu__link--sublist"},t),t.label),r.a.createElement("ul",{className:"menu__list"},e.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(j,Object(m.a)({className:"menu__link"},e)))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(j,Object(m.a)({className:"menu__link"},t)))}j.propTypes={activeBasePath:O.a.string,to:O.a.string,href:O.a.string,position:O.a.oneOf(["left","right"]),label:O.a.string},j.defaultProps={activeBasePath:void 0,href:void 0,to:void 0,position:void 0,label:void 0},C.propTypes={items:O.a.array,position:O.a.oneOf(["left","right"]),label:O.a.string},C.defaultProps={items:[],position:void 0,label:""},w.propTypes={items:O.a.array,label:O.a.string},w.defaultProps={items:[],label:""};var N=a(159),S=a.n(N);function T(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:o}=Object(l.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:h,setLightTheme:y,setDarkTheme:O}=Object(v.a)(),{navbarRef:j,isNavbarVisible:N}=Object(k.a)(a),{logoLink:T,logoLinkProps:x,logoAlt:B}=Object(_.a)();Object(E.a)(s);const P=Object(n.useCallback)(()=>{i(!0)},[i]),I=Object(n.useCallback)(()=>{i(!1)},[i]),L=Object(n.useCallback)(e=>e.target.checked?O():y(),[y,O]),M=h?"/bones/img/logo_white.svg":"/bones/img/logo.svg";return r.a.createElement("nav",{ref:j,className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[S.a.navbarHideable]:a,[S.a.navbarHidden]:!N})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(b.a,Object(m.a)({className:"navbar__brand",to:T},x),null!=M&&r.a.createElement("img",{key:o,className:"navbar__logo",src:M,alt:B})),t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(C,Object(m.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(C,Object(m.a)({},e,{key:t}))),!c&&r.a.createElement(g.a,{className:S.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:L}),r.a.createElement(p.a,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:I}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(b.a,Object(m.a)({className:"navbar__brand",onClick:I,to:T},x),null!=M&&r.a.createElement("img",{key:o,className:"navbar__logo",src:M,alt:B})),!c&&s&&r.a.createElement(g.a,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:L})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(w,Object(m.a)({},e,{onClick:I,key:t}))))))))}var x=a(160),B=a.n(x);function P({to:e,href:t,label:a,icon:n,noTitle:c,...o}){const l=Object(s.a)(e);return t?r.a.createElement(b.a,Object(m.a)({},o,{target:"_blank",rel:"noopener noreferrer",href:t,className:"footer__link-item "+B.a.linkItem}),!!n&&r.a.createElement("i",{className:`${n} ${B.a.icon}`}),!c&&a):r.a.createElement(b.a,Object(m.a)({},o,{target:"_blank",className:"footer__link-item "+B.a.linkItem,to:l}),n&&r.a.createElement("i",{className:`${n} ${B.a.icon}`}),!c&&a)}P.propTypes={to:O.a.string,href:O.a.string,label:O.a.string,icon:O.a.string,noTitle:O.a.bool},P.defaultProps={to:"",href:"",label:"",icon:"",noTitle:!1};var I=a(161),L=a.n(I);function M(){return Array.from(arguments).filter(Boolean).join(" ")}function D(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:c}=a,{links:o=[],logo:i={}}=c||{},u=Object(n.useMemo)(()=>o.map(e=>r.a.createElement(P,Object(m.a)({key:e.label},e))),[o]);return r.a.createElement("footer",{className:M("footer",L.a.footer)},r.a.createElement("div",{className:M("container",L.a.logoContainer)},r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:L.a.logo},r.a.createElement("img",{src:Object(s.a)("img/logo_white.svg"),alt:i.alt})),r.a.createElement("p",{className:L.a.copyright},"Copyright \xa9 2020 alexgu4enko. All rights reserved.")),r.a.createElement("div",{className:L.a.footerLinks},r.a.createElement("div",null,u)))}a(162);function F({children:e,title:t,description:a,image:n,keywords:m,permalink:h,version:f}){const{siteConfig:b={}}=Object(l.a)(),{favicon:p,title:g,themeConfig:{image:v},url:k}=b||{},E=t?`${t} | ${g}`:g,_=n||v;let y=k+Object(s.a)(_);Object(o.a)(_)||(y=_);const O=Object(s.a)(p);return r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),!!E&&r.a.createElement("title",null,E),!!E&&r.a.createElement("meta",{property:"og:title",content:E}),!!p&&r.a.createElement("link",{rel:"shortcut icon",href:O}),!!a&&r.a.createElement("meta",{name:"description",content:a}),!!a&&r.a.createElement("meta",{property:"og:description",content:a}),!!f&&r.a.createElement("meta",{name:"docsearch:version",content:f}),!!m&&m.length&&r.a.createElement("meta",{name:"keywords",content:m.join(",")}),!!_&&r.a.createElement("meta",{property:"og:image",content:y}),!!_&&r.a.createElement("meta",{property:"twitter:image",content:y}),!!_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),h&&r.a.createElement("meta",{property:"og:url",content:k+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(d.a,null),r.a.createElement(T,null),r.a.createElement("div",{className:"main-wrapper"},e),r.a.createElement(D,null)))}},159:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_fMrT",hideLogoText:"hideLogoText_3V_S",navbarHideable:"navbarHideable_365A",navbarHidden:"navbarHidden_3Pj8"}},160:function(e,t,a){e.exports={title:"title_3_wM",wrapper:"wrapper_32RU",icon:"icon_moPa",linkItem:"linkItem_3uQP",items:"items_3JX_"}},161:function(e,t,a){e.exports={footer:"footer_FBdE",copyright:"copyright_2eY0",logo:"logo_3PPs",logoContainer:"logoContainer_3GMH",footerLinks:"footerLinks_i5Og"}},162:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},164:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},165:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},166:function(e,t,a){"use strict";var n=a(152),r=a(156),c=a(153),o=a(157);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(r.a)(),l=t.href||e;let s={};t.target?s={target:t.target}:Object(o.a)(l)||(s={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:l,logoLinkProps:s,logoImageUrl:Object(c.a)(i),logoAlt:t.alt}}},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(152),o=a(93),l=a.n(o);t.a=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(c.a)(),{id:t,content:a,backgroundColor:o,textColor:s}=e,[i,u]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&u(!1)},[]),!a||i?null:r.a.createElement("div",{className:l.a.announcementBar,style:{backgroundColor:o,color:s},role:"banner"},r.a.createElement("div",{className:l.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("button",{type:"button",className:l.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),u(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}},168:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),c=a(154),o=a.n(c),l=a(152),s=a(163);a(94);t.a=e=>{const[t,c]=Object(n.useState)(!1),i=Object(n.useRef)(null),{siteConfig:u={}}=Object(l.a)(),{themeConfig:{algolia:d}}=u,m=Object(s.b)();const h=(e=!0)=>{t||Promise.all([a.e(53).then(a.t.bind(null,183,7)),a.e(32).then(a.t.bind(null,189,7))]).then(([{default:t}])=>{c(!0),window.docsearch=t,function(e){window.docsearch({appId:d.appId,apiKey:d.apiKey,indexName:d.indexName,inputSelector:"#search_input_react",algoliaOptions:d.algoliaOptions,handleSelected:(e,t,a)=>{const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;m.push(r)}}),e&&i.current.focus()}(e)})},f=Object(n.useCallback)(()=>{h(),t&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),b=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),p=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;h(t)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:p,onFocus:p,onBlur:b,ref:i}))}},169:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(175),l=a.n(o),s=a(152),i=a(154),u=a.n(i),d=a(95),m=a.n(d);const h=()=>c.a.createElement("span",{className:u()(m.a.toggle,m.a.moon)}),f=()=>c.a.createElement("span",{className:u()(m.a.toggle,m.a.sun)});t.a=function(e){const{isClient:t}=Object(s.a)();return c.a.createElement(l.a,Object(n.a)({disabled:!t,icons:{checked:c.a.createElement(h,null),unchecked:c.a.createElement(f,null)}},e))}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n);var c=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=c();return r.a.createElement(o.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)}},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(152);const o="",l="dark";var s=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(c.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):o),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),s=Object(n.useCallback)(()=>{a(o),r(o)},[]),i=Object(n.useCallback)(()=>{a(l),r(l)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?l:o)})},[]),{isDarkTheme:t===l,setLightTheme:s,setDarkTheme:i}},i=a(164);t.a=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=s();return r.a.createElement(i.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)}},172:function(e,t,a){"use strict";var n=a(0),r=a(163);var c=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};t.a=e=>{const[t,a]=Object(n.useState)(!0),[o,l]=Object(n.useState)(!1),[s,i]=Object(n.useState)(0),[u,d]=Object(n.useState)(0),m=Object(n.useCallback)(e=>{null!==e&&d(e.getBoundingClientRect().height)},[]),h=Object(r.c)(),[f,b]=c(h.hash),p=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&a(!0),e<u)return;if(o)return l(!1),a(!1),void i(e);const t=document.documentElement.scrollHeight-u,n=window.innerHeight;s&&e>=s?a(!1):e+n<t&&a(!0),i(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}},[s,u]),Object(n.useEffect)(()=>{e&&(a(!0),b(h.hash))},[h]),Object(n.useEffect)(()=>{e&&f&&l(!0)},[f]),{navbarRef:m,isNavbarVisible:t}}},175:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(154)),s=m(a(8)),i=m(a(176)),u=m(a(177)),d=a(178);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(i.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},176:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},177:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},178:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},212:function(e,t,a){e.exports={banner:"banner_3abB",getStarted:"getStarted_16lI",headerOverlay:"headerOverlay_2HDO",heroBanner:"heroBanner_2Wl1",heroBannerLight:"heroBannerLight_1ov_",overlay:"overlay_2yuA",buttons:"buttons_2sHG",features:"features_3SLh",featureImage:"featureImage_28zy"}}}]);