<template lang="html">
  <div>
        <label >Game
			<div class="inpContainer">
				<select name="slotsIdFilter" class="form-control">
                    <option value="0">All</option>
                    <option v-for='(item, index) in gamelist' v-bind:value="item.sCode">{{item.sName}}</option>
                </select>
			</div>
		</label>
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
            gamelist:""
        }
    },
    beforeCreate: function () {
        var newlink = link+statlink+'/api.php?getSlots'
        // console.log(newlink);
        var newthis = this;
        $.ajax({
            url: newlink,
            dataType: 'JSON',
            type: 'GET',
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
