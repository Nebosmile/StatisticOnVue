<template lang="html">
    <div>


    <label for="gameFilter">Sort by
  	   <div class="inpContainer">
  		   <select name="sort" v-bind:disabled="options.disabled" class="form-control">
  			   <option v-for='(key, index) in options.sortby' v-bind:value='index'>{{key.name}}</option>
  		   </select>
  	    </div>
  	</label>
    <label v-if='options.sorttype'  for="show">Sort type
		<div class="inpContainer">
			<select v-model='options.sorttype' name="up_down" class="form-control">
				<option value="1">Ascending</option>
				<option value="2">Descendingly</option>
			</select>
		</div>
	</label>
    </div>
</template>

<script>
export default {
  name: 'sortinput',
  props:{
      options:{
          type: Object
      }
  }
}
</script>

<style lang="css">
</style>
