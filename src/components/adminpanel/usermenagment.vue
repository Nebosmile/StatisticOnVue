<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">User managment</p>
        </div>
        <div class='usertabledorm' v-if='(activeform=="usertable")'>
            <div class="admin_buttons">

                <form ref='searchform' class="text_left">
                    <div>
                        <input id="panel_new_user" v-on:click="(activeform='useraddform')" type="button" class="btn btn-lg btn-primary" value="Add">
                        <input id="panel_us_searh" type="button" name="panel_us_searh" class="btn btn-lg btn-success" value="Search"
                            v-on:click='searchuser'
                        >
                    </div>


                    <div>

                            <label>Users type
                                <div class="inpContainer">
                                    <select v-model='activeusertype' id="panel_us_ad" name="panel_us_ad" class="form-control">
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
            <tableStat v-if='(usertable.ansver && activeusertype == "user")' v-bind:options ='usertable'></tableStat>
            <tableStat v-on:editmanager='geteditmanager' v-if='(menagertable.ansver && activeusertype == "manager")' v-bind:options ='menagertable'></tableStat>
        </div>

        <div class='useraddform' v-if='(activeform=="useraddform")'>
            <form id="editform" name="editform" ref='editform' >
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
                        <input v-on:click='registration' id="registration" type="button" name="Sumbit" class="btn btn-lg btn-success" value="Sumbit">
                        <input id="" type="reset" class="btn btn-lg btn-primary" value="Reset">
                    </div>
                </div>
            </form>
        </div>



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
            activeusertype:'user',

            activeform:'usertable',

            usertable:{
                tableoption:{
                    name:'Detailed info',
                    // exellink:{
                    //     link:''
                    // },
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
            menagertable:{
                tableoption:{
                    name:'Detailed info',
                    // exellink:{
                    //     link:''
                    // },
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
                    {value: 'displayName', name:'Name',status:'checked',default:'1'},
                    {value:'_id',name:'Global id',status:'checked',default:'1',clickevent:{
                            callevent:'editmanager',
                            param:'_id'
                        }
                    },
                    {value:'createdAt',name:' Creation date',status:'checked',default:'1'},
                    {value:'updatedAt',name:'Last action',status:'checked',default:'1'},
                    {value:'email',name:'Email',status:'checked',default:'1'},
                ]
            },
        }
    },
    methods:{
        geteditmanager(obj){
            console.log(obj);
        },
        registration(e){
            e.preventDefault();
            var newthis = this;
            var editform = this.$refs.editform
            var login =editform.elements.login.value;
            var password =editform.elements.password.value;
            var email =editform.elements.email.value;
            var displayName =editform.elements.displayName.value;
            var gender =editform.elements.gender.value;
            var userRole =editform.elements.userRole .value;

            // console.log({'login':login,'password':password,'email':email, 'gender':gender,'userRole':userRole,'displayName':displayName});

            $.ajax({
                url: admin_url +'manager/add',
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                type: 'POST',
                data: {'login':login,'password':password,'email':email, 'gender':gender,'userRole':userRole,'displayName':displayName},

                success:function (data) {
                    console.log(data);
                    if(data.result !=undefined){
                        if(data.result.displayName !=undefined){
                            alert("user " + data.result.displayName + " is registered")
                            newthis.activeform='usertable';
                        }

                    }else{
                        alert(data);
                    }
                }

            })
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
                    console.log(data);

                    if(data.result && newthis.activeusertype=='user'){
                        newthis.usertable.ansver = data.result
                    }else if(data.result && newthis.activeusertype=='manager'){
                        newthis.menagertable.ansver = data.result
                    }
                },

            })
        }
    }
}
</script>

<style lang="css">

</style>
