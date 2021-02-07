import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import allMixin from '@/mixin/allMixin'
import config from './config'
import './plugins/element.js'
import '@/components/index.js'
import Msg from './service/message.service'
import * as types from '@/store/types'

// 通过路径获取参数
const search = new URLSearchParams(window.location.search)
const searchArr = [...search.keys()]
const query = {}
searchArr.forEach(v => {
    query[v] = search.get(v)
})

store.commit(`userInfo/${types.USERINFO_UPDATE}`, query)

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.$msg = Msg
Vue.prototype.$config = config

Vue.mixin(allMixin)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
