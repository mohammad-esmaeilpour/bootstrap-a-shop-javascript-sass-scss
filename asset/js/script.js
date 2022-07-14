var swiper = new Swiper('.mySwiper', {
    spaceBetween: 5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3.4,
            spaceBetween: 10,
        },
    }
});



// plus numbers
var plus = '<button onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp()" class="plus"></button>';
var minus = '<button onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown()" ></button>';

$('.number-input input[type=number]').prepend(plus);
$( minus ).insertBefore( '.number-input input[type=number]' );
$( plus ).insertAfter( '.number-input input[type=number]' );