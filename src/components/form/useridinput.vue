<template lang="html">
    <label>User ID
     <div class="inpContainer">
         <input name="userId" type="text" class="form-control" v-model='useroption.id'>
     </div>
     <div>
         {{useroption.id}}
     </div>
  </label>

</template>

<script>
export default {
    props:{
        useroption: {
          type: Object
        }
    },
    name:'useridinput'
}
</script>

<style lang="css">
</style>
