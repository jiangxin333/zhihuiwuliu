import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'//首页
import Vehicle from '@/views/Vehicle.vue'//车辆管理
import Supply_of_goods from '@/views/Supply_of_goods.vue'//附近
import My from '@/views/My.vue'//我的页面
import DriverInfo from '@/views/driverInfo.vue'//司机资料
import My_vehicle from '@/views/my_vehicle.vue'//我的车辆
import AddVehicle from '@/views/addVehicle.vue'//添加车辆
import Map from '@/views/Map.vue'//地图
import The_waybill from '@/views/The_waybill.vue'//当前运单
import Supply_hy from '@/views/Supply_hy.vue'//当前货源
import Order_detail from '@/views/Order_detail.vue'//运单详情
import Supply_the_details from '@/views/Supply_the_details.vue'//货源详情
import The_shipper_information from '@/views/The_shipper_information.vue'//货主资料
import In_transit from '@/views/In_transit.vue'//运输中订单
import Off_the_stocks from '@/views/Off_the_stocks.vue'//已完成运单
import Remain_to_be_evaluated from '@/views/Remain_to_be_evaluated.vue'//待评价订单
import Setting from '@/views/Setting.vue'//设置
import Personal_data from '@/views/Personal_data.vue'//个人资料
import Vehicle_information from '@/views/Vehicle_information.vue'//车辆信息 
import The_order_details from '@/views/The_order_details.vue'//订单详情 
import StandbyWaybill from '@/views/StandbyWaybill.vue'//待装货运单 
import Login from '@/views/Login.vue'//登录  
import User_agreement from '@/views/User_agreement.vue'//用户协议  

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/vehicle',
			name: 'vehicle',
			component: Vehicle
		},
		{
			path: '/supply_of_goods',
			name: 'supply_of_goods',
			component: Supply_of_goods
		},
		{
			path: '/my',
			name: 'my',
			component: My
		},
		{
			path: '/driverInfo',
			name: 'driverInfo',
			component: DriverInfo
		},
		{
			path: '/my_vehicle',
			name: 'my_vehicle',
			component: My_vehicle
		},
		{
			path: '/addVehicle',
			name: 'addVehicle',
			component: AddVehicle
		},
		{
			path: '/map',
			name: 'map',
			component: Map
		},
		{
			path: '/the_waybill',
			name: 'the_waybill',
			component: The_waybill
		},
		{
			path: '/supply_hy',
			name: 'supply_hy',
			component: Supply_hy
		},
		{
			path: '/order_detail',
			name: 'Order_detail',
			component: Order_detail
		},
		{
			path: '/supply_the_details',
			name: 'Supply_the_details',
			component: Supply_the_details
		},
		{
			path: '/the_shipper_information',
			name: 'The_shipper_information',
			component: The_shipper_information
		},
		{
			path: '/in_transit',
			name: 'In_transit',
			component: In_transit
		},
		{
			path: '/off_the_stocks',
			name: 'Off_the_stocks',
			component: Off_the_stocks
		},
		{
			path: '/remain_to_be_evaluated',
			name: 'Remain_to_be_evaluated',
			component: Remain_to_be_evaluated
		},
		{
			path: '/setting',
			name: 'Setting',
			component: Setting
		},
		{
			path: '/personal_data',
			name: 'Personal_data',
			component: Personal_data
		},
		{
			path: '/vehicle_information',
			name: 'Vehicle_information',
			component: Vehicle_information
		},
		{
			path: '/the_order_details',
			name: 'The_order_details',
			component: The_order_details
		},
		{
			path: '/standbyWaybill',
			name: 'StandbyWaybill',
			component: StandbyWaybill
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/user_agreement',
			name: 'User_agreement',
			component: User_agreement
		},
		{
			path: '*',
			redirect: '/home'
		}
	]
})
