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

export default http