import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import './plugins/element.js'
import './assets/styles/index.less'
import PageHeader from '@/components/PageHeader'
Vue.component('PageHeader', PageHeader)
Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
