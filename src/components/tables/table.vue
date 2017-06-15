<template lang="html">
    <div class='hidwrap tableFilter'>
        <div class='filterblock hide'>
            <div class="filterblockin">
                <form>
                    <label>Number
                        <input type="checkbox" name="" value="">
                    </label>
                </form>

            </div>
        </div>
        <div class="rowchik">
			<p class="left">{{tablename}}</p>
			<div class="hideButton right"></div>
			<div class="filterButton right"></div>
		</div>



        <div class="hidewrapitem">
            <table class="hideitem">
                <thead>
                    <tr>
                        <th v-if='options.initvalue' v-for='items in options.initvalue'>{{items.name }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item, index) in options.ansver.info'>
                        <td v-for='(elem,index2) in options.initvalue'>
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
    props:{
        options:{
            type: Object
        },
        tablename:{
            type: String
        }
    },
}
</script>

<style lang="css">
</style>
