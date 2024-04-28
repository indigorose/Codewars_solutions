function _if(bool, func1, func2) {
	bool ? console.log(func1()) : console.log(func2());
}
// return bool ? func1() : func2();
