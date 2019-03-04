export default {
    state: {
        username: 'Jo',
        age: 26
    },
    getters: {
        userName (state, getters, rootState) {
            return state.username
        },
        userAge (state, getters, rootState) {
            return state.age
        }
    },
    mutations: {
        changeAge (state, newAge) {
            state.age = newAge
        },
        changeUsername (state, newUsername) {
            state.username = newUsername
        }
    },
    actions: {
        changeUsername ({ commit }, newUsername) {
            setTimeout(() => {
                console.log('Dispatch action total value by: ', newUsername)
                commit('changeUsername', newUsername)
            }, 2500)
        }
    }
}
