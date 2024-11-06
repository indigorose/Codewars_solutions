// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
	return numbers.filter((n) => n % divisor === 0);
}
const hand = { rock: 1, paper: 2, scissors: 3 };
const result = ['Draw!', 'Player 1 won!', 'Player 2 won!'];
const rps = (p1, p2) => {};
console.log(result[hand['rock'] - hand['scissors']]);

// Get the mean of an array

function getAverage(marks) {
	//TODO : calculate the downward rounded average of the marks array
	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	return Math.floor(sum / marks.length);
}

var number = function (busStops) {
	let result = 0;
	for (let i of busStops) {
		result += i[0] - i[1];
	}
	return result;
};

console.log(
	number([
		[10, 0],
		[3, 5],
		[5, 8],
	])
);

function countBy(x, n) {
	let z = [];
	for (let i = 1; i <= n; i++) {
		z.push(i * x);
	}
	return z;
}

function zipvalidate(postcode) {
	const pattern = /^[12346][0-9]{5}$/;
	return pattern.test(postcode) && !isNaN(postcode);
}

function grow(x) {
	result = x[0];
	for (let i = 1; i < x.length; i++) {
		result *= x[i];
	}
	return result;
}
