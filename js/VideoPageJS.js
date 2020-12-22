var floor = 3; //评论最后的层数
var username = "Caronell";

function SubmitComment(element)
{
	floor += 1;
	var nowtime = GetNowTime();
	var comtext = document.getElementById("comment_top").value;
	var code = "<div class='con'><div class='title'><img src='img/avater.jpg' /><p>"+ username +"</p><span>#" + floor.toString() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来自PC客户端&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + nowtime + "</span></div><div class='word'>" + comtext + "</div><div class='horizon_line_long'></div></div>";
	if(element.id == "submit_comment_top")
		$('#comment_main').prepend(code);
	else
		$('#comment_main').append(code);
	ClearInput();
}

function GetNowTime()
{
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth()+1;
	var day = nowDate.getDate();
	var time;
	time = year.toString() + "-" + month.toString() + "-" + day.toString();
	return time;
}

function SynchronizeInput(element)
{
	var main;
	var sub;
	if(element.id == "comment_top")
	{
		main = document.getElementById("comment_top");
		sub = document.getElementById("comment_bottom");
	}
	else
	{
		main = document.getElementById("comment_bottom");
		sub = document.getElementById("comment_top");
	}
	sub.value = main.value;
}

function AutoLoseFocus(element)
{
	element.blur();
}

function ClearInput()
{
	document.getElementById("comment_top").value = "";
	document.getElementById("comment_bottom").value = "";
}

function guanzhu()
{
	var elem = document.getElementById("btn_follow");
	if(elem.className == "gz")
	{
		elem.className = "ygz";
		elem.innerText = "已关注";
	}
	else if(elem.className = "ygz")
	{
		elem.className = "gz";
		elem.innerText = "+关注";
	}
}

function ChangeText_enter()
{
	var elem = document.getElementById("btn_follow");
	if(elem.className == "ygz")
		elem.innerText = "取消关注";
}

function ChangeText_leave()
{
	var elem = document.getElementById("btn_follow");
	if(elem.className == "ygz")
		elem.innerText = "已关注";
}

function SendMessage()
{
	var x = prompt("请输入要发送的消息");
	if(x != null)
		alert("已发送（然而并没有~(￣▽￣)~）")
}
