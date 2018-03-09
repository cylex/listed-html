var ResultMap;
(function($) {
  var handleStickyness = function() {
    var scroll = $(window).scrollTop();
    if ($('body.search').hasClass('nav-fixed')) return;
    // if (!$('body').hasClass('transparent-header')) return;
    if (scroll >= $('.navbar').outerHeight()) {
        $(".navbar").addClass("navbar-fixed-top");
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
    }
  };

  var addCollapseClass = function() {
    $('body').removeClass('collapse-navbar');
    $('.navbar-collapse').css('visibility', 'visible');
    if ($('.navbar-collapse').height() > 60) {
      $('body').addClass('collapse-navbar');
      $('.nav').addClass('sm-collapsible');
      $('.navbar-collapse').css('min-height', $(window).height());
      $('.caret').addClass('navbar-toggle sub-arrow');
      $('body .navbar-collapse').after('<div id="overlay"></div>');
    }
  };

  $( document ).ready(function() {
    if ($(window).width() > 767) {
     if ($('body.search').hasClass('nav-fixed')) {
        $('nav.navbar').addClass('navbar-fixed-top');
      }
      $(window).scroll(handleStickyness);
      handleStickyness;
      $('.navbar-toggle').on('click', function(){
        $('body').toggleClass('nav-collapse-in');
      });

      $(document).on('click','#overlay',function(){
        $('body').toggleClass('nav-collapse-in');
        $('.navbar-toggle').trigger( "click" );
      });
      addCollapseClass();
    }
    console.log(document.body.scrollHeight);
  });

  $( window ).resize(function() {
    addCollapseClass();
  });

})(jQuery);
