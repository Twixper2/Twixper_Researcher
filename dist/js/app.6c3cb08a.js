(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1807eba0":"9e28402d","chunk-2a44ac81":"510d9c3f","chunk-56e7d149":"e4c072f2","chunk-7e6e1d36":"48555882"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-1807eba0":1,"chunk-2a44ac81":1,"chunk-56e7d149":1,"chunk-7e6e1d36":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1807eba0":"441d3e8e","chunk-2a44ac81":"f408a6ca","chunk-56e7d149":"6db64c79","chunk-7e6e1d36":"4cf755e0"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],d.parentNode.removeChild(d),r(s)},d.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0592":function(e,t,r){e.exports=r.p+"img/mobile_app_shadow.51eef72e.png"},"0898":function(e,t,r){},"0fe1":function(e,t,r){e.exports=r.p+"img/right-arrow.d32e7aa5.png"},1509:function(e,t,r){"use strict";r("0898")},"398a":function(e,t,r){"use strict";r("4773")},4773:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("1da1"),o=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("input",{attrs:{type:"checkbox",id:"check"}}),e._m(0),n("img",{staticClass:"logo-img",attrs:{src:r("a35e")},on:{click:function(t){return e.clickedLogo()}}}),n("ul",{ref:"menuContainer",staticClass:"menu-container"},[n("b-nav-item",{attrs:{to:{name:"Home"}}},[e._v(" Home ")]),e.$root.store.registeredUser?n("span",{staticClass:"seperator"},[e._v("·")]):e._e(),e.$root.store.registeredUser?n("li",{staticClass:"dd"},[n("label",{staticClass:"showDd",attrs:{for:"btn-1"}},[e._v("My Experiments +")]),n("b-nav-item",{attrs:{to:{name:"MyExperiments"}}},[e._v("My Experiments ")]),n("input",{attrs:{type:"checkbox",id:"btn-1"}}),n("ul",{staticClass:"ddUl"},[n("b-nav-item",{attrs:{to:{name:"MyExperiments"}}},[e._v("Active ")]),n("b-nav-item",{attrs:{to:{name:"MyExperiments"}}},[e._v("Drafts")])],1)],1):e._e(),e.$root.store.registeredUser?n("span",{staticClass:"seperator"},[e._v("·")]):e._e(),e.$root.store.registeredUser?n("b-nav-item",{attrs:{to:{name:"NewExperiment"}}},[e._v(" New Experiment ")]):e._e(),e.$root.store.registeredUser?e._e():n("span",{staticClass:"seperator"},[e._v("·")]),e.$root.store.registeredUser?e._e():n("b-nav-item",{attrs:{to:{name:"Register"}}},[e._v(" Sign in ")]),e.$root.store.registeredUser?n("span",{staticClass:"seperator"},[e._v("·")]):e._e(),e.$root.store.registeredUser?n("b-nav-item",{staticClass:"profile-nav"},[n("i",{staticClass:"fas fa-user-circle"}),e._v(" "+e._s(e.$root.store.userEntity.googleUsername)+" ")]):e._e(),e.$root.store.registeredUser?n("span",{staticClass:"seperator"},[e._v("·")]):e._e(),n("b-nav-item",{attrs:{hidden:!e.$root.store.registeredUser}},[n("GoogleLogin",{ref:"googleLoginComp",staticClass:"nav-link",attrs:{params:e.params,logoutButton:!0,onCurrentUser:e.googleOnCurrentUser,onUserNotSignedWithGoogle:e.userNotSignedWithGoogle,onSuccess:e.onLogoutSuccess,onFailure:e.onLogoutFailure,onGoogleLoadErr:e.googleLoadErr}},[e._v(" Logout ")])],1)],1)]),n("div",{staticClass:"router-view-grid"},[n("div",{staticClass:"router-view-container"},[n("router-view")],1)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"checkbtn",attrs:{for:"check"}},[r("i",{staticClass:"fas fa-bars"})])}],i=(r("b0c0"),r("6957")),c=r("6ef4"),u={components:{GoogleLogin:i["a"]},data:function(){return{showNavMenu:!1,googleUsername:null,params:{client_id:"105647083801-7qk2nf7vjch7td085d8hb5edrdgbotnd.apps.googleusercontent.com"}}},watch:{showNavMenu:function(e){e&&this.$refs.menuContainer.classList.add("show")}},methods:{userNotSignedWithGoogle:function(){console.log("not signed"),this.showNavMenu=!0,this.$root.store.setRegisteredState(!1)},googleOnCurrentUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,o,a,s,i,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(console.log("signed"),null!=localStorage.getItem("researcher_id")){r.next=5;break}return t.$refs.googleLoginComp.forceLogout(),t.showNavMenu=!0,r.abrupt("return");case 5:return r.next=7,Object(c["serverValidateSession"])();case 7:n=r.sent,200==n.status?1==n.data.hasSession?(t.$root.store.setRegisteredState(!0),null==localStorage.getItem["userEntity"]&&(o=e.getBasicProfile(),a=o.getName(),s=o.getImageUrl(),i=o.getEmail(),u={googleUsername:a,googleImgUrl:s,googleEmail:i},localStorage.setItem("userEntity",JSON.stringify(u)),t.googleUsername=a)):(console.log("Invalid server cookie, forcing logout from google"),t.$refs.googleLoginComp.forceLogout()):console.log("Server error while checking the cookie"),t.showNavMenu=!0;case 10:case"end":return r.stop()}}),r)})))()},onLogoutSuccess:function(){localStorage.removeItem("userEntity"),localStorage.removeItem("researcher_id"),this.$root.store.setRegisteredState(!1),this.$root.toast("Logout","Logged out successfully","success"),"Home"==this.$route.name?window.location.reload():this.$router.push("/")},onLogoutFailure:function(e){console.log(e)},googleLoadErr:function(e){this.showNavMenu=!0},clickedLogo:function(){"Home"!=this.$route.name&&"default"!=this.$route.name&&this.$router.push("/")}}},l=u,p=(r("66c0"),r("5c64"),r("2877")),d=Object(p["a"])(l,a,s,!1,null,"1505f754",null),g=d.exports,f=r("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-wrapper"},[n("div",{staticClass:"system-description"},[n("div",{staticClass:"system-description-inner-wrapper"},[n("div",{ref:"descriptionDiv",staticClass:"description"},[e._m(0),n("br"),e._v(" Run experiments on Twitter users with manipulations on the content they see. "),n("br"),n("b",[e._v("Start now.")]),n("br"),e._v(" "),n("br"),e.isGuest?n("div",{staticClass:"register-invitation-container"},[n("RegisterComponent",{on:{"login-success":e.googleLoginSuccess}})],1):n("div",{staticClass:"create-exp-btn-container"},[n("b-button",{staticClass:"shadow-none",attrs:{variant:"info"},on:{click:function(t){return e.navigateToCreateExp()}}},[e._v(" Create New Experiment ")])],1)]),n("div",{staticClass:"app-img-container"},[n("img",{ref:"appImg",attrs:{id:"app-img",src:r("0592")},on:{load:function(t){return e.appImgLoaded()}}})])]),n("div",{ref:"cardsContainer",staticClass:"cards-container"},[e._m(1),n("b-tooltip",{attrs:{target:"card-1",triggers:"hover"}},[e._v(" After you login, you can create experiments with multiple groups in each. ")]),e._m(2),e._m(3),n("b-tooltip",{attrs:{target:"card-2",triggers:"hover"}},[e._v(" For every group, choose the manipulations and the size in percents. ")]),e._m(4),e._m(5),n("b-tooltip",{attrs:{target:"card-3",triggers:"hover"}},[e._v(" After activating the experiment, you'll get an experiment code for the participant to enter in Twixper for Participants. We link each participant to a group while maintianing the percentege you chose. ")]),e._m(6),e._m(7),n("b-tooltip",{attrs:{target:"card-4",triggers:"hover"}},[e._v(" You will be able to download a report with all the data collected in the experiment (contents users saw and their interaction with it). ")])],1)]),n("br"),e._m(8)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[r("b",[e._v("Twitter Experimentation "),r("br"),e._v(" at Your Fingertips.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container",attrs:{id:"card-1"}},[n("div",{staticClass:"card-img-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("cee1")}})]),n("div",{staticClass:"card-text-container"},[n("h2",[e._v("Create an experiment")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"arrow-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("0fe1")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container",attrs:{id:"card-2"}},[n("div",{staticClass:"card-img-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("bac1")}})]),n("div",{staticClass:"card-text-container"},[n("h2",[e._v("Choose manipulations")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"arrow-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("0fe1")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container",attrs:{id:"card-3"}},[n("div",{staticClass:"card-img-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("c179")}})]),n("div",{staticClass:"card-text-container"},[n("h2",[e._v("Invite participants")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"arrow-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("0fe1")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container",attrs:{id:"card-4"}},[n("div",{staticClass:"card-img-container"},[n("img",{staticClass:"home-explaination-img",attrs:{src:r("a31d")}})]),n("div",{staticClass:"card-text-container"},[n("h2",[e._v("Download report")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer-basic"},[r("footer",[r("p",{staticClass:"copyright"},[e._v("Created by Nir Dzouraev, Tal Frimerman and Dekel Levy. Project is guided by Dr. Nir Grinberg. ")])])])}],v=(r("159b"),r("5829")),b={components:{RegisterComponent:v["a"]},data:function(){return{isGuest:null==localStorage.getItem("userEntity")}},mounted:function(){var e=this;setTimeout((function(){e.$refs.descriptionDiv.classList.add("show"),e.$refs.cardsContainer.classList.add("show")}),1),document.querySelectorAll(".home-explaination-img").forEach((function(e){e.addEventListener("load",w)}))},beforeDestroy:function(){document.querySelectorAll(".home-explaination-img").forEach((function(e){e.removeEventListener("load",w)}))},methods:{appImgLoaded:function(){var e=this;this.$nextTick((function(){e.$refs.appImg.classList.add("show")}))},googleLoginSuccess:function(){this.isGuest=!1},getOffset:function(e){var t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}},navigateToCreateExp:function(){this.$router.push("newExperiment")}}};function w(){var e=this;setTimeout((function(){e.classList.add("loaded")}),1)}var x=b,y=(r("f674"),Object(p["a"])(x,m,h,!1,null,"20c6f5f4",null)),_=y.exports;o["default"].use(f["a"]);var C=[{path:"/",name:"Home",component:_},{path:"/register",name:"Register",component:function(){return r.e("chunk-2a44ac81").then(r.bind(null,"56b4"))}},{path:"/myExperiments",name:"MyExperiments",component:function(){return r.e("chunk-56e7d149").then(r.bind(null,"ed9d"))}},{path:"/newExperiment",name:"NewExperiment",component:function(){return r.e("chunk-7e6e1d36").then(r.bind(null,"dc9c"))}},{path:"*",name:"notFound",component:function(){return r.e("chunk-1807eba0").then(r.bind(null,"aa4b"))}}],k=new f["a"]({routes:C}),E=k,R=r("5f5b");r("f9e3"),r("2dd8");o["default"].use(R["a"]),o["default"].config.productionTip=!1;var S={registeredUser:!1,userEntity:null,isWaitingForReport:!1,setRegisteredState:function(e){this.registeredUser=e,e?this.userEntity=JSON.parse(localStorage.getItem("userEntity")):(localStorage.removeItem("userEntity"),this.userEntity=null)}},L=r("db49"),O=L.isProduction;new o["default"]({router:E,data:function(){return{store:S,reportLoaderElem:document.createElement("div"),reportLoaderStyle:{position:"fixed",bottom:"1px",right:0,display:"flex",justifyContent:"space-around",alignItems:"center",background:"white",height:"15vh",width:"20vw",padding:"5px 8px",borderRadius:"15px 0 0 0",boxShadow:"rgb(79 163 255 / 79%) 0px 0px 18px, rgb(184 198 213) 0px 10px 10px",fontSize:"2.1rem",textAlign:"center",zIndex:999},spinnerContainerStyle:{height:"95%",width:"20%"},reportLoaderInnerHtml:"<div id='spinnerContainer'> </div><span> Processing report... </span>"}},created:function(){for(var e in this.reportLoaderStyle)this.reportLoaderElem.style[e]=this.reportLoaderStyle[e];this.reportLoaderElem.innerHTML=this.reportLoaderInnerHtml},methods:{askReportUntilReady:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a,s,i,u,l,p,d,g,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.store.isWaitingForReport=!0,!O){r.next=8;break}return r.next=4,Object(c["serverGetExpReport"])(e);case 4:return o=r.sent,a=o.status,200==a?(t.downloadZipFromResponse(o),t.reportLoaderElem.remove(),setTimeout((function(){t.hideMsgBox("reportInProcessOkModal")}),700),t.store.isWaitingForReport=!1):(t.store.isWaitingForReport=!1,t.reportLoaderElem.remove(),t.hideMsgBox("reportInProcessOkModal"),t.showOkMsgBox("Error "+a,"There was an error. Please try again later")),r.abrupt("return");case 8:s=!1,i=!1,u=42e4,l=7e3,p=3,d=2e4,g=0,f=setInterval(Object(n["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("Checking on report "+g),r.next=3,Object(c["serverGetReportIfReady"])(e);case 3:n=r.sent,o=n.status,200==o?(s=!0,t.downloadZipFromResponse(n)):102!=o&&(t.showOkMsgBox("Error "+o,"There was an error. Please try again later"),i=!0),g+=l,(s||i||g>=l*p)&&(t.store.isWaitingForReport=!1,t.reportLoaderElem.remove(),clearInterval(f));case 8:case"end":return r.stop()}}),r)}))),l),setTimeout((function(){if(!s&&!i)var r=setInterval(Object(n["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("Checking on report "+g),n.next=3,Object(c["serverGetReportIfReady"])(e);case 3:o=n.sent,a=o.status,200==a?(s=!0,t.downloadZipFromResponse(o)):102!=a&&(t.showOkMsgBox("Error "+a,"There was an error. Please try again later."),i=!0),g+=d,(1==s||i||g>=u)&&(t.store.isWaitingForReport=!1,t.reportLoaderElem.remove(),clearInterval(r),s||t.showOkMsgBox("Error","Our server did not send the report. Please try again later."));case 8:case"end":return n.stop()}}),n)}))),d)}),p*l);case 17:case"end":return r.stop()}}),r)})))()},downloadZipFromResponse:function(e){console.log(e);var t=window.URL.createObjectURL(new Blob([e.data],{type:"application/zip"})),r=document.createElement("a");r.href=t,r.setAttribute("download","Experiment Report.zip"),document.body.appendChild(r),r.click()},toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,toastClass:"toast-popup-custom",autoHideDelay:2e3})},showOkMsgBox:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Got it",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"modalId",a=this.$createElement,s=a("div",{domProps:{innerHTML:t}}),i=["modal-custom"],c=["modal-header-custom"],u=this;this.$bvModal.msgBoxOk([s],{title:e,id:o,size:"md",buttonSize:"lg",okVariant:"success",okTitle:n,centered:!0,modalClass:i,headerClass:c,footerClass:"msgbox-footer-custom"}).then((function(e){return"reportInProcessOkModal"==o&&u.store.isWaitingForReport&&document.body.appendChild(r.reportLoaderElem),e})).catch((function(e){console.log(e)}))},hideMsgBox:function(e){this.$bvModal.hide(e)}},render:function(e){return e(g)}}).$mount("#app")},5829:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-comp-wrapper"},[r("div",{staticClass:"google-btn-container"},[r("GoogleLogin",{ref:"googleLoginComp",attrs:{params:e.params,renderParams:e.renderParams,onSuccess:e.onSuccess,onFailure:e.onFailure}})],1),r("br"),r("br")])},o=[],a=r("1da1"),s=(r("96cf"),r("b0c0"),r("6957")),i=r("6ef4"),c={components:{GoogleLogin:s["a"]},data:function(){return{params:{client_id:"105647083801-7qk2nf7vjch7td085d8hb5edrdgbotnd.apps.googleusercontent.com"},renderParams:{width:240,height:55,longtitle:!0,theme:"dark"}}},methods:{onSuccess:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o,a,s,c,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),n=e.getBasicProfile(),o=n.getName(),a=n.getImageUrl(),s=n.getEmail(),c={googleUsername:o,googleImgUrl:a,googleEmail:s},localStorage.setItem("userEntity",JSON.stringify(c)),u=e.getAuthResponse().id_token,r.next=10,Object(i["serverGoogleLogin"])(u);case 10:if(l=r.sent,console.log(l),200==l.status){r.next=16;break}return t.$refs.googleLoginComp.forceLogout(),alert("Sorry, there was an error while registering you. Please try again later."),r.abrupt("return");case 16:t.$root.store.setRegisteredState(!0),t.$root.toast("Signed in","Signed in with Google successfully","success"),"Home"==t.$route.name||t.$router.push("/"),t.$emit("login-success");case 20:case"end":return r.stop()}}),r)})))()},onFailure:function(e){console.log(e)}}},u=c,l=(r("1509"),r("2877")),p=Object(l["a"])(u,n,o,!1,null,"7c836e6d",null);t["a"]=p.exports},"5c64":function(e,t,r){"use strict";r("d32a")},"66c0":function(e,t,r){"use strict";r("6eae")},6957:function(e,t,r){"use strict";var n,o,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.renderParams&&!e.logoutButton?r("div",{attrs:{id:e.id},on:{click:e.handleClick}}):r("span",{attrs:{id:e.id},on:{click:e.handleClick}},[e._t("default")],2)},s=[],i=(r("d3b7"),r("3ca3"),r("ddb0"),function(){return new Promise((function(e,t){var r=document.getElementById("auth2_script_id");if(!r){var n=document.createElement("script");n.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),n.setAttribute("async",!0),n.setAttribute("defer","defer"),n.setAttribute("id","auth2_script_id"),document.head.appendChild(n)}e()}))}),c=function(e){return new Promise((function(t,r){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{n=window.gapi.auth2.init(Object.assign({},e))}catch(o){r({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}t(n)}))}}))},u=function(e){return n?Promise.resolve(n):(o||(o=c(e)),o)},l=function(e){return Promise.all([u(e),i()]).then((function(e){return e[0]}))},p=function(e,t){if(e)return e[t]();var r={err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"};return Promise.reject(r)},d=function(){return p(n,"signIn")},g=function(){return p(n,"signOut")},f=function(){return p(n.isSignedIn,"get")},m=function(){return p(n.currentUser,"get")},h=function(){return p(n,"grantOfflineAccess")},v={load:l,signIn:d,signOut:g,isSignedIn:f,currentUser:m,grantOfflineAccess:h},b=0,w={name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onUserNotSignedWithGoogle:{type:Function,default:function(){}},onGoogleLoadErr:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(b++)},methods:{handleClick:function(){var e=this,t=this.logoutButton?"signOut":"signIn";console.log(t),v[t]().then((function(t){return e.onSuccess(t)})).catch((function(t){return e.onFailure(t)}))},forceLogout:function(){var e=this;v["signOut"]().then((function(t){return e.onSuccess(t)})).catch((function(t){return e.onFailure(t)}))}},mounted:function(){var e=this;v.load(this.params).then((function(){e.renderParams&&!1===e.logoutButton&&window.gapi.signin2.render(e.id,e.renderParams),v.isSignedIn()?e.onCurrentUser(v.currentUser()):e.onUserNotSignedWithGoogle()})).catch((function(t){console.log(t),e.onGoogleLoadErr(t)}))}},x=w,y=(r("398a"),r("2877")),_=Object(y["a"])(x,a,s,!1,null,null,null);t["a"]=_.exports},"6eae":function(e,t,r){},"6ef4":function(e,t,r){var n=r("9d81").default;r("96cf"),r("d3b7");var o=r("db49"),a=o.isTest,s=o.isTestingErrors,i=o.isProduction,c=o.serverUrl,u="/researchers",l="/activateNewExperiment",p="/myExperiments",d="/requestExperimentReport",g="/getReportIfReady",f="/getExpReport",m="/endExperiment",h="/researcherValidateSession",v="/researcherGoogleLogin",b=r("bc3a");b.defaults.withCredentials=!0;var w=r("c9c3").data;function x(e){return new Promise((function(t){return setTimeout(t,e)}))}function y(){var e={};return null!=localStorage.getItem("researcher_id")&&(e["Researcher-Id"]=localStorage.getItem("researcher_id")),e}function _(e){return C.apply(this,arguments)}function C(){return C=n(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},r.headers=y(),e.next=4,b.get(t,r).catch((function(e){return e.response?(console.log(e.response),e.response):(console.log(e),{status:0,data:"Network error, server probably down"})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function k(e,t){return E.apply(this,arguments)}function E(){return E=n(regeneratorRuntime.mark((function e(t,r){var n,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:{},n.headers=y(),e.next=4,b.post(t,r,n).catch((function(e){return e.response?(console.log(e.response),e.response):(console.log(e),{status:0,data:"Network error, server probably down"})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function R(){return S.apply(this,arguments)}function S(){return S=n(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,x(600);case 3:return e.abrupt("return",{status:200,data:{hasSession:!0}});case 4:return t=c+h,e.next=7,k(t,{});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function L(e){return O.apply(this,arguments)}function O(){return O=n(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,x(600);case 3:return e.abrupt("return",{status:200,data:{}});case 4:return r=c+v,n={id_token:t},e.next=8,k(r,n);case 8:return o=e.sent,200==o.status&&localStorage.setItem("researcher_id",o.headers["researcher-id"]),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function $(e){return I.apply(this,arguments)}function I(){return I=n(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,x(1500);case 3:return e.abrupt("return",{status:200,data:{exp_code:"123"}});case 4:return r=c+u+l,e.next=7,k(r,t);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function P(){return U.apply(this,arguments)}function U(){return U=n(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,x(500);case 3:return e.abrupt("return",{status:200,data:w});case 4:return t=c+u+p,e.next=7,_(t);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function T(e){return j.apply(this,arguments)}function j(){return j=n(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,x(500);case 3:return e.abrupt("return",{status:202,data:{}});case 4:return r=c+u+d,n={exp_id:t},e.next=8,k(r,n);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function M(e){return G.apply(this,arguments)}function G(){return G=n(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}if(!s){e.next=7;break}return e.next=4,x(500);case 4:return e.abrupt("return",{status:500,data:{}});case 7:return e.next=9,x(500);case 9:return e.abrupt("return",{status:200,data:{}});case 10:return r=c+u+g+"?expId="+t,n={responseType:"blob"},e.next=14,_(r,n);case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function N(e){return F.apply(this,arguments)}function F(){return F=n(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i){e.next=2;break}throw"'getExpReport' only supported in production";case 2:return r=c+u+f+"?expId="+t,n={responseType:"blob"},e.next=6,_(r,n);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function B(e){return A.apply(this,arguments)}function A(){return A=n(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,x(1500);case 3:return e.abrupt("return",{status:200,data:{}});case 4:return r=c+u+m+"?expId="+t,e.next=7,k(r,{});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}e.exports={serverValidateSession:R,serverGoogleLogin:L,serverPostActivateNewExperiment:$,serverGetMyExperiments:P,serverRequestExperimentReport:T,serverGetReportIfReady:M,serverGetExpReport:N,serverEndExperiment:B}},9531:function(e,t,r){},a31d:function(e,t,r){e.exports=r.p+"img/report_blue.977abea2.png"},a35e:function(e,t,r){e.exports=r.p+"img/twixperLogo2.093d8522.png"},bac1:function(e,t,r){e.exports=r.p+"img/manipulate_blue.4fbb10f8.png"},c179:function(e,t,r){e.exports=r.p+"img/handshake2_blue.344fb0fc.png"},c9c3:function(e,t){t.data=[{description:"asf",exp_code:"123",exp_groups:[{group_id:11,group_manipulations:[],group_name:"My control group",group_num_of_participants:0,group_size_in_percentage:50},{group_id:11,group_manipulations:[{type:"mute",users:["realDonaldTrump"]}],group_name:"Group Trump muted",group_num_of_participants:0,group_size_in_percentage:50}],exp_id:"1546515611",num_of_participants:0,researcher_details:{},start_date:"Wed Jan 06 2021 19:16:57 GMT+0200 (Israel Standard Time)",status:"active",title:"asf"}]},cee1:function(e,t,r){e.exports=r.p+"img/plus_blue.f65c37ad.png"},d32a:function(e,t,r){},db49:function(e,t){var r=new Object;r.isProduction=!0,r.serverUrl="https://twixper-backend.azurewebsites.net",r.isTest=!1,r.isTestingErrors=!0,e.exports=r},f674:function(e,t,r){"use strict";r("9531")}});
//# sourceMappingURL=app.6c3cb08a.js.map