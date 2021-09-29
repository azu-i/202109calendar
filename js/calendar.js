window.onload = function(){
	var months = ["Jan", "Fab", "Mar", "Apri", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"];

	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth();
	var currentDay = currentDate.getDate();

	// $("#js-yearAndMonth").html(currentYear + " " + month[currentMonth]);

	showCalendar(currentMonth, currentYear);

	function showCalendar(month, year){
		var firstDay = ( new Date( year, month ) ).getDay();
		var currentDate = new Date();
		var calendarBody = $("#js-tbodyCalendar");
		calendarBody.html("");


		$("#js-yearAndMonth").html(currentYear + " " + months[month]);

		var date = 1;

		for ( var i = 0; i < 6; i++ ) {
			var row = $("<tr>");

			for ( var j = 0; j < 7; j++ ) {

				if(i === 0 && j < firstDay){
					var cell = $("<td>");
					cell.append("");
					row.append(cell);
				} else if(date > daysInMonth(month, year)) {
					break;
				} else {
					var cell = $("<td>");
					cell.addClass("datePicker");
					cell.html("<span>" + date + "</span>");
					if ( date === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth() ) {
						cell.addClass("datePicker currentDay");
					}

					row.append(cell);
					date++;
				}
			}
			calendarBody.append(row);
		}
	}


	function daysInMonth(iMonth, iYear) {
		return 32 - new Date(iYear, iMonth, 32).getDate();
	}

};