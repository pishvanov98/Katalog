function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "loadspoon"
      },
      spoonOut
  );
}


function spoonOut(data) {
    // вывод на страницу
    data = JSON.parse(data);
    var out='';
    var sum = 0;
    for (var key in data) {

        out +=` <div class="slider_2">`;
            sum++;
                out +=`<a href="spoon.php#${key}"><img id="img1" src="img_content/${data[key].img1}" width="220px" height="365px" alt=""></a>`;
              
            
            out +=`<p id="name_href"><a href="spoon.php#${key}">${data[key].name}</a></p>`;
        out +=` </div>`;   
    }
    out +=`<p id="sum">Количество экспонатов: ` + sum + ` </p>`;
    $('#out_spoon').html(out);

}

function loadfeedback(){
    window.location.href = 'feedback.php';
}
function loadabout(){
    window.location.href = 'about.php';
}
var count;
var count_europ;
var count_azia;
var count_africa;
var count_america;
function loadcountries(){
    
    if(count == 1){
    document.getElementById("russia").style.display = "none";
    setTimeout(function(){
        document.getElementById("russia").style.opacity = "0";
    }, 100);
    document.getElementById("europ").style.display = "none";
    setTimeout(function(){
        document.getElementById("europ").style.opacity = "0";
    }, 100);
    document.getElementById("azia").style.display = "none";
    setTimeout(function(){
        document.getElementById("azia").style.opacity = "0";
    }, 100);
    document.getElementById("afrika").style.display = "none";
    setTimeout(function(){
        document.getElementById("afrika").style.opacity = "0";
    }, 100);
    document.getElementById("avstralia").style.display = "none";
    setTimeout(function(){
        document.getElementById("avstralia").style.opacity = "0";
    }, 100);
    document.getElementById("amerika").style.display = "none";
    setTimeout(function(){
        document.getElementById("amerika").style.opacity = "0";
    }, 100);
    document.getElementById("sssr").style.display = "none";
    setTimeout(function(){
        document.getElementById("sssr").style.opacity = "0";
    }, 100);
    document.getElementById("smal_azia").style.display = "none";
    document.getElementById("smal_africa").style.display = "none";
    document.getElementById("smal_america").style.display = "none";
    document.getElementById("smal_europ").style.display = "none";
    count_azia = 0;
    count_africa = 0;
    count_america = 0;
    count_europ = 0;
    count = 0;
    }
    else {
    document.getElementById("russia").style.display = "block";
    setTimeout(function(){
        document.getElementById("russia").style.opacity = "1";
    }, 100);
    document.getElementById("europ").style.display = "block";
    setTimeout(function(){
        document.getElementById("europ").style.opacity = "1";
    }, 200);
    document.getElementById("azia").style.display = "block";
    setTimeout(function(){
        document.getElementById("azia").style.opacity = "1";
    }, 250);
    document.getElementById("afrika").style.display = "block";
    setTimeout(function(){
        document.getElementById("afrika").style.opacity = "1";
    }, 200);
    document.getElementById("avstralia").style.display = "block";
    setTimeout(function(){
        document.getElementById("avstralia").style.opacity = "1";
    }, 250);
    document.getElementById("amerika").style.display = "block";
    setTimeout(function(){
        document.getElementById("amerika").style.opacity = "1";
    }, 250);
    document.getElementById("sssr").style.display = "block";
    setTimeout(function(){
        document.getElementById("sssr").style.opacity = "1";
    }, 250);
    count = 1;
    }
}
function loadcountr(){
    document.getElementById("smal_azia").style.display = "none";
    document.getElementById("smal_africa").style.display = "none";
    document.getElementById("smal_america").style.display = "none";
     count_azia = 0;
     count_africa = 0;
     count_america = 0;
    if(count_europ == 1){
        document.getElementById("smal_europ").style.display = "none";
        setTimeout(function(){
            document.getElementById("smal_europ").style.opacity = "0";
        }, 100);
       
        count_europ = 0;
        }
        else {
        document.getElementById("smal_europ").style.display = "flex";
        setTimeout(function(){
            document.getElementById("smal_europ").style.opacity = "1";
        }, 100);

        count_europ = 1;
        }
}

