// 云函数模板
// 部署：在 cloud-functions/getPalettes 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')
const dbdata = require(`dbdata`)

// 初始化 cloud
cloud.init()

const db = cloud.database()
const MAX_LIMIT = 100

addOne = (item) => {
	// 新增一条记录
	return new Promise((resolve, reject) => {
		db.collection('palettes').add({
			// 注意：data 字段表示需新增的 JSON 数据
			data: item
		}).then(res => {
			console.log(res)

			console.log(`palettes [新增记录] success, title: ${item.title}, _id: ${res._id}`)
			resolve(res)
		}).catch(err => {
			wx.showToast({
				icon: 'none',
				title: '新增记录失败'
			})
			console.error(`palettes [新增记录] failed, title: ${item.title}`, err)
			reject(err)
		})
	})
}

exports.main = async(event, context) => {
    console.log(event, context)

	let total = data.length
	// 承载所有读操作的 promise 的数组
	const tasks = []
	let data = dbdata
	for (let i = 0; i < total; i++) {
		let item = data[i]
		item["uptime"] = db.serverDate()

		// 新增一条记录
		const promise = addOne(item)
		tasks.push(promise)
	}

	console.log('total:', total)

	// 等待所有
	let res = await Promise.all(tasks).reduce((acc, cur) => ({
		data: acc.data.concat(cur.data),
		errMsg: acc.errMsg,
	}))
	console.log('res: ', res)


    // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
    const wxContext = cloud.getWXContext()
    console.log('wxContext:', wxContext)

    return {
        event,
        openid: wxContext.OPENID,
        unionid: wxContext.UNIONID,

        total,
		data: res.data
    }
}