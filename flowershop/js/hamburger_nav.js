$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#h-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#h-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#h-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});