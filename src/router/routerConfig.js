import Login from '@/components/login/login'
import index from '@/components/index/index'
import {menuRoutes} from './menuRoutes'

export const loginRoute = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '',
    component: Login,
    redirect: '/login'
  }
]

export const indexRoutes = [
  {
    path: '/index',
    component: index,
    children: [...menuRoutes]
  }
]
export const routes = [
  ...loginRoute,
  ...indexRoutes
]
