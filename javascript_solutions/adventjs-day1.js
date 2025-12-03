const gifts = ['car', 'doll#arm', 'ball', '#train'];
/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
function filterGifts(gifts) {
	// Code here
	// return gifts.filter((i) => /^[A-Za-z]+$/.test(i));
	return gifts.filter((i) => !i.includes('#'));
}
