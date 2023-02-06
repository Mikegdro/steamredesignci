
window.onload = function () {

    //Función que inicializa el programa de la nieve
    loadSnow();

    //Función que inicializa el slider interactivo
    loadSliders();

    //Función que inicializa el programa de el efecto de las letras
    typewriterEffect();

}

function loadSnow() {
    function newElement(tagName, className) {
        const element = document.createElement(tagName);
        element.className = className;
        
        return element;
    }

    function Snowflake() {
        this.HTMLElement = newElement('span', 'snowflake');
        this.HTMLElement.innerHTML = '❄️';
        this.getY = () => parseFloat(this.HTMLElement.style.top.split('%')[0]);
        this.setY = y => this.HTMLElement.style.top = `${y}%`;
        this.setX = () => {
            const randomPosition = (95 - 0) * Math.random();
            this.HTMLElement.style.left = `${randomPosition}%`;
        }
        this.setSize = () => {
            const randomSize = (1 - 0.5) * Math.random() + 0.5;
            this.HTMLElement.style.fontSize = `${randomSize}rem`;
        }
        
        this.setY(-10);
        this.setX();
        this.setSize();
    }

    function Snow() {
        this.HTMLElement = newElement('div', 'snow');
        this.snowflakes = [];
        
        this.addSnowflakes = () => {
            
            if (this.snowflakes.length <= 1000) {
                const snowflake = new Snowflake();
                this.snowflakes.push(snowflake);
                this.HTMLElement.appendChild(snowflake.HTMLElement);
            }
        }
    
        this.animation = () => {
            this.snowflakes.forEach(snowflake => {
                const y = snowflake.getY();
                const newY = y >= 100 ? -10 : y + 0.5;
                snowflake.setY(newY);
            });
        }
    
    }

    const body = document.querySelector('body');

    const snow = new Snow();
    body.appendChild(snow.HTMLElement);

    setInterval(() => {
        snow.addSnowflakes();
    }, 1000);
    
    setInterval(() => {
        snow.animation();
    }, 40);
}

function loadSliders() {
    
    let slides = 2;

    if (visualViewport.width < 900 ) {
        slides = 1;
    } else if (visualViewport.width > 1400) {
        slides = 4;
    }

    var swiper1 = new Swiper(".mySwiper", {
        spaceBetween: 15,
        slidesPerView: slides,
        centeredSlides: true,
        freeMode: false,
        autoplay: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });

    var swiper2 = new Swiper(".franquicias", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "1",
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        },
        pagination: {
        el: ".swiper-pagination",
        },
    });

    window.addEventListener('resize', event => {
        if(window.visualViewport.width < 900) {
            swiper1.params.slidesPerView = 1;
        } else if(window.visualViewport.width > 1400) {
            swiper1.params.slidesPerView = 4;
        } else {
            swiper1.params.slidesPerView = 2;
        }
    });
}

function typewriterEffect() {
    function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
        
        var i = 0;

        var timer = setInterval(function() {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // application
    var speed = 75;
    var h1 = document.querySelector('.titulo');
    var p = document.querySelector('.subtitulo');
    var delay = h1.innerHTML.length * speed + speed;

    // type affect to header
    typeEffect(h1, speed);

    // type affect to body
    setTimeout(function(){
        p.style.display = "inline-block";
        typeEffect(p, speed);
    }, delay);
}