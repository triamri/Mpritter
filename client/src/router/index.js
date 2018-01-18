import Vue from 'vue'
import Router from 'vue-router'
import LoginUser from '@/components/login/LoginUser'
import RegisterUser from '@/components/login/RegisterUser'
import TimeLine from '@/components/post/TimeLine'
import HastagLine from '@/components/post/HastagLine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginUser
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterUser
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: TimeLine
    },
    {
      path: '/hastag',
      name: 'Hastag',
      component: HastagLine
    }
  ]
})
