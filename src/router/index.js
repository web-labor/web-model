import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        rname: '主页',
        icon: 'el-icon-s-home',
        component: Home
    },
    {
        path: '/AdminSet',
        name: 'AdminSet',
        rname: '管理员设置',
        icon: 'el-icon-user-solid',
        component: () => import('@/views/AdminSet.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
