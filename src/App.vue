<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
        //take from statistic.vue
    data(){
        return{
            casinolist:{},
        }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: absolute;
  min-width: 100%;
}
</style>
