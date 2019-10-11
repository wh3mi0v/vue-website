(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8db54c3c"],{1752:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"scrollbar blockLayout"},[r("div",{staticClass:"flex-row align-center toolBar"},[r("div",{staticClass:"flex-1"}),r("el-button",{directives:[{name:"has",rawName:"v-has",value:e.resource.add,expression:"resource.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.editForm.type=1,e.editForm.pid=null,e.dialogVisible=!0}}},[e._v("添加")])],1),r("div",{staticClass:"resourceWrap"},[r("resourcePicker",{attrs:{listdata:e.list},on:{edit:e.edit,append:e.append,addResource:e.addResource,remove:e.remove}})],1),r("el-dialog",{attrs:{title:1==e.editForm.type?"路由信息":"资源信息",visible:e.dialogVisible,width:"800px","show-close":!1,"close-on-click-modal":!1},on:{closed:e.resetForm}},[r("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"===typeof t?t.trim():t)},expression:"editForm.name"}})],1),r("el-form-item",{attrs:{label:"序号"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.orderNum,callback:function(t){e.$set(e.editForm,"orderNum","string"===typeof t?t.trim():t)},expression:"editForm.orderNum"}})],1),e.editForm.url?r("el-form-item",{attrs:{label:"方法",prop:"method"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.method,callback:function(t){e.$set(e.editForm,"method",t)},expression:"editForm.method"}},e._l(e.requestMethods,function(e,t){return r("el-option",{key:"m"+t,attrs:{label:e.label,value:e.label.toLowerCase()}})}),1)],1):e._e(),e.editForm.url?r("el-form-item",{attrs:{label:"URL",prop:"url"}},[r("el-input",{model:{value:e.editForm.url,callback:function(t){e.$set(e.editForm,"url","string"===typeof t?t.trim():t)},expression:"editForm.url"}})],1):r("el-form-item",{attrs:{label:"路由",prop:"route"}},[r("el-input",{model:{value:e.editForm.route,callback:function(t){e.$set(e.editForm,"route","string"===typeof t?t.trim():t)},expression:"editForm.route"}})],1),r("el-form-item",{attrs:{label:"父级"}},[r("el-cascader",{attrs:{options:e.list,props:{checkStrictly:!0,label:"name",value:"id"}},model:{value:e.editForm.pid,callback:function(t){e.$set(e.editForm,"pid",t)},expression:"editForm.pid"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},o=[],n=r("df73"),a=r("3af3"),s=(r("38c0"),r("9f03")),l=r("c0d6"),d={components:{resourcePicker:function(e){return r.e("chunk-861e0b0a").then(function(){var t=[r("9b7b")];e.apply(null,t)}.bind(this)).catch(r.oe)}},data:function(){var e=this,t=function(t,r,i){if(2===e.editForm.type&&!r)return i(new Error("请填写Method!"));i()};return{resource:a,dialogVisible:!1,loading:!1,list:[],editForm:{pid:null,method:"get",name:"",url:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],url:[{required:!0,message:"请输入路由/URL",trigger:"blur"}],method:[{validator:t,trigger:"blur"}]},requestMethods:[{label:"GET"},{label:"POST"},{label:"PUT"},{label:"DELETE"}]}},methods:{edit:function(e){this.editForm=e,this.dialogVisible=!0},append:function(e){this.editForm={pid:e.id,name:"",route:""},this.dialogVisible=!0},addResource:function(e){this.editForm={pid:e.id,method:"get",name:"",url:""},this.dialogVisible=!0},save:function(){var e=this;this.$refs["editForm"].validate(function(t){if(t){var r=n["c"](e.editForm);Array.isArray(r.pid)&&(r.pid=r.pid[r.pid.length-1]),r.method&&(r.method=r.method.toLowerCase()),e.loading=!0,r.id?a["edit"](r).then(function(){e.fetchData(),e.$message({message:"编辑成功",type:"success"}),e.dialogVisible=!1}):a["add"](r).then(function(){e.fetchData(),e.$message({message:"添加成功",type:"success"}),e.dialogVisible=!1})}})},resetForm:function(){this.$nextTick(function(){this.$refs["editForm"].resetFields()})},remove:function(e){var t=this;if(!e)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a["remove"](e).then(function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})})},fetchData:function(){var e=this;this.loading=!0,s["d"]().then(function(t){e.loading=!1;var r=t.data.data;l["a"].set("permission",r),e.list=n["a"](r.menus.concat(r.resources))})}},created:function(){this.fetchData()}},u=d,c=r("2877"),m=Object(c["a"])(u,i,o,!1,null,"6912d115",null);t["default"]=m.exports},"38c0":function(e,t,r){"use strict";r.r(t),r.d(t,"list",function(){return o}),r.d(t,"add",function(){return n}),r.d(t,"edit",function(){return a}),r.d(t,"remove",function(){return s});var i=r("d722"),o=function(e){return i["a"].get("/menus",{params:e})},n=function(e){return i["a"].post("/menu",e)},a=function(e){return i["a"].put("/menu",e)},s=function(e){return i["a"].delete("/menu",{params:e})}},"3af3":function(e,t,r){"use strict";r.r(t),r.d(t,"list",function(){return o}),r.d(t,"add",function(){return n}),r.d(t,"edit",function(){return a}),r.d(t,"remove",function(){return s});var i=r("d722"),o=function(e){return i["a"].get("/resources",{params:e})},n=function(e){return i["a"].post("/resource",e)},a=function(e){return i["a"].put("/resource",e)},s=function(e){return i["a"].delete("/resource",{params:e})}}}]);