<template>
	<view>
		<u-sticky offset-top="0">
			<view class="searchbox"><u-search placeholder="日照香炉生紫烟" v-model="keyword" :clearabled="true" @search="showkey" @custom="showkey"></u-search></view>
		</u-sticky>
		<product-list :imgdata="imgData" v-if="imgData.length > 0"></product-list>
		<u-empty v-if="imgData.length == 0" text="搜索商品为空" mode="search" margin-top="200rpx"></u-empty>
	</view>
</template>

<script>
	import ProductList from '@/components/ProductList.vue';
	export default {
		data() {
			return {
				imgData: [],
				keyword:'手机'
			};
		},
		components:{
			ProductList
		},
		methods:{
			showkey() {
				this.$u
					.get('https://www.wdf5.com/api/commodity/search/' + this.keyword, {})
					.then(res => {
						console.log(res.data.data);
						this.imgData = res.data.data;
					})
					.catch(err => {
						console.log(err.msg);
					});
			},
		},
		onLoad(option) {
			this.keyword=option.keyword
			this.showkey()
		}
	}
</script>

<style lang="less">
.searchbox {
	padding: 3vw 2vw;
	background-color: #ffffff;
}
</style>
