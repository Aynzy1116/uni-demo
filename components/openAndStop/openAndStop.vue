<template>
	<view>
		<view class="relative" :class="'text-'+size">
			<view>
				<view class="padding-lr-10" :class="{content:!iSinfo}">
					{{content}}
					<view class="more text-blue" @click="iSinfo = !iSinfo" v-if="!iSinfo">查看全文</view>
				</view>
				<view class="absolute text-blue right bottom-0" v-if="iSinfo" @click="iSinfo = !iSinfo">收起</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			content: String,
			size: Number
		},
		data() {
			return {
				iSinfo: false
			}
		}
	}
</script>

<style scoped>
	.content {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		position: relative;
		/* line-height: 40rpx; */
		/* max-height: 40px; */
	}


	.content:after {
		content: "...";
		position: absolute;
		bottom: 0;
		right: 0;
		padding-right: 5em;
		padding-left: 8rpx;
		background-color: #f8f8f8;
	}

	.more {
		position: absolute;
		bottom: 0;
		right: 30rpx;
		z-index: 9;
		cursor: pointer;
	}
</style>
