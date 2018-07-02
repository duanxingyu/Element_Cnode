<template>
    <header class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#545c64" mode="horizontal" @select="handleSelect">
            <router-link :to=" '/' ">
                <img id="logo_img" src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" width="150px" height="45px" />
            </router-link>

            <el-menu-item index="0">

                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">

                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>

            </el-menu-item>
            <el-menu text-color="#ccc" active-text-color="#eee" class="el-menu-demo" background-color="#545c64" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
                    首页
                </el-menu-item>

                <el-menu-item index="2">
                    新手入门
                </el-menu-item>
                <el-menu-item index="3">
                    API
                </el-menu-item>
                <el-menu-item index="4">
                    关于
                </el-menu-item>
                <el-menu-item index="5">
                    注册
                </el-menu-item>

                <el-menu-item index="6">
                    登录
                </el-menu-item>

            </el-menu>
        </el-menu>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input5:''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    /*#app > section > header > ul > header > ul > form > div{
        width: 220px;
    }*/
</style>