function sumFibs(num) {
	let count = [0, 1];
	let result = 0;
	for (let i = 2; i <= num; i++) {
		count[i] = count[i - 2] + count[i - 1];
	}
	console.log(count);
	for (let i = 0; i < count.length; i++) {
		if (count[i] % 2 !== 0 && count[i] <= num) {
			result += count[i];
		}
	}
	return result;
}

console.log('sumFibs(1): expected 0');
console.log(`Actual result: ${sumFibs(1)}`);
console.log('sumFibs(1000): expected 1785');
console.log(`Actual result: ${sumFibs(1000)}`);
console.log('sumFibs(4000000): expected 4613732');
console.log(`Actual result: ${sumFibs(4000000)}`);
console.log('sumFibs(4): expected 5');
console.log(`Actual result: ${sumFibs(4)}`);
console.log('sumFibs(75024): expected 60696');
console.log(`Actual result: ${sumFibs(75024)}`);
console.log('sumFibs(75025): expected 135721');
console.log(`Actual result: ${sumFibs(75025)}`);
