<template>
	<!-- 添加车辆 -->
	<div class="addVehicle">
		<van-nav-bar title="司机资料" :border="false" left-arrow fixed @click-left="onClickLeft" />
		<div class="content-box">
			<!-- 流程 -->
			<div class="flow">
				<div>
					<img src="../assets/img/my/ywc.png" alt="">
					<p style="color: #f9a825;">提交资料</p>
				</div>
				<p>
					<span style="color: #f9a825;">---</span>
					<span>---</span>
				</p>
				<div>
					<img src="../assets/img/my/ywc.png" alt="">
					<p>平台审核</p>
				</div>
				<p>
					<span>---</span>
					<span>---</span>
				</p>
				<div>
					<img src="../assets/img/my/ywc.png" alt="">
					<p>审核通过</p>
				</div>
				<p>
					<span>---</span>
					<span>---</span>
				</p>
				<div>
					<img src="../assets/img/my/ywc.png" alt="">
					<p>认证通过</p>
				</div>
			</div>
		</div>
		<!-- 输入框控件 -->
		<div class="field">
			<van-cell-group>
			  <van-field label="姓名" required v-model="userName" placeholder="输入你的用户名" />
			  <van-field label="车长" required v-model="VehicleLengrh" placeholder="输入你的车长" />
			  <van-field label="车型" required v-model="VehicleType" placeholder="输入你的车型" />
			  <van-field label="驾驶证" right-icon="photograph" required v-model="checkName" placeholder="驾驶证名字必须与姓名一样" />
			</van-cell-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '增加车辆页面',
				userName: '',
				VehicleLengrh: '',
				VehicleType: '',
				checkName: ''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-box {
		margin-top: 46Px;
		background-color: #ffffff;
		padding: 30px 0 12px;
	}
	.field {
		margin-top: 20px;
	}
	.flow {
		display: flex;
		align-items: center;
		color: #a6a6a6;
		justify-content: space-around;
		div {
			text-align: center;
			img {
				width: 25PX;
				height: 25PX;
				margin-bottom: 5px;
			}
			p {
				margin: 5px;
			}
		}
		span {
			position: relative;
			top: -15PX;
		}
	}
</style>
