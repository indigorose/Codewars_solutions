const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDate.toLocaleDateString('en-US'));
function formatDateMMDDYYYY(date) {
	let format = date.toLocaleDateString('en-US').split('/');
	return `Formatted Date (MM/DD/YYYY): ${format[0]}/${format[1]}/${format[2]}`;
}

function formatDateLong(date) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'November',
		'December',
	];
	let longFormat = date.toLocaleDateString('en-US').split('/');
	return `Formatted Date (Month Day, Year): ${months[longFormat[0] - 1]} ${longFormat[1]}, ${longFormat[2]}`;
}

console.log(formatDateMMDDYYYY(currentDate));
