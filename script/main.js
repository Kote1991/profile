$(document).ready(function(){
	$('html,body').animate({scrollTop:0},0);
		$(".menu-toggle").on('click',function(){
				if($('.fullscreen').length == 0){
					$('body').addClass('fullscreen');
					
				}
				else{
					$('body').removeClass('fullscreen');
				}
		});
		$('#side-nav li').on('click',function(e){
			e.preventDefault();
			var target = $($(this).find('a').attr('href'));
			$('html, body').animate({
				scrollTop: target.offset().top
			},1000);
			
			$(window).width() <768 ? $('.menu-toggle').trigger('click'): null;			
		});
		
	});
	$(window).load(function(){
		$('.content-w').css('min-height',$(window).height())
	});
	$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop(); 
		
		$('.content-w').each(function(i) {
				if ($(this).position().top-100 <= scrollDistance) {
						$('.navigation li.active').removeClass('active');
						$('.navigation li').eq(i).addClass('active');
				}
		});
}).scroll();
