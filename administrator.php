<?php
if (!$_SESSION ['auth'])
{
  header("Location: ../index.php"); /* Перенаправление броузера */
}

?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katalog</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katalog</title>
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <header>
        <div class="menu_feedback_adm">
                    <span id="back">Главное меню</span>
                    <p class="menu_none_name" id="name_adm">Пользователь: <?php echo $_SESSION['auth'] ?>   <span id="back3">Выход</span></p>
                </div>
               
    </header>

    <div class="email-field">
        <div class="out"></div>
        <textarea  placeholder="Наименование" class="textbox" id="gname"></textarea><!--name --> 
        <textarea  placeholder="Регистрационный номер" class="textbox" id="gregistrnum"></textarea><!-- registrnum -->
        <h3>Фотографии</h3> 
        <textarea  placeholder="Название фотографии №1" spellcheck="false" class="textbox" id="gfile"></textarea><!--name --> 
        <textarea  placeholder="Название фотографии №2" spellcheck="false" class="textbox" id="gfile2"></textarea><!--name --> 
        <textarea  placeholder="Название фотографии №3" spellcheck="false" class="textbox" id="gfile3"></textarea><!--name --> 
        <h3>Сортировать</h3> 
        <div id="sort_kategory_block">
              <div class="sort">
              <p>Материал</p>
              <select id="gmaterial_sort" name="sort_a" class="form-control">
                  <option id="gmaterial_sort" value=""selected>Нет</option>
                  <option id="gmaterial_sort" value="резьба">дерево - резьба</option>
                  <option id="gmaterial_sort" value="роспись">дерево - роспись</option>
                  <option id="gmaterial_sort" value="пластмасса, силикон">пластмасса, силикон</option>
                  <option id="gmaterial_sort" value="металл, ковка">металл, ковка</option>
                  <option id="gmaterial_sort" value="керамика, стекло">керамика, стекло</option>
                  <option id="gmaterial_sort" value="плетение, ткань">плетение, ткань</option>
                  <option id="gmaterial_sort" value="кость, рог, камень">кость, рог, камень</option>
                  <option id="gmaterial_sort" value="раковина, перламут">раковина, перламут</option>
                </select >
              </div>
              <div class="sort">
              <p>Категория</p>
              <select id="gdopolnitelno_sort" name="sort_a2" class="form-control">
                  <option id="gdopolnitelno_sort" value=""selected>Нет</option>
                  <option id="gdopolnitelno_sort" value="абсент">абсент</option>
                  <option id="gdopolnitelno_sort" value="банка">банка</option>
                  <option id="gdopolnitelno_sort" value="бармен">бармен</option>
                  <option id="gdopolnitelno_sort" value="гарнир">гарнир</option>
                  <option id="gdopolnitelno_sort" value="десерт">десерт</option>
                  <option id="gdopolnitelno_sort" value="дуршлаг">дуршлаг</option>
                  <option id="gdopolnitelno_sort" value="заварка">заварка</option>
                  <option id="gdopolnitelno_sort" value="кондитер">кондитер</option>
                  <option id="gdopolnitelno_sort" value="кофе">кофе</option>
                  <option id="gdopolnitelno_sort" value="лопатки">лопатки</option>
                  <option id="gdopolnitelno_sort" value="спагетти">спагетти</option>
                  <option id="gdopolnitelno_sort" value="мерные">мерные</option>
                  <option id="gdopolnitelno_sort" value="море">море</option>
                  <option id="gdopolnitelno_sort" value="мороженное">мороженное</option>
                  <option id="gdopolnitelno_sort" value="овощи, фрукты">овощи, фрукты</option>
                  <option id="gdopolnitelno_sort" value="подложка">подложка</option>
                  <option id="gdopolnitelno_sort" value="половник">половник</option>
                  <option id="gdopolnitelno_sort" value="сахар">сахар</option>
                  <option id="gdopolnitelno_sort" value="соус">соус</option>
                  <option id="gdopolnitelno_sort" value="специи">специи</option>
                  <option id="gdopolnitelno_sort" value="туризм">туризм</option>
                  <option id="gdopolnitelno_sort" value="этикет">этикет</option>
                  <option id="gdopolnitelno_sort" value="яйцо">яйцо</option>
                </select >
              </div>
              <div class="sort">
              <p>Оригинальные</p>
              <select id="goriginal_sort" name="sort_a3" class="form-control">
                  <option id="goriginal_sort" value=""selected>Нет</option>
                  <option id="goriginal_sort" value="необычные">необычные</option>
                  <option id="goriginal_sort" value="магниты">магниты</option>
                  <option id="goriginal_sort" value="кадди">кадди</option>
                  <option id="goriginal_sort" value="детские">детские</option>
                </select >
              </div>
              <div class="sort">
              <p>Старина</p>
              <select id="gstarina_sort" name="sort_a4" class="form-control">
                  <option id="gstarina_sort" value=""selected>Нет</option>
                  <option id="gstarina_sort" value="история">история</option>
                  <option id="gstarina_sort" value="события">события</option>
                  <option id="gstarina_sort" value="сельмаг">сельмаг</option>
                  <option id="gstarina_sort" value="религия">религия</option>
                  <option id="gstarina_sort" value="семья">семья</option>
                </select >
              </div>
              <div class="sort">
              <p>Фирма</p>
              <select id="gfirma_sort" name="sort_a5" class="form-control">
                  <option id="gfirma_sort" value=""selected>Нет</option>
                  <option id="gfirma_sort" value="чай">чай</option>
                  <option id="gfirma_sort" value="кофе">кофе</option>
                  <option id="gfirma_sort" value="прочее">прочее</option>
                </select >
              </div>
              <div class="sort">
              <p>Не для еды</p>
              <select id="gnoeat_sort" name="sort_a6" class="form-control">
                  <option id="gnoeat_sort" value=""selected>Нет</option>
                  <option id="gnoeat_sort" value="красота">красота</option>
                  <option id="gnoeat_sort" value="технические">технические</option>
                  <option id="gnoeat_sort" value="прочие">прочие</option>
                  <option id="gnoeat_sort" value="спорт">спорт</option>
                  <option id="gnoeat_sort" value="космос">космос</option>
                  <option id="gnoeat_sort" value="война">война</option>
                  <option id="gnoeat_sort" value="оберег">оберег</option>
                  <option id="gnoeat_sort" value="музыка">музыка</option>
                  <option id="gnoeat_sort" value="курево">курево</option>
                  <option id="gnoeat_sort" value="медицина">медицина</option>
                </select >
              </div>
              <div class="sort">
              <p>Страна</p>
              <select id="gstrana" name="sort_a7" class="form-control">
                  <option id="gstrana" value=""selected>Нет</option>
                  <option id="gstrana" value="Австралия">Австралия</option>
                  <option id="gstrana" value="Армения">Армения</option>
                  <option id="gstrana" value="Азербайджан">Азербайджан</option>
                  <option id="gstrana" value="Австрия">Австрия</option>
                  <option id="gstrana" value="Албания">Албания</option>
                  <option id="gstrana" value="Андорра">Андорра</option>
                  <option id="gstrana" value="Аргентина">Аргентина</option>
                  <option id="gstrana" value="Беларусь">Беларусь</option>
                  <option id="gstrana" value="Болгария">Болгария</option>
                  <option id="gstrana" value="Бангладеш">Бангладеш</option>
                  <option id="gstrana" value="Бруней">Бруней</option>
                  <option id="gstrana" value="Бутан">Бутан</option>
                  <option id="gstrana" value="Босния">Босния</option>
                  <option id="gstrana" value="Бельгия">Бельгия</option>
                  <option id="gstrana" value="Боливия">Боливия</option>
                  <option id="gstrana" value="Бразилия">Бразилия</option>
                  <option id="gstrana" value="Багамские острова">Багамские острова</option>
                  <option id="gstrana" value="Великобритания">Великобритания</option>
                  <option id="gstrana" value="Венгрия">Венгрия</option>
                  <option id="gstrana" value="Ватикан">Ватикан</option>
                  <option id="gstrana" value="Вьетнам">Вьетнам</option>
                  <option id="gstrana" value="Венесуэла">Венесуэла</option>
                  <option id="gstrana" value="Германия">Германия</option>
                  <option id="gstrana" value="Греция">Греция</option>
                  <option id="gstrana" value="Грузия">Грузия</option>
                  <option id="gstrana" value="Гонконг">Гонконг</option>
                  <option id="gstrana" value="Гайана">Гайана</option>
                  <option id="gstrana" value="Гвинея-Бисау">Гвинея-Бисау</option>
                  <option id="gstrana" value="Дания">Дания</option>
                  <option id="gstrana" value="Египет">Египет</option>
                  <option id="gstrana" value="Ирландия">Ирландия</option>
                  <option id="gstrana" value="Исландия">Исландия</option>
                  <option id="gstrana" value="Испания">Испания</option>
                  <option id="gstrana" value="Италия">Италия</option>
                  <option id="gstrana" value="Израиль">Израиль</option>
                  <option id="gstrana" value="Индия">Индия</option>
                  <option id="gstrana" value="Иордания">Иордания</option>
                  <option id="gstrana" value="Ирак">Ирак</option>
                  <option id="gstrana" value="Иран">Иран</option>
                  <option id="gstrana" value="Индонезия">Индонезия</option>
                  <option id="gstrana" value="Казахстан">Казахстан</option>
                  <option id="gstrana" value="Камбоджа">Камбоджа</option>
                  <option id="gstrana" value="Китай">Китай</option>
                  <option id="gstrana" value="Катар">Катар</option>
                  <option id="gstrana" value="Кипр">Кипр</option>
                  <option id="gstrana" value="Кыргызстан">Кыргызстан</option>
                  <option id="gstrana" value="Колумбия">Колумбия</option>
                  <option id="gstrana" value="Куба">Куба</option>
                  <option id="gstrana" value="Канада">Канада</option>
                  <option id="gstrana" value="Коста-Рика">Коста-Рика</option>
                  <option id="gstrana" value="Латвия">Латвия</option>
                  <option id="gstrana" value="Литва">Литва</option>
                  <option id="gstrana" value="Лихтенштейн">Лихтенштейн</option>
                  <option id="gstrana" value="Люксембург">Люксембург</option>
                  <option id="gstrana" value="Лаос">Лаос</option>
                  <option id="gstrana" value="Ливан">Ливан</option>
                  <option id="gstrana" value="Мальта">Мальта</option>
                  <option id="gstrana" value="Молдова">Молдова</option>
                  <option id="gstrana" value="Монако">Монако</option>
                  <option id="gstrana" value="Македония">Македония</option>
                  <option id="gstrana" value="Макао">Макао</option>
                  <option id="gstrana" value="Малайзия">Малайзия</option>
                  <option id="gstrana" value="Мальдивы">Мальдивы</option>
                  <option id="gstrana" value="Мьянма">Мьянма</option>
                  <option id="gstrana" value="Монголия">Монголия</option>
                  <option id="gstrana" value="Мексика">Мексика</option>
                  <option id="gstrana" value="Нидерланды">Нидерланды</option>
                  <option id="gstrana" value="Норвегия">Норвегия</option>
                  <option id="gstrana" value="Непал">Непал</option>
                  <option id="gstrana" value="ОАЭ">ОАЭ</option>
                  <option id="gstrana" value="Польша">Польша</option>
                  <option id="gstrana" value="Португалия">Португалия</option>
                  <option id="gstrana" value="Пакистан">Пакистан</option>
                  <option id="gstrana" value="Палестина">Палестина</option>
                  <option id="gstrana" value="Парагвай">Парагвай</option>
                  <option id="gstrana" value="Перу">Перу</option>
                  <option id="gstrana" value="Россия">Россия</option>
                  <option id="gstrana" value="Румыния">Румыния</option>
                  <option id="gstrana" value="СССР">СССР</option>
                  <option id="gstrana" value="Cан-Марино">Cан-Марино</option>
                  <option id="gstrana" value="Сербия">Сербия</option>
                  <option id="gstrana" value="Словения">Словения</option>
                  <option id="gstrana" value="Словакия">Словакия</option>
                  <option id="gstrana" value="Саудовская Аравия">Саудовская Аравия</option>
                  <option id="gstrana" value="Сев.Корея">Сев.Корея</option>
                  <option id="gstrana" value="Сингапур">Сингапур</option>
                  <option id="gstrana" value="Сирия">Сирия</option>
                  <option id="gstrana" value="CША">CША</option>
                  <option id="gstrana" value="Суринам">Суринам</option>
                  <option id="gstrana" value="Таджикистан">Таджикистан</option>
                  <option id="gstrana" value="Таиланд">Таиланд</option>
                  <option id="gstrana" value="Тайвань">Тайвань</option>
                  <option id="gstrana" value="Тунис">Тунис</option>
                  <option id="gstrana" value="Турция">Турция</option>
                  <option id="gstrana" value="Туркменистан">Туркменистан</option>
                  <option id="gstrana" value="Украина">Украина</option>
                  <option id="gstrana" value="Узбекистан">Узбекистан</option>
                  <option id="gstrana" value="Уругвай">Уругвай</option>
                  <option id="gstrana" value="Франция">Франция</option>
                  <option id="gstrana" value="Финляндия">Финляндия</option>
                  <option id="gstrana" value="Филиппины">Филиппины</option>
                  <option id="gstrana" value="Хорватия">Хорватия</option>
                  <option id="gstrana" value="Черногория">Черногория</option>
                  <option id="gstrana" value="Чехия">Чехия</option>
                  <option id="gstrana" value="Чили">Чили</option>
                  <option id="gstrana" value="Швейцария">Швейцария</option>
                  <option id="gstrana" value="Швеция">Швеция</option>
                  <option id="gstrana" value="Шри-Ланка">Шри-Ланка</option>
                  <option id="gstrana" value="Эстония">Эстония</option>
                  <option id="gstrana" value="Эквадор">Эквадор</option>
                  <option id="gstrana" value="Юж.Корея">Юж.Корея</option>
                  <option id="gstrana" value="Ямайка">Ямайка</option>
                  <option id="gstrana" value="Япония">Япония</option>
                </select >
              </div>
            </div>
        <textarea  placeholder="Предназначение" class="textbox" id="gprednaz"></textarea><!--prednaz -->
        <textarea  placeholder="Размер" class="textbox" id="grazmer"></textarea><!--razmer --> 
        <textarea  placeholder="Вес" class="textbox" id="gves"></textarea><!--ves -->
        <textarea  placeholder="Материал" class="textbox" id="gmaterial"></textarea><!--material -->
        <textarea  placeholder="Доп. информация о стране" class="textbox" id="gdopinfostrana"></textarea><!--dopinfostrana --> 
        <textarea  placeholder="Надпись" class="textbox" id="gnadpis"></textarea><!--nadpis -->
        <textarea  placeholder="Год приобретения" class="textbox" id="gyear"></textarea><!--year  --> 
        <textarea  placeholder="Дополнительная информация" class="textbox" id="gdopinfo"></textarea><!--dopinfo  -->
        <input type="hidden" id="gid">
        <div id="button_admin">
          <button class="add-to-db"  style="cursor:pointer">ДОБАВИТЬ</button>
          <button id="delit" class="del-to-db" style="cursor:pointer">УДАЛИТЬ</button>
        </div>
      </div>

      <div class="email-field">
      <h3>О себе</h3> 
      <div class="out_2"></div>
        <div id="button_admin">
          <button class="add-to-db_feedback"  style="cursor:pointer">ИЗМЕНИТЬ</button>

        </div>
      </div>

      <div class="email-field">
      <h3>Гостевая книга</h3> 
        <div class="ou"></div>
        <textarea type="text" placeholder="Комментарий пользователя!" class="message" id="MessUser"></textarea>
        <input type="hidden" id="gidUserMess">
        <button id="delit" class="del-to-dbUserMess">Удалить комментарий</button>
      </div>






    <?php 
      if(isset($_POST['upload'])) {
        
        $uploaddir = 'img_content/';
        // это папка, в которую будет загружаться картинка
        if(basename($_FILES['file']['name']) !='')
        {
            $name = $upload_dir.basename($_FILES['file']['name']);
            $apend=$name; 
            setcookie("img1", $apend);
            // это имя, которое будет присвоенно изображению 
            $uploadfile = "$uploaddir$apend"; 
            //в переменную $uploadfile будет входить папка и имя изображения
        
            // Указываем максимальный вес загружаемого файла. Сейчас до 5 байт
            move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
            //Здесь идет процесс загрузки изображения 
            $size = getimagesize($uploadfile); 
                echo "Файл загружен. Путь к файлу:" .$uploadfile ; 
        }
        else{}
        if(basename($_FILES['file2']['name']) !='')
        {
            $name = $upload_dir.basename($_FILES['file2']['name']);
            $apend=$name; 
            setcookie("img2", $apend);
            // это имя, которое будет присвоенно изображению 
            $uploadfile = "$uploaddir$apend"; 
            //в переменную $uploadfile будет входить папка и имя изображения
        
            // Указываем максимальный вес загружаемого файла. Сейчас до 5 байт
            move_uploaded_file($_FILES['file2']['tmp_name'], $uploadfile);
            //Здесь идет процесс загрузки изображения 
            $size = getimagesize($uploadfile); 
                echo "Файл загружен. Путь к файлу:" .$uploadfile ; 
        }
        else{}
        if(basename($_FILES['file3']['name']) !='')
        {
            $name = $upload_dir.basename($_FILES['file3']['name']);
            $apend=$name; 
            setcookie("img3", $apend);
            // это имя, которое будет присвоенно изображению 
            $uploadfile = "$uploaddir$apend"; 
            //в переменную $uploadfile будет входить папка и имя изображения
        
            // Указываем максимальный вес загружаемого файла. Сейчас до 5 байт
            move_uploaded_file($_FILES['file3']['tmp_name'], $uploadfile);
            //Здесь идет процесс загрузки изображения 
            $size = getimagesize($uploadfile); 
                echo "Файл загружен. Путь к файлу:" .$uploadfile ; 
        }
        else{}
      }
      else{}
    ?>

<script>
var tx = document.getElementsByTagName('textarea');//РАСТЯГИВАЕМ_textarea

for (var i = 0; i < tx.length; i++) {

tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');

tx[i].addEventListener("input", OnInput, false);

}

function OnInput() {

this.style.height = 'auto';

this.style.height = (this.scrollHeight) + 'px';//////console.log(this.scrollHeight);

}

</script>
    

  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/administrator.js"></script>
</body>
</html>