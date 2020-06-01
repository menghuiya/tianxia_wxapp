<template>
	<view>
		<product-list :imgdata="imgData" v-if="imgData.length > 0"></product-list>
		<u-empty v-if="imgData.length == 0" text="分类商品为空" mode="list"></u-empty>
	</view>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
export default {
	data() {
		return {
			imgData: []
		};
	},
	components: {
		ProductList
	},
	onLoad(option) {
		this.$u.mpShare.title = '天苍苍野茫茫，风水草地现牛羊';
		this.$u
			.get('https://www.wdf5.com/api/commodity/classification/' + option.kind_id, {})
			.then(res => {
				console.log(res.data.data);
				this.imgData = res.data.data;
			})
			.catch(err => {
				console.log(err.msg);
			});
	}
};
</script>

<style lang="less"></style>
