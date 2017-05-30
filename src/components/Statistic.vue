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
			    <h3><router-link v-bind:to='location'>GAMES STATISTIC</router-link></h3>
			</div>

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

</style>
