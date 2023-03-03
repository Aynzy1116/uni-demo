<template>
	<view class="page">
		<view>
			<u-navbar autoBack='true' placeholder>
				<view slot="left">
					<image class="icon icon-32" src="@/static/img/left-arrow.png" mode=""></image>
				</view>
				<view slot="right"></view>
				<view slot="center">我的收藏</view>
			</u-navbar>
		</view>
		<view class="padding-20">
			<view>
				我的收藏
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
			console.log('option',option)
		},
		methods: {

		}
	}
</script>

<style scope>
</style>