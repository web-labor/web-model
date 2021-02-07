/**
 * @Author wangbo
 * @Email bo_wb@yunzhijia.com
 * @LastAuthor wangbo
 * @CreatedTime 2020-09-10 19:26:00
 * @LastModifyTime 2020-12-10 09:34:08
 * @desc 在这里安装所有有安装方法的组件
 */

import Vue from 'vue'
import LayoutPage from './layout/Page'
import LayoutHead from './layout/Header'

Vue.component(LayoutPage.name, LayoutPage)
Vue.component(LayoutHead.name, LayoutHead)

const installModuleList = require.context('./', true, /(\/install.js$)/)

installModuleList
    .keys()
    .filter(v => v !== './install.js')
    .map(v => {
        Vue.use(installModuleList(v).default)
    })
