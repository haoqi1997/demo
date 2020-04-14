import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import count from './digit'
import uservuex from './user'
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        count,
        uservuex
    }
})