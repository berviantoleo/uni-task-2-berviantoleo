(function(t){function e(e){for(var a,i,l=e[0],r=e[1],u=e[2],d=0,f=[];d<l.length;d++)i=l[d],o[i]&&f.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var r=n[l];0!==o[r]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Pulau-Sebuku-GIS/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("5abe"),n("6cc5");var a=n("2b0e"),o=n("8a03"),s=n.n(o),i=n("458e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Pulau Sebuku")]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-four-fifths"},[n("l-map",{ref:"myMap",staticStyle:{height:"500px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:t.url}}),t.isCoastline?n("l-geo-json",{attrs:{geojson:t.coastline}}):t._e(),t.isPeak?n("l-geo-json",{attrs:{geojson:t.peak}}):t._e()],1)],1),n("div",{staticClass:"column is-one-fifths"},[n("h2",{staticClass:"subtitle"},[t._v("Keterangan Lahan Kritis :")]),t._m(0),n("h2",{staticClass:"subtitle"},[t._v("Options")]),n("div",{staticClass:"field"},[n("b-checkbox",{model:{value:t.isCoastline,callback:function(e){t.isCoastline=e},expression:"isCoastline"}},[t._v("\n            Coastline\n          ")])],1),n("div",{staticClass:"field"},[n("b-checkbox",{model:{value:t.isPeak,callback:function(e){t.isPeak=e},expression:"isPeak"}},[t._v("\n            Peak\n          ")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table is-bordered"},[n("thead",[n("tr",[n("th",[t._v("Warna")]),n("th",[t._v("Status")])])]),n("tr",[n("td",{staticStyle:{"background-color":"#A06332"}}),n("td",[t._v("Tidak Kritis")])]),n("tr",[n("td",{staticStyle:{"background-color":"#D19A6F"}}),n("td",[t._v("Agak Kritis")])]),n("tr",[n("td",{staticStyle:{"background-color":"#FED699"}}),n("td",[t._v("Kritis")])])])}],u=n("bc3a"),c=n.n(u),d={name:"app",data:function(){return{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:11.1,center:[-3.5,116.36667],bounds:null,coastline:null,peak:null,lahanKritis:null,isPeak:!0,isCoastline:!0}},methods:{loadCoastline:function(){var t=this;c.a.get("/assets/sebuku-coastline.geojson").then(function(e){t.coastline=e.data})},loadPeak:function(){var t=this;c.a.get("/assets/sebuku-node-peak.geojson").then(function(e){t.peak=e.data})},loadLahanKritis:function(){this.lahanKritis=window.omnivore.kml("assets/Kalimantan.kml")}},created:function(){this.loadCoastline(),this.loadPeak()}},f=d,p=n("2877"),h=Object(p["a"])(f,l,r,!1,null,null,null),b=h.exports;a["default"].component("l-map",i["LMap"]),a["default"].component("l-tile-layer",i["LTileLayer"]),a["default"].component("l-marker",i["LMarker"]),a["default"].component("l-geo-json",i["LGeoJson"]),delete i["L"].Icon.Default.prototype._getIconUrl,i["L"].Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),a["default"].use(s.a),a["default"].config.productionTip=!1,c.a.defaults.baseURL="https://bervproject.github.io/Pulau-Sebuku-GIS/",new a["default"]({render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.95b46af2.js.map