(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2cf053"],{"88bc":function(e,t,n){(function(t){var n=1/0,r=9007199254740991,a="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")();function d(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function f(e,t){var n=-1,r=e?e.length:0,a=Array(r);while(++n<r)a[n]=t(e[n],n,e);return a}function h(e,t){var n=-1,r=t.length,a=e.length;while(++n<r)e[a+n]=t[n];return e}var p=Object.prototype,m=p.hasOwnProperty,b=p.toString,v=u.Symbol,g=p.propertyIsEnumerable,w=v?v.isConcatSpreadable:void 0,C=Math.max;function k(e,t,n,r,a){var i=-1,o=e.length;n||(n=x),a||(a=[]);while(++i<o){var l=e[i];t>0&&n(l)?t>1?k(l,t-1,n,r,a):h(a,l):r||(a[a.length]=l)}return a}function y(e,t){return e=Object(e),O(e,t,(function(t,n){return n in e}))}function O(e,t,n){var r=-1,a=t.length,i={};while(++r<a){var o=t[r],l=e[o];n(l,o)&&(i[o]=l)}return i}function j(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var n=arguments,r=-1,a=C(n.length-t,0),i=Array(a);while(++r<a)i[r]=n[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=n[r];return o[t]=i,d(e,this,o)}}function x(e){return _(e)||F(e)||!!(w&&e&&e[w])}function A(e){if("string"==typeof e||J(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function F(e){return L(e)&&m.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==a)}var _=Array.isArray;function $(e){return null!=e&&E(e.length)&&!S(e)}function L(e){return P(e)&&$(e)}function S(e){var t=N(e)?b.call(e):"";return t==i||t==o}function E(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function P(e){return!!e&&"object"==typeof e}function J(e){return"symbol"==typeof e||P(e)&&b.call(e)==l}var q=j((function(e,t){return null==e?{}:y(e,f(k(t,1),A))}));e.exports=q}).call(this,n("c8ba"))},b7ac:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"操作",width:800,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-spin",{attrs:{spinning:e.confirmLoading}},[n("a-form",{attrs:{form:e.form}},[n("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"唯一识别码",hasFeedback:""}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[]}],expression:"[ 'id', {rules: []} ]"}],attrs:{placeholder:"唯一识别码",disabled:"disabled"}})],1),n("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称",hasFeedback:""}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"不起一个名字吗？"}]}],expression:"[ 'name', {rules: [{ required: true, message: '不起一个名字吗？' }] }]"}],attrs:{placeholder:"起一个名字"}})],1),n("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",hasFeedback:""}},[n("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{rules:[]}],expression:"[ 'status', {rules: []} ]"}]},[n("a-select-option",{attrs:{value:1}},[e._v("正常")]),n("a-select-option",{attrs:{value:2}},[e._v("禁用")])],1)],1),n("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",hasFeedback:""}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe",{rules:[]}],expression:"[ 'describe', { rules: [] } ]"}],attrs:{rows:5,placeholder:"..."}})],1),n("a-divider"),n("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"拥有权限",hasFeedback:""}},e._l(e.permissions,(function(t,r){return n("a-row",{key:r,attrs:{gutter:16}},[n("a-col",{attrs:{span:4}},[e._v("\n            "+e._s(t.name)+"：\n          ")]),n("a-col",{attrs:{span:20}},[t.actionsOptions.length>0?n("a-checkbox",{attrs:{indeterminate:t.indeterminate,checked:t.checkedAll},on:{change:function(n){return e.onChangeCheckAll(n,t)}}},[e._v("\n              全选\n            ")]):e._e(),n("a-checkbox-group",{attrs:{options:t.actionsOptions},on:{change:function(n){return e.onChangeCheck(t)}},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"permission.selected"}})],1)],1)})),1)],1)],1)],1)},a=[],i=n("0fea");function o(e){try{return JSON.parse(e)}catch(t){}return[]}var l=n("88bc"),s=n.n(l),c={name:"RoleModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{},form:this.$form.createForm(this),permissions:[]}},created:function(){this.loadPermissions()},methods:{add:function(){this.edit({id:0})},edit:function(e){var t=this;if(this.mdl=Object.assign({},e),this.visible=!0,this.mdl.permissions&&this.permissions){var n={};this.mdl.permissions.forEach((function(e){n[e.permissionId]=e.actionEntitySet.map((function(e){return e.action}))})),this.permissions.forEach((function(e){e.selected=n[e.id]}))}this.$nextTick((function(){t.form.setFieldsValue(s()(t.mdl,"id","name","status","describe"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(t,n){t||(e.confirmLoading=!0,new Promise((function(e){setTimeout((function(){return e()}),2e3)})).then((function(){e.$message.success("保存成功"),e.$emit("ok")})).catch((function(){})).finally((function(){e.confirmLoading=!1,e.close()})))}))},handleCancel:function(){this.close()},onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){Object.assign(t,{selected:e.target.checked?t.actionsOptions.map((function(e){return e.value})):[],indeterminate:!1,checkedAll:e.target.checked})},loadPermissions:function(){var e=this;Object(i["e"])().then((function(t){var n=t.result;e.permissions=n.map((function(e){var t=o(e.actionData);return e.checkedAll=!1,e.selected=[],e.indeterminate=!1,e.actionsOptions=t.map((function(e){return{label:e.describe,value:e.action}})),e}))}))}}},u=c,d=n("2877"),f=Object(d["a"])(u,r,a,!1,null,"46bbfa96",null);t["default"]=f.exports}}]);