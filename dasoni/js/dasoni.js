$(function(){
	
	//처음 슬라이드의 텍스트 애니메인션 실행
	setTimeout(function(){
		$('.bg .title0').addClass('on');		
		$('.bg .txt0').addClass('on');	
	},1000);
		
	//bx슬라이더를 이용한 슬라이드	
	var slide = $('.bx_slider').bxSlider({
				mode:'fade',
				auto:true,
				pager:false,
				controls:false,
				autoHover:true,
				onSlideBefore:function(){
				
				},
				onSlideAfter:function(){
					var i = slide.getCurrentSlide();
					$('.bg').find('h2').removeClass('on');
					$('.bg .title'+i).addClass('on');
					$('.bg').find('p').removeClass('on');
					$('.bg .txt'+i).addClass('on');
					
				},
				
	});  //slide함수
	
	//슬라이드 좌,우 이동 버튼
	$('.btn p.prev').click(function(){
		slide.goToPrevSlide();
	});
	$('.btn p.next').click(function(){
		slide.goToNextSlide();
	});

	//모바일 메뉴
	$('.m_onbtn').click(function(){
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.m_gnb').hide();
			$('.black').hide();
		}else{
			$(this).addClass('on');	
			$('.m_gnb').show();
			$('.black').show();
		}		
	});
	$('.black').click(function(){
		$(this).hide();
		$('.m_gnb').hide().removeClass('on');
		$('.m_onbtn').removeClass('on');
	});
	
	//모바일 서브 메뉴
	$('.m_gnb dt').click(function(){
		
		if($(this).next('dd').hasClass('on')==false){
			$('.m_gnb dt').next('dd').slideUp().removeClass('on');
			$(this).next('dd').slideDown().addClass('on');
		}else{
			return;
		}
	});



	//윈도우 스크롤시 실행되는 애니메이션 효과	
	
	var a1 = $('.sec01_in > img').offset().top;
	var a2 = $('.sec01_in h2').offset().top;
	var a3 = $('.sec01_in p').offset().top;
	var a4 = $('.sec01_box > div').offset().top;
	
	var a5 = $('.sec01_in > img').offset().top;
	var a6 = $('.sec01_in h2').offset().top;
	var a7 = $('.sec02_in p').offset().top;
	var a8 = $('.sec02_box > div').offset().top;
	
	var a9 = $('.sec03_in > img').offset().top;
	var a10 = $('.sec03_in h2').offset().top;
	var a11 = $('.sec03_in p').offset().top;
	var a12 = $('.sec03_box > div').offset().top;

	var b1 = $('.sec04').offset().top;
	var b2 = $('.sec05').offset().top;
	
	var f_box = $('.fix_box').offset().top;
	
	$(window).scroll(function(){
		
		var sct = $(window).scrollTop();
		
		//사이드 메뉴
		$('.fix_box').stop().animate({'top':sct+f_box},1000);
		console.log(f_box);
		
		
		if(a1 < sct + 700){
			$('.sec01_in > img').addClass('slide');
		}
		if(a2 < sct + 700){
			$('.sec01_in h2').addClass('slide');
		}
		if(a3 < sct + 700){
			$('.sec01_in p').addClass('slide');
		}
		if(a4 < sct + 700 ){
			$('.sec01_box > div').eq(0).addClass('slide');
		
		setTimeout(function(){
			$('.sec01_box > div').eq(1).addClass('slide');
		},500);
		setTimeout(function(){
			$('.sec01_box > div').eq(2).addClass('slide');
		},1000);
		setTimeout(function(){
			$('.sec01_box > div').eq(3).addClass('slide');
		},1500);
		}
		
		
		if(a5 < sct + 700){
			$('.sec02_in > img').addClass('slide');
		}
		if(a6 < sct + 700){
			$('.sec02_in h2').addClass('slide');
		}
		if(a7 < sct + 700){
			$('.sec02_in p').addClass('slide');
		}
		if(a8 < sct + 700 ){
			$('.sec02_box > div').eq(0).addClass('slide');
		
		setTimeout(function(){
			$('.sec02_box > div').eq(1).addClass('slide');
		},500);
		setTimeout(function(){
			$('.sec02_box > div').eq(2).addClass('slide');
		},1000);
		setTimeout(function(){
			$('.sec02_box > div').eq(3).addClass('slide');
		},1500);
		setTimeout(function(){
			$('.sec02_box > div').eq(4).addClass('slide');
		},2000);
		}
		
		
		if(a9 < sct + 700){
			$('.sec03_in > img').addClass('slide');
		}
		if(a10 < sct + 700){
			$('.sec03_in h2').addClass('slide');
		}
		if(a11 < sct + 700){
			$('.sec03_in p').addClass('slide');
		}
		if(a12 < sct + 700 ){
			$('.sec03_box > div').eq(0).addClass('slide');
		
		setTimeout(function(){
			$('.sec03_box > div').eq(1).addClass('slide');
		},300);
		setTimeout(function(){
			$('.sec03_box > div').eq(2).addClass('slide');
		},600);
		setTimeout(function(){
			$('.sec03_box > div').eq(3).addClass('slide');
		},900);
		}
		
		
		if(b1 < sct + 700){
			$('.sec04_content').addClass('slide1');
		}
		if(b2 < sct + 700){
			$('.sec05_in .box1').addClass('slide1');
			$('.sec05_in .box2').addClass('slide1');
		}
		
		
		
		
	});//window.scroll 마침




});