var i = 0;
var pause = false;

function Update()
{
	window.setInterval("CommandUpdate();", 4000);
}

function CommandUpdate()
{
	if(!pause)
	{
		if(i == 4)
		{
			$('#pic').animate(
			{
				marginLeft: '+=400%'
			}, 300);
			i = 0;
		}
		else
		{
			$('#pic').animate(
			{
				marginLeft: '-=100%'
			}, 300);
			i += 1;
		}
	}
}

function PauseOn()
{
	pause = true;
	$('.readmore').fadeIn(175);
}

function PauseOff()
{
	pause = false;
	$('.readmore').fadeOut(175);
}
