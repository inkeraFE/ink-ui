(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-028dde77"],{"2f7b":function(t,e,n){},"77d8":function(t,e,n){"use strict";var i=n("c216"),c=n.n(i);c.a},"97e1":function(t,e,n){"use strict";var i=n("2f7b"),c=n.n(i);c.a},ad1a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topbar-wrapper"},[n("i",{staticClass:"iconfont",on:{click:function(e){return t.$router.replace({name:"home"})}}},[t._v("")]),n("span",{staticClass:"title",domProps:{textContent:t._s(this.title)}})])},c=[],o={props:["title"]},a=o,l=(n("77d8"),n("2877")),r=Object(l["a"])(a,i,c,!1,null,"baaf62f6",null);e["a"]=r.exports},c216:function(t,e,n){},e99e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("top-bar",{attrs:{title:"Dialog"}}),t._l(t.list,function(e,i){return n("ink-btn",{key:i,staticStyle:{"box-shadow":"0 0 5px 1px #ccc",width:"90%",margin:"20px auto"},attrs:{size:"large"},domProps:{textContent:t._s(e.text)},on:{click:function(n){return t.dialogShow(e.type)}}})})],2)},c=[],o=n("ad1a"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"conent-wrapper"},[t._v("children test")])},l=[],r=(n("97e1"),n("2877")),s={},u=Object(r["a"])(s,a,l,!1,null,"61ef0e3e",null),p=u.exports,f={data:function(){return{list:[{text:"alert",type:0},{text:"confirm",type:1},{text:"prompt",type:2}]}},components:{topBar:o["a"]},methods:{dialogShow:function(t){switch(t){case 0:this.$dialog.alert({isTitle:!1,title:"Title",children:function(t){return t(p)},submit:{text:"Ok",event:function(){console.log("alert submit")}}});break;case 1:this.$dialog.confirm({title:"Title",children:function(t){return t(p)},clickMaskClose:!0,cancel:{text:"Cancel",event:function(){console.log("confirm cancel")}},submit:{text:"Ok",event:function(){console.log("confirm submit")}}});break;case 2:this.$dialog.prompt({title:"Title",children:"Description",cancel:{text:"Cancel",event:function(){console.log("prompt cancel")}},submit:{text:"Ok",event:function(t){console.log("prompt submit",t)}}});break}}}},d=f,m=Object(r["a"])(d,i,c,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-028dde77.73b3fe76.js.map