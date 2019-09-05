<template>
	<!-- 当前订单组件 -->
	<div class="order-box">
		<div class="conmon-pading order-top">
			<router-link tag="span" to="/order_detail" style="color: #0000FF;">待装货</router-link>
			<div style="color: #BBBBBB;">
				<span>6-14&nbsp;</span>
				<span>16:48</span>
			</div>
		</div>
		<p class="border-botm"></p>
		
		<div class="conmon-pading order-center">
			<router-link to="/Order_detail" tag="p" class="p-1">
				<span>始发地</span>
				<span>→</span>
				<span>目的地</span>
				<span>运费</span>
			</router-link>
			<router-link to="/Order_detail" tag="p" class="p-2">
				<span>货物名称&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span>货物重量/体积</span>
			</router-link>
			<div class="p-3">
				<p>
					<span>一装几卸</span>
					<span>是否压回单</span>
					<span>支付方式</span>
				</p>
				<van-button v-if="orderDetail != '1'" icon="location-o" size="mini" round type="info" @click="loading">装货&nbsp;</van-button>
			</div>
		</div>
		<p class="border-botm"></p>
		<div class="conmon-pading order-footer">
			<p>
				<span>里程最短约&nbsp;</span>
				<span>5200KM</span>
			</p>
			<router-link to="map" tag="span">查看地图</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			orderDetail: {
				type: String,
				default: '0'
			}
		},
		data() {
			return {
				msg: '当前订单'
			}
		},
		methods: {
			loading() {
				this.$router.push({
					path: '/map',
					query:{
						id: 'home'
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.border-botm {
		border-bottom: 1px solid #F5F5F5;
	}
	.conmon-pading {
		padding: 0 15Px;
	}
	.order-top {
		display: flex;
		justify-content: space-between;
		padding: 10px 15Px;
	}
	.order-center {
		padding-top: 15px;
		padding-bottom: 15px;
		.p-1 {
			span {
				margin-right: 5px;
				color: #303030;
				font-size: 16Px;
				// font-weight: 600;
			}
			span:last-child {
				color: #FF5252;
				font-size: 14Px;
				font-weight: normal;
			}
			// display: flex;
			// justify-content: space-between;
		}
		.p-2 {
			color: #666666;
			margin: 12px 0;
			font-size: 14Px;
		}
		.p-3 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			p {
				span {
					padding: 1px 5px;
					background-color: #F5F5F5;
					color: #666666;
					margin-right: 5px;
				}
			}
		}
	}
	.order-footer {
		display: flex;
		justify-content: space-between;
		padding-top: 15px;
		padding-bottom: 15px;
		p {
			span:first-child {
				color: #666666;
			}
		}
		& > span {
			color: #F9A825;
		}
	}
</style>
