(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Mg6v:function(e,t,a){e.exports=a.p+"static/nhcuong-296c43b8bd0e6938f2c1348b8774c30d.jpg"},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f})),a.d(t,"pageQuery",(function(){return g}));var n=a("zLVn"),l=a("q1tI"),r=a.n(l),c=a("Wbzz"),s=a("qhky"),i=a("7oih"),m=a("pD7v");a("jpra");a("fQ4w");var o=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"skill-name"},"React JS/ Next JS/ Redux / Redux-saga/ Redux-thunk"),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{className:"skills react-js"},"90%")),r.a.createElement("p",{className:"skill-name"},"Typescript"),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{className:"skills typescript"},"90%")),r.a.createElement("p",{className:"skill-name"},"JavaScript"),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{className:"skills js"},"90%")),r.a.createElement("p",{className:"skill-name"},"CSS"),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{className:"skills css"},"80%")),r.a.createElement("p",{className:"skill-name"},"SCSS"),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{className:"skills scss"},"80%")),r.a.createElement("div",{className:"my-cv"},"Here is ",r.a.createElement("a",{href:"https://www.topcv.vn/xem-cv/UQNRVFJTBwMABVNXU1BSXFAPUldWBFsGBVFUAg13ce"},"my CV")," if you want find more about me"))},u=a("EYWl"),d=a("L6NH"),E=a("Aeqt"),p=a("Mg6v"),v=a.n(p);function f(e){var t=e.data,a=t.latest.edges,p=t.popular.edges,f=Object(l.useMemo)((function(){return Object(d.a)(a)}),[a]),g=(Object(l.useMemo)((function(){return Object(d.a)(p)}),[p]),function(e){var t=e.title,a=e.children,l=e.button,s=Object(n.a)(e,["title","children","button"]);return r.a.createElement("section",s,r.a.createElement("h2",null,t,l&&r.a.createElement(c.Link,{className:"section-button",to:"/blog"},"View all")),a)});return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:E.a.siteTitle}),r.a.createElement(u.a,null),r.a.createElement("section",{className:"lead"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"copy"},r.a.createElement("div",{class:"typewriter"},r.a.createElement("h1",null,"Hello! I'm Mason.")),r.a.createElement("p",null,"I'm a front end developer. This website is a little part of my life. The good code was made with ❤️ and by 🙌"),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:cuong.nguyenhuu1997@gmail.com",target:"_blank",rel:"noreferrer",className:"button"},r.a.createElement("span",{className:"emoji"},"💌")," Contact to me"),r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfg1e-EZU3s5EJotrWram7_hjkx82vtJXU4aWABkSsaKMXZEQ/viewform?usp=sf_link",target:"_blank",rel:"noreferrer",className:"button secondary"},r.a.createElement("span",{className:"emoji"},"📣"),"Give Feedback"))),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:v.a,alt:"Tania"})))),r.a.createElement("div",{className:"container index"},r.a.createElement(g,{title:"Technical Stack"},r.a.createElement(o,null)),r.a.createElement(g,{title:"Latest Articles.",button:!0},r.a.createElement(m.a,{data:f,tags:!0,withDate:!0}))))}var g="58544404"},fQ4w:function(e,t,a){},jpra:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("9eSz"),s=a.n(c);function i(e){var t=e.data,a=function(e){var t=e.guide,a=e.children;return t.slug?l.a.createElement(r.Link,{key:t.id,to:t.slug},a):l.a.createElement("a",{key:t.id,href:t.path},a)};return l.a.createElement("div",{className:"grid guide"},t.map((function(e){return l.a.createElement(a,{key:e.id,guide:e},e.staticThumbnail?l.a.createElement("img",{src:e.staticThumbnail,alt:e.id,height:"50",width:"50"}):l.a.createElement(s.a,{fixed:e.thumbnail}),l.a.createElement("h2",null,e.title),e.description&&l.a.createElement("p",{className:"description"},e.description))})))}},pD7v:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("KQm4"),l=a("q1tI"),r=a.n(l),c=a("Wbzz"),s=a("L6NH"),i=function(e){var t=e.node,a=e.tags,n=e.withDate,l=new Date(t.date),i=new Date;i.setMonth(i.getMonth()-1);var m=!1;return l>i&&(m=!0),r.a.createElement("div",{className:"row "+(n?"":"narrow"),key:t.id},r.a.createElement(c.Link,{to:t.slug,className:"cell"},m&&r.a.createElement("div",{className:"new-post"},"New!"),r.a.createElement("div",null,n&&r.a.createElement("time",null,t.date),r.a.createElement("div",null,t.title))),a&&r.a.createElement("div",{className:"cell tags"},t.tags&&t.tags.map((function(e){return r.a.createElement(c.Link,{key:e,to:"/tags/"+Object(s.b)(e),className:"tag-"+e},e)}))))};function m(e){var t=e.data,a=e.tags,c=e.showYears,s=e.withDate,m={};t.forEach((function(e){var t=e.date.split(", ")[1];m[t]=[].concat(Object(n.a)(m[t]||[]),[e])}));var o=Object(l.useMemo)((function(){return Object.keys(m).reverse()}),[m]);return c?o.map((function(e){return r.a.createElement("section",{key:e},r.a.createElement("h2",null,e),r.a.createElement("div",{className:a?"grid posts with-tags":"grid posts"},m[e].map((function(e){return r.a.createElement(i,{key:e.id,node:e,tags:a,withDate:s})}))))})):r.a.createElement("div",{className:a?"grid posts with-tags":"grid posts"},t.map((function(e){return r.a.createElement(i,{key:e.id,node:e,tags:a,withDate:s})})))}},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-js-8efd379a11076619c8b3.js.map