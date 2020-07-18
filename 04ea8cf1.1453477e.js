(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s({},r,{},e)),t},u=function(e){var r=d(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,m=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return t?o.a.createElement(m,s({ref:r},l,{components:t})):o.a.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},98:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(1),o=t(6),i=(t(0),t(149)),a={title:"Using drivers",description:"Using drivers guide for redux-requests - declarative AJAX requests and automatic network state management for Redux"},s={id:"drivers/using-drivers",title:"Using drivers",description:"Using drivers guide for redux-requests - declarative AJAX requests and automatic network state management for Redux",source:"@site/docs/drivers/using-drivers.md",permalink:"/docs/drivers/using-drivers",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/drivers/using-drivers.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595116360,sidebar:"docs",previous:{title:"10. Automatic normalisation",permalink:"/docs/tutorial/10-automatic-normalisation"},next:{title:"Axios driver",permalink:"/docs/drivers/axios-driver"}},c=[{value:"What is driver?",id:"what-is-driver",children:[]},{value:"How to use drivers",id:"how-to-use-drivers",children:[]},{value:"Multiple drivers",id:"multiple-drivers",children:[]},{value:"Writing your own driver",id:"writing-your-own-driver",children:[]},{value:"Supporting aborts in custom drivers",id:"supporting-aborts-in-custom-drivers",children:[]},{value:"Making your driver configurable",id:"making-your-driver-configurable",children:[]}],l={rightToc:c};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-driver"},"What is driver?"),Object(i.b)("p",null,"You must have noticed by now that this library uses a concept called ",Object(i.b)("strong",{parentName:"p"},"drivers"),".\nSo what is driver exactly? Technically, driver is just a function, which receives a request config,\nsends an AJAX request and returns a promise, which will be resolved for success case and\nrejected for error or abort cases. Practically, driver is an abstraction, a way to use this library\nwith any way to communicate with servers. Some people like Axios, other Fetch API. Some people like\nREST, other prefer GraphQL. Thanks to drivers concept you can use anything, even in combination in one app -\nthat's it, it is possible to use multiple drivers at the same time! Anyway, this library\nprovides many built-in drivers, but it is also possible to write your own, which\nwill be covered later in this chapter."),Object(i.b)("h2",{id:"how-to-use-drivers"},"How to use drivers"),Object(i.b)("p",null,"You must use at least one driver. You can choose one of provided drivers by this library\nor write your own. Let's assume we pick ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," driver. Install it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/fetch\n")),Object(i.b)("p",null,"and pass it to ",Object(i.b)("inlineCode",{parentName:"p"},"handleRequests"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import 'isomorphic-fetch';\nimport { handleRequests } from '@redux-requests/core';\nimport { createDriver  } from '@redux-requests/fetch';\n\nhandleRequests({\n  driver: createDriver(\n    window.fetch,\n    {\n      baseURL: 'https://my-domain.com',\n      AbortController: window.AbortController,\n    },\n  ),\n});\n")),Object(i.b)("p",null,"And that's it, ",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," driver is ready to use and the library will understand\n",Object(i.b)("inlineCode",{parentName:"p"},"Fetch API")," config in request actions."),Object(i.b)("h2",{id:"multiple-drivers"},"Multiple drivers"),Object(i.b)("p",null,"You can use multiple drivers at the same time if you need it. For example, if you want to use Axios by default, but also Fetch API\nsometimes, you can do it like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import axios from 'axios';\nimport 'isomorphic-fetch';\nimport { handleRequests } from '@redux-requests/core';\nimport { createDriver as createAxiosDriver } from '@redux-requests/axios';\nimport { createDriver as createFetchDriver } from '@redux-requests/fetch';\n\nhandleRequests({\n  driver: {\n    default: createAxiosDriver(axios),\n    fetch: createFetchDriver(\n      window.fetch,\n      {\n        baseURL: 'https://my-domain.com',\n        AbortController: window.AbortController,\n      },\n    ),\n  },\n});\n")),Object(i.b)("p",null,"As you can see, the default driver is Axios, so how to mark a request to be run by Fetch driver?\nJust pass the key you assigned Fetch driver to (",Object(i.b)("inlineCode",{parentName:"p"},"fetch")," in our case) in ",Object(i.b)("inlineCode",{parentName:"p"},"action.meta.driver"),", for instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fetchUsers = () => ({\n  type: 'FETCH_USERS',\n  request: {\n    url: '/users/',\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  },\n  meta: {\n    driver: 'fetch',\n  },\n});\n")),Object(i.b)("h2",{id:"writing-your-own-driver"},"Writing your own driver"),Object(i.b)("p",null,"As mentioned earlier, driver is just a function, which receives a request config,\nsends an AJAX request and returns a promise, which will be resolved for success case and rejected for error or abort cases."),Object(i.b)("p",null,"So, let's write ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," driver. In order to understand what will happen next, it is recommended\nto get familiar with ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," library, especially how to abort requests. Anyway, let's start some coding:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import axios from 'axios';\n\nconst axiosDriver = requestConfig => {\n  return axios(requestConfig).then(response => ({ data: response.data }));\n};\n")),Object(i.b)("p",null,"Well, it wasn't so difficult, was it? As we can see, we just wrote a function\nwhich get's ",Object(i.b)("inlineCode",{parentName:"p"},"requestConfig")," (it will be passed from ",Object(i.b)("inlineCode",{parentName:"p"},"action.request"),") and returns\ncalled ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," with it. ",Object(i.b)("inlineCode",{parentName:"p"},"axios(requestConfig)")," already returns a promise which will\nbe rejected for error, so we are good here. The only thing we did is adding\n",Object(i.b)("inlineCode",{parentName:"p"},".then(response => ({ data: response.data }))")," to resolve promises only with ",Object(i.b)("inlineCode",{parentName:"p"},"data")," -\nthe library except promises to be resolved with object with ",Object(i.b)("inlineCode",{parentName:"p"},"data"),"."),Object(i.b)("h2",{id:"supporting-aborts-in-custom-drivers"},"Supporting aborts in custom drivers"),Object(i.b)("p",null,"We are not done yet though, our driver does not support aborts yet, let's fix that:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import axios from 'axios';\n\nconst axiosDriver = requestConfig => {\n  const abortSource = axios.CancelToken.source();\n\n  const responsePromise = axios({\n    cancelToken: abortSource.token,\n    ...requestConfig,\n  })\n    .then(response => ({ data: response.data }))\n    .catch(error => {\n      if (axios.isCancel(error)) {\n        throw 'REQUEST_ABORTED';\n      }\n\n      throw error;\n    });\n\n  responsePromise.cancel = () => abortSource.cancel();\n  return responsePromise;\n};\n")),Object(i.b)("p",null,"This looks a little more complicated, but it is not, let's analyze above code steps\nby steps. First of all, to support abort we decorated returned promise with ",Object(i.b)("inlineCode",{parentName:"p"},"cancel"),"\nmethod, which will be called by the library when a request should be aborted. Native\npromises cannot be aborted/cancelled, but by adding this we make it possible. This technique\nis quite similar for example to ",Object(i.b)("inlineCode",{parentName:"p"},"Bluebird")," promises. Moreover, notice ",Object(i.b)("inlineCode",{parentName:"p"},"catch")," logic.\nThis uses ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," helper to check whether request promise was rejected due to abort\nor another error, and in case of abort, we throw special error ",Object(i.b)("inlineCode",{parentName:"p"},"REQUEST_ABORTED"),", so that\nthe library can know that promise was rejected due to cancellation. This is needed because\nwe need to handle 3 response types - success, error or abort, while promise can be just\nresolved or rejected. We could also use observables instead of promises as building blocks\nfor drivers, but they are less popular than promises and they require libraries/polyfills installed.\nHence the decision for such API. Also, you need to remember not to use async function!\nIf you do, javascript engine would wrap your returned promise and ",Object(i.b)("inlineCode",{parentName:"p"},".cancel")," method would be gone!\nSo resist the temptation and stick just to promises when writing drivers!"),Object(i.b)("h2",{id:"making-your-driver-configurable"},"Making your driver configurable"),Object(i.b)("p",null,"Most of the time you would probably want your driver to be configurable. For instance,\nwe might want to allow to pass a custom ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," instance to ",Object(i.b)("inlineCode",{parentName:"p"},"axios")," driver. So let's refactor what we have:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import axios from 'axios';\n\nconst createAxiosDriver = axiosInstance => requestConfig => {\n  const abortSource = axios.CancelToken.source();\n\n  const responsePromise = axiosInstance({\n    cancelToken: abortSource.token,\n    ...requestConfig,\n  })\n    .then(response => ({ data: response.data }))\n    .catch(error => {\n      if (axios.isCancel(error)) {\n        throw 'REQUEST_ABORTED';\n      }\n\n      throw error;\n    });\n\n  responsePromise.cancel = () => abortSource.cancel();\n  return responsePromise;\n};\n")),Object(i.b)("p",null,"Now we could create driver with a configured axios, like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import axios from 'axios';\n\nconst axiosDriver = createAxiosDriver(\n  axios.create({\n    baseURL: 'https://some-domain.com/api/',\n  }),\n);\n")),Object(i.b)("p",null,"So basically we refactored ",Object(i.b)("inlineCode",{parentName:"p"},"axiosDriver")," into ",Object(i.b)("inlineCode",{parentName:"p"},"createAxiosDriver")," - function which\nreturns ",Object(i.b)("inlineCode",{parentName:"p"},"axiosDriver"),". This technique is of course not mandatory but it might be handy\nto make your drivers more flexible."))}d.isMDXComponent=!0}}]);