const sumPrimes = (num) => {
	let numbers = Array.from({ length: num }, (v, k) => k + 1);
	const isPrime = (n) => {
		if (n < 2) {
			return false;
		}
		for (let i = 2; i < n; i++) {
			if (n % i === 0) return false;
		}
		return true;
	};
	let primes = numbers.filter((n) => isPrime(n));
	return primes.reduce((acc, cur) => acc + cur, 0);
};
console.log('should return 17');
console.log(sumPrimes(10));
console.log('should return 10');
console.log(sumPrimes(5));
console.log('should return 2');
console.log(sumPrimes(2));
console.log('should return 0');
console.log(sumPrimes(0));
console.log('should return 73156');
console.log(sumPrimes(977));
