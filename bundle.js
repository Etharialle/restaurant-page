(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>C});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(417),d=t.n(s),c=new URL(t(22),t.b),p=new URL(t(843),t.b),l=new URL(t(808),t.b),u=new URL(t(167),t.b),h=new URL(t(369),t.b),f=i()(r()),m=d()(c),g=d()(p),v=d()(l),b=d()(u),y=d()(h);f.push([e.id,`@font-face {\n    font-family: "Starship Grunge";\n    src: url(${m}) format('truetype');\n    font-style: normal;\n    font-weight: 400;\n}\n@font-face {\n   font-family: "shire";\n   src: url(${g}) format('truetype');\n   font-style: normal;\n   font-weight: 400;\n}\n\n* {\n   margin: 0;\n   padding: 0;\n   /*outline: #00FF00 solid 1px;*/\n   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\nbody {\n   height: 100svh;\n   display: flex;\n   flex-direction: column;\n   align-items: stretch;\n   justify-content: flex-start;\n   /*background-color: #5ed45e;*/\n   margin: 0 auto;\n   color: rgb(247, 247, 247);\n   max-width: 80rem;\n   gap: 2rem;\n   background: url(${v});\n   background-position: center;\n   background-size: cover;   \n   background-blend-mode: soft-light;\n   font-size: 1.5rem;\n}\n.lotr-bg-color {\n   background-color: rgb(82, 26, 0, 80%);\n   max-width: 80rem;\n}\nheader {\n   /*max-height: 8rem;*/\n   margin: 2rem;\n   display: flex;\n   justify-content: center;\n}\nnav {\n   display: flex;\n   gap: 1rem 5rem;\n   font-size: 3rem;\n   /*background-color: #459c45;*/\n   flex-wrap: wrap;\n   justify-content: center;\n}\n.nav-button {\n   outline: rgb(120, 161, 143) outset 4px;\n   background-color: rgb(89, 49, 57);\n}\n.nav-button:hover {\n   outline: rgb(120, 161, 143) inset 4px;\n   cursor: pointer;\n}\n.nav-button:active {\n   outline: rgb(120, 161, 143) inset 4px;\n   background-color: rgb(86, 110, 0);\n   cursor: pointer;\n}\n\nh1 {\n   font-family: "shire";\n   font-size: 4rem;\n   text-align: center;\n\n}\nh2 {\n   font-family: "shire";\n   font-size: 3rem;\n   text-align: center;\n\n}\nhr {\n   border: rgb(247, 247, 247) inset 2px;\n   \n   margin: 0 2rem;\n}\n.content {\n   display: flex;\n   justify-content: center;\n   \n}\n.main-text {\n   padding: 0 2rem;\n}\np {\n   margin-top: 2rem;\n   margin-bottom: 2rem;\n}\n#diner-inside {\n   content: url(${b});\n   float: right;\n   margin: 2rem;\n}\n.item {\n   margin: 2rem;\n}\n.item-top {\n   display: flex;\n   justify-content: space-between;\n}\n.item-name {\n\n}\n.item-price {\n   font-weight: 600;\n}\n.item-description {\n   font-size: 1rem;\n   font-style: italic;\n}\n.footer {\n   background-color: rgb(54, 36, 22, 80%);\n   display: flex;\n   justify-content: center;\n}\n.footer > * {\n   margin: .5rem;\n}\n#map {\n   content: url(${y});\n   float: right;\n   margin: 2rem;\n   max-width: 800px;\n}`,""]);const C=f},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],p=a[c]||0,l="".concat(c," ").concat(p);a[c]=p+1;var u=t(l),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=r(h,o);o.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=o(e,r),c=0;c<a.length;c++){var p=t(a[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},22:(e,n,t)=>{e.exports=t.p+"b1be048bd1cd5acf1927.ttf"},808:(e,n,t)=>{e.exports=t.p+"9be33e2cec5674e56e49.jpg"},167:(e,n,t)=>{e.exports=t.p+"193a29df1251b11c78c9.png"},843:(e,n,t)=>{e.exports=t.p+"a889b0dc7554f863506b.ttf"},369:(e,n,t)=>{e.exports=t.p+"58e8e63908a6ba87f322.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{t:()=>y});var e=t(72),n=t.n(e),r=t(825),a=t.n(r),i=t(659),s=t.n(i),d=t(56),c=t.n(d),p=t(540),l=t.n(p),u=t(113),h=t.n(u),f=t(208),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;const g=function(e){let n=[];for(const e of[["div",,,"content"],["h1",,"Sam's Potato Diner"],["hr"],["div","main-text"],["p",,"Welcome to Sam's Potato Diner! Here, we celebrate the humble spud, taking inspiration from the legendary hobbit, Samwise Gamgee. Just like Sam kept Frodo going on their long journey with his hearty potato creations, we bring you delicious and comforting potato dishes that will satisfy every craving."],["img",,,"diner-inside"],["p",,"Sam understood the magic of a good potato. Simple yet versatile, it can be roasted, mashed, fried, boiled, and transformed into countless satisfying meals. Our menu reflects this variety, offering breakfast favorites like Potato Cakes with Poached Eggs and Smoked Salmon, to lunch classics like Sam's Famous Shepherd's Pie."],["p",,"We also pay homage to the Shire with some menu items straight out of Tolkien's world. Craving something Bilbo would have enjoyed? Try our Second Breakfast Platter, a medley of potato hash, fried eggs, sausages, and toast. Feeling peckish for an elevenses snack? Grab a piping hot Potato and Leek Soup or a plate of our savory Potato Skins."],["p",,"At Sam's Potato Diner, we believe in good, honest food made with fresh ingredients. Just like Sam nurtured Frodo with his culinary skills, we aim to nourish your body and soul with every delicious potato dish we serve. So come on in, grab a seat, and let us take you on a delightful potato adventure!"],["p",,"P.S. We haven't forgotten about dessert! We offer a selection of potato-inspired sweets, because who says potatoes can't be part of a happy ending?"]]){const t=y(...e);n.push(t)}return n[3].appendChild(n[4]),n[3].appendChild(n[5]),n[3].appendChild(n[6]),n[3].appendChild(n[7]),n[3].appendChild(n[8]),n[3].appendChild(n[9]),n[0].appendChild(n[1]),n[0].appendChild(n[2]),n[0].appendChild(n[3]),n[0]}(),v=function(e){let n=[];for(const e of[["div",,,"content"],["h1",,"Sam's Potato Diner"],["hr"],["div","main-text"],["h2",,"Menu"],["div","item"],["div","item-top"],["div","item-name","Potato Cakes and Poached Egg"],["div","item-price","5 dollarbucks"],["div","item-description","These golden-crusted pancakes are made from a fluffy mix of mashed potatoes, scallions, and a touch of cheese. Pan-fried to crispy perfection, they are crowned with perfectly poached eggs, a dollop of creamy hollandaise sauce, and a sprinkle of fresh chives. A delightful and protein-packed way to start your day."],["div","item"],["div","item-top"],["div","item-name","Second Breakfast Platter"],["div","item-price","10 dollarbucks"],["div","item-description","A hobbit's heart (and stomach) will rejoice! This hearty platter features a base of crispy potato hash seasoned with onions, peppers, and herbs. Two sunny-side up eggs rest on top, alongside plump sausages and a slice of toasted sourdough bread. A perfect way to refuel for any adventure, big or small."]]){const t=y(...e);n.push(t)}return n[6].appendChild(n[7]),n[6].appendChild(n[8]),n[5].appendChild(n[6]),n[5].appendChild(n[9]),n[11].appendChild(n[12]),n[11].appendChild(n[13]),n[10].appendChild(n[11]),n[10].appendChild(n[14]),n[0].appendChild(n[1]),n[0].appendChild(n[2]),n[0].appendChild(n[3]),n[0].appendChild(n[4]),n[0].appendChild(n[5]),n[0].appendChild(n[10]),n[0]}(),b=function(e){let n=[];for(const e of[["div",,,"content"],["h1",,"Sam's Potato Diner"],["hr"],["div","main-text"],["h2",,"Locations"],["div","content main-text"],["p",,"Join us at one of our two locations, Hobbiton and Ithilien"],["img",,,"map"]]){const t=y(...e);n.push(t)}return n[5].appendChild(n[6]),n[5].appendChild(n[7]),n[0].appendChild(n[1]),n[0].appendChild(n[2]),n[0].appendChild(n[3]),n[0].appendChild(n[4]),n[0].appendChild(n[5]),n[0]}();function y(e,n,t,o){const r=document.createElement(e);return n&&(r.className=n),o&&(r.id=o),t&&(r.textContent=t),r}const C=function(e){let n=[];for(const e of[["header"],["nav"],["div","nav-button","Home","home-button"],["div","nav-button","Menu","menu-button"],["div","nav-button","Location","location-button"]]){const t=y(...e);n.push(t)}return n[1].appendChild(n[2]),n[1].appendChild(n[3]),n[1].appendChild(n[4]),n[0].appendChild(n[1]),n[0]}(),w=document.querySelector(".lotr-bg-color");w.appendChild(C),w.appendChild(g);const x=document.querySelectorAll(".nav-button");for(const e of x)document.querySelector("#content"),e.addEventListener("click",(()=>{"menu-button"===e.id?(w.replaceChildren(),w.appendChild(C),w.appendChild(v)):"location-button"===e.id?(w.replaceChildren(),w.appendChild(C),w.appendChild(b)):(w.replaceChildren(),w.appendChild(C),w.appendChild(g))}))})()})();