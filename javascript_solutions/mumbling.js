function accum(s) {
	let result = [];
	for (i = 0; i < s.length; i++) {
		result.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());
	}
	return result.join('-');
	// return s.split('').map((x, i) => (x.toUpperCase() + x.repeat(i).toLowerCase())).join('-');
}

console.log(accum('ZpglnRxqenU'));
