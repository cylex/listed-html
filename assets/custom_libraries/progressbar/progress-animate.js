(function($) {

  var progressAnimate = function( element, options ) {
    this.element = $(element);
    this.settings = $.extend({}, $.fn.progressAnimate.defaults, options);

    this.init = function() {
      if (!this.settings.restart &&
        this.element.hasClass('progress-animation-finished')) {
        return;
      }

      if (this.settings.start === null) {
        this.settings.start = 0;
      }

      if (this.settings.end === null) {
        this.settings.end = $(this.element).find(this.settings.textSelector).text();
        if (typeof this.settings.cleanNumberFromStr == "function") {
          this.settings.end = this.settings.cleanNumberFromStr(this.settings.end);
        }
      }

      this.startAnimation();
    };

    this.startAnimation = function() {
      var self = this;

      $(this.element).find(this.settings.textSelector).numberAnimate({
        duration: self.settings.duration,
        easing: self.settings.easing,
        start: self.settings.start,
        end: self.settings.end,
        restart: self.settings.restart,

        cleanNumberFromStr: self.settings.cleanNumberFromStr,
        textFormatter: self.settings.textFormatter,

        startHandler: function() {
          self.element.addClass('progress-animation-started');

          if (typeof self.settings.startHandler == "function") {
            self.settings.startHandler();
          }
        },
        doneHandler: function() {
          self.element.removeClass('progress-animation-started');
          self.element.addClass('progress-animation-finished');

          if (typeof self.settings.doneHandler == "function") {
            self.settings.doneHandler();
          }
        },
        stepHandler: function(step) {
          $(self.element).find(self.settings.progressSelector).val(step);

          if (typeof self.settings.stepHandler == "function") {
            self.settings.stepHandler(step);
          }
        }
      });
    };

    this.init();
  }

  $.fn.progressAnimate = function( options ) {
    return this.each(function(key, value){
      if ($(this).hasClass('progress-animation-started')) {
        return;
      }

      if(typeof options != 'object')
        options = {};

      var animator = new progressAnimate(this, options);
    });
  };

  $.fn.progressAnimate.defaults = {
    duration: 1000,
    start: null,
    end: null,
    easing: 'swing',
    restart: false,
    textFormatter: function(text) {
      return text + '%';
    },
    cleanNumberFromStr: function(text) {
      return text.replace('%', '');
    },

    startHandler: null,
    doneHandler: null,
    stepHandler: null,

    textSelector: '.progress-percentage',
    progressSelector: '.progressbar'
  };

})(jQuery)
