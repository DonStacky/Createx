$(function () {
/*----- Реализация фильтра -----*/
    var mixer = mixitup('.direction__grid', {
        "animation": {
            enable: false
        }
    });

$('.direction__button').on('click', function () {
    $('.direction__button').removeClass('direction__button--active');
    $(this).addClass('direction__button--active')
})

/*=============================================Team Slider=============================================*/
/*----- Реализация слайдера -----*/
$('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        draggable: false,
        waitForAnimate: false
      })

$('.team__arrow--prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
})

$('.team__arrow--next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
})

/*=============================================Testimonials Slider=============================================*/
/*----- Реализация слайдера -----*/
$('.testimonials__slider').slick({
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    waitForAnimate: false,
    dots: true
  })

$('.testimonials__arro--prev').on('click', function (e) {
e.preventDefault()
$('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__arro--next').on('click', function (e) {
e.preventDefault()
$('.testimonials__slider').slick('slickNext')
})
/*=============================================Accordioun=============================================*/
/*----- Реализация аккордиона (можно открывать несколько вкладок) -----*/
/*$('.program__link--active').on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('program__link--active')
    $(this).children('.program__text').slideToggle()
})*/

/*----- Реализация аккордиона (всегда открыта только одна вкладка) -----*/
$('.program__link').on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('program__link--active')) {
        $(this).removeClass('program__link--active')
        $(this).children('.program__text').slideUp()
    } else {
        $('.program__link').removeClass('program__link--active')
        $('.program__text').slideUp()
        $(this).addClass('program__link--active')
        $(this).children('.program__text').slideDown()
    }
})
/*=============================================Burger=============================================*/
/*----- Изменение вида бургера (Проверка при событии скролл) -----*/
/*$(window).on('scroll', function(){
    if ($(window).scrollTop() > 300 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
})*/

/*----- Изменение вида бургера (Проверка с интервалом 0 сек, т.е. постоянно) -----*/
setInterval(() => {
    if ($(window).scrollTop() > 300 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0);



/*----- Действие бургера -----*/
$('.burger, .overlay').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--exit')
})
$('.header__nav-link').on('click', function(e) {
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--exit')
})
})

