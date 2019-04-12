//index.js
const app = getApp()

Page({
    data: {
        avatarUrl: './user-unlogin.png',
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',

		interval: null,
		ctx: null,
		pause: false,

        width: 80,
        height: 17,
		ratio: 1,

		list: [
			// 107户型 前20名
			"2802", "2902", "2702", "3002", "2602",
			"2502", "3102", "2302", "2202", "2402", 
			
			"2803", "2903", "2703", "3003", "2603",
			"2503", "3103", "2303", "2203", "2403", 

			// 107户型 02、03交替进行
			"2102", "2103", "2002", "2003", "3202", "3203", "1902", "1903", 
			"1702", "1703", "1602", "1603", "1502", "1503", "1802", "1803", "1402", "1403", 
			"1302", "1303", "1202", "1203", "1102", "1103", "1002", "1003", 

			"0902", "0903", "0802", "0803", "0702", "0703", "0602", "0603", "0502", "0503", 

			// 123户型 前20名
			"2801", "2901", "2701", "3001", "2601",
			"2501", "3101", "2301", "2201", "2401", 
			
			"2804", "2904", "2704", "3004", "2604",
			"2504", "3104", "2304", "2204", "2404", 

			// 123户型 02、03交替进行
			"2101", "2104", "2001", "2004", "3201", "3204", "1901", "1904",
			"1701", "1704", "1601", "1604", "1501", "1504", "1801", "1804", "1401", "1404",
			"1301", "1304", "1201", "1204", "1101", "1104", "1001", "1004",

			"0901", "0904", "0801", "0804", "0701", "0704", "0601", "0604", "0501", "0504",
		],

		list_str: ""
    },

    onLoad: function() {

		let res = wx.getSystemInfoSync();
		this.data.ratio = res.windowWidth / 375;

		const ctx = this.data.ctx = wx.createCanvasContext('myCanvas')
		ctx.setLineWidth(1)

		let list_str = ""
		let list = this.data.list
		for (let i = 0; i < list.length; i++) {
			list_str += list[i]
			if (i % 5 == 4) {
				list_str += `\r\n`
			} else {
				list_str += `  `
			}
		}
		this.setData({
			list_str
			})

		this.init()
    },

	init() {
		let width = this.data.width
		let height = this.data.height
		let ratio = this.data.ratio

		const ctx = this.data.ctx
		ctx.setTextAlign('center')
		ctx.setTextBaseline('middle')
		ctx.setStrokeStyle('grey')
		for (let i = 33; i > 0; i--) {
			let y = 2 + (33 - i) * height
			ctx.setGlobalAlpha(1)
			ctx.setFillStyle('black')
			ctx.fillText(i, 14 * ratio, (y + 10) * ratio)
			ctx.fillText(i, 362 * ratio, (y + 10) * ratio)
			// ctx.fillText(i, 362, (y + 10))


			ctx.setGlobalAlpha(0.2)
			if (i > 30) {

			} else if (i > 20) {
				ctx.setFillStyle('green')
				for (let j = 0; j < 4; j++) {
					ctx.fillRect((28 + j * width) * ratio, y * ratio, width * ratio, height * ratio)
				}
			} else if (i > 10) {
				ctx.setFillStyle('aqua')
				for (let j = 0; j < 4; j++) {
					ctx.fillRect((28 + j * width) * ratio, y * ratio, width * ratio, height * ratio)
				}
			} else if (i > 4) {
				ctx.setFillStyle('skyblue')
				for (let j = 0; j < 4; j++) {
					ctx.fillRect((28 + j * width) * ratio, y * ratio, width * ratio, height * ratio)
				}
			}

			ctx.setGlobalAlpha(1)
			for (let j = 0; j < 4; j++) {
				ctx.strokeRect((28 + j * width) * ratio, y * ratio, width * ratio, height * ratio)
			}
		}

		ctx.draw(false)
	},

    onAgain() {
		let that = this
		that.clearClick()
		that.init()

		let idx = 0;
		let list = that.data.list
		that.drawRoom(idx)
		that.data.interval = setInterval(function () {
			if (!that.data.pause) {
				idx++
				if (idx < list.length) {
					that.drawRoom(idx)
				} else {
					that.clearClick()
				}
			}
		}, 600) //循环间隔 单位ms
    },

	clearClick() {
		if (this.data.interval) {
			clearInterval(this.data.interval)
			this.data.interval = null
		}

		this.setData({
			pause: false
		})
	},

	onPause() {
		let pause = !this.data.pause
		this.setData({
			pause
		})
	},

	drawRoom (idx) {
		console.log(`draw: ${idx}`)
		let width = this.data.width
		let height = this.data.height
		let ratio = this.data.ratio

		const ctx = this.data.ctx
		ctx.setFillStyle('red')

		let list = this.data.list
		// for (let i = 0; i < list.length; i++) {

			let num = parseInt(list[idx])
			let floor = Math.floor(num / 100)
			let room = num % 100

			let y = 2 + (33 - floor) * height
		ctx.fillRect((28 + (4 - room) * width + 1) * ratio, (y + 1) * ratio, (width - 2) * ratio, (height - 2) * ratio)

			ctx.setFillStyle('white')
			
		ctx.fillText(idx + 1, (28 + (4 - room) * width + width / 2) * ratio, (y + height / 2) * ratio)

		// }

		ctx.draw(true)
	}
})