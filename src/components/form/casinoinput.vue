<template lang="html">
<div>
    <label>Casino
		<div class="inpContainer">
			<select name="casinoFilter" class="form-control">
                <option value="0">All</option>
                <option v-for='(item, index) in casinolist' v-bind:value="item.cid">{{item.casinoName}}</option>
            </select>
		</div>
	</label>
    <label>Casino ID
    	<div class="inpContainer">
    	       <input name="casinoId" type="text" class="form-control">
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
    name:'casinoinput',
    data(){
        return{
            casinolist:'',
            active_casino:''
        }
    },
    beforeCreate: function () {
        var newlink = link+statlink+'/api.php?getCasino'
        // console.log(newlink);
        var newthis = this;
        $.ajax({
            url: newlink,
            dataType: 'JSON',
            type: 'GET',
            success: function(data){
                console.log(data);
                newthis.casinolist=data.info;
            }
        })
    }

}
</script>

<style lang="css">
</style>
