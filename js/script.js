

/*=== Swiper Index/Intro ===*/

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

/*=== Swiper News===*/

const swiperNews = new Swiper('.swiper-container--news', {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesOffsetBefore: -(document.documentElement.clientWidth * 0.156),
});

/*=== Scroll Events ===*/

let header = document.querySelector("header");
let logo = document.querySelector(".logo");
let infoItem1 = document.getElementsByClassName("info__item--1");
let infoItem2 = document.getElementsByClassName("info__item--2");
let aboutInner = document.getElementsByClassName("about__inner");
let works = document.getElementsByClassName("works__title");
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
    scrollAnimation(works, "_slide-left");
    scrollAnimation(newsInner, "_slide-left");
    scrollAnimation(infoItem1, "_slide-right");
    scrollAnimation(infoItem2, "_slide-left");
    // scrollAnimation(mapItems, "_fade-in");

    function scrollAnimation(itemList, anim) {
        for(let i=0; i<itemList.length; i++) {
            if (itemList[i].getBoundingClientRect().y <= windowHeight && !itemList[i].classList.contains(anim)) {
                itemList[i].classList.toggle(anim);
            }
        }
    }
}


/*=== Form Validity ===*/

let formName = document.querySelector(".form__name");
let formCompany = document.querySelector(".form__company");
let formEmail = document.querySelector(".form__email");
let formPhone = document.querySelector(".form__phone");
let formComment = document.querySelector(".form__comment");
let formSelect = document.querySelector(".form__business-segment");
let formCheckBox = document.querySelector(".form__checkbox");
let form = document.querySelector(".form__request");

formName.addEventListener("input", inputCheck);
formCompany.addEventListener("input", inputCheck);
formEmail.addEventListener("input", inputCheckEmail);
formPhone.addEventListener("input", inputCheckPhone);
formName.addEventListener("focusout", focusOutCheck);
formCompany.addEventListener("focusout", focusOutCheck);
formEmail.addEventListener("focusout", focusOutCheckEmail);
formPhone.addEventListener("focusout", focusOutCheckPhone);
formComment.addEventListener("focusout", focusOutCheckComment);
formSelect.addEventListener("focusout", focusOutCheckSelect)
formCheckBox.addEventListener("change", checkboxChange);


form.addEventListener("submit", formSubmit);



// let phoneReg = /^(\+[1-9][0-9]*(\([0-9]*\)|-[0-9]*-))?[0]?[1-9][0-9\- ]*$/;
let phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}$/;
let emailReg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;


function errorMessage(errEl, errText = "") {
    let input = errEl.parentElement.firstChild;
    errEl.innerHTML = errText;
    if(errText === ""){
        input.classList.remove("form__input--error");
        input.classList.add("form__input--valid");
    } else {
        input.classList.remove("form__input--valid");
        input.classList.add("form__input--error");
    }
}

function inputCheck() {
    if(this.validity.valid){
        errorMessage(this.parentElement.lastChild);
    }
}

function inputCheckEmail() {
    if(this.value.match(emailReg)){
        errorMessage(this.parentElement.lastChild);
    }
}

function inputCheckPhone() {
    if (this.value.match(phoneReg)) {
        errorMessage(this.parentElement.lastChild);
    }
}

function focusOutCheck() {
    if(!this.value.trim()) {
        errorMessage(this.parentElement.lastChild, "Это поле обязательно для заполнения");
    }
}
function focusOutCheckEmail() {
    if(!this.value.trim()) {
        errorMessage(this.parentElement.lastChild, "Это поле обязательно для заполнения");
    } else if (!this.value.match(emailReg)){
        errorMessage(this.parentElement.lastChild, "E-mail указан некорректно");
    }
}

function focusOutCheckPhone() {
    if(!this.value.trim()) {
        errorMessage(this.parentElement.lastChild, "Это поле обязательно для заполнения");
    } else if (!this.value.match(phoneReg)) {
        errorMessage(this.parentElement.lastChild, "Телефон указан некорректно");
    }
}

function focusOutCheckSelect() {
    if (this.value === "false"){
        errorMessage(this.parentElement.lastChild, "Это поле обязательно для заполнения");
    } else {
        errorMessage(this.parentElement.lastChild);
    }
}

function focusOutCheckComment() {
    if(!this.value.trim()) {
        this.classList.remove("form__input--valid");
    } else {
        this.classList.add("form__input--valid");
    }
}
function checkboxChange() {
    errorMessage(this.parentElement.lastChild);
}

function checkboxCheck() {
    if (!this.checked){
        errorMessage(this.parentElement.lastChild, "Необходимо подтверждение");
    }
}

function formSubmit(event) {
    focusOutCheck.apply(formName);
    focusOutCheck.apply(formCompany);
    focusOutCheckEmail.apply(formEmail);
    focusOutCheckPhone.apply(formPhone);
    focusOutCheckSelect.apply(formSelect);
    checkboxCheck.apply(formCheckBox);
    let errors = document.querySelectorAll(".form__input--error");
    if (errors) {
        event.preventDefault();
    }
}



