// stuff for the things...
$.getScript('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js', function() {
	$('.tip').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	});
});

function selectCity() {
	var needle = $('#city').val(),
		tmpl = '<div class="media"><div class="datebox"><small>{month}</small>{day}</div><div class="media-body">{city}</div></div>',
		month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		output = [];
		
	for (i=0;i<schedule.length;i++) {
		if(schedule[i].city == needle) {
			data = schedule[i];
			date = new Date(data.date.split('/')[2], data.date.split('/')[1] - 1, data.date.split('/')[0]);
			data.day = (date.getDate()<=9 ? '0' + date.getDate() : date.getDate());
			data.month = month_names[date.getMonth()];
			
			html = tmpl;
			for (field in data) {
				html = html.replace(RegExp("\\{" + field + "\\}", "gi"), data[field]);
			}
			output.push(html);
		}
	}
	$('#collectionDates').html( (output.join('') ? output.join('') : 'Please select a city to view upcoming collection dates.') );
}