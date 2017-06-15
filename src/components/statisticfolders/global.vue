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
                  <inputblock v-bind:inputarguments='blockinput4'></inputblock>
                  <buttonblockinput v-on:get='getGlobal' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
              </form>
          </div>
      </div>

      <tableStat v-if='detailtable.ansver' tablename='Summary by currency' v-bind:options ='detailtable'></tableStat>
  </div>
</template>

<script>
import tableStat from '@/components/tables/table'
import inputblock from '@/components/form/inputblock'
import buttonblockinput from '@/components/form/buttonblockinput'




export default {
    name:'global',
    components:{
        tableStat,
        inputblock,
        buttonblockinput
    },
    beforeDestroy() {
        console.log('I am global and I am destroyed')
    },
    beforeMount() {
        console.log('I am global and I am mounted')
    },
    data(){
        return{
            blockinput1:{
                time:{
                    id:'1',
                    timeperiod:'all',
                    timeof:{
                        status:'enabled',
                        data:'2017-01-01',
                        time:'00:00:00',
                    },
                    timeto:{
                        status:'enabled',
                        data:'',
                        time:'',
                    }
                },
                activsession:{
                    status:"0"
                }
            },
            blockinput2:{
                gamecategory:'all',
                gameblock:{
                    activegame:''
                },
                userid:{
                    id:''
                },
            },

            blockinput3:{
                casinoblock:{
                    casinoid:''
                },

                currency:{
                    status:'enabled',
                    list:[],
                    activecurrency:''
                },
                basecurrency:{
                    activebasecur:'0'
                }
            },
            blockinput4:{
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
                    active:'50',
                    all:'99999999',
                },
            },
            buttonblock:{
                sumbit:true,
                reset:true,
                clear:true,
            },
            detailtable:{
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'casino', name:'Casino',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value:'startDate',name:'Date',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                    {value:'totalBetCoins',name:'totalBetCoins',status:'hide',default:'0'},
                    {value:'totalWinCoins',name:'totalWinCoins',status:'hide',default:'0'},
                ]
            },
        }
    },
    //http://autorisation.bossgs.org/interstat/dev/api.php?getGlobal=casino&roundMin=0&roundMax=9999999&cId=5936952d643a9d093739451b&sCode=0&isActive=2&currency=&startDate=0&stopDate=0&uId=&baseCurrency=0
    methods:{
        getGlobal:function () {
            var RoundMin=this.blockinput4.rounds.from;
            var roundMax=this.blockinput4.rounds.to;
            var casinoId=this.blockinput3.casinoblock.casinoid;
            var sCode= this.blockinput2.gameblock.activegame;
            if (sCode == "") {
                sCode = 0;
            }
            var isActive='2';
            var basecurrency =this.blockinput3.basecurrency.activebasecur;
            var currency= this.blockinput3.currency.activecurrency;
            var startDate = taketime(this.blockinput1.time.timeof.data,this.blockinput1.time.timeof.time)
            var stopDate = taketime(this.blockinput1.time.timeto.data,this.blockinput1.time.timeto.time)
            var uId = this.blockinput2.userid.id;
            var baseCurrency;


            var newlink = link+statlink+'/api.php?getGlobal=casino'+'&roundMin='+RoundMin + '&roundMax=' + roundMax +'&cId='+casinoId+'&sCode='+sCode+'&isActive='+isActive+'&currency='+currency+'&startDate='+startDate+'&stopDate='+stopDate+'&uId='+uId+'&baseCurrency='+basecurrency;
            console.log(newlink);

            var appthis = this;
            $.ajax({
                url:newlink,
                dataType:'JSON',
                type:'GET',
                success:function (data) {
                    if(data.count){
                        appthis.count='Получено записей '+data.count;
                        appthis.detailtable.ansver = data;
                        console.log(appthis.detailtable.ansver);
                    }else{
                        appthis.count='Записепй не найдено';
                    }

                }
            })

        }
    },


}
</script>

<style lang="css">

</style>
