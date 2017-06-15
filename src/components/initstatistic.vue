<template lang="html">
    <div>
        <ul class="menu">
            <li v-for='(items, key) in templatetlinks'><router-link v-on:click.native='setactivetemplate(key)' v-bind:to='"/statistic/" +previuslink+"/" + key' >{{items}}</router-link></li>
        </ul>
        <div>
            statistic intro
        </div>
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>

    </div>

</template>

<script>
export default {
    props:['previuslink'],
    name:'initstatistic',
    data(){
        return{
            activetemplate:'global',
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
        }
    },
    methods:{
        setactivetemplate:function(elem) {
            this.activetemplate=elem;
            var result =this.$route.fullPath;
            console.log(this.previuslink+this.activetemplate);
            if(result.indexOf(this.previuslink) >=0){
                console.log(result.indexOf(this.previuslink));
                this.isappend= false;
                console.log('false');
            }else{
                this.isappend= true;
                console.log('true');
            }
        },
    }
}
</script>

<style lang="scss">
.menu{
    overflow: hidden;
    li{
        list-style: none;
        float: left;
        padding: 5px;
    }
}
</style>
