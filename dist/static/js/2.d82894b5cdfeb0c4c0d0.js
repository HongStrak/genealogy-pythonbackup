webpackJsonp([2],{"+bOj":function(t,e){},"0JTA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bIm5"),o=function(t){var e=new Date;return function(t,e){var n=t.split("-")[0],a=t.split("-")[1],o=t.split("-")[2],i=""===e?new Date:new Date(e),s=i.getFullYear(),m=i.getMonth()+1,f=i.getDate(),d=s-n,l=m-a,c=f-o,u="";return d<0?"生日不可小于当前时间":0===d?l<0?"生日不可小于当前时间":l>0?c>=0?l+"个月"+(c>0?c+"天":""):(l-1==0?"":l-1+"个月")+(f+(r(t)-o))+"天":c<0?"生日不可小于当前时间":c+"天":(u=d+"岁",0===l?c>=0?u+(0===c?"":c+"天"):(d-1==0?"":d-1+"岁")+"11个月":l>0?u+=c>=0?l+"个月":l-1>0?l+"个月":r(t)-o+f+"天":(d-1==0?"":d-1+"岁")+(12-a+m)+"个月")}(t,e.getFullYear()+"-"+e.getMonth()+"-"+e.getDay())},r=function(t){var e=new Date(t);return e.setMonth(e.getMonth()+1),e.setDate("1"),e.setDate(e.getDate()-1),e.getDate()},i={data:function(){return{memberInfo:{id:"?",name:"?",fatherId:"?",information:"?",spouseId:"?",fatherName:"?",motherName:"?",birthday:"?",deathId:"?",age:"?"},spinShow:!1}},props:{mid:{type:Number,default:0}},methods:{getInformationById:function(t){var e=this;this.spinShow=!0,Object(a.c)(t).then(function(t){e.memberInfo=t.data,e.memberInfo.age=o(t.data.birthday),e.spinShow=!1}).catch(function(t){if(404==t.response.status)return e.$Notice.warning({title:"网络异常",desc:"未找到该成员信息!"}),void e.closeModal();e.$Notice.warning({title:"网络异常",desc:"未知原因未能获取到相关成员信息!"}),console.log(t)})},resetInformation:function(){this.memberInfo={id:"?",name:"?",fatherId:"?",information:"?",spouseId:"?",fatherName:"?",motherName:"?",birthday:"?",deathId:"?",age:"?"}},closeModal:function(){this.$emit("closeModal")},init:function(){}},mounted:function(){this.init()},watch:{mid:function(t,e){this.resetInformation(),this.getInformationById(t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",{staticStyle:{width:"350px"}},[t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),n("Form",[n("FormItem",{attrs:{label:"名字"}},[t._v(t._s(t.memberInfo.name))]),t._v(" "),n("FormItem",{attrs:{label:"年龄"}},[t._v(t._s(t.memberInfo.age))]),t._v(" "),n("FormItem",{attrs:{label:"生日"}},[t._v(t._s(t.memberInfo.birthday))]),t._v(" "),n("FormItem",{attrs:{label:"信息"}},[t._v(t._s(t.memberInfo.information))])],1)],1)],1)},staticRenderFns:[]};var m=n("C7Lr")(i,s,!1,function(t){n("+bOj")},null,null);e.default=m.exports}});
//# sourceMappingURL=2.d82894b5cdfeb0c4c0d0.js.map