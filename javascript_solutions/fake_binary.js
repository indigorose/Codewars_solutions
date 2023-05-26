function fakeBin(x) {
	let y = x.split('');
	let z = [];
	console.log(y);
	for (let i = 0; i < y.length; i++) {
		if (Number(y[i]) >= 5) {
			z.push(1);
			console.log(z);
		} else {
			z.push(0);
		}
	}
	console.log(z.join(''));
}

console.log(fakeBin('45385593107843568'));
