<template lang="html">
    <div class="buttonBlock">
        <input v-on:click='makeget' v-if='inputarguments.sumbit' id="submitSessionsFilter" name="Sumbit" type="button" class="btn btn-success" value="Sumbit">
        <input v-on:click='makeresset' v-if='inputarguments.reset' id="resetSessionsFilter" type="reset" class="btn btn-lg btn-primary" value="Reset">
        <input v-on:click='makeclear' v-if='inputarguments.clear' cleartab="2" type="button" class="btn btn-lg cleartable btn-danger" value="Clear table">
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
        },
        makeclear:function () {
            this.$emit('clear')
        },
        makeresset:function(){
            this.$emit('reset')
        }
    }
}
</script>

<style lang="css">
</style>
