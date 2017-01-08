//$('.mobile-orientation').click(function() {
	//$(this).hide();
//});

//Search

if ($('.prof-search__input').length > 0) {
	if ($('.prof-search__input').val().length > 0) {
		$('.prof-search__holder').addClass('active');
	}
}

$('.prof-search__placeholder').on('click', function() {
	$('.prof-search__input').focus();
});

$('.prof-search__input').on('focus', function() {
	$(this).closest('.prof-search__holder').addClass('active');
});

$('.prof-search__input').on('blur', function() {
	var root = $(this).closest('.prof-search__holder');

	if ($(this).val().length > 0) {

	} else {
		root.removeClass('active');
	}
});

// Tabs
$('.prof-tabs__item').on('click', function(e) {
	e.preventDefault();

	var $this = $(this);
	var href = $this.attr('href');

	if (href) {
		$this.addClass('active').siblings().removeClass('active');
		$(href).parent().addClass('active').siblings().removeClass('active');
	}
});


// review slider
$('.review-slider').owlCarousel({
	loop: false,
    animateOut: 'fadeOut',
    animateIn: 'zoomIn',
	items: 1,
	margin: 0,
	nav: false,
	dots: true
});

// Article slider
$('.article-slider').owlCarousel({
	loop: false,
	items: 1,
	margin: 0,
	nav: false,
	dots: true
});

// Main slider
//$('.mainline__slider').owlCarousel({
//  loop: false,
//  items: 1,
//  margin: 0,
//  nav: false
//});

$(window).on('load', function() {
    $('.mainline').addClass('page-loaded');
});

$('.mainline__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slide: '.mainline-slider-item',
    fade: true,
    dots: true,
    touch: false,
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    asNavFor: $('.mainline__menu'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                autoplay: false
            }
        }
    ]
});

$('.mainline__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var text = $('.mainline-slider-item').eq(nextSlide).find('.mainline__center');
    text.css({ opacity: 0 }).removeClass('fadeInUp animated');

    //player.pauseVideo();
});
$('.mainline__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var text = $('.mainline-slider-item').eq(currentSlide).find('.mainline__center');
    text.addClass('fadeInUp animated');
});

$('.mainline__menu').slick({
    // slidesToShow: 4,
    // slidesToScroll:1,
    asNavFor: $('.mainline__slider'),
    dots: false,
    //centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
    focusOnSelect: true
});

$('.mainline-slider-item').each(function() {
    var self = this,
        $center = $('.mainline__center', self),
        $video = $('.mainline__video', self),
        speed = 150;

    $('.mainline__play', this).on('click', function(){
        $center.hide(speed);
        $video.show().addClass('js-vertical-anim');
        // $('body').addClass('showVideo');
        $('.mainline__slider').slick('slickPause');
        return false;
    });
});

/*function onYouTubePlayerAPIReady() {
    player = new YT.Player('mainline-yt-video', {
        events: {'onReady': onPlayerReady}
    });
}
function onPlayerReady(event) {
    document.getElementById("mainline-play-yt-video").addEventListener("click", function() {
        player.playVideo();
    });
}*/

$('.promo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slide: '.promo__desc',
    fade: true,
    dots: true,
    //adaptiveHeight: true,
    asNavFor: $('.promo__feature-list')
});
$('.promo__feature-list').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: $('.promo-slider'),
    dots: false,
    //centerMode: true,
    //infinite: true,
    //variableWidth: true,
    focusOnSelect: true
});
$('.review-slider-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slide: '.review-slider-mobile__item',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true
});
$('.article-slider-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    slide: '.article-slider-mobile__item',
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    adaptiveHeight: true
});

$(window).load(function() {

    $('[class*=js-vertical-anim]').each(function() {
        $(this).waypoint(function(direction) {
            $(this).addClass('animated fadeInUp');
        }.bind(this), {
            offset: '100%'
        });
    });

    $('.js-left-anim').each(function() {
        $(this).waypoint(function(direction) {
            $(this).addClass('animated fadeInLeft');
        }.bind(this), {
            offset: '100%'
        });
    });

    $('.js-right-anim').each(function() {
        $(this).waypoint(function(direction) {
            $(this).addClass('animated fadeInRight');
        }.bind(this), {
            offset: '100%'
        });
    });

});


var rotation = 0,
    scrollLoc = $(document).scrollTop();
$(window).scroll(function() {
    var newLoc = $(document).scrollTop();
    var diff = scrollLoc - newLoc;
    rotation += diff, scrollLoc = newLoc;
    //rotation /= 5;
    var rotationStr = "rotate(" + rotation + "deg)";
    $(".js-rotate-anim").css({
        "-webkit-transform": rotationStr,
        "-moz-transform": rotationStr,
        "transform": rotationStr
    });
});


$('.prof__block').each(function() {

    var self = this,
        $loadButton = $('.prof__end', self),
        $hidden = $('.prof-hidden', self);

    $loadButton.on('click', function(e) {

        /*$.ajax({
            url: "test-prof.html",
            cache: false,
            success: function(html){
                $hidden.html(html);
                $('.prof__item', self).addClass('js-vertical-anim-3 animated fadeInUp');
                $loadButton.hide(50);
            }
        });*/

        $(this).prev('.prof__list').addClass('active');
        $(this).hide(50);

        $(window).trigger('resize');

        return false;
    });
});

