<template lang="html">
    <div class="indexDiv">
        <img src="../assets/logo3.png" alt="">
        <div class="indexDiv2">
            <div class="indexDiv3">
                <select v-model='location' id='indexselect' name="">
                    <option v-for='(items, key) in devCasinoProd' v-bind:value="key">{{items}}</option>
                </select>
            </div>
            <div id="goIndex" class="goindex activeindex">
			    <h3><router-link v-bind:to='location' append>GAMES STATISTIC</router-link></h3>
			</div>
            <router-view v-bind:previuslink ='location'></router-view>

        </div>
    </div>

</template>

<script>

export default {
    name:'statistic',
    data(){
        return{
            devCasinoProd:{
                prod:'show production',
                dev:'show develop',
                stage:'show stage',
                coliseumbet:'show coliseumbet'
            },
            location:'prod',

        }
    },
    methods:{
        setststiclink:function() {
            statisticlink=this.location
        },
    },
    mounted:function () {

        var newlink = link+statlink+'/api.php?getCasinoCurrency&all'
        var newthis = this;
        $.ajax({
            url: newlink,
            dataType: 'JSON',
            type: 'GET',
            success: function(data){
                console.log(data);
                var necasinoobj={}

                data.info.forEach(function(item) {
                    necasinoobj[item.casinoName]={};
                    item.currency.forEach(function (elem) {
                        necasinoobj[item.casinoName][elem.name]=elem.name;
                    })
                })
                for(var key in necasinoobj){

                }
                newthis.$root.casinolist=necasinoobj;

                console.log(newthis.$root.casinolist);
            }
        })
    }
}

</script>

<style lang="scss">
    #goIndex{
        cursor: pointer;
        h3{
            font-size: 20px;
        }

    }
    *{
        box-sizing: border-box;
    }

</style>
