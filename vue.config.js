const env = require("./package.json");
module.exports = {
  publicPath: `/${env.name}`,
  // 本地代理配置
  devServer: {
    open: false,
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 9999,
    https: false,
    hotOnly: false,
    compress: true,
    proxy: {
      "/birthdayWishes": {
        target: "http://172.20.200.110:18639/",
        changeOrigin: true
      }
    }
  }
};
