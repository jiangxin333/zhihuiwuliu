<template>
	<!-- tabBar车辆管理 -->
	<div class="vehicle">
		<div class="top">
			<h3>车辆管理</h3>
		</div>
		<div class="my-vehicle">
			<img src="../assets/img/vehicle/my_vehicle.png" alt="">
			<span>我的车辆</span>
		</div>
		<div class="transport">
			<span>运输中的车辆</span>
			<div class="box">
				<!-- 始发地 -->
				<div class="box-1">
					<p>
						<span>始发地</span>
						<span style="color: #7E8C8D;">→</span>
						<span>目的地</span>
						<span>运费</span>
					</p>
					<span style="font-size: 14Px;color: #999999;">15:00 装货</span>
				</div>
				<!-- 货物名称 -->
				<div class="box-2" style="color: #666666;">
					<span>货物名称&nbsp;&nbsp;</span>
					<span>|&nbsp;&nbsp;货物重量/体积</span>
				</div>
				<div class="box-3">
					<div class="box-3-1">
						<img src="../assets/img/vehicle/my_vehicle.png" alt="">
						<span style="font-size: 14px;">司机车牌号</span>
						<span style="color: #999999;">车长 | 车型</span>
					</div>
					<span style="color: #F9A825;">运单跟踪</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		comments: {

		},
		activated() {

		}
	}
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		height: 90px;
		background-image: linear-gradient(160deg, #FFCD7D 20%, #FFB43B 80%);
		border-bottom-left-radius: 20px 7px;
		border-bottom-right-radius: 20px 7px;

		h3 {
			padding-top: 15px;
			font-size: 16Px;
			text-align: center;
			color: #fff;
		}
	}

	.my-vehicle {
		position: relative;
		width: 345px;
		height: 80px;
		top: -40px;
		left: 15px;
		background: url(../assets/img/vehicle/bgimg.png) no-repeat center center;
		background-size: cover;
		display: flex;
		align-items: center;
		border: 1px dashed #666;
		padding-left: 21px;
		box-sizing: border-box;

		img {
			width: 50px;
		}

		span {
			margin-left: 16px;
			font-size: 14Px;
		}
	}

	.transport {
		width: 345px;
		margin: 0 auto;

		&>span {
			font-size: 15Px;
			color: #303030;
		}

		.box {
			background-color: #ffffff;
			margin-top: 15px;
			padding: 16px 15px 15px 15px;
			border-radius: 5px;

			.box-1 {
				display: flex;
				justify-content: space-between;

				p {
					span {
						margin-right: 10px;
						font-size: 15Px;
						color: #303030;
						font-weight: 550;

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
				margin-top: 15px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 13Px;

				.box-3-1 {
					* {
						margin-right: 11px;
					}

					img {
						width: 30px;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>
