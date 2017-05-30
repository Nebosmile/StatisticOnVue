import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import statistic from '@/components/Statistic'

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
      component: statistic
    }
  ]
})
