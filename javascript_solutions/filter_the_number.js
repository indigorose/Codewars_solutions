var filterString = function (value) {
	var x = value.split('');
	var y = '';
	for (var i = 0; i < x.length; i++) {
		if (!isNaN(parseInt(x[i]))) {
			y += x[i];
		}
	}
	return parseInt(y);
};
/* var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
}
*/
