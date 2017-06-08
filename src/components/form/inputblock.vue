<template lang="html">
  <div class='inputblock '>
     <timeinput v-if='inputarguments.activsession' :timeoption ='inputarguments'></timeinput>
     <label v-if='inputarguments.activsession'>Sessions
		<div class="inpContainer">
			<div class="lineblock">
				<input type="checkbox" name="opensession" value="1">Active
			</div>
			<div class="lineblock">
				<input type="checkbox" name="clossession" value="0">Closed
			</div>
		</div>
	</label>
    <label v-if='inputarguments.gamecatgegory'>Game category
		<div class="inpContainer">
			<select name="gameFilter" class="form-control">
				<option value="!">Videoslots</option>
				<option value="!">All category</option>
            </select>
		</div>
	</label>
    <gameinput v-if='inputarguments.gameblock'></gameinput>
  </div>
</template>

<script>
import timeinput from '@/components/form/timeinput'
import gameinput from '@/components/form/gameinput'


export default {
  props: {
    inputarguments: {
      type: Object
    }
  },
  components:{
      timeinput,
      gameinput
  },
  name: 'inputblock',
  data(){
      return{

      }
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
