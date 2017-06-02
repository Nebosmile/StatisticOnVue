<template lang="html">
  <div>
      it is global stat
      <formStat></formStat>
  </div>
</template>

<script>
import formStat from '@/components/form/form'

console.log(formStat);
export default {
    name:'global',
    components:{
        formStat
    }
}
</script>

<style lang="css">
</style>
