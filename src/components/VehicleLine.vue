<template>
	<!-- 司机路线通用组件 -->
	<div class="vehicleLine">
		<div>
			<p>
				<span>始发地</span>
				<span style="color: #7E8C8D;">→</span>
				<span>目的地</span>
				<span>运费</span>
			</p>
			<p>
				<span>刚刚&nbsp;&nbsp;</span>
				<span>发布</span>
			</p>
		</div>
		<div>
			<p>
				<span>货物名称&nbsp;&nbsp;|&nbsp;&nbsp;</span>
				<span>货物重量/体积</span>
			</p>
			<p>
				<span>15:00</span>
				<span>装货</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Line页面'
			}
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.vehicleLine {
		padding: 15px;
		font-size: 16Px;
		color: #666666;

		div {
			display: flex;
			justify-content: space-between;
		}

		div:first-child {
			margin-bottom: 15px;

			p:first-child {
				span {
					color: #303030;
					font-weight: 600;
					margin-right: 10px;
				}

				span:last-child {
					color: #FF5252;
					font-size: 12Px;
					font-weight: 400;
				}
			}

			p:last-child {
				color: #999999;
				font-size: 14Px;
			}
		}

		div:last-child {
			font-size: 14Px;

			p:last-child {
				color: #999999;
			}
		}
	}
</style>
