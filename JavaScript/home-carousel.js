$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            loop: true,
            items:1
        },
    }
})