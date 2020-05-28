<template>
	<view class="content">
		
		<u-sticky offset-top="0">
			<view class="searchbox">
				<u-search placeholder="日照香炉生紫烟" v-model="keyword" :clearabled="true" @search="showkey" @custom="showkey"></u-search>
			</view>
		</u-sticky>
		<view class="wrap"><u-swiper :list="list"></u-swiper></view>
		<u-grid :col="5" v-if="catelist">
			<u-grid-item v-for="data in catelist" :key="data._id">
				<!-- <u-icon :name="data.imgPath" :size="46"></u-icon> -->
				<image class="cateimg" :src="data.imgPath"></image>
				<view class="grid-text">{{data.kindName}}</view>
			</u-grid-item>
		</u-grid>
			<product-list :imgdata="imgData"></product-list>
	</view>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
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
			imgData:[],
			keyword:''
		};
	},
	components:{
	ProductList
	},
	onLoad() {
		this.$u.mpShare.title = '天苍苍野茫茫，风水草地现牛羊';
		this.$u.get('https://www.wdf5.com/api/commodity/kind', {}, ).then(res => {
						this.catelist = res.data;
						console.log(res)
					}).catch(err=>{
						console.log(err.msg);
					})
		this.$u.get('https://www.wdf5.com/api/commodity/recommend', {}, ).then(res => {
						this.imgData = res.data;
					}).catch(err=>{
						console.log(err.msg);
					})
	},
	methods: {
		showkey(){
			console.log(this.keyword)
		}
	}
};
</script>

<style lang="scss">
.searchbox{
	padding: 3vw 2vw;
	background-color: #FFFFFF;
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