function loadcountrazia(){
    document.getElementById("smal_europ").style.display = "none";
    document.getElementById("smal_africa").style.display = "none";
    document.getElementById("smal_america").style.display = "none";
    count_europ = 0;
    count_africa = 0;
    count_america = 0;
    if(count_azia == 1){
        document.getElementById("smal_azia").style.display = "none";
        setTimeout(function(){
            document.getElementById("smal_azia").style.opacity = "0";
        }, 100);
       
        count_azia = 0;
        }
        else {
        document.getElementById("smal_azia").style.display = "flex";
        setTimeout(function(){
            document.getElementById("smal_azia").style.opacity = "1";
        }, 100);

        count_azia = 1;
        }
}

function loadcountrafrica(){
    document.getElementById("smal_europ").style.display = "none";
    document.getElementById("smal_azia").style.display = "none";
    document.getElementById("smal_america").style.display = "none";
    count_europ = 0;
    count_azia = 0;
    count_america = 0;
    if(count_africa == 1){
        document.getElementById("smal_africa").style.display = "none";
        setTimeout(function(){
            document.getElementById("smal_africa").style.opacity = "0";
        }, 100);
       
        count_africa = 0;
        }
        else {
        document.getElementById("smal_africa").style.display = "flex";
        setTimeout(function(){
            document.getElementById("smal_africa").style.opacity = "1";
        }, 100);

        count_africa = 1;
        }
}


function loadcountramerica(){
    document.getElementById("smal_europ").style.display = "none";
    document.getElementById("smal_azia").style.display = "none";
    document.getElementById("smal_africa").style.display = "none";
    count_europ = 0;
    count_azia = 0;
    count_africa = 0;
    if(count_america == 1){
        document.getElementById("smal_america").style.display = "none";
        setTimeout(function(){
            document.getElementById("smal_america").style.opacity = "0";
        }, 100);
       
        count_america = 0;
        }
        else {
        document.getElementById("smal_america").style.display = "flex";
        setTimeout(function(){
            document.getElementById("smal_america").style.opacity = "1";
        }, 100);

        count_america = 1;
        }
}
var derevo;
function loadlistderevo(){
    if(derevo == 1){
        document.getElementById("derevo_list").style.display = "none";
        setTimeout(function(){
            document.getElementById("derevo_list").style.opacity = "0";
        }, 100);
       
        derevo = 0;
        }
        else {
        document.getElementById("derevo_list").style.display = "block";
        setTimeout(function(){
            document.getElementById("derevo_list").style.opacity = "1";
        }, 100);

        derevo = 1;
        }
}
var material;
function loadlistmaterial(){
    if(material == 1){
        document.getElementById("show_material").style.display = "none";
        setTimeout(function(){
            document.getElementById("show_material").style.opacity = "0";
        }, 100);
       
        material = 0;
        }
        else {
        document.getElementById("show_material").style.display = "block";
        setTimeout(function(){
            document.getElementById("show_material").style.opacity = "1";
        }, 100);

        material = 1;
        }
}

var special;
function loadlistspecial(){
    if(special == 1){
        document.getElementById("show_dopoln").style.display = "none";
        setTimeout(function(){
            document.getElementById("show_dopoln").style.opacity = "0";
        }, 100);
       
        special = 0;
        }
        else {
        document.getElementById("show_dopoln").style.display = "block";
        setTimeout(function(){
            document.getElementById("show_dopoln").style.opacity = "1";
        }, 100);

        special = 1;
        }
}

var original;
function loadlistoriginal(){
    if(original == 1){
        document.getElementById("show_original").style.display = "none";
        setTimeout(function(){
            document.getElementById("show_original").style.opacity = "0";
        }, 100);
       
        original = 0;
        }
        else {
        document.getElementById("show_original").style.display = "block";
        setTimeout(function(){
            document.getElementById("show_original").style.opacity = "1";
        }, 100);

        original = 1;
        }
}

var star;
function loadliststar(){
    if(star == 1){
        document.getElementById("show_star").style.display = "none";
        setTimeout(function(){
            document.getElementById("show_star").style.opacity = "0";
        }, 100);
       
        star = 0;
        }
        else {
        document.getElementById("show_star").style.display = "block";
        setTimeout(function(){
            document.getElementById("show_star").style.opacity = "1";
        }, 100);

        star = 1;
        }
}

var firm;
function loadlistfirm(){
    if(firm == 1){
        document.getElementById("show_firm").style.display = "none";
        setTimeout(function(){
            document.getElementById("show_firm").style.opacity = "0";
        }, 100);
       
        firm = 0;
        }
        else {
        document.getElementById("show_firm").style.display = "block";
        setTimeout(function(){
            document.getElementById("show_firm").style.opacity = "1";
        }, 100);

        firm = 1;
        }
}

