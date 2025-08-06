Array.prototype.square = function () {
	return this.map((x) => x ** 2);
};

Array.prototype.cube = function () {
	return this.map((x) => x ** 3);
};

Array.prototype.average = function () {
	if (this.length === 0) return NaN;
	const sum = this.reduce((acc, val) => acc + val, 0);
	return sum / this.length;
};

Array.prototype.sum = function () {
	if (this.length === 0) return NaN;
	const sum = this.reduce((acc, val) => acc + val, 0);
	return sum;
};

Array.prototype.even = function () {
	if (this.length === 0) return NaN;
	const even = this.filter((x) => x % 2 === 0);
	return even;
};

Array.prototype.odd = function () {
	if (this.length === 0) return NaN;
	const odd = this.filter((x) => x % 2 != 0);
	return odd;
};
