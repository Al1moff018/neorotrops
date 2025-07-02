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
// Initialize main swiper
var introSwiper = new Swiper(".intro-swiper", {
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
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});

// // Initialize bottom swiper
// var bottomSwiper = new Swiper(".bottom-swiper", {
//   navigation: {
//     nextEl: ".next-btn-bottom",
//     prevEl: ".prev-btn-bottom",
//   },
//   pagination: {
//     el: ".swiper-pagination-bottom",
//     clickable: true,
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 1.2,
//       spaceBetween: 20,
//     }
//   }
// });

// // Initialize mini swipers with responsive settings
// var miniSwipers = new Swiper(".end-mini-swipers", {
//   slidesPerView: 2.4,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination-end",
//     clickable: true,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     }
//   }
// });