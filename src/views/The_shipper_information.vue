<template>
	<!-- 货主资料 The_shipper_information -->
	<div class="The-shipper-information">
		<van-nav-bar title="货主资料" :fixed="true" left-arrow @click-left="onClickLeft" />
		<div class="The-shipper-information-box">
			<div class="The-shipper-information-box-1 commonyuan">
				<div class="box-1">
					<div class="box-1-1">
						<img src="@/assets/img/tabBar/a_tabbar4.png" alt="">
						<span class="sp-1">货主名字</span>
						<span class="sp-2">货 主 评 分</span>
					</div>
					<span>99%好评</span>
				</div>
				<div class="box-2">
					<span v-for="(item,index) in gradeList" :key="index">{{item}}</span>
				</div>
				<div class="box-3">
					<span>货主公司名称</span>
					<p>
						<span>交易&nbsp;&nbsp;950&nbsp;&nbsp;</span>
						<span>&nbsp;&nbsp;发货&nbsp;&nbsp;950</span>
					</p>
				</div>
			</div>
			<p class="common-title">该货主有限资源</p>
			<div class="box-3 commonyuan">
				<div class="box-1">
					<div class="box-1-p-1">
						<p>始发地</p>
						<p style="color: #7E8C8D;">→</p>
						<p>目的地</p>
						<p>运费</p>
					</div>
					<p class="p-2">
						<span>刚刚&nbsp;&nbsp;</span>
						<span>发布</span>
					</p>
				</div>
				<div class="box-2">
					<div>
						<span>货物名称&nbsp;&nbsp;</span>
						<span>|&nbsp;&nbsp;货物重量/体积</span>
					</div>
					<span>15:00 装货</span>
				</div>
			</div>
			<div class="box-3 commonyuan">
				<div class="box-1">
					<div class="box-1-p-1">
						<p>始发地</p>
						<p style="color: #7E8C8D;">→</p>
						<p>目的地</p>
						<p>运费</p>
					</div>
					<p class="p-2">
						<span>刚刚&nbsp;&nbsp;</span>
						<span>发布</span>
					</p>
				</div>
				<div class="box-2">
					<div>
						<span>货物名称&nbsp;&nbsp;</span>
						<span>|&nbsp;&nbsp;货物重量/体积</span>
					</div>
					<span>15:00 装货</span>
				</div>
			</div>
		</div>
		<div class="footer">拨 打 电 话</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gradeList: ['勤劳能干','永不迟到','态度很好','资源很多','勤劳能干','永不迟到','态度很好','资源很多']
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
	.The-shipper-information-box{
		padding: 15px;
		margin-top: 46Px;
	}
	// 通用圆角
	.commonyuan {
		border-radius: 6px;
	}
	.The-shipper-information-box-1 {
		background-color: #ffffff;
		padding: 0 15px;
		.box-1 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 8px;
			.box-1-1 {
				img {
					width: 30Px;
					height: 30Px;
					border-radius: 50%;
					vertical-align: middle;
				}
				* {
					margin-right: 10px;
				}
				.sp-1 {
					color: #353535;
					font-size: 16Px;
				}
				.sp-2 {
					padding: 4px;
					background-color: #fef6e9;
					color: #f9b03d;
				}
			}
			& > span {
				color: #ff6e6e;
			}
		}
		.box-2 {
			overflow: hidden;
			padding-bottom: 10px;
			border-bottom: 1px solid #eeeeee;
			span {
				display: inline-block;
				width: 60px;
				padding: 4px;
				background-color: #f5f5f5;
				color: #7c7c7c;
				float: left;
				margin-left: 8px;
				text-align: center;
				margin-top: 5px;
				margin-bottom: 5px;
			}
		}
		.box-3 {
			display: flex;
			justify-content: space-between;
			padding: 15px 0;
			color: #a7a7a7;
		}
	}
	.common-title {
		margin: 15px 0;
		color: #303030;
		font-size: 14Px;
	}
	.box-3 {
		padding: 15px 15px 10px;
		background-color: #ffffff;
		margin-bottom: 15px;
		.box-1 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.box-1-p-1 {
				font-size: 16Px;
				color: #303030;
				p {
					display: inline-block;
					margin-right: 10px;
				}
				p:last-child {
					font-size: 14Px;
					color: #FF5252;
				}
			}
			.p-2 {
				color: #999999;
			}
		}
		.box-2 {
			margin: 10px 0;
			color: #666666;
			font-size: 14Px;
			// border-bottom: 1px solid #F5F5F5;
			display: flex;
			justify-content: space-between;
		}
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #f9a825;
		height: 36Px;
		line-height: 36Px;
		text-align: center;
		color: #ffffff;
		font-size: 14Px;
	}
</style>
