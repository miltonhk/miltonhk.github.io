/*--------------------------------------------------
		 CONTACT FORM CODE
---------------------------------------------------*/
jQuery(document).ready(function($){
	var action = $(this).attr('action');

	$('form#contact-form').submit(function() {
		
		$("#message").slideUp(750,function() {
			$('#message').hide();

 			$('#submit')
				.after('<img src="../media/webuse/images/ajax-loader.gif" class="loader" />')
				.attr('disabled','disabled');
		});
		
		$('form#contact-form .contact-error').remove();
		var hasError = false;
		$('form#contact-form .requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
            	var labelText = $(this).prev('label').text();
            	$(this).parent().append('<span class="contact-error">Required</span>');
            	$(this).addClass('inputError');
            	hasError = true;
            } else if($(this).hasClass('email')) {
            	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            	if(!emailReg.test(jQuery.trim($(this).val()))) {
            		var labelText = $(this).prev('label').text();
            		$(this).parent().append('<span class="contact-error">Invalid</span>');
            		$(this).addClass('inputError');
            		hasError = true;
            	}
            }
		});
		if(!hasError) {
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contact-form img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contact-form').slideUp('slow');
				if(data.match('success') != null) $('#contacthead').slideUp('slow');
	
			});
		}


		return false;

	});
});

