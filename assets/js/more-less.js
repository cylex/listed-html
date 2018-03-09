$(document).ready(function(){
  $('a[data-collapse-more-less]').on('click', function() {
    var textPrev = $(this).html();
    $(this).html($(this).data('collapse-more-less'));
    $(this).data('collapse-more-less', textPrev);
  });
});



