import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible' //淘宝移动端适配
import 'vant/lib/index.css' //vant全局样式
import '@/assets/css/index.css' //默认样式
import '@/assets/css/vantBase.css' //vant样式修改css
// 按需引入组件
import {
	Button,
	Tabbar,
	TabbarItem,
	NavBar,
	Search
} from 'vant';

Vue.use(Button).use(Tabbar).use(TabbarItem).use(NavBar).use(Search)


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
