var sumbit = document.getElementById("sumbit");
var user_Id = document.getElementById("user_Id");
var user_Pwd = document.getElementById("user_Pwd");
window.onload = function (){
    sumbit.onclick = function(){
    	$.ajax({
        	data:{'name':user_Id.value,'pwd':user_Pwd.value,num:1},
        	success: function(msg){
                var obj = eval('(' + msg + ')'); 
            	if (obj.value == 1) {
            		location.href = "./mainPage.html";
            	}
            	else{
            		alert("账号或密码错误，请重试。");
            	}
            }
    	});
    }
    user_Id.style.color = "gray";
    user_Id.style.fontSize = 20+"px";
    user_Id.style.fontStyle = "italic";
    user_Id.value = "请输入您的账号";
    user_Pwd.style.fontSize = 20+"px";
    user_Pwd.style.color = "gray";
    user_Pwd.style.fontStyle = "italic";
    user_Pwd.value = "请输入您的密码";
    user_Id.onfocus = function(){
        user_Id.value = "";
        user_Id.style.color = "black";
        user_Id.style.fontSize = 25+"px";
        user_Id.style.fontStyle = "normal";
    }
    user_Id.onblur = function(){
        if (user_Id.value == "") {
            user_Id.style.color = "gray";
            user_Id.style.fontSize = 20+"px";
            user_Id.style.fontStyle = "italic";
            user_Id.value = "请输入您的账号";
        }
    }
    user_Pwd.onfocus = function(){
        user_Pwd.value = "";
        user_Pwd.style.color = "black";
        user_Pwd.style.fontSize = 25+"px";
        user_Pwd.style.fontStyle = "normal";
    }
    user_Pwd.onblur = function(){
        if (user_Pwd.value == "") {
            user_Pwd.style.fontSize = 20+"px";
            user_Pwd.style.color = "gray";
            user_Pwd.style.fontStyle = "italic";
            user_Pwd.value = "请输入您的密码";
        }
    }
}