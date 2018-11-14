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
