<template>
	<view>
		<image class="user-poster" src="@/static/user/user-bg.png"></image>
		<view class="user-info">
			<image class="user-headimg" src="@/static/user/default.jpg"></image>
			<view class="user-name">梦回吖</view>
		</view>
		<view class="user-action">
			<u-grid :col="4" :border="false">
				<u-grid-item>
					<u-icon name="order" :size="46" color="#F4EA29"></u-icon>
					<view class="grid-text">发布的</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="rmb-circle-fill" :size="46" color="#F9AB10"></u-icon>
					<view class="grid-text">卖出的</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="bag-fill" :size="46" color="#E0620D"></u-icon>
					<view class="grid-text">买到的</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="shopping-cart-fill" :size="46" color="#0B74EC"></u-icon>
					<view class="grid-text">租到的</view>
				</u-grid-item>
			</u-grid>
			<u-cell-group>
				<u-cell-item icon="red-packet-fill" title="我的余额"></u-cell-item>
				<u-cell-item icon="account-fill" title="个人主页"></u-cell-item>
				<u-cell-item icon="setting-fill" title="资料设置" @click="goSet"></u-cell-item>
				<u-cell-item icon="integral-fill" title="会员等级" value="暂未开放"></u-cell-item>
				<u-cell-item icon="phone-fill" title="联系我们" @click.prevent="openPhone"></u-cell-item>
				<u-cell-item icon="phone-fill" title="测试登录" @click.prevent="goLogin"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
		this.$u.mpShare.title = '天苍苍野茫茫，风水草地现牛羊';
	},
	methods: {
		openPhone() {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: '10086',
				// 成功回调
				success: res => {
					console.log('调用成功!');
				},
				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		},
		goLogin() {
			this.$u.route({
				url: 'pages/login/login'
			});
		},
		goSet() {
			this.$u.route({
				url: 'pages/userset/userset'
			});
		}
	}
};
</script>

<style lang="less">
.user-poster {
	width: 100%;
	height: 50vw;
	display: block;
	position: absolute;
	z-index: -1;
}
.user-info {
	text-align: center;
	.user-headimg {
		width: 20vw;
		height: 20vw;
		border-radius: 10vw;
		margin-top: 15vw;
	}
	.user-name {
		font-size: 32rpx;
		font-weight: 600;
	}
}
.user-action {
	margin: 3vw 2vw;
	padding: 3vw 0;
	background-color: #ffffff;
	border-radius: 2vw;
}
</style>
