function sumNoDuplicates(numList) {
	return numList
		.filter((i) => numList.filter((j) => i === j).length === 1)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
