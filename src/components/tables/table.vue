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



        <div class="hidewrapitem">
            <table class="hideitem">
                <thead>
                    <!-- <template v-if='ansver.info'>
                        <tr>
                            <th v-if='Checkstatus(items)' v-for='items in initvalue'>{{items.name }}</th>
                        </tr>
                    </template> -->
                </thead>
                <tbody>
                    <!-- <template v-if='ansver.info' v-for='items in ansver.info'>
                        <tr>
                            <td v-if='Checkstatus(element)' v-for='(element,index) in initvalue' >{{items[index]}}</td>
                        </tr>
                    </template> -->
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>
export default {
    name:'tableStat'
}
</script>

<style lang="css">
</style>
