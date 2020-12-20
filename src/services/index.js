import http from '../config/http'

function login(params) {
    return http.post('/login', params)
}

export {
    login
}