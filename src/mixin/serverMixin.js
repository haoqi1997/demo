import * as home from '../api/home'
import * as http from '../api/http.js'
// import module from 'module'
import Vue from 'vue'
const ServerMixin = {
    Event: new Vue()
}
console.log("ServerMixin")
ServerMixin.install = function(v, opt) {
    v.prototype.$http = http
    v.prototype.$home = home.httpapi
}

export default ServerMixin