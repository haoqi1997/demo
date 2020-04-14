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
import VueQuillEditor from "vue-quill-editor"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
Vue.use(VueQuillEditor)





//拦截白名单

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    // console.log("to.path", to.path)
    //to当前的是登录
    if (to.path.indexOf(whiteList) != -1) {
        const userInfo = getUserInfo()

        const fromPath = from.path
        if (userInfo == 'admin') {
            router.push(fromPath)


        } else {
            next()
        }
    } else {
        const userInfo = getUserInfo()
        if (userInfo == 'admin') {
            next()
        } else {
            if (confirm("'账号信息已失效！请重新登录'")) {
                router.push('/login')

            } else {
                // 关闭网页
                window.opener = null;
                window.open('', '_self');
                window.close();
            }

        }
    }

})

new Vue({
    router, //全局注册路由
    store,
    // vueAccordion,
    render: h => h(App),
    mounted() {
        // 解决ie中el-link跳转问题
        if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) {
            window.addEventListener('hashchange', () => {
                var currentPath = window.location.hash.slice(1)
                if (this.$route.path !== currentPath) {
                    this.$router.replace(currentPath)
                }
            }, false)
        }
    }
}).$mount('#app')