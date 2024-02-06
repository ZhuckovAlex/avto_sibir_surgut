//---------//
const creditSwiper = new Swiper('.credit__advantages__swiper', {
    grabCursor: true,
    /*--кол-во слайдов--*/
    slidesPerView: 3,
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    },
});
const bankSwiper = new Swiper('.credit__title-swiper', {
    grabCursor: true,
    /*--кол-во слайдов--*/
    slidesPerView: 6,
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 2.3,
        },
        450: {
            slidesPerView: 2.3,
        },
        700: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    },
});
