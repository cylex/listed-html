var ResultMap;
(function($) {

  ResultMap = function(pins, setViewMap, settings) {
    var self = this;
    this.map = null;
    this.markers = [];
    this.initInterface = function() {

      this.map = L.map('map').setView([setViewMap.lat, setViewMap.lon], settings.zoom);
      if ($(window).width() < 768) {
        this.map.scrollWheelZoom.disable();
     }
      this.setupTileLayer();
      this.setPinIcons();
      this.loopItems();

    },
    this.setupTileLayer = function() {
      L.tileLayer('https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i349018013!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0')
      .addTo(this.map);
    },
    this.setPinIcons = function() {
      L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
    },
    this.loopItems = function() {
      for (pin in pins) {
        this.addMarker(pins[pin]);
      }
    },
    this.addMarker = function(item) {
      marker = L.marker([item.lat, item.lon], {
        icon: L.AwesomeMarkers.icon({
          icon: item.icon,
          markerColor: item.markerColor,
          iconSize:     [40, 50],
          iconAnchor: [40, 50],
          popupAnchor: [-20, -56],
        })
      }).addTo(this.map).bindPopup(item.popupContent);
      this.markers.push(marker);
    },
    this.selectItem = function() {
      $('.map-list-item').mouseenter( function(){
        rowIndex = $(this).data('pin');
        var latlng = $(this).data().point.split(',');
        if (self.markers[rowIndex] !== undefined) {
          self.map.setView([latlng[0],latlng[1]]);
          self.markers[rowIndex].openPopup();
        }
      });
    }
  };

})(jQuery);
