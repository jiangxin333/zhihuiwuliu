<template>
  <div class="home">
	  {{msg}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
	  return {
		  msg: 'home'
	  }
  },
  activated() {
  	this.$store.commit('tabBarNum',0)
  }
}
</script>

<style lang="scss" scoped>
	
</style>