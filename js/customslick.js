$(document).ready(function(){
    $('.sadi_slider').slick({
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    fade:true,
    autoplaySpeed:4000,
    autoplay:true,
    arrows:false,
    dots:true,    
}); 
    
    //ScreenShoot Slider Js
    
     $('.wrapslider').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         arrows: false,
         autoplay:false,
         autoplaySpeed:1000,
         dots: true,
         centerMode: true,
         centerPadding: '0px',
         focusOnSelect: true,
     });
    
    // Vino Box Video
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    
    //Feedback
$('.text_sadie').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.sliderf_img'
     });
     $('.sliderf_img').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         asNavFor: '.text_sadie',
         arrows: false,
         dots: false,
         centerMode: true,
         centerPadding: '0px',
         autoplay:true,
         focusOnSelect: true,
     });
    //Sticky Top Code
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky =$(".sticky_top");
        if(scrolling>= 100){
           sticky.addClass("sadi_bg"); 
        }
        else{
           sticky.removeClass("sadi_bg"); 
        }
    });
    
    
    // Smooths scrolling
    $('body').scrollspy({target: ".navbar", offset: 50});
    
    //Smoth Scroll
    
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    //Wow js
    new WOW().init();
    
    //Scroll To Top 
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#home_icon').fadeIn();
        }
    });
    $("#home_icon").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
    
    //Preloder
   $(window).on('load', function(){
        
        $('#preloader').delay(2000).fadeOut(500);
        
    });

    
    
   
    
    
    
});