(function(e){function t(t){for(var a,c,o=t[0],i=t[1],u=t[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&f.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var i=s[c];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"62a42528"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=a);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=c(e);var u=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(l);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,s[1](u)}n[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}})},r=[],c=(s("034f"),s("2877")),o={},i=Object(c["a"])(o,n,r,!1,null,null,null),u=i.exports,l=(s("d3b7"),s("8c4f")),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-6 col-sm-6"},[s("Sidebar")],1)])])},f=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"container text-left"},[s("h3",[e._v("COVID-19 Online Assessment Tracker")]),s("p",{},[e._v("Reported:")]),s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:["today"===e.clickedRange?"active":""],attrs:{role:"button"},on:{click:function(t){return e.selectRange("today")}}},[e._v("Today")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:["2weeks"===e.clickedRange?"active":""],attrs:{role:"button"},on:{click:function(t){return e.selectRange("2weeks")}}},[e._v("Last 2 Weeks")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:["30days"===e.clickedRange?"active":""],attrs:{role:"button"},on:{click:function(t){return e.selectRange("30days")}}},[e._v("Last 30 days")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:["custom"===e.clickedRange?"active":""],attrs:{role:"button"},on:{click:e.toggleCalendar}},[e._v("Custom Range")])])]),e.calendars?s("div",{staticClass:"calendars"},[s("div",{staticClass:"calendar mb-2"},[s("p",[e._v("Start Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.queryObject.start,expression:"queryObject.start"}],staticClass:"form-control",attrs:{type:"date",name:"",id:"",min:"2020-03-01",max:"2020-05-31"},domProps:{value:e.queryObject.start},on:{input:function(t){t.target.composing||e.$set(e.queryObject,"start",t.target.value)}}})]),s("div",{staticClass:"calendar mb-2"},[s("p",[e._v("End Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.queryObject.end,expression:"queryObject.end"}],staticClass:"form-control",attrs:{type:"date",name:"",id:"",min:"2020-03-01",max:"2020-05-31"},domProps:{value:e.queryObject.end},on:{input:function(t){t.target.composing||e.$set(e.queryObject,"end",t.target.value)}}})])]):e._e(),s("p",[e._v("Symptom(s)")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.fetchResult(t)}}},[e._l(e.symptoms,(function(t,a){return s("div",{key:a},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.queryObject.syms,expression:"queryObject.syms"}],staticClass:"symptoms",attrs:{type:"checkbox",name:"",id:t._id},domProps:{value:t._id,checked:Array.isArray(e.queryObject.syms)?e._i(e.queryObject.syms,t._id)>-1:e.queryObject.syms},on:{change:[function(s){var a=e.queryObject.syms,n=s.target,r=!!n.checked;if(Array.isArray(a)){var c=t._id,o=e._i(a,c);n.checked?o<0&&e.$set(e.queryObject,"syms",a.concat([c])):o>-1&&e.$set(e.queryObject,"syms",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.queryObject,"syms",r)},e.changeStatus]}}),s("label",{staticClass:"ml-2",attrs:{for:t._id}},[e._v(e._s(t.name))])])})),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"submit",disabled:e.searchBtn}},[e._v(" Search ")])],2)])])},m=[],j=(s("7db0"),s("a630"),s("3ca3"),s("5530")),p=s("2f62"),y=s("c1df"),h=s.n(y),v={name:"Sidebar",data:function(){return{queryObject:{start:y["utc"]().format("YYYY-MM-DD"),end:y["utc"]().add(1,"days").format("YYYY-MM-DD"),syms:[]},calendars:!1,searchBtn:!0,clickedRange:"today"}},mounted:function(){this.$store.dispatch("getSymptoms")},watch:{searchBtn:function(e,t){console.log(e,t)}},computed:Object(j["a"])({},Object(p["b"])({symptoms:"getSymptoms"})),methods:{fetchResult:function(){this.$store.dispatch("fetchSearchResults",this.queryObject)},changeStatus:function(e){var t=document.querySelectorAll(".symptoms");t=Array.from(t),console.log(t);var s=t.find((function(e){return e.checked}));this.searchBtn=!s},selectRange:function(e){switch(this.calendars=!1,e){case"today":this.queryObject.start=y["utc"]().format("YYYY-MM-DD"),this.queryObject.end=y["utc"]().add(1,"days").format("YYYY-MM-DD"),this.clickedRange="today";break;case"2weeks":this.queryObject.start=y["utc"]().subtract(14,"days").format("YYYY-MM-DD"),this.queryObject.end=y["utc"](),this.clickedRange="2weeks";break;case"30days":this.queryObject.start=y["utc"]().subtract(30,"days").format("YYYY-MM-DD"),this.queryObject.end=y["utc"](),this.clickedRange="30days";break;default:this.clickedRange="today";break}},toggleCalendar:function(){this.calendars=!this.calendars,this.clickedRange="custom"}}},g=v,k=Object(c["a"])(g,b,m,!1,null,null,null),O=k.exports,w={name:"Home",components:{Sidebar:O}},_=w,q=Object(c["a"])(_,d,f,!1,null,null,null),C=q.exports;a["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],Y=new l["a"]({routes:x}),S=Y,z=(s("96cf"),s("1da1")),R=s("bc3a"),M=s.n(R);a["a"].use(p["a"]);var D=new p["a"].Store({state:{symptoms:[]},mutations:{GET_SYMPTOMS:function(e,t){e.symptoms=t}},actions:{getSymptoms:function(e){return Object(z["a"])(regeneratorRuntime.mark((function t(){var s,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,a="https://yoketest.herokuapp.com/api/symptoms",t.prev=2,t.next=5,M.a.get(a);case 5:n=t.sent,s("GET_SYMPTOMS",n.data.data.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()},fetchSearchResults:function(e,t){return Object(z["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.commit,console.log({appData:t}),a="https://yoketest.herokuapp.com/api/requests",s.prev=3,s.next=6,M.a.get(a,{params:t});case 6:n=s.sent,console.log({response:n}),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](3),console.log({err:s.t0});case 13:case"end":return s.stop()}}),s,null,[[3,10]])})))()}},getters:{getSymptoms:function(e){return e.symptoms}},modules:{}});s("4989"),s("ab8b");a["a"].prototype.$moment=h.a,a["a"].use(h.a),a["a"].config.productionTip=!1,new a["a"]({router:S,store:D,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.ec5ce49f.js.map