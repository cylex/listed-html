jQuery(document).ready(function($) {

  function startAnimate() {
    $('.progress-item').progressAnimate({
      duration: 1000,
      textSelector: '.progress-text'
    });
  }


  $('.skills').waypoint({
    handler: function(direction) {
      startAnimate();
    },
    offset: '75%'
  });

  if ($('.countdown').length != 0) {
    $('#countdown').countdown({until: new Date(2018, 8 - 1, 8), timezone: +10});
    $('#countdown-with-bg').countdown({until: new Date(2018, 7 - 1, 8), timezone: +10});
  }

  setTimeout(function(){
    $('.statistics.bg-image').waypoint({
      handler: function(direction) {
        $('.statistics.bg-image .counter-item .number').numberAnimate({
          duration: 1000,
        });
      },
      offset: '75%'
    });

  }, 300);

});
