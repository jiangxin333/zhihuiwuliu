<template>
	<!-- 添加车辆 -->
	<div class="addVehicle">
		<van-nav-bar title="司机资料" :border="false" left-arrow fixed @click-left="onClickLeft" />
		<div class="content-box">
			123
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '增加车辆页面'
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-box {
		margin-top: 46Px;
		background-color: #ffffff;
	}
</style>
