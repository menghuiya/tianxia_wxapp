<template>
	<view class="wrap">
		<view class="pre-box" v-if="!showUploadList">
			<view class="pre-item" v-for="(item, index) in uUpload.lists" :key="index">
				<image class="pre-item-image" :src="item.url" mode="aspectFill"></image>
				<view class="u-delete-icon" @tap.stop="uUpload.deleteItem(index)">
					<u-icon name="close" size="20" color="#ffffff"></u-icon>
				</view>
				<u-line-progress v-if="item.progress > 0 && !item.error" :show-percent="false" height="16" class="u-progress"
				 :percent="item.progress"></u-line-progress>
			</view>
		</view>
		<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action"> 
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<u-icon name="photo" size="60" :color="$u.color['lightColor']"></u-icon>
			</view>
		</u-upload>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: 'http://192.168.100.17/index.php/index/index/upload', // 演示地址
				showUploadList: false, 
				uUpload: {}, // 组件实例
			}
		},
		// 只有onReady生命周期才能调用refs操作组件
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.uUpload = this.$refs.uUpload;
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.wrap {
		padding: 24rpx;
	}
	
	.slot-btn {
		width: 341rpx;
		height: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}

	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}

	.pre-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.pre-item {
		flex: 0 0 48.5%;
		border-radius: 10rpx;
		height: 140rpx;
		overflow: hidden;
		position: relative;
		margin-bottom: 20rpx;
	}

	.u-progress {
		position: absolute;
		bottom: 10rpx;
		left: 8rpx;
		right: 8rpx;
		z-index: 9;
		width: auto;
	}

	.pre-item-image {
		width: 100%;
		height: 140rpx;
	}

	.u-delete-icon {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		z-index: 10;
		background-color: $u-type-error;
		border-radius: 100rpx;
		width: 44rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>