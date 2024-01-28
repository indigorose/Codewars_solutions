function alphabetWar(fight) {
	let war = fight.split('');
	let left = 0;
	let right = 0;
	let lside = { w: 4, p: 3, b: 2, s: 1 };
	let rside = { m: 4, q: 3, d: 2, z: 1 };
	for (let i = 0; i < war.length; i++) {
		if (lside.hasOwnProperty(war[i])) {
			left += lside[war[i]];
		} else if (rside.hasOwnProperty(war[i])) {
			right += rside[war[i]];
		} else {
			continue;
		}
	}

	return left < right
		? 'Right side wins!'
		: left > right
		? 'Left side wins!'
		: "Let's fight again!";
}
