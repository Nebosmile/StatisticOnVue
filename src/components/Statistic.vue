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
    #goIndex{
        cursor: pointer;
        h3{
            font-size: 20px;
        }

    }
    *{
        box-sizing: border-box;
    }
    .inputblock {
        display: inline-block;
        margin-left: 10px;
        width: 300px;
        font-size: 12px;
        text-align: right;
        vertical-align: top;

        .inpContainer {
            margin-left: 5px;
            float: right;
            width: 200px;
        }
        .form-control {
            height: 27px;
        }
        select {
            border-radius: 0;
            margin-bottom: 8px;
        }
    }
    label {
        font-size: 12px;
        margin-bottom: 0;
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
        text-align: right;
        width: 100%;
    }
    .form-control {
        display: block;
        width: 100%;
        padding: 6px 12px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        /* box-shadow: inset 0 1px 1px rgba(0,0,0,.075); */
        /* -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s; */
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .dateform label {
        width: 100%;
    }
    .dateform input:first-child, .lineblock:first-child {
        margin-right: 2%;
    }
    .dateform input, .lineblock {
        width: 49%;
        float: left;
    }
    .inputblock input {
        margin-bottom: 8px;
        border-radius: 0;
    }
    .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
        background-color: #eee;
        opacity: 1;
    }

</style>
