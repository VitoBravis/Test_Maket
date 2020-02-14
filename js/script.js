/*JQuery не использовать*/

let logo = document.getElementsByClassName("logo")[0];
let header = document.querySelector("header");

window.addEventListener("scroll", scrollHeader);
function scrollHeader() {
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset > windowHeight && !header.classList.contains("header--sticky")){
        header.classList.toggle("header--sticky");
        logo.src = "images/logo2.svg";
    } else if(window.pageYOffset <= windowHeight && header.classList.contains("header--sticky")){
        header.classList.toggle("header--sticky");
        logo.src = "images/logo1.svg";
    }

}