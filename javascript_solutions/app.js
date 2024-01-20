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

console.log(alienLanguage('My name is example'));
