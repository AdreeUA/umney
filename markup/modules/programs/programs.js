var screenWidth = document.documentElement.clientWidth;
if (screenWidth > 720) {
    $('.select-direction').on('click', function(){
        var $wrap = $(this).closest('.program');
        $wrap.addClass('program--open');
        return false;
    });
    $('.program__more--close').on('click', function(){
        var $wrap = $(this).closest('.program');
        $wrap.removeClass('program--open');
        return false;
    });
} else if (screenWidth < 720) {
    $('.program__more').on('click', function(){
        $(this).parent().children('.program__mobile-desc').fadeIn();
        $(this).parent().children('.program__more').addClass('active');
        return false;
    });
    $('.program__more--close').on('click', function(){
        $(this).parent('.program__mobile-desc').hide();
        $('.program__more').removeClass('active');
        return false;
    });
}

$('.js-first-paragraph__link').on('click', function(e) {
    $(this).hide().parents('.js-first-paragraph').find('div').slideDown();
    e.preventDefault();
});

$('.js-first-paragraph__link_mobile').on('click', function() {
    $(this).hide();
    $(this).parent().children('.js-first-paragraph_mobile').slideDown();
    return false;
});

$('.js-mobile-tab-programs').on('click', function() {
    $(this).fadeOut();
    $(this).parent().children('.programs__content_mobile').slideDown();
    $('.programs__content_mobile').addClass('active');
    return false;
});

$('.js-programs-bid').on('click', function() {
    return true;
});

$('.mail-form-direction').select2({
    dropdownParent: $('.mail-form-direct'),
    placeholder: "Выбери направление обучения *"
});

$('.mail-form-year').select2({
    // dropdownParent: $('.mail-form__years'),
    placeholder: "Цифра *",
    minimumResultsForSearch: 10,
    theme: "mail-form-year"
});


(function() {
    var $overlay = $('.overlay'),
        $box= $('.mail-msg'),
        $boxFeedback= $('.feedback-form-success'),
        $form = $('.mail-form'),
        $formFeedback = $('.feedback-form'),
        $windowHeight = $(window).height(),
        speed = 150;

    //$(window).on("resize", function() {
    //    $box.add($form).css("top", ($(window).scrollTop() + 100) + "px");
    //    $box.css({"position": "absolute", "top": "100px"});
    //}).trigger("resize");


    $overlay.on("click", function() {
        $box.add($overlay).fadeOut(speed, 'linear');
        $boxFeedback.add($overlay).fadeOut(speed, 'linear');
        $form.add($overlay).fadeOut(speed, 'linear');
        $('body').removeClass('overflow-body');
/*        $box.css("top", (($windowHeight - $box.innerHeight()) / 2) + $(window).scrollTop() + "px");
        $box.css({"position": "fixed"});*/
        return false;
    });

    $(".js-mail-tab").on("click", function() {
        $form.add($overlay).fadeIn(speed, 'linear');
        $form.css("top", ($(window).scrollTop() + 100) + "px");
        $('body').addClass('overflow-body');
        return false;
    });



    $(".js-feedback-link").on("click", function() {
        $formFeedback.add($overlay).fadeIn(speed, 'linear');
        return false;
    });

    $(document).on('click', '.mail-form__close', function () {
        $form.add($overlay).fadeOut(speed, 'linear');
        $box.add($overlay).fadeOut(speed, 'linear');
        $formFeedback.add($overlay).fadeOut(speed, 'linear');
        $('body').removeClass('overflow-body');
        return false;
    });

    $(document).on('click', '.mail-msg__close', function () {
        $form.add($overlay).fadeOut(speed, 'linear');
        $box.add($overlay).fadeOut(speed, 'linear');
        $formFeedback.add($overlay).fadeOut(speed, 'linear');
        $('body').removeClass('overflow-body');
        return false;
    });

    // $(".mail-form__close").add($overlay).on("click", function() {
    //     $form.add($overlay).fadeOut(speed, 'linear');
    //     $formFeedback.add($overlay).fadeOut(speed, 'linear');
    //     $('body').removeClass('overflow-body');
    //     return false;
    // });


    //
    //$(".another-future").on('click', function(){
    //    $box.fadeOut(speed, 'linear');
    //    $(window).trigger("resize");
    //    $form.fadeIn(speed, 'linear');
    //    return false;
    //});

})();

$.validator.setDefaults({
    ignore: []
});
var form = $("#letters-from-future");

