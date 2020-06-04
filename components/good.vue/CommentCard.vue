<template>
	<view class="c-card">
		<view class="c-user-img"><image :src="comment_data.userId.headImg" alt="" /></view>
		<view class="c-user-info">
			<view class="c-user-name">{{ comment_data.userId.userName }}</view>
			<view class="c-user-comment">{{ comment_data.comment }}</view>
			<view class="c-user-date">{{ comment_data.createTime | forDate }}</view>
		</view>
		<view class="c-user-good"><u-icon class="g-com-icon" name="thumb-up" color="#000000" size="28"></u-icon></view>
	</view>
</template>

<script>
export default {
	props: ['comment_data'],
	data() {
		return {};
	},
	filters: {
		forDate(inputTime) {
			if (!inputTime) {
				return '';
			}
			var date = new Date(inputTime);
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			m = m < 10 ? '0' + m : m;
			var d = date.getDate();
			d = d < 10 ? '0' + d : d;
			var h = date.getHours();
			h = h < 10 ? '0' + h : h;
			var minute = date.getMinutes();
			var second = date.getSeconds();
			minute = minute < 10 ? '0' + minute : minute;
			second = second < 10 ? '0' + second : second;
			return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
		}
	}
};
</script>

<style lang="less">
.c-card {
	display: flex;
	.c-user-img {
		image {
			width: 7vw;
			height: 7vw;
			margin-top: 4vw;
			border-radius: 2vw;
		}
	}
	.c-user-info {
		padding-top: 5vw;
		margin-left: 2vw;
		padding-bottom: 3vw;
		flex: 1;
		border-bottom: 0.02rem solid #fdfbff;
		.c-user-name {
			font-size: 0.8rem;
			color: #000000;
			font-weight: 550;
		}
		.c-user-comment {
			font-size: 0.8rem;
			color: #000000;
			margin-top: 1vw;
		}
		.c-user-date {
			font-size: 0.62rem;
			color: #a3a3a3;
			margin-top: 5vw;
		}
	}
	.c-user-good {
		border-top: 0.03rem solid #ececec;
		.g-com-icon {
			margin-top: 5vw;
			margin-right: 4vw;
		}
	}
}
</style>
