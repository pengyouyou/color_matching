console.log('run pull_web_data')
var http = require("http");





//var querystring = require('querystring');
//var options = {
	//host: 'www.peise.net', // 请求地址 域名，google.com等..
	//port:80,
	//path:'/2016/0316/5491.html', // 具体路径eg:/upload
	//method: 'GET', // 请求方式, 这里以post为例
	//headers: { // 必选信息,  可以抓包工看一下
		//'Content-Type': 'application/text'
	//}
//};
    //http.get(options, function(res) {
        //var resData = "";

		//res.setEncoding('utf8');
        //res.on("data",function(data){
            //resData += data;
        //});
        //res.on("end", function() {
            ////callback(null,JSON.parse(resData));
			//console.log('end', resData)
			//let item = getItem(resData)
			//console.log(item)
        //});
    //})

function getItem(mtext) {

	let result = {
		title: "",
		colors: [],
		desc: ""
	}
	var reg = /<h1>(\S*)<\/h1>/ig
	reg.exec(mtext)

	console.log(RegExp.$1, reg.lastIndex)
	result["title"] = RegExp.$1

	var reg = /background-color:\s#([0-9a-fA-F]+).*alt="\1"/ig

	var tmp = reg.exec(mtext)
	while (tmp) {
		console.log(RegExp.$1, reg.lastIndex)
		result.colors.push(`#${RegExp.$1}`)

		tmp = reg.exec(mtext)
	}

	reg = /id="endtext">\s*<p>(\S*)<\/p>/ig
	reg.exec(mtext)
	console.log(RegExp.$1, reg.lastIndex)
	result["desc"] = RegExp.$1

	console.log('result: ', result)
	return result
}
//let text = `<div id="position"><a href="">首页</a><a href="/palette/">搭配</a></div>
   //<div>
    //<h1>记忆深处无人知</h1>
    //<div id="colorbox"><span style="width:125.2px;background-color: #B4145E" alt="B4145E"></span>              <span style="width:125.2px;background-color: #35081D" alt="35081D"></span>              <span style="width:125.2px;background-color: #214579" alt="214579"></span>              <span style="width:125.2px;background-color: #F7C482" alt="F7C482"></span>              <span style="width:125.2px;background-color: #EFECC1" alt="EFECC1"></span>              <div class="clear"></div></div>
      //<div id="digg_div"><g:plusone></g:plusone></div>
      //<div class="clear"></div>
    //<div id="text"><a href="javascript:myAddPanel('记忆深处无人知',window.location.href)" class="icon_1">收藏本信息</a> <span>发布时间：2016-03-23</span></div>
    //<div id="endtext">
    //<p>流行和经典常常互相转换，这个搭配属于过于某个时间比较流行，然后过了一段时间的沉寂，现在又重新来到我们面前，高纯度的嫣红和同类色浅绯红形成同类之间的对比，又和不同系的深蓝色产生了极大的对比，形成了流行与经典的搭配。<br/></p></div>
//<h3>下载到</h3>`

let text = `<h1>美国时尚</h1>
    <div id="colorbox"><span style="width:125.2px;background-color: #FF4124" alt="FF4124"></span>              <span style="width:125.2px;background-color: #ABABAB" alt="ABABAB"></span>              <span style="width:125.2px;background-color: #595957" alt="595957"></span>              <span style="width:125.2px;background-color: #050501" alt="050501"></span>              <span style="width:125.2px;background-color: #FF0F33" alt="FF0F33"></span>              <div class="clear"></div></div>
      <div id="digg_div"><g:plusone></g:plusone></div>
      <div class="clear"></div>
    <div id="text"><a href="javascript:myAddPanel('美国时尚',window.location.href)" class="icon_1">收藏本信息</a> <span>发布时间：2016-02-27</span></div>
    <div id="endtext">
    <p><span style="font-family: 宋体, SimSun;">荧光橙与灰黑大胆的搭配诠释了美国人的冒险精神，不羁与张扬。</span><br/></p><p><span style="font-family: 宋体, SimSun;">最后的相近色也是很好的收尾。</span></p></div>
<h3>下载到</h3>`

let item = getItem(text)
console.log(item)