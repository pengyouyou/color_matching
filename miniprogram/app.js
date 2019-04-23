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
			palettes: config.default_palettes,
		}
    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function(options) {

    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function() {

    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function(msg) {

    }
})