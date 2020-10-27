$(function(){
	
	$('nav>ul').mouseover(function(){
		$(this).find('ul').stop().slideDown();
		$(".full_bg").stop().slideDown();
	});
	
	$('nav').mouseleave(function(){
		$('nav>ul>li>ul').stop().slideUp();
		$(".full_bg").stop().slideUp();
	});
	
	
	
});