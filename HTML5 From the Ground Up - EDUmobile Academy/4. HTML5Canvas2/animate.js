$(document).ready(function() {
	$("#stage").on('click', function() {
		$("img[alt='Cloud']").animate({
			left: '50%'
		}, 9000);
	});
});