<template>
	<view class="p-content-box">
	    <view class="p-c-text">
	      {{des}}
	    </view>
	    <view class="p-c-img">
	      <image
	        :src="item"
	        alt=""
	        v-for="(item, index) in imgPath"
	        :key="index"
					@click="imgClick(index)"
					class="good-img"
					mode="widthFix"
	      />
	    </view>
	    <view class="p-c-data">
	      <view class="p-c-data-dan">
					<u-icon class="good_c_icon" name="zhifubao-circle-fill" color="#00a2ff" size="30"></u-icon>
	        <text>担保交易</text>
	      </view>
	      <text class="p-c-data-want">5人想要</text>·
	      <text class="p-c-data-views">浏览390</text>
	    </view>
	  </view>
</template>

<script>
	export default {
		props:['des','imgPath'],
		data() {
			return {
			
			};
		},
		methods:{
			imgClick(index){
				uni.previewImage({  
				    urls: this.imgPath,
				    current: index 
				})
			}
		}
	}
</script>

<style lang="less">
.p-content-box {
  margin-top: 5vw;
  .p-c-text {
    font-size: 1rem;
  }
  .p-c-img {
    border-radius: 16rpx !important;
    margin: 2vw 0;
    overflow: hidden;
		transform: rotate(0deg);
    .good-img {
      width: 100%;
			vertical-align: middle;
    }
  }
  .p-c-data {
    display: flex;
    font-size: 0.6rem;
    color: #c4c4c4;
    .p-c-data-dan {
      color: #00a2ff;
      margin-left: 1vw;
      flex: 1;
      .good_c_icon {
        margin-right: 1vw;
				display: inline-block;
      }
    }
    .p-c-data-want {
      margin-right: 1vw;
    }
    .p-c-data-views {
      margin-left: 1vw;
      margin-right: 1vw;
    }
  }
}
</style>
