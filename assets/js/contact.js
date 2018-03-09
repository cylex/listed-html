$(document).ready(function(){
  var pin = [];
  $.getJSON("assets/js/json/contact.json", function(data) {
      pin.push(data); // this will show the info it in firebug console
  })
  .done(function() {
    if ($('#map').length == 0) return;
    setViewMap = {'lat':'25.7715273', 'lon': '-80.2744739'};
    settings = {
      'zoom': '14'
    };
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
