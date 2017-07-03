<template>
  <div id="app">
    <headcomponent></headcomponent>

    <router-view></router-view>
  </div>
</template>

<script>



import headcomponent from '@/components/header';
// import '@/assets/js/check.js';
// import '@/assets/js/jquery.timepicker.js';
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

<style lang="scss">
body{
    margin: 0;
    min-width: 800px;
    background-color: #2f2d2d;
    font-size: 14px;
    color: #dadada;
    position: relative;
    min-height: 100vh;
}
table{
    color:#000;
}
a{
    color:inherit;

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
.text_left{
    text-align: left;
}
.text_right{
    text-align: right;
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
.menu{
    margin-top: 60px;
}
li{
    list-style: none;
}
.indexDiv2 {
    text-align: center;
    max-width: 450px;
    margin: 0 auto;
    padding: 30px 0 15px 0;
    background-color: #252525;
    border-radius: 10px;
    box-shadow: 0 0 6px -2px #000;

    label{
        color:#dadada;
    }
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
    padding: 0px 12px;
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
    color: #000;
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

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn-primary:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
}
.btn-danger{
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
.btn-danger:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
}
.btn-success, .btn-lbtn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}
.btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #398439;
}
.btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
}
.btn-danger:hover {
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
}
.inputblock {
    display: inline-block;
    margin-left: 10px;
    width: 300px;
    font-size: 12px;
    text-align: right;
    vertical-align: top;
}
label {
    font-size: 12px;
    margin-bottom: 0;
    line-height: 2.5;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;

    .inpContainer {
    margin-left: 5px;
    float: right;
    width: 200px;
    }
}
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
.hidwrap {
    margin-bottom: 20px;
    overflow: hidden;
}
.hideitem{
    margin-bottom: 0;
    transition: all 0.3s linear
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
.hideButton.see:before {
        top: 0;
        right: 0;
        border: 10px solid transparent;
        border-right: 10px solid #a1a1a1;
}
.hideButton.see:hover:before {
    border-right: 10px solid #fff;
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
