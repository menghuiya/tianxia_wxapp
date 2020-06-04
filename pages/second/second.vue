<template>
	<view>
		<u-sticky offset-top="0">
			<view class="searchbox"><u-search placeholder="请输入关键词" v-model="keyword" :clearabled="true" @search="showkey" @custom="showkey"></u-search></view>
		</u-sticky>
		<product-list :imgdata="imgData"></product-list>
		<release-btn></release-btn>
	</view>
</template>

<script>
import ReleaseBtn from '@/components/ReleaseBtn.vue'
import ProductList from '@/components/ProductList.vue';
export default {
	data() {
		return {
			keyword: '手机',
			imgData: []
		};
	},
	components: {
		ProductList,
		ReleaseBtn
	},
	methods:{
		showkey() {
			console.log(this.keyword)
			this.$u.route({
				url: 'pages/search/search',
				params: {
					keyword: this.keyword
				}
			});
		}
	},
	onLoad() {
		this.$u
			.get('https://www.wdf5.com/api/commodity/recommend', {})
			.then(res => {
				this.imgData = res.data.data;
			})
			.catch(err => {
				console.log(err.msg);
			});
	}
};
</script>

<style lang="less">
.searchbox {
	padding: 3vw 2vw;
	background-color: #ffffff;
}
</style>
