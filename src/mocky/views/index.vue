<template>
    <div class="wrap">
        <h1>Mocky Http Server</h1>
        <el-button
                type="primary"
                size="big"
                icon="el-icon-plus" @click="test">添加
        </el-button>


        <div>
            <editor v-model="content" @init="editorInit" lang="json" theme="tomorrow_night_blue"
            width="500px" height="400px"></editor>
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
                content: ''
            };
        },
        components:{
          editor: require('vue2-ace-editor')
        },
        methods: {
            editorInit(){
              require('brace/ext/language_tools')
              require('brace/mode/yaml')
              require('brace/mode/javascript')
              require('brace/mode/json')
              require('brace/mode/less')
              require('brace/theme/tomorrow_night_blue')
              require('brace/snippets/javascript')
              require('brace/snippets/json')

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

</style>
