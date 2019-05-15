const pr = document.querySelector('.o-privacy');
const bt = document.querySelector('#showPrivacy');
pr.style.display='none';
let privacyIsHidden=true;

bt.addEventListener('click', function(e){
    e.preventDefault();
    if(privacyIsHidden){
        pr.style.display='block';
        bt.innerHTML='Datenschutzhinweise ausblenden';
        privacyIsHidden=false;
    } else {
        pr.style.display='none';
        bt.innerHTML='Datenschutzhinweise ansehen';
        privacyIsHidden=true;
    }
});
