"use strict"

ready(() => {
    const menuButton = document.getElementsByClassName('min-menu')[0];
    const menu = document.getElementsByClassName('min-menu-wrapper')[0];
    const closeButton = document.getElementsByClassName('close-menu')[0];
    menuButton.onclick = () => {
        menu.classList.toggle('menu-collapsed');
    }
    closeButton.onclick = () => {
        menu.classList.toggle('menu-collapsed');
    }

    const moreButton = document.getElementsByClassName('more-search')[0];
    const moreBlock = document.getElementsByClassName('block-addon')[0];
    const arrowOpen = document.getElementsByClassName('arrow-down')[1];
    moreButton.onclick = () => {
        moreBlock.classList.toggle('more-opened');
        arrowOpen.classList.toggle('arrow-opened');
    }
});