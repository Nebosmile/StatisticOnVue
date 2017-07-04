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
import casinomenagment from '@/components/adminpanel/casinomenagment'
import gamemenagment from '@/components/adminpanel/gamemenagment'
import providers from '@/components/adminpanel/providers'



Vue.use(Router)

function setstate(route) {

    statlink=route.params.location
}
// console.log(statlink);

export default new Router({
    hashbang: false,
     history: true,
     mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/statistic',
      name: 'statistic',
      component: statistic,
    },
        {
          path: '/statistic/:location',
          component: initstatistic,
          props:setstate,
          children: [
            {
              path: '/statistic/:location/global',
              component: global,
          },
          {
            path: '/statistic/:location/session',
            component: session,
        },
          {
            path: '/statistic/:location/online',
            component: online,
        },
        {
          path: '/statistic/:location/rounds',
          component: rounds,
      }
          ]
      },
 {
      path:'/adminpanel',
      component:adminpanel,
      children:[
          {
              path:'home',
              component:home,
          },{
              path:'usermenagment',
              component:usermenagment,
          },
          {
              path:'casinomenagment',
              component:casinomenagment,
          },
          {
              path:'gamemenagment',
              component:gamemenagment,
          },
          {
              path:'providers',
              component:providers
          }
      ]
  }
  ]
})
