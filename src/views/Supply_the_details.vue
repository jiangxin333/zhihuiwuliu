<template>
	<!-- Supply_the_details  货源详情 -->
	<div class="supply-the-details">
		<van-nav-bar title="货源详情" :fixed="true" left-arrow @click-left="onClickLeft" />
		<div class="supply-the-details-box">
			<div class="supply-the-details-1">
				<Order orderDetail="1"  class="supply-the-details-order"></Order>
				<p class="common">货物发布者</p>
				<div class="supply-the-details-box0">
					<router-link to="/the_shipper_information" tag="div" class="box-3">
						<div class="box-3-1">
							<img src="@/assets/img/tabBar/a_tabbar4.png" alt="">
							<span style="color: #303030;">货主名字</span>
							<span>货主评分</span>
						</div>
						<div class="box-3-2">
							<img src="@/assets/img/supply/phone.png" alt="">
						</div>
					</router-link>
					<div class="box-33">
						<p>货主公司名称</p>
						<p>
							<span>交易&nbsp;609&nbsp;&nbsp;</span>
							<span>发货&nbsp;950</span>
						</p>
					</div>
				</div>
				<p class="common">推荐货源</p>
				<div class="supply-the-details-box1">
					<div class="box-1">
						<p>
							<span>始发地</span>
							<span style="color: #7E8C8D;">→</span>
							<span>目的地</span>
							<span>运费</span>
						</p>
						<span style="font-size: 14Px;color: #999999;">15:00 装货</span>
					</div>
					<div class="box-2" style="color: #666666;">
						<span>货物名称&nbsp;&nbsp;</span>
						<span>|&nbsp;&nbsp;货物重量/体积</span>
					</div>
					<div class="box-3">
						<div class="box-3-1">
							<img src="@/assets/img/tabBar/a_tabbar4.png" alt="">
							<span style="color: #303030;">货主名字</span>
							<span>货主评分</span>
						</div>
						<div class="box-3-2">
							<img src="@/assets/img/supply/phone.png" alt="">
						</div>
					</div>
				</div>
				<div class="supply-the-details-box1">
					<div class="box-1">
						<p>
							<span>始发地</span>
							<span style="color: #7E8C8D;">→</span>
							<span>目的地</span>
							<span>运费</span>
						</p>
						<span style="font-size: 14Px;color: #999999;">15:00 装货</span>
					</div>
					<div class="box-2" style="color: #666666;">
						<span>货物名称&nbsp;&nbsp;</span>
						<span>|&nbsp;&nbsp;货物重量/体积</span>
					</div>
					<div class="box-3">
						<div class="box-3-1">
							<img src="@/assets/img/tabBar/a_tabbar4.png" alt="">
							<span style="color: #303030;">货主名字</span>
							<span>货主评分</span>
						</div>
						<div class="box-3-2">
							<img src="@/assets/img/supply/phone.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-box">
			<div class="box-1">
				<van-checkbox v-model="checked" icon-size="16" checked-color="#ff9885">点击枪弹既视为同意《xx协议》</van-checkbox>
			</div>
			<div class="box-2">立 即 抢 单</div>
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
				checked: true
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
	.supply-the-details-box {
		margin-top: 61Px;
		padding: 0 15px;
		.supply-the-details-1 {
			.supply-the-details-order {
				border-radius: 6px;
				background-color: #ffffff;
				margin-bottom: 10px;
			}
			.common {
				margin: 15px 0;
				font-size: 14Px;
				color: #303030;
			}
			.supply-the-details-box0 {
				background-color: #ffffff;
				padding: 10px;
				border-radius: 6px;
				.box-3 {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 14Px;
					padding-bottom: 10px;
					border-bottom: 1px solid #eeeeee;
					img {
						width: 30Px;
						border-radius: 50%;
						vertical-align: middle;
					}
					.box-3-1 {
						* {
							margin-right: 10px;
						}
						img {
							width: 30Px;
							height: 30Px;
							border-radius: 50%;
						}
						span:last-child {
							display: inline-block;
							background-color: #FEF6E9;
							padding: 4px 5px;
							color: #F9A825;
						}
					}
					.box-3-2 {
						span {
							display: inline-block;
							width: 30Px;
							height: 30Px;
							line-height: 30Px;
							text-align: center;
							border-radius: 50%;
							background-color: #FF9885;
							color: #ffffff;
						}
					}
				}
				.box-33 {
					display: flex;
					justify-content: space-between;
					padding-top: 10px;
					color: #666666;
					font-size: 12Px;
				}
			}
			.supply-the-details-box1 {
				background-color: #fff;
				padding: 10px;
				border-radius: 6px;
				margin-bottom: 15px;
				.box-1 {
					display: flex;
					justify-content: space-between;
				
					p {
						span {
							margin-right: 10px;
							font-size: 15Px;
							color: #303030;
							&:last-child {
								color: #FF5252;
								font-size: 14Px;
								font-weight: 400;
							}
						}
					}
				}
				.box-2 {
					padding: 14px 0;
					border-bottom: 1Px solid #EEEEEE;
					font-size: 14Px;
				}
				.box-3 {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 14Px;
					padding: 8px 0 4px 0;
					img {
						width: 30Px;
						border-radius: 50%;
						vertical-align: middle;
					}
					.box-3-1 {
						* {
							margin-right: 10px;
						}
						span:last-child {
							display: inline-block;
							background-color: #FEF6E9;
							padding: 4px 5px;
							color: #F9A825;
						}
					}
					.box-3-2 {
						span {
							display: inline-block;
							width: 30Px;
							height: 30Px;
							line-height: 30Px;
							text-align: center;
							border-radius: 50%;
							background-color: #FF9885;
							color: #ffffff;
						}
					}
				}
			}
		}
	}
	.footer-box {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		.box-1 {
			background-color: #fffaf9;
			display: flex;
			justify-content: center;
		}
		.box-2 {
			width: 100%;
			height: 36Px;
			line-height: 36Px;
			text-align: center;
			color: #ffffff;
			font-size: 14Px;
			background-color: #ff9885;
		}
	}
</style>
 