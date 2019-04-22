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

		let infos = [{
				title: "白色独角兽",
				colors: ['#EFCEE8', '#F3D7B5', '#FDFFDF', '#DAF9CA', '#C7B3E5']
			}, 
			{
				title: "海与天的边界",
				colors: ['#4cb4e7', '#ffc09f', '#ffee93', '#e2dbbe', '#a3a380']
			},
			{
				title: "晚霞剪影",
				colors: ['#B85A9A', '#9C2189', '#9E026D', '#B8288A', '#CC2F69']
			},
			{
				title: "盛开的桃花",
				colors: ['#9DD3FA', '#1F6FB5', '#FCD692', '#FAFFEB', '#FFFFFF']
			},
			{
				title: "神奈川冲浪里",
				colors: ['#0D1740', '#16245C', '#F8F2DC', '#A39F93', '#E9CFAE']
			},
			{
				title: "美好时代的回忆",
				colors: ['#E03636', '#EDD0BE', '#FF534D', '#EDD0BE', '#25C6FC']
			},
			{
				title: "午后奶茶",
				colors: ['#EDE387', '#EDEDED', '#3B200C', '#DE8100', '#CCFC62']
			},
			{
				title: "森林之光",
				colors: ['#82A6F5', '#EAF048', '#9FF048', '#2A5200', '#F6D6FF']
			},
			]
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