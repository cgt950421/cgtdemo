import wxManage from '@/components/wxManage/wxManage'
import authList from '@/components/authManage/authList'
import authSetting from '@/components/authManage/authSetting'
import myAuth from '@/components/authManage/myAuth'
import test11 from '@/components/test/test11'
import tabs1 from '@/components/test/tabs1'
import tabs2 from '@/components/test/tabs2'
import test12 from '@/components/test/test12'
import test2 from '@/components/test/test2'
import home from '@/components/index/home'
import infoSetting from '@/components/index/infoSetting'

export const menuRoutes = [
  {
    path: '/user/wxManage',
    name: 'wxManage',
    component: wxManage
  }, {
    path: '/user/authManage/authList',
    name: 'authList',
    component: authList
  }, {
    path: '/user/authManage/authSetting',
    name: 'authSetting',
    component: authSetting
  }, {
    path: '/user/authManage/myAuth',
    name: 'myAuth',
    component: myAuth
  }, {
    path: '/test/test2',
    name: 'test2',
    component: test2
  }, {
    path: '/test/test1/test11',
    name: 'test11',
    component: test11,
    children: [
      {
        path: '/test/test1/test11/tabs1',
        name: 'tabs1',
        component: tabs1
      }, {
        path: '/test/test1/test11/tabs2',
        name: 'tabs2',
        component: tabs2
      }
    ]
  }, {
    path: '/test/test1/test12',
    name: 'test12',
    component: test12
  }, {
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '',
    component: home,
    redirect: '/home'
  }, {
    path: '/infoSetting',
    name: 'infoSetting',
    component: infoSetting
  }
]
