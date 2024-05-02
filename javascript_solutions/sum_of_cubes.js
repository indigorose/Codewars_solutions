function sumCubes(n) {
	// ...
	let result = 0;
	for (i = 0; i < n + 1; i++) {
		result += Math.pow(i, 3);
	}
	return result;
}

// return (n * (n + 1) / 2) ** 2;
