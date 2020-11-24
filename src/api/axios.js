import axios from 'axios'
import router from '@/router/index'
import { envName } from '@/config/env'
const END_POINT = `/${envName}`
const Axios = axios.create({
    baseURL: END_POINT,
    withCredentials: false,
    timeout: 600000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json'
    }
})
Axios.interceptors.response.use(
    response => {
        if (response?.data?.errorCode === '10004') {
            router.replace('/overdue')
        }
        return Promise.resolve(response)
    },
    // 接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error)
    }
)

/**
 * Get请求
 * @param {string} url
 * @param {object} params
 * @param {AxiosRequestConfig} options
 */
export function get(url, params, options) {
    return axios.get(url, {
        ...options,
        params
    })
}

/**
 * Post请求 formData类型
 * @param {string} url
 * @param {object} params
 * @param {AxiosRequestConfig} options
 */
export function post(url, options) {
    return axios.post(END_POINT + url, options, {
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Accept: 'application/json'
        }
    })
}

export function postAliImg(url, options) {
    return axios.post(url, options, {
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Accept: 'application/json'
        }
    })
}

export default Axios
