<template lang="html">
        <label>Currency
            <div class="inpContainer">
               <select name="currency" class="form-control">
                   <option value="">All</option>
                   <option v-for='key in currencyoption.currency.list' :value='key'>{{key}} </option>
               </select>
            </div>
        </label>
</template>

<script>

export default {
    name:'currencyinput',
    props:{
        currencyoption: {
          type: Object
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="css">
</style>
