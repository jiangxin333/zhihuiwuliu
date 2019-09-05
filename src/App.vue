<template>
	<div id="app">
		<!-- 缓存所有路由 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<van-tabbar v-model="active" active-color="#F9A825" v-show="isShow">
			<van-tabbar-item to="/home" :replace="true">
				<span>首页</span>
				<img slot="icon" slot-scope="props" :src="props.active ? tabbar.icon1.a_tabar : tabbar.icon1.tabar" />
			</van-tabbar-item>
			<van-tabbar-item icon="search" to="/supply_of_goods" :replace="true">
				<span>货源中心</span>
				<img slot="icon" slot-scope="props" :src="props.active ? tabbar.icon2.a_tabar : tabbar.icon2.tabar" />
			</van-tabbar-item>
			<van-tabbar-item to="/vehicle" :replace="true">
				<span>车辆管理</span>
				<img slot="icon" slot-scope="props" :src="props.active ? tabbar.icon3.a_tabar : tabbar.icon3.tabar" />
			</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/my" :replace="true">
				<span>我的</span>
				<img slot="icon" slot-scope="props" :src="props.active ? tabbar.icon4.a_tabar : tabbar.icon4.tabar" />
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
				isShow: true,
				tabbar: {
					icon1: {
						a_tabar: require('./assets/img/tabBar/a_tabbar1.png'),
						tabar: require('./assets/img/tabBar/tabbar1.png')
					},
					icon2: {
						a_tabar: require('./assets/img/tabBar/a_tabbar2.png'),
						tabar: require('./assets/img/tabBar/tabbar2.png')
					},
					icon3: {
						a_tabar: require('./assets/img/tabBar/a_tabbar3.png'),
						tabar: require('./assets/img/tabBar/tabbar3.png')
					},
					icon4: {
						a_tabar: require('./assets/img/tabBar/a_tabbar4.png'),
						tabar: require('./assets/img/tabBar/tabbar4.png')
					}
				}
			}
		},
		methods:{
			checkRoute() {
				console.log('路由检查');
				if (this.$route.path == '/home' ||this.$route.path == '/vehicle' ||
				this.$route.path == '/supply_of_goods' ||this.$route.path == '/my') {
					this.isShow = true;
					switch (this.$route.path) {
						case '/vehicle':
							this.active = 2;
							break;
						case '/home':
							this.active = 0;
							break;
						case '/supply_of_goods':
							this.active = 1;
							break;
						case '/my':
							this.active = 3;
							break;
						default:
							break;
					}
				} else {
					this.isShow = false;
				}
			}
		},
		created() {
			this.checkRoute();
		},
		watch: {
			$route() {
				this.checkRoute();
			}
		}
	}
</script>
<style lang="scss">

</style>
