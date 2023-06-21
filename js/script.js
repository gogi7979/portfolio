$(function(){
    //Header Scroll
    $(window).scroll(function(){
        if($(window).scrollTop() > 60) {
            $('#header').addClass('active')
        }
        else {
            $('#header').removeClass('active')
        }
    });
    
    //AOS
    $(window).on('scroll', function(){
        AOS.init({
            once: true,
            duration: 600
        });
    })
    
    //Section2 : Work Swiper and MouseEvent
    var swiper1 = new Swiper(".work__swiper", {
        slidesPerView: "auto",
        spaceBetween: 50,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
    
    //Section 3 : Practice Swiper and accordion
    var swiper2 = new Swiper(".practice__swiper", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    $('.practice__tit').click(function(){
        $('.practice__tit').removeClass('active')
        $(this).addClass('active')
    });
})

