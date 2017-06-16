<template lang="html">
  <div class='inputblock'>
     <timeinput v-if='inputarguments.time' :timeoption ='inputarguments.time'></timeinput>
     <isactive v-if='inputarguments.activsession' :options ='inputarguments.activsession'></isactive>

    <label v-if='inputarguments.gamecategory'>Game category
		<div class="inpContainer">
			<select name="gameFilter" class="form-control">
				<option value="!">Videoslots</option>
				<option value="!">All category</option>
            </select>
		</div>
	</label>

    <gameinput v-bind:gameinputoption ='inputarguments' v-if='inputarguments.gameblock'></gameinput>

    <casinoinput v-bind:currencyoption ='inputarguments'  v-if='inputarguments.casinoblock'></casinoinput>


    <useridinput v-bind:useroption ='inputarguments'  v-if='inputarguments.userid'></useridinput>
    <basecurrency v-bind:options ='inputarguments' v-if='inputarguments.basecurrency' ></basecurrency>

    <roundsinput v-bind:options ='inputarguments' v-if='inputarguments.rounds'></roundsinput>

    <!-- <currencyinput  v-if='inputarguments.currency'></currencyinput> -->

    <sortinput v-if='inputarguments.sort'></sortinput>

    <showbyinput v-bind:options ='inputarguments' v-if='inputarguments.showby'></showbyinput>
</div>
</template>

<script>
import timeinput from '@/components/form/timeinput'
import gameinput from '@/components/form/gameinput'
import casinoinput from '@/components/form/casinoinput'
import useridinput from '@/components/form/useridinput'
import roundsinput from '@/components/form/roundsinput'
import sortinput from '@/components/form/sortinput'
import showbyinput from '@/components/form/showbyinput'
import basecurrency from '@/components/form/basecurrency'
import isactive from '@/components/form/isactive'



export default {
  props: {
    inputarguments: {
      type: Object
    }
  },
  components:{
      timeinput,
      gameinput,
      casinoinput,
      useridinput,
      roundsinput,
      sortinput,
      showbyinput,
      basecurrency,
      isactive
  },
  name: 'inputblock',
  data(){
      return{

      }
  },
  methods:{
      iscatch:function () {
          alert('catch in inputblock');
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
    width: 100%;
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
.inputblock input {
    margin-bottom: 8px;
    border-radius: 0;
}
.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
    background-color: #eee;
    opacity: 1;
}
</style>
