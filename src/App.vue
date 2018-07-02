<template>
    <div id="app">
 
        <!--通过router-view来将组件渲染出来-->
        <router-view />


    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    @import "./style/style";
</style>