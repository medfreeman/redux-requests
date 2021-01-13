(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(1),a=t(6),o=(t(0),t(157)),c={title:"abort",description:"abort API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications"},i={id:"api-reference/abort",title:"abort",description:"abort API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications",source:"@site/docs/api-reference/abort.md",permalink:"/docs/api-reference/abort",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/api-reference/abort.md",lastUpdatedBy:"Konrad",lastUpdatedAt:1610499904,sidebar:"docs",previous:{title:"error",permalink:"/docs/api-reference/error"},next:{title:"getQuery",permalink:"/docs/api-reference/get-query"}},p=[],u={rightToc:p};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a small helper which adds a proper suffix to request action types, it can\nbe useful to compute type of aborted request action, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { abort } from '@redux-requests/core';\n\nabort('FETCH_BOOKS') === 'FETCH_BOOKS_ABORT';\n")))}s.isMDXComponent=!0},157:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},l=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),d=n,b=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return t?a.a.createElement(b,i({ref:r},u,{components:t})):a.a.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);