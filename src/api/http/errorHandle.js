/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-10-20 12:17:01
 * @LastModifyTime 2020-11-27 14:43:52
 */
import { Message } from 'element-ui'

const StatusMap = {
    status_500: '服务器错误',
    status_404: '接口不存在',
    status_403: '无权限访问',
    default: '未知错误'
}

const resError = res => {
    Message({
        type: 'error',
        message: res.data.error || '网络超时'
    })
}

const errorHandle = error => {
    const status = error.response ? error.response.status : '600'
    switch (status) {
        case 404:
            return Promise.reject(StatusMap.status_404)
        case 403:
            return Promise.reject(StatusMap.status_403)
        case 500:
            return Promise.reject(StatusMap.status_500)
        default:
            return Promise.reject(StatusMap.default)
    }
}

export default (res, error) => {
    if (error) {
        return errorHandle(error)
    }
    return resError(res)
}
