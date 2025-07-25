function roundToNext5(n) {
	// ...
	while (n % 5 != 0) {
		n += 1;
	}
	return n;
}
