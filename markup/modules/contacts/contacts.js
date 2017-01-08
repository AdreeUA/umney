/*
$('.near-now__select').select2({
    dropdownParent: $('.near')
=======
$(document).ready(function () {
    var parent = $('.near-now__holder');

    $('.js-select-block').select2({
        dropdownParent: $('.js-select-parent')
    });

    $('.js-select-block2').select2({
        dropdownParent: $('.js-select-parent2')
    });
>>>>>>> release_backend
});
*/

$('.js-select-map').select2({
    dropdownParent: $('.js-select-wrap')
});

$('.js-select-map-2').select2({
    dropdownParent: $('.js-select-wrap-2')
});

$('.choose-city__select').select2({
    dropdownParent: $('.choose-city')
});

$('.filial__more').on('click', function(e) {

    var $loadButton = $('.filial__more-holder');

    $loadButton.addClass('loading');

    $.ajax({
        url: "test-contacts.html",
        cache: false,
        success: function(html){
            setTimeout(function() {
                $('.contacts-hidden').html(html);
                $('.filial__item').addClass('js-vertical-anim-3 animated fadeInUp');
                $loadButton.hide(50).removeClass('loading');
            }, 600);
        }
    });

    return false;
});


$('.prof-search__input').on('keyup', function() {
    var val = $(this).val(),
        $result = $('.search-result'),
        $loader = $('.search-loader'),
        $content = $('.search-content');

    if(val.length > 2) {
        $loader.show();
        $content.hide();
        $result.stop().slideDown(300, function() {
            $result.height('auto');
        });
        setTimeout(function() {
            $loader.hide();
            $content.show();
        }, 3000);
    }
    else {
        $result.stop().slideUp(300);
    }
});

$('.js-near-title').click(function () {

    var $this = $(this),
        $nearMain = $('.near-main'),
        $nearNow = $('.near-now'),
        $contactInfo = $('.contact-info'),
        $mainMap = $('.near-main__map'),
        $nowMap = $('.near-now__map'),
        $filial = $('.filial');


    $this
        .parent()
        .parent()
        .parent()
        .toggleClass('active');

    if ($nearMain.hasClass('active')) {
        $contactInfo.show();
    } else {
        $contactInfo.hide();
    }

    if ($nearNow.hasClass('active')) {
        $filial.show();
    } else {
        $filial.hide();
    }

});

$('.js-how-can-to').click(function (e) {
    e.preventDefault();
    var address = $('.near-main__label_gray');

    address.slideToggle('slow');
});

// Tabs

$('.js-tabs-item').on('click', function(e) {
    e.preventDefault();


    var $this = $(this);
    var href = $this.attr('href');

    $('.bid-tabs__item').removeClass('active');
    $(href).removeClass('mobile-hide');

    if (href.charAt(0) === '#' && typeof href !== "undefined") {
        $this.addClass('active').siblings().removeClass('active');
        $(href).addClass('active').siblings().removeClass('active');

        $('html, body').animate({ scrollTop: $this.offset().top - 20 }, 500);

        return false
    }
});

/*var myMap;
function init(){
    myMap = new ymaps.Map("yaMap", {
        center: [61.69, 99.50],
        zoom: 4,
        controls: ['typeSelector', 'zoomControl']
    });
    myMap.behaviors.disable(['scrollZoom']);
}
ymaps.ready(init);
*/

// function deleteActiveId() {
//
//     if ($(window).width() <= '480') {
//         $('#contactsBlock2').removeClass('active')
//     } else {
//         $('#contactsBlock2').addClass('active')
//     }
// }
//
// $(window).on('load resize', deleteActiveId);

