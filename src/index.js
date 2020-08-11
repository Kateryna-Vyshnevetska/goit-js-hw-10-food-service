import './styles.css';
import menu from './menu.json';
import liMenuTemplate from './template/li-menu.hbs';

const ulRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('.js-switch-input');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const item = liMenuTemplate(menu);
ulRef.insertAdjacentHTML('afterbegin',item);

switchRef.addEventListener('change', () => {
  let darkTheme = switchRef.checked ? true : false;
  if(darkTheme){
    localStorage.setItem('theme', darkTheme);
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  }else{
    localStorage.setItem('theme', darkTheme);
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
});

if(localStorage.getItem('theme') === 'true'){
  switchRef.setAttribute('checked', true);
  bodyRef.classList.add(Theme.DARK);
}
