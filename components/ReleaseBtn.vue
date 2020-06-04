<template>
  <div tag="div" class="r-btn-box" @click="btnClick">
    <u-icon class="release-iocn" name="plus" color="#2979ff" size="64"></u-icon>
  </div>
</template>

<script>
export default {
  methods: {
    btnClick() {
			if(wx.getStorageSync('userinfo')){
				this.$u.route({
					url: 'pages/edit/edit',
				});
			}else{
				uni.showLoading({
					title: '您未登录！'
				});
				setTimeout(() => {
					uni.hideLoading();
					this.$u.route('/pages/user/login/login');
				}, 1000);
			}
      
    },
  },
};
</script>

<style lang="less" scoped>
.r-btn-box {
  height: 120rpx;
  width: 120rpx;
  background: #ffe60f;
  border-radius: 60rpx;
  position: fixed;
  z-index: 9999;
  right: 5vw;
  bottom: 30vw;
  text-align: center;
  box-shadow: 0.4vw 0.4vw 0.4vw #888888;
  opacity: 0.85;
  .release-iocn {
    display: block;
		line-height: 120rpx;
    font-weight: 700;
  }
}
</style>
