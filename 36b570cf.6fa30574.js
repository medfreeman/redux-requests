(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),i=(r(0),r(149)),o={title:"getQuery",description:"getQuery API reference for redux-requests - declarative AJAX requests and automatic network state management for Redux"},c={id:"api-reference/get-query",title:"getQuery",description:"getQuery API reference for redux-requests - declarative AJAX requests and automatic network state management for Redux",source:"@site/docs/api-reference/get-query.md",permalink:"/docs/api-reference/get-query",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/api-reference/get-query.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595116360,sidebar:"docs",previous:{title:"abort",permalink:"/docs/api-reference/abort"},next:{title:"getQuerySelector",permalink:"/docs/api-reference/get-query-selector"}},l=[],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"getQuery")," is a selector which returns a state for a given query. It is the selector which requires props.\nImagine you want to get a state for ",Object(i.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS")," query which we played with earlier. You can use it like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { getQuery } from '@redux-requests/core';\n\nconst booksQuery = getQuery(state, { type: 'FETCH_BOOKS' });\n/* for example {\n  data: [{ id: '1', name: 'Some book title' }],\n  loading: false,\n  error: null,\n  pristine: false, // true only when there was no request made for a give type\n} */\n")),Object(i.b)("p",null,"We only provided example for ",Object(i.b)("inlineCode",{parentName:"p"},"type")," prop, but here you have the list of all possibilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type: string"),": just pass query action type or action itself when using action creator library"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestKey: string"),": use it if you used ",Object(i.b)("inlineCode",{parentName:"li"},"meta.requestKey")," in query action"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"multiple"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," if you prefer ",Object(i.b)("inlineCode",{parentName:"li"},"data")," to be ",Object(i.b)("inlineCode",{parentName:"li"},"[]")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"null")," if data is empty, ",Object(i.b)("inlineCode",{parentName:"li"},"false")," by default"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaultData"),": use it to represent ",Object(i.b)("inlineCode",{parentName:"li"},"data")," as an orbitrary object instead of ",Object(i.b)("inlineCode",{parentName:"li"},"null"),", use top level object though,\nnot recreate it multiple times not to break selector memoization")))}p.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(f,c({ref:t},u,{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);