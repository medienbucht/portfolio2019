import './assets/js/o-intro';
import './assets/js/o-projects';
import './assets/js/o-privacy';
import './assets/styles/styles.scss';

import axios from 'axios';

const contactForm = document.querySelector("#contactform");

contactForm.addEventListener('submit', function (e){
    e.preventDefault();
    let formData = new FormData(contactForm);
    axios.post(contactForm.action,formData)
    .then(function(response){
        contactForm.innerHTML = '<h3 style="color: #84c1cf;" class="a-heading_third">Vielen Dank für Ihre Nachricht!</h3>';
        /*console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);*/
    })
})


