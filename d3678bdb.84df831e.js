(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(6),a=(n(0),n(163)),i={title:"handleRequests",description:"handleRequests API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications"},s={id:"api-reference/handle-requests",title:"handleRequests",description:"handleRequests API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications",source:"@site/docs/api-reference/handle-requests.md",permalink:"/docs/api-reference/handle-requests",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/api-reference/handle-requests.md",lastUpdatedBy:"klis87",lastUpdatedAt:1613689620,sidebar:"docs",previous:{title:"SubscriptionAction",permalink:"/docs/api-reference/subscription-action"},next:{title:"success",permalink:"/docs/api-reference/success"}},c=[{value:"<code>handleRequest</code> response object",id:"handlerequest-response-object",children:[{value:"<code>requestsReducer</code>",id:"requestsreducer",children:[]},{value:"<code>requestsMiddleware</code>",id:"requestsmiddleware",children:[]},{value:"<code>requestsPromise</code>",id:"requestspromise",children:[]}]},{value:"<code>handleRequest</code> options",id:"handlerequest-options",children:[{value:"<code>driver</code>",id:"driver",children:[]},{value:"<code>onRequest: (request, requestAction, store) =&gt; request</code>",id:"onrequest-request-requestaction-store--request",children:[]},{value:"<code>onSuccess: (response, requestAction, store) =&gt; response</code>",id:"onsuccess-response-requestaction-store--response",children:[]},{value:"<code>onError: (error, requestAction, store) =&gt; error</code>",id:"onerror-error-requestaction-store--error",children:[]},{value:"<code>onAbort: (requestAction, store) =&gt; void</code>",id:"onabort-requestaction-store--void",children:[]},{value:"<code>cache: boolean</code>",id:"cache-boolean",children:[]},{value:"<code>ssr: &#39;client&#39; | &#39;server&#39;</code>",id:"ssr-client--server",children:[]},{value:"<code>disableRequestsPromise: boolean</code>",id:"disablerequestspromise-boolean",children:[]},{value:"<code>isRequestAction: action =&gt; boolean</code>",id:"isrequestaction-action--boolean",children:[]},{value:"<code>isRequestActionQuery: requestAction =&gt; boolean</code>",id:"isrequestactionquery-requestaction--boolean",children:[]},{value:"<code>takeLatest: boolean || requestAction =&gt; boolean</code>",id:"takelatest-boolean--requestaction--boolean",children:[]},{value:"<code>normalize: boolean</code>",id:"normalize-boolean",children:[]},{value:"<code>getNormalisationObjectKey: obj =&gt; string</code>",id:"getnormalisationobjectkey-obj--string",children:[]},{value:"<code>shouldObjectBeNormalized: obj =&gt; string</code>",id:"shouldobjectbenormalized-obj--string",children:[]},{value:"<code>subscriber</code>",id:"subscriber",children:[]}]}],b={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As you probably noticed in other chapters, ",Object(a.b)("inlineCode",{parentName:"p"},"handleRequests")," is a function which gets some options\nand returns an object with all the pieces necessary to pass to ",Object(a.b)("inlineCode",{parentName:"p"},"redux"),", like ",Object(a.b)("inlineCode",{parentName:"p"},"requestsReducer")," etc."),Object(a.b)("h2",{id:"handlerequest-response-object"},Object(a.b)("inlineCode",{parentName:"h2"},"handleRequest")," response object"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"handleRequests")," response object contains the following keys:"),Object(a.b)("h3",{id:"requestsreducer"},Object(a.b)("inlineCode",{parentName:"h3"},"requestsReducer")),Object(a.b)("p",null,"Ready to use reducer managing the whole remote state, you need to attach it\nto ",Object(a.b)("inlineCode",{parentName:"p"},"requests")," key in ",Object(a.b)("inlineCode",{parentName:"p"},"combineReducers"),"."),Object(a.b)("h3",{id:"requestsmiddleware"},Object(a.b)("inlineCode",{parentName:"h3"},"requestsMiddleware")),Object(a.b)("p",null,"A list of middleware you should pass to ",Object(a.b)("inlineCode",{parentName:"p"},"applyMiddleware"),". This list is dynamic and\ndepends on other options, like ",Object(a.b)("inlineCode",{parentName:"p"},"cache")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ssr"),"."),Object(a.b)("h3",{id:"requestspromise"},Object(a.b)("inlineCode",{parentName:"h3"},"requestsPromise")),Object(a.b)("p",null,"A promise which is resolved after all requests are finished, only with ",Object(a.b)("inlineCode",{parentName:"p"},"ssr: 'server'")," option."),Object(a.b)("h2",{id:"handlerequest-options"},Object(a.b)("inlineCode",{parentName:"h2"},"handleRequest")," options"),Object(a.b)("h3",{id:"driver"},Object(a.b)("inlineCode",{parentName:"h3"},"driver")),Object(a.b)("p",null,"The only option which is required, a driver or object of drivers if you use multiple drivers."),Object(a.b)("h3",{id:"onrequest-request-requestaction-store--request"},Object(a.b)("inlineCode",{parentName:"h3"},"onRequest: (request, requestAction, store) => request")),Object(a.b)("p",null,"Function which will be called before request is made. It can be used to make some side effects,\nfor example with ",Object(a.b)("inlineCode",{parentName:"p"},"store.dispatch")," or to update request config by returning an updated one.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(a.b)("h3",{id:"onsuccess-response-requestaction-store--response"},Object(a.b)("inlineCode",{parentName:"h3"},"onSuccess: (response, requestAction, store) => response")),Object(a.b)("p",null,"Function which will be called after successful response but before success action is dispatched.\nIt can be used to make some side effects or to update response by returning another one.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(a.b)("h3",{id:"onerror-error-requestaction-store--error"},Object(a.b)("inlineCode",{parentName:"h3"},"onError: (error, requestAction, store) => error")),Object(a.b)("p",null,"Function which will be called after error response but before error action is dispatched.\nIt can be used to make some side effects or to update error by throwing another one.\nIt is also possible to recover from error by returning a response.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(a.b)("h3",{id:"onabort-requestaction-store--void"},Object(a.b)("inlineCode",{parentName:"h3"},"onAbort: (requestAction, store) => void")),Object(a.b)("p",null,"Function which will be called after abort but before abort action is dispatched.\nUsually it won't be useful, but it is available just in case.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(a.b)("h3",{id:"cache-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"cache: boolean")),Object(a.b)("p",null,"Set to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if you need to use caching. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/9-caching"}),"caching tutorial")," for more info."),Object(a.b)("h3",{id:"ssr-client--server"},Object(a.b)("inlineCode",{parentName:"h3"},"ssr: 'client' | 'server'")),Object(a.b)("p",null,"Pass ",Object(a.b)("inlineCode",{parentName:"p"},"server")," on the server and ",Object(a.b)("inlineCode",{parentName:"p"},"client")," on the client to activate server side rendering support.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../guides/server-side-rendering"}),"server side rendering guide"),"."),Object(a.b)("h3",{id:"disablerequestspromise-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"disableRequestsPromise: boolean")),Object(a.b)("p",null,"It only matters when ",Object(a.b)("inlineCode",{parentName:"p"},"ssr: 'server'"),", you can set it to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if you don't need to be notified by ",Object(a.b)("inlineCode",{parentName:"p"},"requestsPromise")," when\nall requests were resolved. Typically you would set it to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," when using React SSR suspense, ",Object(a.b)("inlineCode",{parentName:"p"},"false")," by default."),Object(a.b)("h3",{id:"isrequestaction-action--boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"isRequestAction: action => boolean")),Object(a.b)("p",null,"Here you can adjust which actions are treated\nas request actions, usually you don't need to worry about it, it might be useful for custom drivers."),Object(a.b)("h3",{id:"isrequestactionquery-requestaction--boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"isRequestActionQuery: requestAction => boolean")),Object(a.b)("p",null,"If this function returns true, request action is treated as query, if false, as mutation, probably only useful for custom drivers."),Object(a.b)("h3",{id:"takelatest-boolean--requestaction--boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"takeLatest: boolean || requestAction => boolean")),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", if a request of a given type is pending and another one is fired, the first one will be\nautomatically aborted, which can prevent race condition bugs and improve performance, default as ",Object(a.b)("inlineCode",{parentName:"p"},"true")," for queries and ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"\nfor mutations, which is usually what you want. See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/1-requests-aborts"}),"abort tutorial")," for more info."),Object(a.b)("h3",{id:"normalize-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"normalize: boolean")),Object(a.b)("p",null,"By default ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", pass ",Object(a.b)("inlineCode",{parentName:"p"},"true")," to turn on normalisation for all requests.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial")," for more info."),Object(a.b)("h3",{id:"getnormalisationobjectkey-obj--string"},Object(a.b)("inlineCode",{parentName:"h3"},"getNormalisationObjectKey: obj => string")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"obj => obj.id")," by default, useful only if you use normalisation.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial")," for more info."),Object(a.b)("h3",{id:"shouldobjectbenormalized-obj--string"},Object(a.b)("inlineCode",{parentName:"h3"},"shouldObjectBeNormalized: obj => string")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"obj => obj.id !== undefined")," by default, useful only if you use normalisation.\nSee ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial")," for more info."),Object(a.b)("h3",{id:"subscriber"},Object(a.b)("inlineCode",{parentName:"h3"},"subscriber")),Object(a.b)("p",null,"Only if you have a websocket server to connect to and you want to use subscriptions. It is an object with the following attributes:"),Object(a.b)("h4",{id:"url-string"},Object(a.b)("inlineCode",{parentName:"h4"},"url: string")),Object(a.b)("p",null,"The only required attribute. It is just an address of your websocket server, for example ",Object(a.b)("inlineCode",{parentName:"p"},"ws://localhost:3000/ws")),Object(a.b)("h4",{id:"protocols-string--string"},Object(a.b)("inlineCode",{parentName:"h4"},"protocols: string | string[]")),Object(a.b)("p",null,"Only if your websocket server requires it. It will be passed as 2nd argument to ",Object(a.b)("inlineCode",{parentName:"p"},"WebSocket")," constructor."),Object(a.b)("h4",{id:"ws"},Object(a.b)("inlineCode",{parentName:"h4"},"WS")),Object(a.b)("p",null,"Pass if you want to use your own ",Object(a.b)("inlineCode",{parentName:"p"},"WebSocket")," constructor. By default ",Object(a.b)("inlineCode",{parentName:"p"},"window.WebSocket")," is used."),Object(a.b)("h4",{id:"onopen-store-ws-props--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onOpen: (store, ws, props) => void")),Object(a.b)("p",null,"A function executed when a new websocket connection is established. For example you can dispatch some actions or send\na message to websocket server:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"(store, ws, props) => {\n  store.dispatch(someAction(props));\n  ws.send(\n    JSON.stringify({\n      type: 'messageOnStart',\n      props,\n    }),\n  );\n};\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Props")," are available, if they were passed in ",Object(a.b)("inlineCode",{parentName:"p"},"openWebsocket")," action."),Object(a.b)("h4",{id:"onclose-e-store-ws--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onClose: (e, store, ws) => void")),Object(a.b)("p",null,"A function executed when a websocket connection is closed. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"(e, store, ws) => {\n  store.dispatch(someAction());\n};\n")),Object(a.b)("h4",{id:"onerror-e-store-ws--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onError: (e, store, ws) => void")),Object(a.b)("p",null,"A function executed on a websocket error. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"(e, store, ws) => {\n  store.dispatch(someAction());\n};\n")),Object(a.b)("h4",{id:"onmessage-data-message-store--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onMessage: (data, message, store) => void")),Object(a.b)("p",null,"A function which will be called on each received message from the server. It can be used for side-effects."),Object(a.b)("h4",{id:"onsend-message-subscriptionaction--any"},Object(a.b)("inlineCode",{parentName:"h4"},"onSend: (message, subscriptionAction) => any")),Object(a.b)("p",null,"It allows you to globally intercept and transform all ",Object(a.b)("inlineCode",{parentName:"p"},"subscription")," messages sent to websocket server. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"(message, subscriptionAction) => {\n  return {\n    type: 'start',\n    payload: message,\n  };\n};\n")),Object(a.b)("h4",{id:"activateon-message--boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"activateOn: message => boolean")),Object(a.b)("p",null,"Useful, if you websocket server needs to confirm that connection is opened correctly, for example that the connection\nwas properly authenticated. For instance:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"message => {\n  const data = JSON.parse(message.data);\n  return data.type === 'connection_confirmed';\n};\n")),Object(a.b)("p",null,"When used, only after a message from the server, which confirms the connection, the connection will be considered as opened."),Object(a.b)("h4",{id:"getdata-data--any"},Object(a.b)("inlineCode",{parentName:"h4"},"getData: data => any")),Object(a.b)("p",null,"It allows to transform messages reveived from websocket server. Useful especially because this library uses a convenction to\nmatch server messages and subscription actions by ",Object(a.b)("inlineCode",{parentName:"p"},"type"),". For example a message ",Object(a.b)("inlineCode",{parentName:"p"},"{ type: 'ON_BOOK_ADDED', bookId: '1' }")," will match a subscription with ",Object(a.b)("inlineCode",{parentName:"p"},"type: 'ON_BOOK_ADDED'"),". But what if the server message structure is different? For example\n",Object(a.b)("inlineCode",{parentName:"p"},"{ id: 'ON_BOOK_ADDED', payload: { bookId: '1' } }"),"? Then, you could do something like that:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"data => {\n  if (data.id && data.payload) {\n    return { type: data.id, ...data.payload };\n  }\n\n  return data;\n};\n")),Object(a.b)("h4",{id:"onstopsubscriptions-stoppedsubscriptions-action-ws-store--void"},Object(a.b)("inlineCode",{parentName:"h4"},"onStopSubscriptions: (stoppedSubscriptions, action, ws, store) => void")),Object(a.b)("p",null,"Perhaps you websocket server requires a message from the client to stop a subscription. When you dispatch ",Object(a.b)("inlineCode",{parentName:"p"},"stopSubscriptions"),"\naction, still those actions would be ignored by the client, however it is a waste for the server to send messages\nwhich would be ignored anyway. Here you can see an example from ",Object(a.b)("inlineCode",{parentName:"p"},"graphql")," subscriptions:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"(stoppedSubscriptions, action, ws) => {\n  if (!ws) {\n    return;\n  }\n\n  stoppedSubscriptions.forEach(subscription => {\n    ws.send(JSON.stringify({ type: 'stop', id: subscription }));\n  });\n};\n")),Object(a.b)("h4",{id:"lazy-boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"lazy: boolean")),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", then the client will be automatically connected to the websocket server. Pass ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", if you prefer to\nconnect manually by dispatching ",Object(a.b)("inlineCode",{parentName:"p"},"openWebsocket")," action. Typically ",Object(a.b)("inlineCode",{parentName:"p"},"true")," is needed, if you need to pass some extra\nprops to ",Object(a.b)("inlineCode",{parentName:"p"},"openWebsocket")," action, ",Object(a.b)("inlineCode",{parentName:"p"},"false")," by default."),Object(a.b)("h4",{id:"isheartbeatmessage-message--boolean"},Object(a.b)("inlineCode",{parentName:"h4"},"isHeartbeatMessage: message => boolean")),Object(a.b)("p",null,"Using heartbeats is a nice way to detect when websocket connection is interrupted in a reliable way. If your websocket server supports heartbeats, you can provide a function to detect them. For instance:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"message => {\n  const data = JSON.parse(message.data);\n  return data.type === 'heartbeat';\n};\n")),Object(a.b)("h4",{id:"heartbeattimeout-number"},Object(a.b)("inlineCode",{parentName:"h4"},"heartbeatTimeout: number")),Object(a.b)("p",null,"Only if ",Object(a.b)("inlineCode",{parentName:"p"},"isHeartbeatMessage")," is defined. Length of a period in seconds, within which the client must receive a heartbeat message from the server. If not, websocket will be automatically closed. Then, if ",Object(a.b)("inlineCode",{parentName:"p"},"reconnectTimeout")," is defined, the client will try to automatically reconnect. ",Object(a.b)("inlineCode",{parentName:"p"},"20")," by default."),Object(a.b)("h4",{id:"reconnecttimeout-number"},Object(a.b)("inlineCode",{parentName:"h4"},"reconnectTimeout: number")),Object(a.b)("p",null,"Number of seconds, after which the client will try to reconnect after websocket connection has been closed uncleanly.\n",Object(a.b)("inlineCode",{parentName:"p"},"5")," by default. Pass ",Object(a.b)("inlineCode",{parentName:"p"},"null")," if you prefer to disable automatic reconnections."))}l.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||a;return n?r.a.createElement(m,s({ref:t},b,{components:n})):r.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var b=2;b<a;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);