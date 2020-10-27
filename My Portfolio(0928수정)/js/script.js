$(function(){
	
	//window ready
	$(window).ready(function(){
		$("#wrap").off("mousewheel DOMMousescroll", wheel);
		//start animate
		setTimeout(function(){
			$(".header").stop().fadeIn(1500);
			$("#logo").stop().fadeIn(1500);
			$(".category .main_title ul li").hide().eq(0).show();
			$(".sub_title_text > ul > li").hide();
		});
		
		$(".category .main_title").stop().animate({
			"opacity":"1"
		},1000, function(){
			$(".category #main_bg").stop().animate({
				"top":"0", "bottom":"auto",
				"left":"50%",
				"width":"100%",	"height":"100%"
			},400);
			
			$(".category .main_img > ul > li").hide().eq(0).stop().fadeIn(1000);
			
			$(".bot_nav .nav .ul_cover").stop().animate({
				"top":"0",
				"opacity":"1"
			},1000, function(){
				$(".sub_title > ul > li").eq(0).css({
					'display':'block', 'opacity':0, 'transform':'translate(-20px, -20px) skew(15deg, 0)'
				}).stop().animate({
					'transform':'translate(0, 0) skew(0, 0)', 'opacity':1
				},400,function(){
					$(".sub_title_text > ul > li").eq(0).show();
					$(".sub_title_text .hide_line").stop().animate({
						'width':0
					},1000);
				});
				$(".select_icon").stop().animate({
					"opacity":"1"
				},600,function(){
					$("#wrap").on("mousewheel DOMMousescroll", wheel);
				});
			});	
			
		});		
		
	}); //window.ready 마침
	
	// hamberger click
		$(".hamberger").click(function(){
			$(".hamberger").toggleClass("on");
			
			if($(".hamberger").hasClass("on")==false){
				$(".h_menu").css("display","block").stop().animate({
					"transform":"rotate(90deg)"
				},600, function(){
					$(".h_menu").css("display","none");
				});
			}else{
				$(".h_menu").css({"transform":"rotate(-90deg)","display":"block"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg)"
				},600);
			}			
		});	//.hamberger.click 마침	
		
	var w_width;

	$(window).resize(function(){
		w_width = $(window).width();
		//hamberger resize
		if(w_width > 800){
			$(".h_menu").hide();
			$(".hamberger").removeClass("on");
		}
		
		//메인의 높이 강제설정
		var m_width = $('#main').width();
		
		$('#main').height((m_width-m_width*0.056)*1.6);
	
		
	}); //window.resize 마침
	
	$(window).trigger('resize');
	
	
	//헤더 영역
	//_______헤더 언더바 넓이 강제지정
	$(".line").css("width",$(".header > ul > li").eq(0).width());
	
	$(".header > ul > li").mouseenter(function(){
		var a_width = $(this).children("a").width();
		var li_p = $(this).position().left;
		
		$(".line").stop().animate({
			"width":a_width,
			"left":li_p
		},500);
	}); //mouseenter 마침	
	$(".header > ul > li").mouseleave(function(){
		$(".line").stop().animate({
			"width":$(".header > ul > li").eq(0).width(),
			"left":$(".header > ul > li").eq(0).position().left
		},500);
	});	//mouseleave 마침
	// 헤더영역 마침

	//하단 네비 영역	
	//_______ul을 앞뒤로 복제해서 붙여넣기
	var pre_clone = $(".nav ul").clone();
	var app_clone = $(".nav ul").clone();
	$(".nav .ul_cover").prepend(pre_clone);
	$(".nav .ul_cover").append(app_clone);	
	
	var nav_left;
	var i = 0;
	var n = 0;
	var it_leng = $('.sub_title ul li').length;
	
	//_______브라우저 시작시 bg_color 강제실행
	$("#main_bg").addClass("bg_color0");	
	//_______브라우저 시작시 counting_num 강제실행
	$(".counting_num").text(n+1);
	$(".length").text(it_leng);
	
	var ul_width = $(".nav ul").width();
	ul_width = 115*it_leng;
	$(".nav .ul_cover").width(ul_width* 3).css('left',-ul_width);
	// $(".nav .ul_cover").css('left',-ul_width);

	/********************************************************************/
	function wheel(event, delta){
		$("#wrap").off("mousewheel DOMMousescroll", wheel);
		if(delta <0 ){ //_______마우스를 내릴 때
			
			i++;
			if(i==it_leng){i=0;}
			
			//_______메인 이미지 변경
			$(".main_img > ul > li").eq(i-1).stop().animate({
				"top":"-200%",
				"left":"-50%",
				"transform":"rotate(-90deg)"
			},300, 'easeInCubic', function(){
				$(".main_img > ul > li").hide().eq(i).show().css({"top":"150%","transform":"rotate(120deg)","left":"50%"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg)"
				},600,'easeOutCubic',function(){
					$("#wrap").on("mousewheel DOMMousescroll", wheel);
				});
			
			});
			
			//main_title
			$(".main_title > ul > li").eq(i-1).find("img").css("transform-origin","bottom center").stop().animate({
				"transform":"scaleY(1.2)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".main_title > ul > li").hide().eq(i).show();
				$(".main_title > ul > li").eq(i).find("img").css({
					"opacity":"0",
					"display":"block",
					"transform-origin":"top center",
					"transform":"scaleY(1.2)"
					}).stop().animate({
						"transform":"scaleY(1)",
						"opacity":"1"
					},800, 'easeOutCubic');
			});
			
			
			//counting_num
			n = i;
			$(".counting_num").stop().animate({
				"top":"-20px"
			},700, function(){
				$(".counting_num").text(n+1);
				$(".counting_num").css("top","20px").stop().animate({
					"top":"0"
				},400);
			});
			
			//sub_title
			$(".sub_title > ul > li").eq(i-1).stop().animate({				
				"transform":"translateY(-30px) skew(15deg, 0)",
				"opacity":"0"
			},400, 'easeInCubic',function(){
				$(".sub_title > ul > li").hide().eq(i).css({
					"display":"block",
					"transform":"translate(10px, 50px) skew(15deg, 0)",
					"opacity":"0",					
				}).stop().animate({
					"transform":"translate(0, 0) skew(0, 0)",
					"opacity":"1"
				},400,'easeOutCirc');
			});
			
			//sub_title_text		
			$(".sub_title_text > ul > li").eq(i-1).stop().removeClass('on');
			$(".sub_title_text > ul > li").eq(i).stop().addClass('on');			
			$(".sub_title_text .hide_line").css('width','100%').stop().animate({'width':0},500);
			
			//main_bg			
			$('#main_bg').removeClass().addClass("bg_color"+i);
			
			
			//네비 슬라이드 무한반복
			nav_left = parseInt($(".nav .ul_cover").css("left"));
			
			if(nav_left == -(ul_width*2+115)){
				$(".nav .ul_cover").stop().animate({
					"left":nav_left-115
				},600, function(){
					$(".nav .ul_cover").css("left",-ul_width-230);
				});
			}else{
				$(".nav .ul_cover").stop().animate({
					"left":nav_left-115
				},600);
			}
			
						
		}
		else if(delta>0){ //마우스를 올릴 때
			// 메인 이미지 변경
			if(i==-1){i=it_leng-1;}
			i--;
			
			//main_img
			$(".main_img > ul > li").eq(i+1).stop().animate({
				"top":"200%",
				"left":"50%",
				"transform":"rotate(90deg)"
			},300, 'easeInCubic', function(){
				$(".main_img > ul > li").hide().eq(i).show().css({"top":"-150%","transform":"rotate(-120deg)","left":"-50%"}).stop().animate({
					"top":"0",
					"left":"0",
					"transform":"rotate(0deg)"
				},600,'easeOutCubic',function(){
					$("#wrap").on("mousewheel DOMMousescroll", wheel);
				});
			});
			
			//main_title
			$(".main_title > ul > li").eq(i+1).find("img").css("transform-origin","top center").stop().animate({
				"transform":"scaleY(1.2)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".main_title > ul > li").hide().eq(i).show();
				$(".main_title > ul > li").eq(i).find("img").css({
					"opacity":"0",
					"display":"block",
					"transform-origin":"bottom center",
					"transform":"scaleY(1.2)"
					}).stop().animate({
						"transform":"scaleY(1)",
						"opacity":"1"
					},800, 'easeOutCubic');
			});
			
			//counting_num
			n = i;
			if(n==-1){n=it_leng-1;}

			$(".counting_num").stop().animate({
				"top":"20px"
			},700, function(){
				$(".counting_num").text(n+1);
				$(".counting_num").css("top","-20px").stop().animate({
					"top":"0"
				},400);
			});
			
			//sub_title
			$(".sub_title > ul > li").eq(i+1).stop().animate({
				"transform":"translateY(30px) skew(-15deg, 0)",
				"opacity":"0"
			},400, 'easeInCubic', function(){
				$(".sub_title > ul > li").hide().eq(i).css({
					"display":"block",
					"opacity":"0",
					"transform":"translate(-10px, -50px) skew(-15deg, 0)",
				}).stop().animate({
					"opacity":"1",
					"transform":"translate(0, 0) skew(0, 0)"
				},400,'easeOutCirc');
			});
			
			//sub_title_text , hide_line
			$(".sub_title_text > ul > li").eq(i+1).stop().removeClass('on');
			$(".sub_title_text > ul > li").eq(i).stop().addClass('on');			
			$(".sub_title_text .hide_line").css('width','100%').stop().animate({'width':0},500);
			
			//main_bg
			
			$("#main_bg").removeClass().addClass("bg_color"+i);
			
			
			console.log(i);
			
			//네비 슬라이드 무한반복
			nav_left = parseInt($(".nav .ul_cover").css("left"));
			
			if(nav_left == -115*(it_leng-2)){
				$(".nav .ul_cover").stop().animate({
					"left":nav_left+115
				},600, function(){
					$(".nav .ul_cover").css("left",-ul_width-115*3);
				});
			}else{
				$(".nav .ul_cover").stop().animate({
					"left":nav_left+115
				},600);
			}
			
			
		}
		
	}// wheel 마침
	
	$("#wrap").on("mousewheel DOMMousescroll", wheel);
	
	/********************************************************************/
	
	//네비 클릭시 이미지 변경
	
	$(".ul_cover ul").eq(1).addClass("center");
	$(".ul_cover > ul > li").on("click", nav_click);
	
	function nav_click(){
		//$("#wrap").off("mousewheel DOMMousescroll", wheel);
		
		var nav_index = $(this).index();
		//var win_width = $(window).width();
		var nav_left = $(this).offset().left;
		var ul_width = parseInt($(".ul_cover .center").width());
		var li_left = $(this).position().left;
		
		if(i == nav_index){return;
		}else{
			// 클릭시 윈도우 넓이와 비교후 애니메이션 결정
			if(nav_left > w_width/2){
				//마우스를 내릴 때와 동일
				
				$("#wrap").on(wheel(event,-1));
				console.log("내릴때"+i, nav_index);
				i = nav_index;
				
				
			}else if(nav_left < w_width/2){	
				//마우스를 올릴 때와 동일
				
				$("#wrap").on(wheel(event,1));
				
				console.log("올릴때"+i, nav_index);
				i = nav_index;
				
			}
			
		}		
	} //nav_click 마침
	
	/********************************************************************/
	
	//터치 이벤트
	var prevy = 0;
	
	$(document).on("touchstart", function(e){
	//console.log(e);
		var  evt = e.originalEvent;	
		prevy = evt.touches[0].clientY;
		
	});
	$(document).on("touchend", function(e){
		//console.log(e);
		var  evt = e.originalEvent;
		var nexty = evt.changedTouches[0].clientY;
		
		if(prevy-nexty > 10){ // 위로터치 = 아래로 드래그
		
			$("#wrap").on(wheel(event,-1));			
		}else if(prevy-nexty < -10){
			
			$("#wrap").on(wheel(event,1));
		}else{
			
		}		
		
	});
	
	
	
	
	
	
	
}); //end