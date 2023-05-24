/* Create a function that returns the sum of only the positive integers of an array */

function positiveSum(arr) {
	// Create an empty variable to sum the integers
	count = 0;
	// Create a for loop that will check each index of the array
	for (i = 0; i < arr.length; i++) {
		// If the integer is positive, add to the count variable
		if (arr[i] > 0) {
			count += arr[i];
		}
	}
	// Return the count variable when the loop is complete.
	return count;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
