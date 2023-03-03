<template>
	<view class="page">
		<view>
			<u-navbar placeholder>
				<view slot="left"></view>
				<view slot="right"></view>
				<view slot="center">个人中心</view>
			</u-navbar>
		</view>
		<view>
			<view class="padding-lr-10">
				<view class="text-center bg text-white radius-20 padding">
					<image @click="previewImg([src],0)" :src="src" class="icon-200 round"></image>
					<view class="text-center">小小度</view>
					<view  class="text-center">id:123232423323</view>
				</view>
			</view>
			<view class="flex flex-wrap justify-between padding-lr-20 padding-bottom-20">
				<comItem class="w48" v-for="(item,i) in list" :item='item' @click.native='listClick(item.name)'></comItem>
			</view>
		</view>
		<!-- 弹窗 -->
		<u-modal :show="showModel" title="点击号码复制" :showConfirmButton='false'
		  closeOnClickOverlay @close='showModel = false'>
			<view class="text-34">
				<view class="padding-10" @click='copy(0)'>客服电话：
					<text class="text-blue text-34">{{contact[0]}}</text>
				</view>
				<view class="padding-10" @click='copy(1)'>微信号：
					<text class="text-blue text-34">{{contact[1]}}</text>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showModel:false,
				contact: ['13266837076','xiaoguawulian123'],
				src:"https://vue-objects.oss-cn-beijing.aliyuncs.com/img/Category/1/12.webp",
				list:[{
					name:'个人信息',
					icon:'../../static/img/setting.png',
				},{
					name:'我的设备',
					icon:'../../static/img/setting.png',
				},{
					name:'我的收藏',
					icon:'../../static/img/setting.png',
				},{
					name:'联系我们',
					icon:'../../static/img/setting.png',
				},{
					name:'退出登录',
					icon:'../../static/img/setting.png',
				}]
			}
		},
		methods:{
			listClick(name){
				switch(name){
					case '个人信息':
						this.navigater('/pages/personal/personalDetail')
					break;
					case '我的设备':
						this.navigater('/pages/common/myDevice/myDevice')
					break;
					case '我的收藏':
						this.navigater('/pages/common/myCollects/myCollects')
					break;
					case '联系我们':
						this.showModel = true
					break;
					case '退出登录':
						uni.showModal({
							content:'是否退出登录',
							success(e) {
								if(e.confirm){
									console.log('退出成功');
								}
							}
						})
					break;
				}
			},
			copy(index){
				console.log(index);
				uni.setClipboardData({
					data:this.contact[index]
				})
			}
		}
	}
</script>

<style scoped>
	.bg{
		background: linear-gradient(rgb(108 175 234),rgb(234 181 239))
	}
</style>