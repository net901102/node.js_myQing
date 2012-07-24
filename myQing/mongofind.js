var http = require("http"),
    mongo = require("mongodb"),
    events = require("events"),
    url=require('url'),
    querystring = require("querystring");
function read_collection(req, res) {
    // 创建到test数据库的链接。相当于use test
    var news;
    var db = new mongo.Db("test", new mongo.Server('localhost', 27017, {}), {});
    db.open(function() {
        // 打开名为user的表
        db.collection("user", function(err, collection) {
            // select * from products 相当于db.user.find()
            var b;
            collection.find({name:querystring.parse(url.parse(req.url).query)['name']},function(err, cursor){
                cursor.toArray(function(err, items) {
                    var a = items[0].friend.friend_name;
                    // console.log(items[0].friend.length);
                    var i = 1;
                    while(a != undefined){
                        b[i-1] = a;
                        a = a+i;
                        i++;
                    }
                    // for (i in items[0].friend) {
                    //     console.log(i==="friend_name");
                    //     console.log(items[0].friend.i);
                    //     console.log(items[0].friend.friend_name+"12345");
                    //     collection.find({name:items[0].friend.i},{"blog":1,"_id":0},function(err,cursor){
                    //         cursor.toArray(function(err,items_news){
                    //             news += items_news;
                    //             console.log(news + "1234");
                    //         }); 
                    //     });
                    // }
                });
            });
            for (var i = 0; i < b.length; i++) {
                collection.find({name:b[i]},{"blog":1,"_id":0},function(err,cursor){
                    cursor.toArray(function(err,items){        
                        news += items;
                        console.log(news + "1234");
                        a = a + i;
                        i++;
                        console.log(a);
                    })  
                })  
            };
        });
    });
    // for (var i = 0; i < news.length; i++) {
    //     for (var i = j; i < news.length; i++) {
    //         if (news[i].art_time>news[j].art_time) {
    //             var l = news[i];
    //             news[i] = news[j];
    //             news[j] = l;
    //         }
    //     }
    // }
    // var news_rsp;
    // for (var i = 0; i < 100; i++) {
    //     news_rsp[i] = news[i];
    // }
    // console.log(news_rsp);
    // res.end(JSON.stringify(news_rsp));
}
exports.read_collection = read_collection;