/*
webpake 的配置文件


*/
const path = require('path')

module.exports = {
    // entry: [
    //     app: ['babel-polyfill', './src/main.js']
    // ],

    chainWebpack: config => { //chainWebpack的链式操作
        //config就是Webpack的配置
        config.resolve.alias
            // .set(路径,绝对路径)
            .set("assets", path.join(__dirname, './src/assets'))
            .set("components", path.join(__dirname, './src/components'))
            .set('layout', path.join(__dirname, './src/components/layout'))
            .set('router', path.join(__dirname, './src/router'))
            .set('store', path.join(__dirname, './src/store'))
            .set('utils', path.join(__dirname, './src/utils'))
            .set('views', path.join(__dirname, './src/views'))
            .set('api', path.join(__dirname, './src/api'))
            .set('img', path.join(__dirname, './src/assets/img'))
            .set('data', path.join(__dirname, './src/data'))
            .set('src', path.join(__dirname, './src'))

    },
    lintOnSave: true, //关闭语法  http://m.maoyan.com
    //前端跨域
    devServer: {
        proxy: {
            "/ajax": {
                target: "http://m.maoyan.com", //目标源
                changeOrgin: true
            },
            '/apiBase': {
                target: "http://47.99.131.184:8118",
                changeOrgin: true
            },
            '/data': {
                target: " http://localhost:8080",
                changeOrgin: true
            }
        }
    },

    // window.apiPreBase = '/apiBase/';




}