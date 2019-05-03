import './assets/js/o-intro';
import './assets/styles/styles.scss';
import axios from 'axios';

const contactForm = document.querySelector("#contactform");

contactForm.addEventListener('submit', function (e){
    e.preventDefault();
    let formData = new FormData(contactForm);
    alert(formData);
    axios.post(contactForm.action,formData)
    .then(function(response){
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    })
}
)
