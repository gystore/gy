$(function(){
	
	//코로나 정보 닫기
	$('.close a').click(function(){		
		$('#top').slideUp(1000);
	});
	
	
	//메인 메뉴 부분 gnb
	$('#nav .wrap .gnb li').hover(function(){
		$('#nav .gnb_wrap').show();
		
	},function(){
		$('#nav .gnb_wrap').hide();		
	});
	$('#nav .gnb_wrap ul').hover(function(){
		$('#nav .gnb_wrap').show();
	},function(){
		$('#nav .gnb_wrap').hide();	
	});
	
	$('#nav .wrap .gnb li.sp_menu').hover(function(){
		$('#nav .gnb_wrap').hide();	
		$('#nav .gnb_blue').show();
		return false;
	},function(){
		$('#nav .gnb_blue').hide();
		return false;
	});
	$('#nav .gnb_wrap ul.thisonly, #nav .gnb_blue ul').hover(function(){
		$('#nav .gnb_wrap').hide();	
		$('#nav .gnb_blue').show();
		return false;
	},function(){
		$('#nav .gnb_blue').hide();
		return false;
	});
	
	
	
	
	//콘트롤 그룹의 총 li의 숫자변경하여 넣기
	var pop_total =$('.pop_slide li').length;
	var no_total =$('.notice ul li').length;
	var sns_total =$('.snszone ul li').length;
	
	$('.slide_but .controls p span').text(pop_total);
	$('.slide_no .controls p span').text(no_total);
	$('.snszone .controls p span').text(sns_total);
	
	
	
	//팝업 슬라이드-------------
	var pop_prev = $('.slide_but .controls p .prev')
	var pop_next = $('.slide_but .controls p a.next')
	var pop_pause = $('.slide_but .controls p .pause')
	
	
		//초기세팅-----
	$('.pop_slide li').css('left','100%');
	$('.pop_slide li').eq(0).css('left',0);
	
	var popCurrent = 0;
	var popIndex = 0;
	
		//next 버튼 클릭
	pop_next.click(function(){		
		
		
		popIndex = popCurrent + 1;
		
		if(popIndex == pop_total) popIndex=0;
		
		var pop_cu = $('.pop_slide li').eq(popCurrent);
		var pop_ne = $('.pop_slide li').eq(popIndex);
		
		
		
		pop_cu.css('left',0).stop().animate({'left':'-100%'},500);
		pop_ne.css('left','100%').stop().animate({'left':0},500);
		
		popCurrent = popIndex;
		
		$('.pop_slide .controls p strong').text(popIndex+1);
		
		return false;
	});
	
		//prev 버튼 클릭
	pop_prev.click(function(){		
		
		
		popIndex = popCurrent - 1;
		
		if(popIndex == -1) popIndex = pop_total -1;
		
		var pop_cu = $('.pop_slide li').eq(popCurrent);
		var pop_ne = $('.pop_slide li').eq(popIndex);
		
		
		
		pop_cu.css('left',0).stop().animate({'left':'100%'},500);
		pop_ne.css('left','-100%').stop().animate({'left':0},500);
		
		popCurrent = popIndex;
		
		$('.pop_slide .controls p strong').text(popIndex+1);
		
		return false;
	});
	var setit;
	popAuto();
	
		//자동슬라이드 - popAuto로 함수 지정
	function popAuto(){
		
		setit = setInterval(function(){
			
			pop_next.trigger('click');
			
			return false;
			
		},3000);
		
	}	
		//일시정지, 플레이 버튼 설정
	pop_pause.click(function(){
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			popAuto();
			
		}else{
			$(this).addClass('on');
			clearInterval(setit);
		}
		
		return false;
	});
	
	
	//탭 메뉴 -------------
	
	var tab_list = $('.tab_list ul');
	
		//초기세팅----
	tab_list.eq(0).show();
	
	$('.tab_menu li').click(function(){
		
		var ti = $(this).index();
		
		$('.tab_menu li').removeClass('on');
		$(this).addClass('on');
		
		tab_list.hide();
		tab_list.eq(ti).show();
		
		
		return false;
	});
	
	//알림마당 슬라이드-------------
	var no_prev = $('.slide_no .controls p a.prev')
	var no_next = $('.slide_no .controls p a.next')
	var no_pause = $('.slide_no .controls p a.pause')
	
	
		//초기세팅-----
	$('.notice ul li').css('left','100%');
	$('.notice ul li').eq(0).css('left',0);
	
	var noCurrent = 0;
	var noIndex = 0;
	
		//next 버튼 클릭
	no_next.click(function(){		
		
		
		noIndex = noCurrent + 1;
		
		if(noIndex == no_total) noIndex=0;
		
		var no_cu = $('.notice ul li').eq(noCurrent);
		var no_ne = $('.notice ul li').eq(noIndex);
		
		
		
		no_cu.css('left',0).stop().animate({'left':'-100%'},500);
		no_ne.css('left','100%').stop().animate({'left':0},500);
		
		noCurrent = noIndex;
		
		$('.slide_no .controls p strong').text(noIndex+1);
		
		return false;
	});
	
		//prev 버튼 클릭
	no_prev.click(function(){		
		
		
		noIndex = noCurrent - 1;
		
		if(noIndex == -1) noIndex = no_total -1;
		
		var no_cu = $('.notice ul li').eq(noCurrent);
		var no_ne = $('.notice ul li').eq(noIndex);
		
		
		
		no_cu.css('left',0).stop().animate({'left':'100%'},500);
		no_ne.css('left','-100%').stop().animate({'left':0},500);
		
		noCurrent = noIndex;
		
		$('.slide_no .controls p strong').text(noIndex+1);
		
		return false;
	});
	var setit_no;
	noAuto();
	
		//자동슬라이드 - popAuto로 함수 지정
	function noAuto(){
		
		setit_no = setInterval(function(){
			
			no_next.trigger('click');
			
			return false;
			
		},3000);
		
	}	
		//일시정지, 플레이 버튼 설정
	no_pause.click(function(){
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			noAuto();
			
		}else{
			$(this).addClass('on');
			clearInterval(setit_no);
		}
		
		return false;
	});
	
	
	//snszone의 slide
		//초기세팅-----
	$('.snszone ul li').css('left','100%');
	$('.snszone ul li').eq(0).css('left','0');
	
	var current = 0;
	var i = 0;
		//블릿=click을 임으로 설정
	$('.click li').click(function(){
		
		i = $(this).index();
		
		var num = i + 1;
		$('.snszone .controls p strong').text(num);
		
		move();
		
		return false;
		
	});
		//move함수 지정
	function move(){
		
		if(i == current) return;
		
		var cu = $('.snszone ul li').eq(current);
		var ne = $('.snszone ul li').eq(i);
		
		cu.css('left',0).stop().animate({'left':'-100%'},500);
		ne.css('left','100%').stop().animate({'left':0},500);
		
		current = i;
		
	}
		//next 버튼 클릭
	$('.snszone .controls a.next').click(function(){
		
		i++;
	
		if(i==3){i=0;}
		//console.log(i);
		var num = i + 1;
		$('.controls p strong').text(num);
		
		move();
		return false;
		
	});
		//prev 버튼 클릭
	$('.snszone .controls a.prev').click(function(){
		
		i--;
		
		if(i==-1){i=2;}	
	
		var cu = $('.snszone ul li').eq(current);
		var pe = $('.snszone ul li').eq(i);
		
		cu.css('left',0).stop().animate({'left':'100%'},500);
		pe.css('left','-100%').stop().animate({'left':0},500);
		
		current = i;
		
		var num = i + 1;
		$('.snszone .controls p strong').text(num);
		
		return false;
		
	});
	
			//자동슬라이드
	function autoslide(){
		
		var n = current + 1;
	
		if(n==3){n=0;}

		$('.click li').eq(n).trigger('click');
		
		var num = i + 1;
		$('.snszone .controls p strong').text(num);
		
	}
	
	var id = setInterval(autoslide,2000);
		//일시정지 플레이 버튼 클릭
	$('.snszone .controls a.pause').click(function(){
		
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			id = setInterval(autoslide,2000);
			
		}else{
			$(this).addClass('on');
			clearInterval(id);
		}
		
		return false;
	});
	
	
	
	
	
	
});