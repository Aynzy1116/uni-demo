<template>
	<view class="page">
		<u-navbar autoBack='true' placeholder>
			<view slot="left">
				<image class="icon icon-32" src="@/static/img/left-arrow.png" mode=""></image>
			</view>
			<view slot="right"></view>
			<view slot="center">个人信息</view>
		</u-navbar>
		<view class="vh100 padding text-black text-bold">
			<view class="flex justify-between align-center padding-20 bg-white radius-12" @click="modify(0)">
				<view class="flex justify-start align-center">
					<view class="left-border"></view>
					<view class="margin-left-20 width-120">头像</view>
				</view>
				<view class="flex justify-end align-center">
					<view class="width-80 height-80">
						<image class="width-80 height-80 round" :src="userInfo.avatarUrl?userInfo.avatarUrl:'../../static/img/suuolong.jpg'" />
					</view>
					<view class="flex align-center margin-left-10">
						<!-- <image class="icon-48" src="@/static/img/blueArrow.png"></image> -->
						<u-icon name="arrow-right" bold size="42" color="#0081ff"></u-icon>
					</view>
				</view>
			</view>
			<view class="flex justify-between align-start padding-20 margin-top-20 bg-white radius-12" @click="modify(1)">
				<view class="flex justify-start align-center">
					<view class="left-border"></view>
					<view class="margin-left-20 width-120">姓名</view>
				</view>
				<view class="flex justify-end align-center">
					<view class="text-blue w100">{{userInfo.name?userInfo.name:'未知用户'}}</view>
					<view class="flex align-center margin-left-10">
						<u-icon name="arrow-right" bold size="42" color="#0081ff"></u-icon>
					</view>
				</view>
			</view>
			<view class="flex justify-between align-center padding-20 margin-top-20 bg-white radius-12" @click="modify(2)">
				<view class="flex justify-start align-center">
					<view class="left-border"></view>
					<view class="margin-left-20 width-120">性别</view>
				</view>
				<view class="flex justify-end align-center">
					<view class="text-blue">{{userInfo.gender==null?gender[0]:gender[userInfo.gender]}}</view>
					<view class="flex align-center margin-left-10">
						<u-icon name="arrow-right" bold size="42" color="#0081ff"></u-icon>
					</view>
				</view>
			</view>
			<view class="flex justify-between align-center padding-20 margin-top-20 bg-white radius-12" @click="modify(2)">
				<view class="flex justify-start align-center">
					<view class="left-border"></view>
					<view class="margin-left-20 width-120">手机号</view>
				</view>
				<view class="flex justify-end align-center">
					<view class="text-blue">{{userInfo.photo?userInfo.photo:'未设置'}}</view>
					<view class="flex align-center margin-left-10">
						<u-icon name="arrow-right" bold size="42" color="#0081ff"></u-icon>
					</view>
				</view>
			</view>
			<!-- 弹出层 -->
			<view>
				<u-popup :show="show" @close="show=false" :round='round' :mode="mode">
					<view class="padding" v-if="toastType==0">
						<view class="margin-bottom-20">
							<view class="padding-tb text-center text-32" @click="changeAvatUrl">修改头像</view>
							<view class="padding-tb text-center text-32" @click="show=false">取消</view>
						</view>
					</view>
					<view class="padding-60" style="width: 90vw;" v-if="toastType==1">
						<view>
							<u--input v-model="userName" placeholder="请输入新的姓名" border="surround" clearable></u--input>
							<view class="flex justify-between align-center margin-top radius-12">
								<view class="flex-1 padding bg-gray light text-center" @click="show=false">取消</view>
								<view class="flex-1 padding bg-blue text-center" @click="changeName">确定修改</view>
							</view>
						</view>
					</view>
					<view class="padding-60" style="width: 90vw;" v-if="toastType==2">
						<view>
							<view class="flex justify-around align-center">
								<label class="radio" @click="checked=true"><radio value="1" :checked="checked" />男</label>
								<label class="radio" @click="checked=false"><radio value="2" :checked="!checked" />女</label>
							</view>
							<view class="flex justify-between align-center margin-top radius-12">
								<view class="flex-1 padding bg-gray light text-center" @click="show=false">取消</view>
								<view class="flex-1 padding bg-blue text-center" @click="changeGender">确定修改</view>
							</view>
						</view>
					</view>
				</u-popup>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				gender:['未知','男','女'],
				checked:true,
				show:false,
				mode:'bottom',
				toastType:0,
				round:0,
			}
		},
		onLoad(option) {
			console.log('option',option)
		},
		methods: {
			modify(type){
				this.toastType = type
				this.show=true
				if(type==0){
					this.mode = 'bottom'
					this.round = 0
				}else{
					this.mode = 'center'
					this.round = 20
				}
			},
			// 修改头像
			changeAvatUrl(){
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function (res) {
						console.log('res',res);
						let url = res.tempFilePaths[0]
						console.log(JSON.stringify(res.tempFilePaths));
						uni.uploadFile({
							url: that.$api.uploadImg+`?biz=temp`, // 接口地址
							filePath: url,
							name: 'file',
							header:{
								'content-type':'multipart/form-data'
							},
							formData: {
								user: 'test'
							},
							success: (res) => {
								console.log('sss',res.data);
								let data = JSON.parse(res.data)
								console.log('data',data);
								if(data.success){
									let avatarUrl = data.message  // 头像地址
									that.$http.post(that.$api.editUserInfo,{
										openid:that.userInfo.openid,
										id:that.userInfo.userid,
										avatarUrl:that.baseImgUrl+avatarUrl
									}).then(res=>{
										if(res.code==200&&res.success){
											show_toast('修改成功','none',1500)
											that.$store.commit('setUserInfo',{...that.userInfo,avatarUrl:that.baseImgUrl+avatarUrl})
										}else{
											show_toast('修改失败！','none',1500)
										}
										that.show=false // 关闭弹窗
									})
								}
							},
							fail:(err)=>{
								uni.showToast({
									title: JSON.stringify(err),
									duration: 3000,
									icon:'none'
								});
							}
						});
					},
					fail(err) {
						console.log('err',err);
					}
				})
			},
			// 修改姓名
			changeName(){
				if(this.userName.trim()==''){
					show_toast('新姓名不能为空！','none',1500)
					return
				}
				this.userName = this.userName.trim()
				this.$http.post(this.$api.editUserInfo,{
					openid:this.userInfo.openid,
					id:this.userInfo.userid,
					name:this.userName
				}).then(res=>{
					if(res.code==200&&res.success){
						show_toast('修改成功','none',1500)
						this.$store.commit('setUserInfo',{...this.userInfo,name:this.userName})
					}else{
						show_toast('修改失败！','none',1500)
					}
					this.show=false // 关闭弹窗
				})
			},
			// 性别修改
			changeGender(){
				let gender
				if(this.checked){
					gender = 1
				}else gender = 2
				console.log('gender',gender);
				this.$http.post(this.$api.editUserInfo,{
					openid:this.userInfo.openid,
					id:this.userInfo.userid,
					gender:gender
				}).then(res=>{
					if(res.code==200&&res.success){
						show_toast('修改成功','none',1500)
						this.$store.commit('setUserInfo',{...this.userInfo,gender:gender})
					}else{
						show_toast('修改失败！','none',1500)
					}
					this.show=false // 关闭弹窗
				})
			},
		}
	}
</script>

<style scope>
	.left-border{
		width: 14rpx;
		height: 50rpx;
		line-height: 50rpx;
		border-radius: 40rpx;
		background: linear-gradient(180deg, rgba(51,138,255,1) 0%,rgba(147,237,224,1) 100%);
		text-align: center;
	}
	.border{
		border: 2rpx solid black;
	}
</style>