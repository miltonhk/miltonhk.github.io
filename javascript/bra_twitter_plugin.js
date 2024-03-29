/**
 * Brankic Twitter Plugin
 * 
 * http://www.brankic1979.com
 *
 * Since the Twitter updated it's API most of old Twitter plugins don't work. 
 * Now Twitter requires new authentication, so you have to create new Twitter application.
 * https://dev.twitter.com/apps/  and use 4 keys. 
 * Don't blame me, it's how Twitter decide...
 *
 * Copyright 2013 Brankic1979
 */
(function($){
    $.fn.extend({
        bra_twitter: function(options) {
 
            var defaults = {
                username: 'brankic1979',
				count: 4,
				consumerkey: "Sz5SkJBsUK0t2MnqQWYUQ",
				consumersecret: "BgXJtut6BaDWNj0rGFVJjVfVNFqwVuOBXc7xAY0tHS8",
				accesstoken: "32843657-tP2IjzF3oPqQFMvl2YzAtvxYg5VD8TdQavP6TdXrA",
				accesstokensecret: "RbFxeyJChVJewFj1Ek3H8BNDxkZbcaMXOlnK5wRCVo" 
            };

            var options = $.extend(defaults, options);
         
            return this.each(function() {
			 
			 
			  var o = options;
			  var obj = $(this); 
			  obj.html("loading latest " + o.count + " tweets from " + o.username);
			  obj.load("php/twitter.php", {username: o.username, count: o.count, consumerkey: o.consumerkey, consumersecret: o.consumersecret, accesstoken:o.accesstoken, accesstokensecret: o.accesstokensecret});
 
            }); // return this.each
        }
    });
})(jQuery);