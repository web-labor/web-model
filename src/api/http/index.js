/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-10-20 12:30:17
 * @LastModifyTime 2020-11-27 14:37:13
 */

import axios from 'axios'
import httpConfig from './httpConfig'
import httpInterceptors from './httpInterceptors'

const api = axios.create(httpConfig)
Object.keys(httpInterceptors).forEach((key) => {
  const interceptor = httpInterceptors[key]
  if (!interceptor) {
    return
  }
  api.interceptors[key].use(...interceptor)
})
export default api
