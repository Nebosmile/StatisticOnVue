<template lang="html">
    <label>Base currency
  		<div class="inpContainer">
  			<select v-model='options.basecurrency.activebasecur' name="basecurrency" class="form-control">
  		    	<option value="0">default</option>
  		    	<option value="USD">USD</option>
  		   		<option value="EUR">EUR</option>
  		    	<option value="RUB">RUB</option>
  		  		<option value="UAH">UAH</option>
  		 		<option value="GBP">GBP</option>
  		 		<option value="CNY">CNY</option>
  	   			<option value="AUD">AUD</option>
  		    	<option value="CAD">CAD</option>
  		    	<option value="CHF">CHF</option>
  			</select>
  		</div>
        <div>
            {{options.basecurrency.activebasecur}}
        </div>
  	</label>
</template>

<script>
export default {
        name:'basecurrency',
        props:{
            options:{
                type: Object
            }
        },
}
</script>

<style lang="css">
</style>
