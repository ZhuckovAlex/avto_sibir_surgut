/*-----------swiper pick-up-a-car__slider----------*/
const mySwiper = new Swiper('.pick-up-a-car__slider',{
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
const itemsWrapper = Array.from(document.querySelectorAll('.pick-up-a-car__slider-slide'));
for(let item of itemsWrapper){
    item.addEventListener('click', () =>{
        for(let item of itemsWrapper){
            item.classList.remove('hidden');
        }
        item.classList.add('hidden');
    })
}
/*-------Модальное окно-------*/
const modal = document.querySelector(".pick-up-a-car__modal");
const trigger = document.querySelector(".pick-up-a-car__form-button2");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    document.querySelector('body').classList.toggle('_lock');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
/*--------main-top---------*/
const mainTopButtons = document.querySelector('.main-top__buttons');
const mainTopButton = Array.from(mainTopButtons.querySelectorAll('.main-top__button'));
const mainTopLeft = document.querySelector('.main-top__left');
const mainTopRight = document.querySelector('.main-top__right');
mainTopButtons.addEventListener('click', function(){
    mainTopLeft.classList.toggle('hidden');
    mainTopRight.classList.toggle('active');
    for(let item of mainTopButton){
        item.classList.toggle('active');
    }
})