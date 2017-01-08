(function () {

    var $learn = $('.learn');

    if ($learn.length) {


        $('body').on('click', '.learn-info', function(e){
            var $pop = $('.inform-pop');
            $pop.show();

            return false;
        });

        $(document).click(function(e){
            var elem = $('.inform-pop');
            if(e.target!=elem[0]&&!elem.has(e.target).length){
                elem.hide();
            }
        });

        $('.inform-pop__close').on('click', function(){
            var $pop = $('.inform-pop');
            $pop.hide();
            return false;
        });


        function learnRiseze() {

            if ($(window).width() < '720') {

                // MOBILE JS

                var $holderSelect = $('.holder-learn__select');

                $('.js-trening-select-1').select2({
                    placeholder: "Выбрать раздел обучения",
                    // dropdownParent: $('.js-trening-wrap')
                    theme: "learn",
                    minimumResultsForSearch: -1
                });

                $('.js-trening-select-2').select2({
                    placeholder: "Выбрать раздел обучения",
                    // dropdownParent: $('.js-trening-wrap-2')
                    theme: "learn",
                    minimumResultsForSearch: -1
                });

                $('.js-trening-select-2').on('select2:select', function () {
                    $('html, body').animate({
                        scrollTop: $('.holder-learn').offset().top
                    }, 300);
                });

                //$('#plan-box').show();
                $('.learn-hidden').eq(0).show();

                function showTurnCard(id) {
                    var duration = 600,
                        $cart = $('.turn-card');

                    $('.learn-hidden').hide();
                    $cart.slideUp();

                    $('#' + id).fadeIn();

                    $cart.filter(function () {
                        return $(this).attr("data-turn-id") == id;
                    })
                        .fadeIn();

                }

                $holderSelect.on('select2:select', function (evt) {
                    var $val = $(this).val();

                    $holderSelect.val($val);

                    showTurnCard($val);
                    $holderSelect.trigger('change');
                });

            } else {

                // DESKTOP JS

                $('.turn-card__more').on('click', function(){
                    var href = $(this).attr('href'),
                        duration = 600,
                        $wrap = $(this).closest('.turn-card'),
                        $row = $(this).closest('.item-grid');

                    $('.learn-hidden').slideUp(duration);
                    $('.learn-bid').hide();
                    $(href).insertAfter($row).slideDown(duration, function() {
                        $('html, body').animate({
                            scrollTop: $wrap.offset().top - 20
                        }, 300);
                    });
                    $('.turn-card').removeClass('open');
                    $wrap.addClass('open');
                    return false;
                });

                $('.turn-card__close').on('click', function(){
                    var duration = 600,
                        $wrap = $(this).closest('.turn-card'),
                        href = $('.turn-card__more', $wrap).attr('href');

                    $(href).slideUp(duration);
                    $wrap.removeClass('open');
                    $('.learn-bid').show();
                    return false;
                });
            }

        }

        $(window).on('load', learnRiseze);
        // $(window).on('resize', learnRiseze);

    }

})();