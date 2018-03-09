(function($) {
	$( document ).ready(function() {
    $("a.scroll-to-div").on('click', function(e) {
    	if (this.hash.length != 0) {
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 100
				}, 500, function(){
				window.location.hash = hash;
				});
    	}
    });
    //scroll to specific content on page
    $(".scroll-to-section").click(function() {
      if ($(window).width() > 767) {
        $('html, body').animate({
          scrollTop: $(".logo-slider").offset().top - $('.navbar').outerHeight()
          }, 1000);
      }
    });
  });
})(jQuery);
