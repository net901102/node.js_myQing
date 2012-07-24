var http = require("http"),
    mongo = require("mongodb"),
    events = require("events"),
    url=require('url'),
    querystring = require("querystring");
function insert_collection(req, res) {
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
                        check_user = 1;
                    }
                });
            });
            collection.insert({name:querystring.parse(url.parse(req.url).query)['name'],
            pwd:querystring.parse(url.parse(req.url).query)['pwd'],
            email:querystring.parse(url.parse(req.url).query)['email'],
            blog:{art1:"123",art2:"456"},
            friend:{friend_name:querystring.parse(url.parse(req.url).query)['name']},
            sex:querystring.parse(url.parse(req.url).query)['sex']});
            res.writeHead(200);
            var obj = {value:1}
            res.end(JSON.stringify(obj));
        });
    });
}
exports.insert_collection = insert_collection;