document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider', {
      loop: true,
    autoplay: true,
    interval: 5000,
    swipe: true,
    });
  });