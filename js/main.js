var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,

});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  slideToClickedSlide: true,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  thumbs: {
    swiper: swiper,
  },

  breackpoints: {
   992: {
     simulateTouch: false,
     touchRatio: 0,
   },
 },
});