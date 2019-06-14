//Scroll Anim
export default function attachClassOnScroll(element, target, className) {
    document.addEventListener('DOMContentLoaded', () => {
        const elem = document.querySelector(element);
        const trg = document.querySelector(target);

        window.addEventListener('scroll', () => {
            if (isScrolledIntoView(elem)) {
                trg.classList.add(className);
                elem.dataset.scrolledBy = true;
            }
            else {
               // trg.classList.remove(className);
                //remove class name on scroll by
                //elem.classList.remove(className);
            }
        })
    })

}


function isScrolledIntoView(el) {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
}


