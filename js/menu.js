var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var navLogin = document.querySelector(".main-nav__user-login");
var navShow = document.querySelector(".modal-login");
var navClose = document.querySelector(".modal-login__close");
navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function(){
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  }
  else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
})

navLogin.addEventListener("click", function(){
    navShow.classList.add("modal-login--show");
})

navClose.addEventListener("click", function(){
    navShow.classList.remove("modal-login--show");
})
