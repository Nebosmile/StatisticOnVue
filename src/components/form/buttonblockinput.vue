<template lang="html">
    <div class="buttonBlock">
        <input v-on:click='makeget' v-if='inputarguments.sumbit' id="submitSessionsFilter" name="Sumbit" type="button" class="btn btn-lbtn-success" value="Sumbit">
        <input v-if='inputarguments.reset' id="resetSessionsFilter" type="reset" class="btn btn-lg btn-primary" value="Reset">
        <input v-if='inputarguments.clear' cleartab="2" type="button" class="btn btn-lg cleartable btn-danger" value="Clear table">
    </div>
</template>

<script>
export default {
    name:'buttonblockinput',
    props:{
        inputarguments: {
          type: Object
        }
    },
    data(){
        return{

        }
    },
    methods:{
        makeget:function () {
            this.$emit('get')
        }
    }
}
</script>

<style lang="css">
</style>
