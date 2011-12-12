(function( $ ) {
	$.fn.loadImage = function(src,cb,image) {
	    var self = this,
			image = image || new Image();
    
		setTimeout(function() {
	    	if (image.src != src)
				image.src = src;
	       if (!image.complete)
	         return self.loadImage(src,cb,image)

	      $rocketJ(self).attr('src',src)
	      cb.call(this)
	    },50);
	};
});