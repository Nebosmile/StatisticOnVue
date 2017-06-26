import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import statistic from '@/components/Statistic'
import initstatistic from '@/components/initstatistic'
import global from '@/components/statisticfolders/global'
import session from '@/components/statisticfolders/sessions'
import online from '@/components/statisticfolders/online'
import reports from '@/components/statisticfolders/reports'
import rounds from '@/components/statisticfolders/rounds'
import roundturns from '@/components/statisticfolders/roundturns'
import users from '@/components/statisticfolders/users'
import exchangrates from '@/components/statisticfolders/exchangrates'
import adminpanel from '@/components/adminpanel/adminpanel'
import home from '@/components/adminpanel/home'
import usermenagment from '@/components/adminpanel/usermenagment'

Vue.use(Router)

function setstate(route) {

    statlink=route.params.location
}
// console.log(statlink);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/statistic',
      name: 'statistic',
      component: statistic,
      children: [
        {
          path: ':location',
          component: initstatistic,
          props:setstate,
          children: [
            {
              path: 'global',
              component: global,
          },
          {
            path: 'session',
            component: session,
        },
          {
            path: 'online',
            component: online,
        }
          ]
        }
      ]
  },{
      path:'/adminpanel',
      component:adminpanel,
      children:[
          {
              path:'home',
              component:home,
          },{
              path:'usermenagment',
              component:usermenagment,
          }
      ]
  }
  ]
})
