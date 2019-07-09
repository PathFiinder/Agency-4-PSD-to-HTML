const sloganButton = document.querySelector('.fa-bars');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');

sloganButton.addEventListener('click', () => {
    header.classList.toggle('header--active');
    headerMenu.classList.toggle('header__menu--active');
})

//Team

const teamArray = document.querySelectorAll('.team__slider__item');
const leftArrow = document.querySelector('.team__slider__arrow--left');
const rightArrow = document.querySelector('.team__slider__arrow--right');

let index = 0;

rightArrow.addEventListener('click', () => {
    index++
    if (index == 3) {
        index = 0;
    }
    [...teamArray].forEach(element => element.classList.remove('team__slider__item--active'));
    document.querySelector(`[data-id="${index}"]`).classList.add('team__slider__item--active');
});

leftArrow.addEventListener('click', () => {
    index--
    if (index == -1) {
        index = 2;
    }
    [...teamArray].forEach(element => element.classList.remove('team__slider__item--active'));
    document.querySelector(`[data-id="${index}"]`).classList.add('team__slider__item--active');
})





//Clients
const clientsMiniatures = document.querySelectorAll('.miniature-images__photo');
const clientsArray = document.querySelectorAll('.clients__single-item');

[...clientsMiniatures].forEach((element) => {
    element.addEventListener('click', (event) => {
        [...clientsMiniatures].forEach(element => element.classList.remove('miniature-images__photo--active'))
        element.classList.add('miniature-images__photo--active');
        [...clientsArray].forEach(element => element.style.display = "none")
        document.querySelector(`[data-id = "${event.target.dataset.idm}"]`).style.display = "block";
    })

})