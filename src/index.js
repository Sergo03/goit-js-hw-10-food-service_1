import menu from "./menu.json"
import menuTemplate from './templates/menu.hbs'
const menuRef = document.querySelector('.js-menu');

document.body.innerHTML = menuTemplate(menu);



