$(document).ready(function() {
	

	$('.inp-arr').hover(
		function () {
			$(this).children('.hint').fadeIn();
		},
		function () {
			$(this).children('.hint').fadeOut();
		}
	);
	$(window).resize(function(event) {
		//scroll[0].updateScrollBar();
		alert('a');
		$.baron.u();
	});

	$('.t__col1').click(function (){

		$(this).children('input').attr("checked", !$(this).children('input').attr("checked"));

	});

//	$('.category__selected').click(function() {
//		if ($(this).hasClass('category__selected_open')){
//				$(this).next('.category__drop').hide();
//				$(this).removeClass('category__selected_open');
//			}
//			else{
//				$(this).next('.category__drop').show();
//				$(this).addClass('category__selected_open');
//			}
//		return false;
//	});
//
//	$('.category__list li a').click(function() {
//		var temporary = $('.category__selected span').html();
//		$('.category__selected span').html($(this).html());
//		$(this).html(temporary);
//		$('.category__drop').hide();
//		$('.category__selected').removeClass('category__selected_open');
//		return false;
//	});

//	$('.menu .general').click(function() {
//		if ($(this).parent().css('position') === 'absolute'){
//			if ($(this).parent().parent().hasClass('open')) {$(this).parent().parent().removeClass('open');}
//			else{$(this).parent().parent().addClass('open');}
//		}
//		else{$(this).parent().parent().removeClass('open');}
//	});
//
//	$('.menu li').click(function(){
//		if (!$(this).hasClass('general')){$(this).parent().parent().removeClass('open');}
//	});

	params =  {
		scroller: '.scroller',
		container: '.container',
		bar: '.scroller__bar'
	};
	// var scroll = baron($('.t'),params);
	var scroll = baron(params);

	jQuery(document).click( function(event){
		if( $(event.target).closest(".menu .general").length )
		return;
		$('.menu').removeClass('open');
		event.stopPropagation();
	});
});