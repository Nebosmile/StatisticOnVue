<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">Casino managment</p>
        </div>
        <div class='admintableform'  v-bind:class='{hide:(activeform!="casinotable" )}'>
            <div class="admin_buttons">

                <form class="text_left">
                    <div>
                        <input v-on:click="add_position" type="button" class="btn btn-lg btn-primary" value="Add">
                        <input v-on:click='getpositionlist'  type="button" name="panel_us_searh" class="btn btn-lg btn-success" value="Search">
                    </div>


                    <div>
                        <label>search by id
                            <div class="inpContainer">
                                <input ref='id_position' type="text" name="id_position" id="id_position" value='' class="form-control">
                            </div>
                        </label>
                    </div>
                </form>
            </div>
            <tableStat v-if='casinotablepanel.ansver' v-bind:options ='casinotablepanel'></tableStat>
        </div>



        <div v-bind:class='{hide:(activeform!="casino_addform" && activeform!="casino_editform")}'>
            <form class="editform" name="editform" ref='editform' >
                <input v-on:click='activeform="casinotable"' id="" type="button" class="btn btn-lg btn-primary back_button left" value="Back">
                <input
                v-if=' (activeform == "casino_editform")'
                v-on:click ='remove_position'
                  id="" type="button" class="btn btn-lg  btn-danger right" value="Remove">
                <div class="inputblock">
                    <label>Name
                        <div class="inpContainer">
                            <input name="casinoname" type="text" class="form-control">
                        </div>
                    </label>
                    <label>callbackUrl
                        <div class="inpContainer">
                            <input name="callbackurl" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Currency
                        <div class="inpContainer">
                            <input name="currency" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Secret
                        <div class="inpContainer">
                            <input name="secret" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Secret need
                        <div class="inpContainer">
                            <div class="lineblock">
                                <input type="radio" name="secretneed" value="true">yes
                            </div>
                            <div class="lineblock">
                                <input type="radio" name="secretneed" value="false">no
                            </div>
                        </div>
                    </label>

                    <div class="buttonBlock">
                        <input v-on:click='registration_or_edit' id="registration" type="button" name="Sumbit" class="btn btn-lg btn-success" value="Sumbit">
                        <input id="" type="reset" name='reset' class="btn btn-lg btn-danger" value="Reset">
                    </div>
                </div>
            </form>
        </div>


    </div>
</template>

<script>
import tableStat from '@/components/tables/table'

var tamplate_link = 'casino'

export default {
    name:'casinomenagment',
    components:{
        tableStat,
    },
    data(){
        return{


            activeform:'casinotable',
            edit_id:'',

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
                    {value:'baseCurrency',name:' Base currency',status:'checked',default:'1'},
                    {value:'secret',name:' Secret',status:'checked',default:'1'},
                    {value:'secretNeed',name:'Secret Need',status:'checked',default:'1'},
                    {value:'createdAt',name:' Creation date',status:'checked',default:'1'},
                    {value:'updatedAt',name:'Last action',status:'checked',default:'1'},
                ]
            },
        }
    },
    methods:{
        add_position(){
            var editform = this.$refs.editform;
            editform.elements.reset.click();
            this.activeform='casino_addform';
        },
        getpositionlist(obj){
            var newthis = this;
            var id_position = this.$refs.id_position.value;
            // console.log(id_position);
            var fulllink = admin_url +tamplate_link;
            var postdata={};
            if(id_position != ''){
                postdata._id = id_position;
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
                    newthis.casinotablepanel.ansver = data.result;
                },

            })
        },
        getedit_position(newid){
            var newthis =this;
            var postdata={};
            postdata._id=newid
            var fulllink=admin_url+tamplate_link;
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
                    newthis.activeform="casino_editform";
                    newthis.edit_id=newid;;
                    newthis.setformvalue(data.result[0])
                },

            })
        },
        setformvalue(obj){
            console.log(obj.email);
            var newthis = this;
            var editform = this.$refs.editform
            var casinoname =editform.elements.casinoname;
            var callbackurl =editform.elements.callbackurl;
            var currency =editform.elements.currency;
            var secret =editform.elements.secret;
            var secretneed =editform.elements.secretneed;

            if(obj.name)casinoname.value=obj.name;
            if(obj.callbackUrl)callbackurl.value =obj.callbackUrl;
            if(obj.baseCurrency)currency.value =obj.baseCurrency;
            if(obj.secret)secret.value =obj.secret;
            if(obj.secretNeed !='', obj.secretNeed !=undefined){
                secretneed.value =obj.secretNeed;
            }

        },
        registration_or_edit(e){
            e.preventDefault();
            console.log('in get');

            var newthis = this;
            var editform = this.$refs.editform
            var casinoname =editform.elements.casinoname.value;
            var callbackurl =editform.elements.callbackurl.value;
            var currency =editform.elements.currency.value;
            var secret =editform.elements.secret.value;
            var secretneed =editform.elements.secretneed.value;
            var edit_or_addURL;
            if(this.activeform=='casino_editform'){
                var id =this.edit_id;
                edit_or_addURL=tamplate_link+'/set/'+id;
            }else if(this.activeform=='casino_addform'){
                edit_or_addURL=tamplate_link+'/add'
            }

            console.log({'name':casinoname,'callbackUrl':callbackurl,'secret':secret, 'secretNeed':secretneed,'baseCurrency':currency});

            $.ajax({
                url: admin_url +edit_or_addURL,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                type: 'POST',
                data: {'name':casinoname,'callbackUrl':callbackurl,'secret':secret, 'secretNeed':secretneed,'baseCurrency':currency},

                success:function (data) {
                    console.log(data);
                    if(data.result !=undefined){
                        if(data.result.name !=undefined && newthis.activeform=='casino_addform'){
                            alert("casino " + data.result.name + " is registered")
                            newthis.activeform='casinotable';
                        }else if(data.result.name !=undefined && newthis.activeform=='casino_editform'){
                            alert('Data updated');
                            newthis.activeform='casinotable';
                        }

                    }else{
                        alert(data);
                    }
                }

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

                },

            })
        }
    },

    mounted(){
        userevent.$on('editcasino', (elem)=> {
            console.log(elem);
            console.log('catch casinoedit');
            this.getedit_position(elem.element)
        })
    },
    destroyed(){
        userevent.$off();
    }
}
</script>

<style lang="css">
</style>
