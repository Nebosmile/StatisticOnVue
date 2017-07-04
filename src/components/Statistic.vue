<template lang="html">
        <div class="main_form">
            <div class="indexDiv">
                <div class="indexDiv2">
                    <img src="../assets/logo3.png" alt="">
                    <div class="indexDiv3">
                        <select v-model='location' id='indexselect' name="" class="form-control">
                            <option v-for='(items, key) in devCasinoProd' v-bind:value="key">{{items}}</option>
                        </select>
                        <div id="goIndex" class="goindex activeindex">
                            <h3><router-link v-bind:to='location' append>GAMES STATISTIC</router-link></h3>
                        </div>
                    </div>

                </div>
            <!-- <router-view v-bind:previuslink ='location'></router-view> -->
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
        setposition () {

            if(this.$route.params.location !=undefined){
                this.location =this.$route.params.location;
            }
            // this.setcasinolist();
        },
        setcasinolist(){
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
    },
    watch: {
        // в случае изменения маршрута запрашиваем данные вновь
        '$route': 'setposition'
      },
    mounted:function () {
        // this.setcasinolist()

    },

}

</script>

<style lang="scss">
.goindex.activeindex:hover {
    background-color: #d5af18;
}
.goindex.activeindex {
    background-color: #ffcc00;
    cursor: pointer;
}

.goindex {
    cursor: pointer;
    position: relative;
    color: #000;
    background-color: #505050;

    margin-top: 24px;
    max-width: 450px;
    h3{
        margin: 0;
        padding: 0;
        color: #000;

        a{
            font-size: 24px;
            text-decoration: none;
            color: inherit;
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 15px 5px;
        }
    }
}


</style>
