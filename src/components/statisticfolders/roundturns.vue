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
                            <useridinput v-bind:useroption ='userid'  v-if='userid'></useridinput>
                            <sessioninput v-bind:options ='sessionid' v-if='sessionid'> </sessioninput>
                        </div>

                        <div class='inputblock'>
                            <sortinput v-if='sort' v-bind:options ='sort'></sortinput>
                            <showbyinput v-bind:options ='showby' v-if='showby'></showbyinput>
                        </div>

                         <buttonblockinput v-on:get='getRoundsTurn' v-on:clear='cleartable' v-bind:inputarguments= 'buttonblock'></buttonblockinput>
                    </form>
                </div>
            </div>


            <tableStat v-on:get='getRounds' v-if='(rounddetailed.ansver)'  v-bind:options ='rounddetailed'></tableStat>
        </div>
    </div>
</template>

<script>
import roundidinput from '@/components/form/roundidinput'
export default {
    name:'roundturns',
    components:{
        roundidinput
    }
}
</script>

<style lang="css">
</style>
