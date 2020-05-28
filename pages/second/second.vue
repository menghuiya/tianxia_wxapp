<template>
	<view>
		<u-sticky offset-top="0">
			<view class="searchbox"><u-search placeholder="日照香炉生紫烟" v-model="keyword" :clearabled="true"></u-search></view>
		</u-sticky>
		<product-list :imgdata="imgData"></product-list>
	</view>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
export default {
	data() {
		return {
			keyword: '遥看瀑布挂前川',
			imgData: [
				{
					price: 999,
					description: '听说你在那边过得很好呀,我想去看看你呢',
					_id: '5ec25a924dc0902f3cf18fd8',
					imgPath: ['http://test.wdf5.com/public/uploadImgs/upload_1588911872726.jpg', 'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg'],
					user: {
						userName: '梦回吖',
						headImg:
							'https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/public/5.22.2020/B80606E6-2EDB-4AFB-B940-F4F6F5D8911Ab5ac18bda3af74a64865b6c33fe0e2b23b266b8a4685cf1266123dd39bbe6ee20981c70c61354c0d8488faf67dd6d98c78e96b6455684bfeee57e3133ca93558.gif'
					}
				},
				{
					price: 999,
					description: '听说你在那边过得很好呀,我想去看看你呢',
					_id: '5ec25a924dc0902f3cf18fd8',
					imgPath: ['http://test.wdf5.com/public/uploadImgs/upload_1588911872726.jpg', 'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg'],
					user: {
						userName: '梦回吖',
						headImg:
							'https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/public/5.22.2020/B80606E6-2EDB-4AFB-B940-F4F6F5D8911Ab5ac18bda3af74a64865b6c33fe0e2b23b266b8a4685cf1266123dd39bbe6ee20981c70c61354c0d8488faf67dd6d98c78e96b6455684bfeee57e3133ca93558.gif'
					}
				},
				{
					price: 999,
					description: '听说你在那边过得很好呀,我想去看看你呢',
					_id: '5ec25a924dc0902f3cf18fd8',
					imgPath: ['http://test.wdf5.com/public/uploadImgs/upload_1588911872726.jpg', 'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg'],
					user: {
						userName: '梦回吖',
						headImg:
							'https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/public/5.22.2020/B80606E6-2EDB-4AFB-B940-F4F6F5D8911Ab5ac18bda3af74a64865b6c33fe0e2b23b266b8a4685cf1266123dd39bbe6ee20981c70c61354c0d8488faf67dd6d98c78e96b6455684bfeee57e3133ca93558.gif'
					}
				}
			]
		};
	},
	components: {
		ProductList
	}
};
</script>

<style lang="less">
.searchbox {
	padding: 3vw 2vw;
	background-color: #ffffff;
}
</style>
