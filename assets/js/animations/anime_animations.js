var slidey = $('.slide');
slidey.waypoint({
  handler: function(direction) {
  var customBezier = anime({
    targets: '.slidey',
    translateX: 250,
    easing: [.91,-0.54,.29,1.56]
  });
  },
  offset: '50%'
});

var specificUnitValue = anime({
  targets: '#specificUnitValue .el',
  translateX: '20em',
  rotate: '1.5turn'
});

var animeFade = $('.animeFade');
animeFade.waypoint({
  handler: function(direction) {
    var customFade = anime({
      targets: '.animeFade',
      opacity: [0, 1],
      duration: 2000,
      easing: 'linear'
    });
  },
});


var animeMultiSlide = $('.anime-multiple-slide');
animeMultiSlide.waypoint({
  handler: function(direction) {
    var penner = anime.timeline();
    penner
      .add({
        targets: '.anime-multiple-slide .linear', translateX: [-2000, 0], offset: 0,
        easing: 'linear'
      })
      .add({
        targets: '.anime-multiple-slide .InQuad', translateX: [-2000, 0], offset: 0,
        easing: 'easeInQuad'
      })
      .add({
        targets: '.anime-multiple-slide .InCubic', translateX: [-2000, 0], offset: 0,
        easing: 'easeInCubic'
      })
      .add({
        targets: '.anime-multiple-slide .InQuart', translateX: [-2000, 0], offset: 0,
        easing: 'easeInQuart'
      })
      .add({
        targets: '.anime-multiple-slide .InQuint', translateX: [-2000, 0], offset: 0,
        easing: 'easeInQuint'
      })
      .add({
        targets: '.anime-multiple-slide .InSine', translateX: [-2000, 0], offset: 0,
        easing: 'easeInSine'
      }),
      this.destroy();
  },
  offset: '100%',
});

var animeDiverseSlide = $('.anime-diverse-slide');
animeDiverseSlide.waypoint({
  handler: function(direction) {
    var animeSlide = anime.timeline();
    animeSlide
      .add({
        targets: '.anime-diverse-slide .slide-left', translateX: [-1500, 0], offset: 0, duration: 1750,
        easing: 'easeInCubic',
      })
      .add({
        targets: '.anime-diverse-slide .slide-right', translateX: [1500, 0], offset: 0, duration: 1750,
        easing: 'easeInQuad'
      })
      .add({
        targets: '.anime-diverse-slide .slide-up-1', translateY: [-500, 0], offset: 450,
        easing: 'easeInQuad'
      })
      .add({
        targets: '.anime-diverse-slide .slide-up-2', translateY: [-500, 0], offset: 300,
        easing: 'easeInQuad'
      })
      .add({
        targets: '.anime-diverse-slide .slide-up-3', translateY: [-500, 0], offset: 150,
        easing: 'easeInQuad'
      })
  },
  offset: '100%'
});

var animeSlide = $('.anime-slide');
animeSlide.waypoint({
  handler: function(direction) {
    var animeImage = anime({
      targets: '.anime-slide',
      translateX: [1100, 0],
      opacity: [0,1],
      duration: 3000,
      offset: 0,
      ease: 'easeInCubic'
    })
  },
  offset: '100%'
});


$('h2').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

var animeTextAnimation = $('.letter-animation');
animeTextAnimation.waypoint({
  handler: function(direction) {
  anime.timeline({loop: false})
    .add({
      targets: 'h2 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 800,
      delay: function(el, i) {
        return 60 * (i+1)
      }
    }).add({
      targets: 'h2',
      opacity: 1,
      duration: 100,
      easing: "easeOutExpo",
      delay: 1000
    });
  }
});
