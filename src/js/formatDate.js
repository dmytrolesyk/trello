function formatDate(date) {

	let moment;

	if (!arguments.length) {
		moment = new Date();
	}

	else {
		moment = new Date(date);
	}


	let day = moment.getDate().toString().length === 1 ? "0" + moment.getDate().toString() : moment.getDate().toString();
	let month = moment.getMonth().toString().length === 1 ? "0" + (moment.getMonth()+1).toString() : (moment.getMonth()+1).toString();
	let year = moment.getFullYear().toString();
	let hours = moment.getHours().toString().length === 1 ? "0" + moment.getHours().toString() : moment.getHours().toString();
	let minutes = moment.getMinutes().toString().length === 1 ? "0" + moment.getMinutes().toString() : moment.getMinutes().toString();

	let momentStr = `${day}-${month}-${year} ${hours}:${minutes}`;
	return momentStr;

}

module.exports = formatDate;