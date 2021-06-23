function init() {
    $.post(
        "core.php",
        {
            "action" : "init"
        },
        showspoon
    );
}
function init_feedback() {
  $.post(
      "core.php",
      {
          "action" : "init_feedback"
      },
      showfeedback
  );
}

function initUserMess() {
  $.post(
      "core.php",
      {
          "action" : "initUserMess"
      },
      showUserMess
  );
}

function showspoon(data) {
    data = JSON.parse(data);

    var out='<select>';
    out +='<option data-id="0">Добавление нового экспоната</option>';
    for (var id in data) {
        out +=`<option data-id="${id}">Экспонат : ${data[id].name}</option>`;
    }
    out +='</select>';
    $('.out').html(out);
    $('.out select').on('change', selectspoon);

}

function showfeedback(data) {
  data = JSON.parse(data);

  var out_2='';
  for (var id in data) {

      out_2 +=`<textarea class="textbox" placeholder="Текст под изображением" id="gfeedback_2">${data[id].feedback_2}</textarea>`;
      out_2 +=`<textarea class="textbox" placeholder="Основной текст" id="gfeedback">${data[id].feedback}</textarea>`;

  }

  $('.out_2').html(out_2);
}



function selectspoon() {
  //Получаем тот товар который выбран
  var id = $('.out select option:selected').attr('data-id');
  $.post(
    "core.php",
    {
      "action" : "selectOnespoon",
      "gid" : id
    },
    function(data){

      data = JSON.parse(data);
        $('#gname').val(data.name);
        $('#gregistrnum').val(data.registrnum);
        $('#gfile').val(data.img1);
        $('#gfile2').val(data.img2);
        $('#gfile3').val(data.img3);
        $('#gmaterial_sort').val(data.material_sort);
        $('#gdopolnitelno_sort').val(data.dopolnitelno_sort);
        $('#goriginal_sort').val(data.original_sort);
        $('#gstarina_sort').val(data.starina_sort);
        $('#gfirma_sort').val(data.firma_sort);
        $('#gnoeat_sort').val(data.noeat_sort);
        $('#gprednaz').val(data.prednaz);
        $('#grazmer').val(data.razmer);
        $('#gves').val(data.ves);
        $('#gmaterial').val(data.material);
        $('#gstrana').val(data.strana);
        $('#gdopinfostrana').val(data.dopinfostrana);
        $('#gnadpis').val(data.nadpis);
        $('#gyear').val(data.year);
        $('#gdopinfo').val(data.dopinfo);
        $('#gid').val(data.id);
    }
  );
}

