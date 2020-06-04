(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/person/ProductList"],{"622c":function(t,n,c){},"687e":function(t,n,c){"use strict";var r,e=function(){var t=this,n=t.$createElement;t._self._c},u=[];c.d(n,"b",(function(){return e})),c.d(n,"c",(function(){return u})),c.d(n,"a",(function(){return r}))},"7ab6":function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){c.e("components/person/ProductCard").then(function(){return resolve(c("c574"))}.bind(null,c)).catch(c.oe)},e={props:["imgdata","user"],data:function(){return{isLoading:!1}},components:{ProductCard:r},computed:{col1:function(){for(var t=[],n=0;n<this.imgdata.length;n+=2){var c=this.imgdata[n];t.push(c)}return t},col2:function(){for(var t=[],n=1;n<this.imgdata.length;n+=2)t.push(this.imgdata[n]);return t}}};n.default=e},9490:function(t,n,c){"use strict";c.r(n);var r=c("687e"),e=c("c6ca");for(var u in e)"default"!==u&&function(t){c.d(n,t,(function(){return e[t]}))}(u);c("c1fc");var a,o=c("f0c5"),i=Object(o["a"])(e["default"],r["b"],r["c"],!1,null,"379ad710",null,!1,r["a"],a);n["default"]=i.exports},c1fc:function(t,n,c){"use strict";var r=c("622c"),e=c.n(r);e.a},c6ca:function(t,n,c){"use strict";c.r(n);var r=c("7ab6"),e=c.n(r);for(var u in r)"default"!==u&&function(t){c.d(n,t,(function(){return r[t]}))}(u);n["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/person/ProductList-create-component',
    {
        'components/person/ProductList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9490"))
        })
    },
    [['components/person/ProductList-create-component']]
]);
