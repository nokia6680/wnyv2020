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
