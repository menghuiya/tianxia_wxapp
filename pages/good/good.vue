<template>
	<view class="boxs"  v-if="gooddata">
		<view  class="g-box">
			<good-top-user :userdata="gooddata.user">
			</good-top-user>
			<good-price :price="gooddata.price" :isSale="gooddata.isSale"></good-price>
			<good-content :des="gooddata.description" :imgPath="gooddata.imgPath"></good-content>
		</view>
		<good-bottom-user :userdata="gooddata.user"></good-bottom-user>
		<good-comment-list :commentdata="gooddata.comment"></good-comment-list>
		<good-action v-if="isShowAction" :good_id="gooddata._id" class="good-b-action"></good-action>
	</view>
	
</template>

<script>
	import GoodTopUser from '@/components/good.vue/GoodTopUser.vue'
	import GoodPrice from '@/components/good.vue/GoodPrice.vue'
	import GoodContent from '@/components/good.vue/GoodContent.vue'
	import GoodBottomUser from '@/components/good.vue/GoodBottomUser.vue'
	import GoodCommentList from '@/components/good.vue/GoodCommentList.vue'
	import GoodAction from '@/components/good.vue/GoodAction.vue'
	export default {
		data() {
			return {
				gooddata:null
			};
		},
		components:{
			GoodTopUser,
			GoodPrice,
			GoodContent,
			GoodBottomUser,
			GoodCommentList,
			GoodAction
		},
		computed:{
			isShowAction(){
				if(JSON.parse(wx.getStorageSync('userinfo')).id===this.gooddata.user._id||this.gooddata.isSale){
					return false
				}else{
					return true
				}
			}
		},
		onLoad(option) {
			uni.showLoading({
				title: '正在加载'
			});
			this.$u.get('https://www.wdf5.com/api/commodity/info/'+option.id,{}).then(res=>{
				this.gooddata=res.data.data
				uni.hideLoading();
			})
		}
	}
</script>

<style lang="less" scoped>
.boxs {
  padding-bottom: 15vw;
  .g-box {
    padding: 3vw 4vw;
    background: #ffffff;
  }
	.good-b-action{
		position:fixed;
		bottom:0;
		left:0;
		width: 100%;
	}
}
</style>
