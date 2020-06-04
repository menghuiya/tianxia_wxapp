<template>
	<view class="buy-box">
		<u-tabs-swiper ref="tabs" :list="list" :current="current" :is-scroll="false" @change="tabsChange"></u-tabs-swiper>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in orderList" :key="index">
				<scroll-view style="height: 100%;width: 100%;" scroll-y>
					<view class="page-box" v-if="item.length > 0">
						<view class="order" v-for="res in item" :key="res._id">
							<view class="top">
								<view class="left">
									<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
									<view class="store">{{ res.sellerId.userName }}</view>
									<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
								</view>
								<view class="right" v-if="res.status == 0">发货中</view>
								<view class="right" v-if="res.status == 1">收货中</view>
								<view class="right" v-if="res.status == 2">评价中</view>
								<view class="right" v-if="res.status == 3">交易完成</view>
							</view>
							<!-- 商品信息 -->
							<view class="item">
								<view class="left"><image :src="res.commodity.imgPath[0]" mode="aspectFill"></image></view>
								<view class="content">
									<view class="title u-line-2">{{ res.commodity.description }}</view>
									<view class="delivery-time" v-if="res.status == 0">{{ res.createTime | forDate }}</view>
									<view class="delivery-time" v-if="res.status == 1">{{ res.deliveryTime | forDate }}</view>
									<view class="delivery-time" v-if="res.status == 2">{{ res.receiveTime | forDate }}</view>
									<view class="delivery-time" v-if="res.status == 3">{{ res.receiveTime | forDate }}</view>
								</view>
								<view class="right">
									<view class="price">
										￥{{ res.commodity.price.toFixed(2).split('.')[0] }}
										<text class="decimal">.{{ res.commodity.price.toFixed(2).split('.')[1] }}</text>
									</view>
								</view>
							</view>

							<view class="bottom" v-if="res.status != 3">
								<view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon></view>
								<view class="logistics btn">查看物流</view>
								<view class="evaluate btn" v-if="res.status == 1" @click="sureReceipt(res._id)">确认收货</view>
								<view class="evaluate btn" v-if="res.status == 2">评价</view>
							</view>
						</view>
					</view>
					<view class="page-box" v-if="item.length == 0">
						<view>
							<view class="centre">
								<image src="https://cdn.uviewui.com/uview/template/taobao-order.png" mode=""></image>
								<view class="explain">
									您还没有相关的订单
									<view class="tips">可以去看看有那些想买的</view>
								</view>
								<view class="btn">随便逛逛</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
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
			list: [
				{
					name: '待发货'
				},
				{
					name: '待收货'
				},
				{
					name: '待评价'
				},
				{
					name: '已完成'
				}
			],
			orderList: [[], [], [], []],
			testarr: ['1', '2'],
			current: 0,
			swiperCurrent: 0,
			user_id: JSON.parse(wx.getStorageSync('userinfo')).id
		};
	},
	methods: {
		tabsChange(index) {
			this.current = index;
			this.swiperCurrent = index;
		},
		transition(e) {
			let dx = e.detail.dx;
			// this.$refs.uTabs.setDx(dx);
		},
		animationfinish(e) {
			let current = e.detail.current;
			// this.$refs.uTabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		sureReceipt(order_id) {
			this.$u
				.put(
					'https://www.wdf5.com/api/order/buyer/receipt',
					{
						orderId: order_id,
						userId: this.user_id
					},
					this.header
				)
				.then(res => {
					this.$u.route({
						url: 'pages/good/buyorder/buyorder',
						type: 'redirectTo'
					});
				})
				.catch(err => {
					console.log(err);
				});
		}
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
	},
	onLoad() {
		this.$u.get('https://www.wdf5.com/api/order/buyer/' + this.user_id, {}, this.header).then(res => {
			let dataarr = res.data.data;
			console.log(dataarr);
			for (let item of dataarr) {
				switch (item.status) {
					case 0:
						this.orderList[0].push(item);
						break;
					case 1:
						this.orderList[1].push(item);
						break;
					case 2:
						this.orderList[2].push(item);
						break;
					case 3:
						this.orderList[3].push(item);
						break;
					default:
						this.orderList[0].push(item);
				}
			}
		});
	}
};
</script>
<style>
page {
	height: 100%;
	background-color: #f2f2f2;
}
</style>
<style lang="less">
.buy-box {
	height: 100%;
	.swiper-box {
		flex: 1;
		height: 100%;
		.order {
			background-color: #ffffff;
			margin: 20rpx 20rpx;
			border-radius: 20rpx;
			box-sizing: border-box;
			padding: 20rpx;
			font-size: 28rpx;
			.top {
				display: flex;
				justify-content: space-between;
				.left {
					display: flex;
					align-items: center;
					.store {
						margin: 0 10rpx;
						font-size: 32rpx;
						font-weight: bold;
					}
				}
				.right {
					color: #f0ad4e;
				}
			}
			.item {
				display: flex;
				margin: 20rpx 0 0;
				.left {
					margin-right: 20rpx;
					image {
						width: 200rpx;
						height: 200rpx;
						border-radius: 10rpx;
					}
				}
				.content {
					flex: 1;
					.title {
						font-size: 28rpx;
						line-height: 50rpx;
					}
					.delivery-time {
						color: #e5d001;
						font-size: 24rpx;
						margin-top: 40rpx;
					}
				}
				.right {
					margin-left: 10rpx;
					padding-top: 20rpx;
					text-align: right;
					color: #ee0a24;
					.decimal {
						font-size: 24rpx;
						margin-top: 4rpx;
						color: #dd524d;
					}
				}
			}
			.bottom {
				display: flex;
				margin-top: 40rpx;
				padding: 0 10rpx;
				justify-content: space-between;
				align-items: center;
				text-align: right;
				.more {
					flex: 1;
				}
				.btn {
					line-height: 52rpx;
					width: 160rpx;
					border-radius: 26rpx;
					border: 2rpx solid #909399;
					font-size: 26rpx;
					text-align: center;
					color: #909399;
					margin-left: 20rpx;
				}
				.evaluate {
					color: #f6b047;
					border-color: #f6b047;
				}
			}
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
</style>
