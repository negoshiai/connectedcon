document.addEventListener('DOMContentLoaded', function () {

    // --- 1. AOS (Animate on Scroll) Initialization ---
    // This adds the elegant fade-in effects as you scroll down the page.
    AOS.init({
        duration: 800,      // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
        once: true,         // Whether animation should happen only once
        offset: 100,        // Offset (in px) from the original trigger point
    });


    // --- 2. Mobile Navigation Toggle ---
    // This handles the hamburger menu functionality on smaller screens.
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle icon between bars and times (X) for better UX
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            hamburger.setAttribute('aria-label', 'Close navigation menu');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            hamburger.setAttribute('aria-label', 'Open navigation menu');
        }
    });
    
    // Close mobile nav when a link is clicked
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                 const icon = hamburger.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
        });
    });


    // --- 3. Swiper.js Initialization for Portfolio ---
    // This configures the project slider on the homepage.
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,                 // Enables continuous looping
        grabCursor: true,           // Changes cursor to a "grab" icon
        centeredSlides: true,       // Centers the active slide
        slidesPerView: 1,           // Default number of slides to show
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 2.5, // Shows a preview of the next slide
              spaceBetween: 40
            }
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Autoplay
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Autoplay won't stop on user interaction
        },
    });

});
