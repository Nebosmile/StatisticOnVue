import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import statistic from '@/components/Statistic'
import initstatistic from '@/components/initstatistic'
import global from '@/components/statisticfolders/global'

Vue.use(Router)

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
          children: [
            {
              path: ':activetemplate',
              component: global,
            }
          ]
        }
      ]
    }
  ]
})