var eat;
function loadlisteat(){
    if(eat == 1){
        document.getElementById("show_eat").style.display = "none";
        setTimeout(function(){
            document.getElementById("show_eat").style.opacity = "0";
        }, 100);
       
        eat = 0;
        }
        else {
        document.getElementById("show_eat").style.display = "block";
        setTimeout(function(){
            document.getElementById("show_eat").style.opacity = "1";
        }, 100);

        eat = 1;
        }
}

var katalog;
function loadkatalog(){
    if(katalog == 1){
        document.getElementById("list_sort").style.display = "none";
        setTimeout(function(){
            document.getElementById("list_sort").style.opacity = "0";
        }, 100);
       
        katalog = 0;
        }
        else {
        document.getElementById("list_sort").style.display = "block";
        setTimeout(function(){
            document.getElementById("list_sort").style.opacity = "1";
        }, 100);

        katalog = 1;
        }
}

function russia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Россия";
    init();

}
function avstralia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Австралия";
    init();

}
function sssr(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "СССР";
    init();

}
function avstria(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Австрия";
    init();

}
function albania(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Албания";
    init();

}
function andorra(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Андорра";
    init();

}
function balarus(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Беларусь";
    init();

}
function bolgaria(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Болгария";
    init();

}
function bosnia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Босния";
    init();

}
function belgia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Бельгия";
    init();

}
function velicobritania(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Великобритания";
    init();

}
function vengria(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Венгрия";
    init();

}
function vatican(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Ватикан";
    init();

}
function germania(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Германия";
    init();

}
function grecia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Греция";
    init();

}
function dania(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Дания";
    init();

}
function irlandia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Ирландия";
    init();

}
function islandia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Исландия";
    init();

}
function ispania(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Испания";
    init();

}
function italia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Италия";
    init();

}
function latvia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Латвия";
    init();

}
function litva(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Литва";
    init();

}
function lihntenshtein(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Лихтенштейн";
    init();

}
function luksemburg(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Люксембург";
    init();

}
function malta(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Мальта";
    init();

}
function moldova(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Молдова";
    init();

}
function monaco(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Монако";
    init();

}
function makedonia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Македония";
    init();

}
function niderland(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Нидерланды";
    init();

}
function norvegia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Норвегия";
    init();

}
function polsha(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Польша";
    init();

}
function portugalia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Португалия";
    init();

}
function ruminia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Румыния";
    init();

}
function sanmarino(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Cан-Марино";
    init();

}
function serbia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Сербия";
    init();

}
function slovenia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Словения";
    init();

}
function slovakia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Словакия";
    init();

}
function ukraina(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Украина";
    init();

}
function francia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Франция";
    init();

}
function finland(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Финляндия";
    init();

}
function horvatia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Хорватия";
    init();

}
function chernogoria(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Черногория";
    init();

}
function chehia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Чехия";
    init();

}
function shveicaria(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Швейцария";
    init();

}
function shvecia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Швеция";
    init();

}
function estonia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Эстония";
    init();

}
function azer(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Азербайджан";
    init();

}
function armenia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Армения";
    init();

}
function bangladesh(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Бангладеш";
    init();

}
function brunei(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Бруней";
    init();

}
function butan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Бутан";
    init();

}
function vetnam(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Вьетнам";
    init();

}
function gruzia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Грузия";
    init();

}
function gonkong(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Гонконг";
    init();

}
function izrail(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Израиль";
    init();

}
function india(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Индия";
    init();

}
function iordania(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Иордания";
    init();

}
function irak(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Ирак";
    init();

}
function iran(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Иран";
    init();

}
function indonezia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Индонезия";
    init();

}
function kazahstan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Казахстан";
    init();

}
function kambodsha(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Камбоджа";
    init();

}
function kitai(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Китай";
    init();

}
function katar(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Катар";
    init();

}
function kipr(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Кипр";
    init();

}
function kirgistan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Кыргызстан";
    init();

}
function laos(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Лаос";
    init();

}
function livan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Ливан";
    init();

}
function makao(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Макао";
    init();

}
function malaizia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Малайзия";
    init();

}
function maldivi(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Мальдивы";
    init();

}
function mianma(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Мьянма";
    init();

}
function mongolia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Монголия";
    init();

}
function nepal(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Непал";
    init();

}
function oae(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "ОАЭ";
    init();

}
function pakistan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Пакистан";
    init();

}
function palestina(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Палестина";
    init();

}
function saudaravia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Саудовская Аравия";
    init();

}
function sevkorea(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Сев.Корея";
    init();

}
function singapur(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Сингапур";
    init();

}
function siria(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Сирия";
    init();

}
function tadshikistan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Таджикистан";
    init();

}
function tailand(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Таиланд";
    init();

}
function taivan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Тайвань";
    init();

}
function turcia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Турция";
    init();

}
function turcmenistan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Туркменистан";
    init();

}
function uzbekistan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Узбекистан";
    init();

}
function filipini(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Филиппины";
    init();

}
function shrilanka(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Шри-Ланка";
    init();

}
function ugkorea(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Юж.Корея";
    init();

}
function yapan(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Япония";
    init();

}
function gvineabisau(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Гвинея-Бисау";
    init();

}
function egipet(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Египет";
    init();

}
function tunis(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Тунис";
    init();

}
function argentina(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Аргентина";
    init();

}
function bolivia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Боливия";
    init();

}
function brazil(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Бразилия";
    init();

}
function bagamostrova(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Багамские острова";
    init();

}
function venesuela(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Венесуэла";
    init();

}
function gauana(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Гайана";
    init();

}
function kolumbia(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Колумбия";
    init();

}
function kuba(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Куба";
    init();

}
function kanada(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Канада";
    init();

}
function kostarika(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Коста-Рика";
    init();

}
function mexika(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Мексика";
    init();

}
function paragvai(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Парагвай";
    init();

}
function peru(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Перу";
    init();

}
function sha(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "CША";
    init();

}
function surinam(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Суринам";
    init();

}
function urugvai(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Уругвай";
    init();

}
function chili(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Чили";
    init();

}
function ekvador(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Эквадор";
    init();

}
function yamaika(){
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "strana="+ "Ямайка";
    init();

}
function rezba(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "резьба";
    init();

}
function rospis(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "роспись";
    init();

}
function plastmasa(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "пластмасса, силикон";
    init();

}
function metal(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "металл, ковка";
    init();

}
function keramika(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "керамика, стекло";
    init();

}
function pletenie(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "плетение, ткань";
    init();

}
function kost(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "кость, рог, камень";
    init();

}
function rakovina(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "material="+ "раковина, перламут";
    init();

}
function absent(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "абсент";
    init();

}
function banka(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "банка";
    init();

}
function barmen(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "бармен";
    init();

}
function garnir(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "гарнир";
    init();

}
function desert(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "десерт";
    init();

}
function durshlak(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "дуршлаг";
    init();

}
function zavarka(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "заварка";
    init();

}
function konditer(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "кондитер";
    init();

}
function kofe(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "кофе";
    init();

}
function lopatki(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "лопатки";
    init();

}
function spagetti(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "спагетти";
    init();

}
function mernie(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "мерные";
    init();

}
function more(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "море";
    init();

}
function moroshenoe(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "мороженное";
    init();

}
function ovoshi(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "овощи, фрукты";
    init();

}
function podloshka(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "подложка";
    init();

}
function polovnik(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "половник";
    init();

}
function sahar(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "сахар";
    init();

}
function sous(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "соус";
    init();

}
function specii(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "специи";
    init();

}
function turizm(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "туризм";
    init();

}
function etiket(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "этикет";
    init();

}
function yaico(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "kategory="+ "яйцо";
    init();

}
function neobichnie(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "original="+ "необычные";
    init();

}
function magnit(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "original="+ "магниты";
    init();

}
function kaddi(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "original="+ "кадди";
    init();

}
function detskie(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "original="+ "детские";
    init();

}
function istoria(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "starina="+ "история";
    init();

}
function sobitia(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "starina="+ "события";
    init();

}
function selmag(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "starina="+ "сельмаг";
    init();

}
function religia(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "starina="+ "религия";
    init();

}
function semia(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "starina="+ "семья";
    init();

}
function chai(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "firma="+ "чай";
    init();

}
function coffe(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "firma="+ "кофе";
    init();

}
function prochee(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    document.cookie = "firma="+ "прочее";
    init();

}
function krasota(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "красота";
    init();

}
function technicheskie(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "технические";
    init();

}
function prochie(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "прочие";
    init();

}
function sport(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "спорт";
    init();

}
function kosmos(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "космос";
    init();

}
function voina(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "война";
    init();

}
function obereg(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "оберег";
    init();

}
function muzika(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "музыка";
    init();

}
function kurevo(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "курево";
    init();

}
function medicina(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat="+ "медицина";
    init();

}
function all_exponat(){
    document.cookie = "strana=;max-age=-1";
    document.cookie = "material=;max-age=-1";
    document.cookie = "kategory=;max-age=-1";
    document.cookie = "original=;max-age=-1";
    document.cookie = "starina=;max-age=-1";
    document.cookie = "firma=;max-age=-1";
    document.cookie = "noeat=;max-age=-1";
    init();

}



