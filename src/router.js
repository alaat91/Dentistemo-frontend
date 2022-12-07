import Vue from 'vue'
import Router from 'vue-router'
import Timeslot from './views/Timeslot.vue'
import Profile from './views/Profile.vue'
import HomePage from './components/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/timeslots',
      name: 'timeslot',
      component: Timeslot,
    },
    {
      path: '/profiles',
      name: 'profile',
      component: Profile,
    },
  ],
})
