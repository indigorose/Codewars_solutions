let count = 0;
function cardCounter(card) {
	if ((2 <= card) & (card <= 6)) {
		count += 1;
	} else if (['A', 'K', 'Q', 'J', 10].includes(card)) {
		count -= 1;
	} else {
		count += 0;
	}
	console.log(count);
	if (count > 0) {
		return `${count} Bet`;
	} else {
		return `${count} Hold`;
	}
}
console.log(cardCounter(7));
