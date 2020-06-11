!function(e){var r={},t={0:0};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(r){if(0!==t[r]){var n=require("./js/"+({1:"pages-BluePage",2:"pages-RedPage",3:"pages-UsersPage"}[r]||r)+".chunk.js"),o=n.modules,u=n.ids;for(var a in o)e[a]=o[a];for(var s=0;s<u.length;s++)t[u[s]]=0}return Promise.all([])},n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=24)}([function(e,r){e.exports=require("react")},function(e,r,t){e.exports=t(21)},function(e,r){e.exports=require("react-router-dom")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("@loadable/component")},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var a=t(1),s=t.n(a),c=t(11),i=t.n(c),l=t(3);t.d(r,"b",(function(){return x})),t.d(r,"c",(function(){return j})),t.d(r,"d",(function(){return w}));var p=s.a.mark(P),f=s.a.mark(w),d="users/GET_USERS_PENDING",v="users/GET_USERS_SUCCESS",h="users/GET_USERS_FAILURE",m="users/GET_USER",y="users/GET_USER_SUCCESS",b="users/GET_USER_FAILURE",g=function(e){return{type:h,error:!0,payload:e}},x=function(e){return{type:m,payload:e}},E=function(e){return{type:y,payload:e}},O=function(e){return{type:b,payload:e,error:!0}},j=function(){return function(e){var r;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:d}),t.next=4,s.a.awrap(i.a.get("https://jsonplaceholder.typicode.com/users"));case 4:r=t.sent,e({type:v,payload:r}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),e(g(t.t0)),t.t0;case 12:case"end":return t.stop()}}),null,null,[[0,8]])}},S=function(e){return i.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function P(e){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.call)(S,e.payload);case 3:return r=t.sent,t.next=6,Object(l.put)(E(r.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(l.put)(O(t.t0));case 12:case"end":return t.stop()}}),p,null,[[0,8]])}function w(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.takeEvery)(m,P);case 2:case"end":return e.stop()}}),f)}var k={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};r.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case d:return u({},e,{loading:u({},e.loading,{users:!0})});case v:return u({},e,{loading:u({},e.loading,{users:!1}),users:r.payload.data});case h:return u({},e,{loading:u({},e.loading,{users:!1}),error:u({},e.error,{users:r.payload})});case m:return u({},e,{loading:u({},e.loading,{user:!0}),error:u({},e.error,{user:null})});case y:return u({},e,{loading:u({},e.loading,{user:!1}),user:r.payload});case b:return u({},e,{loading:u({},e.loading,{uesr:!1}),error:u({},e.error,{user:r.payload})});default:return e}}},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("@loadable/server")},function(e,r){e.exports=require("react-redux")},function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"c",(function(){return a}));var n=t(0),o=Object(n.createContext)(null);r.b=o;var u=function(e){var r=e.resolve,t=Object(n.useContext)(o);return t?t.done?null:(t.promises.push(Promise.resolve(r())),null):null},a=function(e){var r=Object(n.useContext)(o);return r?r.done?null:void r.promises.push(Promise.resolve(e())):null}},function(e,r,t){"use strict";var n=t(0),o=t.n(n),u=t(22),a=t.n(u),s=t(16),c=t(6),i=t.n(c),l=t(2),p=t.n(l),f=i()({resolved:{},chunkName:function(){return"pages-RedPage"},isReady:function(e){var r=this.resolve(e);return!1!==this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2).then(t.bind(null,19))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 19}}),d=i()({resolved:{},chunkName:function(){return"pages-BluePage"},isReady:function(e){var r=this.resolve(e);return!1!==this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(1).then(t.bind(null,20))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 20}}),v=i()({resolved:{},chunkName:function(){return"pages-UsersPage"},isReady:function(e){var r=this.resolve(e);return!1!==this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(3).then(t.bind(null,18))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 18}});function h(){return o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement("hr",null),o.a.createElement(l.Route,{path:"/red",component:f}),o.a.createElement(l.Route,{path:"/blue",component:d}),o.a.createElement(l.Route,{path:"/users",component:v}))}r.a=h},function(e,r,t){"use strict";var n=t(0),o=t.n(n),u=t(2);r.a=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/red"},"Red")),o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/blue"},"Blue")),o.a.createElement("li",null,o.a.createElement(u.Link,{to:"/users"},"Users")))}},function(e,r){e.exports=require("redux-thunk")},,,,function(e,r){e.exports=require("regenerator-runtime")},function(e,r){},function(e,r){e.exports=require("fs")},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),u=t(0),a=t.n(u),s=t(8),c=t.n(s),i=t(9),l=t.n(i),p=t(2),f=t(15),d=t(10),v=t.n(d),h=(t(23),t(4)),m=t(13),y=t(17),b=t.n(y),g=t(5),x=t.n(g),E=t(7),O=t(3),j=o.a.mark(S);function S(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.all)([Object(E.d)()]);case 2:case"end":return e.stop()}}),j)}var P=Object(h.combineReducers)({users:E.a}),w=t(14),k=t(12),q=v.a.resolve("./build/loadable-stats.json");function R(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="utf-8"/>\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta \n            name="viewport"\n            content="width=device-width,initial-scale=1,shrink-to-fit=no" \n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        '.concat(r.styles,"\n        ").concat(r.links,'\n    </head>\n    <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n            ').concat(e,"\n        </div>\n        ").concat(r.scripts,"\n    </body>\n    </html>\n    ")}var _=l()(),T=l.a.static(v.a.resolve("./build"),{index:!1});_.use(T),_.use((function(e,r,t){var n,u,s,i,l,d,v,y,E,O,j;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},u=x()(),s=Object(h.createStore)(P,Object(h.applyMiddleware)(b.a,u)),i=u.run(S).toPromise(),l={done:!1,promises:[]},d=new k.ChunkExtractor({statsFile:q}),v=a.a.createElement(k.ChunkExtractorManager,{extractor:d},a.a.createElement(w.b.Provider,{value:l},a.a.createElement(m.Provider,{store:s},a.a.createElement(p.StaticRouter,{location:e.url,context:n},a.a.createElement(f.a,null))))),c.a.renderToStaticMarkup(v),s.dispatch(g.END),t.prev=9,t.next=12,o.a.awrap(i);case 12:return t.next=14,o.a.awrap(Promise.all(l.promises));case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(9),t.abrupt("return",r.status(500));case 19:l.done=!0,y=c.a.renderToString(v),E=JSON.stringify(s.getState()).replace(/</g,"\\u003c"),O="<script>__PRELOADED_STATE__ = ".concat(E,"<\/script>"),j={scripts:O+d.getStyleTags(),links:d.getLinkTags(),styles:d.getStyleTags()},r.send(R(y,j));case 25:case"end":return t.stop()}}),null,null,[[9,16]])})),_.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);