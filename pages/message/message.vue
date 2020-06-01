<template>
	<view v-if="a">这里是信息哦</view>
</template>

<script>
export default {
	data() {
		return {
			a: false
		};
	},
	onShow() {
		this.a = false;
		if (wx.getStorageSync('userinfo')) {
			uni.hideLoading();
			this.a = true;
		} else {
			uni.showLoading({
				title: '您未登录！'
			});
			setTimeout(() => {
				this.$u.route('/pages/user/login/login');
			}, 1000);
		}
	}
};
</script>

<style lang="scss"></style>
