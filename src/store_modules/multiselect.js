export default {
    namespaced: true,
    state: {
        selectValue: 'Vuex',
        selectOptions: ['Vuex', 'Vue', 'Vuelidate', 'Vue-Multiselect', 'Vue-Router']
    },
    mutations: {
        updateValue (state, value) {
            state.selectValue = value
        }
    },
    actions: {
        updateValueAction ({ commit }, value) {
            commit('updateValue', value)
        }
    }
}
