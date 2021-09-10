jQuery(document).ready(function($) { 
	var color = "green"; // tealgreen, green, red, pink, purple, orange, navyblue, magenta, cream, blue, yellow
	var css_url = "css/colors/color-" + color + ".css";
	$('head').append('<link rel="stylesheet" href="' + css_url + '" type="text/css" />');
	var boxed = false; // true, false
	if (boxed) {$('head').append('<link rel="stylesheet" href="css/style-boxed.css" type="text/css" />')};
})



function is_touch_device() {
  return !!('ontouchstart' in window);
}





 /*-------------------------------------------------------------------------------------
	   ADAPTIVE ELEMENT HEIGHT
--------------------------------------------------------------------------------------*/	
jQuery(document).ready(function($){
	var prev_height = $(".post-nav-2 li.prev").outerHeight();
	var next_height = $(".post-nav-2 li.next").outerHeight();
	if (prev_height > next_height){
		$(".post-nav-2 li.next").css("height", $(".post-nav-2 li.prev").outerHeight() + "px");		
	}
	if (prev_height < next_height){
		$(".post-nav-2 li.prev").css("height", $(".post-nav-2 li.next").outerHeight() + "px");
	}
}); 	


jQuery(document).ready(function($){
	$(".comment .avatar").each(function(){
		var comment_height = $(this).next("div").outerHeight();	
		$(this).css("height", comment_height + "px");
	
	})							

});

 /*-------------------------------------------------------------------------------------
	   ADAPTIVE ELEMENT HEIGHT 
--------------------------------------------------------------------------------------*/ 

jQuery(document).ready(function($){
	var elements = $("#services .boxed")
	var max_height = 0;
	elements.each(function(){
		var element_height = $(this).outerHeight();	
		if (element_height > max_height) max_height = element_height;
	})
	elements.css("height", max_height + "px");							

});


/*--------------------------------------------------
	 BACK TO TOP
---------------------------------------------------*/
jQuery(document).ready(function($){
								
	var windowsize = $(window).width();

	if (windowsize > 767 ) {
	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	}
}); 





/*--------------------------------------------------
	    PORTFOLIO ITEM IMAGE HOVER
---------------------------------------------------*/
jQuery(document).ready(function($){
						   
	$(".portfolio-grid ul li .item-info-overlay").hide();
	
	if( is_touch_device() ){
		$(".portfolio-grid ul li").click(function(){
												  
			var count_before = $(this).closest("li").prevAll("li").length;
			
			var this_opacity = $(this).find(".item-info-overlay").css("opacity");
			var this_display = $(this).find(".item-info-overlay").css("display");
			
			
			if ((this_opacity == 0) || (this_display == "none")) {
				$(this).find(".item-info-overlay").fadeTo(250, 1);
			} else {
				$(this).find(".item-info-overlay").fadeTo(250, 0);
			}
			
			$(this).closest("ul").find("li:lt(" + count_before + ") .item-info-overlay").fadeTo(250, 0);
			$(this).closest("ul").find("li:gt(" + count_before + ") .item-info-overlay").fadeTo(250, 0);	

		});	

	}
	else{	
			$(".portfolio-grid ul li").hover(function(){
				$(this).find(".item-info-overlay").fadeTo(250, 1);
				}, function() {
					$(this).find(".item-info-overlay").fadeTo(250, 0);		
			});
		
		}	
	
});



/*--------------------------------------------------
	 PORTFOLIO INTERNAL OPEN
	 Add data-open="internal" to A tag you want to open internal on page
---------------------------------------------------*/
jQuery(document).ready(function($){
	$("a[data-open='internal']").click(function(){
	
		var external_url = $(this).attr("href") + " #single_content";
		
		$("html, body").animate({
			scrollTop: $(".portfolio-single-holder").offset().top - $("#header-wrapper.sticky").outerHeight()
			}, 1000, function(){
			//$(".portfolio-single-holder").fadeTo("slow", 0.01);
			    $(".portfolio-single-holder").slideUp("slow", function(){
					$(".portfolio-single-holder").load(external_url, function( response, status, xhr ) {
						if ( status == "error" ) {
						var msg = "Sorry but there was an error: ";
						alert( msg + xhr.status + " " + xhr.statusText );
						}
						//
						$(".portfolio-single-holder").css("opacity", 0.01);
						$(".portfolio-single-holder").slideDown("slow");
						$(".portfolio-single-holder").fadeTo("slow", 1);
						$('#portfolio-slider').bxSlider({
						  controls: true,
						  pager: false,
						  auto: false,
						  pause: 2000,
						  adaptiveHeight: true,
						  mode: 'fade'
						});
						$('.pop').popupWindow({ 
							width:700,
							height:400,
							centerBrowser:1 
						}); 
						$(".iframe").colorbox({iframe:true, width:"720px", height:"554px", rel:'iframe'});
						$("#randomize").justifiedGallery({ randomize : true, margins: 0, lastRow: 'justify' });
						$(".photocontainer").colorbox({rel:'photocontainer'});
						$(".callbacks").colorbox({
							onOpen:function(){ alert('onOpen: colorbox is about to open'); },
							onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
							onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
							onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
							onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
						});
						
						//Example of preserving a JavaScript event for inline calls.
						$("#click").click(function(){ 
							$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
							return false;
						});
						
						$(".portfolio-single-holder").append("<a href='#' class='button grey close_external'>CLOSE</a>");
						$(".portfolio-single-holder a.close_external").click(function(){
/*							$(".portfolio-single-holder").fadeTo("slow", 0.01);
							$("html, body").animate({
								scrollTop: $(".portfolio-single-holder").offset().top - $("#header-wrapper.sticky").outerHeight()
								}, 1000, function(){
									$(".portfolio-single-holder").slideUp("slow");
							})*/
							
							$("html, body").animate({
								scrollTop: $(".portfolio-single-holder").offset().top - $("#header-wrapper.sticky").outerHeight()
								}, 1000, function(){
									
								$(".portfolio-single-holder").slideUp("slow", function(){
									$(".portfolio-single-holder").empty();
									$(".portfolio-single-holder").fadeTo("slow", 0);
								})
							
							})
							
							
							return false;
						})
						
					});	
				});

			
			
		});


		
		
		return false;
	})
}); 





