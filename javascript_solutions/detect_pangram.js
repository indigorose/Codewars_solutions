function isPangram(string) {
	let x = string
		.replace(/[^\w\s]|\d/g, '')
		.split(' ')
		.join('');
	let count = {};
	for (let i = 0; i < x.length; i++) {
		let ele = x[i].toLowerCase();
		if (count[ele]) {
			count[ele] += 1;
		} else {
			count[ele] = 1;
		}
	}

	let keysArray = Object.keys(count);
	return keysArray.length === 26;
}
