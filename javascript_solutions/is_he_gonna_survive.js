function hero(bullets, dragons) {
	//Get Coding!
	if (bullets % 2 == 0 && bullets >= dragons * 2) {
		return true;
	} else if (bullets >= dragons * 2) {
		return true;
	} else {
		return false;
	}
}
