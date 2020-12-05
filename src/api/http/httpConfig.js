/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-07-03 09:24:18
 * @LastModifyTime 2020-11-27 14:31:44
 * @desc http默认配置
 */

import { isFormData } from '@/utils/helper'

export default {
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/jsoncharset=UTF-8',
    Accept: 'application/json, image/jpeg'
  },
  transformRequest: [(data) => {
    if (isFormData(data)) {
      return data
    }
    return JSON.stringify(data)
  }]
}
