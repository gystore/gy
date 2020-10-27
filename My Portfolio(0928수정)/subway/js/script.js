$(function(){

	//슬라이드
	$('.slide .sg a').eq(0).css("left","0");
	
	//하단의 점을 클릭했을 때
	
	var current = 0;
	var d;	
	
	setInterval(function(){
		current++;
		
		if(current==4){current=0;}
		
		$('.dot a').removeClass('on');
		$('.dot a').eq(current).addClass('on');
		$('.slide .sg a').eq(current-1).css("left","0").animate({"left":"-100%"},600);
		$('.slide .sg a').eq(current).css("left","100%").animate({"left":"0"},600);
		
	},3000);

	$('.dot a').click(function(){
		
		d = $(this).index();
		
		$('.dot a').removeClass('on');
		$(this).addClass('on');		
		
		if(current < d){
			$('.slide .sg a').eq(current).css("left","0").animate({"left":"-100%"},600);
			$('.slide .sg a').eq(d).css("left","100%").animate({"left":"0"},600);
			
			current = d;
			return false;
			
		}else if(current > d){
			$('.slide .sg a').eq(current).css("left","0").animate({"left":"100%"},600);
			$('.slide .sg a').eq(d).css("left","-100%").animate({"left":"0"},600);
			
			current = d;
			return false;
		}else{return;}
		
		return false;
		
	});
	
	//탭 메뉴
	$('.menu_wrap>div').css("display","none");
	$('.menu_wrap>div').eq(0).css("display","block");
	$('.menu_top .mt_right li').click(function(){
		
		var i = $(this).index();
		
		$('.menu_wrap>div').css("display","none");
		$('.menu_wrap>div').eq(i).css("display","block");
		$('.menu_top ul.mt_right li').removeClass('on');
		$('.menu_top ul.mt_right li').eq(i).addClass('on');
		
		return false;
	});
	
	// 햄버거에 마우스 올렸을 때
	$('.menu ul li').mouseenter(function(){
		$('.menu ul li').css('margin-left','10px');
		$(this).css('width','350px');
		
	});
	$('.menu ul li').mouseleave(function(){
		$('.menu ul li').css({'margin-left':'40px', 'width':'260px'});
	});


});