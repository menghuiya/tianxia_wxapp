<template>
	<view class="c-card">
	    <view class="c-user-img">
	      <img :src="e_data.user.headImg" alt="" />
	    </view>
	    <view class="c-user-info">
	      <view class="c-user-name">
	        {{e_data.user.userName}}
	      </view>
	      <view class="c-user-comment">{{e_data.evaluate||'暂未评价'}}</view>
	      <view class="c-user-date">{{ new Date().toLocaleString() }}</view>
	    </view>
	    <view class="c-user-good">
				<u-icon class="g-com-icon" name="thumb-up" color="#000000" size="28"></u-icon>
	    </view>
	  </view>
</template>

<script>
	export default {
		props:['e_data'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.c-card {
  display: flex;
	padding: 0 3vw;
	background-color: #FFFFFF;
  .c-user-img {
    img {
      width: 7vw;
      height: 7vw;
      margin-top: 4vw;
      border-radius: 2vw;
    }
  }
  .c-user-info {
    padding-top: 5vw;
    margin-left: 2vw;
    padding-bottom: 3vw;
    flex: 1;
    border-bottom: 0.02rem solid #fdfbff;
    .c-user-name {
      font-size: 0.8rem;
      color: #000000;
      font-weight: 550;
    }
    .c-user-comment {
      font-size: 0.8rem;
      color: #000000;
      margin-top: 1vw;
    }
    .c-user-date {
      font-size: 0.62rem;
      color: #a3a3a3;
      margin-top: 5vw;
    }
  }
  .c-user-good {
    border-top: 0.03rem solid #ececec;
    .g-com-icon {
      margin-top: 5vw;
      margin-right: 4vw;
    }
  }
}
</style>
