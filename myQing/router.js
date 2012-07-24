var mongord = require("./mongord"),    //mongo数据库读取模块
	mongoinsert = require("./mongoinsert"),
	mongofind = require("./mongofind"),
	mongocheck = require("./mongocheck"),
	url=require('url'),
	querystring = require("querystring");
function find_router(req, res){
	if (querystring.parse(url.parse(req.url).query)['num'] == 1) {
		mongord.read_collection(req,res);
	}
	else if(querystring.parse(url.parse(req.url).query)['num'] == 2){
		mongoinsert.insert_collection(req,res);
	}
	else if (querystring.parse(url.parse(req.url).query)['num'] == 3) {
		mongofind.read_collection(req,res);
	}
	else if (querystring.parse(url.parse(req.url).query)['num'] == 4) {
		mongocheck.check_collection(req,res);
	}
}
exports.find_router = find_router;