$(document).ready(function () {
    init();
    $('#feedback').on('click', loadfeedback); 
    $('#about').on('click', loadabout); 
    $('#countries').on('click', loadcountries); 
    $('#europ').on('click', loadcountr); 
    $('#azia').on('click', loadcountrazia); 
    $('#afrika').on('click', loadcountrafrica); 
    $('#amerika').on('click', loadcountramerica); 
    $('#derevo').on('click', loadlistderevo); 
    $('#material').on('click', loadlistmaterial); 
    $('#dopoln').on('click', loadlistspecial); 
    $('#original').on('click', loadlistoriginal); 
    $('#star').on('click', loadliststar); 
    $('#firm').on('click', loadlistfirm); 
    $('#eat').on('click', loadlisteat); 
    $('#katalog').on('click', loadkatalog); 
    $('#russia').on('click', russia); 
    $('#avstralia').on('click', avstralia); 
    $('#sssr').on('click', sssr); 
    $('#avstria').on('click', avstria); 
    $('#albania').on('click', albania); 
    $('#andorra').on('click', andorra); 
    $('#balarus').on('click', balarus); 
    $('#bolgaria').on('click', bolgaria); 
    $('#bosnia').on('click', bosnia); 
    $('#belgia').on('click', belgia); 
    $('#velicobritania').on('click', velicobritania); 
    $('#vengria').on('click', vengria); 
    $('#vatican').on('click', vatican); 
    $('#germania').on('click', germania); 
    $('#grecia').on('click', grecia); 
    $('#dania').on('click', dania); 
    $('#irlandia').on('click', irlandia); 
    $('#islandia').on('click', islandia); 
    $('#ispania').on('click', ispania); 
    $('#italia').on('click', italia); 
    $('#latvia').on('click', latvia); 
    $('#litva').on('click', litva); 
    $('#lihntenshtein').on('click', lihntenshtein); 
    $('#luksemburg').on('click', luksemburg); 
    $('#malta').on('click', malta); 
    $('#moldova').on('click', moldova); 
    $('#monaco').on('click', monaco); 
    $('#makedonia').on('click', makedonia); 
    $('#niderland').on('click', niderland); 
    $('#norvegia').on('click', norvegia); 
    $('#polsha').on('click', polsha); 
    $('#portugalia').on('click', portugalia); 
    $('#ruminia').on('click', ruminia); 
    $('#sanmarino').on('click', sanmarino); 
    $('#serbia').on('click', serbia); 
    $('#slovenia').on('click', slovenia); 
    $('#slovakia').on('click', slovakia); 
    $('#ukraina').on('click', ukraina); 
    $('#francia').on('click', francia); 
    $('#finland').on('click', finland); 
    $('#horvatia').on('click', horvatia); 
    $('#chernogoria').on('click', chernogoria); 
    $('#chehia').on('click', chehia); 
    $('#shveicaria').on('click', shveicaria); 
    $('#shvecia').on('click', shvecia); 
    $('#estonia').on('click', estonia); 
    $('#azer').on('click', azer); 
    $('#armenia').on('click', armenia); 
    $('#bangladesh').on('click', bangladesh); 
    $('#brunei').on('click', brunei); 
    $('#butan').on('click', butan); 
    $('#vetnam').on('click', vetnam); 
    $('#gruzia').on('click', gruzia); 
    $('#gonkong').on('click', gonkong); 
    $('#izrail').on('click', izrail); 
    $('#india').on('click', india); 
    $('#iordania').on('click', iordania); 
    $('#irak').on('click', irak); 
    $('#iran').on('click', iran); 
    $('#indonezia').on('click', indonezia); 
    $('#kazahstan').on('click', kazahstan); 
    $('#kambodsha').on('click', kambodsha); 
    $('#kitai').on('click', kitai); 
    $('#katar').on('click', katar); 
    $('#kipr').on('click', kipr); 
    $('#kirgistan').on('click', kirgistan); 
    $('#laos').on('click', laos); 
    $('#livan').on('click', livan); 
    $('#makao').on('click', makao); 
    $('#malaizia').on('click', malaizia); 
    $('#maldivi').on('click', maldivi); 
    $('#mianma').on('click', mianma); 
    $('#mongolia').on('click', mongolia); 
    $('#nepal').on('click', nepal); 
    $('#oae').on('click', oae); 
    $('#pakistan').on('click', pakistan); 
    $('#palestina').on('click', palestina); 
    $('#saudaravia').on('click', saudaravia); 
    $('#sevkorea').on('click', sevkorea); 
    $('#singapur').on('click', singapur); 
    $('#siria').on('click', siria); 
    $('#tadshikistan').on('click', tadshikistan); 
    $('#tailand').on('click', tailand); 
    $('#taivan').on('click', taivan); 
    $('#turcia').on('click', turcia); 
    $('#turcmenistan').on('click', turcmenistan); 
    $('#uzbekistan').on('click', uzbekistan); 
    $('#filipini').on('click', filipini); 
    $('#shrilanka').on('click', shrilanka); 
    $('#ugkorea').on('click', ugkorea); 
    $('#yapan').on('click', yapan); 
    $('#gvineabisau').on('click', gvineabisau); 
    $('#egipet').on('click', egipet); 
    $('#tunis').on('click', tunis); 
    $('#argentina').on('click', argentina); 
    $('#bolivia').on('click', bolivia); 
    $('#brazil').on('click', brazil); 
    $('#bagamostrova').on('click', bagamostrova); 
    $('#venesuela').on('click', venesuela); 
    $('#gauana').on('click', gauana); 
    $('#kolumbia').on('click', kolumbia); 
    $('#kuba').on('click', kuba); 
    $('#kanada').on('click', kanada); 
    $('#kostarika').on('click', kostarika); 
    $('#mexika').on('click', mexika); 
    $('#paragvai').on('click', paragvai); 
    $('#peru').on('click', peru); 
    $('#sha').on('click', sha); 
    $('#surinam').on('click', surinam); 
    $('#urugvai').on('click', urugvai); 
    $('#chili').on('click', chili); 
    $('#ekvador').on('click', ekvador); 
    $('#yamaika').on('click', yamaika); 

    $('#rezba').on('click', rezba); 
    $('#rospis').on('click', rospis); 
    $('#plastmasa').on('click', plastmasa); 
    $('#metal').on('click', metal); 
    $('#keramika').on('click', keramika); 
    $('#pletenie').on('click', pletenie); 
    $('#kost').on('click', kost); 
    $('#rakovina').on('click', rakovina); 

    $('#absent').on('click', absent); 
    $('#banka').on('click', banka); 
    $('#barmen').on('click', barmen); 
    $('#garnir').on('click', garnir); 
    $('#desert').on('click', desert); 
    $('#durshlak').on('click', durshlak); 
    $('#zavarka').on('click', zavarka); 
    $('#konditer').on('click', konditer); 
    $('#kofe').on('click', kofe); 
    $('#lopatki').on('click', lopatki); 
    $('#spagetti').on('click', spagetti); 
    $('#mernie').on('click', mernie); 
    $('#more').on('click', more); 
    $('#moroshenoe').on('click', moroshenoe); 
    $('#ovoshi').on('click', ovoshi); 
    $('#podloshka').on('click', podloshka); 
    $('#polovnik').on('click', polovnik); 
    $('#sahar').on('click', sahar); 
    $('#sous').on('click', sous); 
    $('#specii').on('click', specii); 
    $('#turizm').on('click', turizm); 
    $('#etiket').on('click', etiket); 
    $('#yaico').on('click', yaico); 

    $('#neobichnie').on('click', neobichnie); 
    $('#magnit').on('click', magnit); 
    $('#kaddi').on('click', kaddi); 
    $('#detskie').on('click', detskie);

    $('#istoria').on('click', istoria); 
    $('#sobitia').on('click', sobitia); 
    $('#selmag').on('click', selmag); 
    $('#religia').on('click', religia); 
    $('#semia').on('click', semia); 

    $('#chai').on('click', chai); 
    $('#coffe').on('click', coffe); 
    $('#prochee').on('click', prochee); 

    $('#krasota').on('click', krasota); 
    $('#technicheskie').on('click', technicheskie); 
    $('#prochie').on('click', prochie); 
    $('#sport').on('click', sport); 
    $('#kosmos').on('click', kosmos); 
    $('#voina').on('click', voina); 
    $('#obereg').on('click', obereg); 
    $('#muzika').on('click', muzika); 
    $('#kurevo').on('click', kurevo); 
    $('#medicina').on('click', medicina); 

    $('#all_exponat').on('click', all_exponat); 

});
