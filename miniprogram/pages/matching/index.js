const app = getApp()
const config = require('../../config')

const HELPER_KEY = 'HELPER_20181223';

Page({

	/**
     * 用户点击右上角分享
     */
	onShareAppMessage: function () {
		return {
			title: `${this.data.title}，配色表，专注颜色搭配！`,
			path: `pages/matching/index?${JSON.stringify(this.data.query)}`
		}
	},

    /**
     * 页面的初始数据
     */
    data: {
		query: {},
		info: [],
		title: "配色组合",
		tips: ""
    },

    closeHelper: function() {
        this.setData({
            SHOW_HELPER: false
        });
        wx.setStorageSync(HELPER_KEY, 'yes');
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

		console.log('matching onLoad, options:', options)

		const { idx, category } = options

		this.data.query = { idx, category }

		let info = []
		let title = ""
		if (category == 1) {
			info = config.list_hue[idx]
			title = info.title + "配色组合"
		} else if (category == 2) {
			info = config.list_impression[idx]
			title = info.title + "配色组合"
		}
		
		console.log(idx, info)
		this.setData({
			info,
			title,
			tips: info.tip || ""
		})

        // 检查是否已经展示引导
        let IS_SHOW_HELPER = wx.getStorageSync(HELPER_KEY);
        if (!IS_SHOW_HELPER) {
            wx.showToast({
				title: '长按色块可以复制颜色值',
				icon: 'info'
			});
			wx.setStorageSync(HELPER_KEY, 'yes');
        }
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

	onLongTap: function (event) {
		console.log('onLongTap', JSON.stringify(event))
		
		let idx = event.currentTarget.dataset.idx
		let colors = this.data.info.color[idx]
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
})