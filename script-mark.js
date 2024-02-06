/*-----------swiper pick-up-a-car__slider----------*/
const mySwiper = new Swiper('.mark-pick-up-a-car__slider',{
    grabCursor: true,
    /*--кол-во слайдов--*/
    slidesPerView: 9,
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    breakpoints:{
        300:{
            slidesPerView: 2.5,
        },
        360:{
            slidesPerView: 2.5,
        },
        450:{
            slidesPerView: 3,
        },
        540:{
            slidesPerView: 4,
        },
        630:{
            slidesPerView: 5,
        },
        750:{
            slidesPerView: 6,
        },
        770:{
            slidesPerView: 7,
        },
        850:{
            slidesPerView: 8,
        },
        1000:{
            slidesPerView: 9,
        }
    },
});
/*------В слайдере-------*/
const itemsWrapper = Array.from(document.querySelectorAll('.mark-pick-up-a-car__slider-slide'));
for(let item of itemsWrapper){
    item.addEventListener('click', () =>{
        for(let item of itemsWrapper){
            item.classList.remove('hidden');
        }
        item.classList.add('hidden');
    })
}
