<!--内容-->
<template>

    <el-row :gutter="24">
        <el-header>
            <!--<Header></Header>-->
            <el-menu class="el-menu-demo" mode="horizontal">
                <myHeader></myHeader>
            </el-menu>
        </el-header>

        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" :offset="2">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span><h2 v-text="dat.title"></h2></span>
                    <h5>作者：{{dat.author.loginname}}&nbsp;&nbsp;{{$utils.goodTime(dat.create_at)}} &nbsp;&nbsp; 标签：<el-tag size="mini" type="info">{{$utilsTab.getTab(dat.tab)}}</el-tag>&nbsp;&nbsp;浏览数：{{dat.visit_count}}</h5>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                </div>
                <div class="text item">
                    <article id="article" v-html="dat.content"></article>

                </div>

            </el-card>

        </el-col>
        <!--<el-col style="float: right;margin-right: 25px;" :span="5">
             <author></author>
         </el-col>-->
        <el-col :span="20" :offset="2">

            <el-card id="comment_card" class="box-card">
                <div slot="header" class="clearfix">
                    <h3>评论区</h3>
                    <span>{{dat.reply_count}}</span>条回复
                </div>
                <div class="text item">
                    <ul>
                        <li v-for="i in dat.replies">

                            <p>
                                <div id="avatar_img">
                                    <img :src="i.author.avatar_url" width="30px" height="30px" />
                                </div>

                                <div>
                                    <span id="loginname">{{i.author.loginname}}</span>&nbsp;&nbsp; <span id="comment">{{$utils.goodTime(i.create_at)}}</span>
                                </div>
                            </p>
                            <article id="comment_art" v-html="i.content"></article>
                        </li>
                    </ul>
                </div>
            </el-card>
        </el-col>

    </el-row>

</template>

<script>
    import myHeader from '../components/header.vue'
    import myFooter from '../components/footer.vue'
    import author from '../page/author.vue'
    export default {
        components: {
            myHeader,
            myFooter,
            author
        },
        data() {
            return {
                id: this.$route.params.id,
                dat: {}
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                this.$api.get('topic/' + this.id, null, r => {
                    this.dat = r.data
                    console.log(r)
                })
            }
        }
    }
</script>

<style>
    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    
    h2,
    h5 {
        text-align: center;
    }
    
    ul {
        list-style: none;
    }
    
    ul>li {
        border-bottom: 1px solid #ebeef5;
        z-index: 10;
    }
    
    #loginname {
        font-weight: 600;
        color: #67C23A;
        font-size: 14px;
    }
    
    #comment {
        margin-left: 2px;
        font-size: 14px;
        color: #c88326 !important;
    }
    
    #comment_card {
        margin-top: 10px;
    }
    
    #comment_art {
        margin: 20px 0px 0px 40px;
        font-size: 18px;
    }
    
    #avatar_img {
        width: 30px;
        height: 30px;
        margin: 0px 10px 0px 0px;
        float: left;
    }
    
    #app>div>header {
        margin-bottom: 10px;
    }
</style>