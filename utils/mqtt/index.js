const mqtt = require('./mqtt.min.js') //根据自己存放的路径修改
const crypto = require('./hex_hmac_sha1.js'); //根据自己存放的路径修改

var client = null

function doConnect() {
	const deviceConfig = {
		productKey: "a14FbCtCJGi",
		deviceName: "20221112002",
		deviceSecret: "1c9ecbc8ac4a7799032a41c6f9e48b32",
		regionId: "cn-shanghai" //根据自己的区域替换
	};
	const options = initMqttOptions(deviceConfig);
	console.log(options)
	//替换productKey为你自己的产品的（注意这里是wxs，不是wss，否则你可能会碰到ws不是构造函数的错误）
	client = mqtt.connect('wxs://a14FbCtCJGi.iot-as-mqtt.cn-shanghai.aliyuncs.com', options)
	client.on('connect', function() {
		console.log('连接服务器成功')
		//注意：订阅主题，替换productKey和deviceName(这里的主题可能会不一样，具体请查看控制台-产品详情-Topic 类列表下的可订阅主题)，并且确保改主题的权限设置为可订阅
		client.subscribe('/a14FbCtCJGi/deviceName/user/get', function(err) {
			if (!err) {
				client.publish('/sys/a14FbCtCJGi/20221112002/thing/service/property/set',
					'hello,小度')
				console.log('订阅成功！');
			}
		})
	})
	//接收消息监听
	client.on('message', function(topic, message) {
		// message is Buffer
		let msg = message.toString();
		console.log('收到消息：' + msg);
		//关闭连接 client.end()
	})
	
	//断开连接监听
	client.on('disconnect', function(topic, message) {
		console.log('断开连接：');
	})
	
}

function disConnect(){
	console.log('client',client);
	client.end()
}

function setMessage(message){
	client.publish('/sys/a14FbCtCJGi/20221112002/thing/service/property/set',message)
}

function initMqttOptions(deviceConfig) {

	const params = {
		productKey: deviceConfig.productKey,
		deviceName: deviceConfig.deviceName,
		timestamp: Date.now(),
		clientId: Math.random().toString(36).substr(2),
	}
	//CONNECT参数
	const options = {
		keepalive: 60, //60s
		clean: true, //cleanSession不保持持久会话
		protocolVersion: 4 //MQTT v3.1.1
	}
	//1.生成clientId，username，password
	options.password = signHmacSha1(params, deviceConfig.deviceSecret);
	options.clientId = `${params.clientId}|securemode=2,signmethod=hmacsha1,timestamp=${params.timestamp}|`;
	options.username = `${params.deviceName}&${params.productKey}`;

	return options
}

function signHmacSha1(params, deviceSecret) {

	let keys = Object.keys(params).sort();
	// 按字典序排序
	keys = keys.sort();
	const list = [];
	keys.map((key) => {
		list.push(`${key}${params[key]}`);
	});
	const contentStr = list.join('');
	return crypto.hex_hmac_sha1(deviceSecret, contentStr);
}

module.exports = {
	doConnect,
	disConnect,
	setMessage
}