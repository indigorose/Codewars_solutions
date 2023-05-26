function points(games) {
	let x = 0;
	for (i = 0; i < games.length; i++) {
		if (Number(games[i][0]) > Number(games[i][2])) {
			x += 3;
		} else if (Number(games[i][0]) == Number(games[i][2])) {
			x += 1;
		} else {
			x += 0;
		}
	}
	return x;
}

console.log('hello world');

console.log(
	points([
		'1:1',
		'2:2',
		'3:3',
		'4:4',
		'2:2',
		'3:3',
		'4:4',
		'3:3',
		'4:4',
		'4:4',
	])
);
