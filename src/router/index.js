import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
//import Author from '@/page/author'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [{
        path: '/',
        component: Index
    }, {
        path: '/content/:id',
        component: Content
    }
//  , {
//      path: '/topic_collect/:loginname',
//      component: Author
//  }
    ]
})