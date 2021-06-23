<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "katalog";

function connect(){
    $conn = mysqli_connect("localhost", "root", "root", "katalog");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
  mysqli_set_charset($conn, "utf8");
    return $conn;
}

function init(){
    //вывожу список экспонатов
    $conn = connect();
    $sql = "SELECT id, name FROM spoon";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function init_feedback(){
    //вывожу  о себе
    $conn = connect();
    
    $sql = "SELECT id, feedback, feedback_2 FROM feedback";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}



function selectOnespoon(){
  $conn = connect();
  $id = $_POST['gid'];
  $sql = "SELECT * FROM spoon WHERE id='$id'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
      $row = mysqli_fetch_assoc($result);
      echo json_encode($row);
  } else {
      echo "0";
  }
  mysqli_close($conn);
}
 

function updatespoon(){
    $conn = connect();
      $id = $_POST['id'];
      $name = $_POST['gname'];
      $registrnum = $_POST['gregistrnum'];
      $img1 = $_POST['gfile'];
      $img2 = $_POST['gfile2'];
      $img3 = $_POST['gfile3'];
      $material_sort = $_POST['gmaterial_sort'];
      $dopolnitelno_sort = $_POST['gdopolnitelno_sort'];
      $original_sort = $_POST['goriginal_sort'];
      $starina_sort = $_POST['gstarina_sort'];
      $firma_sort = $_POST['gfirma_sort'];
      $noeat_sort = $_POST['gnoeat_sort'];
      $prednaz = $_POST['gprednaz'];
      $razmer = $_POST['grazmer'];
      $ves = $_POST['gves'];
      $material = $_POST['gmaterial'];
      $strana = $_POST['gstrana'];
      $dopinfostrana = $_POST['gdopinfostrana'];
      $nadpis = $_POST['gnadpis'];
      $year = $_POST['gyear'];
      $dopinfo = $_POST['gdopinfo'];

      $sql = "UPDATE spoon SET name = '$name', registrnum = '$registrnum', img1 = '$img1', img2 = '$img2', img3 = '$img3', prednaz = '$prednaz', razmer = '$razmer', ves = '$ves', material = '$material', strana = '$strana', dopinfostrana = '$dopinfostrana', nadpis = '$nadpis', year = '$year', dopinfo = '$dopinfo', material_sort = '$material_sort', dopolnitelno_sort = '$dopolnitelno_sort', original_sort = '$original_sort', starina_sort = '$starina_sort', firma_sort = '$firma_sort', noeat_sort = '$noeat_sort' WHERE id='$id'";

if (mysqli_query($conn, $sql)) {
    echo "1";
} else {
    echo "Error updating record: " . $conn->error;
}
    mysqli_close($conn);

}

function updatefeed(){
    $conn = connect();
      $feedback = $_POST['gfeedback'];
      $feedback_2 = $_POST['gfeedback_2'];

      $sql = "UPDATE feedback SET feedback = '$feedback', feedback_2 = '$feedback_2'";

if (mysqli_query($conn, $sql)) {
    echo "1";
} else {
    echo "Error updating record: " . $conn->error;
}
    mysqli_close($conn);

}



