<template lang="html">
        <label for="show">Show by
           <div class="inpContainer">
               <select name="show" class="form-control">
                   <option value="50">50</option>
                   <option value="100">100</option>
                   <option value="200">200</option>
                   <option value="500">500</option>
                   <option value="1000">1000</option>
                   <option value="99999999">All</option>
               </select>
           </div>
        </label>

</template>

<script>
export default {
    name:'showbyinput',
}
</script>

<style lang="css">
</style>
