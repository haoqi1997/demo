const count = {
    state: {
        num: 0
    },
    actions: {
        addnum({ commit }, b) {
            // console.log("a", commit)
            // console.log("b", b)
            // const sction = {
            //     type: type.SET_COUNT,
            //     poyload: b
            // }
            //发送到mumutations
            commit('set_constantadd', b)
        },
        subtractnum({ commit }, b) {
            // console.log("a", commit)
            // console.log("b", b)
            // const sction = {
            //      SET_COUNT,
            //     poyload: b
            // }
            //发送到mumutations
            commit('set_constantsubtract', b)
        },
        regressnum({ commit }, b) {
            if (b == 0) {
                commit('set_constantregress', b)
            }
            // console.log("a", commit)
            // console.log("b", b)
            // const sction = {
            //      SET_COUNT,
            //     poyload: b
            // }
            //发送到mumutations

        },

    },
    mutations: {
        //++
        set_constantadd(state, action) {
            state.num++
        },
        //---
        set_constantsubtract(state, action) {
            state.num--
        },
        //0000
        set_constantregress(state, action) {
            state.num = action
        }
    },
    getters: {

    }
}

export default count