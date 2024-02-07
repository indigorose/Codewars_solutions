function oddOnesOut(nums) {
	let count = {};
	for (let i = 0; i < nums.length; i++) {
		let ele = nums[i];
		if (count[ele]) {
			count[ele] += 1;
		} else {
			count[ele] = 1;
		}
	}
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (count[nums[i]] % 2 == 0) {
			result.push(nums[i]);
		}
	}
	return result;
}
