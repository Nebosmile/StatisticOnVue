<template lang="html">
  <div>
        <label >Game
			<div class="inpContainer">
				<select name="slotsIdFilter" v-model='gameinputoption.activegame' class="form-control">
                    <option value="0">All</option>
                    <option v-for='(item, index) in gamelist' v-bind:value="item.sCode">{{item.sName}}</option>
                </select>
			</div>
		</label>
        <div>
			<label>Game ID
			   <div class="inpContainer">
				   <input name="gameId" type="text" class="form-control" v-bind:value='gameinputoption.activegame'>
			   </div>
			</label>
		</div>
  </div>
</template>

<script>

export default {
    props:{
        gameinputoption:{
            type: Object
        }
    },
    name:'gameinput',
    data(){
        return{
            gamelist:'',
        }
    },
    beforeCreate: function () {
        var newlink = link+statlink+'/api.php?getSlots'
        // console.log(newlink);
        var newthis = this;
        $.ajax({
            url:statistic_url,
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            xhrFields: {
                  withCredentials: true
              },
            dataType:'JSON',
            type:'POST',
            data:{'url':newlink},
            success: function(data){
                console.log(data);
                newthis.gamelist=data.info;
            }
        })
    }

}
</script>

<style lang="css">
</style>
