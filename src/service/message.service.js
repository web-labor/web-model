/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-07-03 09:24:18
 * @LastModifyTime 2020-12-01 16:30:38
 */
import { Message } from 'element-ui'

/**
 * @desc 全局提示
 * @param 'success' | 'error' | 'warn' | 'info'
 * @param msg
 */

class Msg {
    success(msg) {
        if (!msg) {
            return
        }
        Message.success(msg)
    }

    error(msg) {
        if (!msg) {
            return
        }
        Message.error(msg)
    }

    warn(msg) {
        if (!msg) {
            return
        }
        Message.warning(msg)
    }

    info(msg) {
        if (!msg) {
            return
        }
        Message.info(msg)
    }
}

export default new Msg()
