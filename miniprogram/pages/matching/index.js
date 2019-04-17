const app = getApp()
const config = require('../../config')

const HELPER_KEY = 'HELPER_20181223';

Page({

    /**
     * 页面的初始数据
     */
    data: {
		info: [],
		title: "搭配组合"
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

		console.log(options)
		const { idx, category } = options
		let info = []
		let title = ""
		if (category == 1) {
			info = config.list_hue[idx]
			title = info.title + "搭配组合"
		} else if (category == 2) {
			info = config.list_impression[idx]
			title = info.title + "搭配组合"
		}
		
		console.log(idx, info)
		this.setData({
			info,
			title
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

	onTap: function (event) {
		console.log('onTap', JSON.stringify(event))
		// wx.navigateTo({
		// 	url: '/pages/hue/index',
		// })
	},
})