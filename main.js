(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>b});var o=e(601),r=e.n(o),i=e(314),a=e.n(i),p=e(417),c=e.n(p),s=new URL(e(446),e.b),l=new URL(e(28),e.b),f=new URL(e(747),e.b),d=new URL(e(43),e.b),u=a()(r()),h=c()(s),m=c()(l),g=c()(f),x=c()(d);u.push([n.id,`*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n\n@font-face {\n  font-family: 'abril';\n  src: url(${h}) format('woff2'),\n       url(${m}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n\n}\n@font-face {\n  font-family: 'rubik';\n  src: url(${g}) format('woff2'),\n       url(${x}) format('woff');\n  font-weight: normal;\n  font-style: normal;\n\n}\n\nheader, main {\n  font-family: 'abril', serif;\n}\nheader{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: linear-gradient(145deg, rgb(0, 133, 178) 40%, white 25%);\n}\n.portrait-container{\n  position: relative;\n}\n.portrait {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.portrait>img{\n  margin-top: 30px;\n  width: calc(100% - 60px);\n  height: auto;\n  box-shadow: 3px 3px 3px darkslategray;\n}\n.portrait-text{\n  /* position: absolute; */\n  top: 500px;\n  color: white;\n  text-align: center;\n  font-size: 32px;\n  width: 100%;\n  transform: translateY(-100%);\n}\nh1 {\n  font-size: 30px;\n  text-align: center;\n}\n.aboutme{\n  margin: 0.5rem;\n  margin-top: 0;\n}\n.info {\n  font-family: 'rubik', serif;\n  font-size: 18px;\n  margin: 1rem;\n}\n.icons{\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.icon{\n  width: 3rem;\n  height: auto;\n}\n\n.work{\n  margin-top: 5rem;\n}\n.projects{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n.project{\n  margin: 20px;\n  flex: 1;\n  min-width: 320px;\n  max-width: 400px;\n  box-shadow: 3px 3px 3px grey, -1px 3px 3px grey;\n}\n.project-photo{\n  width: 100%;\n  height: 200px;\n  background-color: crimson;\n}\n.p-icon{\n  width: 2rem;\n  height: auto;\n  margin: 10px;\n}\n.project-flex{\n  display: flex;\n  justify-content: right;\n  align-items: center;\n}\n.project-name{\n  flex: 1;\n  margin-left: 1rem;\n}\n.project-info{\n  font-family: 'rubik', serif;\n  margin: 10px;\n  margin-bottom: 30px;\n}\n\nfooter{\n  background-color: rgb(0, 133, 178);\n}\n.footer-left{\n  color: white;\n  font-family: 'rubik', serif;\n  padding: 1rem;\n}\n.contact{\n  font-family: 'abril', serif;\n}\n.in-touch{\n  font-size: 20px;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n.phone {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.email {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.phone > .icon {\n  filter: brightness(0) invert(1);\n  width: 2rem;\n}\n.email > .icon {\n  filter: brightness(0) invert(1);\n  width: 2rem;\n}\n.footer-icons{\n  margin: 1rem;\n}\n.footer-portrait{\n  width: 100%;\n  height: auto;\n}\n\n.p1 >.project-photo-container > .project-photo {\n  background-color: crimson;\n  background-size: cover;\n}\n.p2 >.project-photo-container > .project-photo {\n  background-color: blue;\n  background-size: cover;\n}\n.p3 >.project-photo-container > .project-photo {\n  background-color: orange;\n  background-size: cover;\n}\n.p4 >.project-photo-container > .project-photo {\n  background-color: teal;\n  background-size: cover;\n}\n.p5 >.project-photo-container > .project-photo {\n  background-color: plum;\n  background-size: cover;\n}\n.p6 >.project-photo-container > .project-photo {\n  background-color: yellowgreen;\n  background-size: cover;\n}\n\n\n@media (min-width: 700px) {\n  header{\n    background: linear-gradient(160deg, rgb(0, 133, 178) 40%, white 25%);\n  }\n  .portrait{\n    width: 300px;\n    height: 350px;\n    float:left;\n    position: relative;\n    top: -100px\n  }\n  .portrait-text{\n    position: absolute;\n    left: 240px;\n    top: -70px;\n    font-size: 40px;\n    width: auto;\n    text-shadow: 1px 1px 1px black;\n    transform: translateY(0);\n  }\n  .bio-info{\n    background-color: white;\n    box-shadow: 3px 3px 3px grey, -1px 3px 3px grey;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .aboutme{\n    margin-top: 100px;\n  }\n  .bio-icons{\n    padding-bottom: 20px;\n  }\n  .work{\n    margin-top: 50px;\n    margin-left: 50px;\n    text-align: left;\n  }\n  footer {\n    display: flex;\n    align-items: center;\n  }\n  .footer-left{\n    flex: 1.5;\n    margin: 50px;\n    font-size: 20px;\n    margin-bottom: 0;\n  }\n  .fp-container{\n    width: 350px;\n    height: 400px;\n    overflow: hidden;\n    margin: 50px;\n  }\n  .footer-portrait{\n    width: 350px;\n    height: auto;\n  }\n  .in-touch{\n    font-size: 24px;\n  }\n  .project{\n    min-width: 300px;\n    max-width: 400px;\n  }\n  .project-info{\n    margin: 20px;\n  }\n\n}\n@media (min-width: 1100px){\n  h1{\n    font-size: 35px;\n    text-align: start;\n  }\n  header{\n    background: linear-gradient(170deg, rgb(0, 133, 178) 60%, white 25%);\n  }\n  .portrait-container{\n    margin: 60px;\n  }\n  .portrait{\n    width: 350px;\n    height: 400px;\n    float:left;\n    position: relative;\n    overflow: hidden;\n    top: 0px;\n    margin-right: 30px;\n    transform: scale(1.1);\n  }\n  .portrait > img{\n    width: 350px;\n    height: auto;\n    margin-top: 0;\n  }\n  .portrait-text{\n    left: -5px;\n    top: 320px;\n  }\n  .aboutme{\n    margin-top: 0;\n  }\n  .bio-info{\n    width: auto;\n    padding: 20px;\n  }\n  .project{\n    min-width: 25vw;\n    max-width: 30vw;\n  }\n  .work{\n    margin-top: 20px;\n  }\n  .footer-portrait{\n    width: 500px;\n    height: auto;\n  }\n  .fp-container{\n    width: 500px;\n    height: 500px;\n    margin: 20px;\n  }\n  .footer-icons{\n    justify-content: left;\n    margin-top: 20px;\n    margin-left: 0;\n  }\n}`,""]);const b=u},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],p=0;p<n.length;p++){var c=n[p],s=o.base?c[0]+o.base:c[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var d=e(f),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(u);else{var h=r(u,o);o.byIndex=p,t.splice(p,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var p=e(i[a]);t[p].references--}for(var c=o(n,r),s=0;s<i.length;s++){var l=e(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},28:(n,t,e)=>{n.exports=e.p+"0e5d915df16043d560a1.woff"},446:(n,t,e)=>{n.exports=e.p+"33e1bf46ace10a621369.woff2"},43:(n,t,e)=>{n.exports=e.p+"21091e3829098c9b595b.woff"},747:(n,t,e)=>{n.exports=e.p+"70b13c769d5c2d0dc37b.woff2"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var o=e(72),r=e.n(o),i=e(825),a=e.n(i),p=e(659),c=e.n(p),s=e(56),l=e.n(s),f=e(540),d=e.n(f),u=e(113),h=e.n(u),m=e(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),r()(m.A,g),m.A&&m.A.locals&&m.A.locals,console.log("test")})();