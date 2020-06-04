<template>
	<view class="action-box">
		<view class="navigation" v-if="show">
			<view class="left">
				<view class="item">
					<u-icon name="chat" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">聊天</view>
				</view>
				<view class="item" @click="showCom">
					<u-icon name="more-circle" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">留言</view>
				</view>
				<view class="item">
					<u-icon name="heart" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">想要</view>
				</view>
			</view>
			<view class="right"><view class="cart btn u-line-1" @click="postorder">立即购买</view></view>
		</view>
		<u-cell-group v-if="!show">
			<u-field v-model="comment" label-width="0" icon="phone" placeholder="问问更多细节">
				<u-button class="a-btn" size="mini" slot="button" @click="showCom">取消</u-button>
				<u-button class="a-btn" size="mini" slot="button" @click="postcomment" type="success">发送</u-button>
			</u-field>
		</u-cell-group>
	</view>
</template>

<script>
export default {
	props:['good_id'],
	data(){
		return{
			comment:'',
			show:true
		}
	},
	methods:{
		showCom(){
			this.comment=""
			this.show=!this.show
			
		},
		postcomment(){
			console.log(this.good_id,this.comment)
		},
		postorder(){
			this.$u.route({
				url: 'pages/good/order/order',
				params: {
					id: this.good_id
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.navigation {
	display: flex;
	margin-top: 100rpx;
	border: solid 2rpx #f2f2f2;
	background-color: #ffffff;
	padding: 16rpx 0;
	.left {
		display: flex;
		font-size: 20rpx;
		.item {
			margin: 0 30rpx;
		}
	}
	.right {
		font-size: 28rpx;
		align-items: center;
		flex: 1;
		text-align: center;
		.btn {
			line-height: 66rpx;
			padding: 0 30rpx;
			border-radius: 36rpx;
			color: #ffffff;
		}
		.cart {
			background-color: #ed3f14;
			margin-right: 30rpx;
			flex: 1;
		}
		.buy {
			background-color: #ff7900;
		}
	}
}
.a-btn{
	margin-left: 10rpx;
}
</style>
