(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(149)),i={title:"6. Interceptors",description:"6th part of the tutorial for redux-requests - declarative AJAX requests and automatic network state management for Redux"},s={id:"tutorial/6-interceptors",title:"6. Interceptors",description:"6th part of the tutorial for redux-requests - declarative AJAX requests and automatic network state management for Redux",source:"@site/docs/tutorial/6-interceptors.md",permalink:"/docs/tutorial/6-interceptors",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/tutorial/6-interceptors.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595116360,sidebar:"docs",previous:{title:"5. Resetting requests",permalink:"/docs/tutorial/5-resetting-requests"},next:{title:"7. Local updates",permalink:"/docs/tutorial/7-local-updates"}},c=[{value:"Interceptors introduction",id:"interceptors-introduction",children:[]},{value:"<code>onRequest</code>",id:"onrequest",children:[]},{value:"<code>onSuccess</code>",id:"onsuccess",children:[]},{value:"<code>onError</code>",id:"onerror",children:[]},{value:"<code>onAbort</code>",id:"onabort",children:[]},{value:"<code>meta.silent</code> and <code>meta.runOn...</code>",id:"metasilent-and-metarunon",children:[]},{value:"Global interceptors",id:"global-interceptors",children:[]},{value:"Interceptors and batch requests",id:"interceptors-and-batch-requests",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"interceptors-introduction"},"Interceptors introduction"),Object(a.b)("p",null,"What if you need to make a side effect for a given request, or maybe a response success\nor an error? What if you need to add a token to all or most of requests? This is\nwhere ",Object(a.b)("strong",{parentName:"p"},"interceptors")," come into play."),Object(a.b)("p",null,"There are four types of ",Object(a.b)("strong",{parentName:"p"},"interceptors"),": ",Object(a.b)("inlineCode",{parentName:"p"},"onRequest"),", ",Object(a.b)("inlineCode",{parentName:"p"},"onSuccess"),", ",Object(a.b)("inlineCode",{parentName:"p"},"onError")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"onAbort"),". Also, there are two ways to add them. You can either attach them to a given\nrequest action inside ",Object(a.b)("inlineCode",{parentName:"p"},"meta")," or you can pass them to ",Object(a.b)("inlineCode",{parentName:"p"},"handleRequests")," to intercept\nall requests."),Object(a.b)("p",null,"Now, let's analyze all ",Object(a.b)("strong",{parentName:"p"},"interceptors"),"."),Object(a.b)("h2",{id:"onrequest"},Object(a.b)("inlineCode",{parentName:"h2"},"onRequest")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onRequest")," allows you to change a request action before a request is made. For instance,\nyou could add a token to all of your request actions if it exists. Let's see an example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { getToken } from './selectors';\n\nconst onRequest = (request, requestAction, store) => {\n  const token = getToken(store.getState());\n\n  if (token) {\n    return {\n      ...request,\n      headers: {\n        ...request.headers,\n        Authorization: token,\n      },\n    };\n  }\n\n  return request;\n}\n")),Object(a.b)("p",null,"So, ",Object(a.b)("inlineCode",{parentName:"p"},"onRequest")," is just a function which receives ",Object(a.b)("inlineCode",{parentName:"p"},"request")," object (from request action for convenience),\n",Object(a.b)("inlineCode",{parentName:"p"},"requestAction")," itself and ",Object(a.b)("inlineCode",{parentName:"p"},"store")," (so you can read state and dispatch other actions).\nHere we just check whether ",Object(a.b)("inlineCode",{parentName:"p"},"token")," exists and if yes, we add ",Object(a.b)("inlineCode",{parentName:"p"},"Authorization")," header.\nImagine you needed to do this for dozens of different requests types! Interceptors\nare perfect to implement a global logic."),Object(a.b)("p",null,"However, interceptors are also useful for creating side effects. Yes, you could\ndo this with a custom middleware, sagas etc, but see below example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { addMessage } from './actions';\n\nconst fetchBooks = () => ({\n  type: FETCH_BOOKS,\n  request: { url: '/books' },\n  meta: {\n    onRequest: (request, requestAction, store) => {\n    store.dispatch(addMessage('We are going to fetch books'));\n    return request;\n  },\n})\n")),Object(a.b)("p",null,"What is nice about this way is that you have everything in one place - inside action.\nThere is a nice word to describe this style - ",Object(a.b)("strong",{parentName:"p"},"collocation"),". What is easier to understand\nand maintain applications, to read different files with actions, reducers, sagas, epics, middleware\nand trying to connect all the pieces? Or... just looking at a given action? Probably\nthere are people got used to separating related logic into multiple files, but this\nlibrary strongly advocates collocation approach and provides many features like interceptors\nto make it easier to achieve. Of course this approach is not enforced, you can still\nyou sagas for side effects if you want, you have many options."),Object(a.b)("h2",{id:"onsuccess"},Object(a.b)("inlineCode",{parentName:"h2"},"onSuccess")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onSuccess")," interceptor is fired after a successful response is received from the server,\nbut before ",Object(a.b)("inlineCode",{parentName:"p"},"success")," action is dispatched. You can use it then to amend response or\nto provide a side effect like another action dispatched before ",Object(a.b)("inlineCode",{parentName:"p"},"success")," action is fired,\nlike:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const onSuccess = (response, requestAction, store) => {\n  if (shouldBeTransformed(response)) {\n    return transform(response);\n  }\n\n  return response;\n}\n")),Object(a.b)("p",null,"Just remember to always return ",Object(a.b)("inlineCode",{parentName:"p"},"response")," and that ",Object(a.b)("inlineCode",{parentName:"p"},"response")," has to be an object\nwith ",Object(a.b)("inlineCode",{parentName:"p"},"data")," key."),Object(a.b)("p",null,"Also, be aware that it is possible to return a Promise resolving with ",Object(a.b)("inlineCode",{parentName:"p"},"response"),".\nLikewise, ",Object(a.b)("inlineCode",{parentName:"p"},"onSuccess")," can be an ",Object(a.b)("inlineCode",{parentName:"p"},"async")," function too."),Object(a.b)("h2",{id:"onerror"},Object(a.b)("inlineCode",{parentName:"h2"},"onError")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onError")," interceptor is fired after an error response is received from the server,\nbut before ",Object(a.b)("inlineCode",{parentName:"p"},"error")," action is dispatched. You can use it then to amend error,\nto provide a side effect or even to recover from error and replace ",Object(a.b)("inlineCode",{parentName:"p"},"error")," response\nwith ",Object(a.b)("inlineCode",{parentName:"p"},"success"),"."),Object(a.b)("p",null,"The easiest example of ",Object(a.b)("inlineCode",{parentName:"p"},"onError")," is to dispatch an error message or any error:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const onError = (error, requestAction, store) => {\n  store.dispatch(addMessage('Something wrong happened!'));\n  throw error;\n}\n")),Object(a.b)("p",null,"A very important things here is that you need to ",Object(a.b)("inlineCode",{parentName:"p"},"throw")," error (passed or another)\nor return a rejected promise with an error. Forgetting about it will probably\ncreate some bugs, because if you don't rethrow, it will be treated that error is fixed."),Object(a.b)("p",null,"This is because it is possible to recover from error. Imagine you received an error\nbecause a token expired. This can be an usual occurrence in your application and you\nmight want to handle it in centralized place. See this example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const onError = async (error, requestAction, store) => {\n  if (tokenExpired(error)) {\n    const token = getCurrentToken(store.getState());\n\n    const { data } = await store.dispatch({\n      type: 'REFRESH_TOKEN',\n      request: {\n        url: '/refresh-token'\n        method: 'post',\n        data: { token },\n      },\n    });\n\n    // we didn't manage to get new token\n    if (!data) {\n      throw error;\n    }\n\n    saveNewToken(data.token); // for example to localStorage\n\n    // we fire the same request again with new token\n    const newResponse = await store.dispatch({\n      ...requestAction,\n      request: {\n        ...requestAction.request,\n        data: {\n          ...requestAction.request.data,\n          token: data.token,\n        },\n      },\n    });\n\n    if (newResponse.data) {\n      return { data: newResponse.data };\n    }\n  }\n\n  // either not token related error or we failed again\n  throw error;\n}\n")),Object(a.b)("p",null,"The key thing to notice above is that if you return an object with ",Object(a.b)("inlineCode",{parentName:"p"},"data")," key in\n",Object(a.b)("inlineCode",{parentName:"p"},"onError"),", the error will be catched and ",Object(a.b)("inlineCode",{parentName:"p"},"success")," action will be fired later instead\nof ",Object(a.b)("inlineCode",{parentName:"p"},"error"),"."),Object(a.b)("p",null,"Interestingly, above example is a little simplified, as there are things to worry about\nwhen making requests inside interceptors, namely duplicated actions or even infinite loops!\nWe will get back to this problem a little later."),Object(a.b)("h2",{id:"onabort"},Object(a.b)("inlineCode",{parentName:"h2"},"onAbort")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onAbort")," is called for any request which was not finished because it was aborted.\nProbably you will never use it, but it is available just in case. It looks like that:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const onAbort = (requestAction, store) => {\n  // do sth, for example an action dispatch\n  // you don't need to return anything\n}\n")),Object(a.b)("h2",{id:"metasilent-and-metarunon"},Object(a.b)("inlineCode",{parentName:"h2"},"meta.silent")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"meta.runOn...")),Object(a.b)("p",null,"Let's go back to ",Object(a.b)("inlineCode",{parentName:"p"},"onError")," example with token refresh. We pointed that above example\nwas a little simplified. Before we improve it, here is the list of additional ",Object(a.b)("inlineCode",{parentName:"p"},"meta"),"\noptions related to interceptors:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"silent: boolean"),": after setting to ",Object(a.b)("inlineCode",{parentName:"li"},"false")," no action will be dispatched for a given request, so reducers won't be hit,\nuseful if you want to make a request and not store it, or in an interceptor to avoid duplicated actions in some cases"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"runOnRequest: boolean"),": passing ",Object(a.b)("inlineCode",{parentName:"li"},"false")," would prevent running ",Object(a.b)("inlineCode",{parentName:"li"},"onRequest")," interceptor for this action, useful to avoid infinitive loops in some cases"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"runOnSuccess"),": like above, but for ",Object(a.b)("inlineCode",{parentName:"li"},"onSuccess")," interceptor"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"runOnError"),": like above, but for ",Object(a.b)("inlineCode",{parentName:"li"},"onError")," interceptor"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"runOnAbort"),": like above, but for ",Object(a.b)("inlineCode",{parentName:"li"},"onAbort")," interceptor")),Object(a.b)("p",null,"With this knowledge, let's rewrite ",Object(a.b)("inlineCode",{parentName:"p"},"onError")," interceptor:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const onError = async (error, requestAction, store) => {\n  if (tokenExpired(error)) {\n    const token = getCurrentToken(store.getState());\n\n    const { data } = await store.dispatch({\n      type: 'REFRESH_TOKEN',\n      request: {\n        url: '/refresh-token'\n        method: 'post',\n        data: { token },\n      },\n      meta: {\n        silent: true, // we don't care to store it in reducer\n        runOnError: false, // we don't need to... refresh token during refreshing token\n      },\n    });\n\n    // we didn't manage to get new token\n    if (!data) {\n      throw error;\n    }\n\n    saveNewToken(data.token); // for example to localStorage\n\n    // we fire the same request again with new token\n    const newResponse = await store.dispatch({\n      ...requestAction,\n      request: {\n        ...requestAction.request,\n        data: {\n          ...requestAction.request.data,\n          token: data.token,\n        },\n      },\n      meta: {\n         ...requestAction.meta,\n         silent: true, // to avoid duplicated request and response actions\n         runOnError: false, // to prevent potential infinite loops!\n         runOnSuccess: false, // to prevent double run of onSuccess for this action\n      },\n    });\n\n    if (newResponse.data) {\n      return { data: newResponse.data };\n    }\n  }\n\n  // either not token related error or we failed again\n  throw error;\n}\n")),Object(a.b)("p",null,"Hopefully comments in the code are enough to understand what is going on. The most\ninteresting thing probably is using ",Object(a.b)("inlineCode",{parentName:"p"},"runOnSuccess: false"),". Why it could be necessary?\nBecause if you recover from error in ",Object(a.b)("inlineCode",{parentName:"p"},"onError"),", as the next step ",Object(a.b)("inlineCode",{parentName:"p"},"onSuccess")," will\nbe called. So in our case disabling ",Object(a.b)("inlineCode",{parentName:"p"},"onSuccess")," execution avoids potential issues\nof executing ",Object(a.b)("inlineCode",{parentName:"p"},"onResponse")," twice, like duplicated side effects and so on."),Object(a.b)("p",null,"Generally, those options depend on your use case, sometimes you might get away without using them,\nsometimes they will be necessary to use. Just be aware of their existance and use when appropriate."),Object(a.b)("h2",{id:"global-interceptors"},"Global interceptors"),Object(a.b)("p",null,"Based on above example you already know how to use local interceptos. That's it,\nyou just add them to action ",Object(a.b)("inlineCode",{parentName:"p"},"meta"),". For global interceptors, you just need to pass\nthem to ",Object(a.b)("inlineCode",{parentName:"p"},"handleRequests"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import axios from 'axios';\nimport { handleRequests } from '@redux-requests/core';\nimport { createDriver } from '@redux-requests/axios';\n\nimport { onRequest, onSuccess, onError, onAbort } from './my-interceptors';\n\nhandleRequests({\n  driver: createDriver(axios),\n  onRequest,\n  onSuccess,\n  onError,\n  onAbort,\n);\n")),Object(a.b)("h2",{id:"interceptors-and-batch-requests"},"Interceptors and batch requests"),Object(a.b)("p",null,"You need to be careful when writing ",Object(a.b)("inlineCode",{parentName:"p"},"onRequest")," interceptors with ",Object(a.b)("strong",{parentName:"p"},"batch requests"),".\nFor those ",Object(a.b)("inlineCode",{parentName:"p"},"request")," argument will be an array of configs (like in batch request action), so\nyou must remember to handle those cases too when needed."))}p.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,s({ref:t},l,{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);