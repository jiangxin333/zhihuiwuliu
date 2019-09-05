<template>
	<!-- 当前运单 The_waybill -->
	<div class="The-waybill">
		<van-nav-bar title="当前运单" :border="false" left-arrow fixed @click-left="onClickLeft" />
		<div class="The-waybill-box">
			<Order class="order"></Order>
			<Order class="order"></Order>
			<Order class="order"></Order>
			<Order class="order"></Order>
			<Order class="order"></Order>
		</div>
	</div>
</template>

<script>
	import Order from '@/components/order/order.vue'
	export default {
		components:{
			Order
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
	.The-waybill-box {
		margin-top: 46Px;
		padding: 1px 15px;
		.order {
			margin: 15px 0;
			background-color: #FFFFFF;
			border-radius: 6px;
		}
	}
</style>
