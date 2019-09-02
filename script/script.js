$(document).ready(function () {

    let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let trigger = false;
    let nightMode = localStorage.getItem('nightMode');
    let triggerForspecificationBtn = false;
    let currentSlideIndex = 0;

    var fontSize = localStorage.getItem('font-size');

    if (isAndroid || iOS === true) {
        $("body").addClass("mobile")
    }
    if (nightMode === "true") {
        trigger = true;

    } else {
        trigger = false;
    }

    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('.section3 .paralax1').css('top', (0 - (scrolled * .3)) + 'px');
        $('.section3 .paralax2').css('top', (0 - (scrolled * .4)) + 'px');

        $('.section5 .paralax').css('top', (1200 - (scrolled * .4)) + 'px');
        $('.section6 .paralax').css('top', (500 - (scrolled * .2)) + 'px');
        $('.section7 .paralax').css('top', (1400 - (scrolled * .4)) + 'px');
        $('.section8 .paralax').css('top', (900 - (scrolled * .2)) + 'px');
        $('.section9 .paralax').css('top', (1000 - (scrolled * .2)) + 'px');
        $('.section10 .paralax').css('top', (1050 - (scrolled * .2)) + 'px');
        $('.section11 .paralax').css('top', (1200 - (scrolled * .2)) + 'px');
        $('.section14 .paralax').css('top', (1420 - (scrolled * .2)) + 'px');
    }

    $(".bottom-text").on("click", function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section11").offset().top
        }, 1500);
    });

    $(".card-wrapper .left, .footer .col2 .app").on("click", function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section5").offset().top
        }, 1500);
    });
    $(".card-wrapper .middle, .footer .col2 .trade").on("click", function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section7").offset().top
        }, 1500);
    });
    $(".card-wrapper .right, .footer .col2 .exchange").on("click", function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section9").offset().top
        }, 1500);
    });

    $(".email").on("click", function () {
        $(".input-item").addClass("active")
    })

    $('.section1 .content-wrapper').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        autoplay: true,
        autoplaySpeed: 8000
    });

    $('.section1 .content-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.content-wrapper').addClass("slick-before-change");
    });

    $('.section1 .content-wrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
        currentSlideIndex = currentSlide;
    });

    $('.section6 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
        // variableWidth: true
    });
    $('.section8 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
        // variableWidth: true
    });
    $('.section10 .content-mob').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '30px',
        // variableWidth: true
    });

    $(".prev-btn").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(currentSlideIndex - 1);
    });

    $(".next-btn").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(currentSlideIndex + 1);
    });

    $('.section1 .content-wrapper').on('swipe', function (event, slick, direction) {
        $('.section1 .content-wrapper').slick('slickPause');
    });

    $(".nav1").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(0);
    });
    $(".nav2").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(1);
    });
    $(".nav3").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(2);
    });
    $(".nav4").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(3);
    });
    $(".nav5").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(4);
    });
    $(".nav6").on("click", function () {
        $('.section1 .content-wrapper')[0].slick.slickGoTo(5);
    });


    $(".mobile-menu_btn").on("click", function () {
        TweenMax.to(".menu-mobile", 0.5, {display: "flex", autoAlpha: 1})
        $("body").addClass("openMenu");
    });

    $(".close-btn").on("click", function () {
        TweenMax.to(".menu-mobile", 0.5, {display: "none", autoAlpha: 0})
        $("body").removeClass("openMenu");
    });

    $(".to-top-btn").on("click", function () {
        $('html,body').animate({scrollTop: 0}, 'slow');
        return false;
    })

    window.onscroll = function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrolled);

        if (scrolled >= 800) {
            $('.section1 .content-wrapper').slick('slickPause');
            $(".section1-copy").removeClass("without-blur");
            $(".section1-copy").addClass("blur");
        } else {
            $('.section1 .content-wrapper').slick('slickPause');
            $(".section1-copy").removeClass("blur");
            $(".section1-copy").addClass("without-blur");
        }

        if (scrolled >= 500) {
            $(".to-top-btn").addClass("active")
        } else {
            $(".to-top-btn").removeClass("active")
        }

        if (scrolled >= 200) {
            $(".header-wrapper").removeClass("static");
            $(".header-wrapper").addClass("active");

            $(".mobile-block-header").removeClass("static");
            $(".mobile-block-header").addClass("active");
        } else {
            $(".header-wrapper").removeClass("active");
            $(".header-wrapper").addClass("static");

            $(".mobile-block-header").removeClass("active");
            $(".mobile-block-header").addClass("static");
        }

    }
});

