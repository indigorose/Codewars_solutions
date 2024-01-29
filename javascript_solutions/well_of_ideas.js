function well(x) {
	let counter = {};
	x.forEach((ele) => {
		if (counter[ele]) {
			counter[ele] += 1;
		} else {
			counter[ele] = 1;
		}
	});
	return counter['good'] == undefined
		? 'Fail!'
		: counter['good'] <= 2
		? 'Publish!'
		: 'I smell a series!';
}
