function onButtonClick() {
  var val = document.forms.form1.textBox1.value;
  var target = document.getElementById("output");

  if (val == "ワイン") {
    target.innerHTML = "正解です！<br>3秒後にページを移動します。";
    setTimeout(function () {
      window.location.href = 'back/main_back.html';
    }, 3 * 1000);
  } else {
    target.innerHTML = "間違っています。<br>再度お試しください。";
  }
}
