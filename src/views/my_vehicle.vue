<template>
	<!-- 我的车辆 -->
	<div class="my-vehicle">
		<van-nav-bar border title="司机资料" right-text="添加车辆" left-arrow fixed @click-right="onClickRight" @click-left="onClickLeft" />
		<!-- 搜索框 -->
		<div class="box">
			<div class="search">
				<van-search placeholder="输入名字搜索车辆" v-model="value" />
			</div>
			<div class="box-1">
				<div class="vehicle-1 vehicle-0">
					<p>
						<img src="@/assets/img/vehicle/my_vehicle.png" alt="">
						<span>司机车牌号</span>
						<span>车长 | 车型</span>
					</p>
					<van-button type="default" round plain color="#F9A825"  size="mini">下班</van-button>
				</div>
				<div class="vehicle-2 vehicle-0">
					<p>
						<img src="@/assets/img/vehicle/my_vehicle.png" alt="">
						<span>司机车牌号</span>
						<span>车长 | 车型</span>
					</p>
					<van-button type="default" round color="#F9A825" size="mini">上班</van-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				console.log('添加车辆事件');
			}
		}
	}
</script>

<style lang="scss" scoped>
	// vant样式修改
	.van-nav-bar__text {
		color: #F9A825;
	}
	.van-button {
		height: 18Px;
		padding: 0px 14px;
		line-height: 18Px;
	}
	.box {
		margin-top: 46Px;
	}
	.search {
		padding: 6px;
		background-color: #ffffff;
		.van-search__content {
			border-radius: 17Px;
			background-color: #EEEEEE;
		}
	}
	.box-1 {
		padding: 0 15px;
		.vehicle-0 {
			display: flex;
			padding: 10px 16px;
			justify-content: space-between;
			margin-top: 20px;
			background-color: #ffffff;
			align-items: center;
			p {
				font-size: 14Px;
				* {
					margin-right: 10px;
					color: #303030;
				}
				span:last-child {
					color: #999999;
					font-size: 12Px;
				}
				img {
					width: 25Px;
					vertical-align: middle;
				}
			}
		}
	}
</style>
