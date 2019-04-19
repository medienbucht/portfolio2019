import './assets/styles/styles.scss';
import Typed from 'typed.js';

const config = {
    
}
const options = {
strings: ['Websites', 'Apps', 'Webshops', 'Blogs', 'eBooks', 'Templates', 'Themes'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2500,
    loop: true
}

const typed = new Typed("#typedjs", options);

console.log('this is the webpack entry point');