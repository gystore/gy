$(function(){
	
	setTimeout(function(){
		$('.s1_in  h2 span').addClass('active');	
		$('.s1_in article a').addClass('active');		
		$('.s1_in .dot').addClass('active');		
	});	
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		console.log(width);
		
		$('#scroll').text(sct);
		
		if( width > 981 ){
			if( sct >= 700 ){
				$('#section2').addClass('active');
			}
			if( sct >= 1000 ){
				$('#section3 .wrap h3').addClass('active');
			}
			if( sct >= 1200 ){
				$('#section3 .wrap .brand_in').addClass('active');
			}
			
		}else if(width <= 980){
			if( sct >= 400 ){
				$('#section2').addClass('active');
			}
			if( sct >= 700 ){
				$('#section3 .wrap h3').addClass('active');
			}
			if( sct >= 800 ){
				$('#section3 .wrap .brand_in').addClass('active');
			}
			
		}
		
		
	});
	var current = 0;
	
	$('.s1_in .dot span').click(function(){
		
		$('.s1_in .dot span').removeClass('on');
		$(this).addClass('on');
		
		var n = $(this).index();		
		
		
		var cu = $('.s1_in article a').eq(current);
		var ne = $('.s1_in article a').eq(n);
		
		if(current < n){
		
			cu.css('left',0).animate({left:'-100%'});
			ne.css('left','100%').animate({left:0});
		
			current = n;
		
		}
		if(current > n){
			
			cu.css('left',0).animate({left:'100%'});
			ne.css('left','-100%').animate({left:0});
			
			current = n;
			
		}
	});
	
	// 모바일 버튼 클릭하기
	$('.mobileBtn').click(function(){
		
		if($(this).hasClass('active')==false){
			$(this).addClass('active');
			$('.blackbg').addClass('active');
			$('.gnb .mobileGnb').addClass('active');
			$('#all').addClass('active');
			$('.mobileBtn a').addClass('active');
		}else{
			$(this).removeClass('active');
			$('.blackbg').removeClass('active');
			$('.gnb .mobileGnb').removeClass('active');
			$('.gnb_menu >li ul').stop().slideUp();
			$('.gnb_menu >li').removeClass('active');
			$('#all').removeClass('active');
			$('.mobileBtn a').removeClass('active');
		}
	});
	
	$('.blackbg').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.mobileBtn').removeClass('active');
			$('.gnb .mobileGnb').removeClass('active');
			$('.gnb_menu >li ul').stop().slideUp();
			$('.gnb_menu >li').removeClass('active');
			$('#all').removeClass('active');
		}
		
	});
	
	// 윈도우 높이 구하기
	var h;
	var width;
	$(window).resize(function(){
		 h = $(window).height(); 
		width = $(window).width();
		if(width > 981){
			$('.blackbg').trigger('click');
		}
	});
	$(window).trigger("resize");
	
	
	
	//모바일 세로메뉴
	$('.gnb_menu >li').click(function(){
		
		console.log($('.mobile_in').height());
			
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).find('ul').stop().slideUp();
			
			$('.gnb_util, .gnbBanner').removeClass('active');	
			
		}else{
			
			if($('.mobile_in').height() < 700){			
				$('.gnb_util, .gnbBanner').addClass('active');
				
			}else{			
				$('.gnb_util, .gnbBanner').removeClass('active');
			}
			$('.gnb_menu >li').removeClass('active');
			$(this).addClass('active');
			$('.gnb_menu >li ul').stop().slideUp();
			$(this).find('ul').stop().slideDown();
		}
		
		
		return false;
	});
	
	
	
	
});