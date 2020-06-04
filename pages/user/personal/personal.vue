<template>
	<view style="height: 100%;" v-if="gooddata&&userdata&&evalutedata">
		<view class="msg-box" :style="{ background: `url(${userdata.headImg})no-repeat`, backgroundSize: '100% 100%' }">
			<view class="msg-box-data">
				<view class="person-msg-smbox">
					<image :src="userdata.headImg" mode=""></image>
					<view class="person-msg-name">
						<view class="person-msg-name-top">{{userdata.userName}}</view>
						<view class="person-msg-name-bottom">昵称: {{userdata.userName}}</view>
						<view class="person-msg-own">
							<u-icon class="person_iocn" name="integral-fill" color="#ffae00" size="0.6rem" />
							<text>未认证</text>
							<u-icon class="person_iocn" name="arrow-right" color="#cfcccc" />
						</view>
					</view>
					<view class="person-edit">编辑资料</view>
				</view>
				<view class="person-act-box">
					<view class="user-msg-text">十分钟前来过甜虾</view>
					<view class="user-msg-text">男生</view>
					<view class="user-msg-data">
						<view>1055超赞</view>
						<view>588关注</view>
						<view>233粉丝</view>
					</view>
				</view>
			</view>
		</view>
		<u-sticky>
			<u-tabs-swiper ref="tabs" :list="list" :current="current" :is-scroll="false" @change="tabsChange"></u-tabs-swiper>
		</u-sticky>
		
		<swiper class="swiper-box" :current="swiperCurrent">
			<swiper-item class="swiper-item" v-for="(item, index) in orderList" :key="index">
				<scroll-view style="height: 100%;width: 100%;" scroll-y>
					<view class="list-box" v-if="gooddata&&userdata&&index==0">
						<my-good-list :imgdata="gooddata" :user="userdata"></my-good-list>
					</view>
					<view class="tie-list" v-if="index==1">
						<u-empty text="帖子为空" mode="list"></u-empty>
					</view>
					<view class="tie-list" v-if="index==2">
						<evalute-card v-for="(item,indexs) in evalutedata" :e_data="item" :key="indexs"></evalute-card>
					</view>
					<view class="tie-list" v-if="index==3">
						<u-empty text="动态为空" mode="search" margin-top="80"></u-empty>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import MyGoodList from '@/components/person/ProductList.vue';
import EvaluteCard from '@/components/person/EvaluateCard.vue'
export default {
	data() {
		return {
			gooddata: null,
			userdata:null,
			evalutedata:null,
			list: [
				{
					name: '商品'
				},
				{
					name: '帖子'
				},
				{
					name: '评价'
				},
				{
					name: '动态'
				}
			],
			current: 0,
			swiperCurrent: 0,
			orderList: [[], [], [], []],
			testarr: ['1', '2'],
		};
	},
	components: {
		MyGoodList,
		EvaluteCard
	},
	methods:{
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
	},
	onLoad(option) {
		uni.showLoading({
			title: '正在加载'
		});
		this.$u.get('https://www.wdf5.com/api/user/personal/'+option.user_id, {}).then(res => {
			this.gooddata=res.data.data.commodity
			this.userdata=res.data.data.user
			this.evalutedata=res.data.data.evaluate
			uni.hideLoading();
		}).catch(err=>{
			console.log(err)
		})
	
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
.msg-box {
	height: 65vw;
	color: #ffffff;
	.msg-box-data{
		background: #42424283;
		height: 65vw;
	}
}
.person-msg-smbox {
	display: flex;
	padding-top: 20rpx;
	image {
		width: 18vw;
		height: 18vw;
		border-radius: 2vw;
		margin-left: 4vw;
		border: 0.15rem solid #ffffff;
	}
	.person-msg-name {
		margin-left: 3vw;
		flex: 1;
		.person-msg-name-top {
			font-weight: 800;
			font-size: 1rem;
		}
		.person-msg-name-bottom {
			font-size: 0.68rem;
			color: #ffffff;
		}
	}
	.person-msg-own {
		background-color: #aaa8ac;

		height: 4vw;
		font-size: 0.6rem;
		border-radius: 3vw;
		width: 20vw;
		margin-top: 2vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		text {
			vertical-align: middle;
			color: #ffffff;
			font-weight: 500;
			
			text-align: center;
		}
		.person_iocn {
			color: #cfcccc;
			font-weight: 600;
			display: inline-block;
			vertical-align: middle;
		}
	}
	.person-edit {
		border: 0.05rem solid #ffffff;
		padding: 1vw 2vw;
		height: 8vw;
		border-radius: 1vw;
		font-size: 0.8rem;
		font-weight: 500;
		vertical-align: middle;
		margin-top: 5vw;
		margin-right: 4vw;
		color: #ffffff;
	}
}
.person-act-box {
  margin: 4vw;
  .user-msg-text {
    font-size: 0.85rem;
    margin-bottom: 2vw;
  }
  .user-msg-data {
    display: flex;
    margin-top: 10vw;
    font-size: 1rem;
    font-weight: 540;
    view {
      margin-right: 4vw;
    }
  }
}
@number:100vh;
.swiper-box {
		height: @number+(-50vh);
}
</style>
