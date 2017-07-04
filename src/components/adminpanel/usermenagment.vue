<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">User managment</p>
        </div>
        <div class='usertabledorm' v-bind:class='{hide:(activeform!="usertable")}'>
            <div class="admin_buttons">

                <form ref='searchform' class="text_left">
                    <div>
                        <input id="panel_new_user" v-on:click="add_position" type="button" class="btn btn-lg btn-primary" value="Add">
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
                <tableStat v-if='(menagertable.ansver && activeusertype == "manager")' v-bind:options ='menagertable'></tableStat>


        </div>

        <div class='manager_addform' v-bind:class='{hide:(activeform!="manager_addform" && activeform!="manager_editform")}'>
            <form class="editform" name="editform" ref='editform' >
                <input  v-on:click='activeform="usertable"' id="" type="button" class="btn btn-lg btn-primary back_button left" value="Back">
                <!-- <input
                v-if=' (activeform == "manager_editform")'
                v-on:click ='remove_position'
                 id="" type="button" class="btn btn-lg  btn-danger right" value="Block/Unblock"> -->
                <div class="inputblock">
                    <label>Login
                        <div class="inpContainer">
                            <input name="login" type="text" class="form-control">
                        </div>
                    </label>
                    <label>password
                        <div class="inpContainer">
                            <input name="password" autocomplete="off" type="password" class="form-control">
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

                                <option value="59565d99643a9d0937841236">admin</option>
                            </select>
                        </div>
                    </label>
                    <label>Status
                        <div class="inpContainer">
                            <select name="deleted" class="form-control">
                                <option value="false">unblock</option>
                                <option value="true">block</option>
                            </select>
                        </div>
                    </label>
                    <div class="buttonBlock">

                        <input v-on:click='registration_or_edit' id="registration" type="button" name="Sumbit" class="btn btn-lg btn-success" value="Sumbit">
                        <input id="" type="reset" name='reset' class="btn btn-lg  btn-danger" value="Reset">
                    </div>
                </div>
            </form>
        </div>



    </div>

</template>

<script>
import singlecasinolist from '@/components/form/singlecasinolist'
import tableStat from '@/components/tables/table'
var tamplate_link = 'manager';

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
            edit_id:'',
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
                    {value:'deleted',name:'Blocked',status:'checked',default:'1'},
                ]
            },
        }
    },
    methods:{
        add_position(){
            var editform = this.$refs.editform;
            editform.elements.reset.click();
            this.activeform='manager_addform';
        },
        setformvalue(obj){
            console.log(obj.email);
            var newthis = this;
            var editform = this.$refs.editform
            var login =editform.elements.login;
            var password =editform.elements.password;
            var email =editform.elements.email;
            var displayName =editform.elements.displayName;
            var gender =editform.elements.gender;
            var userRole =editform.elements.userRole;

            login.value=obj.login;
            password.value ='';
            email.value =obj.email;
            displayName.value =obj.displayName;
            gender.value =obj.gender;
            userRole.value =obj.userRole;
        },
        geteditmanager(newid){
            var newthis =this;
            var searchform = this.$refs.searchform;
            var postdata= {};
            var panel_us_ad = searchform.elements.panel_us_ad.value;
            postdata._id=newid;
            var fulllink;
            if(panel_us_ad=='user'){
                fulllink=admin_url+'user';
            }
            else if(panel_us_ad=='manager'){
                fulllink=admin_url+'manager';
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
                    newthis.activeform="manager_editform";
                    newthis.edit_id=newid;
                    newthis.setformvalue(data.result[0])
                },

            })
        },
        registration_or_edit(e){
            e.preventDefault();
            var newthis = this;
            var editform = this.$refs.editform
            var login =editform.elements.login.value;
            var password =editform.elements.password.value;
            var email =editform.elements.email.value;
            var displayName =editform.elements.displayName.value;
            var gender =editform.elements.gender.value;
            var userRole =[];
            userRole.push(editform.elements.userRole.value);
            userRole.push('dfhgfjhj');
            console.log(userRole);
            var deleted =editform.elements.deleted.value;
            var edit_or_addURL;
            if(this.activeform=='manager_editform'){
                var id =this.edit_id;
                edit_or_addURL=tamplate_link+'/set/'+id;
            }else if(this.activeform=='manager_addform'){
                edit_or_addURL=tamplate_link+'/add'
            }

            // console.log({'login':login,'password':password,'email':email, 'gender':gender,'userRole':userRole,'displayName':displayName});

            $.ajax({
                url: admin_url +edit_or_addURL,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                type: 'POST',
                data: {'login':login,'password':password,'email':email, 'gender':gender,'userRole':userRole,'displayName':displayName,'deleted':deleted},

                success:function (data) {
                    console.log(data);
                    if(data.result !=undefined){
                        if(data.result.displayName !=undefined && newthis.activeform=='manager_addform'){
                            alert("user " + data.result.displayName + " is registered")
                            newthis.activeform='usertable';
                        }else if(data.result.displayName !=undefined && newthis.activeform=='manager_editform'){
                            alert('Data updated');
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
                    if(data.result =="not found"){
                        alert("not found");
                        return
                    }


                    if(data.result && newthis.activeusertype=='user'){
                        newthis.usertable.ansver = data.result
                    }else if(data.result && newthis.activeusertype=='manager'){
                        newthis.menagertable.ansver = data.result
                    }
                },

            })
        },
        remove_position(){
            var id =this.edit_id;
            var fulllink = admin_url+tamplate_link +'/remove/'+id
            $.ajax({
                url: fulllink,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                dataType: 'JSON',
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


    },
    mounted(){
        userevent.$on('editmanager', (elem)=> {
            console.log(elem);
            this.geteditmanager(elem.element)
        })
    },
    destroyed(){
        userevent.$off();
    }
}
</script>

<style lang="css">

</style>
