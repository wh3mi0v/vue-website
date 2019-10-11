(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03000dba"],{"0f2c":function(e,t,a){"use strict";a.r(t),a.d(t,"list",function(){return n}),a.d(t,"add",function(){return s}),a.d(t,"edit",function(){return i}),a.d(t,"remove",function(){return o});var r=a("d722"),n=function(e){return r["a"].get("/roles",{params:e})},s=function(e){return r["a"].post("/role",e)},i=function(e){return r["a"].put("/role",e)},o=function(e){return r["a"].delete("/role",{params:params})}},cb8f:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"list",function(){return l}),a.d(r,"add",function(){return c}),a.d(r,"edit",function(){return u}),a.d(r,"remove",function(){return d}),a.d(r,"resetPassword",function(){return m});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"scrollbar blockLayout"},[a("div",{staticClass:"flex-row align-center toolBar"},[a("div",{staticClass:"flex-1"}),a("el-button",{directives:[{name:"has",rawName:"v-has",value:e.account.add,expression:"account.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{prop:"username",label:"账号",width:"150",align:"center"}}),a("el-table-column",{attrs:{prop:"realname",label:"用户名",width:"150",align:"center"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色",align:"center"}}),a("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1!=t.row.status?[a("span",{staticStyle:{color:"#ff4949"}},[e._v("已禁用")])]:[a("span",{staticStyle:{color:"#13ce66"}},[e._v("已启用")])]]}}])}),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"has",rawName:"v-has",value:e.account.edit,expression:"account.edit"}],attrs:{size:"mini",type:"info"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),a("el-button",{directives:[{name:"has",rawName:"v-has",value:e.account.resetPassword,expression:"account.resetPassword"}],attrs:{size:"mini",type:"warning"},on:{click:function(a){return e.resetPassword(t.row)}}},[e._v("重置密码")]),a("el-button",{directives:[{name:"has",rawName:"v-has",value:e.account.remove,expression:"account.remove"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1),e.list.length?a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.queryParam.limit,"current-page":e.queryParam.page,total:e.totalCount},on:{"current-change":e.handleCurrentChange}}):e._e(),a("el-dialog",{attrs:{title:"账号信息",visible:e.dialogVisible,width:"800px","show-close":!1,"close-on-click-modal":!1},on:{close:e.resetForm}},[a("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"realname"}},[a("el-input",{model:{value:e.editForm.realname,callback:function(t){e.$set(e.editForm,"realname",t)},expression:"editForm.realname"}})],1),e.editForm.id?e._e():[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.editForm.checkPass,callback:function(t){e.$set(e.editForm,"checkPass",t)},expression:"editForm.checkPass"}})],1)],a("el-form-item",{attrs:{label:"角色"}},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("el-checkbox-group",{staticStyle:{margin:"15px 0"},on:{change:e.handleCheckedChange},model:{value:e.editForm.roleIds,callback:function(t){e.$set(e.editForm,"roleIds",t)},expression:"editForm.roleIds"}},[a("el-row",{attrs:{gutter:20}},e._l(e.rolesList,function(t){return a("el-col",{key:"role"+t.id,attrs:{span:10}},[a("el-checkbox",{attrs:{label:t.id}},[e._v(e._s(t.name))])],1)}),1)],1)],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用","active-value":1,"inactive-value":2},model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}})],1)],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.save(),e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},s=[],i=a("df73"),o=a("d722"),l=function(e){return o["a"].get("/users",{params:e})},c=function(e){return o["a"].post("/user",e)},u=function(e){return o["a"].put("/user",e)},d=function(e){return o["a"].delete("/user",{params:e})},m=function(e){return o["a"].put("/user/password",e)},f=a("0f2c"),h={data:function(){var e=this,t=function(t,a,r){""===a?r(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())},a=function(t,a,r){""===a?r(new Error("请再次输入密码")):a!==e.ruleForm.password?r(new Error("两次输入密码不一致!")):r()};return{account:r,dialogVisible:!1,loading:!1,list:[],editForm:{id:"",username:"",realname:"",password:"",roleIds:[],status:1},queryParam:{limit:10,page:1},totalCount:0,rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],realname:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{validator:t,trigger:"blur"}],checkPass:[{validator:a,trigger:"blur"}]},isIndeterminate:!0,checkAll:!0,rolesList:[]}},methods:{handleCheckAllChange:function(e){this.$set(this.editForm,"roleIds",e?this.rolesList.map(function(e){return e.id}):[]),this.isIndeterminate=!1},handleCheckedChange:function(){var e=this.editForm.roleIds.length;this.checkAll=e===this.rolesList.length,this.isIndeterminate=e>0&&e<this.rolesList.length},handleCurrentChange:function(e){this.queryParam.page=e,this.fetchData()},resetPassword:function(e){var t=this;if(!e)return null;this.$confirm("确定重置账号 ".concat(e.username," 的密码?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.loading=!0,m(e).then(function(){t.fetchData(),t.$alert("密码已重置！",{confirmButtonText:"我知道了"})})})},edit:function(e){this.editForm=Object.assign({},e),this.dialogVisible=!0},save:function(){var e=this;e.$refs["editForm"].validate(function(t){if(t){var a=i["c"](e.editForm);a.id?u(a).then(function(){e.fetchData(),e.$message({message:"编辑成功",type:"success"})}):c(a).then(function(){e.fetchData(),e.$message({message:"添加成功",type:"success"})})}})},resetForm:function(){this.editForm={id:"",username:"",realname:"",password:"",roleIds:[],status:1}},remove:function(e){var t=this;if(!e||!e.id)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d({id:e.id}).then(function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})})},fetchData:function(e){var t=this;e&&(this.queryParam.page=1),this.loading=!0,l(this.queryParam).then(function(e){t.loading=!1;var a=e.data.data;a&&(t.list=a.list,t.totalCount=a.totalCount)})},fetchRoles:function(){var e=this;Object(f["list"])().then(function(t){e.rolesList=t.data.data})}},created:function(){this.fetchData(),this.fetchRoles()}},p=h,g=a("2877"),v=Object(g["a"])(p,n,s,!1,null,"1fd889fc",null);t["default"]=v.exports}}]);