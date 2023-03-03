<template>
	<view class="page" @click="controlShowTags(false)">
		<view>
			<u-navbar placeholder>
				<view slot="left" class="flex">
					<view class="flex justify-between align-center radius-20">
						<view class="padding-10" @click.stop="back()">
							<image class="icon icon-32 margin-top-4" src="@/static/img/left-arrow.png" mode=""></image>
						</view>
						<view class="padding-10" @click.stop="back('home')">
							<image class="icon icon-36" src="@/static/img/home-black.png"></image>     
						</view>
					</view>
				</view>
				<view slot="right"></view>
				<view slot="center">产品展示</view>
			</u-navbar>
			<view class="relative">
				<u-sticky bgColor="#fff">
					<view class="flex align-center">
						<view class="flex flex-1 justify-center padding-10">
							<view @click.stop="controlShowTags(true)">
								<image class="icon icon-38" src="@/static/img/bottom-arrow-blue.png"></image>
							</view>
						</view>
						<view style="width: 84vw;">
							<u-tabs :list="tags" :current="currentIndex" lineWidth="0" lineColor="#8e6cf5"
									:activeStyle="{
								color: '#8e6cf5',
								fontWeight: 'bold',
								transform: 'scale(1.05)'
							}"></u-tabs>
						</view>
						<view class="flex flex-1 justify-center padding-10">
							<view @click="search">
								<image class="icon icon-38 text-blue" src="@/static/img/search-blue.png"></image>
							</view>
						</view>
					</view>
				</u-sticky>
				<!-- 下拉层 -->
				<view class="absolute left-0 right-0 z-99 text-white bg-black opacity-9 transition"
				 :class="{'displayNone':!tabShow}" >
					<view class="padding-20 flex align-center flex-wrap relative">
						<view v-for="(item,i) in tags" class="padding-10 text-34" @click.stop="clickDownTags(i)">
							{{item.name}}
						</view>
						<view class="absolute right20 bottom20" @click="tabShow=false">收起</view>
					</view>
				</view>
				<!-- 数据层 -->
				<view class="padding-lr-10">
					<scroll-view scroll-y style="height: calc(100vh - 176rpx - 110rpx)" @scroll="controlShowTags(false)">
						<view class="flex flex-wrap justify-between padding-bottom-10">
							<productItem class="w49 margin-top-10" v-for="(item,i) in detailLists" :item='item' @click.native="goProductDetail(i)" />
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				tabShow: false,
				detailLists:[{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				},{
					name:"项目名称",
					icon:'../../static/img/suuolong.jpg',
					content:`
					流萤断续光，一明一灭一尺间，寂寞何以堪—立花北枝连绵的阴雨天气不禁让人心生倦意店里的生
					意也变得比前些日子冷清了许多。店里还没有顾客。我坐在靠着书架的椅子上。默默打着盹。曾扬站在吧
					台后习慢性地擦着瓷杯，白钰与他小声地聊着天。`
				}],
				tags: [{
					name: '全部',
				}, {
					name: '图案',
				}, {
					name: '水纹',
				}, {
					name: '萤火星空',
				}, {
					name: '彩虹',
				}, {
					name: '视频',
				}, {
					name: '投影机',
				}, {
					name: '光束灯',
				}, {
					name: '激光灯',
				}],
			}
		},
		onLoad(option) {
			console.log('option', option)
			if(option.name=='index'){
				if(option.type==0) return
				this.currentIndex = Number(option.type)
			}
			
		},
		methods: {
			clickDownTags(index){
				this.currentIndex = index
				this.tabShow = false
			},
			// 点其他地方关闭弹窗
			controlShowTags(flag){
				if(flag&&!this.tabShow) this.tabShow = true
				else this.tabShow = false
			},
			back(value){
				console.log('value',value);
				if(value=='home'){
					this.navigater(`/pages/index/index`,2)
				}else{
					uni.navigateBack({ delta: 1 })
				}
			},
			goProductDetail(id) {
				console.log(id)
				this.navigater(`/pages/common/productDetail/productDetail?id=${id}`)
			},
			search(){
				console.log('搜索中');
				this.navigater(`/pages/common/searchPage/searchPage?type='产品'`)
			}
		}

	}
</script>

<style scoped>
	.displayNone{
		opacity: 0;
	}
</style>
