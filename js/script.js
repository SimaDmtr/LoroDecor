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
});
