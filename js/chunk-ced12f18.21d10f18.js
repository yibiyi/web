(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ced12f18"],{"0d34":function(e,n,t){"use strict";t.r(n),t.d(n,"loadEnabledTypes",(function(){return h}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.syncToApp||e.syncToLocal?t("span",[e.enabledTypes.wechatEnterprise?t("j-third-app-dropdown",e._g(e._b({attrs:{type:"wechatEnterprise",name:"企微"}},"j-third-app-dropdown",e.bindAttrs,!1),e.bindEvents)):e._e(),e.enabledTypes.dingtalk?t("j-third-app-dropdown",e._g(e._b({attrs:{type:"dingtalk",name:"钉钉"}},"j-third-app-dropdown",e.bindAttrs,!1),e.bindEvents)):e._e()],1):t("span",[e._v("未设置任何同步方向")])},r=[],s=t("a34a"),o=t.n(s),c=t("0fea"),l=t("ca00"),i=t("fe28");function p(e,n,t,a,r,s,o){try{var c=e[s](o),l=c.value}catch(i){return void t(i)}c.done?n(l):Promise.resolve(l).then(a,r)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var s=e.apply(n,t);function o(e){p(s,a,r,o,c,"next",e)}function c(e){p(s,a,r,o,c,"throw",e)}o(void 0)}))}}var u={getEnabledType:"/sys/thirdApp/getEnabledType",wechatEnterprise:{user:"/sys/thirdApp/sync/wechatEnterprise/user",depart:"/sys/thirdApp/sync/wechatEnterprise/depart"},dingtalk:{user:"/sys/thirdApp/sync/dingtalk/user",depart:"/sys/thirdApp/sync/dingtalk/depart"}},f={name:"JThirdAppButton",components:{JThirdAppDropdown:i["default"]},props:{bizType:{type:String,required:!0},syncToApp:Boolean,syncToLocal:Boolean,selectedRowKeys:Array},data:function(){return{enabledTypes:{},attrs:{dingtalk:{}}}},computed:{bindAttrs:function(){return{syncToApp:this.syncToApp,syncToLocal:this.syncToLocal}},bindEvents:function(){return{"to-app":this.onToApp,"to-local":this.onToLocal}}},created:function(){this.loadEnabledTypes()},methods:{handleMenuClick:function(){},onToApp:function(e){this.doSync(e.type,"/toApp")},onToLocal:function(e){this.doSync(e.type,"/toLocal")},loadEnabledTypes:function(){var e=d(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:this.enabledTypes=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),doSync:function(e,n){var t=this,a=u[e];if(a&&a[this.bizType]){var r=a[this.bizType]+n,s=this.selectedRowKeys,o="确定要开始同步全部数据吗？可能花费较长时间！";return Array.isArray(s)&&s.length>0?o="确定要开始同步这 ".concat(s.length," 项吗？"):s=[],new Promise((function(a,l){var i=t.$confirm({title:"同步",content:o,onOk:function(){return i.update({keyboard:!1,okText:"同步中…",cancelButtonProps:{props:{disabled:!0}}}),Object(c["c"])(r,{ids:s.join(",")}).then((function(e){var n=null;e.result&&(n={width:600,title:e.message,content:function(n){var a,r=["成功信息如下：",t.renderTextarea(n,e.result.successInfo.map((function(e,n){return"".concat(n+1,". ").concat(e)})).join("\n"))];return a=e.success?[].concat(r,[n("br"),"无失败信息！"]):["失败信息如下：",t.renderTextarea(n,e.result.failInfo.map((function(e,n){return"".concat(n+1,". ").concat(e)})).join("\n")),n("br")].concat(r),a}}),e.success?(null!=n?t.$success(n):t.$message.success(e.message),t.$emit("sync-ok")):(null!=n?t.$warning(n):t.$message.warning(e.message),t.$emit("sync-error"))})).catch((function(){return i.destroy()})).finally((function(){a(),t.$emit("sync-finally",{type:e,direction:n,isToApp:"/toApp"===n,isToLocal:"/toLocal"===n})}))},onCancel:function(){a()}})}))}},renderTextarea:function(e,n){return e("a-textarea",{props:{value:n,readOnly:!0,autosize:{minRows:5,maxRows:10}},style:{whiteSpace:"pre",overflow:"auto"}})}}},m=null;function h(){return y.apply(this,arguments)}function y(){return y=d(o.a.mark((function e(){var n,t,a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==m){e.next=4;break}return e.abrupt("return",Object(l["b"])(m));case 4:return e.next=6,Object(c["c"])(u.getEnabledType);case 6:if(n=e.sent,t=n.success,a=n.result,!t){e.next=14;break}return m=Object(l["b"])(a),e.abrupt("return",a);case 14:case 15:return e.abrupt("return",{});case 16:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var b=f,v=t("2877"),g=Object(v["a"])(b,a,r,!1,null,"0a891898",null);n["default"]=g.exports},c683:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a-card",{attrs:{bordered:!1}},[t("a-spin",{attrs:{spinning:e.loading}},[t("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.rules}},[t("a-tabs",[t("a-tab-pane",{key:"1",attrs:{tab:"消息选项"}},[t("a-form-model-item",{attrs:{label:"测试APP",prop:"app",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"请选择测试APP",options:e.appOptions},model:{value:e.model.app,callback:function(n){e.$set(e.model,"app",n)},expression:"model.app"}})],1),t("a-form-model-item",{attrs:{label:"发送给所有人",prop:"sendAll",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-switch",{attrs:{checkedChildren:"是",unCheckedChildren:"否"},on:{change:e.onSendAllChange},model:{value:e.model.sendAll,callback:function(n){e.$set(e.model,"sendAll",n)},expression:"model.sendAll"}})],1),t("a-form-model-item",{attrs:{label:"接收人",prop:"receiver",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("j-select-multi-user",{attrs:{disabled:e.model.sendAll,placeholder:"请选择接收人"},model:{value:e.model.receiver,callback:function(n){e.$set(e.model,"receiver",n)},expression:"model.receiver"}})],1),t("a-form-model-item",{attrs:{label:"消息内容",prop:"content",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-textarea",{attrs:{rows:5,placeholder:"请输入消息内容"},model:{value:e.model.content,callback:function(n){e.$set(e.model,"content",n)},expression:"model.content"}})],1),t("div",{staticStyle:{"text-align":"center"}},[t("a-button",{staticStyle:{width:"120px"},attrs:{type:"primary",size:"large"},on:{click:e.onSend}},[e._v("发送")])],1)],1)],1),t("a-tabs",[t("a-tab-pane",{key:"1",attrs:{tab:"测试结果（刷新自动清空）"}},[t("a-table",{attrs:{rowKey:"id",bordered:"",size:"middle",columns:e.columns,dataSource:e.dataSource},scopedSlots:e._u([{key:"action",fn:function(n,a){return t("div",{},["DINGTALK"===a.app?[a.recalled?t("span",[e._v("已撤回")]):t("a-popconfirm",{attrs:{title:"确定吗？"},on:{confirm:function(n){return e.handleRecall(a)}}},[t("a",{on:{click:function(e){}}},[e._v("撤回")])])]:[e._v("-")]],2)}}])})],1)],1)],1)],1)],1)},r=[],s=t("a34a"),o=t.n(s),c=t("0d34"),l=t("0fea"),i=t("ca00");function p(e,n,t,a,r,s,o){try{var c=e[s](o),l=c.value}catch(i){return void t(i)}c.done?n(l):Promise.resolve(l).then(a,r)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var s=e.apply(n,t);function o(e){p(s,a,r,o,c,"next",e)}function c(e){p(s,a,r,o,c,"throw",e)}o(void 0)}))}}var u={name:"ThirdAppMessageTest",data:function(){var e=this;return{loading:!1,labelCol:{span:6},wrapperCol:{span:12},model:{sendAll:!1},enabledTypes:{},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(n,t,a){return e.dataSource.length-a}},{title:"测试APP",align:"center",dataIndex:"app",customRender:function(e,n,t){return"WECHAT_ENTERPRISE"===e?"企业微信":"DINGTALK"===e?"钉钉":e}},{title:"接收人",align:"center",dataIndex:"receiver",customRender:function(e,n,t){return n.sendAll?"【全体】":e}},{title:"消息内容",align:"center",dataIndex:"content"},{title:"response",align:"center",dataIndex:"response"},{title:"操作",dataIndex:"action",align:"center",fixed:"right",width:80,scopedSlots:{customRender:"action"}}],dataSource:[]}},computed:{rules:function(){return{app:[{required:!0,message:"请选择测试APP"}],url:[{required:this.show,message:"请输入菜单路径!"}],receiver:[{required:!this.model.sendAll,message:"请选择接收人"}],content:[{required:!0,message:"消息内容不能为空"}]}},appOptions:function(){return[{label:"企业微信".concat(this.enabledTypes.wechatEnterprise?"":"（已禁用）"),value:"WECHAT_ENTERPRISE",disabled:!this.enabledTypes.wechatEnterprise},{label:"钉钉".concat(this.enabledTypes.dingtalk?"":"（已禁用）"),value:"DINGTALK",disabled:!this.enabledTypes.dingtalk}]}},created:function(){this.loadEnabledTypes()},methods:{loadEnabledTypes:function(){var e=d(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["loadEnabledTypes"])();case 2:this.enabledTypes=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onSendAllChange:function(){this.$refs.form.clearValidate("receiver")},onSend:function(){var e=this;this.$refs.form.validate((function(n,t){n&&(e.loading=!0,Object(l["i"])("/sys/thirdApp/sendMessageTest",e.model).then((function(n){var t=n.success,a=n.result,r=n.message;if(t){var s="";try{s=JSON.stringify(a)}catch(o){s=a}e.dataSource.unshift(Object.assign({id:Object(i["l"])()},e.model,{response:s}))}else e.$message.warning(r)})).finally((function(){return e.loading=!1})))}))},handleRecall:function(e){var n=this;try{var t=JSON.parse(e.response);Object(l["i"])("/sys/thirdApp/recallMessageTest",{app:e.app,msg_task_id:t.result}).then((function(t){t.success?(n.$set(e,"recalled",!0),n.$message.success(t.message)):n.$message.warning(t.message)})).catch((function(e){return n.$message.warning(e.message||e)}))}catch(a){this.$message.warning(a.message||a)}}}},f=u,m=t("2877"),h=Object(m["a"])(f,a,r,!1,null,"6672cbf1",null);n["default"]=h.exports},fe28:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.syncToApp&&e.syncToLocal?t("a-dropdown",[t("a-button",{attrs:{type:"primary",icon:"sync"}},[e._v("同步"+e._s(e.name))]),t("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[e.syncToApp?t("a-menu-item",{key:"to-app"},[e._v("同步到"+e._s(e.name))]):e._e(),e.syncToLocal?t("a-menu-item",{key:"to-local"},[e._v("同步到本地")]):e._e()],1)],1):e.syncToApp?t("a-button",{attrs:{type:"primary",icon:"sync"},on:{click:function(n){return e.handleMenuClick({key:"to-app"})}}},[e._v("同步"+e._s(e.name))]):t("a-button",{attrs:{type:"primary",icon:"sync"},on:{click:function(n){return e.handleMenuClick({key:"to-local"})}}},[e._v("同步"+e._s(e.name)+"到本地")])},r=[],s={name:"JThirdAppDropdown",props:{type:String,name:String,syncToApp:Boolean,syncToLocal:Boolean},methods:{handleMenuClick:function(e){this.$emit(e.key,{type:this.type})}}},o=s,c=t("2877"),l=Object(c["a"])(o,a,r,!1,null,"1b7992e0",null);n["default"]=l.exports}}]);