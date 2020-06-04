<template>
	<view v-if="gooddata">
		<view class="goodinfo">
			<view class="goodimg"><image :src="gooddata.imgPath[0]"></image></view>
			<view class="goodtext">
				<view class="good-t-title u-line-2">{{ gooddata.description }}</view>
				<view class="good-t-price">¥{{ gooddata.price.toFixed(2) }}</view>
			</view>
		</view>
		<view class="adressbox">
			<u-cell-group>
				<u-field icon="account-fill" label-width="156" label-align="right" input-align="right" v-model="username" label="收货姓名" placeholder="请填写姓名"></u-field>
				<u-field icon="phone-fill" label-width="156" label-align="right" input-align="right" v-model="mobile" label="手机号码" placeholder="请填写手机号"></u-field>
				<u-cell-item icon="map-fill" title="收货地址" :center="true" @click="showArea" :value="value"></u-cell-item>
				<u-field icon="map-fill" label-width="156" label-align="right" v-model="areamsg" label="详细地址" placeholder="请填写详细地址" type="textarea"></u-field>
			</u-cell-group>
		</view>

		<u-picker mode="region" :params="params" v-model="show" @confirm="getArea" :area-code="['13', '1303', '130304']"></u-picker>
		<view class="order-action-box">
			<text>合计：</text>
			<view class="order-action-price">¥{{ gooddata.price.toFixed(2) }}</view>
			<view class="order-action-btn"><u-button type="error" @click="onSubmit" shape="circle">立即付款</u-button></view>
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
			gooddata: null,
			params: {
				province: true,
				city: true,
				area: true
			},
			username: '',
			mobile: '',
			value: '',
			areamsg: ''
		};
	},
	
	methods: {
		showArea() {
			this.show = true;
		},
		getArea(data) {
			this.value = `${data.province.label}${data.area.label}${data.city.label}`;
		},
		onSubmit() {
			uni.showLoading({
				title: '正在购买'
			});
			let postdata = `${this.value}${this.areamsg}-${this.username}`;
			let data = {
				commodityId: this.gooddata._id,
				receive: {
					area: postdata,
					phoneNum: this.mobile
				},
				buyerId: JSON.parse(wx.getStorageSync('userinfo')).id,
				sellerId: this.gooddata.user._id
			};
			this.$u.post('https://www.wdf5.com/api/order',data,this.header).then(res=>{
				uni.showLoading({
					title: '购买成功'
				});
				setTimeout(()=>{
					uni.hideLoading();
					this.$u.route({
						url: 'pages/good/buyorder/buyorder'
					});
				},2000)
			}).catch(()=>{
				uni.hideLoading();
			})
			
		}
	},
	onLoad(option) {
		this.$u.get('https://www.wdf5.com/api/commodity/info/'+option.id).then(res => {
			this.gooddata = res.data.data;
		});
	}
};
</script>

<style lang="less">
.goodinfo {
	display: flex;
	background-color: #ffffff;
	margin-top: 20rpx;
	padding: 20rpx;
	.goodimg {
		width: 180rpx;
		height: 180rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.goodtext {
		flex: 1;
		margin-left: 20rpx;
		.good-t-title {
			font-size: 30rpx;
			color: #000000;
		}
		.good-t-price {
			color: #ee0a24;
			font-weight: 600;
			margin-top: 50rpx;
		}
	}
}
.adressbox {
	margin-top: 20rpx;
}
.order-action-box {
	background-color: #ffffff;
	height: 120rpx;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	text {
		margin-left: 30rpx;
	}
	.order-action-price {
		color: #ee0a24;
		font-weight: 600;
		flex: 1;
	}
	.order-action-btn {
		margin-right: 30rpx;
	}
}
</style>
