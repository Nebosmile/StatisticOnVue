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
                        <div class='inputblock'>
                            <timeinput v-if='time' :timeoption ='time'></timeinput>
                        </div>

                        <div class='inputblock'>
                            <gamecategoryinput v-if='gamecategory'></gamecategoryinput>
                            <gameinput v-bind:gameinputoption ='gameblock' v-if='gameblock'></gameinput>

                        </div>

                        <div class='inputblock'>
                            <casinoinput v-bind:options ='casinoblock'  v-if='casinoblock'></casinoinput>
                            <useridinput v-bind:useroption ='userid'  v-if='userid'></useridinput>
                            <sessioninput v-bind:options ='sessionid' v-if='sessionid'> </sessioninput>
                        </div>

                        <div class='inputblock'>
                            <sortinput v-if='sort' v-bind:options ='sort'></sortinput>
                            <showbyinput v-bind:options ='showby' v-if='showby'></showbyinput>
                        </div>

                         <buttonblockinput v-on:get='getRounds' v-on:clear='cleartable' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
                    </form>
                </div>
            </div>


            <tableStat v-on:get='getRounds' v-if='(rounddetailed.ansver)'  v-bind:options ='rounddetailed'></tableStat>
        </div>
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
    name:'rounds',
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
    data(){
        return{
            time:{
                id:'2',
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

            gamecategory:'all',
            gameblock:{
                activegame:''
            },
            userid:{
                id:''
            },
            casinoblock:{
                casinoid:'',
            },
            sessionid:{
                id:''
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
            buttonblock:{
                sumbit:true,
                reset:true,
                clear:true,
            },
            rounddetailed:{
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
                    {value: 'number', name:'ID',status:'checked',default:'1'},
                    {value: 'date', name:'Start date',status:'checked',default:'1'},
                    {value:'casinoId', name:'Casino ID',status:'checked',default:'1'},
                    {value:'userId', name:'User ID',status:'checked',default:'1'},
                    {value:'extUId', name:'ExtU ID',status:'checked',default:'1'},
                    {value:'sessionID',name:'Session ID',status:'checked',default:'1'},
                    {value:'game',name:'Game',status:'checked',default:'1'},
                    {value:'roundID',name:'RoundID',status:'checked',default:'1'},
                    {value:'betLevel',name:'Bet Level',status:'checked',default:'1'},
                    {value:'denomination',name:'Denomination',status:'checked',default:'1'},
                    {value:'betCoins',name:'Total bet coins',status:'hide',default:'0'},
                    {value:'winCoins',name:'Total win coins',status:'hide',default:'0'},
                    {value:'betCash',name:'Total bets cash',status:'checked',default:'1'},
                    {value:'winCash',name:'Total wins cash',status:'checked',default:'1'},
                    {value:'currency',name:'Currency',status:'checked',default:'1'},
                    {value:'mode',name:'Round Info',status:'checked',default:'1'},
                    {value:'endBalance',name:'End balance',status:'checked',default:'1'},
                ]
            },


        }

    },
    methods:{
        getRounds:function () {
            var start = ((this.rounddetailed.tableoption.navigationlist.currenpage -1)*this.showby.active)+1;
            var step = this.showby.active;
            this.rounddetailed.tableoption.navigationlist.step =step;

            var casinoId=this.casinoblock.casinoid;
            var sCode= this.gameblock.activegame;
            if (sCode == "") {
                sCode = 0;
            }

            var startDate = taketime(this.time.timeof.data,this.time.timeof.time)
            var stopDate = taketime(this.time.timeto.data,this.time.timeto.time)
            var uId = this.userid.id;
            var sort = this.sort.active+this.sort.sorttype;
            var sessionidvalue= this.sessionid.id

    // http://autorisation.bossgs.org/interstat/dev/api.php?getGameSession&start=1&step=50&startDate=0&stopDate=0&isActive=2&currency=&cId=&sCode=0&roundMin=0&roundMax=9999999&uId=&sort=startDate1&baseCurrency=0

            var newlink = link+statlink+'/api.php?getRound'+'&sId='+sessionidvalue+'&start='+start+'&step='+step+'&startDate='+startDate+'&stopDate='+stopDate+'&cId='+casinoId+'&uId='+uId+'&sort='+sort;
            console.log(newlink);

            var appthis = this;
            $.ajax({
                url:statistic_url,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                dataType:'JSON',
                type:'POST',
                data:{'url':newlink},
                success:function (data) {
                    console.log(data);
                    if(data.count){
                        appthis.rounddetailed.ansver = data;
                        appthis.rounddetailed.tableoption.exellink.link= newlink;
                        appthis.setnavigation(appthis.rounddetailed, data)


                    }else{
                        appthis.count='Записепй не найдено';
                    }

                }
            })

        },
        setnavigation:function (elem, obj) {
            elem.tableoption.navigationlist.count= obj.count;
            elem.tableoption.navigationlist.allpage= Math.ceil(obj.count / this.showby.active)
            var start = (elem.tableoption.navigationlist.currenpage-1)*this.showby.active;
            var last = (elem.tableoption.navigationlist.currenpage)*this.showby.active;
            if (last>=obj.count){last = obj.count}
            elem.tableoption.navigationlist.records = Number(start + 1) + "-" + last;
        },
        cleartable:function () {

            clearall([this.rounddetailed])


        },
    }

}
</script>

<style lang="css">
</style>
