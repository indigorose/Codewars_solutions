const diffArray = (arr1, arr2) => {
	let mergedArr = arr1.concat(arr2);
	return mergedArr.filter((ele) => !arr1.includes(ele) | !arr2.includes(ele));
};

console.log(
	diffArray(
		['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
		['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
	),
);

console.log(diffArray([], []));
console.log(
	diffArray(['car', 'bike', 'bus'], ['bike', 'train', 'plane', 'bus']),
);
console.log(
	diffArray(['apple', 'orange'], ['apple', 'orange', 'banana', 'grape']),
);
