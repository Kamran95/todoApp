import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import authLayout from './layouts/authLayout.vue'
import systemLayout from './layouts/systemLayout.vue'

import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.component('authLayout', authLayout);
Vue.component('systemLayout', systemLayout);

Vue.prototype.$axios=axios

import './assets/tailwind.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
