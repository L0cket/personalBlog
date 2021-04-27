'use strict'
function sliders(){
    const headSlider = new Swiper('.header_slider', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        simulateTouch: false,
        allowTouchMove: true,
        speed: 400,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    const sidebarSlider = new Swiper('.sidebar_slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        allowTouchMove: true,
        speed: 500,
      
        // Navigation arrows
        navigation: {
          nextEl: '.sidebar_nextBtn',
          prevEl: '.sidebar_prevBtn',
        },
    });

    const recomendSlider = new Swiper('.post_recomend_slider', {
        direction: 'horizontal',
        loop: true,
        simulateTouch: false,
        allowTouchMove: true,
        loopedSlides: 1,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        speed: 800,

        navigation: {
            nextEl: '.post_recomend_nextBtn',
            prevEl: '.post_recomend_prevBtn',
          },

        breakpoints: {
            1240: {
                slidesPerView: 3,
                loopedSlides: 3,
                slidesPerGroup: 3,
            },

            1024: {
                loopedSlides: 2,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },

            923: {
                loopedSlides: 1,
                slidesPerView: 1,
                slidesPerGroup: 1,
            },

            671: {
                slidesPerView: 2,
                loopedSlides: 2,
                slidesPerGroup: 2,
            },

            545: {
                spaceBetween: 30,
            },

            320: {
                spaceBetween: 15,
            },
        },
    });
}

function showMenu(){
    const burger = document.querySelector('.header_burger');
    const menu = document.querySelector('.burger_menu');

    burger.addEventListener('click', function(event){
        if(!menu.classList.contains('active')){
            menu.classList.add('active');
        } else{
            menu.classList.remove('active');
        }
    });
}

function scrolling(){
    let info = document.querySelector('#information');
    let blogPost = document.querySelector('#blog_posts');
    // ====== SCROLL ELEMENTS ========= //
    let postsContent = document.querySelectorAll('.post');
    let footer = document.querySelector('.footer');
    // ====== SCROLL ELEMENTS END ========= //
    
    function scrollTo(elem){
        window.scroll({
            left: 0,
            top: elem.offsetTop,
            behavior: 'smooth'
        })
    }

    blogPost.addEventListener('click', () => {
        scrollTo(postsContent[0]);
    });


    info.addEventListener('click', () => {
        scrollTo(footer);
    });
}

showMenu();
scrolling();
window.addEventListener('load', () => {
    sliders();
});