<template>
	<!-- 当前货源组件 -->
	<div class="supply-box">
		<div class="supply-1 supply">
			<p>
				<span>始发地</span>
				<span style="color: #999999;">→</span>
				<span>目的地</span>
				<span>运费</span>
			</p>
			<van-button type="warning" round size="mini" @click="refuse">拒绝</van-button>
		</div>
		<div  class="supply-2 supply">
			<p>
				<span>货物名称&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span>货物重量/体积</span>
			</p>
			<van-button color="#F9A825" round size="mini">接受</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			refuse() {
				console.log(123);
				this.$dialog.confirm({
				  title: '您确认要拒绝此次指派吗?',
				  message: '始发地  →  目的地',
				  confirmButtonText: '拒绝',
				  confirmButtonColor: '#F9A825',
				  className: 'titleClass'
				}).then(() => {
				  // on confirm
				}).catch(() => {
				  // on cancel
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.titleClass {
		top: 0;
	}
	.supply-box {
		padding: 10px;
		border-radius: 6px;
		.supply {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.supply-1 {
			margin-bottom: 10px;
			p {
				span {
					color: #303030;
					// font-weight: 600;
					font-size: 16Px;
					margin-right: 6px;
				}
				span:last-child {
					font-weight: 200;
					font-size: 12Px;
					color: #FF5252;
				}
			}
		}
		.supply-2 {
			color: #666666;
			font-size: 14Px;
		}
	}
	.van-button--mini {
		height: 18px;
		line-height: 18px;
		font-size: 12Px;
	}
</style>