(function() {

    var $cityPop = $('.choose-city-pop'),
        $citySelect = $('.choose-city__select'),
        cityOpen = 'choose-city-pop--open';

    $('.select-city').on('click', function(){
        $cityPop.addClass(cityOpen);
        $citySelect.select2("open");
        $.fn.fullpage.setAllowScrolling(false);
        return false;
    });

    $citySelect.on("change", function (e) {
        $cityPop.removeClass(cityOpen);
        //$.fn.fullpage.setAllowScrolling(true);
    });

    $(document).on("mousedown", function(e) {
        if(!$cityPop.is(e.target) && !$cityPop.has(e.target).size()) {
            $cityPop.removeClass(cityOpen);
           //$.fn.fullpage.setAllowScrolling(true);
        }
    });

})();


$('.more-prof').on('click', function(e){
    $('.prof__title-holder').addClass('more-prof-open');

    var el = $( e.target.getAttribute('href') );
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;

    if (elHeight < windowHeight) {
        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    }
    else {
        offset = elOffset;
    }
    var speed = 200;
    $('html, body').animate({scrollTop:offset}, speed);

    $('.diplom-box--main').addClass('animated fadeInDown');

    return false;
});


$('.more-prof-close').on('click', function(){
    $('.prof__title-holder').removeClass('more-prof-open');
    $('.diplom-box--main').removeClass('animated fadeInDown');
    return false;
});

var fullPageOn = document.documentElement.clientWidth;

if (fullPageOn > 1025) {
    $('.fullpage-main').fullpage({
        navigation: true,
        sectionSelector: '.section',
        scrollingSpeed: 700,
        lockAnchors: true,
        scrollOverflow: true,
        verticalCentered: true,
        normalScrollElements: '.mail-form, .mail-form-wrap, .mail-form-inner, .mail-msg, .mail-msg-wrap, .mail-msg-inner, .overlay, .paper',
        scrollOverflowOptions: {
            click: false
        },
        onLeave: function(index, nextIndex, direction){
            var $section = $('.section').eq(nextIndex - 1);

            setTimeout(function() {
                $('[class*=js-vertical-anim]', $section).each(function() {
                    $(this).addClass('animated fadeInUp');
                });

                $('.js-left-anim', $section).each(function() {
                    $(this).addClass('animated fadeInLeft');
                });

                $('.js-right-anim', $section).each(function() {
                    $(this).addClass('animated fadeInRight');
                });

                //$(window).trigger('resize');
            }.bind(this), 200);
        }

    });
} else if (fullPageOn > 720 && fullPageOn <= 1024) {
    $('.fullpage-main').fullpage({
        navigation: true,
        sectionSelector: '.section',
        scrollingSpeed: 700,
        lockAnchors: true,
        scrollOverflow: true,
        verticalCentered: true,
        normalScrollElements: '.mail-form, .mail-form-wrap, .mail-form-inner, .mail-msg, .mail-msg-wrap, .mail-msg-inner, .overlay, .paper',
        scrollOverflowOptions: {
            click: true
        },
        onLeave: function(index, nextIndex, direction){
            var $section = $('.section').eq(nextIndex - 1);

            setTimeout(function() {
                $('[class*=js-vertical-anim]', $section).each(function() {
                    $(this).addClass('animated fadeInUp');
                });

                $('.js-left-anim', $section).each(function() {
                    $(this).addClass('animated fadeInLeft');
                });

                $('.js-right-anim', $section).each(function() {
                    $(this).addClass('animated fadeInRight');
                });

                //$(window).trigger('resize');
            }.bind(this), 200);
        }

    });
}

(function() {
    var $overlay = $('.overlay'),
        $paper= $('.paper'),
        speed = 150;

    $(".article__more").on("click", function() {
        //$paper.add($overlay).fadeIn(speed, 'linear');
        $paper.css("top", (($(window).height() - $paper.outerHeight()) / 2) + $(window).scrollTop() + "px");
        return false;
    });

    $(window).on("resize", function() {
        $paper.css("top", (($(window).height() - $paper.outerHeight()) / 2) + $(window).scrollTop() + "px");
    }).trigger("resize");

    $(".paper__close").add($overlay).on("click", function() {
        $paper.add($overlay).fadeOut(speed, 'linear');
        return false;
    });

    $paper
        .click(function () {
            $paper.fadeOut(speed, 'linear');
        })
        .children()
        .click(function () {
            return false;
        });

})();

(function () {
    var size = 214,
        $content= $('.article__content'),
        contentText = $content.text();

    if(contentText.length > size){
        $content.text(contentText.slice(0, size) + ' ...');
    }
})();

$('.js-mobile-tab').click(function () {
    $(this).parent().children('.js-mobile-body').slideToggle(200, "swing");
    $(this).parent().children('.js-mobile-tab').toggleClass('active');

    return false;
});


$(".js-social-show").on("click", function () {
    $(".articles__social-menu").fadeIn();
});

$(".articles__social-link").on("click", function() {
    $(".articles__social-menu").hide();
});

$(document).on('click', '.scrolling', function(){
    $.fn.fullpage.moveTo(2);
    return false;
});

