import http from '../config/http'

function login(params) {
    return http.post('/user/login', params)
}

function register(params) {
    return http.post('/user/register', params)
}

export {
    login,
    register
}