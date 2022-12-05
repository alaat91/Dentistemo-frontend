import Vue from 'vue'
import Router from 'vue-router'
import Map from './components/Map.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Map,
    },
  ],
})
