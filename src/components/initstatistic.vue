<template lang="html">
    <div>
        <ul>
            <li v-for='(items, key) in templatetlinks'><router-link  v-bind:to='key' append>{{items}}</router-link></li>
        </ul>
        <div>
            statistic intro
        </div>
    </div>

</template>

<script>
export default {
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
            }
        }
    }
}
</script>

<style lang="css">
</style>
