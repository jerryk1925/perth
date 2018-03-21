$(document).ready(function () {
    $("#menu").on("click", "div", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $('.header__top_nav').click(function () {
        $('.header__top_nav').toggleClass('clicked');
        $('.header__menu').css('display', 'flex');
        $('.header__top_nav').css('display', 'none');
    });
    $('.header__menu_close').click(function () {
        $('.header__menu_close').toggleClass('clicked');
        $('.header__menu').css('display', 'none');
        $('.header__top_nav').css('display', 'block');
    });
    $("#gotop").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});


