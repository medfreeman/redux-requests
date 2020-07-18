(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{139:function(e,t,a){"use strict";a.r(t);a(172);var n=a(1),r=a(0),o=a.n(r),s=a(151),i=a.n(s),l=a(158),c=a(153),m=a(150),u=a(152),d=a(177),g=a(176),p=a(140),E=a.n(p),h=[{title:o.a.createElement(o.a.Fragment,null,"Just actions"),imageUrl:"img/undraw_letter.svg",description:o.a.createElement(o.a.Fragment,null,"Just dispatch actions and enjoy automatic AJAX requests and network state management")},{title:o.a.createElement(o.a.Fragment,null,"First class aborts support"),imageUrl:"img/undraw_cancel.svg",description:o.a.createElement(o.a.Fragment,null,"Automatic and configurable requests aborts, which increases performance and prevents race condition bugs before they even happen")},{title:o.a.createElement(o.a.Fragment,null,"Drivers driven"),imageUrl:"img/undraw_by_my_car.svg",description:o.a.createElement(o.a.Fragment,null,"Compatible with anything for server communication. Axios, Fetch API, GraphQL, promise libraries, mocking? No problem! You can also integrate it with other ways by writing a custom driver!")},{title:o.a.createElement(o.a.Fragment,null,"Batch requests"),imageUrl:"img/undraw_portfolio.svg",description:o.a.createElement(o.a.Fragment,null,"Define multiple requests in single action")},{title:o.a.createElement(o.a.Fragment,null,"Optimistic updates"),imageUrl:"img/undraw_to_the_stars.svg",description:o.a.createElement(o.a.Fragment,null,"Update remote data before receiving server response to improve perceived performance")},{title:o.a.createElement(o.a.Fragment,null,"Cache"),imageUrl:"img/undraw_memory_storage.svg",description:o.a.createElement(o.a.Fragment,null,"Cache server response forever or for a defined time period to decrease amount of network calls")},{title:o.a.createElement(o.a.Fragment,null,"Data normalisation"),imageUrl:"img/undraw_data_processing.svg",description:o.a.createElement(o.a.Fragment,null,"Use automatic data normalisation in GraphQL Apollo fashion, but for anything, including REST!")},{title:o.a.createElement(o.a.Fragment,null,"Server side rendering"),imageUrl:"img/undraw_server.svg",description:o.a.createElement(o.a.Fragment,null,"Configure SSR totally on Redux level and write truly universal code between client and server")},{title:o.a.createElement(o.a.Fragment,null,"React bindings"),imageUrl:"img/undraw_react.svg",description:o.a.createElement(o.a.Fragment,null,"Use react bindings to decrease code amount with React even more")}];function f(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(u.a)(t);return o.a.createElement("div",{className:i()("col col--4",E.a.feature)},r&&o.a.createElement("div",{classNasme:"text--center"},o.a.createElement("img",{className:E.a.featureImage,src:r,alt:a})),o.a.createElement("h3",null,a),o.a.createElement("p",null,n))}t.default=function(){var e=Object(m.a)().siteConfig,t=void 0===e?{}:e,a=Object(u.a)("img/showcase.gif"),r=Object(u.a)("img/logo-small.png");return o.a.createElement(l.a,{title:"Home page",description:"Declarative AJAX requests and automatic network state management for Redux"},o.a.createElement("header",{className:i()("hero hero--primary",E.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{marginBottom:16}},o.a.createElement("img",{src:r,alt:"logo",style:{width:100,verticalAlign:"middle"}}),o.a.createElement("h1",{className:"hero__title",style:{display:"inline-block",verticalAlign:"middle",margin:0}},t.title)),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement("div",{className:E.a.buttons},o.a.createElement(c.a,{className:i()("button button--outline button--secondary button--lg",E.a.getStarted),to:Object(u.a)("docs/introduction/motivation")},"Get started")))),o.a.createElement("main",{style:{padding:16}},o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:a,alt:"showcase gif",style:{width:"100%"}})),h.length>0&&o.a.createElement("section",{className:E.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},h.map((function(e,t){return o.a.createElement(f,Object(n.a)({key:t},e))}))))),o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"With ",o.a.createElement("i",null,"redux-requests"),", assuming you use ",o.a.createElement("i",null,"axios")," you could refactor a code in the following way:"),o.a.createElement(d.a,Object(n.a)({},d.b,{code:"  import axios from 'axios';\n- import thunk from 'redux-thunk';\n+ import { handleRequests } from '@redux-requests/core';\n+ import { createDriver } from '@redux-requests/axios'; // or another driver\n\n\n  const FETCH_BOOKS = 'FETCH_BOOKS';\n- const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';\n- const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';\n-\n- const fetchBooksRequest = () => ({ type: FETCH_BOOKS });\n- const fetchBooksSuccess = data => ({ type: FETCH_BOOKS_SUCCESS, data });\n- const fetchBooksError = error => ({ type: FETCH_BOOKS_ERROR, error });\n\n- const fetchBooks = () => dispatch => {\n-   dispatch(fetchBooksRequest());\n-\n-   return axios.get('/books').then(response => {\n-     dispatch(fetchBooksSuccess(response.data));\n-     return response;\n-   }).catch(error => {\n-     dispatch(fetchBooksError(error));\n-     throw error;\n-   });\n- }\n\n+ const fetchBooks = () => ({\n+   type: FETCH_BOOKS,\n+   request: {\n+     url: '/books',\n+     // you can put here other Axios config attributes, like method, data, headers etc.\n+   },\n+ });\n\n- const defaultState = {\n-   data: null,\n-   pending: 0, // number of pending FETCH_BOOKS requests\n-   error: null,\n- };\n-\n- const booksReducer = (state = defaultState, action) => {\n-   switch (action.type) {\n-     case FETCH_BOOKS:\n-       return { ...defaultState, pending: state.pending + 1 };\n-     case FETCH_BOOKS_SUCCESS:\n-       return { ...defaultState, data: action.data, pending: state.pending - 1 };\n-     case FETCH_BOOKS_ERROR:\n-       return { ...defaultState, error: action.error, pending: state.pending - 1 };\n-     default:\n-       return state;\n-   }\n- };\n\n  const configureStore = () => {\n+   const { requestsReducer, requestsMiddleware } = handleRequests({\n+     driver: createDriver(axios),\n+   });\n+\n    const reducers = combineReducers({\n-     books: booksReducer,\n+     requests: requestsReducer,\n    });\n\n    const store = createStore(\n      reducers,\n-     applyMiddleware(thunk),\n+     applyMiddleware(...requestsMiddleware),\n    );\n\n    return store;\n  };\n",language:"diff",theme:g.a}),(function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,s=e.getTokenProps;return o.a.createElement("pre",{className:t,style:Object.assign({},a,{padding:16,fontSize:14,lineHeight:1.4})},n.map((function(e,t){return o.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",s({token:e,key:t}))})))})))})),o.a.createElement("div",{style:{textAlign:"center",marginTop:24}},o.a.createElement("p",null,"Would you like to learn more?")),o.a.createElement("div",{className:E.a.buttons,style:{marginBottom:40}},o.a.createElement(c.a,{className:i()("button button--outline button--secondary button--lg",E.a.getStarted),to:Object(u.a)("docs/introduction/motivation")},"Go to documentation")))))}}}]);