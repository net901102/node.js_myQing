var http = require("http"),
    mongo = require("mongodb"),
    events = require("events"),
    url=require('url'),
    querystring = require("querystring");
function check_collection(req, res) {
    var products_emitter = new events.EventEmitter(),
    // 创建到test数据库的链接。相当于use test
    db = new mongo.Db("test", new mongo.Server('localhost', 27017, {}), {});
    db.open(function() {
        // 打开名为user的表
        db.collection("user", function(err, collection) {
            var check_user;
            collection.find({name:querystring.parse(url.parse(req.url).query)['name']},function(err, cursor) {
                cursor.toArray(function(err, items) {
                    if (items != null&&items.length != 0) {
                        res.writeHead(200);
                        var obj = {value:0};
                        res.end(JSON.stringify(obj));
                    }
                    else{
                        res.writeHead(200);
                        var obj = {value:1};
                        res.end(JSON.stringify(obj));
                    }
                });
            });
        });
    });
}
exports.check_collection = check_collection;