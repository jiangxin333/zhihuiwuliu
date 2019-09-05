<template>
	<!-- Setting 设置 -->
	<div class="Setting">
		<van-nav-bar title="设置" left-arrow :fixed="true" @click-left="onClickLeft" />
		<div class="setting-box">
			<div class="setting-box-1">
				<div class="box-1">
					<span>用</span>
					<div>
						<p style="color: #303030;font-size: 14Px;">司机名字</p>
						<p style="opacity: 0;">00</p>
						<p>司机公司</p>
					</div>
				</div>
				<p>
					<span>修改资料&nbsp;&nbsp;</span>
					<van-icon name="arrow" size="10" color="#999" />
				</p>
			</div>
			<div class="setting-box-2">
				<van-cell title-class="sizeColor" title="消息设置" is-link />
				<van-cell title-class="sizeColor" title="修改密码" is-link />
				<van-cell title-class="sizeColor" title="清除缓存" is-link value="10.5M" />
				<van-cell title-class="sizeColor" title="认证进度" is-link />
				<van-cell title-class="sizeColor" title="法律条款与平台规则" is-link />
				<van-cell title-class="sizeColor" title="关于我们" is-link value="V1.0.0版本" />
			</div>
			<van-button type="default" size="large">退出登录</van-button>
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
	.van-cell__left-icon, .van-cell__right-icon {
		font-size: 10Px;
	}
	.van-cell:not(:last-child)::after {
		left: 0;
	}
	.sizeColor {
		color: #464646;
	}
	.van-button--default {
		color: #f9ae36;
		height: 46Px;
		line-height: 46Px;
	}
	.setting-box {
		margin-top: 46Px;
		.setting-box-1 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 15px;
			background-color: #ffffff;
			color: #999;
			.box-1 {
				display: flex;
				align-items: center;
				& > span {
					display: inline-block;
					width: 40Px;
					height: 40Px;
					line-height: 38Px;
					text-align: center;
					color: #ffffff;
					font-size: 22PX;
					background-color: #f9ae36;
					border-radius: 2Px;
					margin-right: 12px;
				}
				& > div {
				}
			}
		}
		.setting-box-2 {
			margin-top: 15px;
		}
		.van-button {
			margin-top: 40px;
		}
	}
</style>
