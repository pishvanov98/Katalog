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
        <div class="menu_feedback">
                    <span id="back_2">Назад</span>
                </div>
    </header>
   
        <div class="block_main">
            <h2>Гостевая книга</h2>
            
            <form method="post" class="block_pocht" action="shout.php">
            <div class="obert_shout">
                <div class="mess_get"> Имя: <input type="text" id="name" name="name" /> </div>
                <div class="mess_get"> Сообщение: <textarea type="text" id="message" class="message "></textarea></div>
                <div class="mess_get"><input type="submit" id="submit" value="Отправить" /> </div>
            </div>
            </form>
            
            <div id="shout">
            </div>
        </div>
    

  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/feedback.js"></script>
</body>
</html>