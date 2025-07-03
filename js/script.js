    IMask(
  document.getElementById('phone-mask'),
  {
    mask: '+{7}(000)000-00-00'
  }
)
var swiper = new Swiper(".intro-swiper", {
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
});
var swiper = new Swiper(".bottom-swiper", {
    navigation: {
        nextEl: ".next-btn-bottom",
        prevEl: ".prev-btn-bottom",
    },
    pagination: {
        el: ".swiper-pagination-bottom",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
});
var swiper = new Swiper(".end-mini-swipers", {
      slidesPerView: 2.4,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination-end",
        clickable: true,
      },
    });
    // Initialize all swipers with responsive breakpoints
document.addEventListener('DOMContentLoaded', function() {
  // 1. Main Hero Swiper
  new Swiper('.hero-swiper', {
    // Common settings
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // 1024px and up
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.hero-pagination',
          clickable: true,
          type: 'bullets',
        },
        navigation: {
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        },
      },
      // 768px - 1023px
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.hero-pagination',
          clickable: true,
          type: 'bullets',
        },
      },
      // 375px - 767px
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.hero-pagination',
          clickable: true,
          type: 'bullets',
          dynamicBullets: true,
        },
      }
    }
  });

  // 2. Products Swiper (3-4 items)
  new Swiper('.products-swiper', {
    // Common settings
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
      // 1024px and up
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
        navigation: {
          nextEl: '.products-next',
          prevEl: '.products-prev',
        },
        scrollbar: {
          el: '.products-scrollbar',
          draggable: true,
        },
      },
      // 768px - 1023px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.products-pagination',
          clickable: true,
        },
      },
      // 375px - 767px
      375: {
        slidesPerView: 1.8,
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
          el: '.products-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      }
    }
  });

  // 3. Testimonials Swiper
  new Swiper('.testimonials-swiper', {
    // Common settings
    effect: 'coverflow',
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
      // 1024px and up
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        },
      },
      // 768px - 1023px
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
        coverflowEffect: {
          rotate: 0,
          stretch: -50,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        },
      },
      // 375px - 767px
      375: {
        slidesPerView: 1,
        spaceBetween: 15,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.testimonials-pagination',
          clickable: true,
        },
      }
    }
  });
});