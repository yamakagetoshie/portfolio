function slideAnime() {
  //====右に動くアニメーションここから===
  $('.rightAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      // 右から左へ表示するクラスを付与
      // テキスト要素を挟む親要素（右側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeRightLeft ");
      // 要素を右枠外にへ移動しCSS アニメーションで右から元の位置に移動
      $(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");
      // 子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    } else {
      // 右から左へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeRightLeft ");
      $(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  slideAnime();/* アニメーション用の関数を呼ぶ*/
});
