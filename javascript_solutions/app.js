function take(arr, n) {
	// Your code here
	return arr.slice(0, n);
}

function whatNumberIsIt(n) {
	if (n == Number.MIN_VALUE) {
		return 'Input number is Number.MIN_VALUE';
	} else if (n == -Infinity) {
		return 'Input number is Number.NEGATIVE_INFINITY';
	} else if (n == Infinity) {
		return 'Input number is Number.POSITIVE_INFINITY';
	} else if (n == Number.MAX_VALUE) {
		('Input number is Number.MAX_VALUE');
	} else if (n == Number(n)) {
		return `Input number is ${n}`;
	} else {
		return 'Input number is Number NaN';
	}
}
