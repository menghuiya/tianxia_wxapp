<template>
	<view>
		<view class="b_box">
			<u-icon class="banlance-icon" name="rmb-circle-fill" color="#F6C543" size="100"></u-icon>
			<view class="b_may_title">我的余额</view>
			<view class="b_my_box">
				<view class="b_my_icon">¥</view>
				<view class="b_my_num">{{balance}}</view>
			</view>
			<view class="b_btn_box">
				<u-button class="banlance-btn" type="success" @click="showPopup">充值</u-button>
				<u-button class="banlance-btn" type="default" @click="withdraw">提现</u-button>
				<u-popup class="balance-pop" v-model="show" mode="center" length="auto" border-radius="12">
					<u-cell-group class="b-msg-box">
						<u-field v-model="amount" label="充值金额:"></u-field>
						<u-field v-model="verifycode" label="验证码:" placeholder="请填写验证码" :error-message="errorMessage">
							<image class="verifyimg" :src="verifyimg" slot="button" @click="recondimg"></image>
						</u-field>
					</u-cell-group>
					<u-button class="b-post-btn" @click="recharge" type="primary">提交</u-button>
				</u-popup>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			header: {
				'content-type': 'application/json;charset=UTF-8',
				Cookie: wx.getStorageSync('usercookie') //读取cookie
			},
			show: false,
			balance:0,
			amount: 1,
			verifyimg: '',
			verifycodes: '',
			verifycode: '',
			errorMessage: '',
			user_id: JSON.parse(wx.getStorageSync('userinfo')).id
		};
	},
	methods: {
		showPopup() {
			this.show = true;
			this.recondimg();
		},
		recondimg() {
			this.$u.get('https://www.wdf5.com/api/user/captcha', {}).then(res => {
				this.verifyimg = res.data.data.imgPath;
				this.verifycodes = res.data.data.text;
			});
		},
		recharge() {
			if (this.verifycode == '') {
				this.errorMessage = '请输入验证码';
				return;
			}
			if (this.verifycode.toUpperCase() !== this.verifycodes.toUpperCase()) {
				this.errorMessage = '验证码错误';
				return;
			}
			uni.showLoading({
				title: '充值中~'
			});
			this.$u.post('https://www.wdf5.com/api/user/balance/',{
				amount: this.amount,
				userId: this.user_id,
			}).then(res=>{
				uni.hideLoading();
				this.$u.route({
					url: 'pages/user/balance/balance',
					type: 'redirectTo'
				});
			})
		}
	},
	onLoad() {
		this.$u.get('https://www.wdf5.com/api/user/balance/'+this.user_id,{},this.header).then(res=>{
			this.balance = res.data.data.balance.toFixed(2);
		})
	}
};
</script>

<style lang="less">
.b_box {
	text-align: center;
	padding: 5vw;
	.banlance-icon {
		display: block;
		margin-top: 10vw;
	}
	.b_may_title {
		margin-top: 6vw;
		font-size: 32rpx;
	}
	.b_my_box {
		margin-top: 5vw;
		view {
			display: inline-block;
			font-weight: 600;
		}
		.b_my_icon {
			font-size: 1.3rem;
		}
		.b_my_num {
			font-size: 2rem;
			margin-left: 2vw;
		}
	}
	.b_btn_box {
		margin-top: 10vh;
		.banlance-btn {
			display: block;
			margin: 5vw auto;
			width: 50vw;
			height: 10vw;
		}
		.balance-pop {
			text-align: left;

			border-radius: 1vw;
			.b-msg-box {
				display: block;
				padding: 3vw;
			}
			.recharge {
				height: 30vw;
			}
			.verifyimg {
				width: 20vw;
				height: 8vw;
				background: lemonchiffon;
			}
		}
		.b-post-btn {
			display: block;
			width: 50vw;
			margin: 5vw auto;
		}
	}
}
</style>
