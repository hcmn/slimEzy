$('.nav-pills').scrollspy()
$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
});