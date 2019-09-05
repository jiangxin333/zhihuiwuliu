<template>
	<!-- 运单详情 Order_detail -->
	<div class="order-detail">
		<van-nav-bar title="运单详情"  left-arrow fixed @click-left="onClickLeft" />
		<div class="order-detail-box">
			<Order order-detail="1" class="order-detail-order"></Order>
			<p class="person">发货人</p>
			<div class="person-1">
				<img src="@/assets/img/vehicle/my_vehicle.png" alt="">
				<span>发货人</span>
				<input type="text" placeholder="发货人电话" v-model="value">
			</div>
			<p class="person">收货人</p>
			<div class="person-1">
				<img src="@/assets/img/vehicle/my_vehicle.png" alt="">
				<span>收货人</span>
				<input type="text" placeholder="收货人电话" v-model="value">
			</div>
			<p class="person">司机信息</p>
			<div class="person-footer">
				<div class="person-1 person-2">
					<img src="@/assets/img/vehicle/my_vehicle.png" alt="">
					<span>司机名字</span>
					<span class="person-1-teshu">货主名字</span>
				</div>
				<div class="person-3">
					<p>
						<span>司机车牌号&nbsp;</span>
						<span>|&nbsp;车型</span>
					</p>
					<p>
						<span>交易&nbsp;&nbsp;609&nbsp;&nbsp;</span>
						<span>发货&nbsp;&nbsp;950</span>
					</p>
				</div>
			</div>
		</div>
		<div class="oreder-state">
			订单已完成
		</div>
	</div>
</template>

<script>
	import Order from '@/components/order/order.vue'
	export default {
		components: {
			Order
		},
		data() {
			return {
				value: ''
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
	.order-detail-box {
		padding: 15px;
		margin: 46Px 0;
		.order-detail-order {
			background-color: #ffffff;
			border-radius: 6px;
		}
		.person {
			margin: 15px 0;
			color: #303030;
			font-size: 14Px;
		}
		.person-1 {
			background-color: #ffffff;
			padding: 10px;
			display: flex;
			align-items: center;
			* {
				margin-right: 10px;
			}
			span {
				font-size: 14Px;
			}
			img {
				width: 30Px;
				height: 30Px;
				border-radius: 50%;
			}
			.person-1-teshu {
				padding: 2px 5px;
				background: #fef6e9;
				color: #fab34b;
			}
		}
		.person-footer {
			background-color: #ffffff;
			padding: 10px;
			.person-2 {
				border-bottom: 1px solid #eeeeee;
				padding: 8px 0;
			}
			.person-3 {
				display: flex;
				justify-content: space-between;
				padding: 8px 0;
				color: #9f9f9f;
			}
		}
	}
	.oreder-state {
		position: fixed;
		width: 100%;
		height: 35Px;
		line-height: 35Px;
		text-align: center;
		bottom: 0;
		left: 0;
		background-color: #f9a825;
		color: #ffffff;
		font-size: 16Px;
	}
</style>
