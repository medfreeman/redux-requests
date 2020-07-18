(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),i=(r(0),r(149)),o={title:"Installation",description:"Installation guide for redux-requests - declarative AJAX requests and automatic network state management for Redux"},l={id:"introduction/installation",title:"Installation",description:"Installation guide for redux-requests - declarative AJAX requests and automatic network state management for Redux",source:"@site/docs/introduction/installation.md",permalink:"/docs/introduction/installation",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/introduction/installation.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595116360,sidebar:"docs",previous:{title:"Motivation",permalink:"/docs/introduction/motivation"},next:{title:"Basic usage",permalink:"/docs/introduction/basic-usage"}},s=[{value:"Installing the core",id:"installing-the-core",children:[]},{value:"Installing a driver",id:"installing-a-driver",children:[{value:"Axios driver",id:"axios-driver",children:[]},{value:"Fetch driver",id:"fetch-driver",children:[]},{value:"GraphQL driver",id:"graphql-driver",children:[]},{value:"Promise driver",id:"promise-driver",children:[]},{value:"Mock driver",id:"mock-driver",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installing-the-core"},"Installing the core"),Object(i.b)("p",null,"Before installing ",Object(i.b)("inlineCode",{parentName:"p"},"redux-requests"),", first make sure that you have installed required\ndependencies:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install redux reselect\n")),Object(i.b)("p",null,"Then, to install the package, just run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/core\n")),Object(i.b)("p",null,"or you can just use CDN: ",Object(i.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/core"),"."),Object(i.b)("h2",{id:"installing-a-driver"},"Installing a driver"),Object(i.b)("p",null,"Also, you need to install a driver. There are following drivers available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"axios"),Object(i.b)("li",{parentName:"ul"},"fetch"),Object(i.b)("li",{parentName:"ul"},"graphql"),Object(i.b)("li",{parentName:"ul"},"promise"),Object(i.b)("li",{parentName:"ul"},"mock")),Object(i.b)("p",null,"You need to have at least one, but it is also possible to use multiple in the single\napp. It is also possible to write a custom driver."),Object(i.b)("h3",{id:"axios-driver"},"Axios driver"),Object(i.b)("p",null,"Choose it, if you like using ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," library. To install it, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/axios\n")),Object(i.b)("p",null,"or CDN: ",Object(i.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/axios"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"axios")," itself is not included in the driver, so you will need to install it separately:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install axios\n")),Object(i.b)("h3",{id:"fetch-driver"},"Fetch driver"),Object(i.b)("p",null,"Choose it, if you prefer to use the standard Fetch API to communicate with your servers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/fetch\n")),Object(i.b)("p",null,"or CDN: ",Object(i.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/fetch"),"."),Object(i.b)("p",null,"You might also need to install a Fetch API polyfill if your environment requires it,\nfor instance ",Object(i.b)("inlineCode",{parentName:"p"},"isomorphic-fetch"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install isomorphic-fetch\n")),Object(i.b)("h3",{id:"graphql-driver"},"GraphQL driver"),Object(i.b)("p",null,"Use it, if you need to connect to a GraphQL server. In theory it is of course possible to\nuse ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," or ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," driver for this, but ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," driver makes this simpler and supports\nGraphQL concepts like fragments, uploading files according to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jaydenseric/graphql-multipart-request-spec"}),"multipart request specification")," and so on. To install it, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/graphql\n")),Object(i.b)("p",null,"or CDN: ",Object(i.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/graphql"),"."),Object(i.b)("h3",{id:"promise-driver"},"Promise driver"),Object(i.b)("p",null,"Sometimes you already have a library which is responsible for API communication.\nUsually those are promised based. For this scenario, pick ",Object(i.b)("inlineCode",{parentName:"p"},"promise")," driver:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/promise\n")),Object(i.b)("p",null,"or CDN: ",Object(i.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/promise"),"."),Object(i.b)("h3",{id:"mock-driver"},"Mock driver"),Object(i.b)("p",null,"In a perfect world, you would always already have an API to integrate with during frontend\ndevelopment. However, quite often reality proves otherwise and you would like to\nstart working on a feature before backend is ready. In this situation ",Object(i.b)("inlineCode",{parentName:"p"},"mock")," driver\ncould be very useful, as with its help you can just mock server responses and errors within\nRedux actions and continue normally. Then, after API is finished, you will just need to replace\nthe driver with a real one, like ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," or ",Object(i.b)("inlineCode",{parentName:"p"},"fetch"),", without any additional refactoring necessary,\nwhich could save you a lot of time! To install:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/mock\n")),Object(i.b)("p",null,"or CDN: ",Object(i.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/mock"),"."))}u.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,l({ref:t},c,{components:r})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);