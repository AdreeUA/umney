$('.sort__link, .sort__linked').on('click', function(e) {
	e.preventDefault();

	var $this = $(this);
	var href = $this.attr('href');

	if (href) {
        $('.sort__link, .sort__linked').removeClass('active');
		$this.addClass('active');
		$(href).addClass('active').siblings().removeClass('active');
        $(window).trigger('resize');
	}
});

$(".js-sort-direction-link").on("click", function(e) {
	e.preventDefault();

	$(".js-sort-direction").fadeToggle("fast");
	$(this).removeClass("active").toggleClass("sort-direction__link_active");
});

(function($){
	$(window).on("load",function(){
		$(".js-direction-scroll").mCustomScrollbar({
			theme: "dark"
		});
	});
})(jQuery);