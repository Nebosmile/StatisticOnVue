<template lang="html">
    <label>User ID
     <div class="inpContainer">
         <input name="userId" type="text" class="form-control" v-model='useroption.userid.id'>
     </div>
     <div>
         {{useroption.userid.id}}
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
