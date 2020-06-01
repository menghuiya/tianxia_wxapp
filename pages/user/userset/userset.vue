<template>
	<view class="set-box">
		<view class="cell-box">
			<u-cell-group title="基础信息" label="点击图片右上角删除后修改">
				<u-cell-item title="头像" :arrow="false" :center="true">
					<u-upload @on-success="getData" @on-error="errdata" :action="action" :show-progress="false" :custom-btn="true" width="200" del-icon="camera" del-bg-color="transparent" :max-count="1" :file-list="fileList" slot="right-icon">
						<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150"><u-icon name="photo" size="60" :color="$u.color['lightColor']"></u-icon></view>
					</u-upload>
				</u-cell-item>
				<u-cell-item title="会员名" value="梦回"></u-cell-item>
				<u-cell-item title="性别" value="男"></u-cell-item>
				<u-cell-item title="生日"></u-cell-item>
				<u-cell-item title="常住"></u-cell-item>
				<u-cell-item title="简介"></u-cell-item>
				<u-cell-item title="行业"></u-cell-item>
				<u-cell-item title="职位名称"></u-cell-item>
				<u-cell-item title="院校名称"></u-cell-item>
				<u-cell-item title="喜欢的"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			action: 'https://www.wdf5.com/api/upload/img',
			fileList: [
				{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
				}
			]
		};
	},
	components: {},
	methods:{
		getData(data){
			let surl ='https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/public/';
			let imgurl=surl+JSON.parse(data).data.src;
			this.$u.put('https://www.wdf5.com/api/user/headimg', {
				userId:'5ec1367c4dc0902f3cf18fb3',
				headImg:imgurl
			}, ).then(res => {
							console.log(res)
						}).catch(err=>{
							console.log(err);
						})
		},
		errdata(res){
			console.log(res)
		}
	}
};
</script>

<style lang="less">
.set-box {
	margin: 3vw;
	border-radius: 3vw;
	.set-title {
		color: #949797;
		margin-top: 4vw;
		margin-left: 2vw;
	}
	.cell-box {
		border-radius: 3vw;
		overflow: hidden;
		background-color: #ffffff;
		.slot-btn {
				width: 200rpx;
				height: 200rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgb(244, 245, 246);
				border-radius: 10rpx;
			}
		
			.slot-btn__hover {
				background-color: rgb(235, 236, 238);
			}
			.u-delete-icon {
					position: absolute;
					top: 10rpx;
					right: 10rpx;
					z-index: 10;
					border-radius: 100rpx;
					width: 44rpx;
					height: 44rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					.u-icon{
						color: red;
					}
				}
	}
}
</style>
