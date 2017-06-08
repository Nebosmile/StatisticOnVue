<template lang="html">
  <div class='inputblock '>
      <label v-if='inputarguments.timeperiod'>Time period
          <div class='inpContainer'>
                <select v-bind:id="'selectTime'+inputarguments.from" name="timeFilter" class="form-control">
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
        <div v-if='inputarguments.from' class="dateform">
			<label>From
				<div class="inpContainer">
    				<input type="text" name="dateof" v-bind:id="'dateof'+inputarguments.from" class="form-control" value="">
    				<input type="text" name="timeof" v-bind:id="'timeof'+inputarguments.from" class="form-control ui-timepicker-input" value="" autocomplete="off">
				</div>
			</label>
		</div>
        <div v-if='inputarguments.to' class="dateform">
			<label>To
				<div class="inpContainer">
					<input type="text" name="dateto" v-bind:id="'dateto'+inputarguments.to" class="form-control" value="">
					<input type="text" name="timeto" v-bind:id="'timeto'+inputarguments.to" class="form-control ui-timepicker-input" value="" autocomplete="off">
				</div>
			</label>
		</div>

  </div>
</template>

<script>
import timeinput from '@/components/form/time'


export default {
  props: {
    inputarguments: {
      type: Object
    }
  },
  components:{
      timeinput
  },
  name: 'inputblock',
  mounted: function () {
    // `this` указывает на экземпляр vm
    // initdatapicker($("#dateof1"), $("#dateto1"));
    $("#dateof" + this.inputarguments.from).datepicker();
    $("#dateto" + this.inputarguments.to).datepicker();
    inputInit(this.inputarguments.from);
  }
}

function inputInit(id) {

    var now = new Date();
    var getFromTime = new Date();

    var selectTime = document.getElementById('selectTime'+id)
    console.log(selectTime);

    var dateof = document.getElementById('dateof'+id)
    var timeof = document.getElementById('timeof'+id)
    var dateTo = document.getElementById('dateto'+id)
    var timeTo = document.getElementById('timeto'+id)
    console.log(dateTo);
    console.log(timeTo);

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

<style lang="scss">

.inputblock {
    display: inline-block;
    margin-left: 10px;
    width: 300px;
    font-size: 12px;
    text-align: right;
    vertical-align: top;

    .inpContainer {
        margin-left: 5px;
        float: right;
        width: 200px;
    }
    .form-control {
        height: 27px;
    }
    select {
        border-radius: 0;
        margin-bottom: 8px;
    }
}
label {
    font-size: 12px;
    margin-bottom: 0;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    text-align: right;
}
.form-control {
    display: block;
    width: 100%;
    padding: 6px 12px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    /* box-shadow: inset 0 1px 1px rgba(0,0,0,.075); */
    /* -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s; */
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.dateform label {
    width: 100%;
}
.dateform input:first-child, .lineblock:first-child {
    margin-right: 2%;
}
.dateform input, .lineblock {
    width: 49%;
    float: left;
}
</style>
