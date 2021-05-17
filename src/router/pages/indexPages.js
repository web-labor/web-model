import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '主页',
            icon: 'el-icon-s-home'
        },
        component: Home
    },
    {
        path: '/admin-set',
        name: 'AdminSet',
        meta: {
            title: '管理员设置',
            icon: 'el-icon-user-solid'
        },
        component: () => import('@/views/AdminSet.vue')
    }
]

export default routes
