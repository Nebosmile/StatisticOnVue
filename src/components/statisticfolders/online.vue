<template lang="html">
  <div>
      it is online stat
      <formStat></formStat>
  </div>
</template>

<script>
import formStat from '@/components/form/form'

console.log(formStat);
export default {
    name:'online',
    components:{
        formStat
    }
}
</script>

<style lang="css">
</style>
