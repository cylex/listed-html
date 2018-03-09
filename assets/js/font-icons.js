$(document).ready(function(){
  function iconItem (mainWrapper, fontClass, fontIName, fontKey, fontName) {
    $(mainWrapper).append (
      `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 icon-item">
        <i class="` + fontClass + ' ' + fontKey + `">` + fontIName + `</i>` + fontName +
      `</div>`
      );
  }

  $.getJSON("assets/js/json/fa-icons.json")
  .done(function(data) {
    for (font in data) {
      iconItem('#font-awesome-icons  > .row', 'fa', '', font, font);
    }
   })
  .fail(function() {
    console.log( "error load font awesome icons" );
  });

  $.getJSON("assets/js/json/material-icons.json")
  .done(function(data) {
    for (font in data) {
      iconItem('#material-design-icons   > .row', 'material-icons', data[font], '', data[font]);
    }
   })
  .fail(function() {
    console.log( "error load material icons" );
  });

  $.getJSON("assets/js/json/custom-icons.json")
  .done(function(data) {
    for (font in data) {
      iconItem('#listed-icons   > .row', 'icon', '', font, font);
    }
   })
  .fail(function() {
    console.log( "error load custom icons" );
  });
});
