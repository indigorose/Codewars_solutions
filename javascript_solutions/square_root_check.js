// You're a square!

var isSquare = function (n) {
	let sqn = Math.sqrt(n);

	if (n == sqn * sqn && sqn - Math.floor(sqn) == 0) {
		return true;
	} else {
		return false;
	}
};

// return Math.sqrt(n) % 1 === 0
