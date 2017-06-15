<template lang="html">
        <label for="show">Show by
           <div class="inpContainer">
               <select v-model='options.showby.active' name="show" class="form-control">
                  <option v-for='key in options.showby.arr' v-bind:value="key">{{key}}</option>
                  <option v-bind:value='options.showby.all' >all</option>
               </select>
               <div>
                   {{options.showby.active}}
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
    name:'showbyinput',
}
</script>

<style lang="css">
</style>
