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
ul li{
    list-style: none;
}
.casino_game {
    width: 100%;
    text-align: center;
}
.rowchik {
    position: relative;
    z-index: 1;
    overflow: hidden;
    background-color: #3a3a3a;
    padding-right: 10px;
    p{
        font-weight: bold;
        display: inline;
        color: #dadada;
        margin: 0 0 0 8px;
        padding: 0;
        line-height: 2.5;
        font-size: 14px;
    }
}
.activeBtn.active {
    background-color: #252525;
    color: #fff;
    cursor: default;
}
.activeBtn {
    display: inline-block;
    padding: 0 12px;
    line-height: 2.5;
    cursor: pointer;
    color: #c3c3c3;
    font-weight: 600;
}
.navigateCenter {
    min-width: 380px;
    position: absolute;
    top: 0;
    left: 49%;
    transform: translateX(-50%);
    text-align: center;
}
.navigate {
    width: 100%;
}
.navigate > div {
    text-align: center;
}
.hideButton {
    width: 20px;
    height: 20px;
    color: #ffffff;
    position: relative;
    cursor: pointer;
    margin: 8px 5px 0 0;
}
.hideButton:before {
    content: "";
    position: absolute;
    top: 5px;
    right: 0;
    border: 10px solid transparent;
    border-top: 10px solid #a1a1a1;
}
.filterButton {
    cursor: pointer;
    margin: 10px 5px 0 0;
    width: 20px;
    height: 20px;
    background-image: url(~@/assets/gumbdark.png);
    background-repeat: no-repeat;
}
.filterButton:hover {
    background-image: url(~@/assets/gumbwhite.png);
}
.right{
    float: right;
}
.left{
    float: left;
}
.hide{
    display: none;
}
*{
    box-sizing: border-box;
}
.exel {
    cursor: pointer;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(~@/assets/excel.png) no-repeat;
    margin: 8px 5px 0 0;
}
.exel:hover {
    background: url(~@/assets/excel_hover.png) no-repeat;
}
table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    border-spacing: 0;
    border-collapse: collapse;
}
tr {
    background: #ececec;
}
th {
    border: 1px solid #ddd;
    line-height: 1.42857143;
    border-bottom: 3px solid #8d8d8d !important;
    box-shadow: 0 3px 0 0 #8d8d8d;
}
tbody>tr:nth-of-type(odd) {
    background-color: #f9f9f9;
}
tr>td, tr>th{
    border: 1px solid #ddd;
    text-align: left;
    padding:8px;
    font-size: 12px;
}
.inputblock {
    line-height: 2;
}
input, select{
    padding: 5px;
}
</style>
