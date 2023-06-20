function arrayPlusArray(arr1, arr2) {
	let x = arr1.concat(arr2);
	let sum = 0;
	for (let i = 0; i < x.length; i++) {
		sum += x[i];
	}
	return sum;
}
// alternative return arr1.concat(arr2).reduce((acc, cur) => acc + cur)
