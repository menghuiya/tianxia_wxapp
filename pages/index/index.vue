<template>
	<view class="content">
		<u-sticky offset-top="0">
			<view class="searchbox"><u-search placeholder="请输入搜索内容" v-model="keyword" :clearabled="true" @search="showkey" @custom="showkey"></u-search></view>
		</u-sticky>
		<view class="wrap"><u-swiper :list="list"></u-swiper></view>
		<u-grid :col="5" v-if="catelist" :border="false">
			<u-grid-item v-for="data in catelist" :key="data._id" @click="goKind(data)">
				<!-- <u-icon :name="data.imgPath" :size="46"></u-icon> -->
				<image class="cateimg" :src="data.imgPath" @error="defImg"></image>
				<view class="grid-text">{{ data.kindName }}</view>
			</u-grid-item>
		</u-grid>
		<product-list :imgdata="imgData"></product-list>
	</view>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
export default {
	data() {
		return {
			list: [
				{
					image: '/static/swiper/1.png',
					title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
				},
				{
					image: '/static/swiper/2.jpg',
					title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
				},
				{
					image: '/static/swiper/3.jpg',
					title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
				}
			],
			catelist: [],
			imgData: [],
			keyword: '',
			defaultImg: require('@/static/noimg.png')
		};
	},
	components: {
		ProductList
	},
	onLoad() {
		this.$u.mpShare.title = '甜虾二手市场,让您的闲置物品不在无聊';
		this.$u
			.get('https://www.wdf5.com/api/commodity/kind', {})
			.then(res => {
				this.catelist = res.data.data;
			})
			.catch(err => {
				console.log(err.msg);
			});
		this.$u
			.get('https://www.wdf5.com/api/commodity/recommend', {})
			.then(res => {
				this.imgData = res.data.data;
			})
			.catch(err => {
				console.log(err.msg);
			});
	},
	methods: {
		showkey() {
			console.log(this.keyword)
			this.$u.route({
				url: 'pages/search/search',
				params: {
					keyword: this.keyword
				}
			});
		},
		defImg() {
			let img = event.srcElement;
			img.src = this.defaultImg;
			img.onerror = null; //防止闪图
		},
		goKind(data) {
			this.$u.route({
				url: 'pages/category/category',
				params: {
					kind_id: data._id
				}
			});
		}
	}
};
</script>

<style lang="scss">
.searchbox {
	padding: 3vw 2vw;
	background-color: #ffffff;
}
.wrap {
	padding: 20rpx;
}
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $u-type-info;
}
.cateimg {
	width: 55rpx;
	height: 55rpx;
}
</style>
