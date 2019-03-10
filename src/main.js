import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.component('multiselect', Multiselect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
