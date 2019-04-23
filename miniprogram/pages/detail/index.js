const app = getApp()
const util = require('../../utils/util')

Page({

    /**
     * 页面的初始数据
     */
    data: {
		info: [],
		colors: [],
		rgbs: [],
		title: "",
		desc: "",
		images: null,

		heights: []
    },

	getPaletteByID(id) {
		if (!id) return null;

		let list = app.globalData.palettes;
		for (let i = 0; i < list.length; i++) {
			if (id == list[i].id) {
				return list[i]
			}
		}
	},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

		console.log(options)
		let json = JSON.parse(options.json)

		// 基础信息通过参数传过来
		const { id, title, colors } = json

		// 可能这个json的数据不是全的，为了扩展方便，应该在有id的情况下去全局数组里取
		if (id) {
			// 取全体信息，包含描述等等
			this.data.info = this.getPaletteByID(id)
		} else {
			this.data.info = json
		}

		let info = this.data.info

		let rgbs = []
		for (let i = 0; i < colors.length; i++) {
			let nums = util.hex2num(colors[i])
			rgbs[i] = nums.join(", ")
		}

		let images = null
		if (info && info.images) images = info.images
		
		this.setData({
			title,
			colors,
			rgbs,
			desc: info ? info.desc : "",
			images
		})

        // 检查是否已经有描述了，没有就去获取
		// if (!info.desc) {

		// }
    },
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

	onCopy: function (event) {
		console.log('onCopy')
		
		let colors = this.data.colors
		let str = colors.join(", ")
		str = str.toLowerCase()
		console.log(str)
		wx.setClipboardData({
			data: str,
			success: function (res) {
				wx.getClipboardData({
					success: function (res) {
						wx.showToast({
							title: '复制成功'
						})
					}
				})
			}
		})
	},

	onSend: function (event) {
	},

	onImageLoaded: function (event) {
		console.log('onImageLoaded', event)
		const { width, height } = event.detail
		let idx = event.currentTarget.dataset.idx

		let oriw = 640
		let newh = Math.floor(oriw / width * height)
		console.log(newh)

		this.data.heights[idx] = newh
		
		this.setData({
			heights: this.data.heights
		})

	},

	previewImage: function () {
		wx.previewImage({
			urls: this.data.images,
		});
	},
})