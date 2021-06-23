function init() {
    //вычитуем файл goods.json
  //  $.getJSON("goods.json", goodsOut);
  $.post(
      "core.php",
      {
          "action" : "feedsingle"
      },
      feed
  );
}

function feed(data) {
    // вывод на страницу
    if (data!=0) {
        data = JSON.parse(data);
        var out='';
        out +=`<p class="about_feed">${data.feedback}</p>`;
        out +=`<div class="feedback_2_block"><img   src="img/image_about.jpg" width="300px" height="300px" alt=""><p class="about_feed2" >${data.feedback_2}</p></div>`;


        $('.feed-out').html(out);        
      }

}

function loadback(){
    window.location.href = 'index.php';
}


$(document).ready(function () {
    init();
    $('#back_2').on('click', loadback); 
});
