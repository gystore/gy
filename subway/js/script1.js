$(function(){
	
	$('nav>ul').mouseover(function(){
		$(this).find('ul').stop().slideDown();
		
	});
	
	$('nav>ul').mouseleave(function(){
		$(this).find('ul').stop().slideUp();
		
	});
	
	
	
});