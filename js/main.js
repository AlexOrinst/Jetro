$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
        arrows: false,
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
    });
});
