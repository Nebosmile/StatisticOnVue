<template lang="html">
  <div>
      <div class="hidewrap">
          <div class="rowchik casino_game">

          </div>
          <div class="hidewrapitem">
              <form class='hideitem'>
                  <inputblock v-bind:inputarguments='blockinput1'></inputblock>
                  <inputblock v-bind:inputarguments='blockinput2'></inputblock>
                  <!-- <inputblock v-bind:inputarguments='blockinput3'></inputblock> -->
                  <inputblock v-bind:inputarguments='blockinput4'></inputblock>
                  <inputblock v-bind:inputarguments='blockinput5'></inputblock>
                  <buttonblockinput v-on:get='getGlobal' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
              </form>
          </div>
      </div>
      <!-- <tableStat></tableStat> -->
  </div>
</template>

<script>
import formStat from '@/components/form/form'
import tableStat from '@/components/tables/table'
import inputblock from '@/components/form/inputblock'
import buttonblockinput from '@/components/form/buttonblockinput'



console.log(formStat);
export default {
    name:'global',
    components:{
        formStat,
        tableStat,
        inputblock,
        buttonblockinput
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
            blockinput4:{
                casinoblock:{
                    casinoid:''
                },
                userid:'0',
                currency:{
                    status:'enabled',
                    list:[],
                },
            },
            blockinput5:{
                rounds:{
                    from:'',
                    to:'',
                },
                sort:{
                    status:'disabled',
                },
                showby:{
                    status:'enabled',
                    arr:['50','100','200','500','1000'],
                    all:'1',
                },
            },
            buttonblock:{
                sumbit:true,
                reset:true,
                clear:true,
            }
        }
    },
    methods:{
        getGlobal:function () {
            console.log('catch get');
        }
    },


}
</script>

<style lang="css">

</style>
