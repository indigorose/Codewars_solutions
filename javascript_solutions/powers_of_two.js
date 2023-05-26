function powersOfTwo(n) {
	let x = [];
	let i = 0;
	while (i <= n) {
		x.push(Math.pow(2, i));
		i++;
	}
	return x;
}

console.log(powersOfTwo(4));
