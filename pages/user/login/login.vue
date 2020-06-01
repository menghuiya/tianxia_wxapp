<template>
	<view>
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="content">
			<image class="loginlogo" src="@/static/logo.png"></image>
			<u-cell-group>
				<u-field v-model="p.userName" label="账号" placeholder="请填写账号"></u-field>
				<u-field v-model="p.password" label="密码" placeholder="请填写密码" type="password"></u-field>
			</u-cell-group>
			<view class="login-xy">
				用户登录表示已同意
				<text class="login-xytitle">《用户服务协议》</text>
				和
				<text class="login-xytitle">《隐私权政策》</text>
			</view>
			<view class="loginbtn"><u-button type="primary" @click="login">开始登录</u-button></view>
			<view class="loginbtn"><u-button type="primary" @click="logintest">测试登录</u-button></view>
			<view class="login-nocount">
				没有账号?
				<navigator url="../register/register">点击注册</navigator>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
import md5Libs from 'uview-ui/libs/function/md5';
export default {
	data() {
		return {
			background: {
				backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
			},
			p: {
				userName: '',
				password: ''
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'Cookie': wx.getStorageSync("usercookie")//读取cookie
			}
		};
	},
	methods: {
		login() {
			if (this.p.userName == '' || this.p.password == '') {
				this.$refs.uTips.show({
					title: '请输入账号或者密码',
					type: 'error',
					duration: '2300'
				});
				return;
			}
			this.p.password = md5Libs.md5(this.p.password);
			this.$u
				.post('https://www.wdf5.com/api/user/login', this.p)
				.then(res => {
					wx.setStorageSync("usercookie", res.cookies[0])
					let data=res.data.data
					let userInfo={
						id:data._id,
						name:data.userName
					}
					wx.setStorageSync('userinfo',JSON.stringify(userInfo))
					this.$refs.uToast.show({
						title: '登录成功',
						type: 'success'
						// url: '/pages/user/index'
					});		
				})
				.catch(err => {
					this.p.password = '';
				});
		},
		logintest() {
			this.$u
				.get('https://www.wdf5.com/api/user/check', {},this.header)
				.then(res => {
					console.log(res);
					console.log(wx.getStorageSync("userinfo"))
				})
				.catch(err => {
					console.log(err);
				});
		}
	}
};
</script>

<style lang="less">
.content {
	margin: 5vw 3vw;
	padding: 5vw 0;
	background-color: #ffffff;
	text-align: center;
	border-radius: 3vw;
	.loginlogo {
		height: 30vw;
		width: 30vw;
		margin-bottom: 3vw;
	}
	.loginbtn {
		margin-top: 5vw;
	}
	.login-xy {
		margin: 2vw 3vw;
		text-align: left;
		.login-xytitle {
			color: #0089dc;
		}
	}
	.login-nocount {
		margin-top: 3vw;

		navigator {
			color: #0089dc;
			display: inline-block;
		}
	}
}
</style>
