document.addEventListener('DOMContentLoaded', () => {
  const heroSlider = document.querySelector('.mySwiper');

  if (heroSlider && window.Swiper) {
    new Swiper(heroSlider, {
      loop: true,
      speed: 750,
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides: false,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        0: {
          speed: 650,
        },
        768: {
          speed: 750,
        },
        1200: {
          speed: 800,
        },
      },
    });
  }

  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.content');

  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active-content'));
        button.classList.add('active');

        if (tabContents[index]) {
          tabContents[index].classList.add('active-content');
        }
      });
    });
  }

  const accordionButtons = document.querySelectorAll('.accordion-btn');

  if (accordionButtons.length) {
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        document.querySelectorAll('.accordion-content').forEach(item => item.classList.remove('show'));
        document.querySelectorAll('.accordion-btn').forEach(btn => btn.classList.remove('active-accordion'));

        if (content) {
          content.classList.add('show');
        }

        button.classList.add('active-accordion');
      });
    });
  }
});