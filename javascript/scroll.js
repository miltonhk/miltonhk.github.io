/*--------------------------------------------------
	 SCROLL
---------------------------------------------------*/


jQuery(document).ready(function($){

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
	  //alert($("#mobile-menu").outerHeight())
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		  if($("#mobile-menu").is(":visible")){
        	$('html,body').animate({
          	scrollTop: target.offset().top - $("#header-wrapper").outerHeight() + $("#mobile-menu").outerHeight() + 1}, 1000);
		  } else {
			$('html,body').animate({
          	scrollTop: target.offset().top - $("#header-wrapper").outerHeight() + 1}, 1000);
		  }
        return false;
      }
    }
  });



	/*----------------------------------------------------*/
	// 				MENU / NAVIGATION
	/*----------------------------------------------------*/ 
	$(document).scroll(function(){
		$('.menu li a').each(function(){
			var target = $(this).attr('href');
			if ($(target).length == 1){
				if ( $(window).scrollTop() > $(target).offset().top - $("#header-wrapper").outerHeight() ){
					$('.menu li a').removeClass('active');
					$(this).addClass('active');
				}
			}
			
		})
		if ( $(window).scrollTop() < $("#header-wrapper").prev("div").outerHeight()){
			$('.menu li a').removeClass('active');
		}
	})

});