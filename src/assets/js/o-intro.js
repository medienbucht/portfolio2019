import Typed from 'typed.js';
import attachClassOnScroll from './scrollAnim'
//Typing effect
const options = {
    strings: ['Websites', 'Apps', 'Webshops', 'Blogs', 'eBooks', 'Templates', 'Themes'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2500,
        loop: true
    }

const typed = new Typed("#typedjs", options);

attachClassOnScroll('.a-heading_projects', 'anim');