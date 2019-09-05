<template>
	<!-- 个人资料 Personal_data -->
	<div class="Personal_data">
		<van-nav-bar title="个人资料" :fixed="true" left-arrow @click-left="onClickLeft" />
		<div class="sj-header">
			<span>头像</span>
			<p>
				<img src="" alt="">
				<van-icon name="arrow" color="#b4b4b4"></van-icon>
			</p>
		</div>
		<div class="sj-content">
			<van-cell-group>
			  <van-field v-model="username" label="姓名" placeholder="省份证名字" />
			  <van-field v-model="number" type="tel" label="手机号" placeholder="默认显示注册时的手机号" />
			  <router-link to="/vehicle_information" tag="div" class="com">
				  <div>
					  <span style="color: #323233;">车牌号</span>
					  <span>司机车牌号</span>
				  </div>
				  <van-icon name="arrow" color="#b4b4b4"></van-icon>
			  </router-link>
			  <div class="com com-1">
				  <div>
					  <span style="color: #323233;">资质认证</span>
					  <i class="i-1">已认证</i>
					  <i class="i-2">审核中</i>
					  <i class="i-3">认证失败</i>
					  <i class="i-4">去认证</i>
				  </div>
				  <van-icon name="arrow" color="#b4b4b4"></van-icon>
			  </div>
			</van-cell-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				number: ''
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
	.van-cell:not(:last-child)::after {
		left: 0;
	}
	.sj-header {
		margin-top: 46Px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10Px 15Px;
		background-color: #ffffff;
		span {
			color: #303030;
			font-size: 14Px;
		}
		p {
			img {
				display: inline-block;
				width: 45PX;
				height: 45PX;
				background-color: orange;
				border-radius: 2Px;
				vertical-align: middle;
				margin-right: 8px;
			}
		}
	}
	.sj-content {
		margin-top: 16px;
		.com {
			height: 43Px;
			border-bottom: 0.5px solid #f4f4f6;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 15Px;
			span {
				display: inline-block;
				width: 90Px;
				font-size: 14Px;
				color: #969799;
			}
		}
		.com-1 {
			div {
				i {
					font-style: normal;
					font-size: 12Px;
					color: #969799;
					margin-right: 8px;
				}
				.i-1 {
					color: #f9a825;
				}
				.i-2 {
					color: #ff7b23;
				}
				.i-3 {
					color: #f94629;
				}
				.i-4 {
					color: #a6a6a6;
				}
				
			}
		}
	}
</style>
