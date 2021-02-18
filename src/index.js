import menu from "./menu.json"
import menuTemplate from './templates/menu.hbs'
const menuRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body')
const markup = menuTemplate(menu);
const toggle = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

toggle.addEventListener('change',cklickToggle);

const savedTheme = localStorage.getItem('Theme')
if (savedTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    toggle.checked = true; 
}if(savedTheme === Theme.LIGHT){
    bodyRef.classList.add(Theme.LIGHT);
    toggle.checked = false; 
}

function cklickToggle() {
    if (toggle.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK); 
        localStorage.setItem('Theme',Theme.DARK)  
    } if (!toggle.checked) {
        bodyRef.classList.remove(Theme.DARK); 
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme',Theme.LIGHT)  
    }
}


menuRef.insertAdjacentHTML('beforeend', markup);




