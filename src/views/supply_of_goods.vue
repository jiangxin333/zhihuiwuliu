<template>
	<!-- tabBar货源中心 Supply_of_goods -->
	<div class="Supply-of-goods">
		<van-nav-bar title="附近" :border="false" fixed />
		<van-row>
		  <van-col span="6">
			<span>起始地&nbsp;</span>
			<van-icon name="arrow-down"></van-icon>
		  </van-col>
		  <van-col span="6">
			  <span>目的地&nbsp;</span>
			  <van-icon name="arrow-down"></van-icon>
		  </van-col>
		  <van-col span="6">
			  <span>智能排序&nbsp;</span>
			  <van-icon name="arrow-down"></van-icon>
		  </van-col>
		  <van-col span="6">
			  <span>筛选&nbsp;</span>
			  <van-icon name="arrow-down"></van-icon>
		  </van-col>
		</van-row>
		<div class="centent-box">
			<Supply-of-goods-module class="Supply-of-goods-module"></Supply-of-goods-module>
			<Supply-of-goods-module class="Supply-of-goods-module"></Supply-of-goods-module>
			<Supply-of-goods-module class="Supply-of-goods-module"></Supply-of-goods-module>
			<Supply-of-goods-module class="Supply-of-goods-module"></Supply-of-goods-module>
		</div>
	</div>
</template>

<script>
	import SupplyOfGoodsModule from '@/components/supply_of_goods/supply_of_goods_module.vue'
	export default {
		components: {
			SupplyOfGoodsModule
		},
		data() {
			return {

			}
		},
		activated() {}
	}
</script>

<style lang="scss" scoped>
	.van-nav-bar {
		background-color: #F9A825;
		color: #fff;
	}
	.van-ellipsis {
		color: #fff;
	}
	.van-row {
		position: fixed;
		top: 46Px;
		width: 100%;
		text-align: center;
		color:#999999;
		padding: 10px 0;
		background-color: #ffffff;
		.van-icon {
			position: relative;
			top: 2px;
		}
	}
	.centent-box {
		margin: 90Px 0;
		padding: 0 15px;
		.Supply-of-goods-module {
			margin-top: 15px;
			border-radius: 6px;
		}
	}
</style>
