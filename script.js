const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.content');
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active-content'));
    button.classList.add('active');
    tabContents[index].classList.add('active-content');
  });
});

const accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    document.querySelectorAll('.accordion-content').forEach(item => item.classList.remove('show'));
    document.querySelectorAll('.accordion-btn').forEach(btn => btn.classList.remove('active-accordion'));
    content.classList.add('show');
    button.classList.add('active-accordion');
  });
});