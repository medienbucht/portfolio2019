//Scroll Anim
export default function attachClassOnScroll(element, target, className) {
    const elem = document.querySelector(element);
    const trg= document.querySelector(target);

    window.addEventListener('scroll', function () {
        if (isScrolledIntoView(elem)) {
            trg.classList.add(className);
            console.log('scrolled by')
        }
        else {
            //remove class name on scroll by
            //elem.classList.remove(className);
        }
    })
}


function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    return isVisible;
}


