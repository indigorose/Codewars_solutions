function getIndexToIns(arr, num) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sortedArr = arr.sort((a, b) => a - b);
		console.log(sortedArr);
		let result = sortedArr.findIndex(
			(element) => (element > num) | (element == num),
		);
		if (result === -1) {
			return sortedArr.length;
		} else {
			return result;
		}
	}
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5) + ' should be 1');
console.log(getIndexToIns([20, 3, 5], 19) + ' should be 2');
console.log(getIndexToIns([10, 20, 30, 40, 50], 35) + ' should be 3');
console.log(getIndexToIns([10, 20, 30, 40, 50], 30) + ' should be 2');
console.log(getIndexToIns([5, 3, 20, 3], 5) + ' should return 2');
console.log(getIndexToIns([3, 10, 5], 11) + ' should return 3');
console.log(getIndexToIns([], 5) + ' should return 0 ');
