function differenceInAges(ages) {
	let result = [];
	let minVal = Math.min(...ages);
	let maxVal = Math.max(...ages);
	result.push(minVal);
	result.push(maxVal);
	result.push(maxVal - minVal);
	return result;
}