/*--------------------------------------------------
	    TEAM IMAGE HOVER
---------------------------------------------------*/
jQuery(document).ready(function($){
						   
	$(".team li .team-member-info").hide();
	
	if( is_touch_device() ){
		$(".team li").click(function(){
												  
			var count_before = $(this).closest("li").prevAll("li").length;
			
			var this_opacity = $(this).find(".team-member-info").css("opacity");
			var this_display = $(this).find(".team-member-info").css("display");
			
			
			if ((this_opacity == 0) || (this_display == "none")) {
				$(this).find(".team-member-info").fadeTo(250, 1);
			} else {
				$(this).find(".team-member-info").fadeTo(250, 0);
			}
			
			$(this).closest("ul").find(">li:lt(" + count_before + ") .team-member-info").fadeTo(250, 0);
			$(this).closest("ul").find(">li:gt(" + count_before + ") .team-member-info").fadeTo(250, 0);	

		});	

	}
	else{	
			$(".team li").hover(function(){
				$(this).find(".team-member-info").fadeTo(250, 1);
				}, function() {
					$(this).find(".team-member-info").fadeTo(250, 0);		
			});
		
		}	
	
});





/*--------------------------------------------------
	     TOGGLE
---------------------------------------------------*/
jQuery(document).ready(function($) {
								
	$(".toggle-container").hide(); 
	$(".trigger").toggle(function(){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});
	$(".trigger").click(function(){
		$(this).next(".toggle-container").slideToggle();
	});
});





/*--------------------------------------------------
	     ACCORDION PLUGIN
---------------------------------------------------*/
(function($){
    $.fn.extend({
        bra_accordion: function(options) {
 
            var defaults = {
                active: 1 //which tab should be openned by default. 0 for all closed.
            };

            var options = $.extend(defaults, options);
         
            return this.each(function() {
			  var o = options;
			  var obj = $(this); 
			  var obj_id = "#" + obj.attr("id");

				active_plus = o.active - 1;
				$(this).find('.accordion').hide();
				
				if (o.active > 0) {
					$(this).find(".trigger-button:eq(" + active_plus + ")").addClass("active"); //Activate tab and content from declaration
					$(this).find(".accordion:eq(" + active_plus + ")").slideDown('normal');; 
				}
				
				$(this).find('.trigger-button').click(function() {
					$(obj_id + " .trigger-button").removeClass("active")
					$(obj_id + ' .accordion').slideUp('normal');
					if($(this).next().is(':hidden') == true) {
						$(this).next().slideDown('normal');
						$(this).addClass("active");
					 } 
				 });
				

 
            }); // return this.each
        }
    });
})(jQuery);





/*--------------------------------------------------
	     TABS PLUGIN
---------------------------------------------------*//*
 *
 * jQuery Tabset
 * Created by Anthony Colangelo (http://acolangelo.com) * 
 * © 2012 Anthony Colangelo
 *
*/
(function($){
	$.tabset = function(options){
		options = $.extend({
			header: '.tabs > h3',
			content: '.tabs > div',
			activeIndex: 0,
			activeClass: 'tabs-active',
			before: function(){},
			after: function(){}
		}, options);

		var headers = $(options.header);
		var contents = $(options.content);
		
		var clickables = headers
		if ( !headers.is('a') ) { clickables = clickables.find('a'); }

		function setActive(index) {
			
			options.before();

			headers.removeClass(options.activeClass).eq(index).addClass(options.activeClass);
			contents.removeClass(options.activeClass).hide();
			contents.eq(index).show().addClass(options.activeClass);

			options.after();
			
		}

		setActive(options.activeIndex);
		clickables.on('click',function(){
			setActive(headers.index($(this).closest(options.header)));
			return false;
		});
	}
})(jQuery);





