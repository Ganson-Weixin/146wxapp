(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1a68":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,i,a,u,r){try{var o=t[u](r),c=o.value}catch(s){return void e(s)}o.done?n(c):Promise.resolve(c).then(i,a)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var r=t.apply(n,e);function o(t){u(r,i,a,o,c,"next",t)}function c(t){u(r,i,a,o,c,"throw",t)}o(void 0)}))}}e("b29e");var o=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("4c00"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:o},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],homeyewuzhidaoxinxilist:[],news:[]}},onShow:function(){var t=r(i.default.mark((function t(){var n,e,a,u,r,o,c,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=t.sent,a=!0,u=!1,r=void 0,t.prev=7,o=e.data.list[Symbol.iterator]();!(a=(c=o.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&n.push({img:s.value});t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](7),u=!0,r=t.t0;case 15:t.prev=15,t.prev=16,a||null==o.return||o.return();case 18:if(t.prev=18,!u){t.next=21;break}throw r;case 21:return t.finish(18);case 22:return t.finish(15);case 23:return n&&(this.swiperList=n),t.next=26,this.$api.list("news",{page:1,limit:3});case 26:return e=t.sent,this.news=e.data.list,t.next=30,this.$api.list("yewuzhidaoxinxi",{page:1,limit:6});case 30:e=t.sent,this.homeyewuzhidaoxinxilist=e.data.list;case 32:case"end":return t.stop()}}),t,this,[[7,11,15,23],[16,,18,22]])})));function n(){return t.apply(this,arguments)}return n}(),methods:{onSwiperTap:function(t){},onNewsDetailTap:function(t){this.$utils.jump("../news-detail/news-detail?id=".concat(t))},onDetailTap:function(t,n){this.$utils.jump("../".concat(t,"/detail?id=").concat(n))},onPageTap:function(n){t.navigateTo({url:"../".concat(n,"/list"),fail:function(){t.switchTab({url:"../".concat(n,"/list")})}})}}};n.default=c}).call(this,e("543d")["default"])},"234f":function(t,n,e){"use strict";e.r(n);var i=e("1a68"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"39e4":function(t,n,e){"use strict";(function(t){e("da7e"),e("921b");i(e("66fd"));var n=i(e("42f4"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"42f4":function(t,n,e){"use strict";e.r(n);var i=e("5907"),a=e("234f");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("5b70");var r,o=e("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=c.exports},5907:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.homeyewuzhidaoxinxilist,(function(n,e){var i=n.tupian.split(",");return{$orig:t.__get_orig(n),g0:i}}))),i=t.__map(t.homeyewuzhidaoxinxilist,(function(n,e){var i=n.tupian.split(",");return{$orig:t.__get_orig(n),g1:i}}));t.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},u=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}))},"5b70":function(t,n,e){"use strict";var i=e("834f"),a=e.n(i);a.a},"834f":function(t,n,e){}},[["39e4","common/runtime","common/vendor"]]]);