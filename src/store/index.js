import Vue from 'vue'
import Vuex from 'vuex'
import '@/plugins/vuexcache'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    getters: {
        userInfo (state) {
            return state.userInfo
        }
    },
    mutations: {
        SAVEUSERINFO (state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        saveUserInfo (context, userInfo) {
            context.commit('SAVEUSERINFO', userInfo)
        }
    },
    modules: {}
})
