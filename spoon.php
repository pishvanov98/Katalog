<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width" />
  <title>Katalog</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
        <div class="menu_feedback">
                    <span id="back_2">Назад</span>
                </div>
    </header>

    <div class="spoon_info">
      <div class="out-g"></div>
        <div class="slider">
          <div class="item" id="item1">
           <div class="img1-g"></div>
          </div>

          <div class="item" id="item2">
            <div class="img2-g"></div>
          </div>

          <div class="item" id="item3">
           <div class="img3-g"></div>
          </div>

          <a class="prev" onclick="minusSlide()">&#10094;</a>
          <a class="next" onclick="plusSlide()">&#10095;</a>
        </div>
        <div class="out-g_2"></div>
        <div class="out-g_3"></div>

    </div>

    <script>
    /* Индекс слайда по умолчанию */
    var slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция слайдера */
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    </script>

  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/spoon.js"></script>
</body>
</html>
