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



})