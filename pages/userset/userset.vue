<template>
	<view class="set-box">
		<view class="cell-box">
			<u-cell-group title="基础信息">
				<u-cell-item title="头像" :arrow="false" :center="true"> 
					<u-upload :action="action" width="100" :del-icon="camera" del-bg-color="#ebedf000"  :max-count="1" :file-list="fileList" slot="right-icon">
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
			action: 'http://www.example.com/upload',
			fileList: [
				{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
				}
			]
		};
	},
	components:{
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
	}
}
</style>
