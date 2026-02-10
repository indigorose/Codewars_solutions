function uniteUnique(...arrays) {
	let result = [];
	for (let i = 0; i < arrays.length; i++) {
		for (let j = 0; j < arrays[i].length; j++) {
			if (!result.includes(arrays[i][j])) {
				result.push(arrays[i][j]);
			}
		}
	}

	return result;
}
