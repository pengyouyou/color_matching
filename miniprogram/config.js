/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

const host = '14592619.qcloud.la'

const config = {

    // 下面的地址配合云端 Server 工作
    host,

    // 登录地址，用于建立会话
    loginUrl: `https://${host}/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `https://${host}/testRequest`,

    // 用code换取openId
    openIdUrl: `https://${host}/openid`,

    // 测试的信道服务接口
    tunnelUrl: `https://${host}/tunnel`,

    // 生成支付订单的接口
    paymentUrl: `https://${host}/payment`,

    // 发送模板消息接口
    templateMessageUrl: `https://${host}/templateMessage`,

    // 发送订阅消息接口
    subscribeMessageUrl: `https://${host}/subscribeMessage`,

    // 上传文件接口
    uploadFileUrl: `https://${host}/upload`,

    // 下载示例图片接口
    downloadExampleUrl: `https://${host}/static/weapp.jpg`,

    // 云开发环境 ID
    envId: 'test-5a5603',
    // envId: 'release-510f39',

    // 云开发-存储 示例文件的文件 ID
    demoImageFileId: 'cloud://release-b86096.7265-release-b86096/demo.jpg',
    demoVideoFileId: 'cloud://release-b86096.7265-release-b86096/demo.mp4',

    // 按色相搭配配置
	list_hue: [
		{
			title: "红色", 
			bgcolor: 'red',
			color: [['#FFFFCC', '#CCFFFF', '#FFCCCC'], ['#99CCCC', '#FFCC99', '#FFCCCC'],
				['#FF9999', '#996699', '#FFCCCC'], ['#CC9999', '#FFFFCC', '#CCCC99'],
				['#FFCCCC', '#FFFF99', '#CCCCFF'], ['#0099CC', '#CCCCCC', '#FF6666'],

				['#FF9966', '#FF6666', '#FFCCCC'], ['#CC9966', '#666666', '#CC9999'],
				['#FF6666', '#FFFF66', '#99CC66'], ['#CC3333', '#CCCCCC', '#003366'],
				['#993333', '#CCCC00', '#663366'], ['#CCCC99', '#666666', '#CC9999'],

				['#FF6666', '#FFFF00', '#0066CC'], ['#CC0033', '#333333', '#CCCC00'],
				['#336633', '#990033', '#FFCC99'], ['#993333', '#CC9966', '#003300'],
				['#FF0033', '#333399', '#CCCC00'], ['#CC0033', '#000000', '#003399'],

				['#000000', '#99CC00', '#CC0033'], ['#999933', '#993333', '#333300']
		]},
		{
			title: "橙色",
			bgcolor: 'orange',
			color: [['#FFCC99', '#FFFF99', '#99CC99'], ['#FFCC99', '#CCFF99', '#CCCCCC'],
				['#FFCC99', '#FFFFCC', '#99CCFF'], ['#FF9966', '#FFFFCC', '#99CC99'],
				['#FF9900', '#FFFFCC', '#336699'], ['#CCCC33', '#FFFF99', '#CC9933'],

				['#996600', '#FFCC33', '#FFFFCC'], ['#FFFFCC', '#CC9933', '#336666'],
				['#FF9900', '#FFFF00', '#0099CC'], ['#99CC33', '#FF9900', '#FFCC00'],
				['#FF9933', '#99CC33', '#CC6699'], ['#FF9933', '#FFFF00', '#3366CC'],

				['#FF9933', '#FFFFCC', '#009966'], ['#FF6600', '#FFFF66', '#009966'],
				['#990033', '#CCFF66', '#FF9900'], ['#FF9966', '#996600', '#CCCC00'],
				['#CC6600', '#999999', '#CCCC33'], ['#CC6600', '#CCCC33', '#336699'],

				['#000000', '#FF9933', '#999966'], ['#663300', '#FF9933', '#FFFF66']
			]
		},
		{
			title: "黄色",
			bgcolor: 'yellow',
			color: [['#FFFFCC', '#CCFFFF', '#FFCCCC'], ['#FFFF00', '#FFFFFF', '#CCCC00'],
				['#99CCFF', '#FFCC33', '#FFFFCC'], ['#FFFF33', '#99CCFF', '#CCCCCC'],
				['#FFFF00', '#FFFFFF', '#9933FF'], ['#99CCFF', '#FFCC33', '#FFFF33'],

				['#FFCC00', '#66CC00', '#FFFF99'], ['#FF9900', '#FFFF00', '#0099CC'],
				['#FFCC00', '#0000CC', '#FFFF99'], ['#CC9999', '#FFFFCC', '#6666CC'],
				['#999933', '#FFFFCC', '#CC99CC'], ['#CCCC00', '#666600', '#FFFF66'],

				['#FF9966', '#FFFFCC', '#99CC99'], ['#FFCC33', '#FFFFCC', '#999966'],
				['#FFCC99', '#FF6666', '#FFFF66'], ['#FFCC99', '#999966', '#FFFF00'],
				['#FFFF99', '#99CC99', '#666600'], ['#999966', '#FFFF99', '#333333'],

				['#006633', '#333300', '#CCCC99'], ['#006633', '#663300', '#CCCC66']
			]
		},
		{
			title: "黄绿色",
			bgcolor: 'yellowgreen',
			color: [['#33CC33', '#6666CC', '#FFFFFF'], ['#CCCC33', '#FFFFFF', '#CCFFCC'],
				['#FFCC99', '#CCFF99', '#CCCCCC'], ['#CCCC00', '#999966', '#FFFFCC'],
				['#CCCC33', '#FFFFFF', '#336699'], ['#CCCC33', '#999999', '#CCFFFF'],

				['#00CC00', '#0066CC', '#99CCCC'], ['#99CC33', '#FF9900', '#FFCC00'],
				['#99CC33', '#CCCCFF', '#663300'], ['#CCCC33', '#993399', '#000000'],
				['#CC6600', '#999999', '#CCCC33'], ['#CC9933', '#FFFF99', '#99CC99'],

				['#669933', '#CCCC33', '#663300'], ['#99CC33', '#CCCCCC', '#000000'],
				['#CC6600', '#CCCC33', '#336699'], ['#666600', '#CCCC66', '#CCFFCC'],
				['#333366', '#99CC33', '#336699'], ['#666666', '#99CC33', '#003366'],

				['#003333', '#99CC33', '#999999'], ['#996633', '#FFFF99', '#99CC66']
			]
		},
		{
			title: "绿色",
			bgcolor: 'green',
			color: [['#009966', '#FFFFFF', '#FFFF00'], ['#339933', '#FFFFFF', '#9933CC'],
				['#339933', '#FFFFFF', '#000000'], ['#339933', '#99CC00', '#FFFFCC'],
				['#FFFFCC', '#CCCC66', '#336666'], ['#99CC33', '#FFFF66', '#336600'],

				['#339933', '#CC9900', '#666666'], ['#339966', '#CCCCCC', '#003366'],
				['#669933', '#CCCCCC', '#000000'], ['#339933', '#CCCCCC', '#6699CC'],
				['#006633', '#CCCC33', '#CC9933'], ['#339933', '#666633', '#CCCC66'],

				['#339933', '#FFCC33', '#336699'], ['#006633', '#669933', '#99CC99'],
				['#336666', '#996633', '#CCCC33'], ['#003300', '#669933', '#CCCC99'],
				['#006633', '#990033', '#FF9900'], ['#006633', '#333300', '#CCCC99'],

				['#006633', '#663300', '#CCCC66'], ['#993333', '#CC9966', '#003300']
			]
		},
		{
			title: "青绿色",
			bgcolor: 'mediumturquoise',
			color: [['#CCFF99', '#FFFFFF', '#66CCCC'], ['#339999', '#FFFFFF', '#99CCFF'],
				['#66CC99', '#FFFFFF', '#666699'], ['#009999', '#66CCCC', '#CCFFFF'],
				['#66CCCC', '#CCFF66', '#FF99CC'], ['#339999', '#FFFF00', '#336699'],

				['#CC9933', '#339999', '#FFCC33'], ['#FFCC00', '#009999', '#CC3333'],
				['#669999', '#CCCCCC', '#CC99CC'], ['#339999', '#CCCCCC', '#000000'],
				['#339999', '#666699', '#CCCCCC'], ['#003333', '#99CC99', '#FFFFCC'],

				['#669999', '#CCFFCC', '#996699'], ['#996699', '#CCCC99', '#669999'],
				['#999966', '#CCCC99', '#339999'], ['#336666', '#669999', '#CCCC99'],
				['#999999', '#003366', '#669999'], ['#663333', '#339999', '#CCCC66'],

				['#333333', '#339999', '#CCFFCC'], ['#336666', '#3399CC', '#666666']
			]
		},
		{
			title: "蓝色",
			bgcolor: 'blue',
			color: [['#FFFFCC', '#CCFFFF', '#FFCCCC'], ['#99CCCC', '#FFFFFF', '#3399CC'],
				['#CCFFCC', '#99CCCC', '#FFFFCC'], ['#CCCCFF', '#FFFFFF', '#99CCFF'],
				['#FFCC99', '#FFFFCC', '#99CCFF'], ['#336699', '#FFFFFF', '#99CCCC'],

				['#99CCCC', '#FFFFFF', '#CCFF99'], ['#CCCCFF', '#FFFFCC', '#CCFFFF'],
				['#99CCCC', '#FFFFFF', '#336699'], ['#99CCFF', '#CCFFFF', '#6699CC'],
				['#99CC33', '#FFFFFF', '#3399CC'], ['#0099CC', '#FFFFCC', '#666699'],

				['#CCCCCC', '#003366', '#99CCFF'], ['#0099CC', '#FFFFFF', '#666666'],
				['#CCCCCC', '#6699CC', '#666666'], ['#336699', '#CCCC99', '#003366'],
				['#3399CC', '#003366', '#CCCCCC'], ['#6699CC', '#006699', '#000000'],

				['#003366', '#CCCCCC', '#006699'], ['#999933', '#336699', '#333333']
			]
		},
		{
			title: "蓝紫色",
			bgcolor: 'blueviolet',
			color: [['#CCFFFF', '#FFFFFF', '#CCCCFF'], ['#CCCCCC', '#FFFFFF', '#666699'],
				['#99CCFF', '#FFFFFF', '#333399'], ['#6666CC', '#FFFFFF', '#FF9999'],
				['#9999FF', '#FFCC33', '#FFFFCC'], ['#0099CC', '#FFFFCC', '#666699'],

				['#0000FF', '#6699FF', '#CCFFFF'], ['#6666FF', '#66CCFF', '#CCFF66'],
				['#669999', '#FFFFCC', '#6666CC'], ['#9999CC', '#FF9999', '#666699'],
				['#003399', '#FFCCCC', '#6699CC'], ['#CC6666', '#333399', '#CCCC00'],

				['#000066', '#6666FF', '#CCCCCC'], ['#003399', '#CCFF99', '#333333'],
				['#333366', '#CC0033', '#CCCCCC'], ['#336699', '#CCCC66', '#333300'],
				['#003399', '#FFFF99', '#000000'], ['#990066', '#CCCC33', '#003399'],

				['#CC3333', '#000000', '#003399'], ['#333366', '#999966', '#333333']

			]
		},
		{
			title: "紫色",
			bgcolor: 'purple',
			color: [['#FFFFCC', '#FFFF99', '#CCCCFF'], ['#9999CC', '#99CC99', '#FFFFFF'],
				['#FFCCCC', '#CCCCFF', '#CCCC99'], ['#9999CC', '#FFFFCC', '#FFCCCC'],
				['#FFCCCC', '#FF99CC', '#CCCCFF'], ['#660066', '#FFFFFF', '#663333'],

				['#CCCC99', '#333333', '#9966CC'], ['#CCCC00', '#FF9966', '#663399'],
				['#996699', '#FFCCCC', '#CC99CC'], ['#996666', '#CC99CC', '#FFCCCC'],
				['#FFCC99', '#FF9933', '#663366'], ['#333399', '#CCCCFF', '#CC99CC'],

				['#663366', '#CCCCCC', '#CC99CC'], ['#996699', '#9999CC', '#CCCCFF'],
				['#CC9966', '#999999', '#663366'], ['#330033', '#666666', '#669999'],
				['#CCCCCC', '#999999', '#663366'], ['#FF33CC', '#CCCC99', '#663366'],

				['#663366', '#999999', '#CCCCFF'], ['#999966', '#993333', '#330033']

			]
		},
		{
			title: "紫红色",
			bgcolor: 'fuchsia',
			color: [['#FFCCCC', '#FFFFFF', '#99CC00'], ['#FF99CC', '#FFFFFF', '#993366'],
				['#66CC99', '#FFFFFF', '#CC6699'], ['#CC9999', '#FFCCCC', '#CC99CC'],
				['#FFCCCC', '#FFFF99', '#CCCCFF'], ['#FFFF99', '#993399', '#FF99CC'],

				['#66CCCC', '#CCFF66', '#FF99CC'], ['#FF99CC', '#003399', '#CCCC00'],
				['#FFCCCC', '#FF99CC', '#CCCCFF'], ['#FF9999', '#FFCCCC', '#FF99CC'],
				['#669966', '#CC6699', '#FFCCFF'], ['#CCCCCC', '#CC99CC', '#CC3399'],

				['#CC3399', '#FFCC99', '#FF6666'], ['#FF3399', '#CCCC99', '#663366'],
				['#663366', '#FFFFCC', '#FFCCCC'], ['#663366', '#CCCCCC', '#CC99CC'],
				['#990066', '#FFCC00', '#CC0033'], ['#990066', '#CCCCCC', '#006699'],

				['#999900', '#990033', '#000000'], ['#990066', '#000000', '#009966']
			]
		}
	],


	// 按印象搭配配置
	list_impression: [
		{
			title: "柔和、明亮、温柔",
			tip: "亮度高的色彩搭配在一起就会得到柔和、明亮、温和的感觉。为了避免刺眼，设计师一般会用低亮度的前景色调和，同时色彩在色环之间的距离也有助于避免沉闷。",
			bgcolor: '#CCFFFF',
			color: [['#ffffcc', '#ccffff', '#ffcccc'], ['#ffcccc', '#ffff99', '#ccccff'],
				['#ff9966', '#ff6666', '#ffcccc'], ['#ffcc99', '#ccff99', '#cccccc'],
				['#ffcccc', '#ccccff', '#ccffcc'], ['#ccffff', '#cccccc', '#ccff99'],

				['#ffcccc', '#ffffff', '#99cc99'], ['#99cccc', '#ffcc99', '#ffcccc'],
				['#ccccff', '#ffcccc', '#ccffff'], ['#ffcc99', '#ffffcc', '#99cccc']

			]
		},
		{
			title: "柔和、洁净、爽朗",
			tip: "对于柔和、清洁、爽朗的印象，色环中蓝到绿相邻的颜色应该是最适合的，并且亮度偏高。可以看到，几乎每个组合都有白色参与。当然在实际设计时，可以用蓝绿相反色相的高亮度有彩色代替白色。",
			bgcolor: '#99CCCC',
			color: [['#ccff99', '#ffffff', '#99ccff'], ['#99cccc', '#ffffff', '#ccff99'],
				['#ccffcc', '#ffffff', '#66cccc'], ['#ccccff', '#ffffff', '#99cccc'],
				['#ccffcc', '#99cccc', '#ffffcc'], ['#ccffff', '#ffffff', '#ccccff'],

				['#ccffff', '#ffffff', '#99ccff'], ['#66ccff', '#ffffff', '#ccffff'],
				['#6699cc', '#ffffff', '#99ccff'], ['#ccccff', '#ffffff', '#99ccff']

			]
		},
		{
			title: "可爱、快乐、有趣",
			tip: "可爱、快乐、有趣印象中的色彩搭配特点是，色相分布均匀，冷暖搭配，饱和度高，色彩分辨度高。",
			bgcolor: '#99CC33',
			color: [['#66cccc', '#ccff66', '#ff99cc'], ['#ff9999', '#ffffff', '#ffcc99'],
				['#ff6666', '#ffff66', '#99cc66'], ['#666699', '#ffffff', '#ff9999'],
				['#99cc33', '#ff9900', '#ffcc00'], ['#ff0033', '#ffffff', '#ff9966'],

				['#ff9900', '#ccff00', '#cc3399'], ['#99cc33', '#ffffff', '#ff6600'],
				['#993366', '#cccc33', '#666633'], ['#66cccc', '#ffffff', '#666699']

			]
		},
		{
			title: "活泼、快乐、有趣",
			tip: "活泼、快乐、有趣相对前一种印象，色彩选择更加广泛，最重要的变化是将纯白色用低饱和有彩色或者灰色取代。",
			bgcolor: '#0099CC',
			color: [['#cc9999', '#ffff99', '#666699'], ['#ff9900', '#ffff00', '#0099cc'],
				['#cccc99', '#cc3399', '#99cc00'], ['#ff6666', '#ffff00', '#3399cc'],
				['#cc6600', '#999999', '#cccc33'], ['#ff9933', '#ffffcc', '#009933'],

				['#0099cc', '#cccccc', '#ff6666'], ['#ff6600', '#ffff66', '#009966'],
				['#cc6633', '#ffcc99', '#cc6600'], ['#cc0066', '#009999', '#ffcc33']

			]
		},
		{
			title: "运动型、轻快",
			tip: "运动的色彩要强化激烈、刺激的感受，同时还要体现健康、快乐、阳光。因此饱和度较高、亮度偏低的色彩在这类印象中经常登场。",
			bgcolor: '#336699',
			color: [['#ff6666', '#ffff00', '#006699'], ['#ff9966', '#ffffff', '#0066cc'],
				['#339933', '#ffcc33', '#336699'], ['#ff9900', '#ffffcc', '#336699'],
				['#cc6600', '#cccc44', '#336699'], ['#99cc33', '#ffffff', '#0099cc'],

				['#99cc33', '#ff6666', '#336699'], ['#336699', '#ffffff', '#99cccc'],
				['#ff0033', '#333399', '#cccc00'], ['#33cc99', '#ffff00', '#336699']

			]
		},
		{
			title: "轻快、华丽、动感",
			tip: "华丽的印象要求页面充斥有彩色，并且饱和度偏高，而亮度适当减弱则能强化这种印象。",
			bgcolor: '#FFCC00',
			color: [['#990066', '#ffcc00', '#cc0033'], ['#ffcc33', '#333399', '#ff0033'],
				['#666699', '#ffff00', '#ff0033'], ['#ff0033', '#006699', '#ffff33'],
				['#ffcc00', '#009999', '#cc3366'], ['#ff0033', '#cccc00', '#006699'],

				['#cccc00', '#ff9933', '#663399'], ['#ff9933', '#ffff00', '#336699'],
				['#cc3333', '#ffcccc', '#99cc00'], ['#003399', '#ffff00', '#ff6600']

			]
		},
		{
			title: "狂野、充沛、动感",
			tip: "狂野的印象空间中少不了低亮度的色彩，甚至可以用适当的黑色搭配。其他有彩色的饱和度高，对比强烈。",
			bgcolor: '#CC0033',
			color: [['#990066', '#ffff00', '#003399'], ['#cc0033', '#000000', '#003399'],
				['#003399', '#ffff00', '#f00000'], ['#cc3333', '#cccccc', '#003366'],
				['#cc0033', '#333333', '#cccc00'], ['#000000', '#99cc00', '#cc0033'],

				['#ff0033', '#333333', '#ff9900'], ['#990066', '#000000', '#009966'],
				['#666666', '#ff6600', '#333333'], ['#993333', '#cccc00', '#663366']

			]
		},
		{
			title: "华丽、花俏、女性化",
			tip: "女性化的页面中紫色和品红是主角、粉红、绿色也是常用色相。一般它们之间要进行高饱和的搭配。",
			bgcolor: '#CC3399',
			color: [['#ffff99', '#993399', '#ff99cc'], ['#ff6666', '#ffffff', '#339999'],
				['#ff99cc', '#003399', '#ccff00'], ['#66cc99', '#ffffff', '#cc6699'],
				['#cc3399', '#ffcc99', '#ff6666'], ['#ffcccc', '#ffffff', '#993366'],

				['#cc6699', '#ffff00', '#666699'], ['#cc6699', '#99cc66', '#663366'],
				['#ff33cc', '#cccc99', '#663366'], ['#cc3399', '#ffcc99', '#ff6666']

			]
		},
		{
			title: "回味、女性化、优雅",
			tip: "优雅的感觉很奇特，色彩的饱和度一般要降下来。一般以蓝、红之间的相邻，调节亮度和饱和度进行搭配。",
			bgcolor: '#CC99CC',
			color: [['#cccccc', '#cc99cc', '#cc3399'], ['#ffcccc', '#ff99cc', '#ccccff'],
				['#cc3399', '#9933cc', '#cc99cc'], ['#9999cc', '#ffffcc', '#ffcccc'],
				['#663366', '#cccccc', '#cc99cc'], ['#ff9999', '#ffcccc', '#ff99cc'],

				['#996666', '#cc99cc', '#ffcccc'], ['#cc9999', '#cccccc', '#ffcccc'],
				['#ff9999', '#996699', '#ffcccc'], ['#996699', '#ffcccc', '#cc99cc']

			]
		},
		{
			title: "高尚、自然、安稳",
			tip: "高尚一般要用低亮度的黄绿色，色彩亮度降下去，注意色彩的平衡，页面就会显得安稳。",
			bgcolor: '#CCCC00',
			color: [['#cccc33', '#ffff99', '#cc9933'], ['#cc9966', '#cccc66', '#669999'],
				['#ff9966', '#996600', '#cccc00'], ['#cccc66', '#660033', '#cc6600'],
				['#cccc00', '#666600', '#ccccff'], ['#cc9933', '#009999', '#ffcc33'],

				['#999966', '#cccc99', '#339999'], ['#99cc99', '#669933', '#336633'],
				['#666633', '#999933', '#cc9966'], ['#660000', '#cc9900', '#cccc99']

			]
		},
		{
			title: "冷静、自然",
			tip: "绿色是冷静、自然印象的主角，但是绿色作为页面的主要色彩，容易陷入过于消极的感觉传达，因此应该特别重视图案的设计。",
			bgcolor: '#006633',
			color: [['#ffff99', '#99cc99', '#666600'], ['#996633', '#ffff99', '#99cc66'],
				['#006600', '#66cc66', '#ccff99'], ['#666600', '#cccc66', '#ccffcc'],
				['#669933', '#cccc33', '#663300'], ['#666633', '#999933', '#cc9966'],

				['#003300', '#669933', '#cccc99'], ['#006633', '#663300', '#cccc66'],
				['#666600', '#ffffcc', '#999999'], ['#006633', '#333300', '#cccc99']

			]
		},
		{
			title: "传统、高雅、优雅",
			tip: "传统的内容一般要降低色彩的饱和度，特别是棕色很适合。前面介绍紫色也是高雅和优雅印象的常用色相。",
			bgcolor: '#996699',
			color: [['#999933', '#ffffcc', '#cc99cc'], ['#cc9966', '#666666', '#cc9999'],
				['#cccc99', '#333333', '#9966cc'], ['#cccc99', '#666666', '#cc9999'],
				['#996699', '#cccc99', '#669999'], ['#cc9966', '#999999', '#666666'],

				['#339966', '#cccccc', '#996699'], ['#663366', '#999999', '#ccccff'],
				['#996699', '#9999cc', '#ccccff'], ['#cccc99', '#999999', '#663300']

			]
		},
		{
			title: "传统、稳重、古典",
			tip: "传统、稳重、古典都是保守的印象，色彩的选择上应该尽量用低亮度的暖色，这种搭配符合成熟的审美。",
			bgcolor: '#660033',
			color: [['#6699cc', '#663366', '#cccc99'], ['#990033', '#ccff66', '#ff9900'],
				['#666699', '#660033', '#99cc99'], ['#663300', '#ff9933', '#ffff66'],
				['#990033', '#006633', '#cccc00'], ['#660033', '#999933', '#660099'],

				['#993366', '#cccc33', '#666633'], ['#996600', '#cccc66', '#666600'],
				['#009933', '#cc9900', '#666666'], ['#666633', '#cccc33', '#cc3366']

			]
		},
		{
			title: "忠厚、稳重、有品位",
			tip: "亮度、饱和度偏低的色彩会给人忠厚、稳重的感觉。这样的搭配为了避免色彩过于保守，使页面僵化、消极，应当注重冷暖结合和明暗对比。",
			bgcolor: '#336666',
			color: [['#ffffcc', '#cc9933', '#336666'], ['#336666', '#996633', '#cccc33'],
				['#336633', '#990033', '#ffcc99'], ['#333366', '#669999', '#996600'],
				['#993333', '#cc9966', '#003300'], ['#336633', '#cccc99', '#333366'],

				['#663300', '#999933', '#333333'], ['#663366', '#666666', '#333366'],
				['#999900', '#990033', '#cc99cc'], ['#333366', '#990033', '#cccccc']

			]
		},
		{
			title: "简单、洁净、进步",
			tip: "简单、洁净的色彩在色相上可以用蓝、绿表现，并大面积留白。而进步的印象可以多用蓝色，搭配低饱和甚至灰色。",
			bgcolor: '#ABCDEF',
			color: [['#cccccc', '#ffffff', '#666699'], ['#ccff66', '#ffffff', '#003366'],
				['#99ccff', '#ffffff', '#336699'], ['#cccc33', '#ffffff', '#336699'],
				['#0099ff', '#ffffcc', '#666699'], ['#99cc33', '#cccccc', '#000000'],

				['#cccccc', '#003366', '#99ccff'], ['#0099cc', '#ccff66', '#666666'],
				['#3399cc', '#003366', '#cccccc'], ['#abcdef', '#abcdef', '#abcdef']

			]
		},
		{
			title: "简单、质感、低调",
			tip: "灰色是最为平衡的色彩，并且是塑料金属质感的主要色彩之一，因而要表达质感、低调，可以适当使用，甚至大面积使用。但是要注重图案和质感的构造。",
			bgcolor: '#999999',
			color: [['#99ccff', '#ffff66', '#666666'], ['#336666', '#ffffff', '#999999'],
				['#0099cc', '#ffffff', '#666666'], ['#999999', '#cccccc', '#336666'],
				['#cccccc', '#999999', '#663366'], ['#666666', '#cccccc', '#6699cc'],

				['#999999', '#ffffff', '#333366'], ['#669999', '#cccccc', '#666666'],
				['#999999', '#cccccc', '#333333'], ['#abcdef', '#abcdef', '#abcdef']

			]
		},
		{
			title: "简单、进步、时尚",
			tip: "表现进步的色彩主要以蓝色为主，搭配灰色。而色彩的明度统一、色相相邻，在色彩上会显得简洁。",
			bgcolor: '#006699',
			color: [['#333366', '#99cc33', '#336699'], ['#999999', '#003366', '#669999'],
				['#003399', '#ccff99', '#333333'], ['#999933', '#336699', '#333333'],
				['#666666', '#99cc33', '#003366'], ['#999999', '#336699', '#333333'],

				['#3366cc', '#cccc66', '#333300'], ['#6699cc', '#006699', '#000000'],
				['#003366', '#cccccc', '#006699'], ['#000000', '#999999', '#003366']

			]
		}
	],

	maopi: [
		'#333366', '#99CC33', '#336699', '#999999', '#003366', '#669999', '#003399', '#CCFF99', '#333333', '#999933', '#336699', '#333333', '#666666', '#99CC33', '#003366', '#999999', '#336699', '#333333', '#3366CC', '#CCCC66', '#333300', '#6699CC', '#006699', '#000000', '#003366', '#CCCCCC', '#006699', '#000000', '#999999','#003366'
	]
}

module.exports = config