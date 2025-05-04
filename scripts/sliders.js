import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const productsSlider = new Swiper('.products .swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 600,
    loop: false,
    pagination: {
        el: '.products .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.products .prev',
        nextEl: '.products .next'
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
})