function strCount(str, letter) {
	//code here
	let count = 0;
	for (i = 0; i < str.length; i++) {
		if (str[i] == letter) {
			count += 1;
		}
	}
	return count;
}
