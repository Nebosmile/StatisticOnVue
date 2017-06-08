<template lang="html">
  <div>
      <div class="hidewrap">
          <div class="rowchik casino_game">

          </div>
          <div class="hidewrapitem">
              <form class='hideitem'>
                  <inputblock v-bind:inputarguments='blockinput1'></inputblock>
                  <inputblock v-bind:inputarguments='blockinput2'></inputblock>
                  <inputblock v-bind:inputarguments='blockinput3'></inputblock>
              </form>
          </div>
      </div>
      <tableStat></tableStat>
  </div>
</template>

<script>
import formStat from '@/components/form/form'
import tableStat from '@/components/tables/table'
import inputblock from '@/components/form/inputblock'



console.log(formStat);
export default {
    name:'global',
    components:{
        formStat,
        tableStat,
        inputblock
    },
    data(){
        return{
            blockinput1:{
                timeperiod:'all',
                from:'1',
                to:'1',
                activsession:{
                    status:"0"
                }
            },
            blockinput2:{
                gamecategory:'all',
                gameblock:{
                    activegame:''
                },
            },
            blockinput3:{
                timeperiod:'all',
                from:'2',
                to:'2',
                activsession:{
                    status:"0"
                }
            },
        }
    }
}
</script>

<style lang="css">
</style>
