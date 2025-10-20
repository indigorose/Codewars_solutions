function howMuchWater(water, load, clothes) {
	// Insert your brilliant code here
	let formula = water * 1.1 ** (clothes - load);
	if (clothes > load * 2) {
		return 'Too much clothes';
	} else if (clothes < load) {
		return 'Not enough clothes';
	} else {
		return parseFloat(formula.toFixed(2));
	}
}
