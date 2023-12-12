$(document).ready(function(){
    var ww = $(window).width();
    layout();

    $('.header .logo').addClass('active');
    $('.header .logo svg').addClass('active');
    $('.header .hamburger').addClass('active');

    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        

        if(sct >= 1){
            $('.header .logo').removeClass('active');
            $('.header .logo svg').removeClass('active');
            $('.header .hamburger span').addClass('active');
            $('.header').addClass('active');    

        }else if(sct < 1){
            $('.header .logo').addClass('active');
            $('.header .logo svg').addClass('active');
            $('.header .hamburger span').removeClass('active');
            $('.header').removeClass('active');
        }

        if(sct >= 600){
            $('.top-btn').addClass('active');
        }else{
            $('.top-btn').removeClass('active');
        }
    });

   

    function layout(){
        if (ww >= 1000){
            const swiper2 = new Swiper('.best-img',{
                slidesPerView : 3,
                loop : true,
                spaceBetween : 20,
                speed : 1500,
                autoplay : {
                    delay : 1500,
                    disableOnInteraction : false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },       
            });
        }else{

        }
        }

    if(ww>=860){

        $('.hamburger').click(function(){

            var sct = $(window).scrollTop();
            
            $('.menu-wrap').stop().slideToggle();
            $(this).toggleClass('on');  
    
            if(sct<1){
                $('.header .logo').toggleClass('active');
                $('.header .logo svg').toggleClass('active');
                $('.header .hamburger span').toggleClass('active');
                $('.header').toggleClass('active');  
                $('.header .icon-box') .toggleClass('active');
            }else{
                
            }
        });
      
    }else if(ww<860){
        $('.hamburger').click(function(){

            var sct = $(window).scrollTop();
            
            $('.m-menu-wrap').stop().slideToggle();
            $(this).toggleClass('on');  
    
            if(sct<1){
                $('.header .logo').toggleClass('active');
                $('.header .logo svg').toggleClass('active');
                $('.header .hamburger span').toggleClass('active');
                $('.header').toggleClass('active');   
            }else{
                
            }
        });  
    }


    $(window).on('resize',function(){
        if (ww >= 1000){   
          location.reload();  
        }
        else if(ww >= 859){
            location.reload();  
        }

    }); 

    
    $(window).resize(function(){
        ww = $(window).width();
        layout();
        //지역 스코프 안에서 함수 호출
    });


    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    const swiper1 = new Swiper('.ban-swiper',{
        slidesPerView : 1,
        loop : true,
        spaceBetween : 0,
        speed : 1800,
        autoplay : {
            delay : 2000,
            disableOnInteraction : false,
        }
    });


    const swiper3 = new Swiper('.showroom-swiper',{
        direction : 'vertical',
        slidesPerView : 1,
        loop : true,
        spaceBetween : 0,
        speed : 1800,
        touchRatio: 0,
        autoplay : {
            delay : 2000,
            disableOnInteraction : false,
        }
    });

    // $('.best-img').hover(function() {    
    //     swiper2.autoplay.stop();}, 
    //     function(){    
    //         swiper2.autoplay.start();})

    $('.menu-wrap .main-menu .menu').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).children('.submenu').stop().slideDown();
        $(this).children('.submenu').siblings('.submenu').stop().slideUp();
    });

    $('.menu-wrap .main-menu .menu').mouseleave(function(){
        $(this).removeClass('active');
        $(this).children('.submenu').stop().slideUp();
    });


    $('.menu-wrap .main-menu .menu').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).children('.submenu').stop().slideDown();
        $(this).children('.submenu').siblings('.submenu').stop().slideUp();
    });

    $('.menu-wrap .main-menu .menu').mouseleave(function(){
        $(this).removeClass('active');
        $(this).children('.submenu').stop().slideUp();
    });


    $('.main-menu .submenu > li').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('.main-menu .submenu > li').mouseleave(function(){
        $(this).removeClass('active');
    });

    $('.banner .swiper-wrapper .swiper-slide .banner-txt').mouseenter(function(){
        $('.banner .swiper-wrapper .swiper-slide .gradient').addClass('active');
        $(this).addClass('active');
    });

    $('.banner .swiper-wrapper .swiper-slide .banner-txt').mouseleave(function(){
        $('.banner .swiper-wrapper .swiper-slide .gradient').removeClass('active');
        $(this).removeClass('active');
    });

    $('.new .new-img').mouseenter(function(){
        $(this).children('.b-box').addClass('active');
        $(this).children('.b-box').siblings().removeClass('active');
    });

    $('.new .new-img').mouseleave(function(){
        $(this).children('.b-box').removeClass('active');
    });

    $('.best .img-slide').mouseenter(function(){
        $(this).addClass('active');
        $(this).siblings('.txt-slide').find('.best-name').addClass('active');
    });

    $('.best .img-slide').mouseleave(function(){
        $(this).removeClass('active');
        $(this).siblings('.txt-slide').find('.best-name').removeClass('active');
    });

    $('.best .heart').click(function(){
        $(this).toggleClass('active');
    });

    $('.footer .f-menu').click(function(){
        $(this).children('.sub').stop().slideToggle();
        $(this).toggleClass('active');
    });

    AOS.init({
        disable: window.innerWidth < 860
    }); 
});