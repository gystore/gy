$(function(){
	
	var count = $('.main_title ul li').length;
	var m_name = ['portfolio', 'hpoint', 'city', 'samsung', 'dasoni', 'sarar', 'subway', 'mi'];
	var m_title = ['MY PORTFOLIO', 'H-point', 'SeongNam City', 'SAMSUNG DISPLAY', 'DASONI', 'SARAR', 'SUBWAY', 'MI Korea'];	
	var bgColor = ['#F8F5EF', '#EF8A70', '#0f578c','#000000','#C3DFB3', '#000000', '#FFC20D', '#fc9b33'];
	var fontColor = ['#000', '#fff', '#fff','#fff','#000', '#fff', '#000', '#fff'];
	var num = Number($('#contents img').attr('alt'));
	var two_width = $("#cont_nav ul .two").width();
	var j=0;
	load();
	
	function load(j) {

		$('#contents').css({'transform':'scale(0.7)', 'opacity':0}).stop().animate({
			'transform':'scale(1)', 'opacity':1
		},1000);		

		$('#wrap').css('background-color', bgColor[num-1]);
		$('#contents img').attr('src','../images/main_'+m_name[num-1]+'.svg');
		$("#cont_nav ul .one").css('transform','translateX(100%)').stop().animate({'transform':'translateX(0)'},500,function(){
			$("#cont_nav ul .one .one_cover").fadeIn(500);
			$("#cont_nav ul .one span").text("0"+num);
			$("#cont_nav ul .one h1").text(m_title[num-1]).animate({'transform':'scaleX(1)'},500);
			if(num == 1){
				$("#cont_nav ul .one a").attr('href','../index.html');
			}else{
				$("#cont_nav ul .one a").attr('href','../'+m_name[num-1]+'/index.html');
			}
			
			if(num==8){
				$("#cont_nav ul .two span").text("01");
				$("#cont_nav ul .two h1").text(m_title[0]);
			}else{
				$("#cont_nav ul .two span").text("0"+(num+1));
				$("#cont_nav ul .two h1").text(m_title[num]);
			}					
			$("#cont_nav ul .two h1").text(m_title[num]);
			$("#cont_nav ul .one .ul_cover").stop().animate({'width':'100%'},500,function(){
				$("#cont_nav ul .two").stop().css('background-color',bgColor[num]).animate({
					'left':two_width
				},500,function(){
					$("#cont_nav ul li.two a").stop().fadeIn(1000);
					
				});
			});
		});
		
		
		
		$("#cont_nav ul .one").css('color',fontColor[num-1]);
		$("#cont_nav ul .one ul li a").css('border-color',fontColor[num-1]);
		$("#cont_nav ul .two").css('color',fontColor[num]);

		
	}
	
	$('.two').click(function(){
		
		if(num == 8) num=0;		
		$("#cont_nav ul .two a").attr('href','./'+m_name[num]+'.html');
		
	});
	
	/**********************************************************************/
	$(window).resize(function(){
		var w_width = $(window).width();
		
		if(w_width <= 450){
			$('.ul_cover ul').addClass('hide');
		}else{
			$('.ul_cover ul').removeClass('hide');
		}
		
		
	}); //window.resize 마침
	
	$(window).trigger('resize');
	
	
	
	
	
});