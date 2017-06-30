<template lang="html">
    <label>Round ID
     <div class="inpContainer">
         <input name="userId" type="text" class="form-control" v-model='useroption.id'>
     </div>
     <div>
         {{options.id}}
     </div>
  </label>

</template>

<script>
export default {
    props:{
        options: {
          type: Object
        }
    },
    name:'roundidinput'
}
</script>

<style lang="css">
</style>
