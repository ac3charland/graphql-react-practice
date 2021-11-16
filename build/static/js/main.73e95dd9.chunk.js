(this["webpackJsonpgraphql-react-practice"]=this["webpackJsonpgraphql-react-practice"]||[]).push([[0],{55:function(e,a,t){e.exports=t(70)},64:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var c,n,r=t(2),o=t.n(r),l=t(46),s=t.n(l),i=t(25),m=t(6),d=t(84),h=t(37),u=t(82);const p=Object(u.a)(c||(c=Object(h.a)(['\nquery GetFilms {\n  films(sort: "year") {\n    title\n    director\n    yearReleased\n    image\n  }\n}\n']))),E=Object(u.a)(n||(n=Object(h.a)(["\nquery GetFilm($title: String!) {\n  films(find: {title: $title}) {\n    title\n    director\n    yearReleased\n    image\n    banner\n    description\n    producer\n    runningTime\n    rtScore\n  }\n}\n"])));var _=t(52);t(64);const b="film-page";var g=()=>{let e=function(){const{search:e}=Object(m.f)();return o.a.useMemo(()=>new URLSearchParams(e),[e])}().get("title");const{state:a}=Object(r.useContext)(w),{loading:t,data:c}=Object(d.a)(E,{variables:{title:e}});if(t)return o.a.createElement("div",{className:b,style:{backgroundColor:a.backgroundColor}});const{title:n,image:l,banner:s,director:h,producer:u,yearReleased:p,description:g,rtScore:f}=null===c||void 0===c?void 0:c.films[0];return o.a.createElement("div",{className:b,style:{backgroundColor:a.backgroundColor}},o.a.createElement(i.b,{className:"".concat(b,"__back"),to:"/"},o.a.createElement(_.a,{size:50,color:"white"})),o.a.createElement("div",{className:"".concat(b,"__banner-container")},o.a.createElement("img",{src:s,alt:"Banner for ".concat(n)})),o.a.createElement("div",{className:"".concat(b,"__below-banner")},o.a.createElement("div",{className:"".concat(b,"__poster-container")},o.a.createElement("img",{src:l,alt:"Poster for ".concat(n)})),o.a.createElement("div",{className:"".concat(b,"__text-wrapper")},o.a.createElement("h1",{className:"".concat(b,"__title")},n),o.a.createElement("h2",{className:"".concat(b,"__released")},p),o.a.createElement("div",{className:"".concat(b,"__description")},g),o.a.createElement("h2",{className:"".concat(b,"__rt-score")},"Rotten Tomatoes: ",f),o.a.createElement("h2",{className:"".concat(b,"__creator")},"Directed by ",h),o.a.createElement("h2",{className:"".concat(b,"__creator")},"Produced by ",u))))},f=t(50);t(66);var v=e=>{let{title:a,director:t,image:c,yearReleased:n}=e;const[l,s]=Object(r.useState)("#444"),{dispatch:m}=Object(r.useContext)(w);Object(r.useEffect)(()=>{(new f.a).getColorAsync(c).then(e=>{s(e.hex)})},[]);return o.a.createElement(i.b,{to:"/film?title=".concat(a),className:"film-tile",onMouseEnter:()=>{m({type:"set",payload:l})}},o.a.createElement("img",{className:"".concat("film-tile","__poster"),src:c,alt:"Poster for ".concat(a)}),o.a.createElement("div",{className:"".concat("film-tile","__text-wrapper")},o.a.createElement("h2",null,a," (",n,")"),o.a.createElement("h3",null,"Dir. ",t)))};t(67);var N=()=>{const{data:e}=Object(d.a)(p),{state:a}=Object(r.useContext)(w);return o.a.createElement("div",{className:"home",style:{backgroundColor:a.backgroundColor}},o.a.createElement("div",{className:"".concat("home","__title-wrapper")},o.a.createElement("h1",{className:"".concat("home","__heading")},"GhibliQL"),o.a.createElement("h2",{className:"".concat("home","__description")},"A GraphQL-powered catalog by ",o.a.createElement("a",{href:"https://github.com/ac3charland"},"Alex Charland")),o.a.createElement("h2",{className:"".concat("home","__repos")},o.a.createElement("a",{href:"https://github.com/ac3charland/graphql-react-practice"},"Frontend Code"),o.a.createElement("a",{href:"https://github.com/ac3charland/graphql-practice"},"Backend Code"))),o.a.createElement("div",{className:"".concat("home","__tiles-wrapper")},e&&e.films.map((e,a)=>o.a.createElement(v,Object.assign({key:"film-".concat(a)},e)))))};t(68);function y(){return o.a.createElement("div",{className:"secondary"},o.a.createElement("h1",{className:"".concat("secondary","__heading")},"Short secondary page!"),o.a.createElement("p",null,"(Footer sticks to bottom)"))}const w=o.a.createContext();function O(e,a){switch(a.type){case"set":return{...e,backgroundColor:a.payload};default:throw new Error}}const C={backgroundColor:"#444"};var k=()=>{const[e,a]=Object(r.useReducer)(O,C);return o.a.createElement(o.a.StrictMode,null,o.a.createElement(w.Provider,{value:{state:e,dispatch:a}},o.a.createElement(i.a,null,o.a.createElement("div",{className:"page-wrapper"},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:N}),o.a.createElement(m.a,{path:"/film",component:g}),o.a.createElement(m.a,{exact:!0,path:"/secondary",component:y}))))))};t(69);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(81),S=t(83),R=t(80);const x=new j.a({uri:Object({NODE_ENV:"production",PUBLIC_URL:"/graphql-react-practice",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URI||"http://localhost:4000",cache:new S.a});s.a.render(o.a.createElement(R.a,{client:x},o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[55,1,2]]]);
//# sourceMappingURL=main.73e95dd9.chunk.js.map