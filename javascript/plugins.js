(function($){

	"use strict";

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   // Magnific PopUp - responsive lightbox
	// http://dimsemenov.com/plugins/magnific-popup/documentation.html
		
	$(document).ready(function(){
	if(typeof $.fn.magnificPopup != 'undefined'){
		
			$('.magnificPopup').magnificPopup({
				disableOn: 400,
				closeOnContentClick: true,
				type: 'image'
			});
			
			$('.magnificPopup-gallery').magnificPopup({
				disableOn: 400,
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		
		}
		
		
	$(window).load(function(){	

		// Isotope
		// http://isotope.metafizzy.co/beta/
		if (typeof $.fn.isotope != 'undefined') {
			$('.portfolio-items').imagesLoaded( function() {
				var containerp = $('.portfolio-items');
				containerp.isotope({
					itemSelector: '.item',
					layoutMode: 'masonry'
				});
				$('.portfolio-filter li a').click(function () {
					$('.portfolio-filter li').removeClass('current');
					$(this.parentNode).addClass('current');
					var selector = $(this).attr('data-filter');
					containerp.isotope({
						filter: selector,
						layoutMode: 'masonry'
					});
					return false;
				});
			});
		}
		

		
	});//window load function
	
		
		
		

		
		
		
		
		//

	});
	
/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   	
	$(window).scroll(function () {
							   
		
		
	});

})(window.jQuery);

// non jQuery plugins below