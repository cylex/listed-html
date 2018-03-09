jQuery(document).ready(function($) {

  if ($('.countdown').length != 0) {  
    $('#countdown').countdown({until: new Date(2018, 8 - 1, 8), timezone: +10});
    $('#countdown-with-bg').countdown({until: new Date(2018, 7 - 1, 8), timezone: +10});
  }

});


