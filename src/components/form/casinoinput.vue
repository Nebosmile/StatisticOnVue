<template lang="html">
<div>
    <label>Casino
		<div class="inpContainer">
			<select v-on:change = 'getcurrency' name="casinoFilter" class="form-control" v-model='options.casinoid'>
                <option value="all">All</option>
                <option v-for='(item, index) in casinolist' v-bind:value="item.cid">{{item.casinoName}}</option>
            </select>
		</div>
	</label>

        <label>Casino ID
            <div class="inpContainer">
                   <input v-on:click='generete' name="casinoId" type="text" :value='options.casinoid' class="form-control">
            </div>
        </label>
        <label v-if='options.currency'>Currency
            <div class="inpContainer">
               <select v-model='options.currency.activecurrency' name="currency" class="form-control">
                   <option value="">All</option>
                   <option v-for='key in options.currency.list' :value='key'>{{key}} </option>
               </select>
            </div>
        </label>


</div>
</template>

<script>
export default {
    props:{
        options: {
          type: Object
        }
    },
    name:'casinoinput',
    data(){
        return{
            casinolist:'',
            active_casino:''
        }
    },
    methods:{
        generete:function () {
            vm.$emit('test');
        },
        getcurrency:function() {
            var idcasino = this.options.casinoid;
            if(idcasino =='all' || !idcasino){
                idcasino = 'all';
            }else if(idcasino){
                idcasino ='cid='+ idcasino;
            }
            var newlink = link+statlink+'/api.php?getCasinoCurrency&'+idcasino;
            console.log(newlink);
            var newthis = this;
            $.ajax({
                url:statistic_url  + encodeURIComponent(newlink),
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                dataType:'JSON',
                type:'GET',
                success: function(data){

                    var CasinoArr = data.info;
                    if(idcasino!='all'){
                        CasinoArr=[data]
                    }
                    var CurrObg = {};
                    var CurrArr = [];


                    CasinoArr.forEach(function(item) {

                        item.currency.forEach(function(currname, index) {

                            CurrObg[(currname.name)] = currname.name;

                        })

                    })

                    for (var key in CurrObg) {
                        CurrArr.push(key)
                    }
                    newthis.options.currency.list=CurrArr
                }
            })
        }
    },
    beforeCreate: function () {
        var newlink = link+statlink+'/api.php?getCasino'
        // console.log(newlink);
        var newthis = this;
        $.ajax({
            url:statistic_url + encodeURIComponent(newlink),
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            xhrFields: {
                  withCredentials: true
              },
            dataType:'JSON',
            type:'GET',
            success: function(data){
                console.log(data);
                newthis.casinolist=data.info;
            }
        })
    },
    mounted:function () {
        if(this.options.currency != undefined){
            this.getcurrency();
        }

    },

}
</script>

<style lang="css">
</style>
