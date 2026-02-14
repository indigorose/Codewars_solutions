const smallestCommons = (arr) => {
	let minNum = Math.min(...arr);
	let maxNum = Math.max(...arr);
	const range = (minNum, maxNum) => {
		let arr1 = [];
		for (let i = minNum; i <= maxNum; i++) {
			arr1.push(i);
		}
		return arr1;
	};
	const gcd = (a, b) => {
		return !b ? a : gcd(b, a % b);
	};

	const lcm = (a, b) => {
		return (a * b) / gcd(a, b);
	};
	let multiple = minNum;
	range(minNum, maxNum).forEach(function (n) {
		multiple = lcm(multiple, n);
	});
	return multiple;
};

console.log('should return a number');
console.log(smallestCommons([1, 5]));
console.log('should return 60');
console.log(smallestCommons([5, 1]));
console.log('should return 2520');
console.log(smallestCommons([2, 10]));
console.log('should return 360360');
console.log(smallestCommons([1, 13]));
console.log('should return 6056820');
console.log(smallestCommons([23, 18]));
