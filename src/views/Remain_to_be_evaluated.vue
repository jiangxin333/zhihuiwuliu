<template>
	<div class="evaluateShipper">
		<van-nav-bar title="评价货主" :border="false" left-arrow fixed @click-left="onClickLeft" />
		<div class="content">
			<div class="shipper_info">
				<div class=shipper_head>
					<img src="../assets/img/userHead.jpg" alt="">
				</div>
				<div class="shipper_address">
					<span>始发地 → 目的地</span>
					<div>
						<span>货主姓名 丨 货主公司 丨 货物名称</span>
					</div>
				</div>
			</div>
			<div class="content_rate_box">
				<div class="small_sj"></div>
				<div class="van_rate">
					<van-rate v-model="value" size="30" gutter="30" color="#F9A825" @change="starsChange" />
					<span class="van_rate_tip">{{text}}</span>
				</div>
				<div class="check_list">
					<div class="check_list_box" v-for="(item,index) in checkList" :key="index" :class="item.show?'active':''" @click="isCheck(item)">
						{{item.title}}
					</div>
				</div>
			</div>
			<div class="content_comment">
				<div class="content_comment_title">请描述你遇到的情况,帮助我们更快核实:</div>
				<div class="content_comment_text">
					<textarea v-model="content" placeholder="请输入..."></textarea>
				</div>
			</div>
		</div>
		<div class="deep">
			提交
		</div>
	</div>
</template>

<script>
	// import Bus from '../../bus.js'
	export default {
		data() {
			return {
				value: 5,
				text: '太棒了!鼎力推荐!',
				checkList: [{
					title: '准时高效',
					id: 0,
					show: false
				}, {
					title: '货物准确',
					id: 1,
					show: false
				}, {
					title: '态度很好',
					id: 2,
					show: false
				}, {
					title: '报位准确',
					id: 3,
					show: false
				}, {
					title: '态度良好',
					id: 4,
					show: false
				}, {
					title: '永不迟到',
					id: 5,
					show: false
				}, {
					title: '工作积极',
					id: 6,
					show: false
				}, {
					title: '下货有力',
					id: 7,
					show: false
				}],
				content: ''
			}
		},
		methods: {
			starsChange(e) {
				if (e == 1) {
					this.text = '极评!再也不想与他合作了!'
				} else if (e == 2) {
					this.text = '差评!工作态度有问题!'
				} else if (e == 3) {
					this.text = '一般般!可以再合作!'
				} else if (e == 4) {
					this.text = '很好!强烈推荐!'
				} else if (e == 5) {
					this.text = '简直太棒了!鼎力推荐!'
				}
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			isCheck(item) {
				if (item.show == false) {
					item.show = true;
				} else {
					item.show = false;
				}
			}
		},
		created() {

		},
	}
</script>

<style lang="scss" scoped>
	div {
		box-sizing: border-box;
	}

	.content {
		margin-top: 46Px;

		.shipper_info {
			width: 100%;
			display: table;
			padding: 10px;

			.shipper_head {
				float: left;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				overflow: hidden;
			}

			.shipper_address {
				float: left;
				font-size: 15px;
				margin-left: 10px;

				span {
					float: left;
					font-weight: bold;
					height: 1.6em;
				}

				div {
					color: #999999;
					font-size: 13px;

					span {
						font-weight: normal;
					}
				}
			}
		}

		.content_rate_box {
			margin: 10px;
			border-radius: 10px;
			height: 150px;
			background: #ffffff;
			position: relative;

			.small_sj {
				position: relative;
				width: 15px;
				height: 15px;
				background: #ffffff;
				top: -7.5px;
				left: 15px;
				transform: rotate(45deg);
			}

			.van_rate {
				text-align: center;

				.van_rate_tip {
					color: #4C9DEF;
					font-size: 12px;
					letter-spacing: 5px;
					line-height: 20px;
				}
			}

			.check_list {
				display: flex;
				flex-wrap: wrap;

				.check_list_box {
					margin: 0 auto;
					width: 22%;
					border: 1px solid #BBBBBB;
					margin-top: 5px;
					font-size: 13px;
					color: #BBBBBB;
					line-height: 28px;
					text-align: center;
				}

				.active {
					background: rgba(249, 168, 37, .1);
					color: #F9A825;
					border: 1px solid rgba(249, 168, 37, .1);
				}
			}
		}

		.content_comment {
			margin: 10px;
			border-radius: 10px;
			height: 150px;
			background: #ffffff;
			position: relative;

			.content_comment_title {
				color: #666666;
				font-size: 14px;
				text-align: left;
				padding: 10px;
			}

			.content_comment_text {
				margin: 0 10px;
				height: 100px;

				textarea {
					width: 100%;
					height: 100%;
					box-sizing: border-box;
					padding: 15px;
					background: #EEEEEE;
					color: #999999;
					border: 1px solid #EEEEEE;
				}
			}
		}

	}

	.deep {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background: #F9A825;
		color: #ffffff;
		font-size: 14px;
	}
</style>
