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
window.userdata = new Vue({
    data:{
        displayName:false,
        email:false,
        gender:false,
        id:false,
        login:false,
        userRole:false,
        userstate:false
    }
})
window.admin_url ='http://devinterlayer.bossgs.org/manager/adminpanel/';
window.statistic_url ='http://devinterlayer.bossgs.org/manager/adminpanel/proxy';
window.gois=function () {
    return "gogogog"
}
window.taketime = function(value1,value2) {
    var time = value1 + "T" + value2
    var newtime = Date.parse(time);
    if (isNaN(newtime)) newtime = 0;
    return newtime;
}
