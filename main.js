$('.block-img-top').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  appendArrows: $('.your-class-arrow'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet1">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
  
});

  var $slider = $('.block-img-top');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' 一 ' + slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}

  

