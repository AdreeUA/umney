(function () {

    var $hamburger = $('.hamburger'),
        $header = $('.header');

    $hamburger.click(function (e) {

        $(this).toggleClass('hamburger_open');
        $('body').toggleClass('overflow-body header_open');
        $($header).toggleClass('header_open');

        return false;
    })

})();