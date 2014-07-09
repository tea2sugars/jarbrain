$(function() {
	$('.accordian li:odd:gt(0)').hide();
	$('.accordian li:first').animate( {
		paddingLeft:"30px"
	} );

	$('.accordian li:odd').addClass('dimension');
	$('.accordian li:even:even').addClass('even');
	$('.accordian li:even:odd').addClass('odd');

	$('.accordian li:even').css('cursor', 'pointer');

	$('.accordian li:even').click( function() {
		var cur = $(this).next();
		var old = $('.accordian li:odd:visible');

		if ( cur.is(':visible') )
			return false;

		old.slideUp(500, 'easeInOutQuad');
		cur.stop().slideDown(500, 'easeInOutQuad');

		$(this).stop().animate( {
			paddingLeft:"30px"
		} );

		old.prev().stop().animate( {
			paddingLeft:"10px"
		} );
	} );
});