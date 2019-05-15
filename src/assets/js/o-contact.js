import axios from 'axios';

const contactForm = document.querySelector("#contactform");

contactForm.addEventListener('submit', function (e){
    e.preventDefault();
    let formData = new FormData(contactForm);
    axios.post(contactForm.action,formData)
    .then(function(response){
        contactForm.innerHTML = '<h3 style="color: #84c1cf;" class="a-heading_third">Vielen Dank für Ihre Nachricht!</h3>';
    })
})