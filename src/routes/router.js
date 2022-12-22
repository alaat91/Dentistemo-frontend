import Vue from 'vue'
import Router from 'vue-router'
import Timeslot from '../views/Timeslot.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
import Profile from '../views/Profile.vue'
import ConfirmBookingPage from '../views/ConfirmBookingPage.vue'
import Landing from '../views/Landing.vue'
import Notification from '../views/Notification.vue'

Vue.use(Router)

function guardMyroute(to, from, next) {
  let isAuthenticated = false
  if (localStorage.getItem('token')) {
    isAuthenticated = true
  }

  if (isAuthenticated) {
    next()
  } else {
    next('/login')
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      beforeEnter: guardMyroute,
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
      beforeEnter: guardMyroute,
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
      beforeEnter: guardMyroute,
    },
    {
      path: '/profile/:userID',
      name: 'profile',
      component: Profile,
      beforeEnter: guardMyroute
    },
    {
      path: '/confimBooking',
      name: 'confirm',
      component: ConfirmBookingPage,
      beforeEnter: guardMyroute,
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification,
      beforeEnter: guardMyroute,
    },
  ],
})
