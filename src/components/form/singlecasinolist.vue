<template lang="html">
    <label>Casino
		<div class="inpContainer">
			<select name="casinoFilter" class="form-control" v-model='options.casinoid'>
                <option value="">All</option>
                <option v-for='(item, index) in casinolist' v-bind:value="item._id">{{item.name}}</option>
            </select>
		</div>
	</label>
</template>

<script>

export default {
    props:{
        options:{
            type: Object
        }
    },
    name:'singlecasinolist',
    data(){
        return{
            casinolist:'',
            active_casino:''
        }
    },
    beforeCreate: function () {
        var newthis = this;
        var newlink = admin_url+'casino'
        $.ajax({
            url: newlink,
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            xhrFields: {
                  withCredentials: true
              },
            data:{},
            dataType: 'JSON',
            type: 'POST',
            success: function(data){
                console.log(data);
                if(data.result){
                    newthis.casinolist=data.result;
                }else return;

            }
        })
    },
}
</script>

<style lang="css">
</style>
