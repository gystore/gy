$(function(){
	
	$('.img0 .t_box').addClass('active');
	
	var slide = $('.bxslider').bxSlider({
		
		mode:'fade',
		auto:true,
		autoHover:true,
		speed:400,
		pause:3000,
		loop:true,
		onSlideBefore:function(){
			var i = slide.getCurrentSlide();
			//현재의 슬라이드 번호를 i에 저장
			if(i>0 && i<3){ //(i==2 || i==2), 1 또는 2
				$('.gnb li').css('color','#333');
			}else{
				$('.gnb li').css('color','#fff');
			}
			
			$('.bxslider li .t_box').removeClass('active');
		},
		onSlideAfter:function(){
			var i = slide.getCurrentSlide();
			
			$('.bxslider li.img'+i+' .t_box').addClass('active');
		},
	
	});
	
	$('.next').click(function(){
		slide.goToNextSlide();
	});	
	$('.prev').click(function(){
		slide.goToPrevSlide();
	});
	
	
	$('.logo a').mouseover(function(){
		$(this).children('img').animate({marginLeft:'0'},200);
		//자바상에서는 marginLeft로 사용가능, margin-left사용시 ''반드시 사용가능
	});
	$('.logo a').mouseout(function(){
		$(this).children('img').animate({marginLeft:'-56px'},200);
	});
	
	
	$('.gnb, .full').mouseover(function(){
		$('.gnb li').css('color','#333');
		$('.bottom_h .line').css('opacity','1');		
	});
	$('.gnb, .full').mouseout(function(){
		var i = slide.getCurrentSlide();
		$('.bottom_h .line').css('opacity','0');
		if(i>0 && i<3){ //(i==1 || i==2), 1 또는 2
				$('.gnb li').css('color','#333');
				$('.gnb li span').css('color','inherit');
				$('.full').mouseover(function(){
					$('.gnb li span').css('color','#333');
				});
				$('.full').mouseleave(function(){
					$('.gnb li span').css('color','inherit');
				});
				
			}else{
				$('.gnb li').css('color','#fff');
				$('.gnb li span').css('color','inherit');
				$('.full').mouseover(function(){
					$('.gnb li span').css('color','#333');
				});
				$('.full').mouseleave(function(){
					$('.gnb li span').css('color','inherit');
				});
			}
		
	});
	
	
	$('.gnb li').mouseover(function(){
		
		var i = $(this).index();
		
		$('.full_cover ul').hide();
		$('.full_cover ul').eq(i).show();
		
	});	
	
	$('.gnb li span').mouseover(function(){		
		$(this).css('color','#ff6700');		
	});
	$('.gnb li span').mouseleave(function(){		
		$(this).css('color','#333');		
	});
	
	
	
	$('.bottom_f div p').click(function(){
		$(this).toggleClass('on');
		$(this).next('ul').toggleClass('on');
	});
	
	
	$('.con3 ul li .play_btn').click(function(){
		var i = $(this).parent('li').index();
		$('.video_box').eq(i).fadeIn();
	});
	$('.close.icon').click(function(){
		$(this).parent('.video_box_cover').stop().animate({'top':'-200%'},1000,function(){
			$('.video_box').fadeOut();
			//콜백함수, animate에서 사용가능, 애니메이트가 동작하고 나서 페이드아웃이 동작한다.
		});
		
	});
	
	
	
});
















