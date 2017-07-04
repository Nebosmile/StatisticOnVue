<template>
<div class="hello">
  <div class="main_form">



    <div class="indexDiv">
      <div class="indexDiv2">
        <img src="../assets/logo3.png" alt="">
        <div id="login_form_wrap">
          <h4>WELCOME TO THE CLIENT AREA</h4>
          <form ref='login_form' id="login_form">
            <label>Login
              				<input name="login" type="text" placeholder="login">
              			</label>
            <label>Password
              				<input name="password" type="password" placeholder="password">
              			</label>
            <input v-on:click='makelogin' id="gologin" type="button" name="button" value="login">
          </form>
        </div>
      </div>
      <!-- <router-link to='/statistic'>Login</router-link> -->
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {

    }
  },
  methods: {
    makelogin() {
      var form = this.$refs.login_form;
      var login = form.elements.login.value;
      var password = form.elements.password.value;
      var mainurl = 'http://devinterlayer.bossgs.org/manager'
      var newthis = this;
      $.ajax({
        url: mainurl,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        xhrFields: {
          withCredentials: true
        },
        type: 'POST',
        data: {
          'login': login,
          'password': password
        },
        success: function(data) {
          console.log(data);
          if(data.login){
              console.log(data.login);
              checkGlobalsession(data);
              newthis.$router.push('/statistic')
              userdata.userstate=true;
              console.log(userdata);

          }

          console.log(userdata);



        }
      })

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
