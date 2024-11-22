$(document).ready(function(){

  var productList = new Swiper(".product-list", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop : true,
  });

  AOS.init();

});