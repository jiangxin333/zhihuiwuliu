<template>
	<div class="my">
		<div class="my-header">
			<van-nav-bar title="我的" :fixed="true" :border="false" @click-right="toSetting">
				<van-icon name="setting" color="#ffffff" slot="right" />
			</van-nav-bar>
			<div class="header-box">
				<div class="header-box-1">
					<router-link to="/personal_data" tag="div" class="box-0">
						<div class="box-1">
							<p>
								司
							</p>
						</div>
						<div class="box-2">
							<p>司机姓名</p>
							<p>司机车牌号</p>
						</div>
					</router-link>
					<div class="box-0-1">已认证<img src="../assets/img/home/goods.png" alt=""></div>
				</div>
			</div>
		</div>
		<div class="content-box">
			<div class="content-box-1">
				<div>
					<p><span>13</span>单</p>
					<p>成交单数</p>
				</div>
				<div>
					<p><span>9.3</span>分</p>
					<p>评分</p>
				</div>
				<div>
					<p><span>32719</span>元</p>
					<p>成交金额</p>
				</div>
			</div>
			<p class="my-common">我的运单</p>
			<div class="content-box-2">
				<router-link to="/standbyWaybill" tag="div">
					<div>
						<p>
							<img src="../assets/img/my/dpj.png" alt="">
						</p>
						<p>代发货</p>
					</div>
				</router-link>
				<router-link to="/in_transit" tag="div">
					<p>
						<img src="../assets/img/my/ysz.png" alt="">
					</p>
					<p>运输中</p>
				</router-link>
				<router-link to="/off_the_stocks" tag="div">
					<p>
						<img src="../assets/img/my/ywc.png" alt="">
					</p>
					<p>已完成</p>
				</router-link>
				<router-link to="/remain_to_be_evaluated" tag="div">
					<p>
						<img src="../assets/img/my/dpj.png" alt="">
					</p>
					<p>待评价</p>
				</router-link>
			</div>
			<p class="my-common">我的服务</p>
			<div class="content-box-3">
				<router-link to="/for_the_loading" tag="div">
					<div>
						<p>
							<img src="../assets/img/my/jyls.png" alt="">
						</p>
						<p>交易流水</p>
					</div>
				</router-link>
				<router-link to="/in_transit" tag="div">
					<p>
						<img src="../assets/img/my/sjtj.png" alt="">
					</p>
					<p>数据统计</p>
				</router-link>
				<router-link to="/off_the_stocks" tag="div">
					<p>
						<img src="../assets/img/my/yhj.png" alt="">
					</p>
					<p>优惠卷</p>
				</router-link>
				<router-link to="/remain_to_be_evaluated" tag="div">
					<p>
						<img src="../assets/img/my/kfqq.png" alt="">
					</p>
					<p>客服QA</p>
				</router-link>
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
			toSetting() {
				this.$router.push('/setting')
			}
		},
		created() {
			this.$http
				.post('api/DriverGoods/confirmGoods', {
					"flag": false,
					"goodsId": 0
				})
			.then(({data}) => {
				console.log(data,111);
			})
		}
	}
</script>

<style lang="scss" scoped>
	.van-nav-bar {
		background-color: transparent;
	}

	.van-nav-bar__title {
		color: #ffffff;
	}

	.my-common {
		margin: 15px 0;
		font-size: 14Px;
	}

	.my-header {
		background: url(../assets/img/home/homebg.png) no-repeat center center;
		background-size: cover;

		.header-box {
			padding-top: 46Px;

			.header-box-1 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20px 0 60px 0;
				margin-left: 20px;
			}

			.box-0 {
				display: flex;
				align-items: center;

				.box-1 {
					width: 58px;
					height: 58px;
					line-height: 55px;
					text-align: center;
					border-radius: 50%;
					background-color: #ffffff;
					padding: 2px;
					box-sizing: border-box;
					margin-right: 15px;

					p {
						width: 100%;
						height: 100%;
						border: 1px solid #f9ab2e;
						border-radius: 50%;
						box-sizing: border-box;
						font-size: 26px;
						color: #f9ab2e;
					}
				}

				.box-2 {
					font-size: 14Px;

					P:nth-child(1) {
						color: #fff;
						margin-bottom: 6px;
					}

					P:nth-child(2) {
						color: #fed89c;
					}
				}
			}

			.box-0-1 {
				background-color: #ffffff;
				width: 88Px;
				height: 24Px;
				border-top-left-radius: 15Px;
				border-bottom-left-radius: 15px;
				padding: 2Px 2Px 2Px 6Px;
				text-align: center;
				line-height: 24Px;
				font-size: 10Px;
				box-sizing: border-box;
				color: #f9ab2c;

				img {
					width: 15Px;
					vertical-align: middle;
					height: 15Px;
					border-radius: 50%;
					margin-left: 10px;
					position: relative;
					top: -3px;
				}
			}
		}
	}

	.content-box {
		padding: 15px;
		margin-top: -50px;

		.content-box-1 {
			padding: 10px 15px;
			background-color: #ffffff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 4px;

			div {
				border-right: 1px solid #eeeeee;
				text-align: center;
				flex: 1;
				color: #7f7f7f;

				p:first-child {
					margin-bottom: 5px;
					color: #c7c7c7;

					span {
						color: #fab448;
						font-size: 16Px;
					}
				}
			}

			div:last-child {
				border: none;
			}
		}

		.content-box-2 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			background-color: #ffffff;
			border-radius: 4px;
			padding-top: 3px;

			div {
				flex: 1;

				p {
					height: 28px;
					line-height: 30px;

					img {
						width: 20Px;
						vertical-align: middle;
					}
				}
			}
		}

		.content-box-3 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			background-color: #ffffff;
			border-radius: 4px;
			padding: 8px 0;

			div {
				flex: 1;

				p {
					height: 28px;
					line-height: 30px;

					img {
						width: 20Px;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>
