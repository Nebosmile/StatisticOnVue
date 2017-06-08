// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

function inputInit(id) {

    var now = new Date();
    var getFromTime = new Date();

    var selectTime = target.elements.timeFilter;

    var dateof = document.getElementById('dateof'+id)
    var timeof = document.getElementById('timeof'+id)
    var dateTo = document.getElementById('dateto'+id)
    var timeTo = document.getElementById('timeto'+id)

    var timeperiudObj =false;
    function setTimeperiud() {
        timeperiudObj ={};
        timeperiudObj.dateof=dateof.value;
        timeperiudObj.timeof=timeof.value;
        timeperiudObj.dateTo=dateTo.value;
        timeperiudObj.timeTo=timeTo.value;
    }


    if(dateof != undefined){
        dateof.addEventListener('click', function() {
            selectTime.value = "selectme";
        });
        timeof.addEventListener('click', function() {
            selectTime.value = "selectme";
        });
        dateTo.addEventListener('click', function() {
            selectTime.value = "selectme";
        });
        timeTo.addEventListener('click', function() {
            selectTime.value = "selectme";
        });
        selectTime.addEventListener('click',function(){
            if(selectTime.value == "selectme"){
                setTimeperiud();
            }
        })
        selectTime.addEventListener('change', function() {

            if (selectTime.value == "selectme" && timeperiudObj!=false) {
                console.log('setme');
                dateof.value= timeperiudObj.dateof;
                timeof.value =timeperiudObj.timeof;
                dateTo.value=timeperiudObj.dateTo;
                timeTo.value=timeperiudObj.timeTo;

            }else {
                dateTo.value = "" //(timeformat(new Date())).datavalue;
                timeTo.value = "" //(timeformat(new Date())).timevalue;
                if (selectTime.value == "!") {
                    dateof.value = "";
                    timeof.value = "";
                    dateTo.value = "";
                    timeTo.value = "";
                } else if (selectTime.value == "lastmonth") {
                    var newtime = new Date();
                    newtime.setMonth(newtime.getMonth() - 1);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;



                } else if (selectTime.value == "lastweek") {
                    var newtime = new Date();
                    newtime.setDate(newtime.getDate() - 7);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                } else if (selectTime.value == "thismonth") {
                    var newtime = new Date();
                    newtime.setDate(1);
                    newtime.setHours(0);
                    newtime.setMinutes(0);
                    newtime.setSeconds(0);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                } else if (selectTime.value == "thisweek") {
                    var newtime = new Date();
                    var day = newtime.getDay();
                    if (day == 0) {
                        day = 7
                    } else {
                        day = day - 1;
                    }
                    newtime.setDate(newtime.getDate() - day);
                    newtime.setHours(0);
                    newtime.setMinutes(0);
                    newtime.setSeconds(0);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                } else if (selectTime.value == "lastday") {
                    var newtime = new Date();
                    newtime.setDate(newtime.getDate() - 1);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                } else if (selectTime.value == "thisday") {
                    var newtime = new Date();
                    newtime.setHours(0);
                    newtime.setMinutes(0);
                    newtime.setSeconds(0);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                } else if (selectTime.value == "lasthour") {
                    var newtime = new Date();
                    newtime.setMinutes(newtime.getMinutes() - 60);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                } else if (selectTime.value == "last10m") {
                    var newtime = new Date();
                    newtime.setMinutes(newtime.getMinutes() - 10);
                    dateof.value = (timeformat(newtime)).datavalue;
                    timeof.value = (timeformat(newtime)).timevalue;
                }
            }


        });

        var now = timeformat(now);
        //totime.value = now.firstvalue;
        //console.log(now.firstvalue)
    }

}
