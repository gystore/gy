$(function () {

	//하위 ul 보이기
	$('#career > ul > li').click(function(){
		
		if($(this).children('ul').hasClass('on')){
			zeroPercent();
			
			$(this).children('ul').removeClass('on').stop().slideUp();
			$(this).find('.ro').removeClass('on');
						
		}else{
			activateScene();
			
			$(this).children('ul').addClass('on').stop().slideDown();
			$(this).find('.ro').addClass('on');	
						
		}		
		
	});


	//차트 - skills
	var $content = $('#skill_content');//차트전체를 $content에 대입
	var $charts = $content.find('.chart'); //각각의 챠트
	
	$(window).scroll(function(){
		var sct = $(window).scrollTop();		
		
	});
	
	function activateScene(){
		if($content.hasClass('active')==false){
		   $content.stop().animate({right:0},1200);
		   $charts.each(function(){
			   var $chart = $(this);
			   var $circleLeft = $chart.find('.left .circle-mask-inner')
			   .css({transform:'rotate(0)'});
			   var $circleRight = $chart.find('.right .circle-mask-inner')
			   .css({transform:'rotate(0)'}); //원형챠트 회전 0
			   var $percentNumber = $chart.find(".percent-number");
			   var percentData = $percentNumber.attr('data-number'); //수치를 읽어온다.
			   $percentNumber.text(0);
			   $({percent:0}).animate({percent:percentData},{
				   duration:1500,
				   progress:function(){
					 var now = this.percent;  
					 var deg = now * 360 / 100;	
					 var degRight = Math.min(Math.max(deg, 0), 180);
					 var degLeft = Math.min(Math.max(deg - 180 ,0), 180);
					 $circleRight.css({transform:"rotate("+degRight+"deg)"});
					 $circleLeft.css({transform:"rotate("+degLeft+"deg)"});
					 
					$percentNumber.text(Math.floor(now));
					   //$percentNumber 소숫점 버린 now를 넣어서 표기
				   }
			   });		   
		   });
		}
		$content.addClass('active');
		$content.removeClass('unactive');
	}
	
	function zeroPercent(){
		if($content.hasClass('unactive')==false){
			  var $chart = $(this);
			   var $circleLeft = $chart.find('.left .circle-mask-inner')
			   .css({transform:'rotate(0)'});
			   var $circleRight = $chart.find('.right .circle-mask-inner')
			   .css({transform:'rotate(0)'}); //원형챠트 회전 0
			   var $percentNumber = $chart.find(".percent-number");
			   $percentNumber.text(0);
		}
		$content.removeClass('active');
		$content.addClass('unactive');
	
	}
	
	
});