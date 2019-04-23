const app = getApp()
const config = require('../../config')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        loading: true,
        infos: [],
		bg_img: 'http://image.wufazhuce.com/FoOjDu9idRN61wTw1vdPGEn3sRVl',
        SHOW_MENU: false,
        nickName: null,
    },

    getUserInfo: function(e) {
        let {
            userInfo
        } = e.detail;
        this.setData({
            nickName: userInfo.nickName
        });
    },


    openMenu: function() {
        this.setData({
            SHOW_MENU: true
        })
    },
    closeMenu: function() {
        this.setData({
            SHOW_MENU: false
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        
        // wx.getUserInfo({
        //     success: ret => {
        //         this.setData({
        //             nickName: ret.userInfo.nickName
        //         });
        //     }
        // });

		let infos = app.globalData.palettes
		console.log(infos)
		this.setData({
			infos
		})
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

	onMatchHue: function() {
		wx.navigateTo({
			url: '/pages/hue/index?category=1',
		})
	},

	onMatchImpression: function () {
		wx.navigateTo({
			url: '/pages/hue/index?category=2',
		})
	},

	onTapMini: function (event) {
		console.log('onTapMini', JSON.stringify(event))
		let dataset = event.currentTarget.dataset
		wx.navigateTo({
			// url: '/pages/hue/index?category=2',
			url: `/pages/matching/index?category=${dataset.category}&idx=${dataset.idx}`,
		})
	},

	onFavorite: function () {

	}, 
})