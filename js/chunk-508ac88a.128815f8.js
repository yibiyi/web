(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-508ac88a","chunk-afcbd5be"],{"0eb5":function(e,t,r){},8428:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单号"}},[r("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("a-form-item",{attrs:{label:"订单类型"}},[r("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{md:6,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?r("a-dropdown",[r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",{key:"1",on:{click:e.batchDel}},[r("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),r("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),r("div",[r("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[r("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),r("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),r("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),r("a-table",{ref:"table",attrs:{bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:!1,expandedRowKeys:e.expandedRowKeys,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange,expand:e.handleExpand},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(a.id)}}},[r("a",[e._v("删除")])])],1)}},{key:"expandedRowRender",fn:function(t){return r("a-table",{attrs:{columns:e.innerColumns,dataSource:e.innerData,size:"middle",bordered:"",rowKey:"id",pagination:!1,loading:e.loading}})}}])})],1),r("jeecgOrderDMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],o=r("0fea"),l=r("dd9d"),i=r("b65a"),d={name:"TableDemo",mixins:[i["a"]],components:{JeecgOrderDMainModal:l["default"]},data:function(){return{innerColumns:[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"}],innerData:[],expandedRowKeys:[],id:" ",description:"列表展开子表Demo",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,r){return parseInt(r)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],type:"radio",url:{list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch",customerListByMainId:"/test/order/listOrderCustomerByMainId"}}},computed:{currentId:function(){return this.id}},methods:{handleExpand:function(e,t){var r=this;this.expandedRowKeys=[],this.innerData=[],!0===e&&(this.loading=!0,this.expandedRowKeys.push(t.id),Object(o["c"])(this.url.customerListByMainId,{mainId:t.id}).then((function(e){e.success&&(r.loading=!1,r.innerData=e.result.records)})))}}},c=d,s=(r("b8f4"),r("2877")),u=Object(s["a"])(c,a,n,!1,null,"3387e46e",null);t["default"]=u.exports},"84e8":function(e,t,r){},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",o="[object Function]",l="[object GeneratorFunction]",i="[object Symbol]",d="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=d||c||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function p(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function m(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var f=Object.prototype,b=f.hasOwnProperty,h=f.toString,y=s.Symbol,v=f.propertyIsEnumerable,g=y?y.isConcatSpreadable:void 0,M=Math.max;function w(e,t,r,a,n){var o=-1,l=e.length;r||(r=O),n||(n=[]);while(++o<l){var i=e[o];t>0&&r(i)?t>1?w(i,t-1,r,a,n):m(n,i):a||(n[n.length]=i)}return n}function C(e,t){return e=Object(e),x(e,t,(function(t,r){return r in e}))}function x(e,t,r){var a=-1,n=t.length,o={};while(++a<n){var l=t[a],i=e[l];r(i,l)&&(o[l]=i)}return o}function k(e,t){return t=M(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=M(r.length-t,0),o=Array(n);while(++a<n)o[a]=r[t+a];a=-1;var l=Array(t+1);while(++a<t)l[a]=r[a];return l[t]=o,u(e,this,l)}}function O(e){return I(e)||_(e)||!!(g&&e&&e[g])}function j(e){if("string"==typeof e||q(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function _(e){return D(e)&&b.call(e,"callee")&&(!v.call(e,"callee")||h.call(e)==n)}var I=Array.isArray;function S(e){return null!=e&&$(e.length)&&!R(e)}function D(e){return K(e)&&S(e)}function R(e){var t=L(e)?h.call(e):"";return t==o||t==l}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function K(e){return!!e&&"object"==typeof e}function q(e){return"symbol"==typeof e||K(e)&&h.call(e)==i}var B=k((function(e,t){return null==e?{}:C(e,p(w(t,1),j))}));e.exports=B}).call(this,r("c8ba"))},a8c3:function(e,t,r){"use strict";var a=r("0eb5"),n=r.n(a);n.a},b8f4:function(e,t,r){"use strict";var a=r("84e8"),n=r.n(a);n.a},dd9d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form-model",{ref:"form",attrs:{model:e.orderMainModel,rules:e.validatorRules}},[r("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"orderCode",label:"订单号",required:"",hasFeedback:""}},[r("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.orderMainModel.orderCode,callback:function(t){e.$set(e.orderMainModel,"orderCode",t)},expression:"orderMainModel.orderCode"}})],1),r("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.orderMainModel.ctype,callback:function(t){e.$set(e.orderMainModel,"ctype",t)},expression:"orderMainModel.ctype"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),r("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{attrs:{showTime:"",valueFormat:"YYYY-MM-DD HH:mm:ss"},model:{value:e.orderMainModel.orderDate,callback:function(t){e.$set(e.orderMainModel,"orderDate",t)},expression:"orderMainModel.orderDate"}})],1),r("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{staticStyle:{width:"200px"},model:{value:e.orderMainModel.orderMoney,callback:function(t){e.$set(e.orderMainModel,"orderMoney",t)},expression:"orderMainModel.orderMoney"}})],1),r("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{attrs:{placeholder:"请输入订单备注"},model:{value:e.orderMainModel.content,callback:function(t){e.$set(e.orderMainModel,"content",t)},expression:"orderMainModel.content"}})],1)],1)],1)],1)},n=[],o=r("0fea"),l=r("2dab"),i=(r("88bc"),r("c1df"),{name:"JeecgOrderDMainModal",components:{JDate:l["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{orderCode:[{required:!0,message:"请输入订单号!"}]},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){this.orderMainModel=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(r){if(!r)return!1;t.confirmLoading=!0;var a="",n="";e.orderMainModel.id?(a+=e.url.edit,n="put"):(a+=e.url.add,n="post"),Object(o["h"])(a,e.orderMainModel,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()}}}),d=i,c=(r("a8c3"),r("2877")),s=Object(c["a"])(d,a,n,!1,null,"2de11e5c",null);t["default"]=s.exports}}]);