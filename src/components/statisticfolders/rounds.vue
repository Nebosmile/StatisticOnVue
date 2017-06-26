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
                            <useridinput v-bind:useroption ='userid'  v-if='userid'></useridinput>
                            <sessioninput v-bind:options ='sessionid' v-if='sessionid'> </sessioninput>
                        </div>

                        <div class='inputblock'>
                            <casinoinput v-bind:options ='casinoblock'  v-if='casinoblock'></casinoinput>
                        </div>

                        <div class='inputblock'>
                            <roundsinput v-bind:options ='rounds' v-if='rounds'></roundsinput>
                            <sortinput v-if='sort' v-bind:options ='sort'></sortinput>
                            <showbyinput v-bind:options ='showby' v-if='showby'></showbyinput>
                        </div>

                         <buttonblockinput v-on:get='getSession' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
                    </form>
                </div>
            </div>
            <tableStat v-if='sessionsummary.ansver' v-bind:options ='sessionsummary'></tableStat>


            <tableStat v-if='sessioncurrency.ansver' v-bind:options ='sessioncurrency'></tableStat>


            <tableStat v-on:get='getSession' v-if='(sessiondetailed.ansver)'  v-bind:options ='sessiondetailed'></tableStat>
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
            sessionid:{
                id:''
            },


            basecurrency:{
                activebasecur:'0'
            },
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
}
</script>

<style lang="css">
</style>
