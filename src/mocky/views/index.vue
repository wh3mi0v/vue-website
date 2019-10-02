<template>
    <div class="wrap">
        <h1>Mocky Http Server</h1>
        <el-button
                type="primary"
                size="big"
                icon="el-icon-plus" @click="test">添加
        </el-button>


    </div>
    </div>
</template>

<script>
    import * as mocky from "../api/mocky";

    export default {
        data() {
            return {};
        },
        methods: {
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
