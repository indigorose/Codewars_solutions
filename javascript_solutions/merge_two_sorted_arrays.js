function mergeArrays(arr1, arr2) {
	let lst = arr1.concat(arr2);
	let lst2 = lst.sort(function (a, b) {
		return a - b;
	});
	lst2 = lst2.filter((value, index) => lst2.indexOf(value) === index);
	return lst2;
}
// function mergeArrays(arr1, arr2) {
// 	return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
// }
