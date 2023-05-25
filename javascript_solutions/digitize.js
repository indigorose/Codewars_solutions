// Convert any number into a reversed array

function digitize(n) {
	x = Array.from(String(n), Number);
	return x.reverse();
}

console.log(digitize(35231));
