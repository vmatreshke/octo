$(document).ready(function() {

	$('.inp-arr').hover(
		function () {
			$(this).children('.hint').fadeIn();
		},
		function () {
			$(this).children('.hint').fadeOut();
		}
	);

	$('.category__selected').click(function() {
		if ($(this).hasClass('category__selected_open')){
				$(this).next('.category__drop').hide();
				$(this).removeClass('category__selected_open');
			}
			else{
				$(this).next('.category__drop').show();
				$(this).addClass('category__selected_open');
			}
		return false;
	});

	$('.category__list li a').click(function() {
		var temporary = $('.category__selected span').html();
		$('.category__selected span').html($(this).html());
		$(this).html(temporary);
		$('.category__drop').hide();
		$('.category__selected').removeClass('category__selected_open');
		return false;
	});
	$('.menu .general').click(function() {
		if ($(this).parent().parent().hasClass('open')) {
			$(this).parent().parent().removeClass('open');
			$(this).siblings('li').hide();
		}
		else{
			$(this).parent().parent().addClass('open');
			$(this).siblings('li').show();
		}
	});

	jQuery(document).click( function(event){
		if( $(event.target).closest(".menu .general").length )
		return;
		jQuery(".menu .general").siblings('li').hide();
		$('.menu').removeClass('open');
		event.stopPropagation();
	});
});