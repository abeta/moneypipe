// stuff for the things...
$.getScript(/*'//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js'*/'/js/bootstrap.min.js', function() {
	$('.tip').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	});
});
