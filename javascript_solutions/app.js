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

function colorOf(r, g, b) {
	w = r.toString(16);
	if (w.length < 1) {
		w = '0' + w;
	}
	e = g.toString(16);
	if (e.length <= 1) {
		e = '0' + e;
		console.log(e);
	}
	v = b.toString(16);
	if (v.length <= 1) {
		v = '0' + v;
		console.log(e);
	}

	return `#${w}${e}${v}`;
}

// console.log(colorOf(255, 0, 0));
function splitAndMerge(string, separator) {
	let split = string.split(' ');
	let result = [];
	for (let word in split) {
		result.push(split[word].split('').join(separator));
	}
	return result.join(' ');
}

// console.log(splitAndMerge('My name is John', ' '));

function alienLanguage(str) {
	let words = str.toUpperCase().split(' ');
	for (let i = 0; i < words.length; i++) {
		let replaceLetter = words[i][words[i].length - 1].toLowerCase();
		words[i] = words[i].slice(0, -1) + replaceLetter;
	}
	return words.join(' ');
}

// console.log(alienLanguage('My name is example'));

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

console.log(sumOfDifferences([1, 2, 10]));

function remainder(n, m) {
	// Divide the larger argument by the smaller argument and return the remainder
	return n > m ? n % m : m % n;
}

function nthChar(words) {
	result = [];
	if (words.length == 0) {
		return '';
	} else {
		for (let i = 0; i < words.length; i++) {
			result.push(words[i].charAt(i));
		}
	}
	return result.join('');
}

function include(arr, item) {
	// ...
	return arr.includes(item);
}

function well(x) {
	let counter = {};
	x.forEach((ele) => {
		if (counter[ele]) {
			counter[ele] += 1;
		} else {
			counter[ele] = 1;
		}
	});
	console.log(counter);
	console.log(counter['good']);
	return counter['good'] == 0
		? 'Fail'
		: 0 < counter['good'] <= 2
		? 'Publish!'
		: 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad']));

function divisibleBy(numbers, divisor) {
	result = [];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % divisor == 0) {
			result.push(numbers[i]);
		}
	}
	return result;
}
