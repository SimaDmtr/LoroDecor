$(document).ready(function () {
    $('.cards_list_wrapper').slick({
        slidesToShow: 5,
        arrows: false
    })

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


    $('.articles_list_wrapper').slick({
        slidesToShow: 3,
        arrows: false,
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
            $(this).addClass("show_katalog");
            $('.katalog_slide').slideDown();
        }
    });
    $(document).mouseup(function (e) {
        var container = $(".katalog_slide");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
    });
    $('.img-parallax').each(function(){
        var img = $(this);
        var imgParent = $(this).parent();
        function parallaxImg () {
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
