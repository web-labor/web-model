/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-11-27 13:55:47
 * @LastModifyTime 2020-11-27 13:58:40
 */

import { Loading } from 'element-ui'

/**
 * @description 请求loading 装饰
 * @param {object} option
 */
export const withLoading = (
    option = {
        message: '加载中'
    }
) => {
    return function(target, name, descriptor) {
        const originFunc = descriptor.value
        descriptor.value = async function(...args) {
            let loadingInstance = Loading.service({ text: option.message })
            let res
            try {
                res = await originFunc.apply(this, args)
                loadingInstance.close()
            } catch (e) {
                loadingInstance.close()
                res = Promise.reject(e)
            }
            return res
        }
    }
}
