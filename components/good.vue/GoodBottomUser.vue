<template>
	<view class="p-user-info-box">
	      <view class="p-user-info-left">
	        <view class="p-user-name">{{userdata.userName}}</view>
	        <view class="van-multi-ellipsis--l2 p-user-msg">
	          该用户暂无设置个人信息分享
	        </view>
	        <view class="p-user-very-box">
						<u-icon class="good-b-icon" name="coupon-fill" color="#8c4acf" size="28"></u-icon>
	          <text>实名认证已通过</text>
	          <u-icon class="good-b-icon" name="integral-fill" color="#8c4acf" size="28" ></u-icon>
	          <text>实名认证已通过</text>
	        </view>
	      </view>
	      <view class="p-user-info-right">
	        <image class="user-b-img" :src="userdata.headImg" alt="" />
	      </view>
	    </view>
</template>

<script>
	export default {
		props:['userdata'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.p-user-info-box {
  padding: 0 4vw;
  margin-top: 3vw;
  background: #ffffff;
  display: flex;
  .p-user-info-left {
    flex: 1;
    .p-user-name {
      font-size: 0.9rem;
      font-weight: 600;
      margin-top: 4vw;
    }
    .p-user-msg {
      font-size: 0.65rem;
      margin-top: 2vw;
    }
    .p-user-very-box {
      font-size: 0.68rem;
      border-radius: 3vw;
      margin-top: 2vw;
      text {
        margin-left: 1vw;
        color: #828283;
        font-weight: 500;
      }
      .good-b-icon {
        color: #8c4acf;
        font-weight: 600;
        display: inline-block;
        margin-left: 6rpx;
      }
    }
  }
  .p-user-info-right {
    .user-b-img {
      width: 15vw;
      height: 15vw;
      margin: 6vw 0 6vw 6vw;
      border-radius: 2vw;
    }
  }
}
</style>
