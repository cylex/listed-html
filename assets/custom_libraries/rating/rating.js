$(function () {
  $('.rating-tooltip-manual').rating({
    extendSymbol: function () {
      var title;
      $(this).on('rating.rateenter', function (e, rate) {
        title = rate;
      });
    }
  });	
 
});