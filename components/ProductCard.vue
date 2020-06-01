<template>
	<view class="p-card">
		<view class="p-card-main" @click="goGoodInfo">
			<image :src="imginfo.imgPath[0]" alt="" class="p-img" />
			<view class="u-line-2 shoptitle">{{ imginfo.description }}</view>
			<view class="p-price-box">
				<view class="p-price">
					<span>¥</span>
					{{ imginfo.price }}
				</view>
				<view class="p-want">{{ Math.floor(Math.random() * 100) }}人想要</view>
			</view>
			<view class="p-user">
				<image :src="imginfo.user.headImg" class="p-user-img" />
				<view class="p-user-name">{{ imginfo.user.userName }}</view>
				<view class="p-user-tag"><u-tag text="超级卖家" mode="plain" size="mini" /></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['imginfo'],
	data() {
		return {};
	},
	methods: {
		goGoodInfo() {
			this.$u.route({
				url: 'pages/good/good',
				params: {
					id: this.imginfo._id
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.p-card {
	color: #303133;
	-webkit-transition: 0.3s;
	transition: 0.3s;
	// height: 80vw;
	.p-card-main {
		// margin: 1vw;
		margin-bottom: 1.5vw;
		border-radius: 2vw;
		background-color: #fff;
		.p-img {
			width: 100%;
			max-height: 50vw;
			min-height: 30vw;
			// height: 50vw;
			border-top-left-radius: 2vw;
			border-top-right-radius: 2vw;
		}
		.shoptitle {
			margin-left: 2vw;
			margin-right: 1vw;
			font-size: 25rpx;
			// font-weight: 600;
			color: black;
		}
		.p-price-box {
			margin-top: 3vw;
			margin-left: 2vw;
			display: flex;
			.p-price {
				color: red;
				font-size: 35rpx;
				font-weight: 700;
				flex: 1;
				span {
					font-size: 25rpx;
					display: inline-block;
					margin-left: 1vw;
					margin-right: 2vw;
				}
			}
			.p-want {
				font-size: 25rpx;
				color: #89878a;
				margin-right: 2vw;
			}
		}
		.p-user {
			display: flex;
			height: 8vw;
			margin-left: 2vw;
			.p-user-img {
				width: 6vw;
				height: 6vw;
				margin-top: 1vw;
				border-radius: 3vw;
			}
			.p-user-name {
				font-size: 25rpx;
				color: #9d99a1;
				line-height: 8vw;
				margin-left: 2vw;
				flex: 1;
			}
			.p-user-tag {
				margin-right: 2vw;
				line-height: 8vw;
			}
		}
	}
}
</style>
