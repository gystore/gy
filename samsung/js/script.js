$(function(){
	
	$(window).resize(function(){
		
		var w_width = $(window).width();
		
		if(w_width < 1080){
			$('.ex_pager ul li').click(function(){
				var ex_i = $(this).index();
			$('.explore_cover ul').stop().animate({
				"left":-100*ex_i+"%"
			},600);
			$(".ex_pager ul li").removeClass("on");
			$(".ex_pager ul li").eq(ex_i).addClass("on");	
				
				return false;
			});
		
		
		}else{
			$(".explore_cover ul").css("left","0");
			$(".ex_pager ul li").removeClass("on");
			$(".ex_pager ul li").eq(0).addClass("on");
			
		}
				
		if(w_width > 780){
			$('.hide_menu').hide();
			$(".hamberger").find("img").eq(0).show();
			$(".hamberger").find("img").eq(1).hide()

		}
	
	});
	$(window).trigger("resize");
	
	//mobile click
	
	$('.hide_menu > ul > li').click(function(){
		$(this).children('ul').toggleClass('on');
		$(this).toggleClass("on");
		var h_dis = $(this).children('a').find('img').eq(0).css('display');
			if(h_dis == "none"){
				$(this).children("a").find("img").eq(0).show();
				$(this).children("a").find("img").eq(1).hide();
				
			}else{
				$(this).children("a").find("img").eq(0).hide();
				$(this).children("a").find("img").eq(1).show();
				
			}
		
	});
	
	$('.hamberger').click(function(){
		var ham =$('.hamberger').find("img").eq(0).css("display");
		//alert(ham);
		if(ham == "none"){
			$('.hamberger').find("img").eq(0).show();
			$('.hamberger').find("img").eq(1).hide();
			$(".hide_menu").hide();
			
		}else{
			$('.hamberger').find("img").eq(0).hide();
			$('.hamberger').find("img").eq(1).show();
			$(".hide_menu").show();
		}
	return false;
		
	});
	// 스크롤버튼 유무
	$(window).scroll(function(){
		var w_scr = $(window).scrollTop();
		
		if(w_scr > 0){
			$("#scroll_btn").stop().fadeIn(600);
		}else{
			$("#scroll_btn").stop().fadeOut(600);
		}
	});
	// 스크롤버튼 클릭시 최상단으로 스크롤 이동
	$("#scroll_btn").click(function(){
		$("body, html").stop().animate({
			scrollTop : 0
		},1000);
		
		return false;
	});

	
	
	
	
	
	
	
	
	
	var pc_prev = $('.pc-slide .prev-btn');
	var pc_next = $('.pc-slide .next-btn');

	$('.pc-slide ul').slick({
		autoplay:true,
		fade:true,
		autoplaySpeed : 4000,
		infinite : true,
		speed : 1000,
		pauseOnHover : true,
		
		prevArrow : pc_prev,
		nextArrow: pc_next,
		
	});
	
	//var mo_prev = $('.mo-slide .prev-btn');
	//var mo_next = $('.mo-slide .next-btn');

	$('.mo-slide ul').slick({
		autoplay:true,
		fade:true,
		dots:true,
		autoplaySpeed : 4000,
		infinite : true,
		speed : 1000,
		pauseOnHover : true,
		arrows:false,
		//prevArrow : mo_prev,
		//nextArrow: mo_next,
		
	});



















}); //end