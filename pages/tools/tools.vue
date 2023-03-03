<template>
	<view class="page">
		<view>
			<u-navbar placeholder>
				<view slot="left"></view>
				<view slot="right"></view>
				<view slot="center">工具</view>
			</u-navbar>
		</view>
		<view>
			<u-button @click="connect" text="连接设备"></u-button>
			<u-button @click="discont" text="断开连接"></u-button>
			<u-button @click="setMessage" text="发送消息"></u-button>
		</view>
		<view>
			<u-input v-model="message"></u-input>
		</view>
	</view>
</template>

<script>
	import mqttClient from '@/utils/mqtt/index.js'
	export default {
		data() {
			return {
				title: 'Hello',
				name: '小熊',
				message:''
			}
		},
		onLoad() {
			
		},
		methods: {
			connect(){
				mqttClient.doConnect()
			},
			discont(){
				mqttClient.disConnect()
			},
			setMessage(){
				mqttClient.setMessage(this.message)
			}
		}
	}
</script>

<style>
</style>
