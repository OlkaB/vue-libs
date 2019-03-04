export default {
    state: {
        totalValue: 300,
        prodsQuantity: 2
    },
    getters: {
        totalValue (state, getters, rootState) {
            return state.totalValue
        },
        prodsQuantity (state, getters, rootState) {
            return state.prodsQuantity
        }
    },
    mutations: {
        updateTotalValue (state, newVal) {
            state.totalValue = newVal
        }
    },
    actions: {
        updateTotalValue ({ state, commit, rootState }, newVal) {
            state.commit('updateTotalValue', newVal)
        }
    }
}
