// Подпишемся на ресайз и продиспатчим его для запуска
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".choose__list").data('init-slider');
  // Если мобильный
  if(window.innerWidth < 768){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $('.choose__list').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          dots: true,
          arrows: true,
          autoplay: false,
          speed: 200,
          prevArrow: $('.choose__prev'),
          nextArrow: $('.choose__next')
      }).data({'init-slider': 1});
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $('.choose__list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize');

var slick = $('.winner__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: false,
    cssEase: 'cubic-bezier(0.600, -0.180, 0.735, 0.045)',
    speed: 500,
    prevArrow: $('.winner__prev'),
    nextArrow: $('.winner__next'),

    responsive: [
        {
            breakpoint: 9999,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                autoplay: false,
                cssEase: 'cubic-bezier(0.600, -0.180, 0.735, 0.045)',
                speed: 500,
                prevArrow: $('.winner__prev'),
                nextArrow: $('.winner__next')
            }
        },
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                autoplay: false,
                cssEase: 'cubic-bezier(0.600, -0.180, 0.735, 0.045)',
                speed: 500,
                prevArrow: $('.winner__prev'),
                nextArrow: $('.winner__next')
            }
        }
    ]
});
