<template>
	<!-- tabBar货源中心 -->
	<div>
		货源中心
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		activated() {
			this.$store.commit("tabBarNum",1);
		}
	}
</script>

<style>
	
</style>