$("#letters-from-future").validate({
    errorClass: 'error-class',
    rules: {
        DIRECTION: 'required',
        AGE: 'required',
        GENDER: 'required',
        NAME: {
            required: true
        }
    },
    messages: {
        DIRECTION: 'Выберите направление',
        AGE: 'Выберите дату рождения',
        GENDER: 'Выберите ваш пол',
        NAME: {
            required: "Введите ваше имя"
        }
    },
    submitHandler: function($form,$overlay,speed) {
        var dataform = $('#letters-from-future').serialize();
        $.ajax({
            type:'POST',
            url:'/',
            data: dataform,
            success:function(response,$form,$overlay,speed){
                $('.mail-msg').html(response);
                $(".mail-form__close").add($('.overlay')).on("click", function() {
                   $('.mail-form').add($('.overlay')).fadeOut(150, 'linear');
                    return false;
                });
                $('.mail-form').add($('.overlay')).fadeOut(150, 'linear');
                $('.mail-msg').add($('.overlay')).fadeIn(150, 'linear');
                $('.mail-msg').css("top", ($(window).scrollTop() + 100) + "px");

                $('#letter-share-vk').on('click',function(){
                var letterTitle = 'Я получил письмо из будущего! Узнай, что ждет тебя через 10 лет.',
                    letterDescr = $('.mail-msg__title').text(),
                    letterImage = window.location.origin+'/upload/pimgpsh_fullsize_distr.jpg';
                    console.log(letterDescr);
                var urlTo = 'http://vk.com/share.php?url='+window.location.origin+'/local/ajax/letter-soc-share.php?DESCRIPTION='+letterDescr;
                window.open(encodeURI(urlTo));

                });

                $('#letter-share-fb').on('click',function(){
                    var letterTitle = 'Я получил письмо из будущего! Узнай, что ждет тебя через 10 лет',
                        letterDescr = $('.mail-msg__title').text().trim(),
                        letterImage = window.location.origin+'/upload/pimgpsh_fullsize_distr.jpg';
                        console.log(letterDescr);
                    var urlTo = 'https://www.facebook.com/sharer/sharer.php?u='+window.location.origin+'/local/ajax/letter-soc-share.php?DESCRIPTION='+letterDescr;
                    window.open(encodeURI(urlTo));
                });
                $('#letter-share-ok').on('click',function(){
                    var letterTitle = 'Я получил письмо из будущего! Узнай, что ждет тебя через 10 лет.',
                        letterDescr = $('.mail-msg__title').text(),
                        letterImage = window.location.origin+'/upload/pimgpsh_fullsize_distr.jpg';
                        console.log(letterDescr);
                    var urlTo = 'https://connect.ok.ru/offer?url='+window.location.origin+'/local/ajax/letter-soc-share.php?&DESCRIPTION='+letterDescr;
                    window.open(encodeURI(urlTo));
                });
                //$('.mail-icon--1').show();
                $('.another-future').on('click',function(){

                    $('.overlay').trigger('click');
                    $('.mail-tab').trigger('click');
                    return false;
                });
            }
        });
    },
    highlight: function (element, errorClass, validClass) {

        var elem = $(element);

        if(elem.hasClass('s-select2')) {
            var isMulti = (!!elem.attr('multiple')) ? 's' : '';
            elem.siblings('.sl').find('.select2-choice'+isMulti+'').addClass(errorClass);
        } else {
            elem.addClass(errorClass);
        }

    },
    unhighlight: function (element, errorClass, validClass) {
        var elem = $(element);

        elem.removeClass(errorClass);
    }
});

$('#letters-from-future').each(function(){
    $('select', this).on('change', function() {
        $(this).valid();
    });
});

$('.program__close').on('click', function() {
    var $wrap = $(this).closest('.program__row');
    $wrap.toggleClass('program__row--close');

    if ($wrap.hasClass('program__row--close')) {
        $(this).html('Открыть')
    } else {
        $(this).html('Закрыть')
    }
    return false;
});

$(document).ready(function() {
    (function ($) {
        $(window).on("load", function () {
            $(".mail-form-inner, .mail-msg, .paper-inner").mCustomScrollbar({
                theme: "minimal-dark"
            });
        });
    })(jQuery);
});

$("#feedback-mail").validate({
    errorClass: 'error-class',
    rules: {
        name: 'required',
        email: 'required'
    },
    messages: {
        name: "Ошибка - не заполнено обязательное поле!",
        email: "Ошибка - не корректный email!"
    },
    submitHandler: function() {

        $(".mail-form__close").add($('.overlay')).on("click", function () {
            $('.feedback-form').add($('.overlay')).fadeOut(150, 'linear');
            return false;
        });

        $('.feedback-form').add($('.overlay')).fadeOut(150, 'linear');
        $('.feedback-form-success').add($('.overlay')).fadeIn(150, 'linear');

        var name = $('.feedback-form__input[name="name"]').val();
        var email = $('.feedback-form__input[name="email"]').val();
        var mess = $('.feedback-form__textarea[name="question"]').val();
        var url = '/success.php';
        console.log(name, email, mess);
        $.post('/local/ajax/feed_form.php', {name: name, email: email, mess: mess}, function (data) {
            data = JSON.parse(data);
            /*if ('id' in data) {
             location.href = url;
             } else {
             if ('error' in data) {
             alert(data.error);
             }
             }*/
        });
    },
    success: function () {

    }
});

$(document).ready(function() {
    (function($){
        $(window).on("load", function(){
            $(".mail-form-inner, .mail-msg, .paper-inner, .feedback-form__wrap").mCustomScrollbar({
                theme: "minimal-dark"
            });
        });
    })(jQuery);

});
