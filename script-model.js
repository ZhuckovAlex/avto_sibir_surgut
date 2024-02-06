/*--------Аккордион---------*/
const titles = document.querySelectorAll('.modification__accordion-title');
const contents = document.querySelectorAll('.modification__accordion-content');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        contents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))
/*--------Аккордион equipment---------*/
const titles1 = document.querySelectorAll('.equipment__accordion-title');
const contents1 = document.querySelectorAll('.equipment__accordion-content');

titles1.forEach(item => item.addEventListener('click', () => {
    const activeContent1 = document.querySelector('#' + item.dataset.tab);

    if (activeContent1.classList.contains('active')) {
        activeContent1.classList.remove('active');
        item.classList.remove('active');
        activeContent1.style.maxHeight = 0;
    } else {
        contents1.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles1.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent1.classList.add('active');
        activeContent1.style.maxHeight = activeContent1.scrollHeight + 'px';
    }
}))
/*------Добавить фото--------*/
const modelGalleryMask = document.querySelector('.model__gallery-mask');
const modelGalleryButton = document.querySelector('.model__gallery-button')
const newFoto = Array.from(document.querySelectorAll('.model__gallery-photo_n'));
modelGalleryMask.addEventListener('click', () => {
    for(let item of newFoto){
        item.classList.add('active');

    }
    modelGalleryMask.classList.add('none');

});
modelGalleryButton.addEventListener('click', () => {
    for(let item of newFoto){
        item.classList.add('active');

    }
    modelGalleryButton.classList.add('none');

});