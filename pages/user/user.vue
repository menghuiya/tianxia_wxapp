<template>
	<view v-if="userinfo && islogin">
		<image class="user-poster" src="@/static/user/user-bg.png"></image>
		<view class="user-info">
			<image class="user-headimg" :src="userinfo.headImg"></image>
			<view class="user-name">{{ userinfo.userName }}</view>
		</view>
		<view class="user-action">
			<u-grid :col="4" :border="false">
				<u-grid-item>
					<u-icon name="order" :size="46" color="#F4EA29"></u-icon>
					<view class="grid-text">发布的{{ userinfo.totalCount }}</view>
				</u-grid-item>
				<u-grid-item @click="goSell">
					<u-icon name="rmb-circle-fill" :size="46" color="#F9AB10"></u-icon>
					<view class="grid-text">卖出的{{ userinfo.sellCount }}</view>
				</u-grid-item>
				<u-grid-item @click="goBuy">
					<u-icon name="bag-fill" :size="46" color="#E0620D"></u-icon>
					<view class="grid-text">买到的{{ userinfo.buyCount }}</view>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="shopping-cart-fill" :size="46" color="#0B74EC"></u-icon>
					<view class="grid-text">租到的</view>
				</u-grid-item>
			</u-grid>
			<u-cell-group>
				<u-cell-item icon="red-packet-fill" title="我的余额" @click="goBalance"></u-cell-item>
				<u-cell-item icon="account-fill" title="个人主页" @click="goPerson"></u-cell-item>
				<u-cell-item icon="setting-fill" title="资料设置" @click="goSet"></u-cell-item>
				<u-cell-item icon="integral-fill" title="会员等级" value="暂未开放"></u-cell-item>
				<u-cell-item icon="phone-fill" title="联系我们" @click="openPhone"></u-cell-item>
				<u-button type="error" :ripple="true" ripple-bg-color="#909399" @click="logout">退出登录</u-button>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userinfo: null,
			islogin: false,
			header: {
				'content-type': 'application/json;charset=UTF-8',
				Cookie: wx.getStorageSync('usercookie') //读取cookie
			},
			user_id: ''
		};
	},
	onShow() {
		this.islogin = false;
		if (wx.getStorageSync('userinfo')) {
			let userdata = JSON.parse(wx.getStorageSync('userinfo'));
			this.$u.get('https://www.wdf5.com/api/user/profile/' + userdata.id, {}).then(res => {
				this.userinfo = res.data.data;
				console.log(res);
			});
			this.$u.mpShare.title = userdata.name + '的甜虾个人中心';
			this.islogin = true;
		} else {
			uni.showLoading({
				title: '您未登录！'
			});
			setTimeout(() => {
				this.$u.route('/pages/user/login/login');
				uni.hideLoading();
			}, 1000);
		}
	},
	onLoad() {},
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
				url: 'pages/user/login/login'
			});
		},
		goSet() {
			this.$u.route({
				url: 'pages/user/userset/userset'
			});
		},
		goSell() {
			this.$u.route({
				url: 'pages/good/sellorder/sellorder'
			});
		},
		goBuy() {
			this.$u.route({
				url: 'pages/good/buyorder/buyorder'
			});
		},
		goBalance() {
			this.$u.route({
				url: 'pages/user/balance/balance'
			});
		},
		goPerson() {
			this.$u.route({
				url: 'pages/user/personal/personal',
				params: {
					user_id: JSON.parse(wx.getStorageSync('userinfo')).id
				}
			});
		},
		logout() {
			uni.showLoading({
				title: '正在退出'
			});
			this.$u.get('https://www.wdf5.com/api/user/logout', {}, this.header).then(res => {
				wx.removeStorageSync('userinfo');
				uni.hideLoading();
				this.$u.route({
					url: '/pages/index/index',
					type: 'switchTab'
				});
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
