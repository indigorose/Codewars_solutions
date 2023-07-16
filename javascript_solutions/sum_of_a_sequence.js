const sequenceSum = (begin, end, step) => {
	// May the Force be with you
	let x = 0;
	for (let i = begin; i <= end; i += step) {
		x += i;
	}
	return x;
};
