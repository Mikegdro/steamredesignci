const menuBtn = document.querySelector('.menuButton');
let menuOpn = false;
let menu = document.querySelector('.hiddenMenu');

window.addEventListener("scroll", (event) => {
    if(menuOpn) {
        if(document.querySelector('.reescaladoPortrait').scrollHeight <= visualViewport.height) {
            menuOpn = false;
            menuBtn.classList.toggle('open');
            menu.style.maxWidth = null;
        }
        
    }
});

menuBtn.addEventListener('click', () => {
    if(!menuOpn) {
        menuBtn.classList.toggle('open');
        menu.style.maxWidth = window.innerWidth + 'px';
        menu.style.top = this.scrollY + 'px';

        setTimeout( () => {
            for(let el of menu.children) {
                el.style.opacity = '1';
            };
        }, 800);
        
        menuOpn = true;
    } else {
        menuBtn.classList.toggle('open');

        setTimeout( () => {
            for(let el of menu.children) {
                el.style.opacity = '0';
            }
        }, 100)
        
        setTimeout( () => {
            menu.style.maxWidth = null;
            menuOpn = false;
        }, 500);

        
    }
    
});

//Función que inicializa el programa de el efecto al hacer scroll
scrollAnimation();

//Función que inicializa el programa de el efecto hover
hoverEffect();


function hoverEffect() {
    for ( const card of document.querySelectorAll(".hover") ) {
        card.onmousemove = e => handleOnMouseMove(e);
    }

    const handleOnMouseMove = e => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
}

function scrollAnimation() {
    const animatedImages = document.querySelectorAll('.scrollAnimation');

    if( window.visualViewport.width > 1000 ) {
        const observer = new IntersectionObserver( entries => {
            entries.forEach( entry => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        
        animatedImages.forEach( el => { observer.observe(el) });
    } else {
        for(let image of animatedImages) {
            image.classList.add('show');
        }
    } 
    
    
}


