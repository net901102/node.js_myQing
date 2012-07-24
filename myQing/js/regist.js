var regist = document.getElementById("regist");
var user_Id = document.getElementById("user_Id");
var user_Pwd = document.getElementById("user_Pwd");
var email = document.getElementById("e-mail");
var user_Sex = document.getElementById("user_sex");
regist.onclick = function(){
    $.ajax({
        data:{'name':user_Id.value,'num':4},
        success: function(msg){
            var obj = eval('(' + msg + ')'); 
        	if (obj.value == 1) {
                (function(){
                    $.ajax({
                        data:{'name':user_Id.value,'pwd':user_Pwd.value,'email':email.value,'sex':user_Sex.checked?1:0,'num':2},
                        success: function(){
                            alert("注册成功！");
                            location.href = "./mainPage.html";                            
                        }
                    });
                })();
        	}
        	else{
        		alert("账号被注册，请重试！");
        	}
        }
    });
}
