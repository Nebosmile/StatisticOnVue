<template lang="html">
    <div>
        <label v-if='timeoption.timeperiod'>Time period
            <div class='inpContainer'>
                  <select v-on:change='inputInit' v-bind:id="'selectTime'+timeoption.id" v-model='selecttime' name="timeFilter" class="form-control">
                      <option value="!">All time</option>
                      <option id="selectme" value="selectme">Time period</option>
                      <option value="lastmonth">Last month</option>
                      <option value="lastweek">Last week</option>
                      <option value="thismonth">Current month</option>
                      <option value="thisweek">Current week</option>
                      <option value="lastday">Last day</option>
                      <option value="thisday">Current day</option>
                      <option value="lasthour">Last hour</option>
                      <option value="last10m">10 minutes</option>
                  </select>
            </div>
          </label>
          <div v-if='timeoption.timeof' class="dateform">
              <label>From
                  <div class="inpContainer">
                      <input v-on:click='settime("dateof")' type="text"  name="dateof" v-bind:id="'dateof'+timeoption.id"  class="form-control" v-model="timeoption.timeof.data" v-on:blur='iscatchtime("dateof",timeoption.id)'>
                      <input type="text" name="timeof" v-bind:id="'timeof'+timeoption.id"
                      v-on:blur='iscatchtime("timeof",timeoption.id)' class="form-control ui-timepicker-input" v-model="timeoption.timeof.time" autocomplete="off">
                  </div>
                  <div>{{timeoption.timeof.data}} </div>
              </label>
          </div>
          <div v-if='timeoption.timeto' class="dateform">
              <label>To
                  <div class="inpContainer">
                      <input v-on:click='settime("dateto")' type="text" name="dateto" v-bind:id="'dateto'+timeoption.id" class="form-control" v-model="timeoption.timeto.data" v-on:blur='iscatchtime("dateto",timeoption.id)'>
                      <input type="text" name="timeto" v-bind:id="'timeto'+timeoption.id"
                      v-on:blur='iscatchtime("timeto",timeoption.id)'
                       class="form-control ui-timepicker-input" v-model="timeoption.timeto.time" autocomplete="off">
                  </div>
                  <div>{{timeoption.timeto.data}} </div>
              </label>
          </div>
      </div>
</template>

<script>
import '@/assets/js/jquery.timepicker.js';
import '@/assets/css/jquery.timepicker.css';

