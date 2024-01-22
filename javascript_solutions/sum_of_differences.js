function sumOfDifferences(arr) {
	if (arr.length >= 2) {
		arr.sort(function (a, b) {
			return b - a;
		});
	} else {
		return 0;
	}
	let result = 0;
	for (i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] == arr[arr.length - 1]) {
			result += arr[i] - arr[i + 1];
		} else {
			console.log(result);
			result += arr[i] - arr[i + 1];
		}
	}
	return result;
}

//   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
