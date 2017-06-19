<template lang="html">
  <div>
      <div>
          <div class="hidewrap">
            <div class="casino_game rowchik">
    			<p class="left">Filters</p>
    			<div class="hideButton right"></div>
    		</div>

              <div class="hidewrapitem">
                  <form class='hideitem'>
                      <inputblock v-bind:inputarguments='blockinput1'></inputblock>
                      <inputblock v-bind:inputarguments='blockinput2'></inputblock>
                      <inputblock v-bind:inputarguments='blockinput3'></inputblock>
                      <inputblock v-bind:inputarguments='blockinput4'></inputblock>
                       <buttonblockinput v-on:get='getSession' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
                  </form>
              </div>
          </div>
          <tableStat v-if='sessionsummary.ansver' v-bind:options ='sessionsummary'></tableStat>


          <tableStat v-if='sessioncurrency.ansver' v-bind:options ='sessioncurrency'></tableStat>


          <tableStat v-if='(sessiondetailed.ansver)'  v-bind:options ='sessiondetailed'></tableStat>
      </div>
  </div>
</template>

<script>
import tableStat from '@/components/tables/table'
import inputblock from '@/components/form/inputblock'
import buttonblockinput from '@/components/form/buttonblockinput'

export default {
    name:'session',
    components:{
        tableStat,
        inputblock,
        buttonblockinput
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
                    status:[]
                }
            },
            blockinput2:{
                gamecategory:'all',
                gameblock:{
                    activegame:''
                },
                sessionid:{
                    id:''
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
                    disabled:false,
                    sortby:{
                        startDate:{name:'Start Date',th:''},
                        endDate:{name:'End Date',th:''},
                        rounds:{name:'Rounds',th:''},
                        coinsBet:{name:'Total bet coins',th:''},
                        coinsWin:{name:'Total win coins',th:''},
                        incomeCoins:{name:'Income coins',th:''},
                        backCoins:{name:'back in coins',th:''},
                        cashBet:{name:'Total bet cash',th:''},
                        cashWin:{name:'Total win cash',th:''},
                        incomeCash:{name:'Income cash',th:''},
                        backCash:{name:'back in cash',th:''},
                        ip:{name:'ip',th:''},

                    },
                    active:'startDate',
                    sorttype:'1'
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
            sessiondetailed:{
                tableoption:{
                    name:'Detailed info',
                    exellink:{
                        link:''
                    },
                    navigationlist:{
                        currenpage:'1',
                        count:'1',
                        allpage:'1'

                    }
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'ID',status:'checked',default:'1'},
                    {value: 'startDate', name:'Start date',status:'checked',default:'1'},
                    {value: 'endDate', name:'End date',status:'checked',default:'1'},
                    {value:'cName', name:'Casino ID',status:'checked',default:'1'},
                    {value:'userId', name:'User ID',status:'checked',default:'1'},
                    {value:'extUId', name:'ExtU ID',status:'checked',default:'1'},
                    {value:'ip', name:'Ip',status:'checked',default:'1'},
                    {value:'sessionID',name:'Session ID',status:'checked',default:'1'},
                    {value:'game',name:'Game',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'totalBetCoins',name:'Total bet coins',status:'hide',default:'0'},
                    {value:'totalWinCoins',name:'Total win coins',status:'hide',default:'0'},
                    {value:'incomeCoins',name:'Incom in coins',status:'hide',default:'0'},
                    {value:'backCoins',name:'% Back in coins',status:'hide',default:'0'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                ]
            },
            sessionsummary:{
                tableoption:{
                    name:'Summary',
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'casinos', name:'Casino',status:'checked',default:'1'},
                    {value: 'users', name:'Users',status:'checked',default:'1'},
                    {value: 'rounds', name:'Rounds',status:'checked',default:'1'},
                    {value:'slots', name:'Slots',status:'checked',default:'1'},
                    {value:'totalBetCoins', name:'Total bet coins',status:'hide',default:'1'},
                    {value:'totalWinCash', name:'Total win coins',status:'hide',default:'1'},
                    {value:'incomeCoins', name:'Income coins',status:'hide',default:'1'},
                    {value:'backCoins',name:'% Back coins',status:'hide',default:'1'},
                    {value:'totalBetCash',name:'Total bet cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total win cash',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'0'},
                    {value:'incomeCash',name:'Income cash',status:'checked',default:'0'},
                    {value:'backCash',name:'% Back cash',status:'checked',default:'0'},
                ]
            },
            sessioncurrency:{
                tableoption:{
                    name:'Currency',
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value:'name',name:'Currency',status:'checked',default:'0'},
                    {value: 'casinos', name:'Casino',status:'checked',default:'1'},
                    {value: 'users', name:'Users',status:'checked',default:'1'},
                    {value: 'rounds', name:'Rounds',status:'checked',default:'1'},
                    {value:'slots', name:'Slots',status:'checked',default:'1'},
                    {value:'totalBetCoins', name:'Total bet coins',status:'hide',default:'1'},
                    {value:'totalWinCash', name:'Total win coins',status:'hide',default:'1'},
                    {value:'incomeCoins', name:'Income coins',status:'hide',default:'1'},
                    {value:'backCoins',name:'% Back coins',status:'hide',default:'1'},
                    {value:'totalBetCash',name:'Total bet cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total win cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income cash',status:'checked',default:'0'},
                    {value:'backCash',name:'% Back cash',status:'checked',default:'0'},

                ]
            },

        }
    },

    methods:{
        getSession:function () {
            var start = this.sessiondetailed.tableoption.navigationlist.currenpage;
            var step = this.blockinput4.showby.active;
            var RoundMin=this.blockinput4.rounds.from;
            var roundMax=this.blockinput4.rounds.to;
            if(roundMax==''){
                roundMax='999999999'
            }
            var casinoId=this.blockinput3.casinoblock.casinoid;
            var sCode= this.blockinput2.gameblock.activegame;
            if (sCode == "") {
                sCode = 0;
            }
            var isActive=this.blockinput1.activsession.status;
            if(isActive.length>1 || isActive.length ==0){
                isActive ='2'
            }else{
                isActive =isActive[0];
            }
            var basecurrency =this.blockinput3.basecurrency.activebasecur;
            var currency= this.blockinput3.currency.activecurrency;
            var startDate = taketime(this.blockinput1.time.timeof.data,this.blockinput1.time.timeof.time)
            var stopDate = taketime(this.blockinput1.time.timeto.data,this.blockinput1.time.timeto.time)
            var uId = this.blockinput2.userid.id;
            var sort = this.blockinput4.sort.active+this.blockinput4.sort.sorttype;

    // http://autorisation.bossgs.org/interstat/dev/api.php?getGameSession&start=1&step=50&startDate=0&stopDate=0&isActive=2&currency=&cId=&sCode=0&roundMin=0&roundMax=9999999&uId=&sort=startDate1&baseCurrency=0

            var newlink = link+statlink+'/api.php?getGameSession'+'&start='+start+'&step='+step+'&startDate='+startDate+'&stopDate='+stopDate+'&isActive='+isActive+'&currency='+currency+'&cId='+casinoId+'&roundMin='+RoundMin+'&roundMax='+roundMax+'&uId='+uId+'&sort='+sort+'&baseCurrency='+basecurrency;
            console.log(newlink);

            var appthis = this;
            console.log(appthis.sessiondetailed.ansver);
            $.ajax({
                url:newlink,
                dataType:'JSON',
                type:'GET',
                success:function (data) {
                    if(data.count){
                        appthis.sessiondetailed.ansver = data;
                        appthis.sessionsummary.ansver=data.summary;
                        appthis.sessioncurrency.ansver=data.currency;


                    }else{
                        appthis.count='Записепй не найдено';
                    }

                }
            })

        },
    }
}
</script>

<style lang="css">
</style>
