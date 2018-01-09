var navMain = document.querySelector(".main-nav__list");
var navToggle = document.querySelector(".main-nav__toggle");
var navBurger1 = document.querySelector(".main-nav__toggle--burger1");
var navBurger2 = document.querySelector(".main-nav__toggle--burger2");
var navBurger3 = document.querySelector(".main-nav__toggle--burger3");

navToggle.addEventListener("click", function(){
  if (navMain.classList.contains("main-nav__list--closed")) {
    navMain.classList.remove("main-nav__list--closed");
    navMain.classList.add("main-nav__list--opened");
    navBurger1.classList.add("main-nav__toggle--pressed1");
    navBurger2.classList.add("main-nav__toggle--pressed2");
    navBurger3.classList.add("main-nav__toggle--pressed3");
  }
  else {
    navMain.classList.add("main-nav__list--closed");
    navMain.classList.add("main-nav__list--closing");
    navMain.classList.remove("main-nav__list--opened");
    navBurger1.classList.remove("main-nav__toggle--pressed1");
    navBurger2.classList.remove("main-nav__toggle--pressed2");
    navBurger3.classList.remove("main-nav__toggle--pressed3");
  }
})
