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
			// {_id: "988c1b1b5cc1176d063d10d464612e8d", errMsg: "collection.add:ok"}
			console.log(`palettes [新增记录] success, title: ${item.title}, _id: ${res._id}`)
			resolve(res)
		}).catch(err => {
			console.error(`palettes [新增记录] failed, title: ${item.title}`, err)
			reject(err)
		})
	})
}

exports.main = async(event, context) => {
    console.log(event, context)

	// 承载所有读操作的 promise 的数组
	const tasks = []
	let data = dbdata
	let total = data.length
	for (let i = 0; i < total; i++) {
		let item = data[i]
		item["uptime"] = db.serverDate()

		// 新增一条记录
		const promise = addOne(item)
		tasks.push(promise)
	}

	console.log('total:', total)

	// 等待所有
	let res = (await Promise.all(tasks)).reduce((acc, cur, idx) => {
		// console.log(acc, cur, idx)
		return {
			data: acc.data.concat(cur._id),
			errMsg: acc.errMsg.concat(cur.errMsg)
		}
	}, { data: [], errMsg: []} )
	console.log('res: ', res.data, res.errMsg)

    return {
        event,

        total,
		ids_length: res.data.length,
		ids: res.data
    }
}