(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238446"],{ff3c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTableCheck}},[e._v("表单验证")]),a("span",{staticStyle:{"padding-left":"8px"}}),a("a-tooltip",{attrs:{placement:"top",title:"获取值，忽略表单验证",autoAdjustOverflow:!0}},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTableGet}},[e._v("获取值")])],1),a("span",{staticStyle:{"padding-left":"8px"}}),a("a-tooltip",{attrs:{placement:"top",title:"模拟加载1000条数据",autoAdjustOverflow:!0}},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTableSet}},[e._v("设置值")])],1),a("j-editable-table",{ref:"editableTable",staticStyle:{"margin-top":"8px"},attrs:{loading:e.loading,columns:e.columns,dataSource:e.dataSource,rowNumber:!0,rowSelection:!0,actionButton:!0,dragSort:!0},on:{selectRowChange:e.handleSelectRowChange},scopedSlots:e._u([{key:"action",fn:function(t){return[a("a",{on:{click:function(a){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1)},i=[],n=a("c1df"),o=a.n(n),d=a("e2e0"),s=a("ca00"),u=a("7550"),r={name:"DefaultTable",components:{JEditableTable:u["default"]},data:function(){return{loading:!1,columns:[{title:"字段名称",key:"dbFieldName",width:"300px",type:d["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"请输入${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]{0,}$/,message:"${title}必须以字母开头，可包含数字、下划线、横杠"},{unique:!0,message:"${title}不能重复"},{handler:function(e,t,a,l,i,n){"blur"===e&&"abc"===t?i(!1,"${title}不能是abc"):i(!0)},message:"${title}默认提示"}]},{title:"文件域",key:"upload",type:d["a"].upload,width:"300px",placeholder:"点击上传",token:!0,responseName:"message",action:window._CONFIG["domianURL"]+"/sys/common/upload",data:{biz:"temp"}},{title:"字段类型",key:"dbFieldType",width:"300px",type:d["a"].select,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowInput:!0,defaultValue:"",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"性别（字典）",key:"sex_dict",width:"300px",type:d["a"].select,options:[],dictCode:"sex",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"多选测试",key:"multipleSelect",width:"300px",type:d["a"].select,props:{mode:"multiple"},options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"这里可以多选",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"字段长度",key:"dbLength",width:"100px",type:d["a"].inputNumber,defaultValue:32,placeholder:"${title}",statistics:!0,validateRules:[{required:!0,message:"请输入${title}"}]},{title:"日期",key:"datetime",width:"320px",type:d["a"].datetime,defaultValue:"2019-4-30 14:52:22",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"数字",key:"money",width:"320px",type:d["a"].inputNumber,defaultValue:"100.32",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"可以为空",key:"isNull",width:"100px",type:d["a"].checkbox,customValue:["Y","N"],defaultChecked:!1},{type:d["a"].popup,key:"popup",title:"JPopup",width:"180px",popupCode:"demo",field:"name",orgFields:"name",destFields:"name"},{title:"操作",key:"action",width:"100px",type:d["a"].slot,slotName:"action"}],dataSource:[],selectedRowIds:[]}},mounted:function(){this.randomData(23,!1)},methods:{handleTableCheck:function(){var e=this;this.$refs.editableTable.getValues((function(t){0===t?e.$message.success("验证通过"):e.$message.error("验证未通过")}))},handleTableGet:function(){this.$refs.editableTable.getValues((function(e,t){}),!1),this.$message.info("获取值成功，请看控制台输出")},handleTableSet:function(){this.randomData(1e3,!0)},handleSelectRowChange:function(e){this.selectedRowIds=e},randomData:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.loading=!0);for(var l=function(){var e=parseInt(Object(s["j"])(1e3,9999999999999));return o()(new Date(e)).format("YYYY-MM-DD HH:mm:ss")},i=Date.now(),n=[],d=0;d<e;d++)n.push({id:Object(s["l"])(),dbFieldName:"name_".concat(d+1),multipleSelect:["string",["int","double","boolean"][Object(s["j"])(0,2)]],dbFieldType:["string","int","double","boolean"][Object(s["j"])(0,3)],dbLength:Object(s["j"])(0,233),datetime:l(),isNull:["Y","N"][Object(s["j"])(0,1)]});this.dataSource=n;var u=Date.now(),r=u-i;a&&r<e&&setTimeout((function(){t.loading=!1}),e-r)},handleDelete:function(e){var t=e.rowId,a=e.target;a.removeRows(t)}}},c=r,p=a("2877"),m=Object(p["a"])(c,l,i,!1,null,"7b1eae65",null);t["default"]=m.exports}}]);