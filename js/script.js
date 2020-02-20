/*JQuery не использовать*/

var swiperNews = new Swiper('.swiper-container--news', {
    slidesPerView: 3,
    // freeMode: true,
    spaceBetween: 30,
    slidesOffsetBefore: document.documentElement.clientWidth * 0.156,
});

var swiperIndex = new Swiper('.swiper-container--index', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    clickable: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

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