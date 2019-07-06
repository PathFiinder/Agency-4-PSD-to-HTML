const sloganButton = document.querySelector('.fa-bars');
const header= document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');

sloganButton.addEventListener('click', () => {
    header.classList.toggle('header--active');
    headerMenu.classList.toggle('header__menu--active');
   

})