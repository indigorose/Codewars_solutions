function findMultiples(integer, limit) {
	//your code here
	let result = [];
	for (i = 1; i <= limit; i++) {
		if (i % integer == 0) {
			result.push(i);
		}
	}
	return result;
}
