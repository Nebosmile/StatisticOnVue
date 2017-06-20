<template lang="html">
    <label>Session ID
   	   <div class="inpContainer">
  			<input type="text" name="sessionid" class="form-control" v-model='options.id'>
  	   </div>
       <div>
           {{options.id}}
       </div>
  	</label>
</template>

<script>
export default {
    name:'sessioninput',
    props:{
        options:{
            type: Object
        }
    },
}
</script>

<style lang="css">
</style>
