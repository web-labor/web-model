/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-10-20 12:26:14
 * @LastModifyTime 2021-01-11 09:59:59
 */
/**
 * @desc 工具方法
 */

/**
 * @desc 判断是否为FormData
 * @param {*} param
 */
export const isFormData = param => {
    return Object.prototype.toString.call(param) === '[object FormData]'
}

/**
 * @desc 判断数组对象里面，是否存在键值为key的值相等
 */
export const valueOfKeyInArray = (arr, key, value) => {
    return arr.some(v => {
        return v[key] === value
    })
}

/**
 *   获取类型
 *   @method getType
 *   @param {Any} obj 用于判断类型的对象
 *   @return {String} 参数类型
 **/
export const getType = obj => {
    return Object.prototype.toString
        .call(obj)
        .replace(/\[object|\]|\s/g, '')
        .toLocaleLowerCase()
}

/**
 *
 * 判断是否为空字符串
 * @param {*} obj
 * @returns Boolean
 * @memberof Util
 */
export const isNUllObject = obj => {
    return getType(obj) === 'object' && JSON.stringify(obj) === '{}'
}

/**
 * 上传附件限制，单位为MB
 * @param {*} file 文件对象
 * @param {*} limit 大小
 */
export const checkSizeType = (file, limit) => {
    // limit单位为mb 默认为2
    const isLt = file.size / 1024 / 1024 < limit
    return isLt
}

export const arrInKeyValue = (arr, value, key, valKey) => {
    if (!(arr && key && value)) {
        return ''
    }
    const res = arr.filter(v => {
        return v[key] === value
    })
    return res.length > 0 ? res[0][valKey] : ''
}

export const isExist = str => {
    return !!str || str === 0
}

/**
 *   新增script
 *   @method addScript
 *   @param {String} url scr
 *   @return {Number} 返回最大值
 **/
export const addScript = (url, cb) => {
    const hasScript = document.getElementsByTagName('script')
    if ([...hasScript].some(v => url === v.src)) {
        cb()
        return
    }
    const script = document.createElement('script')
    script.src = url
    if (script.readyState) {
        // IE
        script.onreadystatechange = () => {
            if (
                script.readyState === 'loaded' ||
                script.readyState === 'complete'
            ) {
                script.onreadystatechange = null
                cb()
            }
        }
    } else {
        // 其他浏览器
        script.onload = () => {
            cb()
        }
    }
    document.body.appendChild(script)
}

/**
 * @desc 设置cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days 默认一天
 */
export const setCookie = (name, value, days) => {
    const exp = new Date()
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie =
        name + '=' + escape(value) + ';expires=' + exp.toUTCString()
}

/**
 * @desc 获取cookie
 * @param {String} name
 */
export const getCookie = name => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)
    if (arr) {
        return unescape(arr[2])
    } else {
        return null
    }
}

/**
 * @desc 删除cookie
 * @param {String} name
 */
export const delCookie = name => {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = getCookie(name)
    if (cval !== null) {
        document.cookie = name + '=' + cval + ';expires=' + exp.toUTCString()
    }
}

/**
 * 获取url中的参数值
 */
export const getUrlParam = (name, url) => {
    if (!url) {
        url = window.location.href
    }

    const reg = new RegExp('[\\[\\]]', 'g')
    name = name.replace(reg, '\\$&')
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    const results = regex.exec(url)
    if (!results) return ''
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
