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
