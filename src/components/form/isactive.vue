<template lang="html">
    <label>Sessions
		<div class="inpContainer">
			<div class="lineblock">
				<input type="checkbox" v-model='options.status' name="opensession" value="1">Active
			</div>
			<div class="lineblock">
				<input type="checkbox" v-model='options.status' name="clossession" value="0">Closed
			</div>
		</div>
        <div>
            {{options.status}}
        </div>
	</label>
</template>

<script>
export default {
    props:{
        options:{
            type: Object
        }
    },
    name:'isactive'
}
</script>

<style lang="css">
</style>
