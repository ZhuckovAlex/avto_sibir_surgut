const iconMenu=document.querySelector('.header__menu-icon');
const menuBody=document.querySelector('.header__menu');
if(iconMenu){
    iconMenu.addEventListener("click",function(e){
        document.querySelector('body').classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
const iconMenuFooter=document.querySelector('.footer__menu-icon');
const footerMenuBody=document.querySelector('.footer__menu');
if(iconMenuFooter){
    iconMenuFooter.addEventListener("click",function(e){
        document.querySelector('body').classList.toggle('_lock');
        iconMenuFooter.classList.toggle('_active');
        footerMenuBody.classList.toggle('_active');
    });
}