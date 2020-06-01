<template>
	<view class="boxs">
		<view  class="g-box" v-if="gooddata">
			<good-top-user :userdata="gooddata.user">
			</good-top-user>
			<good-price :price="gooddata.price" :isSale="gooddata.isSale"></good-price>
			<good-content :des="gooddata.description" :imgPath="gooddata.imgPath"></good-content>
		</view>
		<good-bottom-user :userdata="gooddata.user"></good-bottom-user>
		<good-comment-list></good-comment-list>
	</view>
	
</template>

<script>
	import GoodTopUser from '@/components/good.vue/GoodTopUser.vue'
	import GoodPrice from '@/components/good.vue/GoodPrice.vue'
	import GoodContent from '@/components/good.vue/GoodContent.vue'
	import GoodBottomUser from '@/components/good.vue/GoodBottomUser.vue'
	import GoodCommentList from '@/components/good.vue/GoodCommentList.vue'
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
			GoodCommentList
		},
		onLoad(option) {
			console.log(option.id)
			this.$u.get('https://www.wdf5.com/api/commodity/info/'+option.id,{}).then(res=>{
				this.gooddata=res.data.data
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
}
</style>
