<template>
    <div class="wrap">
        <h1>Mocky Http Server</h1>

        <div class="scrollbar blockLayout">
            <el-form style="width: 50%"
                     :model="ruleForm"
                     status-icon
                     ref="ruleForm"
                     label-width="100px">

                <el-form-item label="Status Code">
                    <el-select v-model="ruleForm.password" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>


                <el-form-item label="Content Type">
                    <el-col :span="11">
                        <el-select v-model="ruleForm.password" placeholder="活动区域">
                            <el-option label="区域一fefaefffffffffffffffffffffff" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-col>
                    <el-col class="line" :span="2"></el-col>
                    <el-select v-model="ruleForm.password" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-col :span="11">
                    </el-col>
                </el-form-item>


                <el-form-item label="Body">

                    <div class="editor">
                        <editor v-model="content" @init="editorInit" lang="json" theme="tomorrow"
                                width="500px" height="200px" :options="editOptions" ></editor>
                    </div>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="test">生成模拟请求</el-button>
                    <el-button @click="test">高级设置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
    </div>
</template>

<script>
    import * as mocky from "../api/mocky";

    export default {
        name: 'aceEditor',
        data() {
            return {
                content: '',
                ruleForm: {
                    old_password: "",
                    checkPass: "",
                    password: ""
                },
                editOptions: {
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false,
                    readOnly: false,
                    showInvisibles: true,
                    showPrintMargin: false,
                    showGutter: false,
                    showHighlightActiveLine: false,
                    selectionStyle: "text",
                    cursorStyle: "wide",//"ace"|"slim"|"smooth"|"wide"
                    behavioursEnabled: true,
                    wrapBehavioursEnabled: true,
                    autoScrollEditorIntoView: true,
                    copyWithEmptySelection: true,
                    navigateWithinSoftTabs: true
                }

            };
        },
        components: {
            editor: require('vue2-ace-editor')
        },
        methods: {
            editorInit() {
                require('brace/ext/language_tools')
                require('brace/mode/yaml')
                require('brace/mode/javascript')
                require('brace/mode/json')
                require('brace/mode/less')
                require('brace/theme/tomorrow')
                require('brace/snippets/javascript')
                require('brace/snippets/json')
                // var editor = ace.edit(id);
                // editor.setTheme("ace/theme/tomorrow");
                // editor.setHighlightActiveLine(false);
                // editor.setShowPrintMargin(false);
                // editor.renderer.setShowGutter(false);
                // editor.getSession().setMode("ace/mode/json");
            },
            test() {
                let req = {
                    statusCode: 200
                }
                mocky.generateMock.r(req).then((rsp) => {
                    console.log("rsp ===", rsp);
                }).catch(err => {
                    console.log("request occure error", err);
                })
            }
        },
        created: function () {

        }
    };
</script>

<style scoped>
    .editor {
        border: 1px solid #DCDFE6;
    }
</style>
