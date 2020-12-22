var RobotVertify = false;
var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;
var c5 = false;

function RegisterCheck()
{
	var c6 = RobotVertify;
	if(c1&&c2&&c3&&c4&&c5&&c6)
	{
		ok = true;
	}
	else
	{
		ok = false;
	}
	if(ok)
	{
		document.getElementById("submit_form").className = "submit_form_ok";
		document.getElementById("submit_form").disabled = "";
	}
	else
	{
		document.getElementById("submit_form").className = "submit_form_no";
		document.getElementById("submit_form").disabled = "disabled";
	}
}

function NameCheck()
{
	var name = document.getElementById("username_input").value;
	if(name == "Caronell")
	{
		document.getElementById("username_warning").innerText = "此用户已被注册";
		c1 = false;
	}
	else if(name.indexOf("'")!=-1 || name.indexOf('"')!=-1)
	{
		document.getElementById("username_warning").innerText = "用户名含有非法字符";
		c1 = false;
	}
	else if(name == "")
	{
		document.getElementById("username_warning").innerText = "用户名不能为空";
		c1 = false;
	}
	else
	{
		document.getElementById("username_warning").innerText = "";
		c1 = true;
	}
	RegisterCheck();
}

function PwdCheck()
{
	document.getElementById("password_warning").style.color = "red";
	var pwd = document.getElementById("password_input").value;
	if(pwd.length == 0)
	{
		document.getElementById("password_warning").innerText = "密码不能为空";
		c2 = false;
	}
	else if(pwd.length<6 || pwd.length>16)
	{
		document.getElementById("password_warning").innerText = "密码长度不合法";
		c2 = false;
	}
	else if(pwd.indexOf("'")!=-1 || pwd.indexOf('"')!=-1)
	{
		document.getElementById("password_warning").innerText = "密码含有非法字符";
		c2 = false;
	}
	else
	{
		var slevel = checkStrong(pwd);
		switch (slevel){
			case 1:
				document.getElementById("password_warning").style.color = "red";
				document.getElementById("password_warning").innerText = "密码强度：低";
				break;
			case 2:
				document.getElementById("password_warning").style.color = "orange";
				document.getElementById("password_warning").innerText = "密码强度：中";
				break;
			case 3:
				document.getElementById("password_warning").style.color = "limegreen";
				document.getElementById("password_warning").innerText = "密码强度：高";
				break;
			default:
				break;
		}
		c2 = true;
	}
	RegisterCheck();
}

function RepwdCheck()
{
	var p1 = document.getElementById("password_input").value;
	var p2 = document.getElementById("re-password_input").value;
	if(p2.length == 0)
	{
		document.getElementById("re-password_warning").innerText = "密码不能为空";
		c3 = false;
	}
	else if(p1 != p2)
	{
		document.getElementById("re-password_warning").innerText = "两次密码不一致";
		c3 = false;
	}
	else
	{
		document.getElementById("re-password_warning").innerText = "";
		c3 = true;
	}
	RegisterCheck();
}

function EmailCheck()
{
	var standard = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	var str = document.getElementById("email_input").value;
	if(str.length == 0)
	{
		document.getElementById("email_warning").innerText = "邮箱地址不能为空";
		c4 = false;
	}
	else if(standard.test(str))
	{
		document.getElementById("email_warning").innerText = "";
		c4 = true;
	}
	else
	{
		document.getElementById("email_warning").innerText = "请输入正确的邮箱地址";
		c4 = false;
	}
	RegisterCheck();
}

function TelCheck()
{
	var standard = /^1[34578]\d{9}$/;
	var str = document.getElementById("tel_input").value;
	if(str.length == 0)
	{
		document.getElementById("tel_warning").innerText = "电话号码不能为空";
		c5 = false;
	}
	else if(standard.test(str))
	{
		document.getElementById("tel_warning").innerText = "";
		c5 = true;
	}
	else
	{
		document.getElementById("tel_warning").innerText = "请输入正确的电话号码";
		c5 = false;
	}
	RegisterCheck();
}

function VertifyPass()
{
	RobotVertify = true;
}

function Register()
{
	alert("注册成功╰(￣ω￣ｏ)");
	window.location.href = "index.html";
}

//判断输入密码的类型  
function CharMode(iN)
{
	if(iN >= 48 && iN <= 57) //数字  
		return 1;
	if(iN >= 65 && iN <= 90) //大写  
		return 2;
	if(iN >= 97 && iN <= 122) //小写  
		return 4;
	else
		return 8;
}
//bitTotal函数  
//计算密码模式  
function bitTotal(num)
{
	modes = 0;
	for(i = 0; i < 4; i++)
	{
		if(num & 1) modes++;
		num >>>= 1;
	}
	return modes;
}
//返回强度级别  
function checkStrong(sPW)
{
	if(sPW.length < 6)
		return 0; //密码太短，不检测级别
	Modes = 0;
	for(i = 0; i < sPW.length; i++)
	{
		//密码模式  
		Modes |= CharMode(sPW.charCodeAt(i));
	}
	return bitTotal(Modes);
}