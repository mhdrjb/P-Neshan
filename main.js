'use strict'

const fixedDiv = document.getElementById('footer-up-sec');

const body = document.getElementById('body-m');

// 2483

function scrollF() {
    let y = window.scrollY;
    if (y >= 2483) {
        fixedDiv.style = "position: static; margin-top:-60px;";
    } else {
        fixedDiv.style = "position: fixed;";
    }
};

// humburger menu

const menuPage = document.getElementsByTagName('div')[0];

const head = document.getElementsByTagName('header')[0];

function humburgerM() {
    menuPage.classList.toggle('mm-active');
    if (body.classList.contains('body-a')) {
        body.classList.remove('body-a')
    } else {
        body.classList.toggle('body-d');
        head.classList.toggle('head-d');
    };
    

};

function menuOff() {
    if (body.classList.contains('body-d')) {
        body.classList.remove('body-d')
    } else {
        body.classList.toggle('body-a');
    }
    menuPage.classList.remove('mm-active');
    head.classList.remove('head-d');
}