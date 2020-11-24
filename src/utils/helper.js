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
