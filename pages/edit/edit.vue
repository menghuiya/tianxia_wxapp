<template>
	<view class="content">
		<u-top-tips ref="uTips"></u-top-tips>
		<u-cell-group><u-field v-model="content" :field-style="field_style" :auto-height="false" label-width="0" :placeholder="tpsmessage" type="textarea"></u-field></u-cell-group>
		<view class="up-box"><u-upload @on-success="getData" @on-error="errdata" @on-remove="imgdel" :header="header" :action="action" :file-list="fileList"></u-upload></view>
		<u-cell-group>
			<u-field icon="rmb-circle-fill" label-width="200" input-align="right" v-model="price" label="出售价格" placeholder="请输入价格"></u-field>
			<u-field icon="coupon-fill" :disabled="true" @click="showAction" label-width="200" input-align="right" right-icon="arrow-down-fill" v-model="kind" label="商品分类"></u-field>
			<u-picker @confirm="clickItem" mode="selector" v-model="show" :range="selector" range-key="kindName"></u-picker>
		</u-cell-group>
		<u-button type="success" @click="postGood">发布商品</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tpsmessage: '品牌型号，新旧程度，入手渠道,转手原因...',
			field_style: {
				height: '200rpx',
				'font-size': '0.8rem'
			},
			content: '',
			action: 'https://www.wdf5.com/api/upload/img',
			fileList: [],
			header: {
				'content-type': 'application/json;charset=UTF-8',
				Cookie: wx.getStorageSync('usercookie') //读取cookie
			},
			imgPath: [],
			price: '',
			kind: '',
			kind_id: '',
			show: false,
			selector: [1, 2, 3],
			kindarr: []
		};
	},
	methods: {
		getData(data) {
			let surl = 'http://static-resource-1256396014.picnj.myqcloud.com/img/public/';
			let eurl = '/shui_ying';
			let imgurl = surl + JSON.parse(data).data.src + eurl;
			this.imgPath.push(imgurl);
		},
		errdata(res) {
			console.log(res);
		},
		imgdel(index) {
			this.imgPath.splice(index, 1);
		},
		showAction() {
			this.show = true;
		},
		clickItem(index) {
			this.kind = this.selector[index].kindName;
			this.kind_id = this.selector[index]._id;
		},
		postGood() {
			if(this.kind_id==''||this.imgPath.length==0||this.price==''||this.content==''){
				this.$refs.uTips.show({
					title: '请检查输入内容是否完整',
					type: 'error',
					duration: '2300'
				});
				return
			}
			let p_data = {
				owner: JSON.parse(wx.getStorageSync('userinfo')).id,
				kind: this.kind_id,
				price:this.price,
				description: this.content,
				imgPath: this.imgPath
			};
			this.$u
				.post('https://www.wdf5.com/api/commodity/info', p_data, this.header)
				.then(res => {
					this.$u.route({
						url: 'pages/good/good',
						params: {
							id: res.data.data._id
						}
					});
				})
				.catch(err => {
					this.$refs.uTips.show({
						title: err.data.msg,
						type: 'error',
						duration: '2300'
					});
				});
		}
	},
	onLoad() {
		this.$u.get('https://www.wdf5.com/api/commodity/kind', {}).then(res => {
			this.selector = res.data.data;
		});
	}
};
</script>

<style lang="less">
.up-box {
	padding: 0 20rpx;
	background-color: #ffffff;
	.u-upload {
		margin: auto;
	}
}
</style>
