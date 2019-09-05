<template>
<!-- 已完成运单 -->
  <div class="standbyWaybill">
	<van-nav-bar title="已完成运单" :border="false" left-arrow fixed @click-left="onClickLeft" />
    <div class="content">
      <div class="search">
        <div>
          <van-icon name="search" size="18px" color="#999999"></van-icon>
        </div>
        <input type="text" placeholder="输入起始地或目的地搜索运单">
      </div>
    </div>
    <div class="content_list" v-for="(item,index) in contentList" :key="index">
      <div class="list_box">
        <div class="list_box_title">
          <div class="list_box_title_text">待支付(¥xx元)</div>
          <div class="list_box_title_date">{{item.date}}</div>
        </div>
        <div class="list_box_content">
          <div class="list_box_content_1" @click="toPages('/the_order_details',item.id)">
            <span class="list_box_content_1_start">{{item.leave}}</span>
            <span>→</span>
            <span class="list_box_content_1_end">{{item.destination}}</span>
            <span class="list_box_content_1_price">{{item.price}}</span>
			<div class="city">
				<van-icon name="location" color="#999" size="14"></van-icon>
				<span style="color: #999;font-size: 12Px;position: relative; top: -2px;">&nbsp;&nbsp;武汉</span>
			</div>
          </div>
          <div class="list_box_content_2">
            <span class="list_box_content_2_name">{{item.goodsName}}</span>
            <span>丨</span>
            <span class="list_box_content_2_type">{{item.goodsType}}</span>
          </div>
        </div>
        <div class="list_box_content_deep">
          <div class="list_box_content_deep_left">
            <img src="../assets/img/home/goods.png" alt="">
            <span class="driver_name">货主名字</span>
            <span class="gs_name">货主公司名字</span>
          </div>
		  <van-button type="primary" round color="#f9a825" size="mini" @click="toPages('/the_order_details',item.id)">去评价</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        contentList: [{
          status: 0,
          date: '6-14 16:48',
          leave: '始发地',
          destination: '目的地',
          price: '运费',
          goodsName: '货物名称',
          goodsType: '货物重量/体积',
          deliverTip: ['一装几卸', '是否押回单', '支付方式'],
          distance: '5200KM',
          id: 1
        }, {
          status: 1,
          date: '6-14 16:48',
          leave: '始发地',
          destination: '目的地',
          price: '运费',
          goodsName: '货物名称',
          goodsType: '货物重量/体积',
          deliverTip: ['一装几卸', '是否押回单', '支付方式'],
          distance: '5200KM',
          id: 2
        }, {
          status: 2,
          date: '6-14 16:48',
          leave: '始发地',
          destination: '目的地',
          price: '运费',
          goodsName: '货物名称',
          goodsType: '货物重量/体积',
          deliverTip: ['一装几卸', '是否押回单', '支付方式'],
          distance: '5200KM',
          id: 3
        }, {
          status: 3,
          date: '6-14 16:48',
          leave: '始发地',
          destination: '目的地',
          price: '运费',
          goodsName: '货物名称',
          goodsType: '货物重量/体积',
          deliverTip: ['一装几卸', '是否押回单', '支付方式'],
          distance: '5200KM',
          id: 4
        }]
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      toPages(path) {
        this.$router.push(path)
      },
    },
    created() {
      this.$emit('header', true);
      this.$emit('footer', false);
    },
  }
</script>

<style lang="scss" scoped>
  .standbyWaybill {
    height: auto;
    min-height: 100%;
    background: #f5f5f5;
  }
  .content{
    padding-top: 46Px;
    .search{
      width: 100%;
      background: #ffffff;
      padding:10px 15px;
      position: relative;
	  box-sizing: border-box;
      div{
        position: absolute;
        left: 25px;
        top: 15px;
      }
      input{
        width: 100%;
        height:30px;
        background: #eeeeee;
        border: none;
        border-radius: 50px;
        outline: none;
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 13px;
      }
    }
  }
  .content_list {
    border-radius: 2.5px;
    background: #ffffff;
    height: 158px;
    margin: 15px;
  }

  .list_box_title {
    width: 100%;
    display: table;
    text-align: left;
    border-bottom: 1px solid #eeeeee; /*no*/
  }

  .list_box_title_text {
    float: left;
    padding: 10px;
    font-size: 13px;
    color: #f9a825;
  }

  .list_box_title_date {
    float: right;
    color: gainsboro;
    padding: 10px;
    font-size: 13px;
  }

  .list_box_content {
    width: 100%;
    height: 75px;
  }

  .list_box_content_1 {
    text-align: left;
    padding: 10px 10px 0 10px;
	position: relative;
  }
	.city {
		position: absolute;
		top: 10px;
		right: 12px;
	}
	
  .list_box_content_1_start {
    font-weight: bold;
    font-size: 16px;
  }

  .list_box_content_1_end {
    font-weight: bold;
    font-size: 16px;
  }

  .list_box_content_1_price {
    color: #FF5252;
    font-size: 14px;
    margin-left: 5px;
  }

  .list_box_content_2 {
    color: gainsboro;
    text-align: left;
    padding: 10px 10px 0 10px;
  }

  .list_box_content_2_name {
    color: #666666;
    font-size: 14px;
  }

  .list_box_content_2_type {
    color: #666666;
    font-size: 14px;
  }

  .list_box_content_3 {
    color: grey;
    text-align: left;
    padding: 10px 10px 0 10px;
  }

  .list_box_content_3_tip {
    padding: 2px 5px;
    background: #eeeeee;
    font-size: 13px;
    margin: 0 2.5px;
  }

  .list_box_content_3_cancel {
    float: right;
    font-size: 13px;
    color: #ffffff;
    background: #FF9885;
    padding: 2px 17.5px;
    margin-top: -17.5px;
    margin-right: 5px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }

  .list_box_content_deep {
    border-top: 1px solid #eeeeee; /*no*/
	display: flex;
	justify-content: space-between;
	padding-right: 12px;
  }
.van-button {
	margin-top: 10px;
	height: 20Px;
	line-height: 18Px;
	padding: 0 15px;
}
  .list_box_content_deep_left {
    float: left;
    font-size: 13px;
    color: grey;
    padding: 10px;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      float: left;
    }
    .driver_name{
      font-size: 14px;
      color: #303030;
      float: left;
      margin:5px;
    }
    .gs_name{
      font-size: 14px;
      color: #999999;
      float: left;
      margin:5px;
    }
  }

  .list_box_content_deep_left span {
    color: #666666;
  }

  .list_box_content_deep_right {
    float: right;
    font-size: 13px;
    padding: 10px;
    color: #F9A825;
  }
</style>
