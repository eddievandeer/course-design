import { createStore } from 'vuex'
import { login } from '../services'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA(state, data) {
            state.user = data
            localStorage.setItem('user', JSON.stringify(data))
        },
        CLEAR_USER_DATA(state) {
            state.user = null
            localStorage.removeItem('user')
        }
    },
    actions: {
        doLogin({ commit }, param) {
            const response = login(param)
            response.then((result) => {
                if (result.data.code == 200) {
                    commit('SET_USER_DATA', result.data)
                }
            })
            return response
        },
        doLogout({ commit }) {
            commit('CLEAR_USER_DATA')
        }
    },
    modules: {}
})