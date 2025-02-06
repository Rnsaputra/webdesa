document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        grabcursor: true,
        effect: "coverflow",
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadow: true
        },
        autoplay: {
            delay: 5000,
        },        
        slidesPerView: 2, // 1 card terlihat di layar kecil
        spaceBetween: 20, // Jarak antar card
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            }, // 2 card terlihat di layar >= 640px
            1024: {
                slidesPerView: 4,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadow: true
                }
            } // 3 card terlihat di layar >= 1024px
        },


    });
    new Swiper(".mySwiper2", {
        grabcursor: true,
        effect: "coverflow",
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadow: true
        },
        autoplay: {
            delay: 4500,
        },        
        slidesPerView: 2, // 1 card terlihat di layar kecil
        spaceBetween: 20, // Jarak antar card
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            }, // 2 card terlihat di layar >= 640px
            1024: {
                slidesPerView: 4,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadow: true
                }
            } // 3 card terlihat di layar >= 1024px
        },


    });
});