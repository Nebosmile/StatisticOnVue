<template lang="html">
    <div>
        <div class='rowchik'>
            <p class="text_left">Game managment</p>
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
                            <input name="gamename" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Title
                        <div class="inpContainer">
                            <input name="title" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Promo link
                        <div class="inpContainer">
                            <input name="promolink" type="text" class="form-control">
                        </div>
                    </label>
                    <label>Provider
                        <div class="inpContainer">
                            <!--захардкоджено  -->
                            <input name="provider" value='592fcf7fbfa3032bc8eb7ed0' disabled type="text" class="form-control">
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

var tamplate_link = 'game'

export default {
    name:'gamemenagment',
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
                    {value: 'title', name:'Name',status:'checked',default:'1'},
                    {value:'_id',name:'Global id',status:'checked',default:'1',clickevent:{
                            callevent:'editgame',
                            param:'_id'
                        }
                    },
                    {value: 'promoLink', name:'promoLink',status:'checked',default:'1'},
                    {value:'provider',name:' Provider',status:'checked',default:'1'},
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
            var name =editform.elements.gamename;
            var promoLink =editform.elements.promolink;
            var provider =editform.elements.provider;
            var title =editform.elements.title;


            if(obj.name)name.value=obj.name;
            if(obj.promoLink)promoLink.value =obj.promoLink;
            if(obj.provider)provider.value =obj.provider;
            if(obj.title)title.value =obj.title;
        },
        registration_or_edit(e){
            e.preventDefault();
            console.log('in get');

            var newthis = this;
            var editform = this.$refs.editform
            var name =editform.elements.gamename.value;
            var promoLink =editform.elements.promolink.value;
            var provider =editform.elements.provider.value;
            var title =editform.elements.title.value;

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
                data: {'name':name,'promoLink':promoLink,'provider':provider, 'title':title},

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
        userevent.$on('editgame', (elem)=> {
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
