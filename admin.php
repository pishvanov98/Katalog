<?php
if ($_SESSION ['auth'] !="")
{
  header("Location: administrator.php"); /* Перенаправление броузера */
}

?>
<?php
$host = 'localhost'; // адрес сервера
$database = 'katalog'; // имя базы данных
$user = 'root'; // имя пользователя
$password = 'root'; // пароль

$link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    $select= mysqli_query ($link, "SELECT log, passw FROM authu");
    $row = mysqli_fetch_row ($select);

// выполняем операции с базой данных

// закрываем подключение
mysqli_close($link);
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

          <div class="authentication">
          <form method="post">
          <input name="log" placeholder="Укажите Логин" autocomplete="off" class="passlog"  type="text" /><br/>
          <input name="passw" placeholder="Укажите пароль" class="passlog" type="password" /><br/>
          <input type="submit" class="form-button" name="button" style="cursor:pointer" />
          </form>
        </div>
              </div>

        <!--<div  class="flexf">-->
              <br>
          

          <h2>
            <?php
            if ($_POST['button'])
            {

              
              $log = $_POST['log'];
              $passw = $_POST['passw'];
              $passw = sha1($passw);
//в SHA1 хеширую введенный пароль пользователем если одинаково то пропускаю
              if (($log === $row[0]) and ($passw === $row[1]))
              {
                $_SESSION['auth'] = $log;
                header('Location: administrator.php');
              }
              else
              {
                echo "<script>alert(\"Вы ввели не верный логин или пароль.\");</script>";
              }

            }
            ?>
        </h2>





  <script src="js/jquery-3.2.1.min.js"></script>
</body>
</html>