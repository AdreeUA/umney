$('.univer-col').each(function() {
    var $parent = $('.univer-box input', this),
        $child = $('.univer-list__item input', this),
        $all = $('input', this);

    $parent.on('change', function() {
        $('.univer-col input').not(this).prop('checked', false);
    });

    $child.on('change', function() {
        $('.univer-col input').not(this).prop('checked', false);
        $parent.prop('checked', true);
    });

});

if($(".univer-card").length>0){
    var $els = $(".univer-card");
}

$(".vmenu__target").each(function(){

    console.log($els)

    if($els)
        {

            s2 = $(this).parent().position().left + $(this).width() + $(this).find(".vmenu__popup").width() + $els.position().left;

            if(s2 > ($els.position().left + $els.width() + Math.round($(this).width() / 2))) { $(this).addClass("learn-pop-fit"); }

    }

    else

    {

        s2 = $(this).parent().position().left + $(this).width() + $(this).find(".vmenu__popup").width();

    }

});

$('.vmenu__attention').hover(function() {
    $(this).closest('.item-grid__half').addClass('univer-grid-col');
}, function() {
    $(this).closest('.item-grid__half').removeClass('univer-grid-col');
});

function universitiesMobile() {

    if ($(window).width() <= '720'){

        $('.earning-cards__select').select2({
            dropdownParent: $('.earning-cards__select-wrap')
        });

        $('.univer-close').click(function () {
            var $this = $(this),
                text = $this.text();

            $this
                .closest('.item-grid')
                .toggleClass('hide');

            $this.text(
                text == "Закрыть" ? "Открыть" : "Закрыть");
        });

    }

}

$(window).on('load resize', universitiesMobile);