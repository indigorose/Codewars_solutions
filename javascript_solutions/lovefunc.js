function lovefunc(flower1, flower2) {
	// moment of truth
	if (flower1 % 2 == 0 && flower2 % 2 != 0) {
		return true;
	} else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
		return true;
	} else {
		return false;
	}
}
// Opposites Attract
// return flower1 % 2 != flower2 % 2
