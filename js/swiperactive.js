    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
        loop:true,
        autoplay: {
            delay:2500,
            disableOnInteraction:false,
        },
      pagination: {
        el: '.swiper-pagination',
      },
    });


//all time continue js code
/*loop:true,
        autoplay: {
            delay:2500,
            disableOnInteraction:false,
        },
            */
