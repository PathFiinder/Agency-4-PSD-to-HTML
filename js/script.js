const sloganButton = document.querySelector('.fa-bars');
const header= document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');

sloganButton.addEventListener('click', () => {
    header.classList.toggle('header--active');
    headerMenu.classList.toggle('header__menu--active');
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