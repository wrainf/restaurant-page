import pageLoad from "./pageLoad";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

const content = document.querySelector('#content');

content.appendChild(pageLoad());
content.appendChild(loadHome());

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

menu.addEventListener('click', () => {
    var box = document.querySelector(".content-box");
    content.removeChild(box);
    content.appendChild(loadMenu());
})
contact.addEventListener('click', () => {
    var box = document.querySelector(".content-box");
    content.removeChild(box);
    content.appendChild(loadContact());
})
home.addEventListener('click', () => {
    var box = document.querySelector(".content-box");
    content.removeChild(box);
    content.appendChild(loadHome());
})






