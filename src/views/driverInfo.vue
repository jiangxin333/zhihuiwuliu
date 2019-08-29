<template>
	<!-- 司机资料路由页面 -->
	<div class="driverInfo">
		<van-nav-bar title="司机资料" left-arrow fixed @click-left="onClickLeft" />
		<div class="box">
			<div class="driver-name">
				<div>
					<img src="../assets/img/vehicle/my_vehicle.png" alt="">
					<span>司机名字</span>
					<span>司机评分</span>
				</div>
				<div>
					<span>司机车牌号</span>
					<span>车长 | 车型</span>
					<span>驾龄</span>
				</div>
			</div>
			<div class="evaluate conmon-top">
				<div>
					<span v-for="(item,i) in evaluateList" :key="i">{{item}}</span>
				</div>
				<div>
					<span>99%好评</span>
					<p>
						<span>交易&nbsp;609&nbsp;&nbsp;</span>
						<span>发货&nbsp;950</span>
					</p>
				</div>
			</div>
			<p class="conmon-top">常跑路线</p>
			<VehicleLine class="VehicleLine conmon-top"></VehicleLine>
			<VehicleLine class="VehicleLine conmon-top"></VehicleLine>
			<VehicleLine class="VehicleLine conmon-top"></VehicleLine>
		</div>
	</div>
</template>

<script>
	import VehicleLine from '../components/VehicleLine.vue'
	export default {
		components: {
			VehicleLine
		},
		data() {
			return {
				evaluateList: ['勤劳能干', '永不迟到', '态度很好', '资源很多', '勤劳能干', '永不迟到', '态度很好', '资源很多']
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
	.box {
		padding: 15Px;
		margin-top: 46Px;
	}

	.driver-name {
		font-size: 14Px;
		background-color: #fff;
		padding: 15px;
		border-radius: 5px;

		div:first-child {
			border-bottom: 1px solid #eee;
			padding-bottom: 15px;

			* {
				margin-right: 10px;
			}

			span:first-child {
				color: #303030;
			}

			span:last-child {
				background-color: #FEF6E9;
				color: #F9A825;
				padding: 4px 7px;
				border-radius: 2px;
			}

			display: flex;
			align-items: center;

			img {
				width: 30px;
			}
		}

		div:last-child {
			padding: 15px 0 5px 0;

			span {
				margin-right: 10px;
				color: #999999;
			}
		}
	}

	.evaluate {
		background-color: #fff;
		padding: 15px 15px 0;

		div:first-child {
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			align-items: center;
			border-bottom: 1px solid #eee;

			span {
				display: block;
				text-align: center;
				width: 20%;
				margin-left: 6px;
				margin-bottom: 10px;
				color: #666666;
				background-color: #F5F5F5;
				padding: 4px 4px;
				margin-bottom: 15px;
			}
		}

		div:last-child {
			display: flex;
			justify-content: space-between;
			padding: 15px 0;
			color: #999999;

			&>span {
				color: #FF5252;
			}
		}
	}

	p.conmon-top {
		margin-bottom: 15px;
		color: #303030;
		font-size: 14Px;
	}

	.VehicleLine {
		background-color: #fff;
	}

	.conmon-top {
		margin-top: 15px;
		border-radius: 5px;
	}
</style>
