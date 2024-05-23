/****** page-mainContent-subTextBox ******/
$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
  $(e.target).next('p').slideToggle().parent().siblings().find('p').slideUp();
});

/****** section - page-main-productContainer ******/

const mq = matchMedia('(max-width: 430px)');

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  loop:true,
  parallax: true, // 시간차 움직임
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
