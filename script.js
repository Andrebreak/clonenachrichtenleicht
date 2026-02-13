



// event on display responsive menu
let menuResponsiv = document.getElementsByClassName("menuResponsiv");
let hamburgerIcon = document.getElementById("hamburgerIcon");
let closeIcon = document.getElementById("closeIcon");
hamburgerIcon.addEventListener("click",addClassToggle);

function addClassToggle(){
    menuResponsiv[0].classList.toggle("active");
}


// caroussel script from swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    grabCursor: 'true',
    loop: true,
    spaceBetween: 35,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '#nextBtn',
      prevEl: '#previousBtn',
    },

    // Responsive breakpoints   
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        639: {
            slidesPerView: 3
        },
        // 1024: {
        //     slidesPerView: 3
        // }
    }
  });
