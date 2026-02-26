function countup(number) {
	let countArray = [];
	if (number < 1) {
		return [];
	} else {
		countArray = countup(number - 1);
		countArray.push(number);
		return countArray;
	}
}
console.log(countup(5));
