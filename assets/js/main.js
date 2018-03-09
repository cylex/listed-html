$(document).ready(function(){
  setTimeout(function(){
  $('.logo-slider').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    });
  });
  setTimeout(function(){
  $('.logo-and-content-slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
  });
  setTimeout(function(){
  $('.image-gallery-with-overlap').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
           arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
    });
  });
  setTimeout(function(){
  $('.testimonials-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    });
  });

  var st = setTimeout(function(){
    $('.simple-gallery-slider').slick({
      arrows: true,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            initialSlide: 1,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  if ($(".group1").length != 0) {
    $(".group1").colorbox({
      rel:'group1',
      previous: '',
      next: '',
      close: '',
      maxWidth:'95%',
      maxHeight:'95%'
    });
  }




});



