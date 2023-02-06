window.onload = function () {
    loadSliders();
}

function loadSliders() {

  let slides = window.visualViewport.width > 800 ? 4 : 2;

  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: slides,
      freeMode: true,
      watchSlidesProgress: true,
  });

  var swiperInnerGallery = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
  });

  window.addEventListener('resize', event => {
      if(window.visualViewport.width < 800) {
          swiper.params.slidesPerView = 2;
      } else {
          swiper.params.slidesPerView = 4;
      }
  });
}