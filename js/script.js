var link = document.querySelector(".map .btn");
var popup = document.querySelector(".feedback-popup");
var close = document.querySelector(".close");
var login = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-content-show");
     if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }

    up();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem('login', login.value);
        localStorage.setItem('email', email.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
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