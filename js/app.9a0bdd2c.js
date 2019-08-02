(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)i=o[d],s[i]&&v.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Pulau-Sebuku-GIS/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d"),a("6cc5");var n=a("2b0e"),s=a("289d"),r=a("458e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar is-fixed-top is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/data"}},[t._v("Data")])],1)])]),a("router-view"),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[t._v("\n        Pulau Sebuku GIS\n      ")]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","data-target":"navMenu","aria-label":"menu","aria-expanded":"false"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Pulau Sebuku GIS")]),t._v(" by "),a("a",{attrs:{href:"https://berviantoleo.github.io"}},[t._v("Bervianto Leo Pratama")]),t._v(". The source code is licensed\n        "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content\n        is licensed "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n      ")])])])}];a("ac6a");document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})});var l={name:"app"},c=l,u=a("2877"),d=Object(u["a"])(c,i,o,!1,null,null,null),v=d.exports,p=a("bc3a"),f=a.n(p),h=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-four-fifths"},[a("l-map",{ref:"myMap",staticStyle:{height:"500px",width:"100%","z-index":"0"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url}}),t.isCoastline?a("l-geo-json",{attrs:{geojson:t.coastline}}):t._e(),t.isPeak?a("l-geo-json",{attrs:{geojson:t.peak}}):t._e()],1)],1),a("div",{staticClass:"column is-one-fifths"},[t._m(0),a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("h2",{staticClass:"subtitle"},[t._v("Options")]),a("div",{staticClass:"field"},[a("b-checkbox",{model:{value:t.isCoastline,callback:function(e){t.isCoastline=e},expression:"isCoastline"}},[t._v("\n                Coastline\n              ")])],1),a("div",{staticClass:"field"},[a("b-checkbox",{model:{value:t.isPeak,callback:function(e){t.isPeak=e},expression:"isPeak"}},[t._v("\n                Peak\n              ")])],1)])])])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("h3",{staticClass:"subtitle"},[t._v("Keterangan Lahan Kritis :")]),a("table",{staticClass:"table is-bordered"},[a("thead",[a("tr",[a("th",[t._v("Warna")]),a("th",[t._v("Status")])])]),a("tr",[a("td",{staticStyle:{"background-color":"#A06332"}}),a("td",[t._v("Tidak Kritis")])]),a("tr",[a("td",{staticStyle:{"background-color":"#D19A6F"}}),a("td",[t._v("Agak Kritis")])]),a("tr",[a("td",{staticStyle:{"background-color":"#FED699"}}),a("td",[t._v("Kritis")])])])])])}],g={name:"app",data:function(){return{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:11.1,center:[-3.5,116.36667],bounds:null,coastline:null,peak:null,lahanKritis:null,isPeak:!0,isCoastline:!0}},methods:{loadCoastline:function(){var t=this;f.a.get("/assets/sebuku-coastline.geojson").then(function(e){t.coastline=e.data})},loadPeak:function(){var t=this;f.a.get("/assets/sebuku-node-peak.geojson").then(function(e){t.peak=e.data})},loadLahanKritis:function(){this.lahanKritis=window.omnivore.kml("assets/Kalimantan.kml")}},created:function(){this.loadCoastline(),this.loadPeak()}},_=g,C=Object(u["a"])(_,b,m,!1,null,null,null),k=C.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[t._v("\n         Currently Under Maintainance\n       ")])])])])}],j={},x=Object(u["a"])(j,y,S,!1,null,null,null),P=x.exports,w=[{path:"/",component:k},{path:"/data",component:P}],L=new h["a"]({routes:w}),O=L;n["a"].use(h["a"]),n["a"].component("l-map",r["LMap"]),n["a"].component("l-tile-layer",r["LTileLayer"]),n["a"].component("l-marker",r["LMarker"]),n["a"].component("l-geo-json",r["LGeoJson"]),delete r["L"].Icon.Default.prototype._getIconUrl,r["L"].Icon.Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),n["a"].use(s["a"]),n["a"].config.productionTip=!1,f.a.defaults.baseURL="https://bervproject.github.io/Pulau-Sebuku-GIS/",new n["a"]({render:function(t){return t(v)},router:O}).$mount("#app")}});
//# sourceMappingURL=app.9a0bdd2c.js.map