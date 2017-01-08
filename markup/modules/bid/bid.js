
function windowSize(){
    if ($(window).width() <= '720'){

        var $vmenu = $('.vmenu'),
            $vmenuMore = $('.js-vmenu-more'),
            $vmenuRadio = $('.vmenu__label input'),
            $vmenuInfo = $('.vmenu__item_info'),
            stepBlockOne = $('.js-step-1'),
            stepBlockTwo = $('.js-step-2'),
            stepBlockThree = $('.js-step-3'),
            setStepOne = $('.js-set-step-1'),
            setStepTwo = $('.js-set-step-2'),
            setStepThree = $('.js-set-step-3'),
            $learnFooter = $('.bid-learn__footer'),
            nextStep = $('.js-next-step'),
            prevStep = $('.js-prev-step'),
            lastStep = $('.js-last-step'),
            currentStep = 0;

        $('body').on('click','.js-next-step',function () {
            currentStep++;
            addActiveClass(currentStep)
        });

        $('body').on('click','.js-prev-step',function () {
            currentStep--;
            addActiveClass(currentStep)
        });

        $('body').on('click','.js-last-step',function () {
            addActiveClass(3);
        });


        function addActiveClass(step) {

            var scrollTopEl = $('.bid-tabs--program'),
                stepBlockOne = $('.js-step-1'),
                stepBlockTwo = $('.js-step-2'),
                stepBlockThree = $('.js-step-3'),
                setStepOne = $('.js-set-step-1'),
                setStepTwo = $('.js-set-step-2'),
                setStepThree = $('.js-set-step-3'),
                $learnFooter = $('.bid-learn__footer'),
                nextStep = $('.js-next-step'),
                prevStep = $('.js-prev-step'),
                lastStep = $('.js-last-step');

            // stepBlockOne.removeClass('active');
            // stepBlockTwo.removeClass('active');
            // stepBlockThree.removeClass('active');
            // el.addClass('active');

            switch (step) {

                case 0:
                    stepBlockOne.addClass('active');
                    stepBlockTwo.removeClass('active');
                    stepBlockThree.removeClass('active');
                    showElement($learnFooter);
                    break;
                case 1:
                    stepBlockOne.removeClass('active');
                    stepBlockTwo.addClass('active');
                    stepBlockThree.removeClass('active');
                    showElement($learnFooter);
                    break;
                case 2:
                    stepBlockOne.removeClass('active');
                    stepBlockTwo.removeClass('active');
                    stepBlockThree.addClass('active');
                    showElement($learnFooter);
                    break;
                case 3:
                    stepBlockOne.removeClass('active');
                    stepBlockTwo.removeClass('active');
                    stepBlockThree.addClass('active');
                    showElement($learnFooter);
                    break;
                default:
                    stepBlockOne.addClass('active');
                    stepBlockTwo.removeClass('active');
                    stepBlockThree.removeClass('active');
            }

            $('html, body').animate({ scrollTop: scrollTopEl.offset().top }, 500)
        }

        function showElement (el) {
            el.show();
        }

        // $(document).on('click', function (e) {
        //     var $target = e.target,
        //         $targetClass = $target.classList;
        //
        //     if ($targetClass.contains('js-set-step-1')) {
        //         addActiveClass(stepBlockOne);
        //         showElement($learnFooter)
        //     } else if ($targetClass.contains('js-set-step-2')) {
        //         addActiveClass(stepBlockTwo);
        //         showElement($learnFooter);
        //     } else if ($targetClass.contains('js-set-step-3')) {
        //         addActiveClass(stepBlockThree);
        //         showElement($learnFooter);
        //     }
        // });


        $vmenuRadio.change(function () {
            var $input = $(this),
                $containerCourse = $input.closest('.vmenu--course');

            $vmenuRadio
                .closest('.vmenu__item')
                .removeClass('vmenu__item_active')
                .removeClass('vmenu__item_more');

            if ($input.is(':checked')) {

                $input
                    .closest('.vmenu__item')
                    .addClass('vmenu__item_active');

            }

            if ($containerCourse.length) {
                showElement($vmenuInfo)
            }
        });

        $vmenuMore.click(function (e) {
            e.preventDefault();

            var $this = $(this),
                $menuItem = $this.closest('.vmenu__item');

            $menuItem
                .removeClass('vmenu__item_active')
                .addClass('vmenu__item_more')
        });

        // document.body.innerHTML = '%4820109928069'.replace(/^%/,'');
        $('.bid__title').each(function () {
            var $this = $(this),
                $text = $this.text(),
                $newtext = $text.replace(/(—$)/,''),
                $newtext = $newtext.replace(/(^—)/,'');

            $this.text($newtext);
            // console.log($newtext)
        })


    } else {

        $('.vmenu--level input, .vmenu--course input').on('change', function() {
            var $col = $(this).closest('.bid-learn__col'),
                $nextcol = $col.next(),
                $vmenu = $('.vmenu', $nextcol),
                $ph = $('.bid-learn__placeholder', $nextcol),
                index = $nextcol.index();

            $vmenu.show();
            $ph.hide();
            $('.bid-tabs__item').eq(index).addClass('active').siblings().removeClass('active');

            $('.js-send-request').on('click', function() {

            });

            //console.log(index);
        });

        var $vmenuAtantion = $('.vmenu__attention');

        $vmenuAtantion.hover(
            function (e) {
                e.preventDefault();
                var $this = $(this),
                    offsetLeft = $this.offset().left,
                    offsetTop = $this.offset().top;


                $this
                    .closest('.vmenu__label')
                    .children('.program')
                    .css('display', 'block')
                    .offset({left: offsetLeft, top: offsetTop})
            },
            function (e) {
                e.preventDefault();
                var $this = $(this);

                $this
                    .closest('.vmenu__label')
                    .children('.program')
                    .css('display', '')
            })
    }
}

$(window).on('load resize', windowSize);