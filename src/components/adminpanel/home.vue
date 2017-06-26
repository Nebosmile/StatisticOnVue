<template lang="html">
<div>
    <h3>Welcome to admin panel "{{usname()}}"</h3>
</div>
</template>

<script>
export default {
    name:'home',
    methods:{
        usname(){
            return userdata.$data.displayName;
        }
    }
}
</script>

<style lang="css">
</style>
