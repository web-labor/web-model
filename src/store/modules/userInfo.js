import * as types from '../types'
import api from '@/api'

// 初始化这些字段，避免watch 不到，
const state = {
    ticket: '',
    client_id: '',
    appId: '',
    userName: '',
    department: '',
    openId: '',
    name: '',
    type: '',
    photoUrl: ''
}
const mutations = {
    [types.USERINFO_INIT](state, payload) {
        Object.keys(state).forEach(key => {
            if (payload[key]) state[key] = payload[key]
        })
        console.info('state', state)
    },

    [types.USERINFO_UPDATE](state, payload) {
        Object.assign(state, payload)
    }
}

const actions = {
    async [types.USERINFO_ACTION_UPDATE]({ commit }) {
        // 请求
        const { data } = await api.getUserInfo()
        commit(types.USERINFO_UPDATE, data)
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
