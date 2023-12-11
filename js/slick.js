$(function() {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // $('.center').slick({
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   autoplay: true,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1023,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    // slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        // breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        // breakpoint: 600,
        breakpoint: 992,
        // breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        // breakpoint: 480,
        breakpoint: 768,
        // breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});




