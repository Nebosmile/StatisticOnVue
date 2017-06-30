<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">Casino managment</p>
        </div>
        <div class='usertabledorm'>
            <div class="admin_buttons">

                <form class="text_left">
                    <div>
                        <input type="button" class="btn btn-lg btn-primary" value="Add">
                        <input v-on:click='getcasinolist'  type="button" name="panel_us_searh" class="btn btn-lg btn-success" value="Search">
                    </div>


                    <div>
                        <label>search by id
                            <div class="inpContainer">
                                <input ref='panel_casino_id' type="text" name="panel_casino_id" id="panel_casino_id" value='' class="form-control">
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        </div>

        <tableStat v-if='casinotablepanel.ansver' v-bind:options ='casinotablepanel'></tableStat>

        <div class='hide'>
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
                                <option value="admin">admin</option>
                            </select>
                        </div>
                    </label>
                    <div class="buttonBlock">
                        <input id="registration" type="button" name="Sumbit" class="btn btn-lg btn-success" value="Sumbit">
                        <input id="" type="reset" class="btn btn-lg btn-primary" value="Reset">
                    </div>
                </div>
            </form>
        </div>


    </div>
</template>

<script>
import tableStat from '@/components/tables/table'

export default {
    name:'casinomenagment',
    components:{
        tableStat,
    },
    data(){
        return{
            casinotablepanel:{
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
                    {value: 'callbackUrl', name:'callbackUrl',status:'checked',default:'1'},
                    {value: 'name', name:'Name',status:'checked',default:'1'},
                    {value:'_id',name:'Global id',status:'checked',default:'1',clickevent:{
                            callevent:'editcasino',
                            param:'_id'
                        }
                    },
                    {value:'createdAt',name:' Creation date',status:'checked',default:'1'},
                    {value:'updatedAt',name:'Last action',status:'checked',default:'1'},
                ]
            },
        }
    },
    methods:{
        getcasinolist(){
            var newthis = this;
            var panel_casino_id = this.$refs.panel_casino_id.value;
            console.log(panel_casino_id);
            var fulllink = admin_url +'casino';
            var postdata={};
            $.ajax({
                url: fulllink,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                dataType: 'JSON',
                // data:postdata,
                type: 'POST',
                success: function(data){
                    console.log(data);
                    newthis.casinotablepanel.ansver = data.result;
                },

            })
        }
    },
}
</script>

<style lang="css">
</style>
