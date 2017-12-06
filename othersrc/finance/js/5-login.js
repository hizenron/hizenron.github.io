//1:为登录按钮绑定点击事件
$("#btn1").click(function(e){
    //2:阻止事件默认行为,原因:a默认行为
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var n = $("#loginName").val();
    var p = $("#password").val();
    //验证用户输入用户名或密码格式是否正确
    //正确格式->查询数据库
    //不正确格式->提示格式不正确-->不查数据库

    //用户名:字母或数字 3~8   16:40--16:50
    var unameReg = /^[a-zA-Z0-9]{6,8}$/;
    //密码: 字母或数字 3~8
    var upwdReg = /^[a-zA-Z0-9]{6,8}$/;
    if(!unameReg.test(n)){
        alert("用户名格式不正确 字母数字6~8位");
        return;
    }
    if(!upwdReg.test(p)){
        alert("密码格式不正确 字母数字6~8位");
        return;
    }

    //发送Ajax请求
    $.ajax({
        type:"GET",
        url:"data/login_do.php",
        data:{uname:n,upwd:p},
        success:function(data){
        if(data.code>0){
            //将用户名和用户编号保存sessionStorage
            sessionStorage.setItem("uname",n);
            sessionStorage.setItem("uid",data.uid);
            //登录成功跳转首页index.html
            alert("登陆成功");
            location.href ="index.html";
        }else{alert("登陆失败， 请确认用户名或者密码");
        }},
        error:function(data){alert(data.msg);}
    });
});


