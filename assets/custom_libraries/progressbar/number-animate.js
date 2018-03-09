(function($) {

  var numberAnimate = function( element, options ) {
    this.element = $(element);
    this.settings = $.extend({}, $.fn.numberAnimate.defaults, options);

    this.init = function() {
      if (!this.settings.restart &&
        this.element.hasClass('number-animation-finished')) {
        return;
      }

      if (this.settings.start === null) {
        this.settings.start = 0;
      }

      if (this.settings.end === null) {
        this.settings.end = this.element.text();
        if (typeof this.settings.cleanNumberFromStr == "function") {
          this.settings.end = this.settings.cleanNumberFromStr(this.settings.end);
        }
      }

      this.startAnimation();
    };

    this.startAnimation = function() {
      var self = this;
      var count, text;

      $({ Counter: self.settings.start }).animate({ Counter: self.settings.end }, {
          duration: self.settings.duration,
          easing: self.settings.easing,
          start: function() {
            self.element.addClass('number-animation-started');

            if (typeof self.settings.startHandler == "function") {
              self.settings.startHandler();
            }
          },
          step: function () {
            count = Math.ceil(this.Counter);
            text  = count + "";

            if (typeof self.settings.textFormatter == "function") {
              text = self.settings.textFormatter(text);
            }

            self.element.text(text);

            if (typeof self.settings.stepHandler == "function") {
              self.settings.stepHandler(count);
            }
          },
          done: function() {
            self.element.removeClass('number-animation-started');
            self.element.addClass('number-animation-finished');

            if (typeof self.settings.doneHandler == "function") {
              self.settings.doneHandler();
            }
          }
      });
    };

    this.init();
  }

  $.fn.numberAnimate = function( options ) {
    return this.each(function(key, value){
      if ($(this).hasClass('number-animation-started')) {
        return;
      }

      if(typeof options != 'object')
        options = {};

      var animator = new numberAnimate(this, options);
    });
  };

  $.fn.numberAnimate.defaults = {
    duration: 1000,
    start: null,
    end: null,
    easing: 'swing',
    restart: false,
    textFormatter: null,
    cleanNumberFromStr: null,

    startHandler: null,
    doneHandler: null,
    stepHandler: null,
  };

})(jQuery);


