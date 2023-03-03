<template>
	<view class="page">
		<view>
			<u-navbar autoBack='true' placeholder>
				<view slot="left">
					<image class="icon icon-32" src="@/static/img/left-arrow.png" mode=""></image>
				</view>
				<view slot="right"></view>
				<view slot="center">搜索</view>
			</u-navbar>
		</view>
		<view class="text-32">
			<view class="padding-8">
				<u-search v-if="flag" placeholder="请输入关键词" v-model.trim="keyword"
				 actionText="取消" :searchIconSize='36' :height='72' 
				  @search="enterSearch" @custom="flag = false"
				  @focus="flag = true"
				  @change="(e)=>keyword=e"
				></u-search>
				<u-search v-else placeholder="请输入关键词" v-model.trim="keyword"
				 actionText="搜索" :searchIconSize='36' :height='72' 
				  @search="enterSearch" @custom="enterSearch"
				  @focus="flag = true"
				  @change="(e)=>keyword=e"
				></u-search>
			</view>
			<!-- 搜索历史 热门搜索 -->
			<view class="padding-lr-20" v-if="flag">
				<view>
					<view class="margin-top-20 text-34 padding-lr-10 margin-bottom-10-">搜索历史</view>
					<u-divider></u-divider>
					<view class="margin-top-20-">
						<view v-for="(item,i) in historySearch" :key="i"
						 class="flex justify-between align-center"
						 @click="enterSearch(item)">
							<view class="padding-10 margin-top-10">{{item}}</view>
							<view class="padding-20" @click.stop="closeHistory(item)">
								<u-icon name="close" :size="32"></u-icon>
							</view>
						</view>
					</view>
				</view>
				<view>
					<view class="margin-top text-34 padding-lr-10 margin-bottom-10-">热门搜索</view>
					<u-divider></u-divider>
					<view class="flex align-center flex-wrap margin-top-20-">
						<view v-for="(item) in hotSearchTags" :key="item.id" @click="enterSearch(item.name)">
							<view class="padding-10 margin-top-10 margin-left-10" style="border: 2rpx solid black;">{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 搜索历史 热门搜索 -->
			<view v-else class="padding-lr-10">
				<scroll-view scroll-y style="height: calc(100vh - 176rpx - 110rpx - 10rpx)">
					<view class="flex flex-wrap justify-between padding-bottom-10">
						<productItem class="w49 margin-top-10" v-for="(item) in detailLists" :item='item' @click.native="goProductDetail(i)" />
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
				keyword:'',
				flag: true,
				historySearch:['古人','烤鸭','bulbul the sky'],
				hotSearchTags:[{
					id:'125',
					name:'章鱼灯'
				},{
					id:'45',
					name:'再见星空'
				},{
					id:'998',
					name:'超大灯'
				},{
					id:'213',
					name:'彩虹灯'
				},{
					id:'534',
					name:'坐角落看霓虹'
				},{
					id:'432',
					name:'故人不在'
				},{
					id:'3235',
					name:'妙妙屋'
				},{
					id:'1235',
					name:'炸鸡'
				},{
					id:'5394',
					name:'骚烤'
				},{
					id:'2',
					name:'章鱼灯'
				},{
					id:'3245',
					name:'开源的灯'
				}],
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
				}],
			}
		},
		onLoad(option) {
			console.log('option',option);
		},
		methods: {
			enterSearch(value){
				console.log('enter',value);
				this.keyword = value
				this.flag = false
			},
			closeHistory(value){
				console.log('删除',value)
			},
			goProductDetail(id) {
				console.log('id',id)
				this.navigater(`/pages/common/productDetail/productDetail?id=${id}`)
			},
		}
	}
</script>

<style scope>
	.margin-top-20-{
		margin-top: -20rpx;
	}
	.margin-bottom-10-{
		margin-bottom: -10rpx;
	}
</style>