webpackJsonp([3],{BQ1j:function(e,t){},"Kv/Y":function(e,t){},NBjp:function(e,t){},"V+rZ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"tree-view-item",components:{},data:function(){return{}},props:{parent:Array,icon:Array,level:String,asyncLoadData:Function,nodeClick:Function},computed:{},methods:{haveChildren:function(e){return e.children&&e.children.length>0},needLoading:function(e){return this.asyncLoadData&&e.loading},getIconType:function(){return this.icon&&this.icon.length>this.level?this.icon[this.level]:"checkmark"},computeLevel:function(){return parseInt(this.level)+1+""},toggle:function(e){if(this.nodeClick(e,this.parent,this.level),this.asyncLoadData)if(e.isAsync)Array.isArray(e.children)&&e.children.length>0?this.$set(e,"isExpanded",!e.isExpanded):this.$set(e,"isEmpty",!0);else{var t=this;t.$set(e,"loading",!0),t.asyncLoadData(e,function(n){Array.isArray(n)&&n.length>0?(t.$set(e,"children",n),t.$set(e,"loading",!1),t.$set(e,"isAsync",!0),t.$set(e,"isExpanded",!e.isExpanded)):t.$set(e,"isEmpty",!0)})}else Array.isArray(e.children)&&e.children.length>0?this.$set(e,"isExpanded",!e.isExpanded):this.$set(e,"isEmpty",!0)}},watch:{},created:function(){}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-view-item"},e._l(e.parent,function(t){return n("div",{key:t.id},[n("div",{staticClass:"button heading ",class:{expand:t.isExpanded},on:{click:function(n){e.toggle(t)}}},[n("Icon",{attrs:{type:e.getIconType()}}),e._v(" "),n("span",[e._v(e._s(t.name))]),e._v(" "),t.isEmpty?e._e():n("div",{staticClass:"icon"},[e.needLoading(t)?n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 50 50","xml:space":"preserve"}},[n("path",{attrs:{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)]):n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",focusable:"false",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z "}})])])],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.haveChildren(t)?n("div",{directives:[{name:"show",rawName:"v-show",value:t.isExpanded,expression:"node.isExpanded"}],staticClass:"heading-children"},[n("tree-view-item",{attrs:{parent:t.children,icon:e.icon,level:e.computeLevel(),asyncLoadData:e.asyncLoadData,nodeClick:e.nodeClick}})],1):e._e()])],1)}))},staticRenderFns:[]};var s={name:"tree-view",components:{treeViewItem:n("VU/8")(a,i,!1,function(e){n("NBjp")},"data-v-171ffd84",null).exports},data:function(){return{}},props:{value:Array,icon:Array,isLoading:Boolean,asyncLoadData:Function,nodeClick:Function},computed:{},methods:{},watch:{},created:function(){}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tree-view-menu"},[this.isLoading?t("div",{staticClass:"loading"},[t("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[t("path",{attrs:{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}},[t("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)]),this._v(" "),t("span",[this._v("正在加载数据，请稍后")])]):t("tree-view-item",{attrs:{parent:this.value,icon:this.icon,asyncLoadData:this.asyncLoadData,level:"0",nodeClick:this.nodeClick}})],1)},staticRenderFns:[]};var c={name:"tree-view-demo",components:{treeView:n("VU/8")(s,r,!1,function(e){n("BQ1j")},"data-v-268704b7",null).exports},data:function(){return{deep:10,count:5,syncTreeLoading:!1,syncTreeData:[],asyncTreeLoading:!1,asyncTreeData:[],asyncId:1,deepIcon:["help","gear-a","edit","refresh"]}},props:{},computed:{},methods:{generator:function(e,t,n){if(void 0===n||0===n?n=1:n+=1,n>this.deep)return e;for(var a in t||(t=e),t){t[a].children||(t[a].children=[]);for(var i=0;i<this.count;i++){var s=n*this.count+i;t[a].children.push({id:s,name:"测试测试文字"+n+"-"+a+"-"+i})}return this.generator(e,t[a].children,n)}},nodeClick:function(e,t){console.log(e)},asyncLoadData:function(e,t){var n=this;setTimeout(function(){var e=[{id:++n.asyncId,name:"测试子项"+n.asyncId,children:[]},{id:++n.asyncId,name:"测试子项"+n.asyncId,children:[]}];t(e)},400)}},watch:{},created:function(){var e=this,t=this;t.syncTreeLoading=!0,t.asyncTreeLoading=!0,setTimeout(function(){t.syncTreeLoading=!1,t.syncTreeData=e.generator([{id:1,name:"测测试试文字"}])},1200),setTimeout(function(){t.asyncTreeLoading=!1,t.asyncTreeData=[{id:e.asyncId,name:"测测试试文字"}]},400)}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[n("div",{staticClass:"float"},[n("p",[e._v("异步加载")]),e._v(" "),n("tree-view",{attrs:{isLoading:e.asyncTreeLoading,value:e.asyncTreeData,icon:e.deepIcon,nodeClick:e.nodeClick,asyncLoadData:e.asyncLoadData}})],1),e._v(" "),n("div",{staticClass:"float"},[n("p",[e._v("一次性加载")]),e._v(" "),n("tree-view",{attrs:{isLoading:e.syncTreeLoading,value:e.syncTreeData,icon:e.deepIcon,nodeClick:e.nodeClick}})],1)])},staticRenderFns:[]};var d=n("VU/8")(c,o,!1,function(e){n("Kv/Y")},"data-v-7ae9826c",null);t.default=d.exports}});
//# sourceMappingURL=3.6ed32225a57847ab94dd.js.map