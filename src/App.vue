<template>
	<div id="app">
		<!-- 缓存所有路由 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<van-tabbar v-model="active" active-color="#F9A825" v-show="isShow">
			<van-tabbar-item icon="home-o" to="/" :replace="true">
				<span>首页</span>
			</van-tabbar-item>
			<van-tabbar-item icon="search" to="/supply_of_goods" :replace="true">
				<span>货源中心</span>
			</van-tabbar-item>
			<van-tabbar-item to="/vehicle" :replace="true">
				<span>车辆管理</span>
				<img slot="icon" slot-scope="props" :src="props.active ? tabbar.icon3.a_tabar : tabbar.icon3.tabar" />
			</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/my" :replace="true">
				<span>我的</span>
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
					icon3: {
						a_tabar: require('./assets/img/tabBar/a_tabbar3.png'),
						tabar: require('./assets/img/tabBar/tabbar3.png')
					}
				}
			}
		},
		created() {},
		watch: {
			$route() {
				console.log(this.$route.path,'路由');
				if (
					this.$route.path == '/home' ||
					this.$route.path == '/vehicle' ||
					this.$route.path == '/supply_of_goods' ||
					this.$route.path == '/my'
				) {
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
		}
	}
</script>
<style lang="scss">

</style>
