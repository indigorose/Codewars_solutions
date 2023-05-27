class SmallestIntegerFinder {
	findSmallestInt(args) {
		// let x = args.sort(function (a, b) {
		// 	return a - b;
		// });
		// return x[0];
		// Alternative Solution
		return Math.min.apply(null, args);
		// Possible best practice
		// return Math.min(...args)
	}
}
