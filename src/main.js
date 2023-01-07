import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToastify from 'vue-toastify'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueToastify, {
  errorDuration: 6000,
  iconEnabled: false,
  canPause: false,
  theme: 'dark',
  position: 'top-center'
})
new Vue({
  router,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
