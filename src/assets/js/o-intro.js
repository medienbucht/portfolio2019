window.onload = function () {
    const animatedString = document.querySelector('#typed');
    const strings = animatedString.dataset.strings.split(',');
    let counter = 0;
    
    document.addEventListener('stringChange', function (e) {
        event.detail.animationStart ? animatedString.classList.add('glitched') : animatedString.classList.remove('glitched')
    }, true);

    setInterval(function () {
        let currentString = strings[counter];
        let stringRandom = '';
        const possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
        counter < strings.length - 1 ? counter++ : counter = 0;

        function generateRandomTitle(i, logoRandom) {
            setTimeout(function () {
                if (i == 0) {
                    document.dispatchEvent(new CustomEvent("stringChange", {
                        detail: { animationStart: true }
                    }));
                }
                if (i == currentString.length - 1) {
                    document.dispatchEvent(new CustomEvent("stringChange", {
                        detail: { animationStart: false }
                    }));
                }
                animatedString.innerHTML = logoRandom;
                animatedString.dataset.text = logoRandom;
            }, i * 100);
        }

        for (var i = 0; i < currentString.length + 1; i++) {
            stringRandom = currentString.substr(0, i);
            for (var j = i; j < currentString.length; j++) {
                stringRandom += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            generateRandomTitle(i, stringRandom);
            stringRandom = '';
        }

    }, 2500);
}