/*--------------------------------------------------
	  			SLIDING GRAPH
---------------------------------------------------*/
function isScrolledIntoView(id)
{
	var elem = "#" + id;
	//alert(elem);
	var docViewTop = jQuery(window).scrollTop();
	var docViewBottom = docViewTop + jQuery(window).height();

	if (jQuery(elem).length > 0){
		var elemTop = jQuery(elem).offset().top;
		var elemBottom = elemTop + jQuery(elem).height();
	}

	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	  && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}


function sliding_horizontal_graph(id, speed){
	jQuery("#" + id + " li span").each(function(i){
		var j = i + 1; 										  
		var cur_li = jQuery("#" + id + " li:nth-child(" + j + ") span");
		var w = cur_li.attr("class");
		cur_li.animate({width: w + "%"}, speed);
	})
}



(function($){
	$.fn.graph_init = function(speed){
	
	var id = $(this).attr("id");
	var this_this = $(this)
		
	$(window).scroll(function(){
		if (isScrolledIntoView(id)){
			sliding_horizontal_graph(id, speed);
		}
	})
	
	if (isScrolledIntoView(id)){
		sliding_horizontal_graph(id, speed);
	}
	
	}
////////////////////////////////////////////////////////	
	$.fn.bra_pie_chart = function(speed){
	
	var id = $(this).attr("id");
	var this_this = $(this)
		
	if (isScrolledIntoView(id)) {
		  $('.percentage').easyPieChart({
			  animate: speed
		  });
	  }
	$(window).scroll(function(){
		if (isScrolledIntoView(id)) {
			$('.percentage').easyPieChart({
				animate: speed
			});
		}
	})

	}	
	
	
/*--------------------------------------------------
	    COUNTER
---------------------------------------------------*/	
	
	
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);

			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               
		to: 0,                 
		speed: 1000,           
		refreshInterval: 100,  
		decimals: 0,           
		formatter: formatter,  
		onUpdate: null,        
		onComplete: null       
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
	

	
	
	
})(jQuery)






function count(options) {
 
 var $this = jQuery(this);
 var data_from = parseInt($this.attr("data-from"));
 var data_to = parseInt($this.attr("data-to"));
 var cur_value = parseInt($this.html()); 
 if ((data_from >= cur_value) || (data_to < cur_value)) {  
 options = jQuery.extend({}, options || {}, $this.data('countToOptions') || {});
 $this.countTo(options);
 }
}
  
  
jQuery(document).ready(function($) { 
 $(".timer").each(function(){
  if ($(this).attr("data-from") == undefined) $(this).attr("data-from", "0");
  var data_from = parseInt($(this).attr("data-from"));
  if ($(this).html() == "") $(this).html(data_from);
 })
 
 
 jQuery(window).scroll(function($){
  if (isScrolledIntoView('counter')){  
   jQuery('.timer').each(count);      
  }
 })
 
 if (isScrolledIntoView('counter')){  
  jQuery('.timer').each(count);      
 }

});





/*--------------------------------------------------
	  ADD MASK LAYER
---------------------------------------------------*/
jQuery(document).ready(function($) {						
	var $item_mask = $("<div />", {"class": "item-mask"});
	$(".parallax").append($item_mask);
})





/*--------------------------------------------------
		 VIDEO POPUP WINDOW CODE
---------------------------------------------------*/
jQuery(document).ready(function($) {
	$('.video-player-button').click(function() {		
		var popBox = $(this).attr('href');
		//Fade in the Popup
		$(popBox).fadeIn(300);		
		var popMargTop = ($(popBox).height() + 24) / 2; 
		var popMargLeft = ($(popBox).width() + 24) / 2; 		
		$('.video-player').append('<div id="video-player-mask"></div>');
		$('#video-player-mask').fadeIn(300);
		$('.video-player-button').fadeOut(1);		
		return false;
	});	
	$('a.close, #video-player-mask').live('click', function() { 
	  $('#video-player-mask, .video-player-container').fadeOut(300 , function() {
		$('#video-player-mask').remove(); 
		$('.video-player-button').fadeIn(1);	 
	}); 
	return false;
	});
});    





/*--------------------------------------------------
	     ADDITIONAL CODE GRID LIST
---------------------------------------------------*/
(function($){
    $.fn.extend({
        bra_last_last_row: function() {
            return this.each(function() {
			  		$(this).each(function(){
						var no_of_items = $(this).find("li").length;
						var no_of_cols = Math.round($(this).width() / $(this).find(":first").width() );
						var no_of_rows = Math.ceil(no_of_items / no_of_cols);
						var last_row_start = (no_of_rows - 1) * no_of_cols - 1;						
						if (last_row_start < (no_of_cols - 1)) {
							last_row_start = 0;
							$(this).find("li:eq(" + last_row_start + ")").addClass("last-row");
						}
						$(this).find("li:nth-child(" + no_of_cols + "n+ " + no_of_cols + ")").addClass("last");
						$(this).find("li:gt(" + last_row_start + ")").addClass("last-row");
					}) 
            }); // return this.each
        }
    });
})(jQuery);

jQuery(document).ready(function($) {
	$('.grid').bra_last_last_row();
	//$(window).resize(function() {
		//$('.grid').bra_last_last_row();
	//});
})