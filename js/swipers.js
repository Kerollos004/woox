    var swiperHome = new Swiper(".home-swiper", {
    spaceBetween: 30,
    effect: "fade",
        autoplay: {
            loop: true,
            delay:3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
//------------------------------------
var citySwiper = new Swiper(".cities-swiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    draggable:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
    "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
    },
    },
    autoplay: {
        loop: true,
        delay:3000,
    },
});
//--------------------------------------
var offerSwiper = new Swiper(".offers-swipers", {
    slidesPerView: 3,
    spaceBetween: 15,
    draggable:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
    "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
    },
    },
    autoplay: {
        loop: true,
        delay:3000,
    },
});