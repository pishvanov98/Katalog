var hash = window.location.hash.substring(1);
function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "spoonSingleTem",
          "id" : hash
      },
      spoonOut
  );
}

function init2() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "spoonSingleTem",
          "id" : hash
      },
      spoonOut2
  );
}

function init3() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "spoonSingleTem",
          "id" : hash
      },
      spoonOut3
  );
}

function init4() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "spoonSingleTem",
          "id" : hash
      },
      spoonOut4
  );
}

function init5() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "spoonSingleTem",
          "id" : hash
      },
      spoonOut5
  );
}

function init6() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "spoonSingleTem",
          "id" : hash
      },
      spoonOut6
  );
}



function spoonOut(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';

            out +=`<p class="name_spoon">${data.name}</p>`;
            out +=`<p class="registrnum">${data.registrnum}</p>`;

        $('.out-g').html(out);        
      }

}
function spoonOut2(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
            if(`${data.img1}` !='')
            {
                out +=`<img   src="img_content/${data.img1}" width="220px" height="365px" alt="">`;
            }
            else{
                document.getElementById("item1").className = "wow";
            }
        $('.img1-g').html(out);        
      }

}
function spoonOut3(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        if(`${data.img2}` !='')
        {
            out +=`<img  src="img_content/${data.img2}" width="220px" height="365px" alt="">`;
        }
        else{
            document.getElementById("item2").className = "wow";
        }
        $('.img2-g').html(out);        
      }

}
function spoonOut4(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        if(`${data.img3}` !='')
        {
            out +=`<img  src="img_content/${data.img3}" width="220px" height="365px" alt="">`;
        }
        else{
            document.getElementById("item3").className = "wow";
        }
        $('.img3-g').html(out);        
      }

}

function spoonOut5(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';

            out +=`<p class="prednaz">${data.prednaz}</p>`;
            out +=`<p class="razmer">${data.razmer}</p>`;
            out +=`<p class="ves">${data.ves}</p>`;
            out +=`<p class="material">${data.material}</p>`;
            out +=`<p class="strana">Страна: ${data.strana}</p>`;
            out +=`<p class="dopinfostrana">${data.dopinfostrana}</p>`;
            out +=`<p class="nadpis">${data.nadpis}</p>`;
            out +=`<p class="year">${data.year}</p>`;
            out +=`<div class="clear"><br></div>`;

        $('.out-g_2').html(out);        
      }

}

function spoonOut6(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';

            out +=`<p class="dopinfo">${data.dopinfo}</p>`;

        $('.out-g_3').html(out);        
      }

}

function loadback(){
    window.location.href = 'index.php';
}



$(document).ready(function () {
    init();
    init2();
    init3();
    init4();
    init5();
    init6();
    $('#back_2').on('click', loadback); 
});
