import Vue from 'vue'
import Router from 'vue-router'
import Flight from '@/page/Flight'
import DetailFlight from '@/page/DetailFlight'
import Login from '@/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Flight',
      name: 'Flight',
      component: Flight
    },
    {
      path: '/detailFlight',
      name: 'DetailFlight',
      component: DetailFlight
    }
  ]
})
