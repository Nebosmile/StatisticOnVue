<template lang="html">
    <div class='hidwrap tableFilter' ref = 'hidwrap' >
        <div v-bind:class="{hide:hideis}" class='filterblock'>
            <div class="filterblockin" >
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
        <div class="rowchik" >
			<p class="left">{{options.tableoption.name}}</p>

			<div class="hideButton right" v-on:click='check'></div>
			<div v-on:click='seefilter' class="filterButton right"></div>
			<a v-on:click='closeexcel' v-if='options.tableoption.exellink' id="consalExel" class="exel right"></a>
			<p v-if='options.tableoption.navigationlist' class="right">
				Records<span class="showNow"> {{options.tableoption.navigationlist.records}}</span> of <span class="showpage">{{options.tableoption.navigationlist.count}}</span>
			</p>

			<div v-if='options.tableoption.navigationlist' class="start navigateCenter">
				<input v-on:click ='firstlist' class="firstlist" type="button" value="|<">
				<input v-on:click ='prevlist' class="previoslist" type="button" value="<">
				<p>Page</p>
				<input type="text" class="pagenumber" name="pagenumber" v-model='this.options.tableoption.navigationlist.currenpage'>
				<p>of <span class="allpages">{{this.options.tableoption.navigationlist.allpage}}</span></p>
				<input v-on:click ='nextlist' class="nextlist" type="button" value=">">
				<input v-on:click ='lastlist' class="lastlist" type="button" value=">|">
			</div>

		</div>



        <div class="hidewrapitem">
            <table class="hideitem" >
                <thead>
                    <tr>
                        <th v-if='Checkstatus(items)' v-for='items in options.initvalue'>{{items.name }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item, index) in (options.ansver.info || options.ansver)'>
                        <td v-if='Checkstatus(elem)' v-for='(elem,index2) in options.initvalue'>
                            {{setvalue(item[elem.value], elem.value, index + 1)}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

            <div class="hide" id="wait_exel" ref='wait_exel'>
    			<p id="close_wait" v-on:click='closeexcel'>
    				X
    			</p>
    			<p>
    				It may take time to generate the file. The download will start automatically in a new window.
    			</p>
    			<div id="exelok" v-on:click='getexcel'>XLS</div>
    			<div id="exel_csvok" v-on:click='getexcel("=csv")'>CSV</div>
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
        }
    },
    methods:{
        getexcel(value){
            var excellink=this.options.tableoption.exellink.link+ "&excel"
            if (value){
                excellink=this.options.tableoption.exellink.link+ "&excel"+value
            }
            console.log(this.options.tableoption.exellink.link);
            var newthis = this;
            $.ajax({
                url:statistic_url,
                headers:{"Content-Type": "application/x-www-form-urlencoded"},
                xhrFields: {
                      withCredentials: true
                  },
                type:'POST',

                data:{'url':excellink},
                success:function (result) {


                    window.open('data:application/octet-stream,' + encodeURIComponent(result));

                }
            })
        },
        closeexcel(){
            var elem =this.$refs.wait_exel
            elem.classList.toggle('hide');
        },
        check(){
            var elem =this.$refs.hidwrap
            var hideButton = elem.getElementsByClassName('hideButton')[0];
            var hideitem = elem.getElementsByClassName('hideitem')[0];
            var height = hideitem.offsetHeight;
            if (!hideButton.classList.contains('see')) {
                hideitem.style.marginTop = -height + "px";
                hideButton.classList.add("see");
                setTimeout(function() {
                    hideitem.classList.add('hide');
                }, 500)
            } else if (hideButton.classList.contains('see')) {
                hideitem.classList.remove('hide');
                setTimeout(function() {
                    hideitem.style.marginTop = 0 + "px";
                }, 20)
                hideButton.classList.remove("see");



            }
            console.log(height);
        },
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
        savefilters:function (e) {
            e.preventDefault();
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
        },
        setvalue(obj,name, index){
            if(name =='number'){
                if(this.options.tableoption.navigationlist){
                    return index + this.options.tableoption.navigationlist.step*(this.options.tableoption.navigationlist.currenpage-1);
                }else{
                    return index;
                }

            }
            else {
                return String(obj)
            }
        },
        firstlist(){
            this.options.tableoption.navigationlist.currenpage =1;
            this.$emit('get')
        },
        lastlist(){
            this.options.tableoption.navigationlist.currenpage =this.options.tableoption.navigationlist.allpage;
            this.$emit('get')
        },
        prevlist(){
            if(this.options.tableoption.navigationlist.currenpage ==1){return}
            else{
                this.options.tableoption.navigationlist.currenpage= Number(this.options.tableoption.navigationlist.currenpage) -1
                this.$emit('get')
            }
        },
        nextlist(){
            if(this.options.tableoption.navigationlist.currenpage ==this.options.tableoption.navigationlist.allpage){return}
            else{
                this.options.tableoption.navigationlist.currenpage= Number(this.options.tableoption.navigationlist.currenpage) +1
                this.$emit('get')
            }
        },

    }
}
</script>

<style lang="scss">
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

#wait_exel {
    text-align: center;
    background-color: #fff;
    width: 300px;
    height: inherit;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    padding: 15px;
    color: #000;
    border: 1px solid #8c7575;
    z-index: 3;

    #close_wait {
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        line-height: 1;
        padding: 5px;
        cursor: pointer;
    }
    p {
        text-align: left;
        margin-bottom: 20px;
    }
    & > div{
    padding: 5px 20px;
    background-color: #ffcc00;
    display: inline-block;
    cursor: pointer;
    margin: 0 10px;
    }
}

</style>
