<template>
	<!-- 车辆信息 vehicle_information -->
	<div class="vehicle-information ">
		<van-nav-bar title="车辆信息" :fixed="true" left-arrow @click-left="onClickLeft" />
		<p class="com-title">已上传的证件信息</p>
		<div class="vehicle-information-box1">
			<div class="bxo1 box">
				<img src="../assets/img/home/swiper.png" alt="">
				<p>驾驶证</p>
			</div>
			<div class="box2 box">
				<img src="../assets/img/home/swiper.png" alt="">
				<p>道路运输证</p>
			</div>
		</div>
		<div class="title-type">
			<div>
				<p>车牌号</p>
				<p>司机车牌号</p>
			</div>
			<div>
				<p>车长</p>
				<p>司机车辆车长</p>
			</div>
			<div>
				<p>车型</p>
				<p>司机车辆车型</p>
			</div>
			<div>
				<p>车高</p>
				<p>司机车辆车高</p>
			</div>
			<div>
				<p>车牌号</p>
				<p>2012-10-28&nbsp;—&nbsp;2035-12-14</p>
			</div>
			<div>
				<p>车牌号</p>
				<p>司机车辆核定载质量</p>
			</div>
			<div>
				<p>车牌号</p>
				<p>司机道路运输证号</p>
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
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.com-title {
		margin: 70Px 0 15px 0;
		padding: 0 15px;
		color: #303030;
		font-size: 12Px;
	}
	.vehicle-information-box1 {
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		padding-top: 15px;
		.box {
			text-align: center;
			margin: 0 30px;
			img {
				width: 95Px;
				height: 60Px;
			}
			p {
				margin: 5px 0;
				color: #686868;
				font-size: 12Px;
			}
		}
	}
	.title-type {
		margin-top: 20px;
		background-color: #ffffff;
		div {
			display: flex;
			padding: 12px 15px;
			border-bottom: 1px solid #eeeeee;
			color: #565656;
			font-size: 14Px;
			p:first-child {
				width: 110px;
			}
		}
	}
</style>
