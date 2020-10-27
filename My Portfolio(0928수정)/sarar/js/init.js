$( function () {       	
	
	/*변수에 빈 내용을 저장*/
	var imgs='';
	//반복문을 사용해서 200개의 i를 생성
	for(var i = 0; i < 200 ; i++ ){
		//반복횟수만큼의 이미지를 imgs 변수에 삽입
		//images 폴더내 pic숫자.jpg 형식으로생성
		
		imgs = imgs + "<img src='images/pic"+i+".jpg'>"
		//imgs += "<img src='images/pic" + i + ".jpg'>"
	}
	//console.log(imgs);
	$('section').html(imgs);
 /*imgs 변수의 내용을 section 태그 내에 추가(삽입)*/
 
  $('body').on('mousemove',function(e){
	  var $posX = e.pageX;
	  //console.log($posX);
	  var $width = $(window).width();
	  //화면 넓이를 구해서 변수에 대입
	// alert($width);
	
	var $percent = Math.floor( ( $posX / $width ) * 200 );
	
	$('section > img').hide();
	  
	  
	  $('section > img').eq($percent).show();
  });
 
 
 
});












