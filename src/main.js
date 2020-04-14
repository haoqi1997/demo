import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由
import store from './store'
import './registerServiceWorker'

// 引入elementui和css
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入iviewcss
import 'iview/dist/styles/iview.css';
//引入重置样式
import "assets/styleshennts/reset.css"
//引入方法
import { getUserInfo } from 'utils/auth'
//登录样式
import 'assets/styleshennts/login.css'
// import utils from 'utils'

// window.apiPreBase = 'http://47.99.131.184:8118'
//粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import Router from 'vue-router'


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

import ServerMixin from './mixin/serverMixin.js'


Vue.use(ServerMixin)

Vue.config.productionTip = false

Vue.use(ElementUI)
    //引入editor
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);
//$RECYCLE.BINimport Vue from ‘vue’
import VueQuillEditor from "vue-quill-editor"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
Vue.use(VueQuillEditor)


// 
// 全局注册
// import with ES6
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
// markdown-it对象：md.s_markdown, md => mavonEditor实例
//                 or
//                 mavonEditor.markdownIt 
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)


//拦截白名单

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    console.log("to.path", to.path)
        //to当前的是登录
    if (to.path.indexOf(whiteList) != -1) {
        const userInfo = getUserInfo()
        console.log(5555)

        const fromPath = from.path
        if (userInfo == 'admin') {
            router.push(fromPath)

        } else {
            next()
        }
    } else {
        console.log("不是login", to.path)
        const userInfo = getUserInfo()
        if (userInfo == 'admin') {
            next()
        } else {
            console.log("shixiao ")
            if (confirm("'账号信息已失效！请重新登录'")) {
                router.push('/login')

            }
            // if (config('账号信息已失效！请重新登录')) {

            // }
        }
    }
    //     console.log('to即将进去', to)
    // console.log('from即将离开', from)
    // if (to) {
    //     next()
    // } else {
    //     console.log('不让去', to)
    // }
})

new Vue({
    router, //全局注册路由
    store,
    // vueAccordion,
    render: h => h(App)
}).$mount('#app')