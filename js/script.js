/*JQuery не использовать*/

const swiperNews = new Swiper('.swiper-container--news', {
    slidesPerView: 3,
    // freeMode: true,
    spaceBetween: 30,
    slidesOffsetBefore: document.documentElement.clientWidth * 0.156,
});

const swiperIndex = new Swiper('.swiper-container--index', {
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

let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let infoItem1 = document.getElementsByClassName("info__item--1");
let infoItem2 = document.getElementsByClassName("info__item--2");
let aboutInner = document.getElementsByClassName("about__inner");
let worksTitles = document.getElementsByClassName("works__title");
let mapItems = document.getElementsByClassName("map__item");
let newsInner = document.getElementsByClassName("news__inner");

window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
    let windowHeight = document.documentElement.clientHeight;
    if (window.pageYOffset > windowHeight && !header.classList.contains("header--sticky")){
        header.classList.toggle("header--sticky");
        logo.src = "images/logo2.svg";
    } else if(window.pageYOffset <= windowHeight && header.classList.contains("header--sticky")){
        header.classList.toggle("header--sticky");
        logo.src = "images/logo1.svg";
    }
    scrollAnimation(aboutInner, "_slide-right");
    scrollAnimation(worksTitles, "_slide-up");
    scrollAnimation(mapItems, "_fade-in");
    scrollAnimation(newsInner, "_slide-left");
    scrollAnimation(infoItem1, "_slide-right");
    scrollAnimation(infoItem2, "_slide-left");

    function scrollAnimation(itemList, anim) {
        for(let i=0; i<itemList.length; i++) {
            if (itemList[i].getBoundingClientRect().y <= windowHeight && !itemList[i].classList.contains(anim)) {
                itemList[i].classList.toggle(anim);
            }
        }
    }
}
