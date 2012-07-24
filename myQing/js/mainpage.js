window.onload = function () {
                //初始参数
                var reset = 0; //某些滚动条会触发三次scroll事件 用这个解决
                var surplusHeight = 1000; //差值
                var imgWidth = "208px"; //img的宽度
                var imgHeight = 0; //img的高度
                var textHeight = 0; //文字高度
                var showTopButtonHeight = 500;//回到顶部按钮的距离
                var bigDivCount = 3;
                var div1 = $1("one");
                var div2 = $1("two");
                var div3 = $1("three");
                var div4 = $1("four");
                var loading = $1("loading");
                var toTop = $1("toTop");
                //得到浏览器的名称
                var browser = getBrowser();
                //数组下界
                var ran = 0;
                //数据源
                var imgArray = []; //img数组 也就是数据来源
                var textUser = [];//img的作者以及关注啥的
                var textArray = []; //img底下的文字和img对应
                function ajax_11(){
                    $.ajax({
                        data:{'name':'net900621',num:3},
                        success: function(msg){
                            var obj = eval('(' + msg + ')'); 
                            alert(obj);
                        }
                    })
                }
                ajax_11();
                textArray[0] = "迷上中国风：人间四月芳菲尽，山寺桃花始盛开；长恨春归无觅处，不知转入此中来。";
                textArray[1] = "人生就像愤怒的小鸟,当你失败时，总有几头猪在笑";
                textArray[2] = "一个人要是不逼自己一把根本不知道自己有多优秀";
                textArray[3] = "人的脆弱和坚强都超乎自己的想象。有时，我可能脆弱得一句话就泪流满面，有时，也发现自己咬着牙走了很长的路。";
                textArray[4] = "曾经发生的事不可能忘记，只是暂时想不起来而已。 ——《千与千寻》";
                textArray[5] = "我 绽放 不过是华丽了一片你 转身 却颠覆了我的世界";
                textArray[6] = "我相信这世界上，有些人有些事有些爱，在见到的第一次，就注定要羁绊一生，就注定像一棵树一样，生长在心里，生生世世.";
                textArray[7] = "有时候，你只需要振作自己，继续生活。";
                textArray[8] = "决定你人生高度的，不是你的才能，而是你的态度。";
                textArray[9] = "英国雪铁龙公司，借助社交网络来帮助完成产品设计！用户可以登录雪铁龙在Facebook上的主页，通过系统的引导完成对汽车的设计，最后邀请好友来投票！在最后的评选中，最受欢迎的车型将被量产，而设计者将获得一辆真实的汽车！";
                textArray[10] = "岂是拈花难解脱，可怜飞絮太飘零。";
                textArray[11] = "多情自古空余恨，好梦由来最易醒。 ";
                textArray[12] = "记得那次，我湿了右肩。";
                textArray[13] = "在下雨天，我为你撑伞。";
                textArray[14] = "其实你不用自卑因为你曾经在几千万甚至以亿计的选手中赢夺冠军";
                textArray[15] = "生活将我们磨圆是为了让我们滚得更远";
                imgArray[0] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_chinamobile.jpg";
                imgArray[1] = "http://images.cnblogs.com/cnblogs_com/newway/335327/r_cloud.jpg";
                imgArray[2] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_blue.jpg";
                imgArray[3] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_girl02.jpg";
                imgArray[4] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_g.jpg";
                imgArray[5] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_girl.jpg";
                imgArray[6] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_blue.jpg";
                imgArray[7] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_iphone02.png";
                imgArray[8] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_iphone.jpg";
                imgArray[9] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_lumia.jpg";
                imgArray[10] = "http://images.cnblogs.com/cnblogs_com/newway/335327/r_cloud.jpg";
                imgArray[11] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_l.jpg";
                imgArray[12] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_mx.jpg";
                imgArray[13] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_watermellon.jpg";
                imgArray[14] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_s.jpg";
                imgArray[15] = "http://images.cnblogs.com/cnblogs_com/newway/371566/r_p.jpg";
                //初始化
                // (function(){
                //     $1.ajax({
                //         data:{'name':user_Id.value,num:1},
                //         success: function(msg){
                //             var obj = eval('(' + msg + ')'); 
                //             if (obj.value == 1) {
                //                 location.href = "./mainPage.html";
                //             }
                //             else{
                //                 alert("");
                //             }
                //         }
                //     });
                // })();
                loadImg();
                //主会场
                window.onscroll = fun_scroll;
                //滚动方法
                function fun_scroll() {
                    //body的高度
                    var topAll = (browser == "Firefox") ? document.documentElement.scrollHeight : document.body.scrollHeight;

                    //卷上去的高度
                    var top_top = document.body.scrollTop || document.documentElement.scrollTop;
					
                    //回到顶部按钮操作
                    if (top_top > showTopButtonHeight)
                        toTop.style.display = "block";
                    else
                        toTop.style.display = "none";
						
                    //控制滚动条次数以及判断是否到达底部
                    if (reset == 0) {
                        var topAll = (browser == "Firefox") ? document.documentElement.scrollHeight : document.body.scrollHeight; //body的高度
                        var top_top = document.body.scrollTop || document.documentElement.scrollTop; //卷上去的高度
						
                        var result = topAll - top_top;//页面总高度减去卷上去的高度
						
                        if (result < surplusHeight) {
                            setTimeout(loadImg, 1000);
                            reset = 1;
                        }
                    } else {
                        setTimeout(function () { reset = 0; }, 1000);
                    }
                }
                //加载图片
                function loadImg() {
                    loading.style.display = "none";
                    for (var i = 0; i < bigDivCount; i++) {
                        div1.appendChild(addDiv());
                        div2.appendChild(addDiv());
                        div3.appendChild(addDiv());
                        div4.appendChild(addDiv());
                    }
                    setTimeout(function () {
                        var hh = (browser == "Firefox") ? document.documentElement.scrollHeight : document.body.scrollHeight;
                        loading.style.top = hh + "px";
                        loading.style.display = "block";
                    }, 1000);
                }

                //声明一个包含img和title的div
                function addDiv() {                    
                    //title层
                    var small_div = document.createElement("div");
                    small_div.innerHTML = textArray[ran];
					small_div.className="text";
                    //内部img
                    var img = document.createElement("img");
                    img.alt = "";
                    img.src = imgArray[ran];
                    img.style.width = imgWidth;

                    //包含img的层
                    var div = document.createElement("div");
                    div.className = "content";
                    div.appendChild(img);
                    div.appendChild(small_div);

                    ++ran;
                    ran = (ran%16);
                    return div;
                }

                //通过id得到对象
                function $1(id) {
                    return document.getElementById(id);
                }

                //得到浏览器的名称
                function getBrowser() {
                    var OsObject = "";
                    if (navigator.userAgent.indexOf("MSIE") > 0) {
                        return "MSIE";
                    }
                    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
                        return "Firefox";
                    }
                    if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
                        return "Safari";
                    }
                    if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
                        return "Camino";
                    }
                    if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
                        return "Gecko";
                    }
                }

                //回到顶部
                toTop.onclick = function () {
                    var count = 50; //每次的距离
                    var speed = 5; //速度
                    var timer = setInterval(function () {
                        var top_top = document.body.scrollTop || document.documentElement.scrollTop;
                        var tt = top_top - count;
                        tt = (tt < 30) ? 0 : tt;
                        if (top_top > 0)
                            window.scrollTo(0, tt);
                        else
                            clearInterval(timer);
                    }, speed)
                };

            }