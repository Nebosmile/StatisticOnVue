import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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


Vue.use(Router)
console.log(statlink);
function setstate(route) {

    statlink=route.params.location
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
    }
  ]
})
