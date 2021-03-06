import Vue from 'vue'
import Vuex from 'vuex'

import user from './store_modules/user.js'
import basket from './store_modules/basket.js'
import multiselect from './store_modules/multiselect.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        basket,
        multiselect
    }
})
