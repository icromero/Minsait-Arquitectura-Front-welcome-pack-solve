let menuElement = document.querySelector('.navbar__menu');
let openedMenuElement = document.querySelector('.navbar__mobile-menu--isOpen');
let closedMenuElement = document.querySelector('.navbar__mobile-menu--isClose');

function toggleMenu() {
    menuElement.classList.toggle('menu--opened');
}

openedMenuElement.addEventListener('click', toggleMenu);
closedMenuElement.addEventListener('click', toggleMenu);