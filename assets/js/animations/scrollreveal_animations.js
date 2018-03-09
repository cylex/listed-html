// Scroll Reveal Animations. For this include the ScrollReveal library

window.sr = ScrollReveal({ reset: false });

// Rotate the element
var rotate = ".sr-rotate";
if($(rotate)[0]) {
  sr.reveal('.sr-rotate', {
    rotate: { x: 100, y: 100, z: 0 },
    duration: 1500
  });
}

// Fade in the element
var fadeIn = ".sr-fade-in"
if($(fadeIn)[0]) {
  sr.reveal('.sr-fade-in', {
    duration: 1000
  });
}

// Slide in right
var srSlideRight = ".sr-slide-right";
if($(srSlideRight)[0]) {
  sr.reveal(srSlideRight, {
    origin: 'right',
    duration: 1200,
    distance: '100%'
  });
}

// Slide in Left
var slideLeft = ".sr-slide-right";
if($(slideLeft)[0]) {
  sr.reveal(slideLeft, {
    origin: 'right',
    distance: '100%',
    scale: 0,
    ease: 'linear',
    duration: 1500,
  });
}
var slideLeft = ".sr-slide-left";
if($(slideLeft)[0]) {
  sr.reveal(slideLeft, {
    origin: 'left',
    distance: '100%',
    ease: 'linear',
    duration: 750,
  }, 50);
}

var fadeSlide = ".sr-fade-slide";
if ($(fadeSlide)[0]) {
  sr.reveal(fadeSlide, {
    origin: 'left',
    distance: '100%',
    duration: 1500,
  });
}

var slideBottom = ".sr-slide-bottom";
if($(slideBottom)[0]) {
  sr.reveal(slideBottom, {
    origin: 'bottom',
    duration: 1200,
    distance: '100%'
  });
}

var fadeUp = ".sr-fade-up";
if($(fadeUp)[0]) {
  sr.reveal(fadeUp, {
    origin: 'bottom',
    duration: 1200,
    distance: '100%'
  },
  50);
}

var fadeSlideLeft = ".sr-fade-slide-left";
if ($(fadeSlideLeft)[0]) {
  sr.reveal(fadeSlideLeft, {
    origin: 'left',
    distance: '100%',
    duration: 1500,
  });
}
