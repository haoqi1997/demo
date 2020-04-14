import { http } from '../api/http'

export const httpapi = {
    manage: {
        //登录
        login(opts) {
            return http(`httpjijokok`, opts, null, 'get')
        },
    }
}