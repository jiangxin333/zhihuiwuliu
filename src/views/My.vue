<template>
	<div>
		我的
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		activated() {
			this.$store.commit('tabBarNum',3)
		}
	}
</script>

<style>
</style>
