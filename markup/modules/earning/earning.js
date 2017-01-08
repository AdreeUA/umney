(function () {
    var $earn = $('.earn'),
        $earnDream = $('.earn-dream');

    if ($earn.length > 0 || $earnDream.length > 0) {

        $('.earning__all').on('click', function() {
            $('.earning-hidden').slideDown(200);
            $('.earning-btn').hide();
            return false;
        });

        $('.earn-city-select').select2({
            dropdownParent: $('.earning-city'),
            placeholder: "Выбрать город"
        });

        $('.earn__select').select2({
            dropdownParent: $('.js-earn-select-wrap')
        });

        (function() {
            var $overlay = $('.overlay'),
                $popup = $('.earning-city'),
                $select = $('.earn-city-select'),
                speed = 50;

            $(".earning-city-select").on("click", function() {
                $popup.add($overlay).fadeIn(speed, 'linear');
                $overlay.css('background', 'rgba(0, 0, 0, 0.40)');
                $select.select2("open");
                return false;
            });

            $overlay.on('click', function(){
                $popup.add($overlay).fadeOut(speed, 'linear');
                $overlay.css('background', '');
            });

            $select.on("select2:select", function(e) {
                $popup.add($overlay).fadeOut(speed, 'linear');
                $overlay.css('background', '');
            });

        })();

        (function(){
            function formatInputPrice($el) {
                $el.each(function() {
                    var prev_value="";
                    var input = this;
                    input.onkeyup = input.onchange= input.onpaste= function(){
                        this.value= this.value.replace(/[^\d\s]/g, "");
                        if (prev_value==this.value)
                            return;
                        prev_value= this.value;
                        this.value= this.value.replace(/[^\d]/g, "").split("").reverse().join("").replace(/\d{3}(?!$|(?:\s$))/g, "$& ").split("").reverse().join("");
                    };
                    input.onkeyup();
                });
            }
        })();

        function earningResize() {

            if ($(window).width() <= '720') {

                // MODILE JS

                $('.earn-dream__select_mobile').select2({
                    dropdownParent: $('.js-earn-dream-select-wrap'),
                    minimumResultsForSearch: -1
                });

            } else {

                // DESKTOP JS


                $('.earn-dream__select').select2({
                    dropdownParent: $('.js-earn-dream-select-wrap-desktop')
                });

            }
        }

        $(window).on('load resize', earningResize);

    }

})();

