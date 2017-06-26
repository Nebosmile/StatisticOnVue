<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">User managment</p>
        </div>
            <div class="admin_buttons">

                <form ref='searchform' class="text_left">
                    <div>
                        <input id="panel_new_user" type="button" class="btn btn-lg btn-primary" value="Add">
                        <input id="panel_us_searh" type="button" name="panel_us_searh" class="btn btn-lg btn-success" value="Search"
                            v-on:click='searchuser'
                        >
                    </div>


                    <div>

                            <label>Login
                                <div class="inpContainer">
                                    <select id="panel_us_ad" name="panel_us_ad" class="form-control">
                                        <option value="user">users</option>
                                        <option value="manager">managers</option>
                                    </select>
                                </div>
                            </label>
                            <singlecasinolist v-bind:options='searchform'></singlecasinolist>

                            <label>search by id
                                <div class="inpContainer">
                                    <input type="text" name="panel_us_id" id="panel_us_id" value='' class="form-control">
                                </div>
                            </label>
                    </div>
                </form>
            </div>


        <form id="editform" name="editform" ref='editform' class="hide">
						<div class="inputblock">
							<label>Login
								<div class="inpContainer">
									<input name="login" type="text" class="form-control">
								</div>
							</label>
							<label>password
								<div class="inpContainer">
									<input name="password" type="password" class="form-control">
								</div>
							</label>
							<label>Email
								<div class="inpContainer">
									<input name="email" type="text" class="form-control">
								</div>
							</label>
							<label>displayName
								<div class="inpContainer">
									<input name="displayName" type="text" class="form-control">
								</div>
							</label>
							<label>Gender
								<div class="inpContainer">
									<div class="lineblock">
										<input type="radio" name="gender" value="female">female
									</div>
									<div class="lineblock">
										<input type="radio" name="gender" value="male">male
									</div>
								</div>
							</label>
							<label>Role
								<div class="inpContainer">
									<select name="userRole" class="form-control">
										<option value="manager">manager</option>
									</select>
								</div>
							</label>
							<div class="buttonBlock">
								<input id="registration" type="button" name="Sumbit" class="btn btn-lg btn-success" value="Sumbit">
								<input id="" type="reset" class="btn btn-lg btn-primary" value="Reset">
							</div>


						</div>
					</form>
                    <tableStat v-if='(usertable.ansver)' v-bind:options ='usertable'></tableStat>
    </div>

</template>

<script>
import singlecasinolist from '@/components/form/singlecasinolist'
import tableStat from '@/components/tables/table'

export default {
    name:'usermenagment',
    components:{
        singlecasinolist,
        tableStat,
    },
    data(){
        return{
            searchform:{
                casinoid:'',
            },

            usertable:{
                tableoption:{
                    name:'Detailed info',
                    exellink:{
                        link:''
                    },
                    navigationlist:{
                        currenpage:'1',
                        count:'1',
                        allpage:'1',
                        records:'all',
                        step:''
                    }
                },
                set_value:'',
                ansver:'',
                count:'',
                initvalue:[
                    {value: 'number', name:'Number',status:'checked',default:'1'},
                    {value:'_id',name:'Global id',status:'checked',default:'1'},
                    {value:'uid', name:'id in casino',status:'checked',default:'1'},
                    {value:'createdAt',name:' Creation date',status:'checked',default:'1'},
                    {value:'updatedAt',name:'Last action',status:'checked',default:'1'},
                ]
            },
        }
    },
    methods:{
        adduser(){

        },
        searchuser(){
            var newthis =this;
            var searchform = this.$refs.searchform;
            var panel_us_ad = searchform.elements.panel_us_ad.value;
            var casinoFilter = searchform.elements.casinoFilter.value;
            var panel_us_id = searchform.elements.panel_us_id.value;
            var fulllink;

            var postdata={};
            if(panel_us_ad=='user'){
                fulllink=admin_url+'user';
                if(panel_us_id !=''){
                    postdata.uid=panel_us_id
                }
                if(casinoFilter !=''){
                    postdata.cid=casinoFilter;
                }
            }
            else if(panel_us_ad=='manager'){
                fulllink=admin_url+'manager';
                if(panel_us_id !=''){
                    postdata._id=panel_us_id;
                }
            }
            console.log(fulllink);
            console.log(postdata);

            $.ajax({
                url: fulllink,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                dataType: 'JSON',
                data:postdata,
                type: 'POST',
                success: function(data){
                    console.log('sf');
                    console.log(data);
                    if(data.result){
                        newthis.usertable.ansver = data.result
                    }
                },

            })
        }
    }
}
</script>

<style lang="css">

</style>
