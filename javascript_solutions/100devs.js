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
