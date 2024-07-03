function howMuchILoveYou(nbPetals) {
	const petals = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	];
	switch (nbPetals % 6) {
		case 1:
			return petals[0];
		case 2:
			return petals[1];
		case 3:
			return petals[2];
		case 4:
			return petals[3];
		case 5:
			return petals[4];
		default:
			return petals[5];
	}
}
