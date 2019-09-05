
Vue.config.productionTip = false
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible' //淘宝移动端适配
import '@/assets/css/index.css' //默认样式
import 'vant/lib/index.css';
import '@/assets/css/vantBase.css' //vant样式修改css
// 按需引入组件
import {
	Button,
	Tabbar,
	TabbarItem,
	NavBar,
	Search,
	Field,
	Cell,
	CellGroup,
	Icon,
	Swipe,
	SwipeItem,
	Row,
	Col,
	Dialog,
	Checkbox,
	CheckboxGroup,
	Rate
} from 'vant';
// 统一设置header携带内容
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token');
        config.headers.token = token;
        config.headers.lal = '114.385255,30.464077';
        config.headers.type = '3';
        config.headers.invokePoolCode = 'app';
        config.headers.timestamp = new Date().getTime();
        return config;
}, function (error) {
    return Promise.reject(error);
});
Vue.prototype.$http = axios;

Vue.use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)
.use(NavBar).use(Search).use(Field).use(Cell).use(CellGroup).use(Icon)
.use(Row).use(Col).use(Dialog).use(Checkbox).use(CheckboxGroup).use(Rate);
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
