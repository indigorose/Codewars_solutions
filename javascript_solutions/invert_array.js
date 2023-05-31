function invert(array) {
	let result = [];
	for (i = 0; i < array.length; i++) {
		if (array[i] == Math.abs(array[i])) {
			result.push(-Math.abs(array[i]));
		} else {
			result.push(Math.abs(array[i]));
		}
	}
	return result;
	// return array.map( x => x === 0 ? x : -x) - one line solution
}

console.log(invert([1, 2, 3, 4, 5]));
