<template>
	<view class="g-user-box">
		<image class="g-user-img" :src="userdata.headImg" alt="" />
		<view class="g-user-info">
			<view class="g-user-name">
				<text>{{userdata.userName}}</text>
				<view class="p-user-very">
					<u-icon name="star-fill" class="good-icon" color="#04a6f4" size="28"></u-icon>
					<text>信用极好</text>
					<u-icon name="integral-fill" class="good-icon" color="#04a6f4" size="28"></u-icon>
				</view>
			</view>
			<view class="g-user-root">5小时前来过 发布于中山</view>
		</view>
		<view @click="goPerson" class="g-user-person">ta的主页</view>
	</view>
</template>

<script>
export default {
	props:['userdata'],
	data() {
		return {};
	},
	methods: {
		goPerson() {
			this.$u.route({
				url: 'pages/userset/userset'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.g-user-box {
	background: #ffffff;
	display: flex;
	padding-bottom: 3vw;
	border-bottom: 0.01rem solid #ebedf0;
	.g-user-img {
		width: 10vw;
		height: 10vw;
	}
	.g-user-info {
		flex: 1;
		margin-left: 2vw;
		.g-user-name {
			font-size: 0.7rem;
			font-weight: 600;
			.p-user-very {
				display: inline-block;
				background: #04a4f418;
				font-size: 0.5rem;
				border-radius: 3vw;
				position: relative;
				top: -0.5vw;
				text {
					vertical-align: middle;
					color: #04a6f4;
					font-weight: 500;
				}
				.good-icon {
					font-weight: 600;
					display: inline-block;
					vertical-align: middle;
					margin-left: 1vw;
				}
			}
		}
		.g-user-root {
			font-size: 0.5rem;
			color: #cdd1d1;
			margin-top: 1vw;
		}
	}
	.g-user-person {
		border: 0.05rem solid #cdd1d1;
		border-radius: 2vw;
		font-size: 0.8rem;
		height: 6vw;
		padding: 0 2vw;
		margin-top: 2vw;
	}
}
</style>
