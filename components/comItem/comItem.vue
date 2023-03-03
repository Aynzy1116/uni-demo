<template>
	<view class="text-blue text-center padding radius-12 margin-top-20"
	 style="background-color: white;">
		<view>
			<image class="icon-80" :src="item.icon"></image>
		</view>
		<view>{{item.name}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
</style>
