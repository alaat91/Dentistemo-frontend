import Vue from 'vue'
import Router from 'vue-router'
import Timeslot from '../views/Timeslot.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import Profile from '../views/Profile.vue'
import ConfirmBookingPage from '../views/ConfirmBookingPage.vue'
import Landing from '../views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    // {
    //   path: '/clinic',
    //   name: 'timeslot',
    //   component: Timeslot,
    // },
    {
      path: '/clinic/:clinicId',
      name: 'timeslot',
      component: Timeslot,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/confimBooking',
      name: 'confirm',
      component: ConfirmBookingPage,
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing,
    },
  ],
})
