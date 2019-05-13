//app.js
const config = require('config')

App({

    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function() {

        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
				env: config.envId,
                traceUser: true,
            })
        }

		// 颜色代码转换成小写
		let list = config.list_hue
		for (let i = 0; i < list.length; i++) {
			let colors = list[i].color
			for (let k = 0; k < colors.length; k++) {
				for (let m = 0; m < colors[k].length; m++) {
					colors[k][m] = colors[k][m].toLowerCase()
				}
			}
		}

		// ['#FFCCCC', '#FFFFFF', '#99CC00'], ['#FF99CC', '#FFFFFF', '#993366']
		// let str = ""
		// let maopi = config.maopi
		// for (let i = 0; i < maopi.length; i+=3) {
		// 	str += `['${maopi[i]}', '${maopi[i+1]}', '${maopi[i+2]}']`
		// 	if (i != maopi.length - 3) str += ','
		// 	if (i % 6 == 3) str += '\n'
		// 	if (i % 18 == 15) str += '\n'
		// }
		// str = str.toLowerCase()
		// console.log(str)
		// wx.setClipboardData({
		// 	data: str,
		// 	success: function (res) {
		// 		wx.getClipboardData({
		// 			success: function (res) {
		// 				wx.showToast({
		// 					title: '复制成功'
		// 				})
		// 			}
		// 		})
		// 	}
		// })


        this.globalData = {
			hot_palettes: [],
			palettes: [],
			sum_palettes: 0,

			tmplist: [],
			tmpitems: [],
			count: 0
		}

		// console.log(mtext)
		// var data = [' <img alt="" border="0" name="g6-o44-1" onload="DrawImage" src="/bmp/foo1.jpg" />', ' <img src="/bmp/foo2.jpg" alt="" border="0" name="g6-o44-2" onload="DrawImage" />'];
		// var reg = /<img\b(?=(?:(?!name=).)*name=(['"]?)([^'"\s>]+)\1)(?:(?!src=).)*src=(['"]?)([^'"\s>]+)\3[^>]*>/i;
		// for (var i = 0; i < data.length; i++) {
		// 	var s = data[i];

		// 	if (reg.test(s)) {
		// 		console.log('234')
		// 		document.getElementById("result").value += "name: " + RegExp.$2 + "\n";
		// 		document.getElementById("result").value += "src: " + RegExp.$4 + "\n";
		// 	}
		// }


