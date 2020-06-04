<template>
	<view v-if="imgData">
		<product-list :imgdata="imgData" v-if="imgData.length > 0"></product-list>
		<u-empty v-if="imgData.length == 0" text="分类商品为空" mode="list"></u-empty>
	</view>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
export default {
	data() {
		return {
			imgData: null
		};
	},
	components: {
		ProductList
	},
	onLoad(option) {
		this.$u.mpShare.title = '甜虾分类商品,欢迎来选';
		uni.showLoading({
			title: '正在加载'
		});
		this.$u
			.get('https://www.wdf5.com/api/commodity/classification/' + option.kind_id, {})
			.then(res => {
				this.imgData = res.data.data;
				uni.hideLoading();
			})
			.catch(err => {
				console.log(err.msg);
			});
	}
};
</script>

<style lang="less"></style>
