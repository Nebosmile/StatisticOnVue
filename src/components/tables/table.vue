<template lang="html">
    <div class='hidwrap tableFilter'>
        <div v-bind:class="{hide:hideis}" class='filterblock'>
            <div class="filterblockin">
                <form>
                    <ul>
                        <li v-for='items in options.initvalue'>
                            <label><input type="checkbox"
                                v-bind:checked="Checkstatus(items)"
                                v-on:change="newStatus(items)"
                            > {{items.name}}</label>
                        </li>
                    </ul>
                    <div><input v-on:click='savefilters' type="submit" value="save" class="btn-success btn-lg btn">
                         <input v-on:click='setdefault' type="button" value="default" class="btn-primary btn-lg btn">
                    </div>
                </form>

            </div>
        </div>
        <div class="rowchik">
			<p class="left">Detailed info</p>

			<div class="hideButton right"></div>
			<div v-on:click='seefilter' class="filterButton right"></div>
			<a id="consalExel" class="exel right"></a>
			<p class="right">
				Records<span class="showNow">1-1</span> of <span class="showpage">1</span>
			</p>

			<div v-if='options.tableoption.navigationlist' class="start navigateCenter">
				<input class="firstlist" type="button" value="|<">
				<input class="previoslist" type="button" value="<">
				<p>Page</p>
				<input type="text" class="pagenumber" name="pagenumber" value="1">
				<p>of <span class="allpages">1</span></p>
				<input class="nextlist" type="button" value=">">
				<input class="lastlist" type="button" value=">|">
			</div>

		</div>



        <div class="hidewrapitem">
            <table class="hideitem">
                <thead>
                    <tr>
                        <th v-if='Checkstatus(items)' v-for='items in options.initvalue'>{{items.name }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item, index) in options.ansver.info'>
                        <td v-if='Checkstatus(elem)' v-for='(elem,index2) in options.initvalue'>
                            {{item[elem.value] || index + 1}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>
export default {
    name:'tableStat',
    data(){
        return{
            hideis:true
        }
    },
    props:{
        options:{
            type: Object
        },
        tablename:{
            type: String
        }
    },
    methods:{
        Checkstatus:function(obj) {
            if(obj.status=='checked'){return true}
            else {return false}
        },
        newStatus:function(obj) {
            console.log(obj);
            if(obj.status=='checked'){obj.status='hide'}
            else {obj.status='checked'}
            console.log(obj);
        },
        savefilters:function () {
            this.hideis=true
        },
        seefilter:function () {
            this.hideis=false
        },
        setdefault:function () {
            this.options.initvalue.forEach(function (item) {
                if(item.default=='1'){
                    item.status='checked'
                }else{
                    item.status='hide'
                }
            })
        }

    }
}
</script>

<style lang="css">
/*.filterblock {
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}*/
.filterblockin {
    padding: 20px;
    position: fixed;
    z-index: 10;
    width: 50%;
    min-width: 200px;
    max-width: 1600px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 100px;
}
.filterblockin label {
    display: inline-block;
    float: left;
    padding: 5px;
    width: 30%;
    margin-right: 3%;
    min-width: 120px;
    max-width: 140px;
    text-align: left;
    margin: 0 auto;
    cursor: pointer;
}
.filterblockin div {
    clear: both;
    width: 100%;
    text-align: center;
}
</style>
