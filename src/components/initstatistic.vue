<template lang="html">
    <div>
        <ul class="menu">
            <li v-for='(items, key) in templatetlinks'><router-link v-on:click.native='setactivetemplate(key)' v-bind:to='"/statistic/" +previuslink+"/" + key' >{{items}}</router-link></li>
        </ul>

            <keep-alive>
                <router-view ></router-view>
            </keep-alive>

    </div>

</template>

<script>
;
export default {
    // props:['previuslink'],
    name:'initstatistic',
    data(){
        return{
            activetemplate:this.$route.params.location,
            templatetlinks:{
                global:'Global',
                session:'Session',
                rounds:'Rounds',
                roundturns:'Round turns',
                online:'Online',
                exchangrates:'Exchangrates',
                users:'Users',
                reports:'Reports',
            },
            isappend:true,
            previuslink:this.$route.params.location
        }
    },
    methods:{
        setactivetemplate:function(elem) {
            this.activetemplate=elem;
            var result =this.$route.fullPath;
            console.log(result);
            if(result.indexOf(this.previuslink) >=0){
                console.log(result.indexOf(this.previuslink));
                this.isappend= false;
                console.log('false');
            }else{
                this.isappend= true;
                console.log('true');
            }
        },

    },


}
</script>

<style lang="scss">

</style>
