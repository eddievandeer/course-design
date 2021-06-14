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

export const check = async (selects, rid) => {
    let result = await http.get('/order/check', {
        params: {
            checkin_time: selects.checkin_time,
            leave_time: selects.checkout_time,
            rid
        }
    })
    if (result.data.code == 200) {
        return true
    }
    else if (result.data.code == 400) {
        return false
    }
    return false
}

export const reserve = (params, uid) => http.post('/order/reserve', {
    ...params,
    uid
})

export const logs = (uid) => http.get('/order/logs', {
    params: {
        uid
    }
})

export const cancel = (oid) => http.post('/order/cancel', {
    oid
})

export const remove = (oid) => http.post('/order/delete', {
    oid
})

export const checkout = (oid) => http.post('/order/checkout', {
    oid
})

export const recharge = (uid, amount) => http.post('/user/recharge', {
    uid,
    amount
})

export const showme = (uid) => http.get('/user/showme', {
    params: {
        uid
    }
})

export const getLog = (rid) => http.get('/data/getLog', {
    params: {
        rid
    }
})