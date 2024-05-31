function uniTotal(string) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		count += string.charCodeAt(i);
	}
	return count;
}
