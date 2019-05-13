const app = getApp()
const single_cn = require('../../datas/single_cn')
const single_jp = require('../../datas/single_jp')

// 页面最少要求显示条数
const MIN_COUNT = 10

const HELPER_KEY = 'HELPER_SINGLE'

Page({

	/**
     * 用户点击右上角分享
     */
	onShareAppMessage: function () {
		let query = this.data.query
		return {
			title: `${this.data.title}，助力你高效开发自己的配色方案！`,
			path: `pages/single/index?&category=${query.category}`
		}
	},

    /**
     * 页面的初始数据
     */
    data: {
		title: "中国传统色彩",
		query: {},

        loading: false,
		bottom_str: " 正在加载...",

		count_limit: 0,
        infos: []
    },

	closeHelper: function () {
		this.setData({
			SHOW_HELPER: false
		});

		wx.setStorageSync(HELPER_KEY, 'yes');
	},

	// 获取容器高度，使页面滚动到容器底部
	pageScrollToBottom: function () {
		wx.createSelectorQuery().select('#view_area').boundingClientRect(function (rect) {
			console.log('view_area: ', rect)
			// 使页面滚动到底部
			wx.pageScrollTo({
				scrollTop: rect.height,
				duration: 100
			})
			
		}).exec()
	},

	require(touch_bottom = false) {
		let that = this
		let sum = this.data.infos.length
		let count = this.data.count_limit
		console.log('require, current count: ', count, 'sum: ', sum)

		let flag = false
		let param = {
			start: 0,
			len: 60
		}

		// 有一个是0 或者 count小于sum
		if ( !count || !sum ) {
			flag = true
			param.start = 0
		} else if ( count < sum ) {
			if (touch_bottom || count < MIN_COUNT) {
				flag = true
				param.start = count
			}
		}

		if (flag) {
			// 请求第一屏时显示Loading
			if (param.start == 0) {
				wx.showLoading({
					title: '',
				})
			} else if (touch_bottom) {
				this.setData({
					loading: true
				}, () => {
					that.pageScrollToBottom()

					// 在当前同步流程结束后，下一个时间片执行
					// wx.nextTick(() => {
					// 	that.sendRequire(param)
					// })
					setTimeout(() => {
						that.sendRequire(param)
					}, 120)
				})

				return flag
			}

			this.sendRequire(param)
		}

		return flag
	}, 

	sendRequire(param) {
		let limit = this.data.count_limit
		let len = this.data.infos.length

		if (limit >= len) {
			console.log('hei, on more single color')
			wx.hideLoading()
			this.setData({
				bottom_str: " 真的没有了",
			})
		} else {
			limit += param.len
			if (limit >= len) {
				limit = len

				console.log('on more single color')
				wx.hideLoading()
				this.setSingles({
					count_limit: limit,
					infos: this.data.infos,
					bottom_str: " 阁下好臂力，已经拉到底了",
				})
			} else {
				wx.hideLoading()
				this.setSingles({
					loading: false,
					// 要加上infos才能触发刷新
					infos: this.data.infos,
					count_limit: limit
				})
			}
		}
	},

	onScrollToBottom: function(event) {
		console.log('onScrollToBottom, event: ', event)
	},

	/**
     * 生命周期函数--页面上拉触底事件的处理函数
     */
	onReachBottom() {
		// Do something when page reach bottom.
		console.log('onReachBottom, loading: ', this.data.loading)

		// 防止多次滑动触发，正在Loading时触发无效
		if (!this.data.loading) {
			this.require(true)
		}
	},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
		console.log('single onLoad, options:', options)
     
		const { category } = options

		this.data.query = options

		let infos = []
		let title = ""
		if (category == "single_cn") {
			infos = single_cn
			title = "中国传统色彩"
		} else if (category == "single_jp") {
			infos = single_jp
			title = "日本传统色彩"
		} else if (category == "single_web") {
			infos = single_jp
			title = "Web色彩对照表"
		}

		this.data.infos = infos

		this.setData({
			title
		})

		this.require()

    },

	setSingles(data) {
		console.log('setSingles, limit:', data.count_limit, 'length:', this.data.infos.length)
		this.setData(data)
	},
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
		let that = this
		setTimeout(() => {
			// 检查是否已经展示引导
			let IS_SHOW_HELPER = wx.getStorageSync(HELPER_KEY);
			if (!IS_SHOW_HELPER) {
				that.setData({
					SHOW_HELPER: true
				});
				// wx.setStorageSync(HELPER_KEY, 'yes');
			}
		}, 1000);
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
		let info = this.data.infos[idx]
		let str = `${info.name} ${info.hex}`
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
	}
})