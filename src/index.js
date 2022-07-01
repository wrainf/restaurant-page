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

home.classList.add('selected');

menu.addEventListener('click', () => {
    var box = document.querySelector(".content-box");
    content.removeChild(box);
    content.appendChild(loadMenu());
    menu.classList.add('selected');
    home.classList.remove('selected');
    contact.classList.remove('selected');
    
})
contact.addEventListener('click', () => {
    var box = document.querySelector(".content-box");
    content.removeChild(box);
    content.appendChild(loadContact());
    contact.classList.add('selected');
    menu.classList.remove('selected');
    home.classList.remove('selected');
})
home.addEventListener('click', () => {
    var box = document.querySelector(".content-box");
    content.removeChild(box);
    content.appendChild(loadHome());
    home.classList.add('selected');
    menu.classList.remove('selected');
    contact.classList.remove('selected');
})






