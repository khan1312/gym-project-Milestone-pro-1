const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const overlay = document.querySelector(".overlay")

hamburger.addEventListener(
    "click",
    function(){
        overlay.classList.add("show-overlay")
        menu.classList.add("open-menu")
    }
)

overlay.addEventListener(
    "click",
    function(){
        overlay.classList.remove("show-overlay")
        menu.classList.remove("open-menu")
    }
)