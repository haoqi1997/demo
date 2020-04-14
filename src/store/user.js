import { USERSET } from './constant'


const uservuex = {
    state: { //状态管理 初始化变量
        userName: ''
    },
    mutations: { //修改初始化的变量
        [USERSET](state, action) {
            console.log('state', state)
            console.log('action', action)
        }
    },
    actions: { //方法名
        login({
            commit
        }, options) {
            // const sction = {
            //     type: USERSET,
            //     Poyload: options
            // }
            commit(USERSET, options)
        }
    }
}

export default uservuex