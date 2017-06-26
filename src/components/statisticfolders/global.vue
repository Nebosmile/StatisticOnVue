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
                  <div class='inputblock'>
                      <timeinput v-if='time' :timeoption ='time'></timeinput>
                      <isactive v-if='activsession' :options ='activsession'></isactive>
                  </div>

                  <div class='inputblock'>
                      <gamecategoryinput v-if='gamecategory'></gamecategoryinput>
                      <gameinput v-bind:gameinputoption ='gameblock' v-if='gameblock'></gameinput>
                      <useridinput v-bind:useroption ='userid'  v-if='userid'></useridinput>
                  </div>

                  <div class='inputblock'>
                      <casinoinput v-bind:options ='casinoblock'  v-if='casinoblock'></casinoinput>
                      <basecurrency v-bind:options ='basecurrency' v-if='basecurrency' ></basecurrency>
                  </div>

                  <div class='inputblock'>
                      <roundsinput v-bind:options ='rounds' v-if='rounds'></roundsinput>
                      <sortinput v-if='sort' v-bind:options ='sort'></sortinput>
                      <showbyinput v-bind:options ='showby' v-if='showby'></showbyinput>
                  </div>

                  <buttonblockinput v-on:get='getGlobal' v-on:clear='cleartable' v-on:reset='resetform([blockinput1,blockinput2,blockinput3,blockinput4])' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
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
// import inputblock from '@/components/form/inputblock'
import buttonblockinput from '@/components/form/buttonblockinput'
import timeinput from '@/components/form/timeinput'
import gameinput from '@/components/form/gameinput'
import casinoinput from '@/components/form/casinoinput'
import useridinput from '@/components/form/useridinput'
import roundsinput from '@/components/form/roundsinput'
import sortinput from '@/components/form/sortinput'
import showbyinput from '@/components/form/showbyinput'
import basecurrency from '@/components/form/basecurrency'
import isactive from '@/components/form/isactive'
import sessioninput from '@/components/form/sessioninput'
import gamecategoryinput from '@/components/form/gamecategoryinput'




