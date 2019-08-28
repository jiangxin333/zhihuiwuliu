import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vehicle from './views/Vehicle'
import Supply_of_goods from './views/supply_of_goods.vue'
import My from './views/My.vue'
import DriverInfo from './views/driverInfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'home',
      redirect: '/home'
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
	}
  ]
})
