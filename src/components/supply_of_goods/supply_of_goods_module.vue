<template>
	<!-- 货源中心组件 -->
	<div class="module-box">
		<div class="box-1">
			<router-link class="box-1-p-1" to="/supply_the_details" tag="div">
				<p>始发地</p>
				<p style="color: #7E8C8D;">→</p>
				<p>目的地</p>
				<p>运费</p>
			</router-link>
			<p class="p-2">
				<span>刚刚&nbsp;&nbsp;</span>
				<span>发布</span>
			</p>
		</div>
		<router-link class="box-2" to="/supply_the_details" tag="div">
			<span>货物名称&nbsp;&nbsp;</span>
			<span>|&nbsp;&nbsp;货物重量/体积</span>
		</router-link>
		<div class="box-3">
			<div class="box-3-1">
				<img src="@/assets/img/tabBar/a_tabbar4.png" alt="">
				<span style="color: #303030;">货主名字</span>
				<span>货主评分</span>
			</div>
			<div class="box-3-2">
				<img src="@/assets/img/supply/phone.png" alt="">
				<router-link to="/supply_the_details" tag="span">抢</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.module-box {
		padding: 15px;
		background-color: #ffffff;
		.box-1 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.box-1-p-1 {
				font-size: 16Px;
				color: #303030;
				font-weight: 600;
				p {
					display: inline-block;
					margin-right: 10px;
				}
				p:last-child {
					font-size: 14Px;
					font-weight: normal;
					color: #FF5252;
				}
			}
			.p-2 {
				color: #999999;
			}
		}
		.box-2 {
			margin: 10px 0;
			padding: 0 0 10px 0;
			border-bottom: 1Px solid #EEEEEE;
			color: #666666;
			font-size: 14Px;
			// border-bottom: 1px solid #F5F5F5;
		}
		.box-3 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14Px;
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
					margin-left: 15px;
				}
			}
		}
	}
</style>
