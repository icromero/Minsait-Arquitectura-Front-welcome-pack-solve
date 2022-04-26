/**
 * Module which implements scripts on the index
 * Affects its appereance and sets handles
 * @author Ivan C Romero
 * @since 05/04/2022
 */

import { APP } from "../../business/app.js";

APP.exec();
modalTrigger('welcome-modal', 'close-modal', 2);

/*Variables */
let home = document.getElementById('home');
let list = document.getElementById('list');
let detail = document.getElementById('detail');
let logo = document.getElementById('logo');
let openBtn = document.getElementById('openMenu');
let closeBtn = document.getElementById('closeMenu');
let facebookBtn = document.getElementById('facebook');
let instagramBtn = document.getElementById('instagram');
let whatsAppBtn = document.getElementById('whatsapp');
let searchInput = document.getElementById('search');

/*HANDLERS AND EVENTS */

openBtn.addEventListener('click', toggleMenu); //Open button SideMenu
closeBtn.addEventListener('click', toggleMenu); //Close button SideMenu
logo.addEventListener('click', () => { window.location.href = "index.html" });
facebookBtn.addEventListener('click', () => window.location.href = "https://es-es.facebook.com/");
instagramBtn.addEventListener('click', () => window.location.href = "https://www.instagram.com/?hl=es");
whatsAppBtn.addEventListener('click', () => window.location.href = "https://web.whatsapp.com/");
home.addEventListener('click', () => { window.location.reload() });
list.addEventListener('click', toggleContent);
detail.addEventListener('click', toggleContent);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        const val = e.value;
        document.getElementById('basicInfo').innerHTML = '';
        document.getElementById('specificInfo').innerHTML = '';
        APP.search(e.target.value);
    }
})


/*Functions */
window.load = function() { //display Modal pass 2 seconds
    modalTrigger('welcome-modal', 'close-modal', 2);
};

/**
 * Function Modal Trigger Display a Modal in the page content
 * @access public
 * @param {string} modalId 
 * @param {string} closeId 
 * @param {number} sec 
 */
function modalTrigger(modalId, closeId, sec) {
    const MODAL = document.getElementById(modalId);
    const CLOSER = document.getElementById(closeId);
    let seconds = sec * 1000; //Seconds
    /*TimeOut for the modal*/
    setTimeout(() => {
        MODAL.style.display = 'block';
    }, seconds);
    /*Set closer event*/
    CLOSER.onclick = () => MODAL.style.display = 'none';
    /*Set closer event outside the modal*/
    window.onclick = (eve) => {
        if (eve.target == MODAL) {
            MODAL.style.display = 'none';
        }
    };
}


/**
 * Defines display of SideMenu 
 * @access public
 */
function toggleMenu() {
    let menuElement = document.querySelector('.container-menu');
    menuElement.classList.toggle('visible');
}

/**Set different views layer */

/**
 * Defines display of SideMenu 
 * @access public
 */
function toggleContent() {
    document.getElementById('information').style.display = 'none';
    document.getElementById('specificInfo').style.display = 'none';
    document.getElementById('detailsContainer').style.display = 'none';
    let element = this.id;
    if (element == 'list') {
        document.getElementById('specificInfo').style.display = 'flex';
    } else if (element == 'detail') {
        document.getElementById('detailsContainer').style.display = 'flex';
    } else {
        document.getElementById('detailsContainer').style.display = 'flex';
    }

}