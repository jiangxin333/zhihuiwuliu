<template>
	<!-- 地图页面 -->
	<div>
		<van-nav-bar title="查看地图" :border="false" left-arrow fixed @click-left="onClickLeft" />
		<div id="allmap" :style="Wheight"></div>
		<!-- 地图路线 -->
		<div v-show="isfooter" class="footer-info-map common-footer">
			<div class="top">始发地 <span style="color: #999999;">→</span> 目的地</div>
			<div class="content">
				<div class="box-1">
					<img src="../assets/img/tabBar/a_tabbar4.png" alt="">
					<div>
						<p>货主名字</p>
						<p style="color: #666666;">货物名称&nbsp;&nbsp;|&nbsp;&nbsp;货物重量/体积</p>
					</div>
				</div>
				<img src="../assets/img/supply/phone.png" alt="">
			</div>
			<div class="footer-btn">确认收货</div>
		</div>
		<!-- 导航去哪儿 -->
		<div v-show="!isfooter" class="footer-info-map1 common-footer">
			<h3>导航去哪儿?</h3>
			<div class="nav-btns">
				<span v-for="(item,index) in navList" :key="index" :class="index === active_num ? 'active' : ''" @click="active_btn(index)">{{item}}</span>
			</div>
			<div class="footer-btn">确认装货</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				map: null,
				active_num: 0,
				Wheight: {
					height: (window.innerHeight - 46) + 'px'
				},
				navList: ['起点','卸货点1','卸货点2','卸货点3','卸货点4'],
				isfooter: false
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			baiduMap() {
				this.map = new BMap.Map('allmap');
				this.map.centerAndZoom(new BMap.Point(114.35,30.60), 12);
				var p1 = new BMap.Point(114.261,30.623);
				var p2 = new BMap.Point(114.424,30.606);
				var driving = new BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true}});
				driving.search(p1, p2);
				var point=new BMap.Point(114.300,30.630);
				var marker = new BMap.Marker(point);  // 创建标注
				this.map.addOverlay(marker);
				var opts = {
				  width : 200,     // 信息窗口宽度
				  height: 100,     // 信息窗口高度
				  title : "海底捞王府井店" , // 信息窗口标题
				  enableMessage:true,//设置允许信息窗发送短息
				  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
				};
				var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象
				marker.addEventListener("click", function(){
				  this.map.openInfoWindow(infoWindow,point); //开启信息窗口
				});
			},
			active_btn(num) {
				this.active_num = num;
			}
		},
		mounted() {
			this.baiduMap();
		}
	}
</script>

<style lang="scss" scoped>
	#allmap {
		margin-top: 46Px;
		width: 100%;
	}
	.common-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		background: #ffffff;
		width: 100%;
		border-radius: 6px 6px 0 0;
	}
	
	.footer-info-map {
		.top {
			height: 46px;
			line-height: 46px;
			text-align: center;
			font-size: 14Px;
			border-bottom: 1px solid #eeeeee;
		}
		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 15px 10px;
			img {
				width: 30Px;
				height: 30Px;
				border-radius: 50%;
			}
			.box-1 {
				display: flex;
				align-items: center;
				color: #303030;
				p {
					line-height: 1.8em;
				}
				img {
					margin-right: 10px;
				}
			}
		}
	}
	// 底部确认按钮
	.footer-btn {
		background-color: #f9a825;
		color: #fff;
		width: 92%;
		height: 36Px;
		line-height: 36Px;
		text-align: center;
		border-radius: 22Px;
		margin: 10px auto;
		font-size: 14Px;
	}
	.footer-info-map1 {
		h3 {
			font-size: 16Px;
			height: 38Px;
			line-height: 38Px;
			text-align: center;
		}
		.nav-btns {
			padding: 0 15px;
			overflow: hidden;
			span {
				float: left;
				width: 22.5%;
				height: 24PX;
				line-height: 24PX;
				margin-left: 2%;
				text-align: center;
				background-color: #fef6e9;
				color: #f9a825;
				border-radius: 22PX;
				margin-bottom: 10PX;
			}
		}
	}
	.active {
		background-color: #f9a825!important;
		color: #ffffff!important;
	}
</style>
