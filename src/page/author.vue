<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>作者</span>
        </div>
        <div v-for="i in list" class="text item">
            <!--<img :src="i.author.avatar_url" />-->
        </div>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                this.$api.get('topics', null, r => {
                    this.list = r.data
                    console.log(r)
                })
            }
        }
    }
</script>

<style>

</style>