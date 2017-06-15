<template lang="html">
    <label for="">Rounds
  	   <div class="inpContainer">
  		   <div class="lineblock">
  			   <input v-model='options.rounds.from' name="spinsFrom" type="Number" accept="" value="" min="0" class="form-control" placeholder="from">
  			</div>
      		<div class="lineblock">
      			<input v-model='options.rounds.to' name="spinsTo" type="Number" value="" min="0" class="form-control" placeholder="to">
      		</div>
  		</div>
  	</label>
</template>

<script>
export default {
    props:{
        options:{
            type: Object
        }
    },
    name:'roundsinput'
}
</script>

<style lang="css">
</style>
