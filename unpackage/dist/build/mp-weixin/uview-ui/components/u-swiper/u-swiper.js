(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-swiper/u-swiper"],{"03d4":function(t,e,n){},"44a1":function(t,e,n){"use strict";var i=n("03d4"),o=n.n(i);o.a},5180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"}},data:function(){return{current:0}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){this.current=t.detail.current},animationfinish:function(t){}}};e.default=i},"57aa":function(t,e,n){"use strict";n.r(e);var i=n("5180"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"92f6":function(t,e,n){"use strict";n.r(e);var i=n("95d1"),o=n("57aa");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("44a1");var u,a=n("f0c5"),d=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"5b213d52",null,!1,i["a"],u);e["default"]=d.exports},"95d1":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("92f6"))
        })
    },
    [['uview-ui/components/u-swiper/u-swiper-create-component']]
]);