// 		var tt = `<div id="endtext">
//     <p><span style="font-family: 宋体, SimSun;">荧光橙与灰黑大胆的搭配诠释了美国人的冒险精神，不羁与张扬。</span><br/></p><p><span style="font-family: 宋体, SimSun;">最后的相近色也是很好的收尾。</span></p></div>
// <h3>下载到</h3>`
// 		var ts = `<div id="endtext">
//     <p><span style="color:#00b050;font-family:times new roman">不知不觉春天即将来临，不由得让每个人带有一份新的向往，整个配色以娇柔粉色作为主色，加以青色和灰色作为搭配现实更加稳重和踏实的感觉，这两种色彩都是粉色的较好搭配，能一扫粉色过于柔弱的缺点，也令整个色彩搭配具有良好的视觉感，更好令人接受。<span style="font-size: 32px;"><span style="font-size: 10px;"><span style="font-size: 48px;"></span></span></span></span></p></div>
// <h3>下载到</h3>`
// 		var tm = `<div id="endtext">
//     <p>这个配色类型日本传统搭配中较为鲜艳的风格，但实际其更多的用于现代艺术品的着色中。一些画作，图案设计中较为多见，洋红色和黑色的搭配具有十分明显的现代风格，加上现代感十足的湖蓝，整个搭配使用的色彩纯度极高而明度也很高。<br/></p></div>
// <h3>下载到</h3>`
// 		var tk = `<div id="endtext">
//     <p>晚霞出空&nbsp; &nbsp; &nbsp;</p><p>猝然心动</p></div>
// <h3>下载到</h3>`

		// 非贪婪查找 正则的每一次捕获都是按照匹配最长的结果捕获的,如何解决正则的贪婪性 ->在量词元字符后面添加一个？即可
		// var reg = /<div[^>]*?id=['"]+endtext['"]+[^>]*?>([\s\S]*?)<\/div>/ig
		// reg.exec(tt)

		// let desc = RegExp.$1
		// // 过滤<br/><span><p>等标签
		// desc = desc.replace(/<\/?[^>]*?>/ig, "")
		// // 过滤换行、空格等
		// desc = desc.replace(/\s+/ig, "")
		// //去掉&nbsp
		// desc = desc.replace(/(&nbsp;)+/ig, "。")

		// console.log(desc, reg.lastIndex)


		// this.getList("http://www.peise.net/palette/20.html")


		// let tt = `<li class="white"><a>古代紫  <span>#895b8a  </span></a></li>`

		// let result = []
		// var reg = /(<li[\s\S]*?)<a>([^<]*?)<[^#]*?(#[0-9a-fA-F]+)[\s\S]*?<\/li>/ig
		
		// var tmp = reg.exec(tt)
		// while (tmp) {
		// 	let sli = RegExp.$1
		// 	let white = 0
		// 	if (sli.indexOf('"white"') > -1) {
		// 		white = 1
		// 	}
		// 	console.log(RegExp.$2, RegExp.$3, white)
		// 	let name = RegExp.$2
		// 	let hex = RegExp.$3
		// 	name = name.replace(/\s+/i, "")
			
		// 	hex = hex.replace(/\s+/i, "")

		// 	let resu = {
		// 		name,
		// 		hex,
		// 		white
		// 	}
		// 	result.push(JSON.stringify(resu))

		// 	tmp = reg.exec(tt)
		// }
		
    },

	// getList (url) {
	// 	let that = this
	// 	let getRequest = this.wxPromisify(wx.request)
	// 	const promise = getRequest({
	// 		url: url, // 仅为示例，并非真实的接口地址
	// 		data: {
	// 		},
	// 		header: {
	// 			'content-type': 'application/json', // 默认值
	// 			'charset': 'utf-8'
	// 		}
	// 	})

	// 	promise.then( res => {
	// 		let list = []
	// 		var reg = /<li class="listpalette"><h3><a href="(\S*)"\starget/ig
	// 		let mtext = res.data
	// 		var tmp = reg.exec(mtext)
	// 		while (tmp) {
	// 			console.log(RegExp.$1, reg.lastIndex)
	// 			list.push(RegExp.$1)

	// 			tmp = reg.exec(mtext)
	// 		}

	// 		// console.log(list)
	// 		that.globalData.tmplist = list

	// 		for (let i = 0; i < list.length; i++) {
	// 			that.getPage(list[i])
	// 		}
	// 	})

	// },

	// wxPromisify(fn) {
	// 	return function (obj = {}) {
	// 		return new Promise((resolve, reject) => {
	// 			obj.success = function (res) {
	// 				//成功
	// 				resolve(res)
	// 			}
	// 			obj.fail = function (res) {
	// 				//失败
	// 				reject(res)
	// 			}
	// 			fn(obj)
	// 		})
	// 	}
	// },

	// getPage(url) {
	// 	let that = this
	// 	let getRequest = this.wxPromisify(wx.request)
	// 	const promise = getRequest({
	// 		url: `http://www.peise.net/${url}`, // 仅为示例，并非真实的接口地址
	// 		data: {
	// 		},
	// 		header: {
	// 			'content-type': 'application/json', // 默认值
	// 		}
	// 	})

	// 	promise.then(res => {
	// 		console.log(url, 'statusCode:', res.statusCode)

	// 		that.globalData.count++
	// 		if (res.statusCode == "404") {
	// 			// that.globalData.tmpitems.push(null)
	// 			return
	// 		} else {
	// 			let mItem = that.getItem(res.data)
	// 			that.globalData.tmpitems.push( JSON.stringify(mItem))
	// 		}

	// 		if (that.globalData.count == that.globalData.tmplist.length) {
	// 			let str = that.globalData.tmpitems.join(",\n")
	// 			console.log(str)
	// 			wx.setClipboardData({
	// 				data: str,
	// 				success: function (res) {
	// 					wx.getClipboardData({
	// 						success: function (res) {
	// 							wx.showToast({
	// 								title: '复制成功'
	// 							})
	// 						}
	// 					})
	// 				}
	// 			})
	// 		}
	// 	})
	// },

	// getItem(mtext) {
	// 	let result = {
	// 		title: "",
	// 		colors: [],
	// 		desc: ""
	// 	}
	// 	var reg = /<h1>([\s\S]*?)<\/h1>/ig
	// 	reg.exec(mtext)

	// 	console.log(RegExp.$1, reg.lastIndex)
	// 	result["title"] = RegExp.$1

	// 	var reg = /background-color:\s#([0-9a-fA-F]+).*?alt="\1"/ig

	// 	var tmp = reg.exec(mtext)
	// 	while (tmp) {
	// 		// console.log(RegExp.$1, reg.lastIndex)
	// 		result.colors.push(`#${RegExp.$1}`)

	// 		tmp = reg.exec(mtext)
	// 	}

	// 	// 非贪婪查找 正则的每一次捕获都是按照匹配最长的结果捕获的,如何解决正则的贪婪性 ->在量词元字符后面添加一个？即可
	// 	reg = /<div[^>]*?id=['"]+endtext['"]+[^>]*?>([\s\S]*?)<\/div>/ig
	// 	reg.exec(mtext)

	// 	let desc = RegExp.$1
	// 	// 过滤<br/><span><p>等标签
	// 	desc = desc.replace(/<\/?[^>]*?>/ig, "")
	// 	// 过滤换行、空格等
	// 	desc = desc.replace(/\s+/ig, "")
	// 	// 过滤开始的&nbsp
	// 	desc = desc.replace(/^(&nbsp;)+/ig, "")
	// 	// 过滤结尾的&nbsp
	// 	desc = desc.replace(/(&nbsp;)+$/ig, "")
	// 	// 替换中间的&nbsp;为空格
	// 	desc = desc.replace(/(&nbsp;)+/ig, " ")

	// 	// console.log(desc, reg.lastIndex)

	// 	result["desc"] = desc

	// 	console.log('result: ', result)
	// 	return result
	// },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function(options) {
		console.log('app onShow, options:', options)
    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function() {
		console.log('app onHide')
    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function(msg) {

    }
})