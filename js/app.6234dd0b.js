(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cf82a2d4","chunk-3dde3dc8":"41a523d9","chunk-d2f28a9c":"af947846"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-3dde3dc8":1,"chunk-d2f28a9c":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"2f16ef3b","chunk-3dde3dc8":"43a03df8","chunk-d2f28a9c":"f8b1cfb7"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"24ab":function(t,e,a){"use strict";a("8ac0")},"3e6b":function(t,e,a){},"4a0b":function(t,e,a){"use strict";a("3e6b")},"72c4":function(t,e,a){"use strict";a("f7b2")},"8ac0":function(t,e,a){},"927c":function(t,e,a){},9614:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{staticClass:"navbar",attrs:{toggleable:"sm",type:"dark",sticky:""}},[a("b-navbar-toggle",{attrs:{target:"navbar-toggle-collapse"}}),a("b-collapse",{attrs:{id:"navbar-toggle-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"mx-auto navbar-nav",attrs:{fill:""}},[a("b-nav-item",{staticClass:"mx-4"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("b-nav-item",{staticClass:"mx-4"},[a("router-link",{attrs:{to:"/about"}},[t._v("About Me")])],1),a("b-nav-item",{staticClass:"mx-4"},[a("router-link",{attrs:{to:"/work"}},[t._v("Work")])],1),a("b-nav-item",{staticClass:"mx-4"},[a("router-link",{attrs:{to:"/contact"}},[t._v("Contact Me")])],1)],1)],1)],1),a("router-view")],1)},o=[],i=(a("24ab"),a("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,"5f6382c4",null),l=c.exports,u=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Heading"),t._m(0),t._m(1),t._m(2),a("Footer")],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"about-me"}},[n("div",{staticClass:"row section dark-blue text-center"},[n("div",{staticClass:"col",staticStyle:{margin:"auto"}},[n("img",{attrs:{src:a("d096"),alt:"My Profile Picture"}}),n("h2",[t._v("Hello!")]),n("p",[t._v(" I'm a software dev engineer at Amazon, India. I love watching movies and T.V. series. I also like sketching, reading, and (sometimes) writing. I also like talking about minimalism and productivity. ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"projects"}},[a("div",{staticClass:"row section light-blue text-center"},[a("div",{staticClass:"col",staticStyle:{margin:"auto"}},[a("h2",[t._v("Projects")]),a("p",[t._v(" I am familiar with web development, as well as android development. You can check out "),a("a",{staticClass:"link",attrs:{href:"https://github.com/monilSoni"}},[t._v("my GitHub profile")]),t._v(" and "),a("a",{staticClass:"link",attrs:{href:"https://drive.google.com/file/d/1yGWxtctbBk3ObBaHaXNN9x3RTxpMtxbS/view?usp=sharing"}},[t._v("my resume")]),t._v(". I am a casual Vim user - that is I prefer using Vim keybindings in whatever IDE I use but, I am not yet at the stage where I can make Vim my IDE (someday, hopefully). ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"contact-me"}},[a("div",{staticClass:"row section dark-blue text-center"},[a("div",{staticClass:"col",staticStyle:{margin:"auto"}},[a("h2",[t._v("Contact Me")]),a("p",[t._v(" Is there something I can help you with? Or do you want to just chat over a cup of coffee? Please feel free to reach out :) ")]),a("a",{staticStyle:{"margin-top":"20px"},attrs:{href:"mailto:monilsoni99@gmail.com"}},[t._v("Message Me!")])])])])}],m=a("d4ec"),v=a("262e"),p=a("2caf"),h=a("9ab4"),b=a("60a3"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row heading text-center"},[a("div",{staticClass:"col",staticStyle:{margin:"auto"}},[a("h1",[t._v("I'm Monil")]),a("h2",[t._v("A Software Development Engineer")])])])])])}],y=function(t){Object(v["a"])(a,t);var e=Object(p["a"])(a);function a(){return Object(m["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]),w=y,k=(a("4a0b"),Object(i["a"])(w,g,_,!1,null,"3585437e",null)),C=k.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-main"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row footer text-center"},[a("div",{staticClass:"col",staticStyle:{margin:"auto"}},[a("a",{staticClass:"footer-link mx-4",attrs:{href:"https://www.instagram.com/monilsoni99"}},[t._v("Instagram")]),a("a",{staticClass:"footer-link mx-4",attrs:{href:"https://www.linkedin.com/in/monilsoni"}},[t._v("LinkedIn")]),a("a",{staticClass:"footer-link mx-4",attrs:{href:"https://github.com/monilSoni"}},[t._v("GitHub")]),a("p",{staticClass:"copyright"},[t._v("© 2020 Monil Soni")])])])])])}],O=(a("72c4"),{}),E=Object(i["a"])(O,x,j,!1,null,"d989ae7a",null),S=E.exports,I=function(t){Object(v["a"])(a,t);var e=Object(p["a"])(a);function a(){return Object(m["a"])(this,a),e.apply(this,arguments)}return a}(b["b"]);I=Object(h["a"])([Object(b["a"])({components:{Heading:C,Footer:S}})],I);var P=I,M=P,A=(a("da66"),Object(i["a"])(M,f,d,!1,null,"3776cd5f",null)),T=A.exports;n["default"].use(u["a"]);var $=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/work",name:"Work",component:function(){return a.e("chunk-d2f28a9c").then(a.bind(null,"f126"))}},{path:"/contact",name:"Contact",component:function(){return a.e("chunk-3dde3dc8").then(a.bind(null,"b8fa"))}}],H=new u["a"]({routes:$}),N=H,L=a("2f62");n["default"].use(L["a"]);var B=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=a("5f5b");a("f9e3"),a("2dd8"),a("927c");n["default"].config.productionTip=!1,n["default"].use(D["a"]),new n["default"]({router:N,store:B,render:function(t){return t(l)}}).$mount("#app")},d096:function(t,e,a){t.exports=a.p+"img/monil.6c3ca32e.png"},da66:function(t,e,a){"use strict";a("9614")},f7b2:function(t,e,a){}});
//# sourceMappingURL=app.6234dd0b.js.map