export default {
    name:'global',
    components:{
        tableStat,
        // inputblock,
        buttonblockinput,
        timeinput,
        gameinput,
        casinoinput,
        useridinput,
        roundsinput,
        sortinput,
        showbyinput,
        basecurrency,
        isactive,
        sessioninput,
        gamecategoryinput
    },
    beforeDestroy() {
        console.log('I am global and I am destroyed')
    },
    beforeMount() {
        console.log('I am global and I am mounted')
    },
    data(){
        return{
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
            },
            gamecategory:'all',
            gameblock:{
                activegame:''
            },
            userid:{
                id:''
            },
            casinoblock:{
                casinoid:'',
                currency:{
                    status:'enabled',
                    list:[],
                    activecurrency:''
                },

            },


            basecurrency:{
                activebasecur:'0'
            },
            rounds:{
                from:'',
                to:'',
            },
            sort:{
                disabled:true,
            },
            showby:{
                status:'enabled',
                arr:['50','100','200','500','1000'],
                active:'50',
                all:'99999999',
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
                    exellink:{
                        link:''
                    },
                    navigationlist:{
                        currenpage:'1',
                        count:'1',
                        allpage:'1',
                        records:'all',
                        step:''

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
                    exellink:{
                        link:''
                    },
                    navigationlist:{
                        currenpage:'1',
                        count:'1',
                        allpage:'1',
                        records:'all',
                        step:''
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
            var casinogame = this.casinogame.state;
            var RoundMin=this.rounds.from;
            var roundMax=this.rounds.to;
            var casinoId=this.casinoblock.casinoid;
            var sCode= this.gameblock.activegame;
            if (sCode == "") {
                sCode = 0;
            }
            var isActive=this.activsession.status;
            if(isActive.length>1 || isActive.length ==0){
                isActive ='2'
            }else{
                isActive =isActive[0];
            }
            var basecurrency =this.basecurrency.activebasecur;
            var currency= this.casinoblock.currency.activecurrency;
            var startDate = taketime(this.time.timeof.data,this.time.timeof.time)
            var stopDate = taketime(this.time.timeto.data,this.time.timeto.time)
            var uId = this.userid.id;



            var newlink = link+statlink+'/api.php?getGlobal=' +casinogame+'&roundMin='+RoundMin + '&roundMax=' + roundMax +'&cId='+casinoId+'&sCode='+sCode+'&isActive='+isActive+'&currency='+currency+'&startDate='+startDate+'&stopDate='+stopDate+'&uId='+uId+'&baseCurrency='+basecurrency;
            console.log(newlink);

            var appthis = this;
            $.ajax({
                url:statistic_url,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                dataType:'JSON',
                data:{'url':newlink},
                type:'POST',
                success:function (data) {
                    console.log(data);
                    if(data.count){

                        if(casinogame=='casino'){

                            appthis.detailtablecasino.tableoption.navigationlist.count= data.count;
                            appthis.detailtablecasino.ansver = data;

                            appthis.casinosummery.ansver=data.currency;
                            appthis.casinobasecurrency.ansver=data.currency.baseCurrency;


                        }else if (casinogame=='game') {
                            appthis.detailtablecasino.tableoption.navigationlist.count= data.count;
                            appthis.detailtablegame.ansver = data;

                            appthis.gamesummery.ansver=data.currency;
                            appthis.gamebasecurrency.ansver=data.currency.baseCurrency;
                        }

                        console.log(appthis.detailtablecasino.ansver);
                    }else{
                        appthis.count='Записепй не найдено';
                    }

                },
                error:function (data) {
                    console.log(data);
                }
            })

        },
        setcasino:function functionName() {
            this.casinogame.state ='casino'
        },
        setgame:function functionName() {
            this.casinogame.state ='game'
        },
        cleartable:function () {
            if(this.casinogame.state=='casino'){
                this.clearall(['casinosummery','casinobasecurrency','detailtablecasino'])
            }else{
                this.clearall(['gamesummery','gamebasecurrency','detailtablegame'])
            }

        },
        clearall:function (arr) {
            var newthis = this;
            arr.forEach(function (item) {
                newthis[item].ansver=''
            })
        },
        resetform:function (arr) {
            var newthis = this;
            console.log('reset');
            arr.forEach(function (item) {
                if(item.time){item.time.timeperiod='all'}
                if(item.activsession){item.activsession.status=[]}
                if(item.gamecategory){item.gamecategory='all'}
                if(item.gameblock){item.gameblock.activegame=''}
                if(item.sessionid){item.sessionid.id=''}
                if(item.userid){item.userid.id=''}
                if(item.casinoblock){item.casinoblock.casinoid=''}
                if(item.currency){item.currency.activecurrency=''}
                if(item.basecurrency){item.basecurrency.activebasecur='0'}
                if(item.rounds){item.rounds.from='';item.rounds.to='';}
                if(item.sort){item.sort.active='startDate'}
            })
        }
        // <tableStat v-if='(casinosummery.ansver && casinogame.state=="casino")' v-bind:options ='casinosummery'></tableStat>
        // <tableStat v-if='(gamesummery.ansver && casinogame.state=="game")' v-bind:options ='gamesummery'></tableStat>
        //
        // <tableStat v-if='(casinobasecurrency.ansver && casinogame.state=="casino")' v-bind:options ='casinobasecurrency'></tableStat>
        // <tableStat v-if='(gamebasecurrency.ansver && casinogame.state=="game")' v-bind:options ='gamebasecurrency'></tableStat>
        //
        //
        // <tableStat v-if='(detailtablecasino.ansver && casinogame.state=="casino")'  v-bind:options ='detailtablecasino'></tableStat>
        // <tableStat v-if='(detailtablegame.ansver && casinogame.state=="game")'  v-bind:options ='detailtablegame'></tableStat>
    },


}
</script>

<style lang="css">

</style>
