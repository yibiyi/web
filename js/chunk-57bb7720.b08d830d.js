(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57bb7720","chunk-2d238446","chunk-2d0f05f3","chunk-2d0a3776"],{"01fe":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-editable-table",{attrs:{columns:e.columns,dataSource:e.dataSource,rowNumber:!0,actionButton:!0,rowSelection:!0,maxHeight:400},on:{valueChange:e.handleValueChange}})},n=[],i=a("e2e0"),o=a("7550"),u={name:"ThreeLinkage",components:{JEditableTable:o["default"]},data:function(){return{columns:[{title:"省/直辖市/自治区",key:"s1",type:i["a"].select,width:"240px",options:[],placeholder:"请选择${title}"},{title:"市",key:"s2",type:i["a"].select,width:"240px",options:[],placeholder:"请选择${title}"},{title:"县/区",key:"s3",type:i["a"].select,width:"240px",options:[],placeholder:"请选择${title}"}],dataSource:[],mockData:[{label:"北京市",value:"110000",parent:null},{label:"天津市",value:"120000",parent:null},{label:"河北省",value:"130000",parent:null},{label:"上海市",value:"310000",parent:null},{label:"北京市",value:"110100",parent:"110000"},{label:"天津市市",value:"120100",parent:"120000"},{label:"石家庄市",value:"130100",parent:"130000"},{label:"唐山市",value:"130200",parent:"130000"},{label:"秦皇岛市",value:"130300",parent:"130000"},{label:"上海市",value:"310100",parent:"310000"},{label:"东城区",value:"110101",parent:"110100"},{label:"西城区",value:"110102",parent:"110100"},{label:"朝阳区",value:"110105",parent:"110100"},{label:"和平区",value:"120101",parent:"120000"},{label:"河东区",value:"120102",parent:"120000"},{label:"河西区",value:"120103",parent:"120000"},{label:"黄浦区",value:"310101",parent:"310100"},{label:"徐汇区",value:"310104",parent:"310100"},{label:"长宁区",value:"310105",parent:"310100"},{label:"长安区",value:"130102",parent:"130100"},{label:"桥西区",value:"130104",parent:"130100"},{label:"新华区",value:"130105",parent:"130100"},{label:"路南区",value:"130202",parent:"130200"},{label:"路北区",value:"130203",parent:"130200"},{label:"古冶区",value:"130204",parent:"130200"},{label:"海港区",value:"130302",parent:"130300"},{label:"山海关区",value:"130303",parent:"130300"},{label:"北戴河区",value:"130304",parent:"130300"}]}},mounted:function(){this.columns[0].options=this.request(null)},methods:{request:function(e){return this.mockData.filter((function(t){return t.parent===e}))},handleValueChange:function(e){var t=e.type,a=e.row,l=e.column,n=e.value,o=e.target;t===i["a"].select&&("s1"===l.key?(this.columns[1].options=this.request(n),o.setValues([{rowKey:a.id,values:{s2:"",s3:""}}]),this.columns[2].options=[]):"s2"===l.key&&(this.columns[2].options=this.request(n),o.setValues([{rowKey:a.id,values:{s3:""}}])))}}},r=u,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,"bd50bcca",null);t["default"]=d.exports},"9ba5":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-editable-table",{attrs:{columns:e.columns,dataSource:e.dataSource,rowNumber:!0,rowSelection:!0,maxHeight:400,disabled:!0}})},n=[],i=a("e2e0"),o=a("7550"),u={name:"ReadOnlyTable",components:{JEditableTable:o["default"]},data:function(){return{columns:[{title:"输入框",key:"input",type:i["a"].input,placeholder:"清输入"},{title:"下拉框",key:"select",type:i["a"].select,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],placeholder:"请选择"},{title:"多选框",key:"checkbox",type:i["a"].checkbox,customValue:[!0,!1]},{title:"日期",key:"datetime",type:i["a"].datetime}],dataSource:[{input:"hello",select:"int",checkbox:!0,datetime:"2019-6-17 14:50:48"},{input:"world",select:"string",checkbox:!1,datetime:"2019-6-16 14:50:48"},{input:"one",select:"double",checkbox:!0,datetime:"2019-6-17 15:50:48"},{input:"two",select:"boolean",checkbox:!1,datetime:"2019-6-14 14:50:48"},{input:"three",select:"",checkbox:!1,datetime:"2019-6-13 14:50:48"}]}},mounted:function(){}},r=u,s=a("2877"),d=Object(s["a"])(r,l,n,!1,null,"967c037a",null);t["default"]=d.exports},b020:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-tabs",[a("a-tab-pane",{key:"1",attrs:{tab:"普通列表"}},[a("default-table")],1),a("a-tab-pane",{key:"2",attrs:{tab:"只读列表"}},[a("read-only-table")],1),a("a-tab-pane",{key:"3",attrs:{tab:"三级联动"}},[a("three-linkage")],1)],1)],1)},n=[],i=a("ff3c"),o=a("9ba5"),u=a("01fe"),r={name:"JeecgEditableTableExample",components:{DefaultTable:i["default"],ReadOnlyTable:o["default"],ThreeLinkage:u["default"]},data:function(){return{}},methods:{}},s=r,d=a("2877"),c=Object(d["a"])(s,l,n,!1,null,"7e88b5ec",null);t["default"]=c.exports},ff3c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTableCheck}},[e._v("表单验证")]),a("span",{staticStyle:{"padding-left":"8px"}}),a("a-tooltip",{attrs:{placement:"top",title:"获取值，忽略表单验证",autoAdjustOverflow:!0}},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTableGet}},[e._v("获取值")])],1),a("span",{staticStyle:{"padding-left":"8px"}}),a("a-tooltip",{attrs:{placement:"top",title:"模拟加载1000条数据",autoAdjustOverflow:!0}},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleTableSet}},[e._v("设置值")])],1),a("j-editable-table",{ref:"editableTable",staticStyle:{"margin-top":"8px"},attrs:{loading:e.loading,columns:e.columns,dataSource:e.dataSource,rowNumber:!0,rowSelection:!0,actionButton:!0,dragSort:!0},on:{selectRowChange:e.handleSelectRowChange},scopedSlots:e._u([{key:"action",fn:function(t){return[a("a",{on:{click:function(a){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1)},n=[],i=a("c1df"),o=a.n(i),u=a("e2e0"),r=a("ca00"),s=a("7550"),d={name:"DefaultTable",components:{JEditableTable:s["default"]},data:function(){return{loading:!1,columns:[{title:"字段名称",key:"dbFieldName",width:"300px",type:u["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"请输入${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]{0,}$/,message:"${title}必须以字母开头，可包含数字、下划线、横杠"},{unique:!0,message:"${title}不能重复"},{handler:function(e,t,a,l,n,i){"blur"===e&&"abc"===t?n(!1,"${title}不能是abc"):n(!0)},message:"${title}默认提示"}]},{title:"文件域",key:"upload",type:u["a"].upload,width:"300px",placeholder:"点击上传",token:!0,responseName:"message",action:window._CONFIG["domianURL"]+"/sys/common/upload",data:{biz:"temp"}},{title:"字段类型",key:"dbFieldType",width:"300px",type:u["a"].select,options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowInput:!0,defaultValue:"",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"性别（字典）",key:"sex_dict",width:"300px",type:u["a"].select,options:[],dictCode:"sex",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"多选测试",key:"multipleSelect",width:"300px",type:u["a"].select,props:{mode:"multiple"},options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"这里可以多选",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"字段长度",key:"dbLength",width:"100px",type:u["a"].inputNumber,defaultValue:32,placeholder:"${title}",statistics:!0,validateRules:[{required:!0,message:"请输入${title}"}]},{title:"日期",key:"datetime",width:"320px",type:u["a"].datetime,defaultValue:"2019-4-30 14:52:22",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"数字",key:"money",width:"320px",type:u["a"].inputNumber,defaultValue:"100.32",placeholder:"请选择${title}",validateRules:[{required:!0,message:"请选择${title}"}]},{title:"可以为空",key:"isNull",width:"100px",type:u["a"].checkbox,customValue:["Y","N"],defaultChecked:!1},{type:u["a"].popup,key:"popup",title:"JPopup",width:"180px",popupCode:"demo",field:"name",orgFields:"name",destFields:"name"},{title:"操作",key:"action",width:"100px",type:u["a"].slot,slotName:"action"}],dataSource:[],selectedRowIds:[]}},mounted:function(){this.randomData(23,!1)},methods:{handleTableCheck:function(){var e=this;this.$refs.editableTable.getValues((function(t){0===t?e.$message.success("验证通过"):e.$message.error("验证未通过")}))},handleTableGet:function(){this.$refs.editableTable.getValues((function(e,t){}),!1),this.$message.info("获取值成功，请看控制台输出")},handleTableSet:function(){this.randomData(1e3,!0)},handleSelectRowChange:function(e){this.selectedRowIds=e},randomData:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.loading=!0);for(var l=function(){var e=parseInt(Object(r["j"])(1e3,9999999999999));return o()(new Date(e)).format("YYYY-MM-DD HH:mm:ss")},n=Date.now(),i=[],u=0;u<e;u++)i.push({id:Object(r["l"])(),dbFieldName:"name_".concat(u+1),multipleSelect:["string",["int","double","boolean"][Object(r["j"])(0,2)]],dbFieldType:["string","int","double","boolean"][Object(r["j"])(0,3)],dbLength:Object(r["j"])(0,233),datetime:l(),isNull:["Y","N"][Object(r["j"])(0,1)]});this.dataSource=i;var s=Date.now(),d=s-n;a&&d<e&&setTimeout((function(){t.loading=!1}),e-d)},handleDelete:function(e){var t=e.rowId,a=e.target;a.removeRows(t)}}},c=d,p=a("2877"),b=Object(p["a"])(c,l,n,!1,null,"7b1eae65",null);t["default"]=b.exports}}]);