function newspoon(){
    $conn = connect();
    $name = $_POST['gname'];
    $registrnum = $_POST['gregistrnum'];
    $img1 = $_POST['gfile'];
    $img2 = $_POST['gfile2'];
    $img3 = $_POST['gfile3'];
    $material_sort = $_POST['gmaterial_sort'];
    $dopolnitelno_sort = $_POST['gdopolnitelno_sort'];
    $original_sort = $_POST['goriginal_sort'];
    $starina_sort = $_POST['gstarina_sort'];
    $firma_sort = $_POST['gfirma_sort'];
    $noeat_sort = $_POST['gnoeat_sort'];
    $prednaz = $_POST['gprednaz'];
    $razmer = $_POST['grazmer'];
    $ves = $_POST['gves'];
    $material = $_POST['gmaterial'];
    $strana = $_POST['gstrana'];
    $dopinfostrana = $_POST['gdopinfostrana'];
    $nadpis = $_POST['gnadpis'];
    $year = $_POST['gyear'];
    $dopinfo = $_POST['gdopinfo'];

      $sql = "INSERT INTO spoon(name, registrnum, img1, img2 , img3 , material_sort , dopolnitelno_sort , original_sort , starina_sort , firma_sort , noeat_sort , prednaz , razmer , ves , material , strana , dopinfostrana , nadpis , year , dopinfo)
        VALUES ('$name', '$registrnum', '$img1', '$img2' , '$img3' , '$material_sort' , '$dopolnitelno_sort' , '$original_sort' , '$starina_sort' , '$firma_sort' , '$noeat_sort' , '$prednaz' , '$razmer' , '$ves' , '$material' , '$strana' , '$dopinfostrana' , '$nadpis' , '$year' , '$dopinfo')";

  if (mysqli_query($conn, $sql)) {
    echo "1";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
    mysqli_close($conn);
  
}




function loadspoon(){
    if ($_COOKIE['strana'] != ''){
        loadstrana();
        
    }
    elseif ($_COOKIE['material'] != ''){
        loadmaterial();
        
    }
    elseif ($_COOKIE['kategory'] != ''){
        loadkategory();

    }
    elseif ($_COOKIE['original'] != ''){
        loadoriginal();

    }
    elseif ($_COOKIE['starina'] != ''){
        loadstarina();

    }
    elseif ($_COOKIE['firma'] != ''){
        loadfirma();

    }
    elseif ($_COOKIE['noeat'] != ''){
        loadnoeat();

    }
    else{

    $conn = connect();
    $sql = "SELECT * FROM spoon";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
    
}

function loadstrana(){
    $conn = connect();
    $name= $_COOKIE["strana"];
    $sql = "SELECT * FROM spoon WHERE strana='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadmaterial(){
    $conn = connect();
    $name= $_COOKIE["material"];
    $sql = "SELECT * FROM spoon WHERE material_sort='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadkategory(){
    $conn = connect();
    $name= $_COOKIE["kategory"];
    $sql = "SELECT * FROM spoon WHERE dopolnitelno_sort='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadoriginal(){
    $conn = connect();
    $name= $_COOKIE["original"];
    $sql = "SELECT * FROM spoon WHERE original_sort='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadstarina(){
    $conn = connect();
    $name= $_COOKIE["starina"];
    $sql = "SELECT * FROM spoon WHERE starina_sort='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadfirma(){
    $conn = connect();
    $name= $_COOKIE["firma"];
    $sql = "SELECT * FROM spoon WHERE firma_sort='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function loadnoeat(){
    $conn = connect();
    $name= $_COOKIE["noeat"];
    $sql = "SELECT * FROM spoon WHERE noeat_sort ='$name'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
  }

  function delspoon(){
      $conn = connect();
      $id = $_POST['id'];
        $sql = "DELETE FROM spoon WHERE id='$id'";

  if (mysqli_query($conn, $sql)) {
      echo "1";
  } else {
      echo "Error deleting record: " . $conn->error;
  }
      mysqli_close($conn);
  
  }

  function spoonSingleTem () {
    $id = $_POST['id'];
    $conn = connect();
    $sql = "SELECT * FROM spoon WHERE id='$id'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo "0";
    }
    mysqli_close($conn);
    }

    function feedsingle () {
        $id = 1;
        $conn = connect();
        $sql = "SELECT * FROM feedback WHERE id='$id'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row);
        } else {
            echo "0";
        }
        mysqli_close($conn);
        }

        function initUserMess(){
            //вывожу список пользователей
            $conn = connect();
            $sql = "SELECT id, name FROM shoutbox";
            $result = mysqli_query($conn, $sql);
        
            if (mysqli_num_rows($result) > 0) {
                $out = array();
                while($row = mysqli_fetch_assoc($result)) {
                    $out[$row["id"]] = $row;
                }
                echo json_encode($out);
            } else {
                echo "0";
            }
            mysqli_close($conn);
        }

        function selectOneUserMess(){
            $conn = connect();
            $id = $_POST['gidUserMess'];
            $sql = "SELECT * FROM shoutbox WHERE id='$id'";
            $result = mysqli_query($conn, $sql);
          
            if (mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                echo json_encode($row);
            } else {
                echo "0";
            }
            mysqli_close($conn);
          }
          function delUserMess(){
            $conn = connect();
            $id = $_POST['id'];
            $message = $_POST['MessUser'];
        
              $sql = "DELETE FROM shoutbox WHERE id='$id'";
        
        if (mysqli_query($conn, $sql)) {
            echo "1";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
            mysqli_close($conn);
        }
    
