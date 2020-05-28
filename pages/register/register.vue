<template>
	<view>
		
				<view class="content">
					<image class="loginlogo" src="@/static/logo.png"></image>
					<u-cell-group>
								<u-field
									v-model="p.userName"
									label="账号"
									placeholder="请填写账号"
								>
								</u-field>
								<u-field
									v-model="p.password"
									label="密码"
									placeholder="请填写密码"
								>
								</u-field>
								<u-field
									v-model="p.repassword"
									label="密码"
									placeholder="请再次填写密码"
								>
								</u-field>
								
					</u-cell-group>
					<view class="login-xy">
						用户登录表示已同意<text class="login-xytitle">《用户服务协议》</text  > 和 <text class="login-xytitle">《隐私权政策》</text>
					</view>
					<view class="loginbtn">
						<u-button type="primary">开始登录</u-button>
					</view>
					<view class="login-nocount">
						已有账号? <navigator url="../login/login" >点击登录</navigator>
					</view>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				p:{
					userName: '',
					password: '',
					repassword:''
				}
			};
		}
	}
</script>

<style lang="less">
.content{
	margin: 5vw 3vw;
	padding: 5vw 0;
	background-color: #FFFFFF;
	text-align: center;
	border-radius: 3vw;
	.loginlogo{
		height: 30vw;
		width: 30vw;
		margin-bottom: 3vw;
	}
	.loginbtn{
		margin-top: 5vw;
	}
	.login-xy{
		margin:2vw 3vw;
		text-align: left;
		.login-xytitle{
			color: #0089dc;
		}
	}
	.login-nocount{
		margin-top: 3vw;
		
		navigator{
			color: #0089dc;
			display: inline-block;
		}
	}
}
</style>
