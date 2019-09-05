<template>
	<!-- 登录页面 -->
	<div class="login" :style="bgStyle">
		<div class="header-img">
			<img src="../assets/img/logo.png" alt="">
		</div>
		<div class="field-box">
			<p>手机号</p>
			<input type="number" v-model="phone">
			<p>密码</p>
			<input :type="typeCahnge" v-model="password">
		</div>
		<van-button type="primary" color="#F9A825" size="large" @click="goLogin">登录</van-button>
		<p class="footer-text">登录即代表你已阅读并同意<router-link to="/user_agreement" tag="span">《什么什么协议》</router-link></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bgStyle: {
					"height": window.innerHeight + 'px',
					"width": '100%',
					"backgroundColor": '#ffffff',
					"position": 'relative'
				},
				typeCahnge: 'password',
				phone: '',
				password: '',
				isPassword: false
			}
		},
		methods: {
			goLogin() {
				this.$http.post('bpi/user/Clogin',{
					  "deviceType": "app",
					  "passWord": this.password,
					  "phone": this.phone
				})
				.then(({data}) => {
					console.log(data)
					this.$router.replace('/home')
				})
			}
		},
		created() {
		}
	}
</script>

<style lang="scss" scoped>
	.van-button {
		width: 80%;
		margin: 0 10%;
		margin-top: 60px;
		height: 40Px;
		line-height: 40Px;
		border-radius: 20Px;
	}
	.header-img {
		text-align: center;
		padding: 80px 0 40px;
		img {
			width: 120px;
			height: 120px;
		}
	}
	.field-box {
		padding: 0 40px;
		p {
			color: #999999;
			font-size: 14Px;
			margin: 16px 0 10px;
		}
		input {
			width: 100%;
			padding-bottom: 6px;
			border-bottom: 1px solid #DDDDDD;
			font-size: 14Px;
		}
	}
	.footer-text {
		position: absolute;
		width: 100%;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		color: #999999;
		font-size: 12Px;
		text-align: center;
		span {
			color: #F9A825;
		}
	}
</style>
