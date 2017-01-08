/*$.fn.equalHeights = function() {
    var maxHeight = 0,
        $this = $(this),
        fz = 1.143,
        ww = $(window).width();

    $this.each( function() {
        var height = $(this).outerHeight();

        if ( height > maxHeight ) { maxHeight = height; }
    });

    //return $this.css('height', (maxHeight / ww) * 100 / fz + 'rem');
    return $this.css('height', maxHeight);
};

//$('.about-box').equalHeights();
//$('.about-box__title').equalHeights();

$('.item-grid__col-thrid--advantages').equalHeights();

//$('.filial__main').equalHeights();
//$('.filial__end').equalHeights();
$('.filial__item').equalHeights();
$('.program-box .program__title').equalHeights();
$('.program-box .program__hide-desc').equalHeights();
$('.program-box .program__desc').equalHeights();
$('.program-box .program__text-open').equalHeights();
$('.program-box .program__sum').equalHeights();
$('.program-box .program__directions').equalHeights();
$('.program-box .program__content').equalHeights();
$('.program-box .program__footer').equalHeights();
$('.program-box .program__row').equalHeights();

*/

$(".search-icon").on("click", function(){
    $(".search-wrap").addClass("search-wrap--open");
    return false;
});

$('.compare__more').click(function(){
    $(this).hide();
    $('.compare__inner--hidden').slideDown(200);
    return false;
});

$('.navigate__list').singlePageNav({
    offset: 140,
    threshold: 120,
    speed: 300,
    currentClass: 'active',
    easing: 'swing',
    updateHash: false,
    filter: '',
    onComplete: false,
    beforeStart: false
});


(function() {

    if(!$(".navigate").length) return;

    var $w = $(window),
        $layout = $("body"),
        $start = $(".start"),
        headerH = $(".header").outerHeight(true),
        title = $(".programs__title").outerHeight(true),
        allH = headerH + title,
        setLayoutType = function() {
            var scrollTop = $w.scrollTop(),
                has = $layout.hasClass("fixed-layout");

            if(scrollTop >= allH) {
                if(!has) {
                    $layout.addClass("fixed-layout");
                }
            }
            else {
                if(has) {
                    $layout.removeClass("fixed-layout");
                }
            }
        };

    $w.on("scroll", function() {
        setLayoutType();
    });

})();

function aboutUsMob() {

    if ($(window).width() <= '720') {
        var tabs = $('[data-id-section]'),
            closeTab = $('.about__close'),
            aboutSection =$('.about__section');


        tabs.click(function () {
            var $this = $(this),
                idSection = $this.attr('data-id-section');

            $(idSection).addClass('active');
            $this.addClass('active');

            return false;
        });

        closeTab.click(function () {
            var sectionId = $(this).closest(aboutSection).attr('id');

            tabs.filter(function () {

                return $(this).attr("data-id-section") == '#' + sectionId;
            })
                .removeClass('active');


            $(this)
                .closest(aboutSection)
                .removeClass('active');

            $('html, body').animate({
                scrollTop: $('.about').offset().top - 20
            }, 300);
        });

        $('.bid__title')
            .removeClass('js-vertical-anim')
            .addClass('js-left-anim');

    }
}

$(window).on('load resize', aboutUsMob);