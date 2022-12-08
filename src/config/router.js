import Vue from 'vue'
import Router from 'vue-router'
import Timeslot from '../views/Timeslot.vue'
import SignUp from '../views/SignUp.vue'
import Timeslot from './views/Timeslot.vue'
import Login from './views/Login.vue'
import HomePage from './components/HomePage.vue'
import Profile from './views/Profile.vue'
import ConfirmBookingPage from './views/ConfirmBookingPage.vue'

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
      path: '/timeslot',
      name: 'timeslot',
      component: Timeslot,

    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
     {
      path: '/login',
      name: 'login',
      component: Login
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
  ],
})
