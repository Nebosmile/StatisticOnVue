<template lang="html">
  <div>
      <div class="hidewrap">
        <div class="casino_game rowchik">
			<p class="left">Filters</p>
				<div id="casinoconsal" v-bind:class="{active:(casinogame.state=='casino')}" v-on:click='setcasino' class="activeBtn">Casino</div>
				<div id="gameconsal" v-bind:class="{active:(casinogame.state=='game')}" v-on:click='setgame' class="activeBtn">Game</div>
			<div class="hideButton right"></div>
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
      <tableStat v-if='(casinosummery.ansver && casinogame.state=="casino")' v-bind:options ='casinosummery'></tableStat>
      <tableStat v-if='(gamesummery.ansver && casinogame.state=="game")' v-bind:options ='gamesummery'></tableStat>

      <tableStat v-if='(casinobasecurrency.ansver && casinogame.state=="casino")' v-bind:options ='casinobasecurrency'></tableStat>
      <tableStat v-if='(gamebasecurrency.ansver && casinogame.state=="game")' v-bind:options ='gamebasecurrency'></tableStat>


      <tableStat v-if='(detailtablecasino.ansver && casinogame.state=="casino")'  v-bind:options ='detailtablecasino'></tableStat>
      <tableStat v-if='(detailtablegame.ansver && casinogame.state=="game")'  v-bind:options ='detailtablegame'></tableStat>
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
                    status:[]
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
            casinogame:{
                state:'casino'
            },
            detailtablecasino:{
                tableoption:{
                    name:'Detailed info',
                    exellink:'',
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
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'casino', name:'Casino',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                    {value:'totalBetCoins',name:'totalBetCoins',status:'hide',default:'0'},
                    {value:'totalWinCoins',name:'totalWinCoins',status:'hide',default:'0'},
                ]
            },
            detailtablegame:{
                tableoption:{
                    name:'Detailed info',
                    exellink:'',
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
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'game', name:'Game',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                    {value:'totalBetCoins',name:'totalBetCoins',status:'hide',default:'0'},
                    {value:'totalWinCoins',name:'totalWinCoins',status:'hide',default:'0'},
                ]
            },
            casinosummery:{
                tableoption:{
                    name:'Summary by currency',
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                ]
            },
            gamesummery:{
                tableoption:{
                    name:'Summary by currency',
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                ]
            },
            casinobasecurrency:{
                tableoption:{
                    name:'Base currency',
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value: 'casino', name:'Casino',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value:'games',name:'Games',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
                ]
            },
            gamebasecurrency:{
                tableoption:{
                    name:'Base currency',
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'game',name:'Games',status:'checked',default:'1'},
                    {value:'users',name:'Users',status:'checked',default:'1'},
                    {value: 'casinos', name:'Casinos',status:'checked',default:'1'},
                    {value:'sessions',name:'Sessions',status:'checked',default:'1'},
                    {value:'rounds',name:'Rounds',status:'checked',default:'1'},
                    {value:'totalBetCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'totalWinCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'incomeCash',name:'Income',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'backCash',name:'%Back cash',status:'checked',default:'1'},
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
            var casinogame = this.casinogame.state;


            var newlink = link+statlink+'/api.php?getGlobal=' +casinogame+'&roundMin='+RoundMin + '&roundMax=' + roundMax +'&cId='+casinoId+'&sCode='+sCode+'&isActive='+isActive+'&currency='+currency+'&startDate='+startDate+'&stopDate='+stopDate+'&uId='+uId+'&baseCurrency='+basecurrency;
            console.log(newlink);

            var appthis = this;
            $.ajax({
                url:newlink,
                dataType:'JSON',
                type:'GET',
                success:function (data) {
                    if(data.count){
                        if(casinogame=='casino'){
                            appthis.detailtablecasino.ansver = data;
                            appthis.casinosummery.ansver=data.currency;
                            appthis.casinobasecurrency.ansver=data.currency.baseCurrency;


                        }else if (casinogame=='game') {
                            appthis.detailtablegame.ansver = data;
                            appthis.gamesummery.ansver=data.currency;
                            appthis.gamebasecurrency.ansver=data.currency.baseCurrency;
                        }

                        console.log(appthis.detailtablecasino.ansver);
                    }else{
                        appthis.count='Записепй не найдено';
                    }

                }
            })

        },
        setcasino:function functionName() {
            this.casinogame.state ='casino'
        },
        setgame:function functionName() {
            this.casinogame.state ='game'
        }
    },


}
</script>

<style lang="css">

</style>
