<!--列表-->
<template>
    <el-container>
        <el-header>
            <!--<Header></Header>-->
            <el-menu class="el-menu-demo" mode="horizontal">
                <Header></Header>
            </el-menu>
        </el-header>
        <el-main>
            <div class="article_list">
                <el-row>
                    <el-col :span="18" :offset="3">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <i class="el-icon-caret-bottom"></i> <span>文章列表{{$api.get(limit)}}<span></span></span>
                            </div>
                            <div id="nav_tab">
                                <router-link to="">全部</router-link>
                                <!--<a href="$api.get('/?tab=tab')">全部</a>-->
                                <router-link to="">精华</router-link>
                                <!--<a href="/?tab=good">精华</a>-->
                                <router-link to="">分享</router-link>
                                <!--<a href="/?tab=share">分享</a>-->
                                <router-link to="">问答</router-link>
                                <!--<a href="/?tab=ask">问答</a>-->
                                <!--<a href="/?tab=job">招聘</a>-->

                            </div>

                            <div v-for="i in list">

                                <el-row>
                                    <el-col :span="24">

                                        <!--<img src="'//dn-cnode.qbox.me/'+i.id" />-->
                                        <span id="avatar">
                                                  <a :href="url"><img :src="i.author.avatar_url" width="30px"
                                                                      height="30px"/></a>

                                                </span>
                                        <time v-text="$utils.goodTime(i.create_at)"></time>

                                        <span id="reply_coment"><span>{{i.reply_count}}</span>/<span>{{i.visit_count}}</span></span>

                                        <!--<span v-if="i.good===true">
                                <el-tag id="good" type="success" size="mini" v-text="$utilsTab.getGood(i.good)"></el-tag>
                            </span>-->

                                        <!--<span v-else-if="i.top===true">
                                <el-tag id="top" type="danger" size="mini" v-text="$utilsTab.getTop(i.top)"></el-tag>
                            </span>-->

                                        <span v-if="true ? i.top : i.good">
                                                    <el-tag id="top" type="danger" size="mini"
                                                            v-text="$utilsTab.getTop(i.top)"></el-tag>
                                                </span>

                                        <span v-else-if="false ? i.top : i.good">
                                                    <el-tag id="good" type="success" size="mini"
                                                            v-text="$utilsTab.getGood(i.good)"></el-tag>
                                        </span>

                                        <span v-else>

                                                    <el-tag id="tab" size="mini"
                                                            v-text="$utilsTab.getTab(i.tab)"></el-tag>
                                                </span>

                                        <router-link :to=" '/content/'+i.id " :title="i.title">{{i.title}}</router-link>

                                    </el-col>
                                </el-row>

                            </div>
                            <el-pagination id="pages" background layout="prev, pager, next" :total="$api.get('topics',page)">
                            </el-pagination>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-main>

        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>

</template>



<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'
    import ElCard from "element-ui/packages/card/src/main";

    export default {
        components: {
            Header,
            Footer
        },
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
                })
            }

        }

    }
</script>

<style>
    .el-col {
        border-radius: 4px;
        border-bottom: 1px solid #ccc;
    }
    
    .bg-purple-light {
        background: #ffff;
        height: 45px;
        font-family: "PingFang SC";
    }
    
    #app>section>main>div>div>div>div>div.el-card__body>div>div>div>a {
        line-height: 45px;
        margin-left: 15px;
        color: #000;
        /*        float: left;*/
        text-decoration: none;
    }
    
    #app div.el-card__body a:hover {
        text-decoration: underline;
    }
    
    .bg-purple-light:hover {
        background: #f0f0f0;
    }
    
    time {
        text-align: right;
        float: right;
        display: inline-block;
        /*position: relative;*/
        line-height: 45px;
        font-size: 12px;
        margin-right: 15px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    
    #tab,
    #good,
    #top {
        width: 40px;
        text-align: center;
    }
    
    #reply_coment {
        width: 70px;
        float: left;
        line-height: 45px;
        color: #606266;
        margin-left: 8px;
        margin-right: 8px;
        font-size: 14px;
        text-align: center;
    }
    
    #reply_coment>span:first-child {
        color: #409EFF;
    }
    
    #reply_coment>span:last-child {
        color: #A6A9AD;
    }
    
    #avatar {
        float: left;
        margin: 8px 0 0 10px;
    }
    
    #avatar>img {
        border-radius: 4px;
    }
    
    #pages {
        margin-top: 10px;
    }
    
    .el-card__body>div>div>div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-top: 10px;
        line-height: 45px;
    }
    
    .el-card__body>div>div>div:hover {
        background: #F0F2F5;
    }
    
    #nav_tab {
        background: #F0F2F5;
        line-height: 45px;
        font-size: 14px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    
    #nav_tab a {
        padding: 20px;
        text-decoration: none;
        color: #666666;
    }
</style>