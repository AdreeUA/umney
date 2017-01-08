function reviewsResize() {

    var $reviews = $('.reviews'),
        reviewPopup = $('.popup-review'),
        reviewClose = $('.popup-review__close'),
        reviewInner = $('.popup-review__inner'),
        reviewItemDisc = $('.review-item__disc');

    if ($reviews.length > 0) {

        function _showPopup(e) {
            e.preventDefault();

            reviewPopup.fadeIn(400);
            $('body').addClass('overflow-body');
        }

        function _hidePopup(e) {
            e.preventDefault();

            reviewPopup.fadeOut(400);
            $('body').removeClass('overflow-body');
        }

        $(reviewClose).on('click', function (e) {
            _hidePopup(e);
        });

        $(reviewPopup).on('click', function (e) {
            var $target = e.target;

            if (reviewInner.has($target).length === 0) {
                _hidePopup(e);
            }
        });

        if ($(window).width() <= '720'){

            // Mobile js

            reviewItemDisc.on('click', function (e) {
                _showPopup(e);
            });


        } else {

            // Desktop js

            $('body').on('click', '.js-review-more', function (e) {
                _showPopup(e);
            });

        }


    }
}

$(window).on('load resize', reviewsResize);

