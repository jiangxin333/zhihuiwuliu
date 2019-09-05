<template>
	<div class="home">
		<div class="header">
			<van-nav-bar title="当前货源" :fixed="true" :border="false">
			  <van-icon name="chat-o" slot="right" />
			</van-nav-bar>
			<van-swipe :loop="true" :autoplay="2000">
			  <van-swipe-item>
				  <img src="@/assets/img/home/swiper.png" alt="">
			  </van-swipe-item>
			  <van-swipe-item>
				  <img src="@/assets/img/home/swiper.png" alt="">
			  </van-swipe-item>
			  <van-swipe-item>
				  <img src="@/assets/img/home/swiper.png" alt="">
			  </van-swipe-item>
			  <van-swipe-item>
				  <img src="@/assets/img/home/swiper.png" alt="">
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="order1">
			<van-row type="flex" justify="center" gutter="20">
			  <van-col span="8">
				  <router-link to="/the_waybill" tag="div">
					  <img src="@/assets/img/home/order.png" alt="">
					  <p>当前订单</p>
				  </router-link>
			  </van-col>
			  <van-col span="8">
				  <router-link to="/supply_hy" tag="div">
					  <img src="@/assets/img/home/goods.png" alt="">
					  <p>当前货源</p>
				  </router-link>
				  
			  </van-col>
			  <van-col span="8">
				  <router-link to="/vehicle" tag="div">
					  <img src="@/assets/img/home/vehicle.png" alt="">
					  <p>车辆管理</p>
				  </router-link>
			  </van-col>
			</van-row>
		</div>
		<div class="my-order">
			<p style="margin: 15px 0;">我的运单</p>
			<Order class="order-box"></Order>
			<Order class="order-box"></Order>
		</div>
	</div>
</template>

<script>
	import Order from "@/components/order/order.vue"
	export default {
		name: 'home',
		components: {
			Order
		},
		data() {
			return {
				msg: 'home'
			}
		},
		activated() {}
	}
</script>

<style lang="scss" scoped>
.van-nav-bar {
	background-color: rgba(0,0,0,0);
}
.van-nav-bar__title {
	color: #fff;
}
.header {
	background: url(../assets/img/home/homebg.png) no-repeat center center;
	background-size: cover;
	.van-icon {
		color: #fff;
	}
	img {
		width: 100%;
	}
}
// 当前订单 货源 车辆管理
.order1 {
	text-align: center;
	padding: 15px;
	background-color: #ffffff;
	.van-row {
		.van-col {
			img {
				width: 45Px;
			}
			p {
				margin-top: 5px;
				font-size: 12Px;
			}
		}
	}
}
.my-order {
	padding: 0 15px;
	.order-box {
		background-color: #ffffff;
		border-radius: 6Px;
		margin-bottom: 15px;
	}
}
</style>
