var weekDayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var fixHelper = function(e, ui) {
    ui.children().each(function() {
        $(this).width($(this).width());
    });
    return ui;
};

function formatDateToString(date){
	var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
	var mSeparator = (m+1) < 10 ? '/0' : '/';
	var dSeparator = d < 10 ? '/0' : '/';
	
	return (y + mSeparator + (m+1) + dSeparator + d);
}

function prettyDate(dateText) {
	var date_splitted = dateText.split("/");

	if(date_splitted.length <= 1) {
		date_splitted = dateText.split("-");
	}
	
	var month_js = (parseInt(date_splitted[1]) -1);
	var date = new Date(date_splitted[0], month_js , date_splitted[2], 0, 0, 0);
	
	return weekDayNames[date.getDay()] + ", " + date.getDate() + " de " + monthNames[date.getMonth()];
}