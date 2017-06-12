<template lang="html">
  <div>
      <div class="hidewrap">
          <div class="rowchik casino_game">

          </div>
          <div class="hidewrapitem">
              <form class='hideitem'>
                  <inputblock v-bind:inputarguments='blockinput1'></inputblock>
                  <inputblock v-bind:inputarguments='blockinput2'></inputblock>
                  <!-- <inputblock v-bind:inputarguments='blockinput3'></inputblock> -->
                  <inputblock v-on:catchme='iscatch' v-bind:inputarguments='blockinput4'></inputblock>
                  <inputblock v-bind:inputarguments='blockinput5'></inputblock>
              </form>
          </div>
      </div>
      <!-- <tableStat></tableStat> -->
  </div>
</template>

<script>
import formStat from '@/components/form/form'
import tableStat from '@/components/tables/table'
import inputblock from '@/components/form/inputblock'



console.log(formStat);
export default {
    name:'global',
    components:{
        formStat,
        tableStat,
        inputblock
    },
    data(){
        return{



            blockinput1:{
                timeperiod:'all',
                from:'1',
                to:'1',
                activsession:{
                    status:"0"
                }
            },
            blockinput2:{
                gamecategory:'all',
                gameblock:{
                    activegame:''
                },
            },
            blockinput3:{
                timeperiod:'all',
                from:'2',
                to:'2',
                activsession:{
                    status:"0"
                }
            },
            blockinput4:{
                casinoblock:{
                    casinoid:''
                },
                userid:'0'
            },
            blockinput5:{
                rounds:{
                    from:'',
                    to:'',
                },
                currency:{
                    status:'enabled',
                    list:[],
                },
                sort:{
                    status:'disabled',
                },
                showby:{
                    status:'enabled',
                    arr:['50','100','200','500','1000'],
                    all:'1',
                },
            }
        }
    },
    methods:{
        iscatch:function (e) {
            this.getcurrency(e)
        },
        getcurrency:function(elem) {
            console.log('go');
            var idcasino;
            if(elem =='all' || !elem){
                idcasino = 'all';
            }else if(elem){
                idcasino ='cid='+ elem;
            }
            var newlink = link+statlink+'/api.php?getCasinoCurrency&'+idcasino
            // console.log(newlink);
            var newthis = this;
            $.ajax({
                url: newlink,
                dataType: 'JSON',
                type: 'GET',
                success: function(data){

                    var CasinoArr = data.info;
                    if(elem){
                        CasinoArr=[data]
                    }
                    var CurrObg = {};
                    var CurrArr = [];
                    console.log(data);

                    CasinoArr.forEach(function(item) {
                        item.currency.forEach(function(currname, index) {
                            CurrObg[(currname.name)] = currname.name;

                        })

                    })
                    for (var key in CurrObg) {
                        CurrArr.push(key)
                    }
                    newthis.blockinput5.currency.list=CurrArr
                }
            })
        }
    },
    mounted:function () {
        this.getcurrency();
    },


}
</script>

<style lang="css">

</style>
