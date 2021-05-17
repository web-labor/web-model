const {
    zh_name: PROJECT_NAME_ZHCN,
    name: PROJECT_NAME_EN
} = require('./package.json')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const en = 'dev'
const envir = {
    dev: 'https://dev.kdweibo.cn',
    pro: 'https://www.yunzhijia.com',
    devpro: 'https://kdtest.kdweibo.cn'
}
const src = envir[en]

module.exports = {
    publicPath: `/${PROJECT_NAME_EN}`,
    // 本地代理配置
    devServer: {
        open: false,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 9999,
        https: false,
        hotOnly: false,
        compress: true,
        proxy: {
            // 文件上传服务
            '/docrest': {
                target: src,
                changeOrigin: true
            },
            '/birthdayWishes': {
                target: src,
                changeOrigin: true
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new CompressionWebpackPlugin({
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = PROJECT_NAME_ZHCN
            return args
        })
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                '/Users/wangbo/wang/study/project/web-model/src/assets/styles/index.less'
            ]
        }
    },
    productionSourceMap: false // 生产环境是否生成 sourceMap 文件
}
