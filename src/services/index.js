import http from '../config/http'

export function login(params) {
    return http.post('/user/login', params)
}

export function register(params) {
    return http.post('/user/register', params)
}

export const getAllRooms = () => http.get('/room/types')

export const getTypeData = (type) => http.get('/data/getTypeData', {
    params: {
        tid: type
    }
})

export const getData = (rid) => http.get('/data/get', {
    params: {
        rid
    }
})