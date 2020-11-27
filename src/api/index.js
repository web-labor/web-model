/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-10-20 12:17:01
 * @LastModifyTime 2020-11-27 14:39:55
 */
import api from './http'

const SERVICE_NAME = '/cloud-classroom-service'

export class Api {
  /* 文件上传接口 */
  uploadImage = (data) => {
    const formData = new window.FormData();
    formData.append('file', data.file);
    formData.append('networkId', undefined);
    formData.append('bizkey', 'crm');
    return api.post(`/docrest/file/uploadfile`, formData)
  }
  
  getBaseIndex = () => {
    return api.get(`${SERVICE_NAME}/base/index`)
  }
}

export default new Api()
