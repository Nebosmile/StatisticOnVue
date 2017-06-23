<template>
  <div id="app">
    <headcomponent></headcomponent>

    <router-view></router-view>
  </div>
</template>

<script>
import headcomponent from '@/components/header';
export default {
  name: 'app',
  components:{
      headcomponent
  },
        //take from statistic.vue
    data(){
        return{
            casinolist:{},
        }
    },
}
</script>

<style>
body{
    margin: 0;
    min-width: 800px;
    background-color: #2f2d2d;
    font-size: 14px;
    color: #dadada;
    position: relative;
    min-height: 100vh;
}
.left{
    float:left;
}
.right{
    float: right;
}
.hide{
    display: none!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   position: absolute;
  min-width: 100%;
  min-height: 100%;
}
.indexDiv2 {
    text-align: center;
    max-width: 450px;
    margin: 0 auto;
    padding: 30px 0 15px 0;
    background-color: #252525;
    border-radius: 10px;
    box-shadow: 0 0 6px -2px #000;
}
#login_form_wrap h4 {
    font-size: 19px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 30px;
}
#login_form {
    background: none;
    width: 40%;
    min-width: 350px;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.indexDiv2 > img {
    margin-bottom: 15px;
}
.indexDiv2 .indexDiv3 {
    display: inline-block;
    width: 352px;
}
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
.indexDiv{

    position: absolute;
    top: 20%;
    width: 100%;
    text-align: center;
}
form {
    max-width: 2400px;
    display: inline-block;
    overflow: hidden;
    margin: 0 auto;
    text-align: left;
    font-size: 12px;
    padding: 10px 0 3px;
    background-color: #ececec;
    width: 100%;
    text-align: center;
    vertical-align: top;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
input{
    font: inherit;
}
#login_form label {
    width: 100%;
    text-align: left;
    font-size: 17px;
    line-height: 2;
}
#login_form label input {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 10px;
    color: #000;
    line-height: 2;
}
#login_form input[type='button'] {
    margin-top: 10px;
    float: right;
    text-align: center;
    background-color: #ffcc00;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    padding: 10px 20px;
    line-height: 1;
    border: none;
}



</style>
