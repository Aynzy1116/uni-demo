<template>
	<view class="page">
		<view>
			<u-navbar autoBack='true' placeholder fixed>
				<view slot="left"></view>
				<view slot="right"></view>
				<view slot="center">首页</view>
			</u-navbar>
		</view>
		<scroll-view scroll-y class="vh100">
			<view>
				<u-swiper :list="lists" @click="" height='360' :current="current"></u-swiper>
			</view>
			<view class="padding-lr-20 margin-top-10">
				<view class="plat radius-20 padding-20 text-black">
					<view>
						<view class="flex align-center justify-between border-bottom-gray padding-bottom-20">
							<view class="text-34">投影系列</view>
							<view class="flex align-center" @click="goMore()">
								<view class="text-32" style="color: #070707;">更多</view>
								<image class="icon icon-28" src="@/static/img/right-arrow.png" mode=""></image>
							</view>
						</view>
					</view>
					<scroll-view scroll-x show-scrollbar class="nowrap padding-top-20 padding-bottom-10">
						<view class="flex">
							<block class="flex align-center justify-between" v-for="(item,i) in categoryList">
								<view class="text-center margin-lr-20" @click="goMore(i+1)">
									<view>
										<image class="icon-80" src="../../static/img/touying.png" mode=""></image>
									</view>
									<view>{{item.name}}</view>
								</view>
							</block>
						</view>
					</scroll-view>
				</view>
				<view class="margin-top-20 padding-bottom-10">
					<view class="text-34">案例效果展示</view>
					<view class="flex flex-wrap justify-between">
						<productItem class="w49 margin-top-10" v-for="(item,i) in detailLists" :item='item' @click.native="goProductDetail(i)" />
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { getWxCode } from '../../utils/utils.js'
	export default {
		data() {
			return {
				current: 0,
				name:'小熊',
				lists:['/static/img/1.jpg','/static/img/2.jpg'],
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
				}],
				categoryList:[{
					name:'图案'
				},{
					name:'水纹'
				},{
					name:'萤火星空'
				},{
					name:'彩虹'
				},{
					name:'视频'
				},{
					name:'投影机'
				},{
					name:'光束灯'
				},{
					name:'激光灯'
				}]
			}
		},
		onLoad() {
			
		},
		
		methods: {
			goMore(type=0){
				this.navigater(`/pages/common/productLists/productLists?name=index&type=${type}`)
			},
			goProductDetail(id) {
				console.log(id)
				this.navigater(`/pages/common/productDetail/productDetail?id=${id}`)
			}
		}
	}
</script>

<style scoped>
	
</style>
