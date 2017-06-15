// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
window.gois=function () {
    return "gogogog"
}
window.taketime = function(value1,value2) {
    var time = value1 + "T" + value2
    var newtime = Date.parse(time);
    if (isNaN(newtime)) newtime = 0;
    return newtime;
}
