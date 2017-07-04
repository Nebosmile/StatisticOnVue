<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">Provaiders managment</p>
        </div>
        <div class='admintableform'  v-bind:class='{hide:(activeform!="gametable" )}'>
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
            <tableStat v-if='gametablepanel.ansver' v-bind:options ='gametablepanel'></tableStat>
        </div>



        <div v-bind:class='{hide:(activeform!="game_addform" && activeform!="game_editform")}'>
            <form class="editform" name="editform" ref='editform' >
                <input v-on:click='activeform="gametable"' id="" type="button" class="btn btn-lg btn-primary back_button left" value="Back">
                <input
                v-if=' (activeform == "game_editform")'
                v-on:click ='remove_position'
                  id="" type="button" class="btn btn-lg  btn-danger right" value="Remove">
                <div class="inputblock">
                    <label>Name
                        <div class="inpContainer">
                            <input name="name" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Origin
                        <div class="inpContainer">
                            <input name="origin" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Launch Url
                        <div class="inpContainer">
                            <input name="gamelaunchurl" type="text" class="form-control">
                        </div>
                    </label>
                    <label>promoUrl
                        <div class="inpContainer">
                            <input name="promourl" type="text" class="form-control">
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

var tamplate_link = 'provider'

export default {
    name:'providers',
    components:{
        tableStat,
    },
    data(){
        return{


            activeform:'gametable',
            edit_id:'',

            gametablepanel:{
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
                    {value: 'name', name:'Name',status:'checked',default:'1'},
                    {value:'_id',name:'Global id',status:'checked',default:'1',clickevent:{
                            callevent:'editprovider',
                            param:'_id'
                        }
                    },
                    {value: 'origin', name:'origin',status:'checked',default:'1'},
                    {value:'promoUrl',name:' Promo url',status:'checked',default:'1'},
                    {value:'gameLaunchUrl',name:' game Launch Url',status:'checked',default:'1'},
                ]
            },
        }
    },
    methods:{
        add_position(){
            var editform = this.$refs.editform;
            editform.elements.reset.click();
            this.activeform='game_addform';
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
                    newthis.gametablepanel.ansver = data.result;
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
                    newthis.activeform="game_editform";
                    newthis.edit_id=newid;;
                    newthis.setformvalue(data.result[0])
                },

            })
        },
        setformvalue(obj){
            var newthis = this;
            var editform = this.$refs.editform
            var name =editform.elements.name;
            var promoUrl =editform.elements.promourl;
            var origin =editform.elements.origin;
            var gameLaunchUrl =editform.elements.gamelaunchurl;


            if(obj.name)name.value=obj.name;
            if(obj.promoUrl)promoUrl.value =obj.promoUrl;
            if(obj.origin)origin.value =obj.origin;
            if(obj.gameLaunchUrl)gameLaunchUrl.value =obj.gamelaunchurl;
        },
        registration_or_edit(e){
            e.preventDefault();
            console.log('in get');

            var newthis = this;
            var editform = this.$refs.editform
            var name =editform.elements.name.value;
            var promoUrl =editform.elements.promourl.value;
            var origin =editform.elements.origin.value;
            var gameLaunchUrl =editform.elements.gamelaunchurl.value;

            var edit_or_addURL;
            if(this.activeform=='game_editform'){
                var id =this.edit_id;
                edit_or_addURL=tamplate_link+'/set/'+id;
            }else if(this.activeform=='game_addform'){
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
                data: {'name':name,'promoUrl':promoUrl,'origin':origin, 'gameLaunchUrl':gameLaunchUrl},

                success:function (data) {
                    console.log(data);
                    if(data.result !=undefined){
                        if(data.result.name !=undefined && newthis.activeform=='game_addform'){
                            alert("game " + data.result.name + " is registered")
                            newthis.activeform='gametable';
                        }else if(data.result.name !=undefined && newthis.activeform=='game_editform'){
                            alert('Data updated');
                            newthis.activeform='gametable';
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
        userevent.$on('editprovider', (elem)=> {
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
