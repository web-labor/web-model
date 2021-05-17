import * as types from '../types'

const state = {
    menuCollapse: false
}
const mutations = {
    [types.SYSTEM_UPDATE](state, payload) {
        Object.assign(state, payload)
    }
}

const actions = {}

const getters = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
