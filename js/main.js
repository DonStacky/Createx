$(function () {
    var mixer = mixitup('.direction__grid', {
        "animation": {
            enable: false
        }
    });

$('.direction__button').on('click', function () {
    $('.direction__button').removeClass('direction__button--active');
    $(this).addClass('direction__button--active')
})

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

})