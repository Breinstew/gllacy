var link = document.querySelector(".map .btn");
var popup = document.querySelector(".feedback-popup");
var close = document.querySelector(".close");
var login = popup.querySelector("[name=feedback-name]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
    up();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
});

/*функция возврата вверх*/
function up() {  
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
  if(top > 0) {  
    window.scrollBy(0,((top+100)/-10));  
    t = setTimeout('up()',20);  
  } else clearTimeout(t);  
  return false;  
  } 