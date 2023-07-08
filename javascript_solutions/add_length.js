function addLength(str) {
	let x = str.split(' ');
	y = [];
	for (let i = 0; i < x.length; i++) {
		y.push(`${x[i]} ${x[i].length}`);
	}
	return y;
}
console.log(addLength('apple ban'));
// return str.split(" ").map(s => `${s} ${s.length}`)
