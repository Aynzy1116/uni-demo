<template>
	<view class="page">
		<view>
			<u-navbar autoBack='true' placeholder>
				<view slot="left">
					<image class="icon icon-32" src="@/static/img/left-arrow.png"></image>
				</view>
				<view slot="right"></view>
				<view slot="center">产品详情</view>
			</u-navbar>
		</view>
		<view class="padding-10">
			<view>
				<view class="flex justify-between align-center text-34 padding-10">
					<view>产品名称：彩虹灯</view>
					<view class="flex justify-between align-center" @click="collect">
						<view>收藏</view>
						<u-icon :name="[starName?'star':'star-fill']" size="40"></u-icon>
					</view>
				</view>
				<view class="padding-10">
					<u-subsection :list="nameList" :current="nameIndex" bgColor="#3c9cff" mode='subsection'
					 :fontSize="32" @change="changeName"></u-subsection>
				</view>
				<scroll-view scroll-y style="height: calc(100vh - 176rpx - 110rpx - 73rpx)">
					<view v-show="nameIndex==0">
						<view class="flex justify-between align-center flex-wrap">
							<block v-for="(item,i) in picArr" >
								<view class="flex justify-center align-center flex-wrap margin-top-10">
									<view class="" style="width: 48vw;">
										<image class="w100 height-400" :src="item" @click="lookPic(i)"></image>
									</view>
								</view>
							</block>
						</view>
						<view>
							<openAndStop :content="content" :size="34"></openAndStop>
						</view>
					</view>
					<view v-show="nameIndex==1">
						<video class="w100" :src="vedio" enable-play-gesture></video>
						<view>
							<openAndStop :content="content" :size="34"></openAndStop>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nameList:['图片案例','视频案例'],
				nameIndex:0,
				starName:true,
				vedio:'https://vue-objects.oss-cn-beijing.aliyuncs.com/vedio/796431746_3_0.mp4',
				picArr:['https://vue-objects.oss-cn-beijing.aliyuncs.com/img/Category/1/1.webp',
				'https://vue-objects.oss-cn-beijing.aliyuncs.com/img/Category/1/2.webp',
				'https://vue-objects.oss-cn-beijing.aliyuncs.com/img/Category/1/3.webp',
				'https://vue-objects.oss-cn-beijing.aliyuncs.com/img/Category/1/12.webp'],
				content:`太阳系联盟为探究灵魂奥秘，秘密组建天才组织——天启少年班，集合了来自太阳系四大联邦天赋异禀的年轻
				人，但在研究途中出现重大事故，多人伤亡，首犯被监禁，少年班解散，档案封存成为禁忌。 五年后，在泛太阳系
				机甲大赛上铩羽而归的天京机武A级军事学院，如同天上掉馅饼般的迎来了亚洲区机甲预备班第一名的瞳神，开始了重
				建之路，然而这只是开始，不可思议的事情开始频繁出现，旋涡中心却是一个默默无闻的二年生。 ?机甲，男人的终
				极浪漫。?距离上一部的星战风暴快八年了，一起感受科幻的魅力，这也是风暴系列的终极版。`,
			}
		},
		onLoad(option) {
			console.log('option',option);
		},
		methods: {
			lookPic(index){
				this.previewImg(this.picArr,index)
			},
			changeName(e){
				console.log('changeName',e);
				this.nameIndex = e
			},
			collect(){
				this.starName = !this.starName
			}
		}
	}
</script>

<style scope>
	
</style>