let menuElement = document.querySelector('.nav-menu');
let openedMenuElement = document.querySelector('.mobile-open-menu');
let closedMenuElement = document.querySelector('.mobile-close-menu');

function toggleMenu() {
    menuElement.classList.toggle('open-menu');
}

openedMenuElement.addEventListener('click', toggleMenu);
closedMenuElement.addEventListener('click', toggleMenu);