function saveToDb() {
  //обновление, передача данных на сервер
  var id = $('#gid').val();
  if (id!==""){
    $.post(
      "core.php",
      {
        "action" : "updatespoon",
        "id" : id,
        "gname" : $('#gname').val(),
        "gregistrnum" : $('#gregistrnum').val(),
        "gfile" : $('#gfile').val(),
        "gfile2" : $('#gfile2').val(),
        "gfile3" : $('#gfile3').val(),
        "gmaterial_sort" : $('#gmaterial_sort').val(),
        "gdopolnitelno_sort" : $('#gdopolnitelno_sort').val(),
        "goriginal_sort" : $('#goriginal_sort').val(),
        "gstarina_sort" : $('#gstarina_sort').val(),
        "gfirma_sort" : $('#gfirma_sort').val(),
        "gnoeat_sort" : $('#gnoeat_sort').val(),
        "gprednaz" : $('#gprednaz').val(),
        "grazmer" : $('#grazmer').val(),
        "gves" : $('#gves').val(),
        "gmaterial" : $('#gmaterial').val(),
        "gstrana" : $('#gstrana').val(),
        "gdopinfostrana" : $('#gdopinfostrana').val(),
        "gnadpis" : $('#gnadpis').val(),
        "gyear" : $('#gyear').val(),
        "gdopinfo" : $('#gdopinfo').val()
       
      },
      function(data){
          init();
          window.location.reload();
        }

    );
  }
  else {
    $.post(
      "core.php",
      {
        "action" : "newspoon",
        "id" : 0,
        "gname" : $('#gname').val(),
        "gregistrnum" : $('#gregistrnum').val(),
        "gfile" : $('#gfile').val(),
        "gfile2" : $('#gfile2').val(),
        "gfile3" : $('#gfile3').val(),
        "gmaterial_sort" : $('#gmaterial_sort').val(),
        "gdopolnitelno_sort" : $('#gdopolnitelno_sort').val(),
        "goriginal_sort" : $('#goriginal_sort').val(),
        "gstarina_sort" : $('#gstarina_sort').val(),
        "gfirma_sort" : $('#gfirma_sort').val(),
        "gnoeat_sort" : $('#gnoeat_sort').val(),
        "gprednaz" : $('#gprednaz').val(),
        "grazmer" : $('#grazmer').val(),
        "gves" : $('#gves').val(),
        "gmaterial" : $('#gmaterial').val(),
        "gstrana" : $('#gstrana').val(),
        "gdopinfostrana" : $('#gdopinfostrana').val(),
        "gnadpis" : $('#gnadpis').val(),
        "gyear" : $('#gyear').val(),
        "gdopinfo" : $('#gdopinfo').val()
      },
      function(data){
          init();
          window.location.reload();
        }
    );
  }
}

function saveToDbfeedback() {
  //обновление, передача данных на сервер
  var id = $('#gid').val();
    $.post(
      "core.php",
      {
        "action" : "updatefeed",

        "gfeedback" : $('#gfeedback').val(),
        "gfeedback_2" : $('#gfeedback_2').val()
      },
      function(data){
        init_feedback();
          window.location.reload();
        }

    );
  }

function delite() {
  //обновление, передача данных на сервер
  var id = $('#gid').val();
  if (id!==""){
    $.post(
      "core.php",
      {
        "action" : "delspoon",
        "id" : id
        
      },
      function(data){
       
          //setTimeout(function(){ location.reload() }, 500)
          init();
          window.location.reload();
          
        }
    );
  }
    
}

function showUserMess(data) {
  data = JSON.parse(data);
  console.log(data);
  var ou='<select>';
  ou +='<option data-id="0">Комментарий пользователей</option>';
  for (var id in data) {
    ou +=`<option data-id="${id}">${data[id].name}</option>`;
  }
  ou +='</select>';
  $('.ou').html(ou);
  $('.ou select').on('change', selectUserMess);

}

function selectUserMess() {
  //Получаем того пользователя который выбран
  var id = $('.ou select option:selected').attr('data-id');
  console.log(id);
  $.post(
    "core.php",
    {
      "action" : "selectOneUserMess",
      "gidUserMess" : id
    },
    function(data){

      data = JSON.parse(data);
        $('#MessUser').val(data.message);
        $('#gidUserMess').val(data.id);
    }
  );
}

function delitUserMess() {
  //обновление, передача данных на сервер
  var id = $('#gidUserMess').val();
  if (id!==""){
    $.post(
      "core.php",
      {
        "action" : "delUserMess",
        "id" : id,
        "MessUser" : $('#MessUser').val(),
      },
      function(data){

         initUserMess();
         document.getElementById("MessUser").value = "";
        }
    );
  }
}




function loadback(){
    window.location.href = 'index.php';
}

function exit(){
    window.location.href = 'exit.php';
}

$(document).ready(function () {
    init();
    init_feedback();
    initUserMess();
    $('.add-to-db').on('click', saveToDb);
    $('.add-to-db_feedback').on('click', saveToDbfeedback);
    $('.del-to-db').on('click', delite);
    $('#back').on('click', loadback); 
    $('#back3').on('click', exit); 
    $('.del-to-dbUserMess').on('click', delitUserMess);
});
