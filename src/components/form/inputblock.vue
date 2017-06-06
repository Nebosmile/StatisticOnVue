<template lang="html">
  <div class='inputblock '>
      <label v-if='inputarguments.timeperiod'>Time period
          <div class='inpContainer'>
                <select name="timeFilter" class="form-control">
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
					<input type="text" name="timeto" v-bind:id="'timeof'+inputarguments.to" class="form-control ui-timepicker-input" value="" autocomplete="off">
				</div>
			</label>
		</div>

  </div>
</template>

<script>

export default {
  props: {
    inputarguments: {
      type: Object
    }
  },
  name: 'inputblock',
  mounted: function () {
    // `this` указывает на экземпляр vm
    // initdatapicker($("#dateof1"), $("#dateto1"));
    $("#dateof" + this.inputarguments.from).datepicker();
    $("#dateto" + this.inputarguments.to).datepicker();
  }
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
