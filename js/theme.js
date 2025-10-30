
/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {

    "use strict";

    var Maan = {
        init: function () {
            this.Basic.init();
        },

        Basic: {
            init: function () {
                this.Animation();
                this.navbarFixed();
                this.MobileMenu();
                this.searchModal();
                this.cartModal();
                this.rangeSlider();
                this.MenuSearcher();
                this.swipperSlider();
                this.loadMore();
                this.preloader();
                this.scrollToTop();
                this.bgImg();
            },
            Animation: function () {
                var wow = new WOW(
                    {
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 0,
                        mobile: true,
                        live: true,
                        callback: function (box) {
                        },
                        scrollContainer: null,
                    },
                );
                wow.init();
            },
            //* Navbar Fixed  
            navbarFixed: function () {
                if ($('.header-section').length) {
                    $(window).on('scroll', function () {
                        var scroll = $(window).scrollTop();
                        if (scroll >= 120) {
                            $(".header-section").addClass("navbar_fixed");
                        } else {
                            $(".header-section").removeClass("navbar_fixed");
                        }
                    });
                };
            },

            // mobile menu 
            MobileMenu: function () {
                $('.open-nav, .header-categories-btn').click(function () {
                    $('body').addClass('nav_activee');
                });
                $('.nav_close, .overlaly').click(function () {
                    $('body').removeClass('nav_activee');
                });

                if ($('.mobile-menu li.dropdown ul').length) {
                    $('.mobile-menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
                        $(this).prev('ul').slideToggle(500);
                    });
                };
            },

            // search modal js
            searchModal: function () {
                $('.open-nav').click(function () {
                    $('body').addClass('right-side-nav-activee');
                });
                $('.nav-close-btn, .nav_close, .right-overlaly, .overlaly').click(function () {

                    $('body').removeClass('right-side-nav-activee');
                });
            },

            // cart modal js 
            cartModal: function () {
                $('.moda-cart-open').click(function () {
                    $('body').addClass('moda-cart-activee');
                });
                $('.cart-overlay, .cart-close').click(function () {
                    $('body').removeClass('moda-cart-activee');
                });
            },

            // Range Slider  
            rangeSlider: function () {
                $(function () {
                    $(".a").slider({
                        range: true,
                        min: 0,
                        max: 500,
                        values: [75, 300],
                        slide: function (event, ui) {
                            $(".b").text("$" + ui.values[0] + " - $" + ui.values[1]);
                        }
                    });
                    $(".b").text("$" + $(".a").slider("values", 0) +
                        " - $" + $(".a").slider("values", 1));
                });
            },

            //  Menu inner search
            MenuSearcher: function () {
                $(".searchbtn").click(function () {
                    $("section").click(function () {
                        $(".wrapper").removeClass("search-area");
                        $(".searchbtn").removeClass("bg-green");
                    });
                    $(this).toggleClass("bg-green");
                    $(".fas").toggleClass("color-white");
                    $(".wrapper").toggleClass("search-area");
                    $(".input").focus().toggleClass("active-width").val('');
                });
            },

            // data background 
            bgImg: function () {
                $("[data-background]").each(function () {
                    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
                });
            },
            // swiperslider 
            swipperSlider: function () {
                if ($('.moda-banner-slider, .product-fashion-section, .product-category-section, .moda-product-popular, .maan-testimonial-section-five, .moda-product-recently-viewed, .brand-section, .moda-product-shop-section, .related-products-section, .moda-categories-section, .moda-flash-product-wraper, .moda-testimonial-section, .moda-brand-section, .moda-furniture-product-featured, .moda-product-discount-section, .moda-service-section, .moda-tesimonial-section-four, .moda-team-section, .app-screenshots-section, .moda-furniture-testimonial-section').length) {
                    var swiper = new Swiper(".moda-electronic-banner", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        speed: 1000,
                        navigation: {
                            nextEl: "#electronic-banner-next",
                            prevEl: "#electronic-banner-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-furniture-banner", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        speed: 1000,
                        autoplay: {
                            delay: 5000,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-service-swiper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 6,
                        speed: 1000,
                        navigation: {
                            nextEl: "#service-banner-next",
                            prevEl: "#service-banner-prev",
                        },
                        breakpoints: {
                            1600: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView: 4, 
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                               
                            },

                            400: { 
                                slidesPerView: 2,
                                spaceBetween: 30,
                               
                            },
                            320: {
                                slidesPerView: 1, 
                                spaceBetween: 30,
                              
                            },
                        }
                    });
                    var swiper = new Swiper(".maan-testimonial-slider", {
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        slidesPerView: 1,
                        spaceBetween: 0,
                        speed: 500,
                        loop: true,
                        freeMode: true,
                        pagination: {
                            el: ".swiper-pagination",
                            type: "fraction",
                            // renderFraction: function (currentClass, totalClass, index, total) {
                            //     return '<span class="' + currentClass + '">0 ' + index + ' </span>' +
                            //         '' +
                            //         '<span class="' + totalClass + '">0 ' + total + ' </span>';
                            // },
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        },
                        on: {
                            init: function () {
                                $(".swiper-progress-bar").removeClass("animate");
                                $(".swiper-progress-bar").removeClass("active");
                                $(".swiper-progress-bar").eq(0).addClass("animate");
                                $(".swiper-progress-bar").eq(0).addClass("active");
                            },
                            slideChangeTransitionStart: function () {
                                $(".swiper-progress-bar").removeClass("animate");
                                $(".swiper-progress-bar").removeClass("active");
                                $(".swiper-progress-bar").eq(0).addClass("active");
                            },
                            slideChangeTransitionEnd: function () {
                                $(".swiper-progress-bar").eq(0).addClass("animate");
                            }
                        }
                    });

                    var swiper = new Swiper(".moda-team-swiper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        speed: 1000,
                        navigation: {
                            nextEl: "#team-swiper-button-next",
                            prevEl: "#team-swiper-button-prev",
                        },
                        breakpoints: {
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }
                    });
                    var swiper = new Swiper(".mySwiper-one", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-screenshots-swiper", { 
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 5,
                        speed: 1000,
                        pagination: {
                          el: ".moda-screenshot-swiper-pagination",
                          clickable: true, 
                        },
                        breakpoints: {
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }
                      });
                    var swiper = new Swiper(".moda-testimonial-five-swiper", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        speed: 1000,
                        pagination: {
                            el: ".maan-testimonial-swiper-pagination",
                            clickable: true,
                        },
                    });
                    var swiper = new Swiper(".product-slide", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-discount-wrapper", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        speed: 1000,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                    });
                    var swiper = new Swiper(".moda-flash-slide-inner", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-recent-product-wraper", {
                        loop: true,
                        spaceBetween: 25,
                        slidesPerView: 1,
                        speed: 1000,
                        navigation: {
                            nextEl: "#product-next",
                            prevEl: "#product-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-tabs-slider-inner", {
                        loop: true,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        observer: true,
                        observeParents: true,
                        speed: 1000,
                        navigation: {
                            nextEl: "#tab-next",
                            prevEl: "#tab-prev",
                        },
                    });
                    var swiper = new Swiper(".product-area", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }
                    });
                    var swiper = new Swiper(".moda-furniture-testimonial-wraper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(".moda-furniture-product-slider", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 1,
                        observer: true,
                        observeParents: true,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".moda-furniture-product-slider-one", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 1,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".mySwiper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 2,
                        speed: 1000,
                        pagination: {
                            el: ".swiper-pagination",
                            type: "progressbar",
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    var swiper = new Swiper(".recent-hot-products-inner-two", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            100: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(" .moda-related-product-wraper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        speed: 1000,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            100: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(".moda-categories-section-wraper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 4,
                        speed: 1000,
                        navigation: {
                            nextEl: "#ctg-next",
                            prevEl: "#ctg-prev",
                        },
                        breakpoints: {
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(".moda-testimonial-inner", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: "auto",
                        centeredSlides: true,
                        spaceBetween: 30,
                        speed: 1000,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        breakpoints: {
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(".brand-wraper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 5,
                        speed: 1000,
                        breakpoints: {
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(".moda-brand-wraper", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 5,
                        speed: 1000,
                        breakpoints: {
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                        }
                    });
                    var swiper = new Swiper(".moda-brand-wraper-two", {
                        loop: true,
                        spaceBetween: 30,
                        slidesPerView: 6,
                        speed: 1000,
                        breakpoints: {
                            1200: {
                                slidesPerView: 6,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 5, 
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                        }
                    });
                };
            },

            // Load more js 
            loadMore: function () {
                if ($('.moda-product-shop-section').length) {
                    $(".loadcontent").slice(0, 3).show();
                    $("#loadMore").on("click", function (e) {
                        e.preventDefault();
                        $(".loadcontent:hidden").slice(0, 3).slideDown();
                        if ($(".loadcontent:hidden").length == 0) {
                            $("#loadMore").text("No Content").addClass("noContent");
                        }
                    });
                };
            },

            // Preloader JS
            preloader: function () {
                if ($('.preloader').length) {
                    $(window).on('load', function () {
                        $('.preloader').fadeOut();
                        $('.preloader').delay(50).fadeOut('slow');
                    });
                };
            },

            // Scroll to top
            scrollToTop: function () {
                if ($('.scroll-top').length) {
                    $(window).on('scroll', function () {
                        if ($(this).scrollTop() > 200) {
                            $('.scroll-top').fadeIn();
                        } else {
                            $('.scroll-top').fadeOut();
                        }
                    });
                    //Click event to scroll to top
                    $('.scroll-top').on('click', function () {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 200);
                        return false;
                    });
                };
            },




        }
    };
    jQuery(document).ready(function () {
        Maan.init();

    });
    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // nice select 
    $('select').niceSelect();



    // additional page js
     /*-------------------------------------
            menu
        -------------------------------------*/
        $('.menu').click (function(){
            $(this).toggleClass('open');
        });

                /* -------------------------------------------------------------
            menu show Form
        ------------------------------------------------------------- */
        if ( $(window).width() > 991 ) {
            if ($('.cat-menu').length){
                $(".cat-menu").on('click', function(){
                    $(".cat-menu-wrap .sidebar-categories").fadeToggle("sidebar-categories-show", "linear");
                    $('.cat-menu').toggleClass('open');
                });

                $('body').on('click', function(event) {
                    if (!$(event.target).closest('.cat-menu').length && !$(event.target).closest('.cat-menu-wrap .sidebar-categories').length) {
                        $(".cat-menu-wrap .sidebar-categories").fadeOut("sidebar-categories-show");
                    }
                    if (!$(event.target).closest('.cat-menu').length && !$(event.target).closest('.cat-menu-wrap .sidebar-categories').length) {
                        $('.cat-menu').removeClass('open');
                    }
                });
            }
        }
    /*----------------------
        Search Popup
    -----------------------*/
    var bodyOvrelay = $('#body-overlay');
    var searchPopup = $('#search-popup');
    var sidebarMenu = $('#sidebar-menu');

    $(document).on('click', '#body-overlay', function (e) {
        e.preventDefault();
        bodyOvrelay.removeClass('active');
        searchPopup.removeClass('active');
        sidebarMenu.removeClass('active');
    });
    $(document).on('click', '#search', function (e) {
        e.preventDefault();
        searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
    });

        // slder js
    var swiper = new Swiper(".banner-four-slider-container", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1000,
        navigation: {
            nextEl: "#banner-next",
            prevEl: "#banner-prev",
        },
        pagination: {
            el: ".swiper-pagination1",
            clickable: true,
          },
    });
    var swiper = new Swiper(".frutes-banner-slider", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1000,
        navigation: {
            nextEl: "#banner-next",
            prevEl: "#banner-prev",
        },
        pagination: {
            el: ".frutes-banner-pagination",
            clickable: true,
          },
    });
        // slder js
    var swiper = new Swiper(".watch-banner-slider", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1000,
        navigation: {
            nextEl: "#banner-next",
            prevEl: "#banner-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });
    var swiper = new Swiper(".banner-four-slider", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 1000,
        navigation: {
            nextEl: "#banner-next1",
            prevEl: "#banner-prev1",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });
    var swiper = new Swiper(".trending-product-slider", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 4,
        speed: 1000,
        navigation: {
            nextEl: "#product-next1",
            prevEl: "#product-prev1",
        },
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
          },

        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4, 
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });
    var swiper = new Swiper(".browse-section-slider", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 3,
        speed: 1000,
        navigation: {
            nextEl: "#browse-next1",
            prevEl: "#browse-prev1",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3, 
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });
    var swiper = new Swiper(".recent-product-section-slide", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 4,
        speed: 1000,
        navigation: {
            nextEl: "#recent-next1",
            prevEl: "#recent-prev1",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4, 
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });
    var swiper = new Swiper(".newreased-slide-container", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 4,
        speed: 1000,
        navigation: {
            nextEl: "#product-next1",
            prevEl: "#product-prev1",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4, 
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
        }
    });
    var swiper = new Swiper(".auto-mobile-ctg-slide", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 6,
        speed: 1000,
        navigation: {
            nextEl: "#auto-next",
            prevEl: "#auto-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 6,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4, 
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
        }
    });
        // var swiper = new Swiper(".product-thumbnail-carousel", {
        // loop: true,
        // spaceBetween: 16,
        // slidesPerView: 4,
        // freeMode: true,
        // watchSlidesVisibility: true,
        // watchSlidesProgress: true,
        // });
        // var swiper2 = new Swiper(".product-thumbnail-wrapper", {
        // loop: true,
        // spaceBetween: 0,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        // thumbs: {
        //     swiper: swiper,
        // },
        // });

        // nice number 
    $('.nice-number').niceNumber();
    // console.log('unit js loaded');
})(jQuery);

