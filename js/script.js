$(document).ready(function () {
    $('.cards_list_wrapper').slick({
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    });
    $('.articles_list_wrapper').slick({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]

    });

    $('.best_sale .back').on("click", function () {
        $('.best_sale .cards_list_wrapper').slick("slickPrev");
    });
    $('.best_sale .next').on("click", function () {
        $('.best_sale .cards_list_wrapper').slick("slickNext");
    });

    $('.new_items .back').on("click", function () {
        $('.new_items .cards_list_wrapper').slick("slickPrev");
    });
    $('.new_items .next').on("click", function () {
        $('.new_items .cards_list_wrapper').slick("slickNext");
    });


    $('.articles_items .back').on("click", function () {
        $('.articles_list_wrapper').slick("slickPrev");
    });
    $('.articles_items .next').on("click", function () {
        $('.articles_list_wrapper').slick("slickNext");
    });
    $('.katalog_slide').slideUp(0);
    $(".katalog_trigger").click(function () {

        if ($(this).hasClass("show_katalog")) {
            $(this).removeClass("show_katalog");
            $('.katalog_slide').slideUp();
        } else {
            if ($(window).width() < 600) {
                $('.adaptive_menu').removeClass('active');
                $(this).addClass("show_katalog");
                $('.katalog_slide').slideDown();
                $('.adaptive_menu .katalog_slide').css({top: '-86px'})
            } else {
                $(this).addClass("show_katalog");
                $('.katalog_slide').slideDown();
            }
        }
    });
    $(document).mouseup(function (e) {
        var container = $(".katalog_slide");
        if (container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });
    $(".nav_menu_trigger").click(function () {
        if ($(this).hasClass("active")) {
            $(kek).removeClass("active");
        } else {
            $(kek).addClass("active");
        }
    });
    let kek = $('.katalog_trigger, .adaptive_menu,.nav_menu_trigger')
    $(document).mouseup(function (e) {
        var container = $(kek);
        if (container.has(e.target).length === 0) {
            container.removeClass('active');
            $('.menu_item.katalog_trigger').removeClass('show_katalog')
        }

    });

    var mainAccord = $('.left_catalog_item');
    $('.left_catalog_item:not(.active) .left_catalog_item_title').siblings().slideUp(0);
    mainAccord.click(function () {
        if ($(this).hasClass('active')) {
            mainAccord.removeClass('active');
            $(this).removeClass('active');
            $(this).find('.left_catalog_item_title').siblings().slideUp();
        } else {
            $(this).addClass('active');
            $(this).find('.left_catalog_item_title').siblings().slideDown();
            $(this).siblings().find('.left_catalog_item_title').siblings().slideUp();
        }
    })
    $('.card_main_image_wrapper').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.card_small_image_wrapper',
        infinite: true,
        fade: true
    })
    $('.card_small_image_wrapper').slick({
        slidesToShow: 3,
        arrows: true,
        nextArrow: '<span class="icon-next"></span>',
        prevArrow: '<span class="icon-back"></span>',
        asNavFor: '.card_main_image_wrapper',
        focusOnSelect: true,
        infinite: true,
    })
    $(".left_catalog_label").click(function () {
        if ($('.left_catalog_label,.left_catalog_wrapper').hasClass("active")) {
            $('.left_catalog_label,.left_catalog_wrapper').removeClass("active");
        } else {
            $('.left_catalog_label,.left_catalog_wrapper').addClass("active");
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.left_catalog_label,.left_catalog_wrapper');
        if (container.has(e.target).length === 0) {
            container.removeClass('active');
        }

    });
    $('.similar_goods_inner').slick({
        slidesToShow: 6,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true
                }
            },
        ]

    })
    $('.img-parallax').each(function () {
        var img = $(this);
        var imgParent = $(this).parent();

        function parallaxImg() {
            var speed = img.data('speed');
            var imgY = imgParent.offset().top;
            var winY = $(this).scrollTop();
            var winH = $(this).height();
            var parentH = imgParent.innerHeight();


            // The next pixel to show on screen
            var winBottom = winY + winH;

            // If block is shown on screen
            if (winBottom > imgY && winY < imgY + parentH) {
                // Number of pixels shown after block appear
                var imgBottom = ((winBottom - imgY) * speed);
                // Max number of pixels until block disappear
                var imgTop = winH + parentH;
                // Porcentage between start showing until disappearing
                var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
            }
            img.css({
                top: imgPercent + '%',
                transform: 'translate(-50%, -' + imgPercent + '%)'
            });
        }

        $(document).on({
            scroll: function () {
                parallaxImg();
            }, ready: function () {
                parallaxImg();
            }
        });
    });
});
