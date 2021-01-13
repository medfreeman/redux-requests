(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(1),c=t(6),a=(t(0),t(157)),o={title:"success",description:"success API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications"},s={id:"api-reference/success",title:"success",description:"success API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications",source:"@site/docs/api-reference/success.md",permalink:"/docs/api-reference/success",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/api-reference/success.md",lastUpdatedBy:"Konrad",lastUpdatedAt:1610499904,sidebar:"docs",previous:{title:"handleRequests",permalink:"/docs/api-reference/handle-requests"},next:{title:"error",permalink:"/docs/api-reference/error"}},i=[],u={rightToc:i};function p(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a small helper which adds a proper suffix to request action types, it can\nbe useful to compute type of successful response action, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { success } from '@redux-requests/core';\n\nsuccess('FETCH_BOOKS') === 'FETCH_BOOKS_SUCCESS';\n")))}p.isMDXComponent=!0},157:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=c.a.createContext({}),p=function(e){var r=c.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},l=function(e){var r=p(e.components);return c.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,m=l["".concat(o,".").concat(d)]||l[d]||f[d]||a;return t?c.a.createElement(m,s({ref:r},u,{components:t})):c.a.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);