export default {
    props: {
      timeoption: {
        type: Object
      }
    },
    data(){
        return{
            selecttime:''
        }
    },
    name:'timeinput',
    mounted: function () {
        var newthis = this
        // vm.$on('test', function () {
        //   console.log('msg')
        // })
      // `this` указывает на экземпляр vm
      // initdatapicker($("#dateof1"), $("#dateto1"));
      $("#dateof" + this.timeoption.id).datepicker();
      $("#dateof" + this.timeoption.id).datepicker("option", "dateFormat", "yy-mm-dd");
      $("#dateof" + this.timeoption.id).datepicker("setDate", newthis.timeoption.timeof.data);

      $("#dateto" + this.timeoption.id).datepicker();
      $("#dateto" + this.timeoption.id).datepicker("option", "dateFormat", "yy-mm-dd");
      $("#dateto" + this.timeoption.id).datepicker("setDate", newthis.timeoption.timeto.data);
    //   inputInit(this.timeoption.id);

    $("#timeof" + this.timeoption.id).timepicker({
        'timeFormat': 'H:i:s',
        'step': 60
    });
    $("#timeto" + this.timeoption.id).timepicker({
        'timeFormat': 'H:i:s',
        'step': 60
    });
  },methods:{
      ischange:function (e) {
     },
     settime:function (e) {
         if(e=='dateof' && this.timeoption.timeof.time==''){
             this.timeoption.timeof.time="00:00:00";
         }
         if(e=='dateto' && this.timeoption.timeto.time==''){
             this.timeoption.timeto.time="00:00:00";
         }
     },
     iscatchtime(e, elId){
         var newthis = this;
         var element = e;
         var id = elId;
         var elem= document.getElementById(element + id)
         setTimeout(function () {
         var target = "";
         if(e=='dateof'){
             newthis.timeoption.timeof.data=elem.value;
         }
         else if (e=='timeof') {
             newthis.timeoption.timeof.time=elem.value;
         }
         else if (e=='dateto') {

             newthis.timeoption.timeto.data=elem.value;
         }
         else if (e=='timeto') {
            newthis.timeoption.timeto.time=elem.value;
         }
        },500)

     },inputInit(){
         var newthis = this;
         var now = new Date();

            if(newthis.selecttime=='selectme'){
                return
            }
             newthis.timeoption.timeto.data = "" //(timeformat(new Date())).datavalue;
             newthis.timeoption.timeto.time = "" //(timeformat(new Date())).timevalue;
             if (newthis.selecttime == "!") {
                 newthis.timeoption.timeof.data = "";
                 newthis.timeoption.timeof.time = "";
                 newthis.timeoption.timeto.data = "";
                 newthis.timeoption.timeto.time = "";
             } else if (newthis.selecttime == "lastmonth") {
                 var newtime = new Date();
                 newtime.setMonth(newtime.getMonth() - 1);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;



             } else if (newthis.selecttime == "lastweek") {
                 var newtime = new Date();
                 newtime.setDate(newtime.getDate() - 7);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             } else if (newthis.selecttime == "thismonth") {
                 var newtime = new Date();
                 newtime.setDate(1);
                 newtime.setHours(0);
                 newtime.setMinutes(0);
                 newtime.setSeconds(0);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             } else if (newthis.selecttime == "thisweek") {
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
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             } else if (newthis.selecttime == "lastday") {
                 var newtime = new Date();
                 newtime.setDate(newtime.getDate() - 1);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             } else if (newthis.selecttime == "thisday") {
                 var newtime = new Date();
                 newtime.setHours(0);
                 newtime.setMinutes(0);
                 newtime.setSeconds(0);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             } else if (newthis.selecttime == "lasthour") {
                 var newtime = new Date();
                 newtime.setMinutes(newtime.getMinutes() - 60);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             } else if (newthis.selecttime == "last10m") {
                 var newtime = new Date();
                 newtime.setMinutes(newtime.getMinutes() - 10);
                 newthis.timeoption.timeof.data = (newthis.timeformat(newtime)).datavalue;
                 newthis.timeoption.timeof.time = (newthis.timeformat(newtime)).timevalue;
             }

             var now = timeformat(now);

     },timeformat(time1) {
         var year = time1.getFullYear();
         var month = time1.getMonth();
         month += 1;
         if (month < 10) {
             month = "0" + month;
         }
         var day = time1.getDate();
         if (day < 10) {
             day = "0" + day;
         }
         var hours = time1.getHours();
         if (hours < 10) {
             hours = "0" + hours;
         }
         var minets = time1.getMinutes();
         if (minets < 10) {
             minets = "0" + minets;
         }
         var seconds = time1.getSeconds();
         if (seconds < 10) {
             seconds = "0" + seconds;
         }

         var timeArr = {
             'datavalue': year + "-" + (month) + "-" + day,
             'timevalue': hours + ":" + minets + ":" + seconds,

         }


         return timeArr;
     }
  }
    // destroyed:function () {
    //     vm.$off()
    // }
}

function inputInit(id) {
console.log(id);
    var now = new Date();
    var getFromTime = new Date();

    var selectTime = document.getElementById('selectTime'+id);
    console.log(selectTime);


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
        console.log(dateof);
        console.log(timeof);
        console.log(dateTo);
        console.log(timeTo);
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
function timeformat(time1) {
    var year = time1.getFullYear();
    var month = time1.getMonth();
    month += 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = time1.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var hours = time1.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    var minets = time1.getMinutes();
    if (minets < 10) {
        minets = "0" + minets;
    }
    var seconds = time1.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var timeArr = {
        'datavalue': year + "-" + (month) + "-" + day,
        'timevalue': hours + ":" + minets + ":" + seconds,

    }


    return timeArr;
}
</script>

<style lang="css">
#ui-datepicker-div{
    display: none;
}
</style>
