(function ($) {
	$.fn.bra_mobile_menu = function () {
	var $menu = $( "#primary-menu" ).clone();
	$menu.find("ul").removeClass("menu");
	$menu.find("ul").removeAttr("style");
	$menu.find("li").each(function() {
		if($(this).find('> ul').length > 0) {
			 $(this).addClass('has-ul');
			 $(this).find('> a').append('<span class="sf-sub-indicator"></span>');
		}
		if($(this).find('> a').length > 0) {
			 $(this).addClass('active');
		}
	})
	$(".header .holder").append('<div id="three-lines-menu"><a href="#"><i class="fa fa-bars"></i></a></div>');
	$("#header-wrapper").append("<div id='mobile-menu'><div class='container'>" + $menu.html() + "</div></div>");

	$('#three-lines-menu').click(function(){
		$('#mobile-menu').stop(true,true).slideToggle(300);
		return false;
	});
	
	$('#mobile-menu .container ul li ul').hide();
	
	$('#mobile-menu .container ul li:has(">ul") > a .sf-sub-indicator').click(function(){
		$(this).parent().parent().toggleClass('open');
		$(this).parent().parent().find('> ul').stop(true,true).slideToggle();
		return false;
	});
	$('#mobile-menu a').click(function(){
		$('#mobile-menu').stop(true,true).slideUp(300);
		$('#mobile-menu a').removeClass("active");
		$(this).addClass("active");
	});

	}	


	$.fn.bra_add_sticky = function (add_sticky) {

	//var window_w = $(window).width();
	var header = $('#header-wrapper').offset().top;
	var fullwidth_h = $("#header-wrapper").prev("div").outerHeight();

	var order = $('#header-wrapper').prev("div").length;

	if (order) header = fullwidth_h; else header = 0; 
	
	if(($(window).scrollTop() > header) && add_sticky) {
		$('#header-wrapper').addClass("sticky");
		$('#wrapper').css("margin-top", $('#header-wrapper').outerHeight() + "px")
	}

	if (add_sticky){
		
		$(window).scroll(function(){		
			if( $(window).scrollTop() > header) {
				$('#header-wrapper').addClass("sticky");
				$('#wrapper').css("margin-top", $('#header-wrapper').outerHeight() + "px")
			} else {
				$('#header-wrapper').removeClass("sticky");
				$('#wrapper').removeAttr("style");
			}
		});		
	} else {
		$(window).unbind('scroll');
		$('#header-wrapper').removeClass("sticky");
		$('#wrapper').removeAttr("style");
	}
	
	
	}	
})(jQuery)

var bra_sticky = true;

jQuery(document).ready(function($) {
	if ($(".menu-overlay").length == 0) {
		$().bra_mobile_menu();
	}
		$().bra_add_sticky(bra_sticky);
	
		$(window).resize(function() {
			if ($(".menu-overlay").length == 0) {
				$('#mobile-menu').css("display", "none")
			}
			$().bra_add_sticky(bra_sticky);
			
		})


})