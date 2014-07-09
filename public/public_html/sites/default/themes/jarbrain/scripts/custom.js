jQuery(document).ready(function($){

	/* Animate for the Latest Projects block on home page */
		$('.front .view-portfolio .portfolio-item').bind('mouseenter',function(){
				var viewTitle = $(this).find('header');
				var playBtn = $(this).find('a.play_button');
				viewTitle.animate({bottom: 0});
				playBtn.animate({bottom: 5})
				$(this).one('mouseleave', function(){
					viewTitle.animate({bottom: -20});
					playBtn.animate({bottom: 25});
				});
		});
		$('.page-portfolio .view-portfolio .portfolio-item').bind('mouseenter',function(){
				var viewTitle = $(this).find('header');
				var playBtn = $(this).find('a.play_button');
				viewTitle.animate({bottom: 0});
				playBtn.animate({bottom: 5})
				$(this).one('mouseleave', function(){
					viewTitle.animate({bottom: -20});
					playBtn.animate({bottom: 25});
				});
		});
		/* Replace text of first drop down option */
		$('.page-portfolio #edit-field-client-tid-wrapper select option:first-child').text('Clients...');
		$('.page-portfolio #edit-field-related-services-tid-wrapper select option:first-child').text('Project type...');

		/* Blog archive toggle */
		$('.view-blog-archive h3').click(function(){
			$(this).toggleClass('month-active');
			var viewsRow = $(this).parent().find('.row-wrap');
			viewsRow.slideToggle('easeInOutQuad');
		});
		$('.view-blog-archive .ctools-collapsible-handle').click(function(){
			$(this).toggleClass('year-active');
		});

		// Header Navigation Transitions
		var target = $('.block-main').offset().top;
		$(window).scroll(function() {
			// alert(top);
			if ($(window).scrollTop() >= 40) {
				//alert('this is animation');
				$('#zone-menu-wrapper, #section-header').animate({
					height: '75px'
				}, {
					duration: 50,
					queue: false
				});
				$('#block-superfish-1').addClass('superfish-scroll');
				$('#section-header').addClass('header-small');
				$('.block-superfish').addClass('block-superfish-animate');
				$('.jarbrain-logo').addClass('jarbrain-logo-small');
				// $('.jarbrain-logo img').animate({
				// 	width: '65%'
				// }, {
				// 	duration: 50,
				// 	queue: false
				// });
				$('.block-superfish').animate({
					marginTop: '20px'
				}, {
					duration: 50,
					queue: false
				});
			} else if ($(window).scrollTop() < 40) {
				
				$('#zone-menu-wrapper, #section-header').animate({
					height: '90px'
				}, {
					duration: 50,
					queue: false
				});
				$('.block-superfish').animate({
					marginTop: '50px'
				}, {
					duration: 50,
					queue: false
				});

				$('#block-superfish-1').removeClass('superfish-scroll');
				$('#section-header').removeClass('header-small');
				$('.block-superfishr').removeClass('block-superfish-animate');
				$('.jarbrain-logo').removeClass('jarbrain-logo-small');

			}
		});



	});
