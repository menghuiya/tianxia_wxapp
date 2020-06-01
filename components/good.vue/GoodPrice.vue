<template>
	<view>
		<view class="p-price-box" v-if="!isSale">
		      <view class="p-price"><text>¥</text>{{price.toFixed(2)}}</view>
		      <u-tag text="包邮" class="goodtag"  type="success" size="mini"/>
		      <u-tag text="不讲价" class="goodtag" mode="light" size="mini"/>
		    </view>
		    <view class="issale" v-if="isSale">
		      该商品已出售!
		    </view>
	</view>
</template>

<script>
	export default {
		props:['price','isSale'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.p-price-box {
  margin-top: 4vw;
  display: flex;
  .p-price {
    color: red;
    font-size: 1.2rem;
    font-weight: 700;
    text {
      font-size: 0.5rem;
      display: inline-block;
    }
		
  }
	.goodtag{
		height: 40rpx;
		margin: auto 1vw;
	}
  
}
.issale {
  background: #18b566;
  color: #ffffff;
  text-align: center;
  border-radius: 1vw;
}
</style>
