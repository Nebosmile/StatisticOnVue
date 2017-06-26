<template lang="html">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  			<!-- Brand and toggle get grouped for better mobile display -->
  			<div class="navbar-header left">
  				<a class="" href="index.html"><img src="../assets/logo3.png" alt="boss gaming studio logo"></a>
  			</div>
  			<div v-if='userstate'  class="head_logIn">
  				<div class="game_stat left">
  					<img class="left" src="../assets/gumbdark.png" alt="">
  					<div class="geme_stat_menu left">GAMES STATISTIC</div>
  					<div id="location_stat" class="left">SLOTOBOSS</div>

  					<!-- <div class="head_time">
  						<p id="server_time">
  							Server time: 24.02.2017 10:42 UTC
  						</p>
  						<p id="Local_time">
  							Local time: 24.02.2017 12:42 +2:00
  						</p>

  					</div> -->


  				</div>
  				<div class="admin_settings right">
  					<div class="adm_panel left">
  						<div id="username" v-on:click='closeopen_panel'>{{username}}</div>
  						<ul ref='admin_menu' class="adm_ul">
  							<li>Profile</li>

  							<li id="panel"><router-link to='/adminpanel/home'>Panel</router-link></li>
  							<li id="logout">Log Out</li>
  						</ul>
  					</div>
  					<div class="settings_panel left"><img src="../assets/shesterenka.png" alt="">



  					</div>
  				</div>
  		</div></nav>

</template>

<script>
export default {
    name:'headcomponent',
    data(){
        return{
            userstate:false,
            username:''
        }
    },
    methods:{
        closeopen_panel(){
            var elem =this.$refs.admin_menu;
            elem.classList.toggle('hide')
        },
        checkuser(){
            this.userstate=userdata.userstate
            this.username=userdata.displayName;
            console.log(userdata.userstate);
            console.log(userdata.displayName);
            if(userdata.userstate==false){
                console.log('user is not register// vue component.header');
            }
        }

    },
    mounted(){
        this.checkuser
    },
    watch: {
        // в случае изменения маршрута запрашиваем данные вновь
        '$route': 'checkuser'
      },
}
</script>

<style lang="css">

.navbar {
    background: #000;
    min-width: 500px;
    height: 51px;
    color:#dadada;
}
.navbar-fixed-top {
    top: 0;
    border-width: 0 0 1px;
}
.navbar-fixed-bottom, .navbar-fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
}
.navbar {
    position: relative;
    min-height: 50px;
    border: 1px solid transparent;
}
.navbar-header {
    height: 100%;
}
.game_stat {
    width: 70%;
    text-align: center;
}
.navbar-header a {
    height: 100%;
    display: inline-block;
    margin: 4px 3px 0 3px;
}
.game_stat img {
    position: absolute;
    left: 144px;
    top: 19px;
    width: 19px;
    height: 13px;
}
.head_time {
    display: none;
    min-width: 400px;
    margin-left: 190px;
    margin-top: 16px;
}
.head_time p:first-child {
    margin-right: 50px;
}
.head_time p {
    display: inline-block;
}
.geme_stat_menu {
    font-size: 18px;
    font-family: "Arial";
    color: #e6e6e6;
    line-height: 1.2;
    text-align: left;
    position: absolute;
    left: 167px;
    top: 14.7px;
    font-weight: bold;
}
.admin_settings .adm_panel {
    cursor: pointer;
    padding: 10px 15px 10px 10px;
    position: relative;
    margin-right: 5px;
    padding-right: 15px;
    line-height: 2.2;
}
.admin_settings .settings_panel {
    padding: 10px 10px 0 0;
}


.admin_settings .adm_panel ul {
    position: absolute;
    top: 50px;
    right: 0;
    display: none;
    background-color: #fff;
    padding: 0;
    margin: 0;
    text-align: left;
}
.admin_settings .adm_panel:hover ul{
    display: inline-block;
}
.admin_settings .adm_panel ul li {
    list-style: none;
    color: #000;
    min-width: 100px;
    padding: 5px 5px 5px 10px;
    cursor: pointer;
}
.admin_settings .adm_panel ul li:hover{
    background-color: rgb(144, 144, 139);
    color:#fff;
}
.admin_settings .adm_panel:before {
    cursor: pointer;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 24px;
    right: 5px;
    border-top: 4px dashed;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.navbar-header a img {
    height: 42px;
    width: auto;
}
#location_stat {
    font-size: 18px;
    font-family: "Arial";
    color: #e6e6e6;
    line-height: 1.2;
    text-align: left;
    position: absolute;
    left: 400px;
    top: 14.7px;
    font-weight: bold;
}

@media screen and (max-width: 1000px)
style.css:987
.game_stat {
    width: inherit;
}
.head_time {
    display: none;
}
@media (min-width: 768px)
navbar.less:151
.navbar-fixed-bottom, .navbar-fixed-top {
    border-radius: 0;
}

</style>
