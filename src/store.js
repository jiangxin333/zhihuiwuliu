import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  // tabBar选中的值
	active: 0
  },
  mutations: {
	tabBarNum(state,num) {
		state.active = num;
	}
  },
  actions: {

  }
})
