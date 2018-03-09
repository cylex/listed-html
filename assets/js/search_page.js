var ResultMap;
(function($) {

  $( document ).ready(function() {
    if ($(window).width() > 767) {
      var content_height = $(window).height() - $('.navbar').height() - 15;
      $('.full-window-height .column').height(content_height);
      $('.full-window-height #map').height(content_height);

      function validateFields(e) {
        $('#map-list').toggleClass('hide');
        $('.left-column__filter').toggleClass('hide');
        $('.pagination').toggleClass('hide');
      }

      $(function(){
        $('.filter-button').click(validateFields);
        $('.btn#close-facets').click(validateFields);
      });

    } else {
       var content_height = $(window).height() - $('nav.navbar').height() - 15;
       $('.full-window-height #map').height(content_height);
       $('.search-list-map-visibility #map').height(content_height);

      $('.fixed-column').addClass('hidden-visibility');

      $('.map-button').on('click', function() {
        $('body').addClass('responsive-map');
        $('.left-column__filter').addClass('hide');
        $('.filter-button').removeClass('filtered');
        $('#map').removeClass('hide').closest('.fixed-column').css('margin-top','-31px');
        $('#map').removeClass('hide').closest('.search-list-map-visibility .fixed-column').css('margin-top','0');
        $('#map-list').addClass('hide');
        $('#search-items-list').addClass('hide');
        $('.search-list-map-visibility .fixed-column').addClass('show');
        $('.map-button').toggleClass('hide');
        $('.list-button').toggleClass('hide');
        $('.fixed-column').removeClass('hidden-visibility');
        $('.show-map').addClass('hide');
        $('footer').addClass('hide');
        $('.footer-bottom').addClass('hide');
      });

      $('.list-button').on('click', function() {
        $('body').removeClass('responsive-map');
        $('.left-column__filter').addClass('hide');
        $('.filter-button').removeClass('filtered');
        $('#map').addClass('hide');
        $('#map-list').removeClass('hide');
        $('#search-items-list').removeClass('hide');
        $('.search-list-map-visibility .fixed-column').removeClass('show');
        $('.map-button').toggleClass('hide');
        $('.list-button').toggleClass('hide');
        $('.show-map').removeClass('hide');
        $('footer').removeClass('hide');
        $('.footer-bottom').removeClass('hide');
      });

      function validateFields(e) {
        $('.filter-button').toggleClass('filtered');
        $('.btn#close-facets').toggleClass('filtered');
        $('#map-list').removeClass('hide');
        $('#search-items-list').removeClass('hide');
        $('.left-column__filter').addClass('hide');
        $('.pagination').removeClass('hide');
        $('.search-list-map-visibility .fixed-column').removeClass('show');
        if ($('.filter-button').hasClass('filtered')) {
          $('#map-list').addClass('hide');
          $('#search-items-list').addClass('hide');
          $('.left-column__filter').removeClass('hide');
          $('.pagination').addClass('hide');
          $('.left-column__filter').removeClass('hidden-xs');
          $('.map-button').removeClass('hide');
          $('.list-button').addClass('hide');
        }
        $('#map').addClass('hide');
      }

      $(function() {
        $('.filter-button').click(validateFields);
        $('.btn#close-facets').click(validateFields);
      });
    }

    function validateMap(e) {
      if($('.map-button').hasClass('hide')) {
        $('.pagination').addClass('hide');
      } else if($('.list-button').hasClass('hide')) {
        $('.pagination').removeClass('hide');
      }
    }

    $(function(){
      $('.map-button').click(validateMap);
      $('.list-button').click(validateMap);
    });


    $('.number-show').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('hide');
      $(this).next().removeClass('hide');
    });

     // Markers color: blue, light-blue, purple, green, red, yellow.
    var pin = [];
    $.getJSON("assets/js/json/search.json", function(data) {
        pin.push(data); // this will show the info it in firebug console
    })
    .done(function() {
      if ($('#map').length == 0) return;
      setViewMap = {'lat':'51.932994', 'lon': '4.509373'};
      settings = {'zoom': '14'};
      map = new ResultMap(pin[0], setViewMap, settings);
      map.initInterface();
      if ($(window).width() > 768) {
        map.selectItem();
      }
     })
    .fail(function() {
      console.log( "error" );
    });
  });

})(jQuery);


