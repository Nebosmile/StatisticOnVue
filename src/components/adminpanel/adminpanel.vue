<template lang="html">
    <div id="adminpanel">
        <div class="panellist_wrap left admin_menu">
            <ul class="panellist">
                <li><router-link to='usermenagment'>User managment</router-link></li>
                <li><router-link to='casinomenagment'>Casino managment</router-link></li>
                <li><router-link to='gamemenagment'>Game managment</router-link></li>
                <li><router-link to='provaiders'>Provaiders</router-link></li>
            </ul>
        </div>
        <div class="panellist_wrap left admin_forms">
            <router-view></router-view>
        </div>
    </div>


</template>

<script>


export default {
    name:'adminpanel',

}
</script>

<style lang="scss">
#adminpanel {
    box-sizing: border-box;
    min-height:calc(100vh - 52px) ;
    background-color: #fff;
    position: relative;
    z-index: 3;
    color: #000;
    height: initial;
    overflow-y: auto;


    & > div {
        padding-top: 30px;
        height: initial;
        min-height:calc(100vh - 82px);
        background-color: #fff;


        table{
            min-width: 730px;
        }
    }
}
.panellist{
    li{
        text-align: left;
        &:hover{
            background-color: rgb(232, 230, 231)
        }


        a{  font-size: 16px;
            display: inline-block;
            padding: 3px;
            text-decoration: none;

        }
    }

}
.admin_menu{
    position: fixed;
}
.admin_forms {
    // width: 74%;
    border-left: 1px solid #000;
    padding-left: 4%;
    overflow-x: auto;
    position: absolute;
    left:250px;
    min-width: calc(100vw - 300px)
}

.admin_menu {
    width: 20%;
    min-width: 200px;
}
.admin_buttons{
        text-align: left;
        form{
            padding: 10px;
            & > div{
                padding-bottom: 10px;
            }
        }
        label{
            width: 300px;
        }
}
.admin_buttons > div, .admin_buttons > input {
    display: inline-block;
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 14px;
    line-height: 1.3333333;
    cursor: pointer;
}
</style>
