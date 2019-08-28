<template>
	<!-- 司机资料路由页面 -->
	<div class="driverInfo">
		<van-nav-bar
		  title="司机资料"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>
