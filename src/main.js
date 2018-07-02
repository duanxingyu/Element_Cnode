// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App.vue'
import router from './router'

//引用API文件
import api from './api/index.js'
//将API方法绑定到全局
Vue.prototype.$api=api

//引入工具文件
import utils from './utils/index.js'
//将工具方法绑定到全局
Vue.prototype.$utils=utils
//转换中文标签
import utilsTab from './utils/tab.js'
Vue.prototype.$utilsTab=utilsTab


Vue.config.productionTip = false

//导入elementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
    el: '#app',
//  render: h => h(App),
    router,
    components: {
        App
    },
    template: '<App/>'
})