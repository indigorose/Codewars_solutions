// return masked string
function maskify(cc) {
	let lastFour = cc.slice(-4);
	if (cc.length > 4) {
		return '#'.repeat(cc.length - 4) + lastFour;
	} else {
		return cc;
	}
	// return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

let cc = '4556364607935616';
// let lastFour = cc.slice(-4);

console.log(maskify(cc));

function getSum(a, b) {
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}

const twoSums = (arr, target) => {
	const pairs = [];
	const pair = {};
	for (num of arr) {
		const diff = target - num;
		if (diff in pair) {
			pairs.push([num, diff]);
		} else {
			pair[num] = true;
		}
	}
	return pairs;
};

console.log(twoSums([1, 2, 2, 3, 4], 4));

// Test arr = [1, 2, 2, 3, 4], target = 4
// Result  = [[2,2] ,[3,1]]

function sumMix(x) {
	const initialValue = 0;
	const result = x.reduce(
		(accumulator, currentValue) => accumulator + Number(currentValue),
		initialValue
	);
	return result;
}

// A mix array of string and integers that are to sum to a result

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
