function solve(s) {
	let upper = 0;
	let lower = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] >= 'A' && s[i] <= 'Z') upper++;
		else lower++;
	}
	return upper <= lower ? s.toLowerCase() : s.toUpperCase();
}
