

$(".nav__link").mouseover(function () {
    if ($(window).scrollTop() !== 0) {
        $(this).css("color", "#000000");
    }
});

$(".nav__link").mouseout(function () {
    $(this).css("color", "inherit");
});

$(window).scroll(function () {
    if ($(window).scrollTop() !== 0) {
        $(".header").css({"background": "#ffffff", "color": "#5C6266"});
        $(".header__logo>img").attr("src", "images/logo2.svg");
    } else {
        $(".header").css({"background": "#000000", "color": "#ffffff"});
        $(".header__logo>img").attr("src", "images/logo1.svg");
    }
});
