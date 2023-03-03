<template>
	<view class="plat padding-8 radius-10 w100">
		<image class="image height-400 w100" :src="item.icon" mode=""></image>
		<view>{{item.name}}</view>
		<view class="text-cut-wrap">{{item.content}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			item: Object,
		}
	}
</script>

<style scoped>
	
</style>