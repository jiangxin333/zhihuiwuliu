<template>
	<!-- 当前货源 Supply_hy -->
	<div class="Supply-hy">
		<van-nav-bar title="当前货源" :border="false" left-arrow fixed @click-left="onClickLeft" />
		<div class="Supply-hy-box">
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
			<supply-hy-module class="supply-hy-module"></supply-hy-module>
		</div>
	</div>
</template>

<script>
	import SupplyHyModule from '@/components/Supply_hy/SupplyHyModule.vue'
	export default {
		components: {
			SupplyHyModule
		},
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

<style lang="scss" scoped>
	.Supply-hy-box {
		margin-top: 46Px;
		padding: 1px 15px;
		.supply-hy-module {
			background-color: #ffffff;
			margin: 15px 0;
		}
	}
</style>
