import axios from 'axios'
import { baseUrl } from './env'

const http = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

http.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            store.dispatch('doLogout')
        }
        return Promise.reject(error)
    }
)

export default http