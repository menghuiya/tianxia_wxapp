<template>
	<view class="g-comment-box">
	    <view class="g-comment-title">全部留言 · {{commentdata.length}}</view>
	    <comment-card
	      v-for="(item, index) in commentdata"
	      :comment_data="item"
	      :key="index"
	    ></comment-card>
	  </view>
</template>

<script>
	import CommentCard from './CommentCard';
	export default {
		props:['commentdata'],
		data() {
			return {
				
			};
		},
		components:{
			CommentCard
		}
	}
</script>

<style lang="less">
.g-comment-box {
  padding: 0 4vw;
  margin-top: 3vw;
  background: #ffffff;
  .g-comment-title {
    font-size: 0.8rem;
    font-weight: 600;
    padding-top: 3vw;
  }
}
</style>
