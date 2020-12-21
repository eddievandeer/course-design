import { createStore } from 'vuex'
import { login } from '../services'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA(state, data) {
            state.user = data
        },
        CLEAR_USER_DATA(state) {
            state.user = null
        }
    },
    actions: {
        async doLogin({ commit }, param) {
            const response = await login(param)
            console.log(response)
            commit('SET_USER_DATA', response.data)
        },
        doLogout({ commit }) {
            commit('CLEAR_USER_DATA')
        }
    },
    modules: {}
})