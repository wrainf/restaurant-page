import pageLoad from "./pageLoad";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

const content = document.querySelector('#content');

content.appendChild(pageLoad());
content.appendChild(loadMenu());